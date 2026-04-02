---
name: Hugolify & Hugo Skills Reference
description: Comprehensive reference for Hugolify framework — setup, blocks, sections, shortcodes, customization, and Hugo fundamentals
type: reference
---

# Hugolify & Hugo Skills Reference

## What is Hugolify?

Hugolify is an open-source Jamstack framework built on top of **Hugo** (static site generator) and **Bootstrap 5**. It provides a modular, content-block-based approach to building fast, accessible, and low-carbon websites.

Supports 7 headless CMS integrations: CloudCannon, Decap, Netlify, Pages, Static, Sveltia, Tina.

GitHub org: `github.com/hugolify/`

---

## Getting Started

### Prerequisites
- Hugo (extended version required for SASS)
- Node.js / Yarn
- Git

### Key CLI Commands
```bash
yarn watch    # Start dev server with livereload → http://localhost:1313/
yarn cms      # Start Netlify/Decap CMS locally → http://localhost:1313/admin/
yarn build    # Build for production
yarn update   # Update Hugo modules
yarn clean    # Clean modules cache
```

### Update template from upstream
```bash
git remote add template git@github.com:hugolify/hugolify-template.git
git fetch --all
git merge template/main --allow-unrelated-histories
```

---

## Module System

Hugolify v2 uses Hugo's module system. Configure in `/config/_default/module.yaml`.

### Required modules (all projects)
```yaml
imports:
  - path: github.com/hugolify/hugolify-theme/v2      # templates, functions, layouts, JS
  - path: github.com/hugolify/hugolify-theme-bootstrap # Bootstrap 5 variables & styles
  - path: github.com/hugolify/hugolify-admin           # headless CMS integration
```

### Optional content modules (add as needed)
- `hugolify-theme-posts`, `hugolify-theme-projects`, `hugolify-theme-post-categories`
- `hugolify-theme-services`, `hugolify-theme-publications`
- All sections follow pattern: `github.com/hugolify/hugolify-theme-[section]`
- Taxonomies: `github.com/hugolify/hugolify-theme-[content]-[taxonomy]`

---

## Content Structure

Content lives in `/content/`. Pages are built by adding **blocks** to the frontmatter.

### Page frontmatter pattern
```yaml
---
title: "Page Title"
seo:
  title: "Custom SEO title"
  description: "Page meta description"
blocks:
  - type: title
    heading:
      title: "Hello World"
  - type: paragraph
    text: "Some **markdown** content"
---
```

### Global SEO: `/data/seo.yml`
```yaml
color: "#000000"
title: "Site Title"
description: "Site description"
```

---

## Blocks Reference (25+)

All blocks go in the `blocks:` array in page frontmatter.

### `title`
```yaml
- type: title
  heading:
    surtitle: ''     # text above title
    title: ''        # main heading
    text: ''         # markdown
  background: false
```

### `paragraph`
```yaml
- type: paragraph
  title: ''
  text: ''           # markdown
  grid: small|medium|large|container|full
  offset: start|end|center
  align: start|end|center
  background: false
```

### `editorial`
Text + image side-by-side, reversible direction.
```yaml
- type: editorial
  direction: ltr|rtl
  surtitle: ''
  title: ''
  text: ''
  notes:
    - text: ''
  ctas:
    - text: ''
      url: ''
      blank: false
      lang: ''
  image:
    src: ''
    filter: ''
    alt: ''
    legend: ''
    credit: ''   # markdown
```
Image sizes set in `/config/_default/params.yaml`: 624px desktop, 336px mobile.

### `cta` (Call to Action)
```yaml
- type: cta
  heading:
    surtitle: ''
    title: ''
    text: ''
  ctas:
    - text: ''
      url: ''
      blank: false
      lang: ''
  background: false
```

### `gallery`
Accessible lightbox using Tobii JS. Add `/^tobii/` to PostCSS safelist.
```yaml
- type: gallery
  heading:
    surtitle: ''
    title: ''
    text: ''
  column: 3        # columns on desktop
  ratio: 1         # thumbnail aspect ratio
  background: false
  gallery:
    - src: ''
      filter: ''
      alt: ''
      legend: ''
      credit: ''
```

### `alert`
3 status variants.
```yaml
- type: alert
```

### `audio`
```yaml
- type: audio
```

### `chart`
```yaml
- type: chart
```

### `comparison`
```yaml
- type: comparison
```

### `datas`
Displays data with optional gauges in columns.
```yaml
- type: datas
```

### `embed`
Centered embedded media.
```yaml
- type: embed
```

### `faq`
Displays image cards in columns.
```yaml
- type: faq
```

### `figure`
```yaml
- type: figure
  # centered image with legend and credit
```

### `form`
```yaml
- type: form
```

### `images`
One or two column image layouts.
```yaml
- type: images
```

### `informations`
Cards with icons/buttons in columns.
```yaml
- type: informations
```

### `instagram`
```yaml
- type: instagram
```

### `latest`
Latest items from posts, projects, etc.
```yaml
- type: latest
```

### `logos`
Grid of logos.
```yaml
- type: logos
```

