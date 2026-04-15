# Project Knowledge Base

## Project Overview

Bilingual (EN/JA) static website using:
- **Hugo Extended** v0.145.0
- **Hugolify** theme + admin module (Hugo modules, not a local theme folder)
- **Node.js** v20 on the dev machine
- Translation watcher (Phase 5, not yet implemented) will auto-generate `content/ja/` from `content/en/` via Ollama

**Key rule:** `content/en/` is the single source of truth. `content/ja/` is auto-generated and must never be hand-edited.

---

## Running the Dev Server

```bash
# Start Hugo (LAN-accessible, live reload)
hugo server --disableFastRender --port 1313 --bind 0.0.0.0

# Site:    http://10.14.0.100:1313/
# JA site: http://10.14.0.100:1313/ja/
```

No CMS is set up at this time. Admin panel will be configured manually later.

---

## Project Structure

```
infra-test/
├── config/_default/
│   ├── hugo.yaml          — core Hugo config (defaultContentLanguage: en)
│   ├── languages.yaml     — EN + JA language definitions with contentDir
│   ├── params.yaml        — languageSwitcher: true
│   └── ...other configs
├── content/
│   ├── en/                — MASTER content (edit here only)
│   │   ├── _index.md      — homepage blocks
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── legal-mentions/
│   │   ├── privacy-policy/
│   │   └── sitemap/
│   └── ja/                — AUTO-GENERATED (do not edit)
│       └── blog/
├── assets/
│   ├── images/            — ALL block images go here (NOT static/images/)
│   │   └── home/          — homepage images
│   └── sass/
│       ├── site.sass
│       ├── abstracts/
│       │   └── _variables-site.sass
│       └── custom.sass    — Noto Sans JP font + custom CSS
├── layouts/               — local template overrides
├── static/                — truly static files (favicons, fonts, etc.)
│   └── assets/images/     — share images, OG images (non-processed)
├── scripts/               — translation watcher scripts (Phase 5)
├── PLAN.md                — implementation plan (Phases 1-7)
└── KNOWLEDGE_BASE.md      — this file
```

---

## Hugo Multilingual Setup

`config/_default/languages.yaml`:
```yaml
en:
  languageCode: en
  languageName: English
  title: Hugolify demo
  weight: 1
  contentDir: content/en

ja:
  languageCode: ja
  languageName: 日本語
  title: Hugolify デモ
  weight: 2
  contentDir: content/ja
```

---

## Hugolify Block System

Blocks are defined in the `blocks:` array in each page's frontmatter. Hugo dispatches to `partials/blocks/templates/<type>.html` via `blocks/range.html`.

### Available Block Types

`title`, `editorial`, `logos`, `testimonials`, `cta`, `paragraph`, `quote`, `faq`, `alert`, `audio`, `chart`, `comparison`, `datas`, `embed`, `figure`, `form`, `gallery`, `images`, `informations`, `instagram`, `latest`, `map`, `newsletter`, `pushes`, `search`, `selected`, `timeline`, `video`

---

## Block Frontmatter Structures

### `title` block
The `title` block renders via `blocks/heading.html` which requires fields nested under a `heading:` key.
```yaml
- type: title
  heading:
    surtitle: "Optional eyebrow text"
    title: "Main headline"
    text: "Supporting paragraph text."
  ctas:
    - text: "Button Label"
      url: "/path/"
```

### `editorial` block
Uses flat fields (NOT nested under `heading:`). Renders via `content-with-notes.html`.
```yaml
- type: editorial
  direction: ltr          # or rtl — alternates image left/right
  title: "Section Title"
  text: "Body text here."
  ctas:
    - text: "Learn More"
      url: "/path/"
  image:
    src: "images/folder/file.webp"   # path relative to assets/
    alt: "Image description"
```

### `logos` block
Requires `heading:` wrapper. Items use `src` + `title`.
```yaml
- type: logos
  heading:
    title: "Section Title"
  items:
    - src: "images/logos/company.svg"   # relative to assets/
      title: "Company Name"
    - url: "https://..."                # optional link
      src: "images/logos/other.svg"
      title: "Other Company"
```

