import { VehicleCategory } from "@prisma/client";
import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

const createStopSchema = z.object({
  name: z.string().min(2),
  municipality: z.string().min(2),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180)
});

const createRouteSchema = z.object({
  code: z.string().min(2),
  name: z.string().min(3),
  originStopId: z.string().min(1),
  destinationStopId: z.string().min(1),
  stopIds: z.array(z.string().min(1)).min(2)
});

const createVehicleSchema = z.object({
  plateNo: z.string().min(3),
  category: z.nativeEnum(VehicleCategory),
  capacity: z.number().int().positive()
});

const createDriverSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  passwordHash: z.string().min(6),
  licenseNo: z.string().min(5)
});

export const adminRouter = Router();

adminRouter.get("/stops", async (_req, res) => {
  const stops = await prisma.stop.findMany({ orderBy: [{ municipality: "asc" }, { name: "asc" }] });
  res.json(stops);
});

adminRouter.post("/stops", async (req, res) => {
  const parsed = createStopSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid stop payload", errors: parsed.error.flatten() });
    return;
  }

  const stop = await prisma.stop.create({ data: parsed.data });
  res.status(201).json(stop);
});

adminRouter.get("/routes", async (_req, res) => {
  const routes = await prisma.route.findMany({
    include: {
      originStop: true,
      destinationStop: true,
      routeStops: { include: { stop: true }, orderBy: { sequence: "asc" } }
    },
    orderBy: { code: "asc" }
  });

  res.json(routes);
});

adminRouter.post("/routes", async (req, res) => {
  const parsed = createRouteSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid route payload", errors: parsed.error.flatten() });
    return;
  }

  const { stopIds, ...routePayload } = parsed.data;
  const uniqueStopIds = Array.from(new Set(stopIds));
  const stopsFound = await prisma.stop.count({ where: { id: { in: uniqueStopIds }, active: true } });

  if (stopsFound !== uniqueStopIds.length) {
    res.status(400).json({ message: "One or more stop IDs are invalid or inactive." });
    return;
  }

  const route = await prisma.route.create({
    data: {
      ...routePayload,
      routeStops: {
        create: stopIds.map((stopId, index) => ({
          stopId,
          sequence: index + 1,
          scheduledOffsetMin: index * 4
        }))
      }
    },
    include: { routeStops: { orderBy: { sequence: "asc" } } }
  });

  res.status(201).json(route);
});

adminRouter.get("/vehicles", async (_req, res) => {
  const vehicles = await prisma.vehicle.findMany({ orderBy: { plateNo: "asc" } });
  res.json(vehicles);
});

adminRouter.post("/vehicles", async (req, res) => {
  const parsed = createVehicleSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid vehicle payload", errors: parsed.error.flatten() });
    return;
  }

  const vehicle = await prisma.vehicle.create({ data: parsed.data });
  res.status(201).json(vehicle);
});

adminRouter.get("/drivers", async (_req, res) => {
  const drivers = await prisma.driver.findMany({
    include: { user: { select: { id: true, name: true, phone: true, status: true } } },
    orderBy: { createdAt: "desc" }
  });
  res.json(drivers);
});

adminRouter.post("/drivers", async (req, res) => {
  const parsed = createDriverSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid driver payload", errors: parsed.error.flatten() });
    return;
  }

  const driver = await prisma.driver.create({
    data: {
      licenseNo: parsed.data.licenseNo,
      user: {
        create: {
          role: "driver",
          name: parsed.data.name,
          phone: parsed.data.phone,
          passwordHash: parsed.data.passwordHash
        }
      }
    },
    include: { user: { select: { id: true, name: true, phone: true } } }
  });

  res.status(201).json(driver);
});

adminRouter.get("/live-trips", async (_req, res) => {
  const trips = await prisma.trip.findMany({
    where: { status: "active" },
    include: {
      route: { select: { id: true, code: true, name: true } },
      vehicle: { select: { id: true, plateNo: true, category: true } },
      driver: { include: { user: { select: { name: true } } } },
      locations: { orderBy: { capturedAt: "desc" }, take: 1 }
    },
    orderBy: { startedAt: "desc" }
  });
  res.json(trips);
});
