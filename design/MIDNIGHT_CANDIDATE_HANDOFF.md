# Midnight production handoff

October 30, 2026. Current candidate set is assets/candidates/midnight-stage-{1,2,3}-signage-v2.png. All originals and prior candidates preserved.

Stage II v2 has heavier geometric lettering, correctly spelling NOCTURNE PALACE. Size 2280776 bytes; verified Git blob 46bcb3fd7e7cd269d1fe4e730fa4a5e145be3eda. Stage I v2 blob 56af0340496df4f7ee5954cb6417225645c26ae9; Stage III v2 blob 200207f56cbf0beb1d50204512c43b3e26923768. Stage III projecting sign housing was removed in v2; do not repeat that correction.

## Visual QA completed

Viewed the three actual v2 images together scaled to 320px width each, preserving aspect ratios. All exact canonical names readable; geometric purple signage coherent; full building silhouettes, Stage II performance deck and Stage III canopy remain visible. Different source aspect ratios result in differing displayed heights; preserve uncropped images rather than stretching. Generative edits resample scene details; these are not pixel-identical source patches. Stage II v2 weight improvement is modest but sufficient for the inspected 320px display. No further speculative typography retries needed before browser comparison.

## Next action

New review-midnight-candidates.html displays all three candidates with expandable approved originals. Inspect it in a browser at narrow and wide viewports, check loading and original/candidate comparisons, then integrate verified art into the existing homepage using versioned paths and run legacy-save/shared-BRICK/evolution tests before enabling Midnight. Source paths in the review page match committed files, but runtime/browser QA has not run. Owner delegated routine artwork decisions; do not await per-image approval. Full launch scope remains design/LAUNCH_HANDOFF.md. No mint/contract/wallet action occurred.

## Integration checkpoint — 2026-10-31 UTC

Agent decision under delegated artwork authority: select the three v2 signage derivatives for the prototype and enable Midnight. This is not a new owner approval, final NFT certification, or launch-readiness claim. Versioned candidates now supply hero, preview and evolving collection thumbnail images; original sources remain unchanged. Collection card uses the exact current Midnight stage name, separate from Entertainment type. Crown remains gated.

Verification: browser loaded all three candidate images on the public comparison page. Local integrated homepage image DOM checks passed for all ten displayed images. Desktop stage II/III preview names matched their versioned paths. A 390px iframe (375px content viewport after scrollbar) had document scrollWidth = clientWidth = 375, with wrapping controls and readable names; this is responsive-browser testing, not physical-device certification. Initial local preview used an unsupported asset symlink; replaced it with copied assets and repeated loading checks successfully.

`node tests/midnight-state.test.cjs` passes actual homepage-script execution with a minimal DOM adapter: legacy saves missing Midnight fields, independent stages, preview isolation, shared balance, 120/280 costs, final-stage cap, reload, remove/recollect persistence, insufficient funds, cancellation and blocked storage. These are unit regression checks, not blockchain tests. `python scripts/verify_midnight_sources.py` passes all three unchanged original hashes.

Next: inspect Crown source audit and obtain all three architectural references; complete missing Crown stages without redoing Midnight. Continue Neon/HoloTech signage and framing audit, then full registry and production contract work per launch checklist. Full keyboard/screen-reader audit and physical mobile checks remain open. Do not claim the collection launch-ready.
