// Run: BUILDINZ_PREVIEW_URL=http://localhost:8080/ node scripts/verify_gallery_browser.cjs
// Requires Playwright and a Chromium installation. Serve the repository root first.
const { chromium } = require("playwright");
const assert = require("node:assert/strict");
(async () => {
  const base = process.env.BUILDINZ_PREVIEW_URL;
  if (!base) throw new Error("Set BUILDINZ_PREVIEW_URL to the served repository root.");
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
  });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", e => errors.push(e.message));
    await page.goto(new URL("preview-genesis-gallery.html", base).href);
    await page.waitForFunction(() => document.querySelectorAll("#cards article").length === 24);
    assert.match(await page.locator("#result-count").innerText(), /1,000/);
    await page.locator("#next").click();
    assert.match(await page.locator("#page-number").innerText(), /Page 2/);
    await page.locator("#search").fill("Aurora Arcology");
    assert.equal(await page.locator("#cards article").count(), 20);
    for (const [stage, name] of [["1","Neon Residences"],["2","Skyline Habitat"],["3","Aurora Arcology"]]) {
      await page.locator("#stage").selectOption(stage);
      assert.equal(await page.locator("#cards h3").first().innerText(), name);
    }
    await page.locator("#search").fill("zzzz-no-token");
    assert.equal(await page.locator("#cards article").count(), 0);
    assert.match(await page.locator("#message").innerText(), /No matching/);
    await page.locator("#search").fill("Crimson Coliseum");
    for (const width of [320,375,768,1440]) {
      await page.setViewportSize({width,height:1000});
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        "Horizontal overflow at " + width);
    }
    assert.deepEqual(errors, []);
    console.log("PASS: load, pagination, search, three-stage names, empty state, four viewport overflow checks, uncaught errors");
    console.log("Scope: functional/layout smoke test only; does not certify artwork, accessibility, hosted links, minting or security.");
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
