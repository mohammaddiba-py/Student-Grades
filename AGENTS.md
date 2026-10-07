# Horizon Properties — Base44 Dev Environment

A premium real estate marketing website built with Vite + React + TypeScript + Tailwind CSS, using React Router for client-side navigation.

## Stack
- **Runtime:** Node 22 (via Docker compose)
- **Framework:** React 18 + Vite 5 (live-reload dev server on port 3000)
- **Styling:** Tailwind CSS 3 (custom navy/gold design tokens in `tailwind.config.js`)
- **Routing:** react-router-dom v6
- **Fonts:** Plus Jakarta Sans (body) + Sora (display) via Google Fonts

## Project layout
- `src/data/` — property, service, team & agent data (typed). Edit here to change content.
- `src/components/` — reusable UI (Header, Footer, PropertyCard, PropertyCarousel, ImageGallery, etc.)
- `src/sections/` — homepage sections (Hero, About, FeaturedProperties, Services, WhyChoose, Team)
- `src/pages/` — routed pages (Home, Properties, PropertyDetail, About, Services, Team, Contact)
- `src/lib/` — hooks: `useReveal` (scroll animations), `useFavorites` (localStorage-backed save)

## Running locally
```
docker compose -f docker-compose.base44.yml up -d --build
```
The dev server installs dependencies on first start (a named volume holds `node_modules`). It serves live source with HMR at http://localhost:3000.

## Notes
- No external secrets are required to boot; all data is static/local. Favorites persist in `localStorage`.
- `BASE44_PREVIEW_MODE=1` is passed to the web service; the Vite dev server sets `allowedHosts: true` so the preview proxy host is accepted.
- Images are served from Unsplash's CDN (`images.unsplash.com`).
