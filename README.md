# BuildinZ — Prototype v0.1

BuildinZ is a collectible architectural NFT project planned for Polygon, with ten themed neighborhoods and three permanent evolution stages per building. This repository contains the Neon Heights interactive design prototype.

## Prototype only

**NFT ownership, staking, BRICK balances, bonuses, and building evolutions are simulated. They are not real blockchain transactions.** No wallet is required or connected. This prototype cannot mint NFTs, transfer tokens, or execute smart contracts. Demo reward rates are interface-testing values, not promised returns or finalized tokenomics.

## Try it

GitHub Pages: https://hubcityhubcity.github.io/BuildinZ/

Choose **Neon Residences, Pulse Plaza or HoloTech Tower** in the main experience, preview three architectural stages for each, simulate collecting/staking a five-building neighborhood, simulate seven staking days, and spend mock BRICK to evolve. The three implemented buildings evolve **independently** with a **shared mock BRICK** balance. The existing local demo save key is preserved. Midnight Lounge and Crown Spire are collectible placeholders but do not yet have independently selectable three-stage evolution flows.

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

## Future work

Production ownership, staking, tokenomics, smart contracts, security review, and blockchain integration are outside this prototype.

Follow development: https://x.com/buildinzHQ
