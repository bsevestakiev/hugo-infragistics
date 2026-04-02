# n8n Translation Workflow — Hugo EN → JA

## Overview

Manually triggered n8n workflow that:
1. Compares `content/en/` files in GitHub against existing `content/ja/` translations
2. Identifies new or changed files using GitHub blob SHAs
3. Translates each file through local Ollama
4. Commits translated files to `content/ja/` on GitHub
5. Push triggers automatic Netlify build and deploy

No webhook required. Manually triggered from n8n UI until workflow is stable,
then optionally scheduled.

---

## Architecture

```
n8n (LAN machine)
  │
  ├─► GitHub API (read content/en/ tree + file contents)
  ├─► GitHub API (read content/ja/ tree for SHA comparison)
  ├─► Ollama API (LAN IP, port 11434) — translate each file
  └─► GitHub API (create/update files in content/ja/)
                        │
                        └─► Netlify auto-deploys on push to main
```

---

## Prerequisites

| Requirement | Detail |
|---|---|
| GitHub Personal Access Token | Scopes: `repo` (read + write contents) |
| Ollama running on LAN | Accessible at `http://<ollama-ip>:11434` |
| Ollama model | Recommend `mistral`, `llama3`, or `qwen2.5` — test for JA quality |
| n8n credentials | Store GitHub token as n8n credential `GitHub API` |

---

## Content File Inventory

All files under `content/en/` that need a `content/ja/` counterpart:

```
content/en/_index.md                              → content/ja/_index.md
content/en/blog/_index.md                         → content/ja/blog/_index.md
content/en/blog/app-builder-ai-enterprise.md      → content/ja/blog/app-builder-ai-enterprise.md
content/en/blog/interview-founder-ceo-dean-guida.md → content/ja/blog/interview-founder-ceo-dean-guida.md
content/en/blog/why-leaders-afraid-of-ai.md       → content/ja/blog/why-leaders-afraid-of-ai.md
content/en/blog/reveal-top-software-challenges-survey.md → content/ja/blog/reveal-top-software-challenges-survey.md
content/en/contact/_index.md                      → content/ja/contact/_index.md
content/en/legal-mentions/_index.md               → content/ja/legal-mentions/_index.md
content/en/privacy-policy/_index.md               → content/ja/privacy-policy/_index.md
content/en/sitemap/_index.md                      → content/ja/sitemap/_index.md
```

Path mapping rule: replace `content/en/` prefix with `content/ja/`, filename unchanged.

---

## File Type Classification

Files fall into three types with different translation strategies.

### Type A — Blog post (simple frontmatter + body)

```markdown
---
title: "..."        ← TRANSLATE
date: 2026-02-12    ← KEEP (date, never translate)
description: "..."  ← TRANSLATE
---

Body markdown text  ← TRANSLATE
```

Files: `blog/*.md` (not `_index.md`)

### Type B — Page with minimal frontmatter + markdown body

```markdown
---
isPage: true        ← KEEP
draft: false        ← KEEP
title: Contact      ← TRANSLATE
description: "..."  ← TRANSLATE (if present)
url: sitemap        ← KEEP (URL slug, never translate)
hero:
  surtitle: "..."   ← TRANSLATE
  title: "..."      ← TRANSLATE
  text: "..."       ← TRANSLATE
  align: center     ← KEEP
---

## Markdown heading  ← TRANSLATE
Body text...         ← TRANSLATE
```

Files: `contact/_index.md`, `legal-mentions/_index.md`,
`privacy-policy/_index.md`, `sitemap/_index.md`, `blog/_index.md`

### Type C — Homepage (deep nested YAML, no body)

