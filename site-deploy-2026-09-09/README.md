# MemoryCare — rebranded front-end for mc.makyan.com

Static, route-faithful rebuild of the public site and client account in the new brand
(Ghea Mariam + Montserrat Arm; ivory / white / olive / anthracite). Backend logic is not
included: forms, ids, names and the AJAX handlers from the live engine (`vendor/init.js`,
`vendor/menu.js`) are preserved so the templates can be dropped into the existing engine.

## Deploy archive
`MemoryCare-site-deploy-<date>.zip` = `dist/` (ready to serve as-is, includes all photos + `hero.mp4`) + `src/` sources
(without `src/assets/img` — the photos live in `dist/assets/img`; copy them back before running `build.mjs`).
PNG masters of the photos are kept locally in `site/masters/` (not in the archive).

## Run locally
```bash
node site/build.mjs        # assembles src/pages + src/partials → site/dist (44 routes)
node site/serve.mjs        # http://localhost:8085/en/page/home/  (fake JSON for POST endpoints)
```

## Structure
- `src/partials/` — `layout`, `header`, `footer`, `account-nav`, `order-page`
- `src/pages/` — one file per route; front-matter JSON on line 1 (`route`, `aliases`, `title`, plan data…)
- `src/css/tokens.css`, `src/css/main.css` — the design system (see `DESIGN.md`)
- `src/js/site.js` — presentation-only behaviours (header state, word entrance, password checklist, inline hints, consent gate)
- `src/vendor/` — original `init.js`, `menu.js`, `popup.js`, `BeerSlider.js`, `aos.js` + css (unchanged)
- `src/assets/img/` — generated photography and the hero loop (`hero.mp4`); prompts in `assets-prompts.md`
- `src/assets/brand/` — logo mark (transparent + ivory/olive/anthracite variants), favicon
- `src/fonts/` — GHEA Mariam, Montserrat Arm (fonter.am — attribution link kept in the footer)
- `tools/` — `gen-assets.cjs` (Higgsfield), `logo-alpha.cjs`, `shoot.cjs` (Playwright screenshots)

## What the engine team must wire (open items)
1. **Tariff ↔ package id mapping.** Owner-confirmed mapping of the new lineup to the existing order URLs:
   `add/1` → Express 60 000 · `add/2` → Optimal 160 000 (4 visits) · `add/3` → Maximum 200 000 (6 visits) ·
   `add/4` → Inspection 20 000 (owner-confirmed order 2026-09-09). Hidden fields `p`/`f`/`price` on the order pages carry the
   new values; the server must re-derive price from the package id (audit A6) and rename the old
   "preventive/full" counters.
2. **Order form new fields** (backend currently ignores them): `cemetery`, `plot_location`,
   `deceased_name`, `preferred_date`, `monuments`, `note`, `agree` (required consent — Ameriabank §3.12/§4.10.12).
   Register form adds `agree_terms`.
3. **Legal pages** `/en/page/privacy|terms|refund|service-terms/` are new routes with draft copy —
   lawyer review before publishing; set effective dates.
4. **Language switcher** ՀԱՅ/РУС rendered inactive; `/am/…` and `/ru/…` routes serve a branded
   "coming soon" page in this build. Restore real translations when ready.
5. **Session endpoint** stays `/am/account/session/` in `init.js` (pre-existing); consider `/{lang}/`.
6. `/account/payments/` now has a real template (was a 404 panel).
7. Hero video is 12 MB (1080p); transcode to ~2–3 MB H.264/WebM for production.
8. Contact/report maps use Google embed URLs; replace with an API-keyed embed if quota matters.
9. Replace sample account data (Anna Petrosyan, plots, reports) with real records — all demo content is marked in the templates.
