# Horizon Properties — Base44 Dev Environment

## Stack
- React 18 + Vite 5 + TypeScript
- Tailwind CSS 3 (custom design tokens in tailwind.config.js)
- Framer Motion for subtle animations
- React Router v6 for navigation
- lucide-react for icons

## Setup
```
docker compose -f docker-compose.base44.yml up -d --build
```
App runs on port 3000. Dependencies install on container startup via `npm install`.

## Architecture
- `src/data/properties.ts` — all property, service, team, and agent data
- `src/components/` — reusable components (Header, Footer, PropertyCard, PropertyGallery, Button, Logo, Layout)
- `src/components/home/` — homepage section components (Hero, AboutSection, FeaturedProperties, etc.)
- `src/pages/` — route pages (Home, Properties, PropertyDetail, About, Services, Team, Contact)

## Design System
- Colors: navy `#0A192F`, champagne `#C5A059`, ivory `#FDFCFB`, warm-gray `#F4F6F9`
- Fonts: Plus Jakarta Sans (display), Inter (body) — loaded via Google Fonts in index.html
- Tailwind config has custom color tokens and animation keyframes

## Key Conventions
- Property data is structured for easy future DB connection (typed `Property` interface)
- PropertyCard is the reusable card used in carousel, grid, and similar-properties sections
- All images use Unsplash URLs with `loading="lazy"` (except hero images)
- Animations respect `prefers-reduced-motion` via global CSS
