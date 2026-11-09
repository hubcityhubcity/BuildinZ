import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { Script } from 'node:vm';

const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
const collection = JSON.parse(read('design/COLLECTION_REGISTRY.json'));
const registry = JSON.parse(read('metadata/genesis-token-registry.json'));
const manifest = JSON.parse(read('design/ASSET_MANIFEST.json'));
const gallery = read('preview-genesis-gallery.html');

test('gallery browser script parses without third-party packages', () => {
  const match = gallery.match(/<script>\s*([\s\S]*?)\s*<\/script>/);
  assert.ok(match, 'expected inline gallery script');
  assert.doesNotThrow(() => new Script(match[1], { filename: 'preview-genesis-gallery.html' }));
});

test('registry tracks 1000 planned editions with stable stages and rarity', () => {
  assert.equal(registry.status, 'registry-only-not-mint-ready');
  assert.equal(registry.supply, 1000);
  assert.equal(registry.tokens.length, 1000);
  const names = new Set();
  const identities = new Map();
  for (const neighborhood of collection.neighborhoods) {
    assert.equal(neighborhood.identities.length, 5);
    for (const identity of neighborhood.identities) {
      assert.equal(identity.stages.length, 3);
      identities.set(identity.identity_id, identity);
      for (const stage of identity.stages) {
        assert.ok(!names.has(stage.name), 'Duplicate stage name: ' + stage.name);
        names.add(stage.name);
      }
    }
  }
  assert.equal(collection.neighborhoods.length, 10);
  assert.equal(identities.size, 50);
  assert.equal(names.size, 150);
  const tokenIds = new Set();
  const rarities = new Map();
  for (const t of registry.tokens) {
    assert.ok(Number.isInteger(t.token_id) && t.token_id >= 1 && t.token_id <= 1000);
    assert.ok(!tokenIds.has(t.token_id), 'Duplicate token ID: ' + t.token_id);
    tokenIds.add(t.token_id);
    assert.ok(t.edition >= 1 && t.edition <= 20);
    assert.equal(t.evolution_persists_on_transfer, true);
    assert.equal(t.metadata_status, 'registry_only');
    const canon = identities.get(t.identity_id);
    assert.ok(canon, 'unknown identity ' + t.identity_id);
    for (let stage = 1; stage <= 3; stage++)
      assert.equal(t.stage_names[String(stage)], canon.stages[stage-1].name);
    const tier = collection.edition_plan.tiers.find(x => t.edition >= x.start && t.edition <= x.end);
    assert.equal(t.base_rarity, tier?.name);
    rarities.set(t.base_rarity, (rarities.get(t.base_rarity) || 0) + 1);
  }
  assert.equal(tokenIds.size, 1000);
  for (const [tier, count] of Object.entries(collection.edition_plan.global_totals))
    assert.equal(rarities.get(tier), count);
});

test('concept art references are unique, real files and never marked certified', () => {
  const selected = manifest.assets.filter(a =>
    (a.selected_for_prototype || a.classification === 'lineage-selected-candidate') &&
    a.identity_name && Number.isInteger(a.stage) && a.path.startsWith('assets/') &&
    !a.final_nft_certification);
  assert.equal(selected.length, 150);
  assert.equal(selected.filter(a => a.selected_for_prototype).length, 15);
  assert.equal(selected.filter(a => a.classification === 'lineage-selected-candidate').length, 135);
  const seen = new Set();
  const canonicalNames = new Set(collection.neighborhoods.flatMap(n =>
    n.identities.flatMap(i => i.stages.map(s => s.name))));
  for (const a of selected) {
    assert.ok(canonicalNames.has(a.identity_name));
    assert.ok(!seen.has(a.identity_name), 'Ambiguous selected art mapping: ' + a.identity_name);
    seen.add(a.identity_name);
    assert.equal(a.final_nft_certification, false);
    assert.ok(existsSync(new URL(a.path, root)), 'Missing art file: ' + a.path);
  }
});

test('gallery has explicit preview disclosures, filters and no mint button', () => {
  for (const id of ['search','neighborhood','type','rarity','stage','cards','result-count'])
    assert.ok(gallery.includes('id="' + id + '"'), 'Missing control ' + id);
  assert.ok(gallery.includes('metadata/genesis-token-registry.json'));
  assert.ok(gallery.includes('design/ASSET_MANIFEST.json'));
  assert.ok(gallery.includes('design/COLLECTION_REGISTRY.json'));
  assert.ok(gallery.includes('planned tokens, not minted NFTs'));
  assert.ok(gallery.includes('These are not certified final NFT/edition artwork'));
  assert.ok(gallery.includes('not this edition'));
  assert.ok(!/<button[^>]*>\s*(mint|buy|connect wallet)/i.test(gallery));
});
