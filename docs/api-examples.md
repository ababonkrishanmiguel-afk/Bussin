# Bussin API Examples (MVP Dev)

Base URL: `http://localhost:4000`

## Health

```bash
curl http://localhost:4000/health
```

## Admin: Create Stop

```bash
curl -X POST http://localhost:4000/admin/stops \
  -H "Content-Type: application/json" \
  -H "x-user-id: admin-seed-1" \
  -H "x-user-role: admin" \
  -d "{\"name\":\"South Bus Terminal\",\"municipality\":\"Cebu City\",\"lat\":10.2937,\"lng\":123.8848}"
```

## Admin: List Stops

```bash
curl http://localhost:4000/admin/stops \
  -H "x-user-id: admin-seed-1" \
  -H "x-user-role: admin"
```

## Driver: Start Trip

```bash
curl -X POST http://localhost:4000/driver/trips/start \
  -H "Content-Type: application/json" \
  -H "x-user-id: <driver-user-id>" \
  -H "x-user-role: driver" \
  -d "{\"routeId\":\"<route-id>\",\"vehicleId\":\"<vehicle-id>\"}"
```

## Driver: Send GPS Ping

```bash
curl -X POST http://localhost:4000/driver/trips/<trip-id>/location \
  -H "Content-Type: application/json" \
  -H "x-user-id: <driver-user-id>" \
  -H "x-user-role: driver" \
  -d "{\"lat\":10.3157,\"lng\":123.8854,\"speedKph\":24,\"accuracyM\":15,\"batteryPct\":72,\"signalLevel\":\"good\"}"
```

## Commuter: Nearby Vehicles

```bash
curl "http://localhost:4000/commuter/nearby-vehicles?lat=10.3157&lng=123.8854&radiusKm=5" \
  -H "x-user-id: commuter-dev-1" \
  -H "x-user-role: commuter"
```

## Commuter: Trip Seat Map (Provincial Bus)

```bash
curl "http://localhost:4000/commuter/trips/<trip-id>/seats" \
  -H "x-user-id: commuter-dev-1" \
  -H "x-user-role: commuter"
```

## Commuter: Create Booking with Selected Seats

```bash
curl -X POST "http://localhost:4000/commuter/bookings" \
  -H "Content-Type: application/json" \
  -H "x-user-id: <commuter-user-id>" \
  -H "x-user-role: commuter" \
  -d "{\"tripId\":\"<trip-id>\",\"seatNumbers\":[\"2A\",\"2B\"],\"paymentType\":\"digital\"}"
```

## Commuter: Confirm Digital Payment

```bash
curl -X POST "http://localhost:4000/commuter/bookings/<booking-id>/pay" \
  -H "Content-Type: application/json" \
  -H "x-user-id: <commuter-user-id>" \
  -H "x-user-role: commuter" \
  -d "{\"reference\":\"GCASH-REF-12345\"}"
```

## Commuter: My Bookings

```bash
curl "http://localhost:4000/commuter/bookings" \
  -H "x-user-id: <commuter-user-id>" \
  -H "x-user-role: commuter"
```
