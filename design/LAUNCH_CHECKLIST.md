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
- [ ] Produce and visually inspect all 135 non-Neon stage designs. Golden Crest and Shadow Market each have 15 selected base candidates and pass collection-level QA; Skygarden District has 15 selected base candidates and passes equal-width collection QA; Velocity Row and Royal Mirage each have 15 base lineage candidates passing equal-width collection QA; Old World Steel has 15 selected base candidates passing collection review, with production safe-area/export checks open; Moonline Harbor has all 15 base candidates selected and collection review recorded, with safe-area/export checks open; Arcadia Prime has fourteen selected candidates: four lineages reviewed and Landmark I/II individually inspected; 15 non-Neon stage masters remain without selected candidates; Nexus side and Beacon top margins require final widening. Deterministic edition-finish plans exist for Golden Crest and Shadow Market; edition rendering and final certification remain open.
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

## Final export correction queue

- [ ] Close every recorded item in [FINAL_EXPORT_CORRECTION_QUEUE.md](FINAL_EXPORT_CORRECTION_QUEUE.md) with actual corrected-file and visual evidence before final certification.

## Current exact next action

Generate Cardinal Exchange from the selected Commons Market and Ruby Galleria originals after visually inspecting both: vertical retail exchange, stacked atria, supported sky shopping promenades and broad attached structural crown. Then perform equal-width Retail I/II/III comparison. Crimson5/15 selected; global140/150 base slots,10 remaining; final-certified0. Final camera/framing corrections, editions, metadata, integration, security review and release gates remain open.

## Crown of Olympus checkpoint — November 7, 2026

Arcadia Prime now has15/15 individually selected base candidates; Landmark/full-neighborhood comparison remains pending. Current totals:168 assets,120 non-Neon selected,15 base stages remaining,zero final-certified. Next:actual Landmark/full-neighborhood visual QA; preserve all export correction gates.

## Arcadia collection review — November 7, 2026

Actual15-source equal-width comparison completed; see ARCADIA_PRIME_COLLECTION_QA.md and ARCADIA_PRIME_LANDMARK_QA.md.15/15 base candidates retained, zero final-certified. Final camera/scale/background consistency and Residential side safe areas remain open alongside Beacon/Nexus corrections. No art generated or certification advanced. Next:Crimson Commons production brief verified against registry. Current coverage135/150 selected;15 remaining.

## Crimson Commons production checkpoint — November 7, 2026

Registry N10/index9 names/palette verified. CRIMSON_COMMONS_PRODUCTION_BRIEF.md defines all15 exact stage forms, functional separation, framing/support/inspection gates and authority. No art generated or count advanced. Next:Ember Residences → Scarlet Habitat → Crimson Arcology, then Residential comparison. Global135/150 selected; final-certified0; all export corrections stay open.

## Ember Residences checkpoint — November 7, 2026

Built-in generation produced first N10-I01 Residential candidate using committed Crimson brief: bone piers/charcoal/crimson/burgundy/brass, furnished apartment balconies, one private rooftop pool/lounge and dry civic arrival. Actual output inspected: exact EMBER RESIDENCES, domestic function, attached balconies, roof and entrance visible. Wider plaza reaches frame edges; full site safe-area/camera consistency remain final export gates. No metric floor/height claim. Agent selection, not prior owner approval/final certification.

Path assets/candidates/crimson-commons-ember-residences-stage-1-v1.png;3106160 bytes;1024×1536;PNG verified;SHA-256 a097824c28cdddac9ed27dc9a28e48ea6f596af01b0689598c3452afa85cf615;Git blob 2a57ce1417e7bb9e24c527f28485337dffcf4c5a. Original preserved.

Totals169 assets;121 non-Neon selected +15 Neon prototype stages=136/150 base slots;14 remaining;zero final-certified. Crimson1/15. Next:Scarlet Habitat from this source, twin taller apartment towers with supported enclosed private sky lounge and larger elevated pool, then Crimson Arcology/Residential comparison. All existing export/edition/metadata/integration/security gates remain open. No paid/wallet/deploy/mint/public messaging action.

## Scarlet Habitat checkpoint — November 7, 2026

Built-in generation used Ember Residences v1 reference. Actual output inspected: exact name, twin tall domestic towers, enclosed furnished private sky lounge, diagonal braces tied into towers, larger elevated resident pool and complete roofs/entry. Crimson/burgundy/bone/charcoal/brass retained. No metric floor/height claim. Agent candidate choice, not prior owner approval/final certification; final site safe-area/style and lineage comparison remain open.

Path assets/candidates/crimson-commons-scarlet-habitat-stage-2-v1.png;3339091 bytes;1024×1536;PNG verified;SHA-256 c923d17135cc43c76934e9edca394bee0d5bb042983e5dda044bae7481baa82e;Git blob 17a63c24a046c443e8e2566638813a37ffafeebe. Original/reference retained.

Totals170 assets;122 non-Neon selected +15 Neon prototypes=137/150 base slots;13 remaining;zero final-certified. Crimson2/15. Next:Crimson Arcology with three towers, supported multi-zone private resort/several elevated pools and attached ember-lit crown, then equal-width Residential review. All existing export/edition/metadata/integration/security gates open. No paid/wallet/deploy/mint/public messaging action.

## Crimson Arcology checkpoint — November 7, 2026

