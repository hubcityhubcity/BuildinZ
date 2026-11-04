// BuildinZ Genesis preview: headless browser QA using real repository JSON and images.
// Run with: npm install --no-save playwright@1.55.1
//           npx playwright install chromium
//           node tests/browser_genesis_gallery.mjs
import assert from 'node:assert/strict';
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MIME = {
  '.html': 'text/html; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.webp': 'image/webp', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8'
};
function staticServer() {
  return http.createServer(async (req, res) => {
    try {
      const requestPath = decodeURIComponent(new URL(req.url, 'http://local.test').pathname);
      const rel = requestPath === '/' ? 'preview-genesis-gallery.html' : requestPath.replace(/^\/+/, '');
      const target = path.resolve(ROOT, rel);
      if (target !== ROOT && !target.startsWith(ROOT + path.sep)) {
        res.writeHead(403); res.end('Forbidden'); return;
      }
      const item = await stat(target);
      if (!item.isFile()) { res.writeHead(404); res.end('Not found'); return; }
      res.setHeader('Content-Type', MIME[path.extname(target)] ?? 'application/octet-stream');
      res.writeHead(200);
      res.end(await readFile(target));
    } catch (error) {
      res.writeHead(404); res.end('Not found');
    }
  });
}
async function run() {
  const server = staticServer();
  const report = [];
  const note = (name) => { report.push(name); console.log('PASS ' + name); };
  const browserErrors = [];
  let browser;
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const address = server.address();
    const url = 'http://127.0.0.1:' + address.port + '/preview-genesis-gallery.html';
    browser = await chromium.launch({ headless: true });
    const desktop = await browser.newPage({ viewport: { width: 1365, height: 900 } });
    desktop.on('pageerror', e => browserErrors.push(e.message));
    await desktop.goto(url, { waitUntil: 'networkidle' });
    await desktop.locator('#result-count').getByText(/1,000 planned editions match/).waitFor();
    assert.equal(await desktop.locator('#cards article.card').count(), 24);
    assert.match(await desktop.locator('#page-number').innerText(), /Page 1 of 42/);
    assert.equal(await desktop.locator('#cards article.card').first().locator('h3').innerText(), 'Neon Residences');
    assert.equal(await desktop.locator('#cards article.card').first().locator('img').count(), 1);
    note('Desktop: 1000 registry records, 24 rendered cards, prototype artwork and pagination');

    await desktop.locator('#next').click();
    assert.match(await desktop.locator('#page-number').innerText(), /Page 2 of 42/);
    assert.match(await desktop.locator('#cards article.card').first().locator('.eyebrow').innerText(), /BZ-0025/);
    await desktop.locator('#previous').click();
    assert.match(await desktop.locator('#page-number').innerText(), /Page 1 of 42/);
    note('Next/previous pagination changes visible token IDs correctly');

    await desktop.locator('#rarity').selectOption('Legendary');
    assert.match(await desktop.locator('#result-count').innerText(), /50 planned editions match/);
    assert.match(await desktop.locator('#cards article.card').first().locator('.eyebrow').innerText(), /BZ-0020/);
    await desktop.locator('#stage').selectOption('3');
    assert.equal(await desktop.locator('#cards article.card').first().locator('h3').innerText(), 'Aurora Arcology');
    note('Legendary rarity filter and Stage III canonical evolution preview');

    await desktop.locator('#neighborhood').selectOption('golden-crest');
    assert.match(await desktop.locator('#result-count').innerText(), /5 planned editions match/);
    assert.equal(await desktop.locator('#cards article.card').first().locator('h3').innerText(), 'Imperial Sunhold');
    assert.match(await desktop.locator('#cards article.card').first().locator('.kind').innerText(), /Candidate concept/);
    await desktop.locator('#type').selectOption('Technology');
    assert.match(await desktop.locator('#result-count').innerText(), /1 planned editions match/);
    assert.equal(await desktop.locator('#cards article.card').first().locator('h3').innerText(), 'Daystar Citadel');
    assert.match(await desktop.locator('#cards article.card').first().locator('.art').innerText(), /Stage artwork in production/);
    assert.equal(await desktop.locator('#cards article.card').first().locator('img').count(), 0);
    note('Golden Crest candidate art is labeled; unproduced Technology art is NOT invented');

    await desktop.locator('#neighborhood').selectOption('');
    await desktop.locator('#type').selectOption('');
    await desktop.locator('#rarity').selectOption('');
    await desktop.locator('#search').fill('BZ-0042');
    assert.match(await desktop.locator('#result-count').innerText(), /1 planned editions match/);
    assert.match(await desktop.locator('#cards article.card').first().locator('.eyebrow').innerText(), /BZ-0042/);
    await desktop.locator('#search').fill('not-a-building-in-the-registry');
    assert.match(await desktop.locator('#result-count').innerText(), /0 planned editions match/);
    assert.match(await desktop.locator('#message').innerText(), /No matching editions/);
    note('Exact token search and empty search results');

    const mobile = await browser.newPage({
      viewport: { width: 360, height: 780 }, isMobile: true,
      deviceScaleFactor: 2, hasTouch: true
    });
    mobile.on('pageerror', e => browserErrors.push(e.message));
    await mobile.goto(url, { waitUntil: 'networkidle' });
    await mobile.locator('#result-count').getByText(/1,000 planned editions match/).waitFor();
    assert.equal(await mobile.locator('#cards article.card').count(), 24);
    const widths = await mobile.evaluate(() => ({
      viewport: window.innerWidth,
      page: document.documentElement.scrollWidth,
      body: document.body.scrollWidth
    }));
    assert.ok(widths.page <= widths.viewport + 1, 'Mobile overflow: ' + JSON.stringify(widths));
    assert.ok(widths.body <= widths.viewport + 1, 'Mobile body overflow: ' + JSON.stringify(widths));
    await mobile.locator('#neighborhood').selectOption('shadow-market');
    await mobile.locator('#stage').selectOption('2');
    assert.match(await mobile.locator('#result-count').innerText(), /100 planned editions match/);
    assert.equal(await mobile.locator('#cards article.card').first().locator('h3').innerText(), 'Veilside Habitat');
    assert.match(await mobile.locator('#cards article.card').first().locator('.art').innerText(), /Stage artwork in production/);
    note('360px mobile viewport: no horizontal overflow, working controls, honest missing-art state');

    const broken = await browser.newPage();
    await broken.route('**/metadata/genesis-token-registry.json', route =>
      route.fulfill({ status: 503, contentType: 'text/plain', body: 'Unavailable' }));
    await broken.goto(url, { waitUntil: 'networkidle' });
    assert.match(await broken.locator('#message').innerText(), /registry preview could not be loaded/i);
    assert.equal(await broken.locator('#cards article.card').count(), 0);
    note('Fail-closed registry load error: no phantom token cards');

    assert.deepEqual(browserErrors, [], 'Unexpected browser JavaScript exceptions');
    note('No uncaught browser JavaScript errors');
    console.log('Total browser checks: ' + report.length + ' passed.');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}
await run();
