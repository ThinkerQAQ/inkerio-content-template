import test from "node:test";
import assert from "node:assert/strict";
import { checkPublication, detectDemoPublication } from "./check-publication.mjs";

test("bundled example content is blocked before public deployment", async () => {
  await assert.rejects(checkPublication(), /Public deployment blocked: replace or remove/);
});

test("only original demonstration paths are detected", () => {
  const examples = detectDemoPublication([
    "src/content/articles/sample-article.md",
    "src/content/notes/sample-mindmap.md",
    "public/media/life/sample-album/01.webp",
    "src/content/life/my-personal-trip.md",
    "src/content/articles/my-original-writing.md",
    "public/media/life/my-own-photo.webp",
    "src/content/pages/about.md",
  ]);
  assert.deepEqual(examples, [
    "public/media/life/sample-album/01.webp",
    "src/content/articles/sample-article.md",
    "src/content/notes/sample-mindmap.md",
  ]);
});

test("does not reject legitimate personal photographs and Markdown filenames", () => {
  assert.deepEqual(detectDemoPublication([
    "src/content/life/2026-my-city.md",
    "src/content/articles/2026-journey.md",
    "public/media/life/2026-my-city/01.webp",
  ]), []);
});

// Project-local README/docs examples must remain detectable after the directory migration.
test('blocks nested sample project READMEs and docs', () => {
  const files = ['src/content/projects/sample-project/README.md', 'src/content/projects/sample-project/docs/en/setup.md', 'src/content/projects/my-tool/docs/setup.md'];
  assert.deepEqual(detectDemoPublication(files), files.slice(0, 2));
});
