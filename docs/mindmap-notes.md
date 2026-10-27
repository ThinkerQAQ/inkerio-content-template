# Mind-map note example

[简体中文](mindmap-notes.zh-CN.md) · [Back to README](../README.md)

This content template includes two equivalent **software system design** mind-map notes:

| Language | Source | Preview URL |
| --- | --- | --- |
| Chinese | [`src/content/notes/sample-mindmap.md`](../src/content/notes/sample-mindmap.md) | `/notes/sample-mindmap/` |
| English | [`src/content/note-translations/en/sample-mindmap.md`](../src/content/note-translations/en/sample-mindmap.md) | `/en/notes/sample-mindmap/` |

The original note contains `defaultView: mindmap`. The English translation uses `translationOf: sample-mindmap` and inherits the default view; the renderer uses the English body for the English map.

## Try it locally

Clone the engine and this template as described in the [README](../README.md), then from the **engine checkout** run:

```bash
go run ./tools/blogctl/cmd site assemble --content-root ../blog-content
npm run check
npx --no-install astro dev --port 4321
```

Visit [Chinese preview](http://localhost:4321/notes/sample-mindmap/) or [English preview](http://localhost:4321/en/notes/sample-mindmap/). The single circular view-switch icon above the reading-jump control toggles **Read / Map** from anywhere on the page and returns to the note start. The icon shows the destination view (mind map or document), with accessible text and hover hints. In the map, expand branches by clicking nodes, drag/pan, zoom with the wheel or the separate canvas toolbar, fit the overview, and use fullscreen. Large maps start with deeper branches folded.

## Create your own map

Copy the Chinese source to `src/content/notes/YOUR_ID.md`, change the title, description, `sourcePath`, `order`, and body. Put one `#` root heading at the top, then use `##` / `###` headings and nested Markdown lists for branches. `defaultView: mindmap` is optional; without it the page starts in Markdown mode.

For English, add `src/content/note-translations/en/YOUR_ID.md` with `translationOf: YOUR_ID` and an English Markdown body. Do **not** copy `defaultView` into the translation; it inherits that setting from the original note. Keep both structures in sync.

This feature renders **Markdown as a Markmap view**, not native `.xmind` data. Convert an XMind map to hierarchical Markdown first if needed. The site still displays plain Markdown without JavaScript. See the engine's [full mind-map tutorial](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/how-to/mindmap-notes.md) and [schema reference](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/reference/content-schema.md).
