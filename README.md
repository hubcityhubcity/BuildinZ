# BuildinZ — Prototype v0.1

BuildinZ is a collectible architectural NFT project planned for Polygon, with ten themed neighborhoods and three permanent evolution stages per building. This repository contains the Neon Heights interactive design prototype.

## Prototype only

**NFT ownership, staking, BRICK balances, bonuses, and building evolutions are simulated. They are not real blockchain transactions.** No wallet is required or connected. This prototype cannot mint NFTs, transfer tokens, or execute smart contracts. Demo reward rates are interface-testing values, not promised returns or finalized tokenomics.

## Try it

GitHub Pages: https://hubcityhubcity.github.io/BuildinZ/

The main site visibly lists **all five Neon Heights identities**, with **Neon Residences, Pulse Plaza and HoloTech Tower** currently playable and **Midnight Lounge and Crown Spire** disabled as **Art in review**. In playable evolutions, the heading and image-stage caption change to the current or previewed canonical stage name; the building lineage is shown separately. Preview three architectural stages for each released building, simulate collecting/staking a five-building neighborhood, simulate seven staking days, and spend mock BRICK to evolve. The three implemented buildings evolve **independently** with a **shared mock BRICK** balance. The existing local demo save key is preserved. Midnight Lounge and Crown Spire are collectible placeholders but do not yet have independently selectable three-stage evolution flows.

