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

---

# UI Polish Session — 2026-04-15

## Goal
Polish the homepage to closer match infragistics.com, fix rendering issues on Chromebook, and address visual bugs found during review.

---

## Changes Made

### Font Flash (FOUT) Fix
- **Problem:** Custom font (Aktiv Grotesk) was flashing — browser rendered fallback font first, then swapped.
- **Root cause:** `@font-face` was referencing non-existent `.woff2` files (only `.woff` exist in `static/fonts/`), causing a wasted 404 round-trip before falling back. Plus `font-display: swap` shows fallback while loading.
- **Fix:**
  - Removed dead `.woff2` references from `@font-face` declarations in `custom.sass`
  - Changed `font-display: swap` → `font-display: block` (hides text briefly instead of flashing fallback)
  - Created `layouts/partials/head/preload.html` to preload both woff files before page renders
- **Note:** If `.woff2` files are added later, update `@font-face` src and preload href/type accordingly

### Nav Items — More Impactful
- `font-weight: 200` → `400`
- `font-size: 0.9rem` → `0.95rem`
- `padding: 0.5rem 0.6rem` → `0.5rem 0.75rem`
- Hover/active now shows blue `#0099ff` bottom border underline
- Active state bumped to `font-weight: 600`

### Chromebook Nav Fix (1366px)
- Nav items were crunching at Chromebook resolution (1366×768)
- Added responsive override for `992px–1399px`: `font-size: 0.8rem`, `padding: 0.5rem 0.4rem`
- At 1400px+ the full desktop sizing applies

### Root Font Size Pin
- **Problem:** Chromebook browser default font size varies (can be 18–20px), making all `rem` values render larger than intended
- **Fix:** Added `html { font-size: 16px }` to `custom.sass` — pins the rem base to 16px on all devices, matching infragistics.com behaviour

### Webinar Editorial Block Background
- **Problem:** `background_color: "#3F51B5"` in frontmatter had no effect — block rendered white
- **Root cause:** Go template variable scoping bug — `$style = printf ...` inside a `with` block does not update the outer `$style` variable in Hugo's template engine
- **Fix:** Rewrote `layouts/partials/blocks/templates/editorial.html` to use `{{- with .background_color }} style="background-color: {{ . }};"{{- end }}` inline — avoids the variable entirely
- **Pattern to remember:** Never reassign outer-scope variables inside Hugo `with`/`if`/`range` blocks — use `with` directly in the output instead

### White Strip Between Webinar Block and Footer
- **Problem:** White gap visible between the blue editorial section and the navy footer
- **Root cause:** `<main>` has `padding-bottom: 5.6rem` from the theme. The theme already handles this for `.block-bg` last-children via `main:has(> .block-bg:last-child) { padding-bottom: 0 }` but not for `.block-editorial-custom-bg`
- **Fix:** Added matching `:has()` rules in `custom.sass`:
  ```sass
  main:has(> .block-editorial-custom-bg:last-child)
    padding-bottom: 0
  main > .block-editorial-custom-bg:last-child
    padding-bottom: 5.6rem
  ```

### Logos Block Row Gap
- **Problem:** Too much space between the two rows of logos
- **Root cause:** CSS variable override (`--bs-gutter-y`) didn't win the cascade — theme bakes it into the same selector at same specificity
- **Fix:** Directly override `margin-top` with `!important` on the grid container and cells:
  ```sass
  .block-logos .logos { margin-top: 0 !important }
  .block-logos .logos > div { margin-top: 0.1rem !important }
  ```

### Mega Menu — Automated Testing Overflow
- **Problem:** "Automated Testing Tools" group wrapping to a second row; long item titles overflowing
- **Root cause:** Group headings had `text-transform: uppercase` (not matching real site); flex layout too rigid
- **Fixes:**
  - Removed `text-transform: uppercase` from `.mega-group-heading` — real site uses title case
  - Reduced `gap`, `padding`, and font sizes to be more compact
  - Kept `flex-wrap: wrap` (not `nowrap`) with sensible `flex-basis` values

---

## Known TODOs / Carry Forward
- `custom.sass` is getting long (~1000 lines) — worth splitting into partials once design is stable (`_nav.sass`, `_mega-menu.sass`, `_blocks.sass` etc.)
- Some `!important` flags in logos section are a smell — revisit with proper specificity when time allows
- Mega menu still slightly tight at 1366px — may need further tuning once Chromebook feedback comes in
- Demo apps on IIS: agreed strategy is static export → S3/CloudFront under `/demos/` prefix in same bucket as Hugo site. Use `--exclude "demos/*"` in Hugo deploy sync.

---

# Stories Carousel Images Session — 2026-04-15

## Goal
Fix stories carousel image not showing (cibao), route carousel images through Hugo asset pipeline, and eliminate layout shift on page load.

---

## Changes Made

### Cibao Image — Extension Mismatch
- **Problem:** Image not showing at all.
- **Root cause:** File was `cibao.jpg` but frontmatter referenced `cibao.jpeg` — extension mismatch.
- **Fix:** Updated `content/en/_index.md` to use `src: "images/home/cibao.jpg"`.

