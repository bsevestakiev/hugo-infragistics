# n8n Translation Workflow — Simplified Node Config

Translates new `content/en/*.md` files that have no `content/ja/` counterpart.
One universal Ollama prompt — no file type detection, no SHA tracking.

**Repo:** `bsevestakiev/hugo-infragistics`
**Ollama:** replace `<OLLAMA_IP>` with your LAN IP throughout

---

## Credential Setup (do this first)

In n8n → Credentials → New:

**GitHub Token**
- Type: `Header Auth`
- Name: `GitHub Token`
- Header Name: `Authorization`
- Header Value: `Bearer <YOUR_PAT>`

---

## Workflow Overview

```
[1] Manual Trigger
      ↓
[2] Get EN Tree        ← GitHub API: list content/en/ files
      ↓
[3] Get JA Tree        ← GitHub API: list content/ja/ files
      ↓
[4] Find Missing       ← Code node: compare, output files to translate
      ↓
[5] Loop Items         ← Split In Batches (size: 1)
      ↓
[6] Get EN Content     ← GitHub API: fetch file content
      ↓
[7] Build Prompt       ← Code node: decode base64, wrap in prompt
      ↓
[8] Call Ollama        ← HTTP Request: translate
      ↓
[9] Encode & Commit    ← Code node: base64 encode output
      ↓
[10] Create JA File    ← GitHub API: write to content/ja/
```

---

## Node 1 — Manual Trigger

- Type: `Manual Trigger`
- No configuration needed.

---

## Node 2 — Get EN Tree

- Type: `HTTP Request`
- Name: `Get EN Tree`
- Method: `GET`
- URL:
  ```
  https://api.github.com/repos/bsevestakiev/hugo-infragistics/git/trees/main?recursive=1
  ```
- Authentication: `Predefined Credential Type` → `Header Auth` → `GitHub Token`
- Response Format: `JSON`

---

## Node 3 — Get JA Tree

- Type: `HTTP Request`
- Name: `Get JA Tree`
- Method: `GET`
- URL:
  ```
  https://api.github.com/repos/bsevestakiev/hugo-infragistics/git/trees/main?recursive=1
  ```
- Authentication: same `GitHub Token`
- Response Format: `JSON`

> Connect: Node 2 output → Node 3 input (run sequentially)

---

## Node 4 — Find Missing

- Type: `Code`
- Name: `Find Missing`
- Mode: `Run Once for All Items`
- Language: `JavaScript`

```javascript
// Pull tree arrays from ancestor nodes
const enTree = $('Get EN Tree').first().json.tree;
const jaTree = $('Get JA Tree').first().json.tree;

// Build a set of existing JA file paths
const jaPaths = new Set(
  jaTree
    .filter(f => f.type === 'blob')
    .map(f => f.path)
);

// Find EN markdown files that have no JA counterpart
const missing = enTree
  .filter(f =>
    f.type === 'blob' &&
    f.path.startsWith('content/en/') &&
    f.path.endsWith('.md')
  )
  .filter(f => {
    const jaPath = f.path.replace('content/en/', 'content/ja/');
    return !jaPaths.has(jaPath);
  })
  .map(f => ({
    json: {
      en_path: f.path,
      ja_path: f.path.replace('content/en/', 'content/ja/')
    }
  }));

// Stop here if nothing to translate
if (missing.length === 0) {
  return [{ json: { status: 'nothing to translate' } }];
}

return missing;
```

> If output is `{ status: 'nothing to translate' }` you can add an IF node
> after this to stop the workflow early. Optional for now.

---

## Node 5 — Loop Items

- Type: `Loop Over Items` (or `Split In Batches`)
- Name: `Loop Items`
- Batch Size: `1`

> Connect: Node 4 output → Node 5 input

---

## Node 6 — Get EN Content

- Type: `HTTP Request`
- Name: `Get EN Content`
- Method: `GET`
- URL:
  ```
  https://api.github.com/repos/bsevestakiev/hugo-infragistics/contents/{{ $json.en_path }}
  ```
- Authentication: `GitHub Token`
- Response Format: `JSON`

> The response includes `content` (base64 encoded) and `sha`.

