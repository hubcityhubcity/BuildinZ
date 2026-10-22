# BuildinZ — Prototype v0.1

BuildinZ is a collectible architectural NFT project planned for Polygon, with ten themed neighborhoods and three permanent evolution stages per building. This repository contains the Neon Heights interactive design prototype.

## Prototype only

**NFT ownership, staking, BRICK balances, bonuses, and building evolutions are simulated. They are not real blockchain transactions.** No wallet is required or connected. This prototype cannot mint NFTs, transfer tokens, or execute smart contracts. Demo reward rates are interface-testing values, not promised returns or finalized tokenomics.

## Try it

GitHub Pages: https://hubcityhubcity.github.io/BuildinZ/

Choose Neon Residences or Pulse Plaza and preview their three evolution stages, simulate collecting and staking the five-building neighborhood, simulate seven staking days, and spend mock BRICK to evolve. Each building evolves independently using the shared mock BRICK balance. Collect Pulse Plaza in the tracker to enable its evolution. Existing Neon Residences saves remain compatible.

Progress is stored locally in your browser when storage is available; Reset clears the demo progress on that device.

### HoloTech Tower — standalone evolution lab

[Open the HoloTech Tower lab](holotech.html) to try a **separate** three-stage prototype: HoloTech Tower → Quantum Spire → Omninet Nexus. It has its own local, mock BRICK balance and progress; collecting or evolving here **does not sync** with Neon Heights' five-building set checker. The visuals are temporary, clearly labeled architectural schematics, not approved production art. This is a no-wallet, no-transaction experiment.

## Files and development

- `index.html`: self-contained HTML, CSS, JavaScript, and embedded artwork. No dependencies or build process.
- `assets/pulse-stage-1.png` through `pulse-stage-3.png`: full-resolution Pulse Plaza evolution artwork.
- `README.md`: project documentation.

Open `index.html` in a modern browser, or serve the repository with any static HTTP server. The responsive layout supports desktop and mobile screens.

## Hosting

GitHub Pages publishes from the `main` branch and `/ (root)` folder. Repository and Pages URL casing is `BuildinZ`.

## Migration and licensing

Migrated from the BuildinZ prototype previously placed in `hubcityhubcity/buildings`. The original standalone HTML was preserved byte-for-byte on initial upload (blob `b58aa62d037a36ebcaed311177e2f1f48947aa8c`). The unrelated repository's GPL-3.0 LICENSE has not been copied here. No replacement license is selected in this repository.

## Current development priorities (October 21, 2026)

See the [project status and execution roadmap](PROJECT_STATUS.md).

- [Complete the remaining three independent Neon Heights building evolutions](https://github.com/hubcityhubcity/BuildinZ/issues/1)
- [Verify mobile/desktop quality and demo state compatibility](https://github.com/hubcityhubcity/BuildinZ/issues/2)

The live site is still a **prototype**; these issues describe pending work, not completed features. No paid service or blockchain deployment is part of either task.

## Future work

Production ownership, staking, tokenomics, smart contracts, security review, and blockchain integration are outside this prototype.

Follow development: https://x.com/buildinzHQ