```markdown
---
isIndex: true       ← KEEP
draft: false        ← KEEP
title: Home         ← TRANSLATE
blocks:
  - type: title     ← KEEP (component name)
    background: true ← KEEP
    heading:
      title: "..."  ← TRANSLATE
      text: "..."   ← TRANSLATE
      surtitle: "..." ← TRANSLATE
    cycling_words:
      - "simplicity" ← TRANSLATE (display words)
    ctas:
      - text: "..."  ← TRANSLATE
        url: "/..."  ← KEEP
    items:
      - title: "..."  ← TRANSLATE
        text: "..."   ← TRANSLATE
        cta:
          text: "..." ← TRANSLATE
          url: "/..." ← KEEP
        image:
          src: "..."  ← KEEP
          alt: "..."  ← TRANSLATE
      - quote: "..."  ← TRANSLATE
        author:
          name: "..."  ← KEEP (proper names)
          role: "..."  ← TRANSLATE
          title: "..."  ← KEEP (company name)
        description: "..." ← TRANSLATE
        logo:
          src: "..."   ← KEEP
          title: "..."  ← KEEP (brand/org name)
    carousel:
      params: ...     ← KEEP (all technical params)
```

File: `_index.md` only.

---

## Frontmatter Field Rules — Complete Reference

### Always TRANSLATE
| Field | Context |
|---|---|
| `title` | Page/block titles (not logo titles or company names) |
| `description` | Meta descriptions, block descriptions |
| `text` | Block body text |
| `surtitle` | Label above headings |
| `heading.title` | Block headings |
| `heading.text` | Block subtext |
| `heading.surtitle` | Block surtitles |
| `quote` | Testimonial quotes |
| `role` | Person's job title |
| `alt` | Image alt text |
| `cta.text` | Button/link labels |
| `ctas[].text` | Button/link labels |
| `footing.ctas[].text` | Button/link labels |
| `cycling_words[]` | Animated display words |

### Always KEEP (never translate)
| Field | Reason |
|---|---|
| `date` | ISO date — not text |
| `url` | URL slug — Hugo routing |
| `type` | Block component name |
| `layout` | Template name |
| `direction` | CSS value (`rtl`/`ltr`) |
| `src` | File path |
| `href` | URL |
| `url` (nested) | URL |
| `background` | Boolean |
| `draft` | Boolean |
| `isPage` / `isIndex` | Boolean flag |
| `column` | Number |
| `section` | Hugo section name |
| `count` | Number |
| `weight` | Number |
| `carousel.params.*` | JS config object |
| `author.name` | Proper name |
| `author.title` | Company/org name |
| `logo.title` | Brand name |
| `image.src` | File path |

### Conditional
| Field | Rule |
|---|---|
| `title` under `logo:` or `author:` | KEEP — these are brand/company names |
| `title` under `items:` with `src:` (logo grid) | KEEP — these are brand names |
| `title` under `items:` with `text:` (product cards) | TRANSLATE — these are product descriptions |

---

## SHA Tracking Strategy

To avoid re-translating unchanged files on every run, embed the source file's
GitHub blob SHA into the translated file's frontmatter.

### In translated files, add one field:
```yaml
translated_from_sha: "abc123def456..."
```

### Detection logic in n8n:
1. Get SHA of `content/en/file.md` from GitHub tree API
2. Get the existing `content/ja/file.md` via GitHub API (if it exists)
3. Read `translated_from_sha` from ja file frontmatter
4. If `translated_from_sha` == current en SHA → **skip** (no change)
5. If missing or different → **translate**

This is reliable and requires no external state store in n8n.

---

## Hugo Shortcode Handling

The content contains Hugo shortcodes that must be preserved exactly:

```
{{< blank_link link="https://..." text="Link Text" >}}
{{< figure src="/images/..." legend="Caption" >}}
```

Rules:
- Preserve the shortcode name and all attribute **keys** exactly
- The `text=` and `legend=` attribute **values** may be translated
- The `link=`, `src=`, `href=` attribute values must NOT be translated
- Never alter `{{<` / `>}}` delimiters or spacing around them

Include these rules explicitly in your Ollama system prompt.

---

## Ollama Prompt Templates

### System Prompt (use for all requests)

```
You are a professional translator specializing in technical and marketing content.
Translate from English to Japanese.

Rules:
- Output ONLY the translated content. No explanations, no commentary.
- Preserve all Markdown formatting: headings (##), bold (**), italic (*), lists (-), line breaks (\).
- Preserve all Hugo shortcodes exactly. Only translate string values for text= and legend= attributes. Never alter link=, src=, href=, or url= values.
- Preserve all YAML structure, keys, and non-text values exactly as given.
- Do not translate: proper names, brand names, company names, URLs, file paths, boolean values, numbers, ISO dates, CSS values, or technical parameter names.
- Do not add, remove, or reorder any fields.
```