---

## Node 7 — Build Prompt

- Type: `Code`
- Name: `Build Prompt`
- Mode: `Run Once for Each Item`

```javascript
const item = $input.first().json;

// Decode base64 file content
const rawContent = Buffer.from(item.content, 'base64').toString('utf-8');

const systemPrompt = `You are a professional translator specializing in technical and marketing content.
Translate Hugo Markdown content from English to Japanese.

Rules:
- Output ONLY the translated file. No explanations, no commentary, no code fences.
- Preserve all YAML keys exactly as-is.
- Preserve all Markdown formatting: headings, bold, italic, lists, line breaks.
- Preserve all Hugo shortcodes exactly. Only translate text= and legend= attribute values. Never alter link=, src=, href=, or url= values.
- Do NOT translate: dates, booleans, numbers, URLs, file paths, CSS values, component type names, proper names, brand names, company names.
- Keep all YAML structure, indentation, and --- delimiters exactly as given.`;

const userPrompt = `Translate this Hugo content file from English to Japanese:\n\n${rawContent}`;

return [{
  json: {
    en_path: $('Loop Items').first().json.en_path,
    ja_path: $('Loop Items').first().json.ja_path,
    system_prompt: systemPrompt,
    user_prompt: userPrompt
  }
}];
```

---

## Node 8 — Call Ollama

- Type: `HTTP Request`
- Name: `Call Ollama`
- Method: `POST`
- URL:
  ```
  http://<OLLAMA_IP>:11434/api/generate
  ```
- Authentication: None
- Body Content Type: `JSON`
- Body:
  ```json
  {
    "model": "gpt-oss:20b",
    "system": "{{ $json.system_prompt }}",
    "prompt": "{{ $json.user_prompt }}",
    "stream": false
  }
  ```
- Response Format: `JSON`

> Timeout: set to `300000` ms (5 min) — large files can be slow.
> The translated content is in `response.response`.

---

## Node 9 — Encode & Commit

- Type: `Code`
- Name: `Encode Output`
- Mode: `Run Once for Each Item`

```javascript
const translated = $input.first().json.response;
const ja_path = $('Build Prompt').first().json.ja_path;

// Encode translated content to base64 for GitHub API
const encoded = Buffer.from(translated, 'utf-8').toString('base64');

return [{
  json: {
    ja_path: ja_path,
    encoded_content: encoded,
    commit_message: `translate: ${ja_path}`
  }
}];
```

---

## Node 10 — Create JA File

- Type: `HTTP Request`
- Name: `Create JA File`
- Method: `PUT`
- URL:
  ```
  https://api.github.com/repos/bsevestakiev/hugo-infragistics/contents/{{ $json.ja_path }}
  ```
- Authentication: `GitHub Token`
- Body Content Type: `JSON`
- Body:
  ```json
  {
    "message": "{{ $json.commit_message }}",
    "content": "{{ $json.encoded_content }}",
    "branch": "main"
  }
  ```
- Response Format: `JSON`

> Each commit triggers a Netlify deploy. With 10 files that means up to 10
> sequential deploys — acceptable for now.

---

## Testing Order

1. **Run Node 2 and 3 manually** — verify you get a `tree` array back
2. **Run through Node 4** — check the output lists your 10 EN files
3. **Run one item through Nodes 6–8** — verify Ollama returns valid translated content
4. **Check the output of Node 9** — paste the base64 into a decoder and confirm it looks right
5. **Run Node 10 for one file** — confirm it appears in `content/ja/` on GitHub
6. **Run the full workflow** — translate all 10 files

---

## Common Issues

| Problem | Fix |
|---|---|
| Node 4 returns empty | `content/ja/` doesn't exist yet — the JA tree will be empty, which is fine; check filter logic |
| Ollama returns extra text | Add instruction to system prompt: "Do not wrap output in code fences or backticks" |
| GitHub 422 on Node 10 | File already exists — need to add `sha` field (only needed for updates, not first run) |
| Ollama timeout | Increase HTTP Request timeout in n8n to 300000ms |
| Base64 encoding issues | Ensure Node 9 uses `utf-8` encoding explicitly |
