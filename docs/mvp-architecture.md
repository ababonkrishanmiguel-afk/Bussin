# Bussin MVP Architecture (Cebu Province)

## Product Scope (MVP)

MVP goal: reduce commuter uncertainty for modern jeepneys and provincial buses in Cebu.

In scope:
- Real-time vehicle visibility on map
- Route and stop lookup
- Arrival estimates (simple, reliability-aware)
- Driver trip start/end and live GPS updates
- Admin route, stop, vehicle, driver, and live trip monitoring
- Coach seat reservation (provincial bus only, limited release)
- Booking records and cash/digital reconciliation support

Out of scope for MVP:
- Dynamic pricing
- Nationwide routing optimization
- Full operator portal
- Complex incentive systems

## Core Principles in System Behavior

- Never fake precision: if GPS is stale, show "Location temporarily unavailable."
- Mark data freshness on every vehicle card and map marker.
- Favor simple driver workflow over feature depth.
- Keep commuter UI focused on: where is the next vehicle, and when might it arrive.

## Recommended Technical Stack

- Monorepo: `pnpm` workspaces
- Backend API + realtime: `NestJS` + `WebSocket Gateway`
- Database: `PostgreSQL` + `Prisma ORM`
- Caching/realtime fanout: `Redis` (phase 2, optional in week 1)
- Commuter app: `React Native (Expo)`
- Driver app: `React Native (Expo)` (separate app package, shared UI primitives optional)
- Admin dashboard: `Next.js` + TypeScript
- Map provider: Google Maps or Mapbox (start with one provider only)
- Auth (MVP): email/password + JWT, role-based access (`commuter`, `driver`, `admin`)

## High-Level Architecture

1. Driver app sends GPS pings every 5 to 10 seconds while trip is active.
2. Backend validates and stores location events.
3. Realtime service updates active trip state and broadcasts to commuter/admin clients.
4. Commuter app consumes nearby vehicles and route-level ETA summaries.
5. Admin dashboard monitors trip health and stale/offline vehicles.

## Reliability Rules (MVP)

- `fresh` location: last ping <= 20 seconds
- `degraded` location: 21 to 60 seconds
- `stale` location: > 60 seconds (hide moving marker and show unavailable state)
- If driver battery < 15% or signal weak, driver app shows warning and backend stores health event.

## Core Domain Model (Initial)

- `users` (id, role, name, phone, password_hash, status)
- `drivers` (user_id, license_no, active)
- `vehicles` (id, plate_no, category: `modern_jeepney|provincial_bus`, capacity, active)
- `routes` (id, code, name, origin_stop_id, destination_stop_id, active)
- `stops` (id, name, lat, lng, municipality)
- `route_stops` (route_id, stop_id, sequence, scheduled_offset_min)
- `trips` (id, route_id, vehicle_id, driver_id, status, started_at, ended_at)
- `trip_locations` (trip_id, captured_at, lat, lng, speed_kph, heading_deg, accuracy_m, source)
- `trip_health_events` (trip_id, type, value, created_at)
- `bookings` (id, trip_id, commuter_user_id, seats, fare_total, payment_type, payment_status, status)
- `boarding_events` (booking_id, confirmed_by_driver_id, confirmed_at)

## Minimal API Surface (V1)

Driver:
- `POST /driver/trips/start`
- `POST /driver/trips/:id/location`
- `POST /driver/trips/:id/seat-availability`
- `POST /driver/trips/:id/end`

Commuter:
- `GET /commuter/nearby-vehicles`
- `GET /commuter/routes`
- `GET /commuter/routes/:id/stops`
- `GET /commuter/trips/:id/status`
- `POST /commuter/bookings` (provincial bus only)
- `GET /commuter/bookings`

Admin:
- CRUD routes, stops, vehicles, drivers
- `GET /admin/live-trips`
- `GET /admin/gps-health`
- `GET /admin/bookings`
- `GET /admin/reconciliation`

## ETA Strategy (MVP)

Phase 1 ETA (simple and honest):
- Use current vehicle speed + distance to next stop, with fallback average corridor speed.
- If stale location, suppress ETA and show "ETA unavailable due to weak signal."
- Show confidence label: `High`, `Medium`, `Low`.

Do not use ML ETA in MVP.

## Security and Audit Baseline

- JWT auth with role guards
- Server-side validation for all location payloads
- Record immutable trip location history
- Basic admin audit log for CRUD changes

## 6-Week Build Sequence

Week 1:
- Monorepo scaffold
- Auth + roles
- Route/stop/vehicle/driver schema and CRUD

Week 2:
- Driver trip lifecycle + location ingest
- Live trip list in admin

Week 3:
- Commuter map with nearby vehicles + freshness status
- Route and stop browsing

Week 4:
- ETA v1 + reliability labels
- Driver battery/signal health events

Week 5:
- Provincial bus seat reservation (limited)
- Booking history and boarding confirmation

Week 6:
- Reconciliation views, hardening, pilot prep in Cebu

## First Pilot Operations Notes

- Start with a controlled fleet (for example: 20 to 40 vehicles).
- Require pre-pilot driver onboarding and app usage drills.
- Define dispatch SOP for stale GPS and trip misassignment.
- Track:
  - median wait-time perception
  - stale-location rate
  - trip start compliance
  - booking-to-boarding completion rate (bus routes)