### `testimonials` block
Requires `heading:` wrapper. Items use `quote` + `author.title`.
```yaml
- type: testimonials
  heading:
    title: "Section Title"
    text: "Optional subtext."
  layout: grid             # or carousel
  items:
    - quote: "Quote text here."
      author:
        title: "Person Name, Role"
        image:
          src: "images/people/name.webp"  # optional
```

### `cta` block
Requires `heading:` wrapper.
```yaml
- type: cta
  heading:
    title: "Call to Action Title"
    text: "Supporting text."
  ctas:
    - text: "Primary Button"
      url: "/path/"
    - text: "Secondary Button"
      url: "/path/"
```

### `paragraph` block
```yaml
- type: paragraph
  text: "Markdown body text."
```

### `quote` block
```yaml
- type: quote
  quote: "The quote text."
  author:
    title: "Author Name"
    text: "Author title/company"
```

---

## Images — Critical Rules

### Block images (editorial, logos, etc.)
**MUST go in `assets/images/`** — the theme uses `resources.Get` (Hugo asset pipeline).

```
assets/images/home/hero.webp       →   src: "images/home/hero.webp"
assets/images/products/ui.webp     →   src: "images/products/ui.webp"
```

- Path in frontmatter is **relative to `assets/`** (no leading `/`)
- Hugo auto-generates responsive sizes and WebP variants
- WebP format is supported and recommended
- Subdirectory organisation is encouraged

### Static assets (OG images, favicons, downloads)
Put in `static/` — served as-is at the root URL.
```
static/assets/images/share.png  →  /assets/images/share.png
```

### Dev server image caching issue
If you add a new image to `assets/` and the dev server shows `src="false"`, restart Hugo — it occasionally needs a full restart to pick up new assets files.

---

## Custom CSS

`assets/sass/custom.sass` — loaded automatically by the theme.

Current contents:
```sass
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap')

body
  font-family: 'Noto Sans JP', sans-serif
```

---

## Animated Cycling Text in Hero

The Hugolify theme supports CSS-only animated cycling text in headings. The `heading.title` field is rendered via `safeHTML`, so raw HTML is accepted.

Structure:
```yaml
title: "Build apps that are <span><i>faster</i><i>smarter</i><i>beautiful</i><i>faster</i></span> than ever."
```

Required CSS in `custom.sass` (targeting `.block-title` since there is no `.hero` block type):
```sass
.block-title h2 > span
  display: inline-block
  height: 1em
  overflow: hidden
  perspective: 600px
  vertical-align: bottom

.block-title h2 span span
  animation-delay: 2s
  animation-duration: 8s
  animation-iteration-count: infinite
  animation-name: animate_words
  display: inline-flex
  flex-direction: column

.block-title h2 i
  font-style: normal
  backface-visibility: hidden
  text-align: left

@keyframes animate_words
  0%
    transform: translateY(0)
  25%
    transform: translateY(-25%)
  50%
    transform: translateY(-50%)
  75%
    transform: translateY(-75%)
  100%
    transform: translateY(0)
```

Adjust the keyframe percentages based on how many `<i>` words you have (divide 100% by word count per step).

---

## Hugo Template Variable Scoping — Critical Gotcha

**Never reassign outer-scope variables inside `with`/`if`/`range` blocks.**

This silently fails — `$style` stays `""` outside the block:
```html
{{- $style := "" -}}
{{- with .background_color -}}
  {{- $style = printf "background-color: %s;" . -}}  ← does NOT update outer $style
{{- end -}}
```

Instead, use `with` directly in the output:
```html
{{- with .background_color }} style="background-color: {{ . }};"{{- end }}
```

---

## CSS Custom Property Overrides — Cascade Pitfall

When the theme sets a CSS custom property (`--bs-gutter-y`, `--bs-aspect-ratio`) on the same selector as your override, the cascade order determines the winner — not `!important` on the variable. If the theme compiles its rule into the same specificity level, source order wins.

