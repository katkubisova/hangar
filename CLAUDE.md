@AGENTS.md

## Project: HANGAR

HANGARGYMS is a unified website for a network of bouldering and climbing gyms across the Czech Republic, backed by professional climber Adam Ondra. Two gyms are live (Brno, Ostrava); three are planned (Praha, Plzeň, Olomouc). This prototype replaces a fragmented multi-domain setup with one brand, one site, and a per-page gym selector pattern for location-specific content.

- **Type:** Low-fidelity wireframe prototype
- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **No backend.** No API calls, no database. All data is hardcoded placeholder content in `lib/data/`.
- **Dev server:** `npm run dev` → http://localhost:3000
- **Repo:** https://github.com/katkubisova/hangar.git
- **Architecture reference:** `docs/architecture.md` — routes, folder structure, TypeScript types, and key patterns. Read this before building any new page or component.
- **Product spec:** `HANGARGYMS_Website_IA_ProductSpec.docx` (in parent directory) — full IA, page specs and CMS content model.

## Rules

- **Always use shadcn/ui components** for any UI elements — buttons, inputs, cards, modals, etc. Do not build custom UI primitives from scratch.
- **Always use Tailwind CSS** for styling. No inline styles, no CSS modules, no separate stylesheets.
- All content is placeholder/hardcoded. Do not introduce any data fetching or backend logic.
- Keep the codebase clean and minimal — this is a prototype, not a production app.
