# BuildinZ Genesis launch checklist

Canonical checklist recorded October 31, 2026 (America/Chicago). A checked item means the stated evidence exists; it does not imply downstream launch readiness.

## 0. Governance and canon

- [x] Fixed owner scope recorded: 1,000 tokens = 10 neighborhoods × 5 identities × 20 editions.
- [x] Three permanent stages retained; identity and base rarity persist through evolution and resale.
- [x] Game excluded from Genesis; points-first utility and BRICK placeholder disclosed without liquidity or income promises.
- [x] Naming/style rules recorded in `COLLECTION_CONSISTENCY_STANDARD.md`.
- [x] Decision authority separated in `DECISION_LOG.md`.
- [x] Current handoff maintained in `LAUNCH_HANDOFF.md`.

## 1. Source and artwork audit

- [x] Designated Midnight ZIP/master byte-audited against repository originals.
- [x] Existing Neon Heights prototype lineages corrected and integrated with versioned derivatives.
- [x] Golden Crest 15-master equal-width review passes asset loading, name/framing continuity, function separation and stage progression; evidence in `GOLDEN_CREST_COLLECTION_QA.md`.
- [x] Golden Crest 20-finish edition matrix maps deterministically to the canonical 8/5/4/2/1 rarity schedule and passes its validator; the 300 actual edition-stage renders remain unproduced.
- [x] Shadow Market production brief committed with five exact lineages, palette separation, continuity anchors and per-output rejection gates.
- [x] Consolidate one collection-wide asset manifest with every repository source/derivative, Git blob evidence, known hashes/dimensions, provenance state and release state.
- [ ] Certify final export framing, typography and image integrity for all 15 Neon Heights stage assets.
- [ ] Produce and visually inspect all 135 non-Neon stage designs. Golden Crest and Shadow Market each have 15 selected base candidates and pass collection-level QA; Skygarden District has 15 selected base candidates and passes equal-width collection QA; Velocity Row Residential/Retail/Technology have 9 selected candidates; 81 non-Neon stage masters remain without selected candidates. Deterministic edition-finish plans exist for Golden Crest and Shadow Market; edition rendering and final certification remain open.
- [ ] Produce and validate edition-level visual differentiation without counting placeholders.

## 2. Registry, editions and metadata

- [x] Canonical 10-neighborhood/50-identity/150-stage registry committed.
- [x] Deterministic token IDs 1–1000 committed.
- [x] Per-identity rarity allocation committed: 8/5/4/2/1 across Common/Uncommon/Rare/Epic/Legendary.
- [x] Automated arithmetic, uniqueness and mapping validator committed and passing.
- [ ] Assign verified three-stage image checksums and permanent URIs to every token.
- [ ] Generate standards-compatible stage metadata for all tokens.
- [ ] Validate metadata schema, URI resolution, image decoding and stage/name agreement.
- [ ] Freeze final metadata and retain a reproducible release manifest.

## 3. Collector website

- [x] Add separate full 1,000-token registry/gallery **preview** with rarity, stage, type, neighborhood and search filters; preserve simulation-only disclosures.
- [x] Run automated Chromium desktop and 360px mobile-emulation gallery QA, including missing-art fail-closed behavior and homepage link (9/9 checks, [November 4 CI](https://github.com/hubcityhubcity/BuildinZ/actions/runs/41796630697)). **This does not replace physical-device and accessibility QA.**

- [x] Neon Heights prototype distinguishes saved stage and building type.
- [x] Existing prototype regression checks cover stage switching and legacy saves.
- [ ] Add all neighborhoods, rarity filters and full gallery data from canonical registry.
- [ ] Finish accessible evolution explanation, roadmap, FAQ and delivered/future disclosures.
- [ ] Connect production wallet/network handling only after verified contract configuration.
- [ ] Complete desktop, narrow-mobile, keyboard, contrast, image-failure and navigation QA.

## 4. Polygon contracts and integration

- [x] Extend contract-prototype regression coverage with ten adversarial/fuzz tests. [November 4 Foundry CI](https://github.com/hubcityhubcity/BuildinZ/actions/runs/41796504950): **21/21 tests passed**. This is **not** an independent audit.

**November 3 prototype checkpoint:** A limited [ERC-721 Solidity draft](../contracts/BuildinZGenesis.sol) and [Foundry test suite](../test/BuildinZGenesis.t.sol) compile and pass in [CI run 41728482051](https://github.com/hubcityhubcity/BuildinZ/actions/runs/41728482051). This is an engineering milestone only: production contract requirements and security gates remain unchecked. See [handoff](POLYGON_CONTRACT_PROTOTYPE_HANDOFF.md).

- [x] Implement an isolated 1,000-supply, forward-only evolution contract **prototype** with default-closed mint/evolution and ERC-4906 stage events.
- [x] Compile the prototype and pass initial positive/negative unit tests in CI.
- [ ] Integrate final approved BRICK/points evolution authorization/settlement (draft upgrade is fee-free for testing).

- [ ] Implement capped 1,000-supply mint contract.
- [ ] Implement owner-authorized permanent Stage I→II→III evolution on the same token.
- [ ] Verify evolution state persists across transfers.
- [ ] Test permissions, supply limits, configurable price, withdraw path and failure cases locally.
- [ ] Test metadata stage switching and mint-to-gallery integration on a public test network.
- [ ] Obtain independent security review; do not describe local tests as an audit.
- [ ] Record final source commit, compiler settings, deployment addresses and verification links.

## 5. Release audit and owner-controlled actions

- [ ] Run separate final audit against every committed file and checklist gate.
- [ ] Assemble reproducible release bundle and launch runbook.
- [ ] Verify permanent storage availability and final contract/site configuration.
- [ ] Owner selects mint price, allocation, receiving wallet and launch timing.
- [ ] Owner funds and signs deployment/mint-opening transactions.
- [ ] Open public mint and send public announcements only after explicit authorization.

## Current exact next action

Produce and inspect Rush Arena / Overtake Pavilion / Redline Coliseum from the Entertainment section of `VELOCITY_ROW_PRODUCTION_BRIEF.md`. Preserve banked white shells, red seating/ribbons, cobalt concourse glass, gunmetal trusses and amber event lights; keep ceremonial entries, supported spectator decks/bridges, complete bases and crowns in frame.
