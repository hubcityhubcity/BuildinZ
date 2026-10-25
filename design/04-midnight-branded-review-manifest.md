# Midnight Lounge — precision signage candidate manifest
**Prepared:** October 24, 2026  
**Status:** three review candidates exist in the accompanying ChatGPT artifact `BuildinZ_Midnight_Brand_Review_v1.zip`. **They have NOT been added to GitHub or approved as final image replacements.** Do not claim they are live.

## Exact source and review-candidate mapping
| Stage | Canonical name | Original filename | Original SHA256 | Candidate filename | Candidate SHA256 | Dimensions |
|---|---|---|---|---|---|---|
| I | Midnight Lounge | `stage-1-midnight-lounge.webp` | `4cf3914effbdec2f45b9823dcc9e28b224957c148e9ccc0dbbd089dd18c5a8a7` | `midnight-stage-1-branded-CANDIDATE.webp` | `b39f3b17e6cab6379981763808917ff14ef742b79b986844f6394d6bd48e623b` | 597×809 |
| II | Nocturne Palace | `stage-2-nocturne-palace.webp` | `07a5ae6367b3abbabd9b9d82d7150d6d55312cf564ec43a931b562ebbd3a106e` | `midnight-stage-2-branded-CANDIDATE.webp` | `f799dc44a42d0740ef2425b780a091baab36280d9331a13d8d8102a26d58ac1c` | 629×809 |
| III | Eclipse Citadel | `stage-3-eclipse-citadel.webp` | `776cd6b6a06527e09119e0a0efc87590b47c698a056d3da9785292d5ac5887ce` | `midnight-stage-3-branded-CANDIDATE.webp` | `a4647744c6bee37baf655f73ecc5aa971eb73065c352e7a1c644f5277b14d5ed` | 707×809 |

The three original WebPs match the files already stored at `assets/midnight-stage-1.webp`, `-2.webp`, `-3.webp` in the repository. The candidate WebPs are **separate, not overwrites**. The comparison package also contains `midnight-brand-comparison.png` (showing original versus corrected).

## Candidate technique
A precise computer-rendered, perspective-adjusted illuminated architectural plaque is composited onto the original image. The original buildings, canopy, terraces, lighting and scene are otherwise preserved. This ensures exact spelling and avoids re-generating the whole building. **Still subject to design review:** the plaques' size and integration into the facade must look like architectural signage rather than detached flat captions when viewed at full size and on mobile.

## Public review location
[Midnight Signage Review](https://hubcityhubcity.github.io/BuildinZ/review-midnight-signage.html) is a browser-based toggle simulation using the existing source files. The browser sign overlays are **NOT embedded** into those WebP assets and **do not match pixel-for-pixel** the packaged candidate outputs. Both are for review only.

## Release boundary
Do not overwrite `assets/midnight-stage-*.webp` until the three candidate corrections are visually accepted, uploaded, binary-hash verified, and real Android/desktop QA passes. The main five-building engine already has `MIDNIGHT_ART_APPROVED=false` and `CROWN_ART_APPROVED=false` and must remain gated until final art is approved. No wallet, mint or token payment was added.
