# Five-building Neon Heights prototype — source-level QA report
**Date:** October 24, 2026. **Scope:** gated state engine, not final artwork or live browser rendering.

## Environment
Static HTML+CSS+inline JS; no dependency, no wallet, no real NFT and no token issuance. Test harness executes the site's inline runtime with a simulated DOM, localStorage and user confirmations. `MIDNIGHT_ART_APPROVED` and `CROWN_ART_APPROVED` are **false in the committed source**. The test-only enabled-mode simulation changes these constants in an in-memory copy, not on disk or live GitHub Pages.

## Verified results
- [x] Both inline JavaScript blocks parsed without syntax error.
- [x] With default gates false, both Midnight and Crown selectors are hidden and cannot be activated; three original playable buildings remain.
- [x] The canonical Retail Stage II display name `Spectrum Galleria` persists (rather than obsolete `Pulse Galleria`).
- [x] An old saved state with Neon II, Pulse II, Holo III, balance 1150 and 7 days restores correctly; existing stage state is retained.
- [x] In **test-only** mode with both art gates enabled, collect Midnight and advance Stage I `Midnight Lounge` → II `Nocturne Palace` → III `Eclipse Citadel`. Fourth advance leaves Stage III unchanged.
- [x] In **test-only** mode, collect Crown and advance I `Crown Spire` → II `Sovereign Apex` → III `Crown of Neon`. Fourth advance leaves Stage III unchanged.
- [x] All upgrades deduct the same shared **mock** BRICK balance.
- [x] Existing Neon/Pulse/Holo stage fields remain unchanged after Midnight+Crown evolution.
- [x] Five distinct owned identities trigger the existing mocked complete-neighborhood bonus. Ownership of distinct IDs is used, not duplicate editions.
- [x] The local saved-state key `buildinz-neon-heights-demo-v01` is unchanged.
- [x] No wallet, mint, token payout or real transaction was added.

## Explicitly NOT verified
- [ ] Actual GitHub Pages deployment after merge or Android portrait/landscape and desktop browser tests.
- [ ] The final stage-specific signage and full artwork for all five NFTs.
- [ ] Existence/loading of `assets/crown-stage-*.webp` (not created; selector gated).
- [ ] Branded `assets/midnight-stage-*.webp` (approved original architecture is in main repository; signed revision still under review).
- [ ] Production Polygon contract, NFT mint, security audit, or BRICK token economy.

**Release policy:** This safe non-visible engine may be merged because both unfinished buildings are gated; they cannot become playable on main until final source artworks receive independent owner signoff and real-device QA. Follow art/signage issue [#11](https://github.com/hubcityhubcity/BuildinZ/issues/11), [#2](https://github.com/hubcityhubcity/BuildinZ/issues/2), and project standard [v1](https://github.com/hubcityhubcity/BuildinZ/blob/main/design/BUILDINZ_BRAND_STANDARD_V1.md).
