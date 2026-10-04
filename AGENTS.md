# Base44 Dev Environment

## Stack
- Vite 6 + React 18 + React Router 6 + Tailwind CSS 4 (via `@tailwindcss/vite`), plain CSS theme tokens in `src/index.css`.
- Single service (`web`, node:22) in `docker-compose.base44.yml`, bind-mounted source, `npm install` on startup, Vite dev server on port 3000 with `allowedHosts: true`. Healthcheck uses `node -e fetch(...)` (node base image has no curl).

## Verify
- `docker compose -f docker-compose.base44.yml ps` → healthy; `curl localhost:3000` → 200 with `main.jsx` (Vite dev, live reload works).
- Browser console via preview tools should show no errors; lazy-loaded images below the fold legitimately appear "incomplete" until scrolled.

## Quirks
- No backend, no secrets needed. Property/team/services data is plain JS in `src/data/` so it can later be swapped for a database.
- Favorites persist in `localStorage` under `horizon:favorites` (custom event `horizon:favorites-changed` syncs open tabs).
- Imagery is hotlinked from Unsplash (`images.unsplash.com/photo-<id>`); ids must return 200 — check with curl before adding new ones (some ids 404).
- Interior pages start with a navy `PageHero` band so the transparent-at-top header stays legible; header turns white on scroll.
