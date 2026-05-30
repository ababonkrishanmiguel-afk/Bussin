import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import type { AuthedRequest } from "../middleware/auth.js";

const startTripSchema = z.object({
  routeId: z.string().min(1),
  vehicleId: z.string().min(1)
});

const locationSchema = z.object({
  capturedAt: z.string().datetime().optional(),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  speedKph: z.number().min(0).max(180).nullable().optional(),
  headingDeg: z.number().min(0).max(360).nullable().optional(),
  accuracyM: z.number().min(0).max(500).nullable().optional(),
  batteryPct: z.number().int().min(0).max(100).optional(),
  signalLevel: z.enum(["good", "weak", "none"]).optional()
});

const seatAvailabilitySchema = z.object({
  seatsAvailable: z.number().int().min(0)
});

export const driverRouter = Router();

driverRouter.post("/trips/start", async (req: AuthedRequest, res) => {
  const parsed = startTripSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid start trip payload", errors: parsed.error.flatten() });
    return;
  }

  const driverProfile = await prisma.driver.findFirst({
    where: { userId: req.auth!.userId, active: true }
  });
  if (!driverProfile) {
    res.status(404).json({ message: "Active driver profile not found." });
    return;
  }

  const activeTrip = await prisma.trip.findFirst({
    where: { driverId: driverProfile.id, status: "active" }
  });
  if (activeTrip) {
    res.status(409).json({ message: "Driver already has an active trip.", tripId: activeTrip.id });
    return;
  }

  const trip = await prisma.trip.create({
    data: {
      routeId: parsed.data.routeId,
      vehicleId: parsed.data.vehicleId,
      driverId: driverProfile.id,
      status: "active",
      startedAt: new Date()
    }
  });

  res.status(201).json(trip);
});

driverRouter.post("/trips/:tripId/location", async (req, res) => {
  const parsed = locationSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid location payload", errors: parsed.error.flatten() });
    return;
  }

  const trip = await prisma.trip.findUnique({ where: { id: req.params.tripId } });
  if (!trip || trip.status !== "active") {
    res.status(404).json({ message: "Active trip not found." });
    return;
  }

  await prisma.tripLocation.create({
    data: {
      tripId: trip.id,
      capturedAt: parsed.data.capturedAt ? new Date(parsed.data.capturedAt) : new Date(),
      lat: parsed.data.lat,
      lng: parsed.data.lng,
      speedKph: parsed.data.speedKph ?? null,
      headingDeg: parsed.data.headingDeg ?? null,
      accuracyM: parsed.data.accuracyM ?? null
    }
  });

  if (parsed.data.batteryPct !== undefined && parsed.data.batteryPct < 15) {
    await prisma.tripHealthEvent.create({
      data: { tripId: trip.id, type: "battery_low", value: String(parsed.data.batteryPct) }
    });
  }

  if (parsed.data.signalLevel && parsed.data.signalLevel !== "good") {
    await prisma.tripHealthEvent.create({
      data: { tripId: trip.id, type: "signal_issue", value: parsed.data.signalLevel }
    });
  }

  res.status(202).json({ accepted: true });
});

driverRouter.post("/trips/:tripId/seat-availability", async (req, res) => {
  const parsed = seatAvailabilitySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid seat payload", errors: parsed.error.flatten() });
    return;
  }

  const trip = await prisma.trip.findUnique({
    where: { id: req.params.tripId },
    include: { vehicle: true }
  });
  if (!trip || trip.status !== "active") {
    res.status(404).json({ message: "Active trip not found." });
    return;
  }

  if (trip.vehicle.category !== "provincial_bus") {
    res.status(400).json({ message: "Seat updates are only supported for provincial bus trips." });
    return;
  }

  await prisma.tripHealthEvent.create({
    data: {
      tripId: trip.id,
      type: "seat_availability",
      value: String(parsed.data.seatsAvailable)
    }
  });

  res.status(202).json({ accepted: true });
});

driverRouter.post("/trips/:tripId/end", async (req, res) => {
  const trip = await prisma.trip.findUnique({ where: { id: req.params.tripId } });
  if (!trip || trip.status !== "active") {
    res.status(404).json({ message: "Active trip not found." });
    return;
  }

  const ended = await prisma.trip.update({
    where: { id: trip.id },
    data: {
      status: "ended",
      endedAt: new Date()
    }
  });

  res.json(ended);
});
