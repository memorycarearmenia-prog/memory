# Design System — "CleanCore / PureClean" (Envato Elements template)

**Source:** https://www.kit-projectone.mnsithub.com/home/?storefront=envato-elements —
an Elementor/WordPress theme demo, cleaning-services niche (third such template analyzed this
session, after WashOut in `creative cleaner 1`/`2`). Sold via Envato Elements.
**Captured:** 9 September 2026. Palette pulled from live computed styles (not a static image this
time — the page is a real rendered DOM, not an exportable flat image), cross-checked against two
screenshots. A couple of lower sections rendered blank in my screenshot tool due to a window-focus
issue on my end, not a site bug — I mapped the rest of the page via full text/DOM extraction
instead, so the structure below is complete even where I couldn't grab a picture of it.

**Naming note:** no folder name was given for this one — continuing your own `creative cleaner N`
numbering. Rename the folder if you meant something else.

---

## 1. Color palette

| Role | Hex | Where |
|---|---|---|
| Base | `#FFFFFF` | Page background |
| **Primary accent** | `#007AFF` | Links, headings-as-links, one CTA button state — an iOS-system-blue, brighter/cooler than WashOut's `#2484FC` |
| Deep navy | `#011A65` | Hero overlay gradient over the photo |
| Section tint | `#EAF2F4` | "About" section background — same *whisper-pale-tint* move as WashOut, different hue family (blue-grey vs blue) |
| Border/divider | `#CCD6DF` | Card borders, hairlines |
| Secondary text | `#7E7E7A` | Body copy grey |
| **Amber accent** | `#F0AD4E` | A secondary highlight color (rating/badge) — notable because it's the *only* warm color in an otherwise all-cool palette |

Same underlying formula as the WashOv analyses: white base + one saturated accent + pale
same-family tints for section rhythm. The difference here is the accent is a colder, more
"tech/SaaS" blue, and there's a lone warm amber accent that WashOut's system didn't have.

## 2. Typography

- **Headings:** `Playfair Display` (serif, weight 500) — a real display serif, not a geometric sans.
  This is the one clear differentiator from WashOut/the earlier cleaning-template pattern: pairing
  a classic editorial serif with a plain sans reads more "boutique/premium" than "startup app."
- **Body:** `DM Sans` — clean geometric sans for paragraphs, nav, buttons, labels.

## 3. Components (named for reuse)

**Pill button with icon cap** — the *exact same device* as WashOut's signature button (rounded
pill, circular icon badge overlapping the end). Third time I've seen this specific pattern across
two different Envato cleaning templates from two different authors — strong signal this is now a
genuine industry convention for this niche, not one designer's original idea. Worth knowing if the
goal is to look distinctive rather than "on-genre."

**Two-column feature block with numbered icon-list** — photo on one side, a short paragraph plus
2–3 icon+heading+text rows on the other, closed with a pill CTA and a "Call Any Time" phone
callout (icon badge + number). Reused twice on this page (About section, Mission section) with the
image side flipped.

**Uniform service card grid** — icon, title, one-line description, "Read More" link, in a 5-up
grid. *All five cards share the identical placeholder description* ("Restore the beauty of your
outdoor surfaces with professional pressure washing..") — a template content bug, not a design
choice; flag this if borrowing the layout so it doesn't get copied along with the layout.

**Trust marquee** — a horizontally scrolling ticker repeating short trust phrases ("Professional
Cleaning · Trusted Experts · Spotless Results · Eco-Friendly Solutions · Home Cleaning") — cheap,
motion-driven way to fill a thin band with credibility language instead of a static tagline.

**Logo-cloud trust band** — "Trusted by over 80k+ companies worldwide" heading over a row of
partner/client logos — a B2B trust-signal pattern that reads oddly on a residential cleaning
service; likely leftover from a generic template default rather than written for this niche.

**Blog card with category eyebrow** — square photo, small colored category label ("Fresh Home,"
"Home Cleaning," "Kitchen Care"), bold title, all sharing the same placeholder dek ("Discover easy
cleaning solutions that save time while delivering..").

**Accordion FAQ under a section title** — "Customer Help Center" heading, standard
expand/collapse question list, "See All FAQs" link.

**Footer** — tagline + 3 link columns (Quick Links / Our Services / Recent Posts) + copyright bar.

## 4. Layout structure (top to bottom)

1. Nav — logo, 6 links (2 with dropdowns: Services, Pages, Blogs), pill "Contact Us" CTA
2. Hero — navy-gradient-over-photo, headline + subcopy + stat row (Years of Experience / Projects
   Completed / Professional Cleaners — **the third stat shows "0+"**, an unfilled template
   placeholder left live in the demo)
3. About — pale-tint section, 2-col: paragraph + 2 icon-rows + pill CTA + phone callout / photo
4. Mission — 2-col, image flipped to the left this time, "Certified Cleaning Professionals" heading
5. Services — heading + 5-card grid (uniform placeholder copy, see above)
6. "Clean Spaces Created With Professional Care" — 2-col: "Commitment to Excellence" /
   "Superior Cleaning Solutions" mini-blocks
7. Trust marquee (scrolling ticker)
8. Logo-cloud ("Trusted by over 80k+ companies")
9. Testimonials — heading + "View All Reviews"
10. Contact form — Name / Email / Number / Subject / Message / Submit
11. Blog teaser — 3 cards with category eyebrows
12. FAQ accordion — "Customer Help Center"
13. Footer — navy, tagline + 3 columns + copyright

## 5. Creative devices worth reusing

- **Serif display + sans body** as the differentiator from an otherwise generic genre — the single
  cheapest lever this template pulls to feel less like every other cleaning-service site
- **Trust marquee ticker** — turns a thin, otherwise-wasted band into ambient credibility
  messaging without needing new content for it
- **Icon-list + photo two-column block, reused with the image side flipped** — one component,
  two placements, avoids the page feeling like the same block repeated

## 6. Caveats — content bugs, don't copy these along with the layout

- **Brand-name mismatch**: header/nav logo reads "CleanCore," the footer copyright reads
  "© 2026 PureClean" — two different names on the same page, clearly an unedited template default.
- **"0+ Professional Cleaners"** stat left as a literal zero.
- **Identical placeholder copy** repeated verbatim across all 5 service cards and all 3 blog cards.
- **B2B "80k+ companies" trust band** doesn't fit a residential-cleaning narrative — likely a
  generic template section never adapted to the niche.

These are exactly the kind of unedited-template tells the Memory Care audit flagged on your own
site (Lorem Ipsum, mismatched stats) — useful as a second real-world example of the same failure
mode, if that comparison is useful for the brief.