### `map`
Single marker map.
```yaml
- type: map
```

### `newsletter`
```yaml
- type: newsletter
```

### `pushes`
Card-based content.
```yaml
- type: pushes
```

### `quote`
```yaml
- type: quote
  # quote text + author
```

### `search`
```yaml
- type: search
  # powered by Pagefind
```

### `selected`
Curated items from specific sections.
```yaml
- type: selected
```

### `testimonials`
Grid or carousel layout.
```yaml
- type: testimonials
```

### `timeline`
```yaml
- type: timeline
```

### `video`
```yaml
- type: video
```

---

## Sections (15 content types)

Each section is a Hugo module. Add to `/config/_default/module.yaml`.

| Section | Purpose |
|---------|---------|
| `case-studies` | Present case studies with content blocks |
| `docs` | Nested documentation pages |
| `events` | Event pages |
| `expertises` | Skills of a firm or person |
| `jobs` | Job advertisements |
| `pages` | Nested pages with content blocks |
| `persons` | Authors and people |
| `places` | Physical locations |
| `posts` | News/blog |
| `products` | Products with price, variants |
| `projects` | Portfolio projects |
| `publications` | Press releases archive |
| `real-estates` | Property ads/auctions |
| `services` | Company/personal services |
| `taxonomies` | Content classification |

---

## Taxonomies

Hugolify provides 18 taxonomy types across sections:

- **Jobs**: categories, expertises, places, tags
- **Persons**: expertises, places
- **Posts**: authors, categories, expertises, tags
- **Products**: categories, tags
- **Projects**: tags, types
- **Publications**: categories, expertises, persons
- **Real Estates**: persons

---

## Shortcodes (16 available)

Used in markdown content bodies.

| Shortcode | Purpose |
|-----------|---------|
| `alert` | Alert with state |
| `alert block` | Alert block with state |
| `badge` | Badge with state |
| `blank link` | Link opening in new tab |
| `blockquote` | Styled blockquote |
| `button` | Button link |
| `dailymotion` | Dailymotion embed |
| `details` | HTML `<details>` element |
| `figure` | Responsive image with legend/credit |
| `map` | Map with one or multiple markers |
| `qr` | QR code image |
| `span lang` | `<span lang="">` for multilingual |
| `twitch` | Twitch embed |
| `video` | Video with legend/credit |
| `vimeo` | Vimeo embed |
| `youtube` | YouTube embed |

---

## Customization

### CSS / SASS
- Override Bootstrap variables in `_variables.sass`
- Print styles: `sass/print.sass` or `css/print.css` (enable with `css.print: true` in params)
- Preload CSS for perf: `css.preload: true` in params
- PostCSS config: `postcss/[theme]/postcss.config.js`
- PurgeCSS removes unused Bootstrap/Hugolify styles in production

### HTML Template Overrides
Mirror the framework's directory structure under `layouts/`:
```
layouts/
└── partials/
    └── posts/
        └── item.html   # overrides hugolify-theme's version
```

### Menu Configuration (`/config/_default/params.yaml`)
Two layout options:
- **Offcanvas** (default): `position: end|start|top|bottom`
- **Modal**: `size: fullscreen|lg|xl`, `centered: true|false`

SASS variables:
```sass
$navbar-expand: lg        // responsive breakpoint, false to disable
$menu-background-color    // inherits $header-background-color
$menu-color               // inherits $header-color
```

### Themes
5 built-in themes available (Theme 1–5) under `/docs/customization/themes/`.
Two styling modules:
- `hugolify-theme-bootstrap` — Bootstrap 5 based
- `hugolify-theme-design-system` — framework-independent

### Images / Logo
Configure in params.yaml: logo, retina support, dimensions.

### Favicons
Replace or add favicons via customization docs.

---

## Hugo Fundamentals (relevant to Hugolify)

### Key directories
```
config/_default/      # Hugo configuration files (params.yaml, module.yaml, etc.)
content/              # Markdown content files
layouts/              # Template overrides (partials, shortcodes)
static/               # Static assets (copied as-is)
assets/               # Processed assets (SASS, JS)
data/                 # Data files (seo.yml, etc.)
```

### Hugo config split
Hugolify uses directory-based config (`config/_default/`) with separate yaml files per concern:
- `module.yaml` — module imports
- `params.yaml` — site parameters
- `hugo.toml` or `config.yaml` — core Hugo settings

### Hugo modules
```bash
hugo mod get -u          # update all modules
hugo mod tidy            # remove unused modules
```

### Template override precedence
Hugo looks in the project's `layouts/` before the module's layouts — this is how Hugolify allows overrides.

---

## Deployment

- **Netlify**: supported, includes Identity + Git gateway for CMS auth
- **GitHub Pages**: supported
- Performance: PurgeCSS, Pagefind for search, image optimization via cloud CDN

---

## Key Config File: `/config/_default/params.yaml` (common params)

```yaml
css:
  preload: true
  print: false

# Menu
menu:
  layout: offcanvas  # or: modal
  position: end      # offcanvas: end|start|top|bottom
  # modal:
  # size: fullscreen
  # centered: true
```
