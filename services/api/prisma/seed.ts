import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const stops = await Promise.all([
    prisma.stop.upsert({
      where: { id: "seed-sm-city-cebu" },
      update: {},
      create: {
        id: "seed-sm-city-cebu",
        name: "SM City Cebu",
        municipality: "Cebu City",
        lat: 10.3119,
        lng: 123.9189
      }
    }),
    prisma.stop.upsert({
      where: { id: "seed-ayala-center-cebu" },
      update: {},
      create: {
        id: "seed-ayala-center-cebu",
        name: "Ayala Center Cebu",
        municipality: "Cebu City",
        lat: 10.3173,
        lng: 123.9054
      }
    }),
    prisma.stop.upsert({
      where: { id: "seed-carcar-terminal" },
      update: {},
      create: {
        id: "seed-carcar-terminal",
        name: "Carcar Terminal",
        municipality: "Carcar",
        lat: 10.1065,
        lng: 123.6408
      }
    })
  ]);

  await prisma.route.upsert({
    where: { code: "JEEP-ITP-01" },
    update: {},
    create: {
      code: "JEEP-ITP-01",
      name: "SM City Cebu - Ayala Loop",
      originStopId: stops[0].id,
      destinationStopId: stops[1].id,
      routeStops: {
        create: [
          { stopId: stops[0].id, sequence: 1, scheduledOffsetMin: 0 },
          { stopId: stops[1].id, sequence: 2, scheduledOffsetMin: 12 }
        ]
      }
    }
  });

  await prisma.vehicle.upsert({
    where: { plateNo: "GAB-1021" },
    update: {},
    create: {
      plateNo: "GAB-1021",
      category: "modern_jeepney",
      capacity: 24
    }
  });

  const busVehicle = await prisma.vehicle.upsert({
    where: { plateNo: "BUS-7712" },
    update: {},
    create: {
      plateNo: "BUS-7712",
      category: "provincial_bus",
      capacity: 44
    }
  });

  const driverUser = await prisma.user.upsert({
    where: { phone: "09990000001" },
    update: {},
    create: {
      role: "driver",
      name: "Sample Driver",
      phone: "09990000001",
      passwordHash: "demo-password-hash"
    }
  });

  await prisma.driver.upsert({
    where: { userId: driverUser.id },
    update: {},
    create: {
      userId: driverUser.id,
      licenseNo: "N01-23-123456"
    }
  });

  await prisma.user.upsert({
    where: { phone: "09990000002" },
    update: {},
    create: {
      role: "commuter",
      name: "Sample Commuter",
      phone: "09990000002",
      passwordHash: "demo-password-hash"
    }
  });

  const busRoute = await prisma.route.upsert({
    where: { code: "BUS-CEB-12" },
    update: {},
    create: {
      code: "BUS-CEB-12",
      name: "Cebu South Terminal - Carcar Terminal",
      originStopId: stops[1].id,
      destinationStopId: stops[2].id,
      routeStops: {
        create: [
          { stopId: stops[1].id, sequence: 1, scheduledOffsetMin: 0 },
          { stopId: stops[2].id, sequence: 2, scheduledOffsetMin: 60 }
        ]
      }
    }
  });

  const driverProfile = await prisma.driver.findUniqueOrThrow({
    where: { userId: driverUser.id }
  });

  const activeBusTrip = await prisma.trip.findFirst({
    where: {
      routeId: busRoute.id,
      vehicleId: busVehicle.id,
      driverId: driverProfile.id,
      status: "active"
    }
  });

  if (!activeBusTrip) {
    const createdTrip = await prisma.trip.create({
      data: {
        routeId: busRoute.id,
        vehicleId: busVehicle.id,
        driverId: driverProfile.id,
        status: "active",
        startedAt: new Date()
      }
    });

    await prisma.tripLocation.create({
      data: {
        tripId: createdTrip.id,
        capturedAt: new Date(),
        lat: 10.3027,
        lng: 123.8922,
        speedKph: 30,
        headingDeg: 165,
        accuracyM: 12
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
