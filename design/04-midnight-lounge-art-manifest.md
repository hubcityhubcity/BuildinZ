# Midnight Lounge — approved art asset manifest

**Artwork decision:** owner approved the exact 3-panel Midnight Lounge evolution artwork in the BuildinZ conversation on October 23, 2026 (US Central).

**Do not confuse visual approval with website release.** The three approved clean stage images are bundled in the conversation-generated `BuildinZ_Midnight_Lounge_Stages_Proposal.zip` but are **not present yet in the GitHub repository**. Until imported and checked, **Midnight Lounge remains building identity #4 in Neon Heights, with its evolution selector hidden**.

## Approved artwork mapping

| Stage | Evolution title | ZIP file | Repository target path | Dimensions | Bytes | SHA-256 |
|---|---|---|---|---|---|---|
| I | Midnight Lounge | `stage-1-midnight-lounge.webp` | `assets/midnight-stage-1.webp` | 597 × 809 | 219470 | `4cf3914effbdec2f45b9823dcc9e28b224957c148e9ccc0dbbd089dd18c5a8a7` |
| II | Nocturne Palace | `stage-2-nocturne-palace.webp` | `assets/midnight-stage-2.webp` | 629 × 809 | 230986 | `07a5ae6367b3abbabd9b9d82d7150d6d55312cf564ec43a931b562ebbd3a106e` |
| III | Eclipse Citadel | `stage-3-eclipse-citadel.webp` | `assets/midnight-stage-3.webp` | 707 × 809 | 263892 | `776cd6b6a06527e09119e0a0efc87590b47c698a056d3da9785292d5ac5887ce` |

Master reference: `source-midnight-triptych.png` in the same ZIP (1942 × 809); preserve both the master and stage files unchanged.

## Safe deployment sequence

1. Extract ZIP and upload the **three exact binary WebP files** into the paths listed above on the existing `feature/midnight-evolution-gated-2026-10-23` branch. Verify hash or at least dimensions and filenames; **do not base64-print huge files into text commits or substitute lower quality art**.
2. Keep existing Neon, Pulse and Holo assets intact.
3. In the existing draft [PR #7](https://github.com/hubcityhubcity/BuildinZ/pull/7), change `const MIDNIGHT_ART_APPROVED=false;` to `true` only **after** the three image uploads are verified, then inspect the new selector on both desktop and Android.
4. Run full four-building shared simulated BRICK/evolution/regression checks, including localStorage key `buildinz-neon-heights-demo-v01`, five-of-five distinct identity rule, preview versus current stage, independent `midnightStage`, simulated staking, and reset.
5. Only then merge and update user-facing README to reflect four of five interactive buildings. Do not retire source/master art or alter the original approved aesthetic.

## Verified in draft code (without art release)

- Two inline JavaScript blocks parsed.
- With the art gate left `false`, the fourth selector stays hidden and older Neon/Pulse/Holo stage saves remain legible.
- In test-only mode with the gate switched to `true` in memory, collection, evolution I→II→III, shared BRICK subtraction, irrevocable final stage, preservation of existing stages and the five-identity completion checker all passed simulated interaction checks.
- **These are mock tests, not live-device visual QA**, and none of the three stage art files was published to GitHub when this manifest was written.

No blockchain transactions, wallets, payments, or real BRICK tokens.