**Reliable fix:** Override the actual computed property instead of the variable:
```sass
// Unreliable — may lose to same-specificity theme rule
.block-logos .logos
  --bs-gutter-y: 0.5rem

// Reliable — directly overrides the rendered property
.block-logos .logos > div
  margin-top: 0.1rem !important
```

---

## Font Setup — Aktiv Grotesk

Only `.woff` files exist in `static/fonts/` (no `.woff2`). The `@font-face` declarations in `custom.sass` reference only `.woff`. If `.woff2` files are added later, update both `@font-face` src AND the preload hints in `layouts/partials/head/preload.html`.

`font-display: block` is used (not `swap`) to avoid FOUT — combined with `<link rel="preload">` in `preload.html`, the font loads before first render.

---

## Hugolify Module Architecture

The project uses Hugo modules (not a local `/themes/` folder). All theme files are in the Hugo module cache at:
```
~/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugolify/
  hugolify-theme@v1.27.14/
  hugolify-admin@v0.9.2/
```

To override any theme template, create the same file path under the local `layouts/` directory. Local files always take precedence over module files.

Example: to override `hugolify-theme/layouts/partials/blocks/templates/title.html`:
```
layouts/partials/blocks/templates/title.html
```

---

## CMS Status

No CMS is configured. Removed all Sveltia/DecapCMS setup due to complexity of HTTPS + LAN access requirements. Will be set up manually at a later stage.

