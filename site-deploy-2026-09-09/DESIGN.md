# MemoryCare — DESIGN.md (built world, Sept 2026 rebrand)

Derived from the shipped build in `site/src` (tokens in `css/tokens.css`, components in `css/main.css`).

## Direction contract (surface: whole public site + client account)
- **THESIS.** "Evidence, not promises." The site is built around the *visit report* — before/after photos, video, GPS, date. The report card is the signature object: it floats over the hero video, anchors "How it works", and is the account's main artefact. Refused: the generic icon-grid feature page and stock smiling-people imagery.
- **OWN-WORLD.** Ivory ground (`#F3F0E9`) with white "paper" cards; olive (`#7C8654`) as the only accent, used at page scale on the featured plan and the closing CTA band; warm anthracite (`#2B2C28`) for text and dark buttons. No deep olive, no sky blue outside the logo. Ghea Mariam display, Montserrat Arm text. Pill buttons; the primary one carries an ivory circular arrow cap. 1px hairlines, 6/14px radii, soft offset shadows.
- **STORY.** A diaspora visitor lands on the team at work → understands the mechanism (report) in the first viewport → sees what a visit includes → chooses a flat plan → creates an account and orders with a named plot → follows every visit from the account.
- **FIRST VIEWPORT.** Full-bleed 5-second loop of the team cleaning tuff stone with yellow-and-black equipment; anthracite gradient; Ghea Mariam headline bottom-left (word-by-word blur-up entrance); two CTAs; four facts on a hairline; the sample report card bottom-right sliding in.
- **FORM.** Documentary editorial (photo-led, restrained), chosen against the brandbook's pinned assets; the impeccable concept-seed roll was substituted by owner Q&A rounds in-session (owner chose hero, palette, dark-zone policy, tariffs, menu, order fields).
- **FINISH.** Inspected in two batched rounds (desktop 1440 / mobile 390) — see `.review/`.

## Tokens
| Role | Value |
|---|---|
| Ivory / Ivory-2 | `#F3F0E9` / `#EBE7DD` |
| White | `#FFFFFF` |
| Olive / deep (hover) / soft tint | `#7C8654` / `#66714A` / `#E9EBDF` |
| Anthracite / secondary / muted / faint | `#2B2C28` / `#3C3D38` / `#5B5D57` / `#8A8C84` |
| Lines | `rgba(43,44,40,.12)` and `.22` |
| Display | Ghea Mariam 400/700 (+italics), self-hosted OTF |
| Text | Montserrat Arm 300–700, self-hosted OTF |
| Type scale | display clamp(2.6–5.2rem) · h1 2.2–3.6 · h2 1.75–2.75 · h3 1.25–1.6 · lead 1.05–1.25 · body 1rem |
| Radii | 6px (fields/cards), 14px (panels), pill (buttons) |
| Section rhythm | `--section: clamp(4.5rem, 6vw+2rem, 9rem)`; ivory ↔ white alternation, one olive band |
| Motion | `cubic-bezier(.16,1,.3,1)`, 0.5s; AOS fade-up once; hero word entrance; card lift on hover |

## Components (class names preserved from the live engine where JS depends on them)
Header (`header.header`, `nav.menu-wrapper`, `li.enter/register/account/logout`, `.menu-toggle`, `.lang`) · Buttons (`.btn`, `.btn--primary` + `.btn__cap`, `.btn.tr`, `.btnl`) · Hero + `.report-card` · Trust bar (`.numbers_wrap`) · Text/image blocks (`.ti_wrap/.it_wrap`) · Checklist · Steps · Places carousel (`.partners` Swiper) · Pricing flip cards (`.packages_wrapper .flip-card[.bs]`) + `.pricing__custom` · Before/after (`#beer-slider`) · Voices (`.testimonials.reviews` Swiper) · Moments fade slider (`.hero-slider .mySwiper`) · FAQ (`.accordion`) · CTA band · Contact tiles + form (`#cform`) · Auth split layout (`#login`, `#register`, `#reset`, `.pt`, `.tltp`) · Account sidebar (`.navigation .pdata .vmenu`) · Dashboard tiles, objects grid, report page (`.beaf_wrapper`, `.igallery`), plans rows (`#package-pay`), order page (`#package-order`) · Info/legal prose · Footer with payment marks.

## Rules
- Olive is the only accent; never introduce another hue for UI. Sky blue lives only in the logo asset.
- Real photography only (generated per `assets-prompts.md`); people of Armenian appearance in olive uniforms; equipment yellow-and-black without brand lettering.
- No fabricated social proof: quotes are labelled survey paraphrases until real reviews exist.
- Every price in AMD with the ֏ sign; every order step links to the legal pages the bank requires.
