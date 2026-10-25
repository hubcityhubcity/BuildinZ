# BuildinZ — Project Status & Execution Roadmap

**Snapshot:** October 23, 2026 (US Central)  
**Scope:** Existing GitHub Pages architectural **prototype**, not a deployed Polygon NFT collection.

## Current verified repository state

- Repository: https://github.com/hubcityhubcity/BuildinZ — public, default branch `main`.
- Homepage (published from repository root): https://hubcityhubcity.github.io/BuildinZ/
- On October 23, **[PR #4](https://github.com/hubcityhubcity/BuildinZ/pull/4) merged successfully**, promoting the original-art integrated HoloTech Tower into the primary `index.html` alongside Neon Residences and Pulse Plaza.
- The owner inspected the *integrated preview* and confirmed: **“All the art looks great! All the buttons on the site are working as well.”** Record this as owner visual and functional-button acceptance of the preview; do not extrapolate that every desktop, landscape, browser, or legacy-save case was tested.
- GitHub's `main` now holds the new small external-asset-based `index.html` replacing the earlier ~5.17 MB embedded-art file, with approved Neon, Pulse, and HoloTech artwork assets preserved.
- The current interactive prototype offers **3 of 5 Neon Heights buildings** with independent three-stage evolution and the **shared demo-only BRICK pool**. Midnight Lounge and Crown Spire are still tracker identities, not finished separate evolution flows.
- Previously confirmed source-level JavaScript parsing and 11 mock-DOM state tests covered independent evolution, shared mock BRICK, collection/set, save fields and reset; QA [issue #2](https://github.com/hubcityhubcity/BuildinZ/issues/2) remains open for broad cross-device and prior-save regression after the homepage update.
- The previously produced `holotech.html` schematic sandbox and `preview-holotech.html` integrated preview are retained for reference, but visitors should use the main homepage. No production Polygon mint, contract, actual token, wallet integration or real staking program exists.

## Historical implementation notes

- October 18: Neon Residences and Pulse Plaza interactive evolutionary demo on the original homepage; artwork cropping and excessive landscaping corrected.
- October 22: `holotech.html` standalone mechanism sandbox added with temporary schematics. Its separate `buildinz-holotech-sandbox-v01` storage did not sync to the shared collection.
- October 23: Original approved HoloTech triptych cropped into three WebP stage assets. New shared HoloTech progression in `index.html` uses the original `buildinz-neon-heights-demo-v01` localStorage key and added `holoStage`, preserving original `stage` and `pulseStage`.
- October 23: The integration preview was owner-approved, PR #4 moved from draft to review and **merged**. The separately tracked clean-full-silhouette-master concern remains in [issue #5](https://github.com/hubcityhubcity/BuildinZ/issues/5), but the owner accepted the visible HoloTech art.
- Homepage deployment is GitHub Pages from `main`/root; an accepted GitHub merge confirms repository release, not an independently verified browser deployment to every device.

## October 24 milestone: Midnight Lounge art approved, binary upload pending

- Owner explicitly approved the cinematic three-stage Midnight Lounge → Nocturne Palace → Eclipse Citadel artwork. **Preserve the exact three image files, not schematic substitutes**.
- Approved source package `BuildinZ_Midnight_Lounge_Artwork_APPROVED.zip` exists in the conversation artifacts (three WebP stage images and original master). Verified SHA-256 checksums are in [design/04-midnight-lounge-art-manifest.md](design/04-midnight-lounge-art-manifest.md).
- Draft [PR #7](https://github.com/hubcityhubcity/BuildinZ/pull/7) has the independent `midnightStage` evolution logic, shared mock BRICK and backward-compatible saved-state handling. Source parsing and test-mode simulated interactions passed. The new selector is deliberately **hidden** until final media are installed and browser-tested.
- Added a standard-library-only [approved-asset import and verification script](https://github.com/hubcityhubcity/BuildinZ/blob/feature/midnight-evolution-gated-2026-10-23/scripts/import_approved_midnight.py) to the PR branch. It checks exact stage bytes before installing into a local checkout; it does not publish assets or change the site.
- **Unresolved deployment dependency:** current connected GitHub file editing does not expose a direct binary upload from this conversation's working-container media. Stage WebP assets have not been committed to the PR branch. Do not mark Midnight as live or claim the live homepage has four independently evolving buildings.
- **Next:** upload the exact approved `assets/midnight-stage-1.webp`, `-2.webp`, `-3.webp` to PR #7's branch, verify stage images and mobile/browser layout, change the art gate to true, rerun compatibility/BRICK tests, merge PR and update status. Preserve the existing 3/5 playable homepage while pending.

## October 24: Midnight Lounge approved-art integration preview uploaded

- **Actual approved files published:** `assets/midnight-stage-1.webp`, `assets/midnight-stage-2.webp`, `assets/midnight-stage-3.webp` (exact binary WebP art from owner-approved ZIP). All three were validated by source SHA-256 in the conversation, then created as GitHub blobs with correct file sizes and blob hashes. The static files now exist on `main` and the Midnight development branch; **no user-approved art was redrawn/replaced**.
- **Separate integrated review page:** [preview-midnight.html](preview-midnight.html) committed on `main`, based on the Midnight development branch. It includes the fourth selectable building and shared mock BRICK evolution while leaving the original home page **unchanged** (original `index.html` remains blob `b53fb72aeb68ecf61c318da4b995b05d035546df`, size 27,625 bytes).
- **Feature candidate:** [draft PR #7](https://github.com/hubcityhubcity/BuildinZ/pull/7) now enables Midnight's approved-art selector on the PR branch only and includes three exact WebP files. QA/merge still pending.
- **Evidence:** JS parse and source-level simulated progression, existing saved stages, five-of-five identity logic and shared mock BRICK passed on the branch; the user approved the artwork aesthetics. **Do not claim full live mobile/browser or legacy-storage QA passed.** The external web checker could not load the new GitHub Pages preview URL, so published-site HTTP/runtime verification is not independently established.
- **Crown Spire progress:** proposal [design/05-crown-spire-evolution.md](design/05-crown-spire-evolution.md) committed and [issue #8](https://github.com/hubcityhubcity/BuildinZ/issues/8) opened. Gated state/evolution scaffold for Crown is on separate [draft PR #9](https://github.com/hubcityhubcity/BuildinZ/pull/9), stacked on Midnight PR #7. The three true Crown NFT stage artworks are **not yet approved or published**; exploratory dashboard comps are not stage media.
- **Release policy:** keep `main/index.html` at 3 of 5 playable buildings until the Midnight preview is confirmed and PR #7 merges. Then finish Crown artwork review and PR #9 in order. No paid services, wallets, actual tokens, staking products, or mainnet actions.

## October 24 — canonical visual identity quality gate

- **Merged [PR #10](https://github.com/hubcityhubcity/BuildinZ/pull/10):** [BuildinZ Visual Identity & NFT Art Release Standard v1](design/BUILDINZ_BRAND_STANDARD_V1.md), including fifteen official Neon Heights stage names, consistent geometric techno-luxury building-mounted signs, full silhouettes, restricted landscaping, source protection and owner signoff gates.
- **Corrected the Pulse interface stage names:** **Pulse Plaza → Spectrum Galleria → Infinity Bazaar** in the main homepage and both historical integrated previews. The previously displayed `Pulse Galleria`/`Pulse Nexus` names contradicted the approved visual source. Tested JavaScript parsing, strict metadata-only file differences, restoration of Pulse II and upgrade to III from an old save; mock BRICK/stage IDs/assets unchanged.
- **Midnight architecture remains approved; its signage does not:** three source WebPs lack actual stage-name signs. Follow [precise Stage I/II/III correction brief](design/04-midnight-signage-correction.md) and [all-15-stage QA issue #11](https://github.com/hubcityhubcity/BuildinZ/issues/11). The public `preview-midnight.html` is now explicitly labeled as a historical architectural preview, not final NFT artwork.
- Draft [PR #7](https://github.com/hubcityhubcity/BuildinZ/pull/7) for Midnight evolution remains **unmerged**, with `MIDNIGHT_ART_APPROVED=false` reset to prevent the signless images from being promoted accidentally; its Pulse metadata was aligned with canon.
- **Remaining visuals to review:** Neon Residences full stage names, HoloTech Stage II/III evolved-name signage and Stage III clipped top spire, canonical Pulse building-mounted signs, all three Midnight replacements, and Crown's three full branded stage designs.
- The live homepage **still has 3 of 5 independently evolving playable buildings**. Only stage-name metadata was promoted; no Midnight/Crown functionality, new branded media, NFT mint, wallet, or real BRICK token launched. Broad cross-device browser QA is still open.

## Foundation to preserve

- Polygon **planned** Genesis universe: 10 neighborhoods × 5 distinct identities × 20 editions = **1,000 NFTs**.
- All five identities in a neighborhood are distinct. Owning/staking duplicates cannot substitute for missing identities.
- One token per building persists through forward-only Stage I → Stage II → Stage III evolution. Production evolution will need immutable, independently auditable on-chain state; in the current demo it is only local simulation.
- Neon Heights is the approved pilot. Art direction: detailed, distinct isometric futuristic architecture, restrained rooftop landscaping, visually stronger transformation each stage, clean uncropped building artwork, no infographic fragments.
- Mock rewards, balances, upgrade costs, staking and bonuses are UI testing assumptions only and **not** token issuance, redeemable points, guaranteed yields or investor promises.

## The five Neon Heights building lineages

| Identity | Stage I | Stage II | Stage III | Interactive demo integration |
|---|---|---|---|---|
| Residential | Neon Residences | Skyline Habitat | Aurora Arcology | In prototype; browser QA pending |
| Retail | Pulse Plaza | Spectrum Galleria | Infinity Bazaar | In prototype; browser QA pending |
| Technology | HoloTech Tower | Quantum Spire | Omninet Nexus | **Integrated in main homepage; owner preview approved; broader QA open** |
| Entertainment | Midnight Lounge | Nocturne Palace | Eclipse Citadel | Next |
| Landmark | Crown Spire | Sovereign Apex | Crown of Neon | Next |

## Active work — do this next

### P0 — Finish the five-building interactive Neon Heights pilot
https://github.com/hubcityhubcity/BuildinZ/issues/1

1. **Next artwork milestone:** locate or create and approve three-stage individual full-quality artwork for Midnight Lounge and Crown Spire. Do not silently substitute schematic art for user-approved designs.
2. Integrate Midnight Lounge then Crown Spire into the now three-building homepage, with new independent evolution state while retaining original Neon, Pulse and Holo save fields.
3. Preserve the shared mock BRICK pool, strictly one-way evolution, previews without upgrading, and correct five-unique-building set checker.
4. Make all five flows usable on mobile and desktop, with fully framed images and tap-sized controls.
5. Update release notes and README after verifying behavior.

### P0 — Mobile/desktop regression checks
https://github.com/hubcityhubcity/BuildinZ/issues/2

Owner has approved the integrated preview's visible artwork and reported its buttons function correctly. **Still test** Android portrait/landscape and a desktop browser, including overflow, image framing, old local-save migration to the new `index.html`, selection, stage irreversibility, BRICK math and reset behavior. Keep the issue open until those cases are actually verified.

### P1 — Improve presentation and collector comprehension
- A discoverable tour: **choose identity → preview stages → collect five unique identities → simulate staking → simulate upgrade**.
- Explicit current state vs preview indicators; visually distinct role/silhouette on all 15 stage artworks.
- Simple simulated edition and rarity mock-ups for collectors; document that rarity is not required for set completion.
- Short world lore for Neon Heights and concise collector-facing rules.
- Collect reactions from actual visitors **without taking payment or promising future tokens**.

### P2 — Expand after pilot acceptance
- Use the pilot's art/system/QA template to produce the nine remaining neighborhood identity/evolution bibles; avoid mass-producing 135 artworks before proving one complete neighborhood.
- Validate collectible demand and possible economics separately.
- Polygon testnet contracts, security review, legal/tax/compliance and mainnet economics are separate future gates, never implied by prototype success.

## Budget and deployment constraints

- Keep the existing free GitHub Pages deployment and public repository; **do not restart in Base44**.
- The founder mentioned a possible **$300 total investment budget**, not permission to spend it. **Current authorized spend: $0**.
- Do not buy assets, sign up for billed services, deploy contracts, connect wallets, sell NFTs, launch token liquidity or modify unrelated repos without explicit authorization.
- The X account `@buildinzHQ` is the existing public account; continue honest build-in-public updates separately from software deployment.

## Definition of pilot complete

A first-time visitor on mobile or desktop can recognize all five unique Neon Heights building identities, view all fifteen identity-specific stage artworks clearly, collect each identity, complete a five-of-five set, simulate BRICK and progress independently through irreversible stages, refresh without losing progress, and understand clearly that nothing has been minted or traded.

**Current milestone: prototype expansion and QA. Do not call this collection launch-ready.**
