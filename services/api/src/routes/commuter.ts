import { Prisma } from "@prisma/client";
import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import type { AuthedRequest } from "../middleware/auth.js";
import { classifyFreshness, distanceKm, estimateEtaMinutes } from "../services/location.js";

const nearbySchema = z.object({
  lat: z.coerce.number().min(-90).max(90),
  lng: z.coerce.number().min(-180).max(180),
  radiusKm: z.coerce.number().min(0.2).max(20).default(5)
});

const createBookingSchema = z.object({
  tripId: z.string().min(1),
  seatNumbers: z.array(z.string().min(2).max(4)).min(1).max(6),
  paymentType: z.enum(["cash", "digital"])
});

const payBookingSchema = z.object({
  reference: z.string().min(4).optional()
});

function generateSeatLabels(capacity: number): string[] {
  const letters = ["A", "B", "C", "D"];
  return Array.from({ length: capacity }, (_, index) => {
    const row = Math.floor(index / 4) + 1;
    const col = index % 4;
    return `${row}${letters[col]}`;
  });
}

export const commuterRouter = Router();

commuterRouter.get("/routes", async (_req, res) => {
  const routes = await prisma.route.findMany({
    where: { active: true },
    include: {
      originStop: true,
      destinationStop: true
    },
    orderBy: { code: "asc" }
  });
  res.json(routes);
});

commuterRouter.get("/routes/:routeId/stops", async (req, res) => {
  const routeStops = await prisma.routeStop.findMany({
    where: { routeId: req.params.routeId },
    include: { stop: true },
    orderBy: { sequence: "asc" }
  });
  res.json(routeStops);
});

commuterRouter.get("/nearby-vehicles", async (req, res) => {
  const parsed = nearbySchema.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid nearby query", errors: parsed.error.flatten() });
    return;
  }

  const activeTrips = await prisma.trip.findMany({
    where: { status: "active" },
    include: {
      route: {
        include: {
          routeStops: {
            include: { stop: true },
            orderBy: { sequence: "asc" }
          }
        }
      },
      vehicle: true,
      locations: {
        orderBy: { capturedAt: "desc" },
        take: 1
      }
    }
  });

  const nearby = activeTrips
    .map((trip) => {
      const lastLocation = trip.locations[0];
      if (!lastLocation) return null;

      const distanceFromUserKm = distanceKm(
        parsed.data.lat,
        parsed.data.lng,
        lastLocation.lat,
        lastLocation.lng
      );
      if (distanceFromUserKm > parsed.data.radiusKm) return null;

      const freshness = classifyFreshness(lastLocation.capturedAt);
      const nextStop = trip.route.routeStops[0]?.stop ?? null;
      const distanceToNextStopKm = nextStop
        ? distanceKm(lastLocation.lat, lastLocation.lng, nextStop.lat, nextStop.lng)
        : 0;
      const eta = estimateEtaMinutes({
        distanceToStopKm: distanceToNextStopKm,
        speedKph: lastLocation.speedKph,
        freshness
      });

      return {
        tripId: trip.id,
        route: {
          id: trip.route.id,
          code: trip.route.code,
          name: trip.route.name
        },
        vehicle: {
          id: trip.vehicle.id,
          plateNo: trip.vehicle.plateNo,
          category: trip.vehicle.category
        },
        location: freshness === "stale"
          ? null
          : {
              lat: lastLocation.lat,
              lng: lastLocation.lng,
              capturedAt: lastLocation.capturedAt
            },
        locationStatus: freshness,
        etaMinutes: eta.etaMinutes,
        etaConfidence: eta.confidence,
        distanceFromUserKm: Number(distanceFromUserKm.toFixed(2)),
        message: freshness === "stale" ? "Location temporarily unavailable." : null
      };
    })
    .filter((item) => item !== null);

  res.json(nearby);
});

commuterRouter.get("/trips/:tripId/seats", async (req, res) => {
  const trip = await prisma.trip.findUnique({
    where: { id: req.params.tripId },
    include: {
      vehicle: true,
      bookings: {
        where: { status: { in: ["reserved", "boarded"] } },
        include: { selectedSeats: true }
      }
    }
  });

  if (!trip) {
    res.status(404).json({ message: "Trip not found." });
    return;
  }

  if (trip.vehicle.category !== "provincial_bus") {
    res.status(400).json({ message: "Seat map is only available for provincial bus trips." });
    return;
  }

  const seatLabels = generateSeatLabels(trip.vehicle.capacity);
  const bookedSet = new Set(trip.bookings.flatMap((booking) => booking.selectedSeats.map((s) => s.seatNumber)));
  const seats = seatLabels.map((label) => ({
    seatNumber: label,
    status: bookedSet.has(label) ? "booked" : "available"
  }));

  res.json({
    tripId: trip.id,
    vehicleId: trip.vehicleId,
    vehicleCapacity: trip.vehicle.capacity,
    seats
  });
});