### Carousel Images — Hugo Asset Pipeline
- **Problem:** `stories-carousel.html` was using a plain `<img src="{{ .src | relURL }}">` — images served raw from `static/`, no optimisation.
- **Fix:**
  - Moved `cibao.jpg` from `static/images/home/` → `assets/images/home/` (alongside the other carousel images already there)
  - Updated `layouts/partials/blocks/templates/stories-carousel.html` to use `resources.Get` + `.Resize "1000x webp"` — Hugo resizes to max 1000px wide and converts to WebP
  - Emits real `width`/`height` attributes so the browser can reserve space before the image loads
  - Removed `loading="lazy"` — carousel is above the fold and should load eagerly
  - Falls back to plain `relURL` if `resources.Get` can't find the file (safe for future images still in `static/`)

### Stories Carousel — Height Collapse on Load
- **Problem:** On page reload, the carousel briefly appeared very flat (collapsed height), then jumped to the correct 400px layout.
- **Root cause:** Splide `type: fade` uses `position: absolute` on slides, which collapses the track height to zero until JS runs and reads the `height` option. This is a Splide fade-specific behaviour — `type: loop` doesn't have this issue.
- **Wrong fix attempted:** Added `.stories-splide:not(.is-initialized)` CSS rule to hide extra slides — this targeted the wrong problem (stacking, not height collapse) and had no effect.
- **Correct fix:**
  - Added `"height": "400px"` to the Splide config defaults in the template — Splide sets the track height immediately on init, eliminating the jump
  - Changed template defaults to `type: fade` (matching the frontmatter intent) and used `merge` so frontmatter params can still override any default
  - Added `min-height: 400px` to `.block-stories-carousel` in `custom.sass` as a CSS safety net for the brief gap before Splide reads its config
- **Pattern to remember:** Splide `type: fade` requires an explicit `height` or `heightRatio` in the config — without it the track height is 0 until JS calculates it.

---

## Known TODOs / Carry Forward
- Stories carousel images are still placeholders for Scriptly and Bentley Nevada slides — replace with real customer photos when available
- `content/ja/_index.md` not yet updated to reflect the Cibao slide copy changes

---

# Footer Redesign Session — 2026-04-16

## Goal
Redesign the footer to match infragistics.com — background colour, column layout, social icons, newsletter panel, and bottom bar.

---

## Changes Made

### Background Colour
- Changed from navy `#0a2045` to near-black `#111` (matching real site).

### Column Structure — 4 Columns + Newsletter Panel
- **Before:** 5 equal columns; "Open-Source Components" was its own column.
- **After:** 4 nav columns + newsletter panel side by side in the same row.
- `data/footernav.yml` restructured — added `subgroups` support per column:
  - "Open-Source Components" moved as a sub-group inside Products column
  - "Angular Compare" / "Blazor Compare" pulled into a "Compare" sub-group inside My Account
- `layouts/partials/footer/footer.html` fully rewritten with `footer-body` flex layout.

### Social Icons
- **Before:** LinkedIn, Twitter, YouTube, GitHub, Facebook (theme CSS icon magic via `.nav-social`)
- **After:** RSS, X, Facebook, LinkedIn, YouTube, Discord — rendered as **inline SVGs** directly in the template, bypassing the theme's CSS icon system entirely.
- Social order and icons now match the real site.

### Newsletter Panel
- **Before:** Centred band below nav columns with plain label + input.
- **After:** Right-side panel (same row as nav columns, separated by a vertical divider) with:
  - Bold headline "The best blogs, whitepapers…" with blue-highlighted keyword
  - Email input with dark-background styling
  - Checkbox + terms agreement text
  - reCAPTCHA disclaimer
  - "SIGN ME UP!" CTA button

### Legal Links / Bottom Bar
- `data/menu/legal.yml` updated: Privacy Policy (updated) / Cookies / Terms of Use (updated) — removed old Sitemap and Legal Mentions entries.
- Bottom bar changed from left/right split to centred column layout with "(updated)" badges.

### Column Headings — Title Case, Left-Aligned
- Theme's footer CSS sets `.nav-title { text-align: center }` — couldn't be overridden even with `!important`.
- **Fix:** Renamed heading class from `nav-title` to `footer-col-heading` in the template — clean slate, no theme interference.
- Sub-group headings (`nav-subtitle`) styled to match main headings: white, bold, title case, same size.

### External Link Arrows Suppressed
- Theme auto-appends a `::after` arrow icon to any `<a target="_blank">` link.
- **Fix:** `footer[role="contentinfo"] a::after { content: none !important }` — removes arrows from social icons, Open-Source links, and newsletter reCAPTCHA links.

### Link Colour — Subgroup Links
- Bootstrap CSS variable `--bs-nav-link-color` was bleeding through on some links.
- **Fix:** Added `!important` to nav-link colour in footer nav col rules.

### Nav List Alignment
- Theme applies `margin-left: calc(var(--bs-nav-link-padding-x) * -1)` to every `.nav` inside the footer, pulling `<ul>` lists to the left of the heading edge.
- **Fix:** `margin-left: 0 !important; margin-right: 0 !important` on `.nav-secondary` inside footer columns — headings and links now share the same left edge.

---

## Known TODOs / Carry Forward
- Trust/security badges in bottom bar (BBB, TRUSTe etc.) not implemented — need actual badge embed codes
- Newsletter headline "user experience" keyword is static blue; real site has a typewriter animation cycling through terms
- `content/ja/_index.md` footer copy not updated to reflect new structure
- `custom.sass` now ~1100 lines — worth splitting into partials when design stabilises
