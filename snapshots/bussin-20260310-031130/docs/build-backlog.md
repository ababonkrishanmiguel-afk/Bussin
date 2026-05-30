# Bussin MVP Build Backlog

## Sprint 0 (Now)

- [ ] Initialize monorepo (`apps/commuter`, `apps/driver`, `apps/admin`, `services/api`)
- [ ] Set up TypeScript, linting, and env config conventions
- [ ] Bootstrap PostgreSQL + Prisma schema
- [ ] Implement role model (`commuter`, `driver`, `admin`)

## Sprint 1 (Core Operations)

- [ ] Admin CRUD: routes
- [ ] Admin CRUD: stops
- [ ] Admin CRUD: vehicles
- [ ] Admin CRUD: drivers
- [ ] Driver auth and vehicle assignment selection
- [ ] Driver trip start/end endpoints

## Sprint 2 (Realtime Visibility)

- [ ] Driver GPS ping endpoint (5 to 10 second cadence)
- [ ] Trip location storage and freshness classification
- [ ] WebSocket broadcast for active trips
- [ ] Admin live trip monitoring view
- [ ] GPS health monitoring view

## Sprint 3 (Commuter Value)

- [ ] Commuter map with nearby vehicles
- [ ] Route search and stop list
- [ ] Vehicle detail card (last update, route, occupancy where applicable)
- [ ] ETA v1 with confidence and stale-state handling

## Sprint 4 (Provincial Bus Booking)

- [ ] Seat inventory model for bus trips
- [ ] Commuter booking create/list/cancel
- [ ] Driver boarding confirmation
- [ ] Payment type support (`cash`, `digital`)
- [ ] Admin booking records

## Sprint 5 (Reconciliation + Hardening)

- [ ] Reconciliation report (cash vs digital totals)
- [ ] Trip anomaly flags (missing end, low ping coverage)
- [ ] Basic audit log for admin changes
- [ ] Pilot metrics dashboard

## Non-Negotiable Acceptance Checks

- [ ] No stale GPS shown as live location
- [ ] Driver trip flow completes in under 4 taps for start/end
- [ ] Commuter can find next vehicle and route status in under 10 seconds
- [ ] Admin can identify offline vehicles in real time