commuterRouter.post("/bookings", async (req: AuthedRequest, res) => {
  const parsed = createBookingSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid booking payload", errors: parsed.error.flatten() });
    return;
  }

  const trip = await prisma.trip.findUnique({
    where: { id: parsed.data.tripId },
    include: { vehicle: true }
  });
  if (!trip || trip.status !== "active") {
    res.status(404).json({ message: "Active trip not found." });
    return;
  }

  if (trip.vehicle.category !== "provincial_bus") {
    res.status(400).json({ message: "Seat reservation is only for provincial bus trips." });
    return;
  }

  const availableSeatLabels = new Set(generateSeatLabels(trip.vehicle.capacity));
  const requestedSeats = Array.from(new Set(parsed.data.seatNumbers.map((seat) => seat.toUpperCase())));
  const invalidSeat = requestedSeats.find((seat) => !availableSeatLabels.has(seat));

  if (invalidSeat) {
    res.status(400).json({ message: `Invalid seat number: ${invalidSeat}` });
    return;
  }

  const farePerSeat = 180;
  const fareTotal = requestedSeats.length * farePerSeat;

  try {
    const booking = await prisma.$transaction(async (tx) => {
      const seatConflicts = await tx.bookingSeat.findMany({
        where: {
          tripId: trip.id,
          seatNumber: { in: requestedSeats },
          booking: { status: { in: ["reserved", "boarded"] } }
        }
      });

      if (seatConflicts.length > 0) {
        const conflictSeats = seatConflicts.map((item) => item.seatNumber);
        throw new Error(`Seats already booked: ${conflictSeats.join(", ")}`);
      }

      return tx.booking.create({
        data: {
          tripId: trip.id,
          commuterUserId: req.auth!.userId,
          seats: requestedSeats.length,
          fareTotal: new Prisma.Decimal(fareTotal),
          paymentType: parsed.data.paymentType,
          paymentStatus: parsed.data.paymentType === "cash" ? "pending" : "pending",
          status: "reserved",
          selectedSeats: {
            create: requestedSeats.map((seatNumber) => ({ tripId: trip.id, seatNumber }))
          }
        },
        include: { selectedSeats: true }
      });
    });

    res.status(201).json({
      bookingId: booking.id,
      tripId: booking.tripId,
      seats: booking.selectedSeats.map((seat) => seat.seatNumber),
      fareTotal: booking.fareTotal,
      paymentType: booking.paymentType,
      paymentStatus: booking.paymentStatus,
      status: booking.status
    });
  } catch (error) {
    res.status(409).json({
      message: error instanceof Error ? error.message : "Could not create booking."
    });
  }
});

commuterRouter.post("/bookings/:bookingId/pay", async (req: AuthedRequest, res) => {
  const parsed = payBookingSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid payment payload", errors: parsed.error.flatten() });
    return;
  }

  const booking = await prisma.booking.findUnique({
    where: { id: req.params.bookingId },
    include: { selectedSeats: true }
  });

  if (!booking || booking.commuterUserId !== req.auth!.userId) {
    res.status(404).json({ message: "Booking not found." });
    return;
  }

  if (booking.paymentType !== "digital") {
    res.status(400).json({ message: "Cash bookings are paid during boarding or counter payment." });
    return;
  }

  const paid = await prisma.booking.update({
    where: { id: booking.id },
    data: { paymentStatus: "paid" },
    include: { selectedSeats: true }
  });

  res.json({
    bookingId: paid.id,
    paymentStatus: paid.paymentStatus,
    paymentReference: parsed.data.reference ?? "DEV-PAYMENT-OK",
    seats: paid.selectedSeats.map((seat) => seat.seatNumber)
  });
});

commuterRouter.get("/bookings", async (req: AuthedRequest, res) => {
  const bookings = await prisma.booking.findMany({
    where: { commuterUserId: req.auth!.userId },
    include: {
      trip: {
        include: {
          route: { select: { code: true, name: true } },
          vehicle: { select: { plateNo: true, category: true } }
        }
      },
      selectedSeats: true
    },
    orderBy: { createdAt: "desc" }
  });

  res.json(bookings.map((booking) => ({
    bookingId: booking.id,
    tripId: booking.tripId,
    routeCode: booking.trip.route.code,
    routeName: booking.trip.route.name,
    vehiclePlateNo: booking.trip.vehicle.plateNo,
    seats: booking.selectedSeats.map((seat) => seat.seatNumber),
    fareTotal: booking.fareTotal,
    paymentType: booking.paymentType,
    paymentStatus: booking.paymentStatus,
    status: booking.status,
    createdAt: booking.createdAt
  })));
});