Built-in generation used Scarlet Habitat v1 reference. Actual output inspected: exact CRIMSON ARCOLOGY, three domestic towers, attached crown, two elevated enclosed lounge/resort levels on large diagonal braces, several separate elevated pools and private seating. Palette retained. Top crown margin tight; wider final export required. No metric height claim; agent candidate choice, not owner approval/final certification. Original preserved.

Path assets/candidates/crimson-commons-crimson-arcology-stage-3-v1.png;3279182 bytes;1024×1536;PNG verified;SHA-256 aa3f774e7e9684cc79772463fe4d8f56a9bc92f44de947f2115ea106ec8e1102;Git blob f01f32381a7fe9ac19e51cf8eb4352dbe4cc415b.

Totals171 assets;123 non-Neon selected+15 Neon prototypes=138/150 base slots;12 remaining;zero final-certified. Crimson3/15. Exact next:actual equal-width Residential comparison before Commons Market. Preserve III top margin and I/II site safe-area/style review on final correction queue. No paid/wallet/deploy/mint/public messaging action.

## Residential comparison checkpoint — November 7, 2026

Actual equal-width three-source review recorded in CRIMSON_COMMONS_RESIDENTIAL_QA.md. Core lineage gates pass; final III top margin, site safe areas and camera/style remain open. No new art/count advancement:138/150 base stages selected;12 remaining;zero certified. Exact next:Commons Market, then Ruby Galleria/Cardinal Exchange and Retail comparison.

## Commons Market checkpoint — November 7, 2026

Built-in generation followed Crimson brief for low two-level public shopping arcade with visible merchandise, bone piers/charcoal/crimson-burgundy/brass, covered galleries and dry civic approach. Actual output inspected: exact COMMONS MARKET, clothing/produce/books/housewares and shoppers, supported upper gallery, roof/steps present. Side clearance tight and camera near-symmetric: final wider framing/style review required. No metric floor/height claim. Delegated base candidate, not owner approval/final-certified.

Path assets/candidates/crimson-commons-commons-market-stage-1-v1.png;2532615 bytes;1024×1536;PNG verified;SHA-256 128673ffedd4f39cb613fb32d02117966df71690498d9c664ff1d84f77acdc1a;Git blob 6830e8299cadf17c74a6ed90a253ed9a6a15d495. Generated original preserved.

Totals172 assets;124 non-Neon+15 Neon prototypes=139/150 base slots;11 remaining;zero final-certified. Crimson4/15. Next:Ruby Galleria using this source, taller multilevel shops/escalators/supported galleries; then Cardinal Exchange and Retail review. All existing export/edition/metadata/integration/security gates open. No paid/wallet/deploy/mint/public message action.


## Ruby Galleria checkpoint — November 8, 2026 UTC

Restored original Commons Market from earlier chat attachment; SHA-256 128673ffedd4f39cb613fb32d02117966df71690498d9c664ff1d84f77acdc1a matches repository manifest. Inspected original before built-in image generation. Actual Ruby output inspected: exact RUBY GALLERIA; taller retail tiers, central escalators, stocked clothing/produce/books/housewares shops and supported galleries; bone/charcoal/crimson-burgundy/brass, dry civic platform. Generated image shows three visible retail tiers rather than the requested four: select for lineage growth, do not claim four floors. Camera remains nearly symmetric and side clearance tight; final camera/framing certification stays open. Delegated production selection, not prior owner approval.

Path assets/candidates/crimson-commons-ruby-galleria-stage-2-v1.png;2567784 bytes;1024×1536;PNG decode verified;SHA-256 a5e196d3df3a6ddcc7b0e0eee8e65b1590e0e97ecec537cdf96753ce25297a24;Git blob 77608dede8ed51c2afc417198d55fc7e519d0332. Original generated output preserved.

Totals173 assets;125 non-Neon selected+15 Neon prototypes=140/150 base slots;10 remaining;zero final-certified. Generate Cardinal Exchange from the selected Commons Market and Ruby Galleria originals after visually inspecting both: vertical retail exchange, stacked atria, supported sky shopping promenades and broad attached structural crown. Then perform equal-width Retail I/II/III comparison. Crimson5/15 selected; global140/150 base slots,10 remaining; final-certified0. Final camera/framing corrections, editions, metadata, integration, security review and release gates remain open.

Generation prompt (built-in tool): Use case: stylized-concept. BuildinZ Crimson Commons Retail Stage II candidate, portrait 1024x1536. Reference image is the existing Stage I Commons Market: preserve its bone structural piers, charcoal trim, crimson/burgundy panels, fine warm brass edges, banner language, dry stepped civic plaza and stocked retail identity. Evolve it clearly into a taller four-level RUBY GALLERIA with open central shopping atrium, visible paired escalators between levels, structurally supported galleries, clothing, produce, books and housewares shops, small shoppers for scale. Elevated isometric three-quarter corner view, both wings and depth visible. Fully frame roof, wings, platform and approach with generous side margins; no cropped architecture. Beautiful precise architectural 3D render, warm evening shop lighting and restrained sunset city backdrop. Exact sole building name mounted in clean gold sans-serif letters: "RUBY GALLERIA". No Commons Market lettering, no other words or stage labels. Increasing architectural complexity from source, retain grounded civic retail character. No pools, residences, labs, theatre, casino, flames, floating floors or unsupported balconies. Reserve monumental vertical exchange crown for Stage III.
