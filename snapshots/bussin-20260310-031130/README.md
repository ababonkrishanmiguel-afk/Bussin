# Bussin (Ride with Certainty)

Pre-seed transport coordination platform for Cebu Province.

This repository is now scaffolded as a monorepo with:
- `services/api`: backend service for commuter, driver, and admin APIs
- `apps/commuter`: planned mobile app package
- `apps/driver`: planned mobile app package
- `apps/admin`: planned dashboard package

Architecture and roadmap:
- `docs/mvp-architecture.md`
- `docs/build-backlog.md`

## Backend Quick Start

Prerequisites:
- Node.js 20+
- pnpm 10+
- PostgreSQL 15+

Steps:
1. Copy `services/api/.env.example` to `services/api/.env`
2. Set `DATABASE_URL` to your local Postgres
3. Install dependencies:
   - `pnpm install`
4. Generate Prisma client:
   - `pnpm --filter @bussin/api prisma:generate`
5. Run migrations:
   - `pnpm --filter @bussin/api prisma:migrate`
6. Seed sample Cebu data:
   - `pnpm --filter @bussin/api prisma:seed`
7. Start API:
   - `pnpm dev:api`

Server default URL: `http://localhost:4000`

## Current API Modules Implemented

- Admin:
  - stops CRUD (create/list)
  - routes CRUD (create/list with route stops)
  - vehicles CRUD (create/list)
  - drivers CRUD (create/list)
  - live trips view
- Driver:
  - start trip
  - send GPS location update
  - update seat availability (provincial bus only)
  - end trip
- Commuter:
  - list routes
  - list route stops
  - list nearby vehicles with location freshness and ETA confidence
  - trip seat map for provincial bus
  - create booking with selected seats
  - digital payment confirmation endpoint
  - list commuter bookings

## Temporary Auth for MVP Development

For now, auth is header-based so frontend work can start quickly:
- `x-user-id: <user-id>`
- `x-user-role: admin | driver | commuter`

This will be replaced with JWT auth in the next pass.

## Quick Visual Preview

Open `index.html` directly in browser for a zero-install commuter mock UI:
- route search
- live vehicle cards
- freshness states
- ETA confidence display
- live map markers (when internet map tiles are available)
- coach seat selection and payment mode simulation
- commercial slots section