**Art quality caveat:** Stage-specific headings are now accurate, but some approved image files still have the original building name rendered *inside the art* across later stages (notably HoloTech and Neon Residences). On-building name signs are tracked for correction at [#11](https://github.com/hubcityhubcity/BuildinZ/issues/11); accurate UI labels do not imply these pixels are fixed. Cross-device image QA is still open at [#2](https://github.com/hubcityhubcity/BuildinZ/issues/2).

Progress is stored locally in your browser when storage is available; Reset clears the demo progress on that device.

### HoloTech approved-art homepage integration — merged

[PR #4](https://github.com/hubcityhubcity/BuildinZ/pull/4) merged on October 23, 2026 (US Central) following the owner's approval of the HoloTech artwork and hands-on confirmation that buttons worked in the integrated preview. The new `index.html` uses approved HoloTech concept art cropped into three clean images, not temporary schematics. The previous 5.17 MB HTML artwork payload was externalized to reusable images; core architecture, original Neon source image, and mock BRICK state logic were preserved. The owner tested the **preview**, and deeper cross-device/legacy-save tests remain tracked at [QA issue #2](https://github.com/hubcityhubcity/BuildinZ/issues/2).

The older [standalone HoloTech lab](holotech.html) remains available **only as an isolated schematic test sandbox**, not an NFT-art showcase. Its local balance and saved state do not sync with the main Neon Heights experience. Prefer the main homepage for HoloTech.

## Stage names and visual identity

[BuildinZ Visual Identity & NFT Art Release Standard v1.0](design/BUILDINZ_BRAND_STANDARD_V1.md) is the canonical reference for stage names, architectural signage, image framing and visual release quality. Each eventual NFT stage must display its **own complete canonical name on the actual building** in a shared premium futuristic signage family. A large Z emblem or text on an external legend is not a substitute.

| Identity | Stage I | Stage II | Stage III |
|---|---|---|---|
| Residential | Neon Residences | Skyline Habitat | Aurora Arcology |
| Retail | Pulse Plaza | Spectrum Galleria | Infinity Bazaar |
| Technology | HoloTech Tower | Quantum Spire | Omninet Nexus |
| Entertainment | Midnight Lounge | Nocturne Palace | Eclipse Citadel |
| Landmark | Crown Spire | Sovereign Apex | Crown of Neon |

The Pulse Stage II/III interface labels were reconciled to the previously approved **Spectrum Galleria** and **Infinity Bazaar** names. This is a **text-only** correction: all stage images, simulated BRICK economics, local stage progress, and collectable identity IDs are unchanged. Other missing on-building stage signs and HoloTech top-of-spire crop remain tracked visual QA work; earlier approved architecture is not silently overwritten.

## Files and development

- `index.html`: self-contained HTML, CSS and JavaScript with externalized artwork. No dependencies or build process.
- `assets/`: Neon source imagery, Pulse Plaza full-resolution PNGs, cropped approved HoloTech WebP stages, and site imagery.
- `preview-holotech.html`: retained integrated prototype preview for comparison and QA.
- `holotech.html`: legacy standalone schematic sandbox; **not** the current art showcase.
- `README.md`: project documentation.

Open `index.html` in a modern browser, or serve the repository with any static HTTP server. The responsive layout supports desktop and mobile screens.

## Hosting

GitHub Pages publishes from the `main` branch and `/ (root)` folder. Repository and Pages URL casing is `BuildinZ`.

## Migration and licensing

Migrated from the BuildinZ prototype previously placed in `hubcityhubcity/buildings`. The original standalone HTML was preserved byte-for-byte on initial upload (blob `b58aa62d037a36ebcaed311177e2f1f48947aa8c`). The unrelated repository's GPL-3.0 LICENSE has not been copied here. No replacement license is selected in this repository.

## Current development priorities (October 23, 2026)

See the [project status and execution roadmap](PROJECT_STATUS.md).

- [Complete Midnight Lounge and Crown Spire evolutions](https://github.com/hubcityhubcity/BuildinZ/issues/1)
- [Verify mobile/desktop quality and demo state compatibility](https://github.com/hubcityhubcity/BuildinZ/issues/2)

The live site is still a **prototype**; these issues describe pending work, not completed features. No paid service or blockchain deployment is part of either task.

## October 24 engineering milestone and remaining art gates

The consolidated five-building **gated** state engine was merged through [PR #12](https://github.com/hubcityhubcity/BuildinZ/pull/12). It prepares independent `midnightStage` and `crownStage` progress fields while retaining `stage`, `pulseStage`, `holoStage`, shared mock BRICK, existing browser save key and five-unique-building set logic. Both new selectors remain **hidden in main source** (`MIDNIGHT_ART_APPROVED=false`, `CROWN_ART_APPROVED=false`) pending final branded stage art, signoff and cross-device QA.

**Current public playable buildings: 3 / 5.** Engineering prep for all five is not the same as five finished NFT artwork sets.

- [Midnight mounted-sign visual comparison](review-midnight-signage.html) shows original approved architecture with proposed stage-specific name overlays that can be toggled off. This is only a review visualization; the source WebPs remain unmodified and do not yet have the signs baked into actual stage artwork.
- The three precise **Midnight candidate image assets** and their originals are packaged as `BuildinZ_Midnight_Brand_Review_v1.zip` in the conversation; not yet accepted or installed in public asset paths.
- Crown's two historical triptychs were [audited as references](design/05-crown-source-art-audit.md), not declared ready-for-mint.
- [The current visual identity standard](design/BUILDINZ_BRAND_STANDARD_V1.md) requires all fifteen stage names to be mounted legibly on actual structures and preserves full silhouettes.
- Open review gates: [all-15-stage signage #11](https://github.com/hubcityhubcity/BuildinZ/issues/11), [Midnight #6](https://github.com/hubcityhubcity/BuildinZ/issues/6), [Crown #8](https://github.com/hubcityhubcity/BuildinZ/issues/8), [mobile/browser #2](https://github.com/hubcityhubcity/BuildinZ/issues/2), [Holo spire #5](https://github.com/hubcityhubcity/BuildinZ/issues/5).

Source-level five-building state checks passed and are recorded in [tests/NEON_HEIGHTS_FIVE_BUILDING_QA.md](tests/NEON_HEIGHTS_FIVE_BUILDING_QA.md). Live mobile/desktop visual verification and blockchain implementation were not completed. No purchased services, live tokens, wallets, or spending.

## Future work

Production ownership, staking, tokenomics, smart contracts, security review, and blockchain integration are outside this prototype.

Follow development: https://x.com/buildinzHQ