### Prompt — Type A (Blog post)

Send the full raw file content. The model sees the frontmatter and body together.

```
Translate the following Hugo Markdown file from English to Japanese.
Follow all rules in your system prompt.
Return the complete file with translated fields and body.
Preserve the --- delimiters and all YAML keys exactly.
Add the field `translated_from_sha: "<SHA>"` inside the frontmatter.

---
title: "..."
date: 2026-02-12
description: "..."
---

Body text...
```

### Prompt — Type B (Simple page)

Same as Type A. Send full file, request full file back.

### Prompt — Type C (Homepage — deep YAML)

Split the request. Send the frontmatter block only (everything between `---`).

```
Translate the following Hugo frontmatter YAML from English to Japanese.
Follow all rules in your system prompt.
Return only valid YAML — no markdown delimiters, no explanation.
Add the field `translated_from_sha: "<SHA>"` at the top level.

Translate these fields: title, description, text, surtitle, heading.title,
heading.text, heading.surtitle, quote, role, alt, cta.text, ctas[].text,
cycling_words[], footing.ctas[].text, description (block level).

Do NOT translate: type, layout, direction, src, url, href, background, draft,
isIndex, column, section, count, weight, carousel params, author.name,
author.title, logo.title, image.src, any boolean or numeric value.

YAML:
[paste frontmatter here]
```

Reassemble with `---\n<translated_yaml>\n---\n` in n8n after receiving the response.

---

## n8n Workflow — Node Structure

```
[Manual Trigger]
      │
      ▼
[Get EN file tree]
GitHub API — GET /repos/{owner}/{repo}/git/trees/main?recursive=1
Filter results: path starts with "content/en/" AND ends with ".md"
      │
      ▼
[Get JA file tree]
GitHub API — GET /repos/{owner}/{repo}/git/trees/main?recursive=1
Filter results: path starts with "content/ja/" AND ends with ".md"
Build a map: { "content/ja/path/file.md": sha }
      │
      ▼
[Compare & Filter]
Code node — for each EN file:
  - Derive ja_path = en_path.replace("content/en/", "content/ja/")
  - If ja file doesn't exist → mark as NEW
  - If ja file exists → fetch ja file content, read translated_from_sha
  - If translated_from_sha !== en_sha → mark as CHANGED
  - Otherwise → skip
Output: array of { en_path, ja_path, en_sha, action: "new"|"changed" }
      │
      ▼
[IF: any files to translate?]
  NO → [Stop — nothing to do]
  YES ↓
      │
      ▼
[Loop Over Items]  ← Split In Batches node (batch size: 1)
      │
      ▼
[Get EN file content]
GitHub API — GET /repos/{owner}/{repo}/contents/{en_path}
Decode base64 content → raw markdown string
      │
      ▼
[Detect file type]
Code node:
  - Type C: path === "content/en/_index.md"
  - Type A: path matches content/en/blog/*.md (not _index.md)
  - Type B: everything else
      │
      ▼
[Build Ollama payload]
Code node — construct prompt based on file type (see templates above)
Inject en_sha into prompt so model adds translated_from_sha
      │
      ▼
[Call Ollama]
HTTP Request node
  Method: POST
  URL: http://<ollama-lan-ip>:11434/api/generate
  Body (JSON):
  {
    "model": "qwen2.5:14b",
    "system": "<system prompt>",
    "prompt": "<file-type prompt>",
    "stream": false
  }
      │
      ▼
[Extract translated content]
Code node — parse response.response
For Type C: wrap result in ---\n...\n---\n
For Type A/B: use as-is (model returns full file)
Validate: check --- delimiters present, translated_from_sha field present
      │
      ▼
[Commit to GitHub]
GitHub API — PUT /repos/{owner}/{repo}/contents/{ja_path}
Body:
  {
    "message": "translate: {ja_path} [skip-netlify]",
    "content": "<base64 encoded translated content>",
    "sha": "<existing file sha if updating, omit if creating>"
  }
Note: use [skip-netlify] in commit message — push only once at the end
      │
      ▼
[Next item in loop]
      │
      ▼  (after loop completes)
[Final commit / trigger build]
Optional: make one empty commit or touch a file to trigger a single Netlify build
OR: remove [skip-netlify] from commit messages and let each push trigger a build
```

