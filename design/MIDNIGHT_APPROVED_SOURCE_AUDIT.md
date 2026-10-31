# Midnight Lounge designated-source audit

Recorded October 31, 2026 (America/Chicago). This document verifies source provenance and preserves a status conflict; it does not certify the full collection or convert historical review art into an owner approval.

## Resolved Library sources

| Source | Library ID | Bytes | SHA-256 | Dimensions |
|---|---|---:|---|---|
| `BuildinZ_Midnight_Lounge_Artwork_APPROVED.zip` | `libfile_1e1670b0969c81918e9ee35e15eacef5` | 3,908,932 | `ffe0f7eca441c3735f59f48561e0596c896fb9b5fb58e2ba9b1e35feab7e9832` | ZIP |
| `BuildinZ_Midnight_All_Stages.png` | `libfile_b6fa69b3e2ec8191a4e6fa5aa0afab33` | 3,233,905 | `d01aa176085844442bfabe40dc7ebe03fd00c4249c0168e88aea6f08b4ee0e34` | 1942 × 809 RGB |

The archive contains five normalized, non-traversing members. No absolute path or `..` member was present.

## Byte-equivalence evidence

| Archive member | Repository counterpart | Bytes | Dimensions | SHA-256 | Result |
|---|---|---:|---:|---|---|
| `stage-1-midnight-lounge.webp` | `assets/midnight-stage-1.webp` | 219,470 | 597 × 809 | `4cf3914effbdec2f45b9823dcc9e28b224957c148e9ccc0dbbd089dd18c5a8a7` | Exact byte match; decoded pixels match |
| `stage-2-nocturne-palace.webp` | `assets/midnight-stage-2.webp` | 230,986 | 629 × 809 | `07a5ae6367b3abbabd9b9d82d7150d6d55312cf564ec43a931b562ebbd3a106e` | Exact byte match; decoded pixels match |
| `stage-3-eclipse-citadel.webp` | `assets/midnight-stage-3.webp` | 263,892 | 707 × 809 | `776cd6b6a06527e09119e0a0efc87590b47c698a056d3da9785292d5ac5887ce` | Exact byte match; decoded pixels match |
| `source-midnight-triptych.png` | Library all-stages master | 3,233,905 | 1942 × 809 | `d01aa176085844442bfabe40dc7ebe03fd00c4249c0168e88aea6f08b4ee0e34` | Exact byte match |

The individual WebPs are lossy encodes of three master crops. Best-aligned crop origins are x=0 (597 px), x=602 (629 px), and x=1235 (707 px), leaving 5 px and 4 px vertical separators in the master. Mean absolute RGB differences versus those PNG crops are approximately 2.98, 3.10 and 3.09, consistent with WebP encoding rather than architectural edits.

## Visual inspection

The master shows a coherent Neon Heights entertainment evolution:

- Stage I: low, open-roof Midnight Lounge.
- Stage II: taller, multi-level Nocturne Palace.
- Stage III: largest Eclipse Citadel with a dominant illuminated crown.

Silhouette escalation and purple/pink/cyan nighttime language are clear. The source art does not itself establish exact final mounted stage-name signage; versioned signage derivatives remain separate work with separate provenance.

## Approval-status conflict

The ZIP filename and current owner direction identify this package as approved. The archive's own `README.txt`, however, says “PROPOSED art (not approved)” and describes the images as extracted for owner design review.

Decision under delegated authority:

1. Treat the bytes as the authoritative preserved Midnight architecture source because the repository originals exactly match the designated Library package.
2. Preserve the embedded historical review status in the record; do not claim the README itself granted approval.
3. Keep later name-corrected derivatives labeled as delegated production selections, not retroactive owner approvals.
4. Do not block reversible production on this wording conflict, because current owner direction delegates corrections and launch preparation.

## Gate impact

Complete and verified: Library-to-repository provenance, archive safety, raw-byte equality, master equality, dimensions, crop mapping and visual stage progression.

Still open: collection-wide final-art certification, edition variants, metadata registry, permanent storage, contract testing, security review and owner-controlled launch actions.
