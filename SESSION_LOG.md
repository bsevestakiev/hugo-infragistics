# UI Alignment Session Log — 2026-04-14

## Goal
Pixel-perfect match of infragistics.com homepage UI — fonts, colours, nav, sections.

---

## Changes Made

### Typography
- Replaced `Noto Sans JP` (Google Fonts) with **Aktiv Grotesk by Dalton Maag**
  - Weight 400 (Regular) — body, H3–H6
  - Weight 200 (Thin) — H1 only; hero block H2 override
  - Weight 600 — all other H2 (section headings)
- Font files expected at `static/fonts/AktivGrotesk-Regular.woff2/.woff` and `AktivGrotesk-Thin.woff2/.woff`

### Colours
- `$primary` already `#0099ff` ✓
- Hero/footer dark navy: `#0a2045` ✓
- `.block-bg` (hero block): `#0a2045` background ✓

### Top Banner (`data/banner.yml`)
- Local override: `layouts/partials/header/banner.html`
- Green background: `#27ae60` (rgb 39,174,96)
- White text and links
- Dismissible close button (X) added

### Topbar (`layouts/partials/header/header.html`)
- Removed Sign In / Register links
- Added "North American Sales:" prefix to phone number
- All items right-aligned
- White background with subtle bottom border
- Dark muted text, `#0099ff` on hover

### Navigation
- Hover state: blue (`#0099ff`) colour change only — no underline, no pill background
- `text-decoration: none !important` on all nav/mega/dropdown links
- Top-level nav: `0.9rem / font-weight: 200` (lean)
- Dropdown item titles: `font-weight: 600`
- Mega menu bundle price: green pill badge (`#27ae60`)
- Bundle card descriptions: capped at 2 lines
- Mobile: `white-space: normal`, `overflow-wrap: break-word` to prevent text overflow

### New Templates (local overrides)
- `layouts/partials/header/banner.html` — dismissible banner with close button
- `layouts/partials/blocks/templates/editorial.html` — adds `background_color` param support
- `layouts/partials/blocks/templates/stories-carousel.html` — new custom block (see below)

### Homepage (`content/en/_index.md`)
- **Block 2**: Removed `surtitle: "30+ years of simple and beautiful experiences"`
- **Block 5 (Latest news)**:
  - Heading changed to "Ideas That Inspire. Discover What's New."
  - Count reduced from 4 → 3
- **Block 4b (Testimonials)**: Replaced with `type: stories-carousel`
  - Fade transition (`type: fade`)
  - Left panel: `#3F51B5` indigo background, story title, description, "Read the Story" CTA
  - Right panel: full-bleed image
  - White dot pagination anchored bottom-left of blue panel
- **Block 7 (Webinar editorial)**: Added `background_color: "#3F51B5"`

### i18n
- `i18n/en.yaml` created: overrides `more` key → "Read Now" (was "Read more")

### CSS (`assets/sass/custom.sass`) — key additions
- Topbar: white bg, right-aligned, dark text
- Banner: green bg, white text, close button styles
- Nav: underline-free hover, lean font weight
- Editorial custom bg: white text treatment for coloured editorial blocks
- Stories carousel: full-width 50/50 split, fade dots, responsive
- Latest news cards: image-first, 16/9 aspect ratio, bold title, gray description, blue "Read Now"
- Logos block heading text: `font-weight: 700`

---

## Known TODOs / Needs Work Tomorrow
- Blog post images: posts have no `image` frontmatter — cards render without photos
- Aktiv Grotesk font files need confirming (filenames must match `@font-face` declarations)
- Stories carousel images are dashboard placeholders — replace with actual customer photos
- Japanese (`content/ja/_index.md`) not yet updated to match EN changes
- Mobile menu alignment: further testing may be needed at various breakpoints
- Latest news card layout: verify renders correctly once blog images are added
