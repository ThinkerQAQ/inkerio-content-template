import test from "node:test";
import assert from "node:assert/strict";
import { prepareSiteConfig } from "./configure-site.mjs";

const defaults = {
  title: "Inkerio", url: "https://example.com", github: "https://github.com/example",
  repository: "https://github.com/example/example.github.io",
  home: { hero: { zh: { title: "old", description: "old" } } },
  rss: { timezone: "UTC", maxItems: 100 },
};
const settings = {
  title: "我的博客", author: "Alice",
  url: "https://alice.github.io",
  description: "我的写作", descriptionEn: "My Writing",
};

test("maps minimal content-owned site configuration onto reusable engine defaults", () => {
  const result = prepareSiteConfig(defaults, settings, "alice/alice.github.io");
  assert.equal(result.url, "https://alice.github.io");
  assert.equal(result.author, "Alice");
  assert.equal(result.homeTitle, "我的博客");
  assert.deepEqual(result.home.hero.zh, { title: "我的博客", description: "我的写作" });
  assert.deepEqual(result.home.hero.en, { title: "我的博客", description: "My Writing" });
  assert.equal(result.github, "https://github.com/alice");
  assert.equal(result.repository, "https://github.com/alice/alice.github.io");
  assert.deepEqual(result.rss, defaults.rss);
  assert.equal(defaults.title, "Inkerio");
});

test("rejects untouched placeholders", () => {
  assert.throws(() => prepareSiteConfig(defaults, { ...settings, author: "YOUR_NAME" }), /Replace YOUR_NAME/);
  assert.throws(() => prepareSiteConfig(defaults, { ...settings, url: "https://YOUR_USERNAME.github.io" }), /Set url/);
});

test("rejects mismatched repository and GitHub Pages username", () => {
  assert.throws(() => prepareSiteConfig(defaults, settings, "alice/my-blog"), /Create a GitHub Pages user repository/);
  assert.throws(() => prepareSiteConfig(defaults, settings, "bob/bob.github.io"), /Site URL does not match/);
});

test("allows an HTTPS custom domain for a correctly named Pages repository", () => {
  const result = prepareSiteConfig(defaults, { ...settings, url: "https://blog.alice.example" }, "alice/alice.github.io");
  assert.equal(result.url, "https://blog.alice.example");
});

test("rejects credentials, paths, non-HTTPS URLs and absent fields", () => {
  for (const url of ["http://alice.github.io", "https://user:pass@alice.github.io",
      "https://alice.github.io/sub/", "https://alice.github.io?x=1", "https://localhost"]) {
    assert.throws(() => prepareSiteConfig(defaults, { ...settings, url }), /Set url/);
  }
  assert.throws(() => prepareSiteConfig(defaults, { ...settings, description: "" }), /description/);
});
