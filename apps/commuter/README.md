# Bussin Commuter App (Expo)

This is the first mobile scaffold for Bussin commuter MVP.

Current screens in `App.tsx`:
- Hero with route search
- Live vehicle cards
- GPS freshness state labels (`fresh`, `degraded`, `stale`)
- ETA confidence visibility
- Key stop list
- Coach seat selection (bus)
- Payment mode selection (`cash`, `digital`)
- Commercial slots section

## Run locally

From repo root:

```bash
pnpm install
pnpm --filter @bussin/commuter start
```

Then:
- Press `w` for web preview, or
- Scan QR with Expo Go for mobile.
