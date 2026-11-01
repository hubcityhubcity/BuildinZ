# BuildinZ Genesis — stage metadata release pipeline

**November 1, 2026 — engineering tool, not a mint-ready release.**

Genesis has 1,000 fixed token IDs, 50 building identities and three permanent evolution stages per identity. Every token starts at Stage I, and evolution changes its current-stage metadata **on that same token**; transfer cannot reset its stage. Base rarity, edition, identity and neighborhood remain unchanged.

## What has been added

- scripts/build_genesis_metadata.mjs checks canonical registry and prepares stage-specific ERC-721-style JSON.
- tests/test_build_genesis_metadata.mjs tests correct stage/name/rarity mapping and the most important refusal cases.
- The existing metadata/genesis-token-registry.json remains the planning source of truth — it is **not** production tokenURI output.
- No release-image manifest or output metadata has been populated with guessed CIDs or placeholder art.

Run with Node 18+ from repository root:

~~~sh
node --test tests/test_build_genesis_metadata.mjs
node scripts/build_genesis_metadata.mjs --check
node scripts/build_genesis_metadata.mjs --build
~~~

--check is read-only. If the release image manifest is absent, it reports 0 of 3,000 submitted verified token-stage image records. --build refuses to write until **all 3,000 unique edition-stage images** have real file bytes, matching SHA-256, immutable IPFS URIs, exact canonical names and confirmed visual QA.

## Release image manifest contract

When artwork is truly ready, create metadata/release-image-manifest.json with schema_version set to 1.0.0 and an images array of 3,000 records — one for each token_id from 1–1000 at stage 1, 2 and 3. Each record requires these exact keys:

| Key | Requirement |
|---|---|
| token_id | Existing integer token ID, 1–1000 |
| stage | Integer 1–3 |
| canonical_name | Exact name from the token's corresponding stage |
| local_path | Existing image file path below the project root |
| sha256 | SHA-256 of the **actual local image bytes** (lowercase hex) |
| uri | Real immutable ipfs://CID/... address; never a placeholder |
| verified | true only after separate visual framing/signage review |
| edition_variant_confirmed | true only after verifying edition-specific differences |

The program checks uniqueness of image bytes and URI across all 3,000 token-stage documents. It rejects missing local images, SHA mismatches, unverified QA flags, incorrectly named stage assets, and incomplete batches. To avoid fake rarity variation, a reused image checksum cannot be passed off as new edition artwork.

The builder writes metadata/release/<token_id>/<stage>.json and metadata/release/RELEASE_MANIFEST.json, including per-file SHA-256 for reproducibility. It **does not** mint, deploy contracts, generate or pin IPFS CIDs, test external IPFS resolution, verify remote data, or certify artistic quality. Those remain mandatory independent release checks.

## Contract integration after artwork verification

Future production contracts must store the per-token evolution stage starting at Stage I, allow only authorized, forward-only 1→2→3 evolution, and keep the stage through any transfer. tokenURI(tokenId) should resolve the file for the current token and stage; metadata update events and marketplace refreshes require tests. This software neither supplies contract code nor claims that tests/audits have been completed.

**Still owner-controlled:** mint price, token sale allocation, receiving wallet, deployment funding/signature, Polygon mainnet launch and public announcements. No money was spent or blockchain transaction made.

## Art production priority

Golden Crest Residential and Retail currently have six visually checked *candidate* images across two three-stage lineages, not NFT-certified masters. Continue the third lineage, **Solara Labs → Helios Foundry → Daystar Citadel**, preserving ivory-and-gold core, radial sun collectors and royal-blue energy accents. The separate metadata tooling does not replace that artwork work.