---

## GitHub API Reference

All requests use header: `Authorization: Bearer <token>`

### Get file tree (recursive)
```
GET https://api.github.com/repos/{owner}/{repo}/git/trees/main?recursive=1
```
Returns all file paths and their blob SHAs. Use `tree[].path` and `tree[].sha`.

### Get file content
```
GET https://api.github.com/repos/{owner}/{repo}/contents/{path}
```
Returns `content` (base64), `sha` (needed for updates), `encoding`.

### Create file
```
PUT https://api.github.com/repos/{owner}/{repo}/contents/{path}
{
  "message": "translate: path/to/file.md",
  "content": "<base64>",
  "branch": "main"
}
```

### Update existing file
```
PUT https://api.github.com/repos/{owner}/{repo}/contents/{path}
{
  "message": "translate: path/to/file.md",
  "content": "<base64>",
  "sha": "<current file sha>",   ← required for updates
  "branch": "main"
}
```

---

## Netlify Build Trigger

Netlify auto-deploys on every push to `main` (configured in `netlify.toml`).
No GitHub Actions needed.

Each file committed by n8n via the GitHub Contents API is a separate commit and
will trigger a separate Netlify build. To avoid N parallel builds:

**Option 1 — Batch commit via Git Data API** (advanced)
Create a single tree with all translated files and make one commit.
Requires: create blobs → create tree → create commit → update ref.

**Option 2 — Netlify build hook** (simple)
Add `[skip cd]` to each commit message (Netlify respects this).
After the loop, call a Netlify build hook URL via HTTP Request to trigger one build.
Set up the hook in Netlify UI → Site Settings → Build Hooks.

**Option 3 — Accept multiple builds** (simplest, fine for low volume)
With only ~10 files, a few parallel Netlify builds is not a problem.

Recommendation: start with Option 3, move to Option 2 once workflow is stable.

---

## Error Handling

| Failure point | Handling |
|---|---|
| Ollama unreachable | HTTP Request node → On Error: continue, log to n8n execution log |
| Ollama returns malformed YAML | Validation code node checks for `---` delimiters; if missing, skip file and log |
| Ollama forgets translated_from_sha | Post-process: inject it manually in n8n code node before commit |
| GitHub API rate limit | 5000 req/hr for authenticated requests — not a concern at this scale |
| GitHub 409 conflict on PUT | Means sha mismatch — re-fetch file sha and retry once |
| Shortcode corrupted by model | Manual review step — check ja/ files after first run |

---

## Recommended Ollama Model

Test these models for Japanese quality before committing to one:

| Model | Notes |
|---|---|
| `qwen2.5:14b` | Best Japanese quality, good instruction following |
| `qwen2.5:7b` | Faster, slightly lower quality |
| `mistral:7b` | Decent but weaker on Japanese |
| `llama3.1:8b` | Good general quality, moderate Japanese |

Run a manual test first:
```bash
curl http://<ollama-ip>:11434/api/generate -d '{
  "model": "qwen2.5:14b",
  "prompt": "Translate to Japanese: The future of enterprise software.",
  "stream": false
}'
```

---

## Implementation Order

1. **Set up GitHub token** in n8n credentials
2. **Test Ollama HTTP Request** in n8n with a simple translation prompt
3. **Build and test** the EN tree fetch + JA tree fetch + comparison logic
4. **Run on one file** end-to-end (pick `blog/app-builder-ai-enterprise.md` — simplest structure)
5. **Verify** the committed ja/ file renders correctly in Hugo locally
6. **Run on all Type A files** (blog posts)
7. **Tackle Type B** (simple pages)
8. **Tackle Type C** (homepage — most complex, test YAML output carefully)
9. **Add error handling** and SHA tracking validation
10. **Optionally schedule** the workflow (weekly or on-demand)
