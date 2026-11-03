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
- **Not yet verified:** executing tests on GitHub Actions or local checkout, mobile/desktop browser runtime, screen reader/keyboard interaction, images on deployed Pages, production edition-specific image differentiation, contract or wallet integration.
- This deliverable does **not** satisfy final collection art/metadata/site launch checklist gates. Source validation alone is not a browser QA pass.

## Next bounded tasks

1. Run: node --test tests/test_genesis_gallery.mjs against the repository checkout; correct any failures.
2. Load published preview-genesis-gallery.html on desktop and narrow Android browsers, verify filtering, keyboard navigation, stage changes, pagination, image failures and acceptable contrast.
3. Once verified, add a clearly labeled link from index.html, preserving mock BRICK state. Keep mint controls disabled.
4. Continue Golden Crest Technology art lineage **Solara Labs → Helios Foundry → Daystar Citadel**, then Entertainment/Landmark and remaining neighborhoods.
5. Continue production contracts, 3,000 edition-stage media and release pipeline, independent audit and owner-controlled actions per design/LAUNCH_CHECKLIST.md.
