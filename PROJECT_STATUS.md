# BuildinZ — Project Status & Execution Roadmap

**Snapshot:** October 21, 2026  
**Scope:** Existing public GitHub Pages *prototype*, not a live NFT mint.

## Current verified repository state

- Repo: https://github.com/hubcityhubcity/BuildinZ (public, `main`).
- Prototype URL documented by repository: https://hubcityhubcity.github.io/BuildinZ/ (GitHub Pages, root).
- Most recent commit at audit: `d9267b15bd0d2f2a968558d3a7b92e84e2d76806` (October 18, 2026), **Add independent three-stage Pulse Plaza evolution demo**.
- Prototype contains selectable three-stage **Neon Residences** and **Pulse Plaza** demonstrations, with separate per-building evolution and shared *mock* BRICK. Existing local saved Neon Residences progress was addressed in the Oct 18 implementation.
- Repository currently holds `index.html`, `README.md`, and three `assets/pulse-stage-*.png` files. The HTML includes embedded artwork.
- Earlier commits address cropped/blurry previews, annotation fragments, excessive tree coverage and frame overflow. **This status does not certify device-level browser QA**, which remains outstanding.
- No documented production Polygon mint, on-chain evolution, wallet integration, deployable NFT contract, or approved live BRICK economy.

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
| Technology | HoloTech Tower | Quantum Spire | Omninet Nexus | Next |
| Entertainment | Midnight Lounge | Nocturne Palace | Eclipse Citadel | Next |
| Landmark | Crown Spire | Sovereign Apex | Crown of Neon | Next |

## Active work — do this next

### P0 — Finish the five-building interactive Neon Heights pilot
https://github.com/hubcityhubcity/BuildinZ/issues/1

1. Retrieve **previously approved** full-quality artwork for HoloTech Tower, Midnight Lounge and Crown Spire's three stages; do not generate substitutes that overwrite approved art.
2. Integrate each as a selectable, individually upgradable building while retaining local-save compatibility and the currently working two buildings.
3. Preserve the shared mock BRICK pool, strictly one-way evolution, stage previews without upgrading, and correct five-unique-building set checker.
4. Make all five flows usable on mobile and desktop, with fully framed images and tap-sized controls.
5. Update release notes and README after verifying behavior.

### P0 — Mobile/desktop regression checks
https://github.com/hubcityhubcity/BuildinZ/issues/2

Test in Android portrait and landscape and a desktop browser. Pay special attention to overflow, loading, image cropping, text boxes, state preservation, changing selected buildings, stage irreversibility, mock BRICK math and reset behavior. Use the issue as the test record, not an unverified claim that all checks pass.

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
