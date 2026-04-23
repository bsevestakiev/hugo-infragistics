# Mega Menu Changes Log

## Files touched

- `data/menu/primary.yml`
- `layouts/partials/nav/primary.html`
- `assets/sass/custom.sass`
- `static/js/mega-menu.js`

---

## Confirmed working

### 1. Price badge colors
`price_color` field added to each bundle item in `primary.yml`:
- Infragistics Ultimate `$2,399` → `price_color: "orange"` → `#e05a00`
- Infragistics Professional `$1,599` → `price_color: "blue"` → `#2a5f9e`
- Ignite UI `$1,399` → `price_color: "orange"` → `#e05a00`

Template: conditional class `mega-price--blue` on the `<span>`.

### 2. "NEW" badge
`$mega-badge-bg: #e05a00` (orange). Size: `font-size: 0.58rem`, `padding: 0.05rem 0.28rem`.

### 3. Price badge on same row as title
`.mega-group--bundle .mega-link`: `display: flex !important; flex-direction: row !important; flex-wrap: wrap`.
`.mega-desc` gets `flex: 0 0 100%` so it wraps to a second row below title + price.

### 4. Mouseleave close delay
150ms delay via `closeTimer = setTimeout(...)` in `mega-menu.js`.
`mouseenter` clears the timer — prevents flicker when moving between nav items.

### 5. Grid column widths
`.mega-inner`: `grid-template-columns: 280px 1.5fr 1fr 1.1fr`

### 6. Bundle column white card box
`.mega-group--bundle .mega-group-list`: `background: #ffffff; border: 1px solid #e0e0e0; border-radius: 6px; overflow: hidden`
Thin `border-bottom: 1px solid #f0f0f0` separator between items; last item has none.

### 7. "BEST VALUE BUNDLES" label on top border of white box
`.mega-group--bundle .mega-group-heading`: `position: absolute; top: 1.5rem; left: 50%; transform: translate(-50%, -50%)`
Gray pill badge (`background: #6b7280`) that sits centered on the top border of the white list box.
Requires `.mega-group--bundle` to have `position: relative` and `padding-top: 1.5rem`.

### 8. Gray column background extending to LEFT edge and BOTTOM of panel
**Final working approach — pure CSS, no JS:**

`.mega-inner` gets `position: relative`. A `::before` pseudo-element is defined inside `@media (min-width: 992px)`:

```css
.mega-inner::before {
  content: '';
  position: absolute;
  top: -1.5rem;          /* covers panel's top padding */
  bottom: -1.5rem;       /* covers panel's bottom padding */
  left: calc(-50vw + 50%);           /* pulls left edge to viewport left */
  width: calc(50vw - 50% + 292px);   /* container-margin + 12px padding + 280px column */
  background: #f4f4f4;
  z-index: -1;
}
```

**Why it works:** `calc(-50vw + 50%)` = `-(viewport_width - container_width)/2`, which is exactly the auto-margin of the Bootstrap container. So the stripe starts at the viewport left edge regardless of viewport width. The width formula covers that margin plus the 12px container padding plus the 280px bundle column.

`z-index: -1` on the `::before` (within `.mega-panel`'s stacking context) paints the stripe above the white panel background but behind all group content.

Mobile override has `.mega-inner::before { display: none }`.

**Approaches that did NOT work (for reference):**
- Negative `margin-left: calc(var(--bs-gutter-x) * -0.5)` — only removes 12px of padding; invisible at wide viewports where the auto-margin is hundreds of pixels.
- `::before` on `.mega-panel` with JS-set `--bundle-col-right` CSS variable — CSS was correct but change was invisible due to Hugo dev server serving stale in-memory CSS (not related to the approach itself). Abandoned in favour of the simpler pure-CSS `::before` on `.mega-inner`.

### 9. Tooltip removed
The `.mega-label` "Design and Development" floating label was removed — it rendered as a large dark badge overlapping the panel and looked like an artefact.
- Removed `tooltip:` key from `primary.yml` (EN + JA)
- Removed `.mega-label` CSS block and its media-query rules
- Removed `positionLabel()` function and its call from `mega-menu.js`

### 10. Bundle item spacing
`.mega-group--bundle .mega-link` padding increased from `1rem 1rem` to `1.25rem 1rem`.

---

## Known deployment gotcha

Hugo dev server (`hugo server`) serves CSS from an **in-memory build**, not from `public/`. If SASS changes appear to have no effect after a browser hard-refresh:
1. Stop and restart `hugo server` — this forces a full recompile from source.
2. Then do a normal browser refresh (the ETag changes on restart, so the browser fetches fresh CSS).
Running `hugo` (the build command) writes to `public/` but does NOT affect what the running dev server serves.