**Key learnings from CMS attempts:**
- Sveltia CMS requires HTTPS or localhost — won't work over plain HTTP on LAN
- DecapCMS supports a `proxy` backend type with custom URL (works over HTTP on LAN)
- `decap-server` provides the local proxy on port 8081 (`npx decap-server`)
- For LAN access with Sveltia: need HTTPS on both Hugo (port 1313) AND decap-server (port 8081) — mixed content blocks HTTP proxy from an HTTPS page
- Caddy can proxy both over HTTPS with `tls internal` but requires clicking through a cert warning (no sudo = can't auto-install the CA)
- Hugolify-admin module auto-generates `config.yml` via a content template; override with `layouts/admin/single.yml`
- Hugolify-admin module generates `index.html` via `layouts/admin/list.html`; the CMS is selected via `params.admin.cms` (options: `decapcms`, `sveltiacms`, `netlifycms`, `staticcms`)

---

## n8n Translation Workflow

The translation pipeline is implemented as an n8n workflow (`n8n_workflow.json`).
Full node-by-node documentation is in `N8N_WORKFLOW_SIMPLE.md`.
Full field-by-field translation rules are in `N8N_TRANSLATION_PLAN.md`.

### Infrastructure

| Component | Location |
|---|---|
| n8n | Separate LAN machine, accessed via `https://n8n-it.infragistics.local` |
| Ollama | `http://10.20.14.98:11434` |
| Model | `gpt-oss:20b` (tested, good Japanese quality) |
| GitHub repo | `bsevestakiev/hugo-infragistics` |
| Deployment | Netlify (auto) + GitHub Actions (via repository_dispatch) |

### Workflow Flow

```
Manual Trigger
  → Get EN Tree (GitHub API)
  → Get JA Tree (GitHub API)
  → Find Missing (Code node — compares trees, outputs untranslated files)
  → Has Files (IF node)
    ├─ True  → Loop Items → Get EN Content → Build Prompt → Call Ollama
    │                     → Encode Output → Create JA File → (loop back)
    │          Loop Done Branch → Trigger Build
    └─ False → Trigger Build (nothing to translate, still rebuild)
  → Trigger Build (POST repository_dispatch to GitHub)
  → GitHub Actions runs deploy.yml → yarn build → S3 → CloudFront
```

### n8n Credential Setup

- Type: `Header Auth`
- Header **Name** field: `Authorization` (this is the HTTP header name — not the credential label)
- Header **Value** field: `Bearer <PAT>`
- The credential label (display name in n8n) can be anything

### nginx WebSocket Config (required for n8n)

Without these, clicking Execute drops the connection immediately:

```nginx
location / {
    proxy_pass http://10.20.14.49:5678;
    proxy_buffering off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 3600s;
    proxy_send_timeout 3600s;
}
```

### Key n8n Code Node Rules

- In `Run Once for Each Item` mode: use `$json` (not `$input.first().json`)
- Return format: `return { json: { ... } }` — no array wrapper
- In `Run Once for All Items` mode: use `$('NodeName').first().json`
- Avoid template literals with backticks in Code nodes — use string array `.join()` or concatenation
- Avoid `---` in strings — `--` is the JS decrement operator if quotes get corrupted on paste

### Loop Items (Split In Batches v3) Output Order

In n8n Split In Batches v3:
- Output **0** = Done Branch (fires when all items processed)
- Output **1** = Loop Branch (fires for each batch item)

This is the opposite of what the n8n docs imply — wire accordingly.

### Find Missing Logic

Returns an array of `{ en_path, ja_path }` objects for files in `content/en/`
that have no counterpart in `content/ja/`. When nothing is missing, returns
`[{ json: { status: 'nothing to translate' } }]` so the IF node can route to
Trigger Build without crashing downstream nodes.

### GitHub Actions Trigger

The deploy workflow uses `repository_dispatch` (not `push`) so it only fires
when n8n explicitly calls it after translations complete:

```
POST https://api.github.com/repos/bsevestakiev/hugo-infragistics/dispatches
{ "event_type": "translation-complete" }
```

Requires a PAT with `repo` scope in the Authorization header.

### GitHub Actions Secrets Required

| Secret | Purpose |
|---|---|
| `AWS_ACCESS_KEY_ID` | S3 deployment |
| `AWS_SECRET_ACCESS_KEY` | S3 deployment |
| `S3_BUCKET_NAME` | Target bucket for `hugo.infragistics.com` |
| `CLOUDFRONT_DISTRIBUTION_ID` | Cache invalidation after deploy |

### Translation — What Gets Translated

Translate: `title`, `description`, `text`, `surtitle`, `quote`, `role`, `alt`,
`cta.text`, `ctas[].text`, `cycling_words[]`, `heading.title`, `heading.text`

Never translate: `date`, `url`, `type`, `layout`, `src`, `draft`, `isPage`,
`isIndex`, `column`, `section`, `count`, `weight`, `direction`, `author.name`,
`author.title` (company names), `logo.title` (brand names), carousel params

Hugo shortcodes: preserve syntax exactly, only translate `text=` and `legend=`
attribute values.

---

## Excluding Pages from Translation

Two approaches — pick one or combine them.

### Option 1 — Hardcoded exclusion list in n8n (simple)

In the **Find Missing** code node, add a list of paths to skip:

```js
const excluded = [
  'content/en/legal-mentions/_index.md',
  'content/en/sitemap/_index.md',
];

// skip excluded files in your filter loop:
if (excluded.includes(enFile.path)) continue;
```

Best for: a small, stable set of pages that will never need translation.

### Option 2 — `no_translate` frontmatter flag (flexible)

Add to any page you want skipped:

```yaml
---
title: "Some Page"
no_translate: true
---
```

Then in the **Find Missing** code node, fetch each EN file's content and skip it if the flag is present. Since content is already fetched later in the loop, the hardcoded list is simpler to implement first.

Best for: giving content editors per-page control without touching n8n.

---

## Translation Watcher (Phase 5 — Not Yet Implemented)

A Python script (`scripts/translate_watcher.py`) will:
- Watch `content/en/` for `.md` file saves
- Send changed translatable strings to Ollama (`qwen2.5` model) on the LAN
- Write output to `content/ja/`

**Translatable fields:** `title`, `surtitle`, `text`, `description`, `notes`  
**Protected fields (never translated):** `type`, `direction`, `src`, `url`, `alt`, `blank`, `lang`, `display`, `filter`, `credit`, `weight`, `date`

Ollama machine IP must be configured in the script before running.
