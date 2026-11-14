// BuildinZ Genesis preview: headless browser QA using real repository JSON and images.
// Run with: npm install --no-save playwright@1.55.1
//           npx playwright install chromium
//           node tests/browser_genesis_gallery.mjs
import assert from 'node:assert/strict';
import http from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
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

    const decoded = await desktop.evaluate(async () => {
      const manifest = await (await fetch('design/ASSET_MANIFEST.json')).json();
      const assets = manifest.assets.filter(a =>
        (a.selected_for_prototype || a.classification === 'lineage-selected-candidate') &&
        a.identity_name && Number.isInteger(a.stage) && a.path.startsWith('assets/') &&
        !a.final_nft_certification);
      const failures = [];
      for (const asset of assets) {
        const img = new Image();
        img.src = asset.path;
        try {
          await img.decode();
          if (!img.naturalWidth || !img.naturalHeight) throw new Error('zero dimensions');
        } catch (error) { failures.push(asset.path + ': ' + error.message); }
      }
      return { count: assets.length, failures };
    });
    assert.equal(decoded.count, 150);
    assert.deepEqual(decoded.failures, [], 'Selected stage images failed browser decoding');
    note('All 150 selected stage images decode in Chromium; not visual certification');

    const homepage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    homepage.on('pageerror', e => browserErrors.push(e.message));
    await homepage.goto(url.replace('preview-genesis-gallery.html', 'index.html'), { waitUntil: 'networkidle' });
    const galleryLink = homepage.locator('.hero-actions a[href="preview-genesis-gallery.html"]');
    assert.equal(await galleryLink.count(), 1);
    assert.match(await galleryLink.innerText(), /Genesis registry preview/);
    await galleryLink.click();
    await homepage.locator('#result-count').getByText(/1,000 planned editions match/).waitFor();
    note('Homepage safely links to 1000-edition preview without mint functionality');


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
    await desktop.waitForFunction(() => { const img = document.querySelector('#cards article img'); return img && img.complete && img.naturalWidth > 0; });
    assert.equal(await desktop.locator('#cards article.card').first().locator('img').count(), 1);
    note('Golden Crest Technology selected candidate image decodes');

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
    await mobile.waitForFunction(() => { const img = document.querySelector('#cards article img'); return img && img.complete && img.naturalWidth > 0; });
    note('360px mobile viewport: no horizontal overflow, working controls, selected candidate image decoded');

    const lineup = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await lineup.goto(url.replace('preview-genesis-gallery.html', 'review-crimson-burgundy.html'), { waitUntil: 'networkidle' });
    assert.deepEqual(await lineup.locator('figcaption h2').allTextContents(), ['Redline Labs','Vermilion Spire','Phoenix Nexus']);
    assert.equal(await lineup.locator('figure img').count(), 3);
    for (const img of await lineup.locator('figure img').all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(el => el.decode());
      assert.equal(await img.evaluate(el => el.naturalWidth > 0 && el.naturalHeight > 0), true);
    }
    await lineup.setViewportSize({ width: 360, height: 780 });
    assert(await lineup.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Burgundy review mobile overflow');
    await mkdir(path.join(ROOT, 'browser-evidence'), { recursive: true });
    await lineup.screenshot({ path: path.join(ROOT, 'browser-evidence', 'burgundy-lineup-mobile.png'), fullPage: true });
    note('Burgundy lineage review: three exact names, actual image decoding, mobile overflow and screenshot');


    const sources = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    sources.on('pageerror', e => browserErrors.push(e.message));
    await sources.goto(url.replace('preview-genesis-gallery.html', 'review-crimson-sources.html'), { waitUntil: 'networkidle' });
    const assetManifest = JSON.parse(await readFile(path.join(ROOT, 'design/ASSET_MANIFEST.json'), 'utf8'));
    const types = ['Residential','Retail','Technology','Entertainment','Landmark'];
    const selected = types.flatMap(type => assetManifest.assets.filter(a =>
      a.neighborhood === 'Crimson Commons' && a.selected_for_lineage_review && a.building_type === type
    ).sort((a,b) => a.stage - b.stage));
    assert.equal(selected.length, 15);
    assert.deepEqual(await sources.locator('figure h3').allTextContents(), selected.map(a => a.identity_name));
    assert.equal(await sources.locator('figure img').count(), 15);
    for (let i=0; i<selected.length; i++) {
      const figure = sources.locator('figure').nth(i);
      assert.equal(await figure.locator('img').getAttribute('src'), selected[i].path);
      assert.equal(await figure.locator('a').getAttribute('href'), selected[i].path);
      assert.match(await figure.innerText(), new RegExp(selected[i].sha256));
      await figure.locator('img').scrollIntoViewIfNeeded();
      await figure.locator('img').evaluate(el => el.decode());
    }
    for (const width of [1440,768,360]) {
      await sources.setViewportSize({ width, height: 900 });
      assert(await sources.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Crimson source review overflow at '+width);
    }
    await sources.screenshot({ path: path.join(ROOT, 'browser-evidence', 'crimson-sources-mobile.png'), fullPage: true });
    note('Crimson sources: 15 canonical names, image links, hashes and decodes; 1440/768/360px overflow checks');


    const alignment = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    alignment.on('pageerror', e => browserErrors.push(e.message));
    await alignment.goto(url.replace('preview-genesis-gallery.html', 'review-arcology-alignment.html'), { waitUntil: 'networkidle' });
    await alignment.locator('#status').getByText(/Both actual images decoded/).waitFor();
    assert.equal(await alignment.locator('canvas').getAttribute('width'), '1024');
    assert.equal(await alignment.locator('canvas').getAttribute('height'), '1536');
    await alignment.locator('#x').fill('25');
    await alignment.locator('#y').fill('-30');
    await alignment.locator('#scale').evaluate(el => { el.value='1.1'; el.dispatchEvent(new Event('input')); });
    await alignment.locator('#opacity').evaluate(el => { el.value='.75'; el.dispatchEvent(new Event('input')); });
    const transform = JSON.parse(await alignment.locator('#values').innerText());
    assert.equal(transform.x,25); assert.equal(transform.y,-30);
    assert.equal(transform.scale,1.1); assert.equal(transform.opacity,.75);
    await alignment.locator('#reset').click();
    const reset = JSON.parse(await alignment.locator('#values').innerText());
    assert.equal(reset.x,0); assert.equal(reset.y,0);
    assert.equal(reset.scale,1); assert.equal(reset.opacity,.5);
    await alignment.setViewportSize({ width:360,height:780 });
    assert(await alignment.evaluate(() => document.documentElement.scrollWidth <= innerWidth+1), 'Alignment mobile overflow');
    await alignment.screenshot({ path:path.join(ROOT,'browser-evidence','arcology-alignment-mobile.png'),fullPage:true });
    const unavailable = await browser.newPage();
    await unavailable.route('**/crimson-commons-crimson-arcology-stage-3-v3.png', route => route.fulfill({status:503,body:'Unavailable'}));
    await unavailable.goto(url.replace('preview-genesis-gallery.html','review-arcology-alignment.html'),{waitUntil:'networkidle'});
    await unavailable.locator('#status').getByText(/Image loading failed/).waitFor();
    assert.equal(await unavailable.locator('#values').innerText(),'');
    note('Arcology alignment: actual image decode, controls/reset, mobile overflow and failed-image state');



    const market = await browser.newPage({viewport:{width:1280,height:900}});
    market.on('pageerror',e=>browserErrors.push(e.message));
    await market.goto(url.replace('preview-genesis-gallery.html','review-commons-market.html'),{waitUntil:'networkidle'});
    assert.equal(await market.locator('figure img').count(),2);
    for(const img of await market.locator('figure img').all()){
      await img.evaluate(el=>el.decode());
      assert.deepEqual(await img.evaluate(el=>[el.naturalWidth,el.naturalHeight]),[1024,1536]);
    }
    const toggle=market.locator('#toggle');
    await toggle.focus();
    await market.keyboard.press('Enter');
    assert.equal(await toggle.getAttribute('aria-pressed'),'false');
    assert(await market.locator('.guide').first().isHidden());
    await market.keyboard.press('Space');
    assert.equal(await toggle.getAttribute('aria-pressed'),'true');
    assert(await market.locator('.guide').first().isVisible());
    for(const width of [1280,768,360]){
      await market.setViewportSize({width,height:900});
      assert(await market.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Market comparison overflow at '+width);
    }
    await market.screenshot({path:path.join(ROOT,'browser-evidence','commons-market-mobile.png'),fullPage:true});
    note('Commons Market: two real PNG decodes, keyboard safety-guide toggle and responsive overflow checks');

    const keyboardPage = await browser.newPage({ viewport:{width:1280,height:900} });
    keyboardPage.on('pageerror', e => browserErrors.push(e.message));
    await keyboardPage.goto(url,{waitUntil:'networkidle'});
    await keyboardPage.keyboard.press('Tab');
    assert.equal(await keyboardPage.evaluate(()=>document.activeElement.className),'skip-link');
    const skipBounds=await keyboardPage.locator('.skip-link').boundingBox();
    assert(skipBounds && skipBounds.y>=0,'Focused skip link must be visible');
    await keyboardPage.keyboard.press('Enter');
    assert.equal(await keyboardPage.evaluate(()=>document.activeElement.id),'collection-main');
    assert.equal(new URL(keyboardPage.url()).hash,'#collection-main');
    const searchControl = keyboardPage.getByLabel('Search token, name or ID',{exact:true});
    await searchControl.focus();
    await keyboardPage.keyboard.type('BZ-0001');
    assert.match(await keyboardPage.locator('#result-count').innerText(),/1 planned editions match/);
    const order=['neighborhood','type','rarity','stage'];
    for(const id of order){
      await keyboardPage.keyboard.press('Tab');
      assert.equal(await keyboardPage.evaluate(()=>document.activeElement.id),id,'Keyboard filter order');
    }
    await keyboardPage.keyboard.press('End');
    await keyboardPage.keyboard.press('Enter');
    assert.equal(await keyboardPage.locator('#stage').inputValue(),'3');
    assert.equal(await keyboardPage.locator('#cards article h3').innerText(),'Aurora Arcology');
    assert.equal(await keyboardPage.locator('#result-count').getAttribute('aria-live'),'polite');
    note('Keyboard: labelled search, filter tab order, native stage selector and live result status');

    const broken = await browser.newPage();
    await broken.route('**/metadata/genesis-token-registry.json', route =>
      route.fulfill({ status: 503, contentType: 'text/plain', body: 'Unavailable' }));
    await broken.goto(url, { waitUntil: 'networkidle' });
    assert.match(await broken.locator('#message').innerText(), /registry preview could not be loaded/i);
    assert.equal(await broken.locator('#cards article.card').count(), 0);
    note('Fail-closed registry load error: no phantom token cards');

    await mkdir(path.join(ROOT, 'browser-evidence'), { recursive: true });
    await desktop.locator('#search').fill('Crimson Coliseum');
    // Ensure screenshots capture filtered lazy-loaded artwork, not empty media frames.
    await desktop.waitForFunction(() => document.querySelectorAll('#cards article.card').length === 20);
    for (const img of await desktop.locator('#cards article img').all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(el => el.decode());
      assert(await img.evaluate(el => el.naturalWidth > 0), 'Desktop screenshot image unavailable');
    }
    await desktop.evaluate(() => scrollTo(0,0));

    await desktop.screenshot({ path: path.join(ROOT, 'browser-evidence', 'desktop-gallery.png'), fullPage: true });
    await mobile.screenshot({ path: path.join(ROOT, 'browser-evidence', 'mobile-gallery.png'), fullPage: true });
    assert.deepEqual(browserErrors, [], 'Unexpected browser JavaScript exceptions');
    note('No uncaught browser JavaScript errors');
    console.log('Total browser checks: ' + report.length + ' passed.');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}
await run();
