# Genesis gallery preview — source-level handoff

Recorded November 3, 2026. This is a **production preview checkpoint**, not launch-ready mint/gallery certification.

## New deliverable

- preview-genesis-gallery.html — separate, nontransactional browser for the 1,000 **planned** token records across ten neighborhoods. It reads canonical metadata/genesis-token-registry.json, design/COLLECTION_REGISTRY.json and design/ASSET_MANIFEST.json at load time.
- Supports token/name/identity search, neighborhood filter, building-type filter, rarity filter, Stage I/II/III concept preview, results count and 24-card pagination.
- Selects the existing 15 Neon Heights **prototype** stage images and six Golden Crest **candidate** stage images only when actual repository paths and canonical stage names match. Missing stages explicitly say artwork is still in production.
- Reuses a single identity-stage *concept preview* across editions only with conspicuous disclosure. It does not pretend that 3,000 edition-specific artworks or immutable IPFS metadata exist.
- All 1,000 records are registry-only, not minted, not for sale, and not connected to a wallet. No production site/index behavior, deployed contract or asset is changed.

## Validation gates

- Source data checked against canonical files: 1,000 unique IDs, 10 neighborhoods, 50 identities, 150 unique stage names, 21 eligible source images (15 prototype / 6 candidates), all 21 files present in the GitHub repository.
- tests/test_genesis_gallery.mjs adds local Node built-in syntax, registry-to-gallery mapping, file existence and disclosure checks.
- **CI verified (November 3):** GitHub Actions run [41679565662](https://github.com/hubcityhubcity/BuildinZ/actions/runs/41679565662) passed on commit 382dce2b3a918fde20223778a7d7317c1bfd2ca6; it executed the registry validator, metadata pipeline tests and gallery Node tests successfully.
- **Not yet verified:** mobile/desktop live browser runtime, screen reader/keyboard interaction, images on deployed Pages, production edition-specific image differentiation, contract or wallet integration.
- This deliverable does **not** satisfy final collection art/metadata/site launch checklist gates. Source validation alone is not a browser QA pass.

## Next bounded tasks

1. Keep the GitHub Actions source checks passing on every relevant change; do not equate these with live browser verification.
2. Load published preview-genesis-gallery.html on desktop and narrow Android browsers, verify filtering, keyboard navigation, stage changes, pagination, image failures and acceptable contrast.
3. Once runtime behavior is verified, add a clearly labeled link from index.html, preserving mock BRICK state. Keep mint controls disabled.
4. Continue Golden Crest Technology art lineage **Solara Labs → Helios Foundry → Daystar Citadel**, then Entertainment/Landmark and remaining neighborhoods.
5. Continue production contracts, 3,000 edition-stage media and release pipeline, independent audit and owner-controlled actions per design/LAUNCH_CHECKLIST.md.

## November 4 automated browser acceptance checkpoint

- Playwright/Chromium headless browser QA now runs automatically in `tests/browser_genesis_gallery.mjs` and `.github/workflows/verify-genesis-browser.yml`.
- [GitHub Actions run 41796630697](https://github.com/hubcityhubcity/BuildinZ/actions/runs/41796630697): **9 of 9 scripted checks passed**, including real JSON/image loading in Chromium, 1,000-record pagination, rarity/stage filtering, exact token search, missing-art labels, a 360-pixel phone viewport with no horizontal overflow, fail-closed data loading, absence of page errors, and homepage-to-preview navigation.
- The live Neon Heights `index.html` hero now links to the separate Genesis registry preview, **without changing mock BRICK or adding mint controls**.
- This verifies desktop Chromium plus mobile *emulation*, not physical Android devices, Safari, accessible screen-reader interaction or public GitHub Pages deployment. No final NFT artwork or metadata was certified.
- Next: verify public Pages navigation/image requests and real-device accessibility, while proceeding with missing Golden Crest Technology artwork.
