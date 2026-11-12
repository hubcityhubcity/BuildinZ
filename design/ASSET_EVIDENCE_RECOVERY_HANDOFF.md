# Missing asset evidence recovery — November 12, 2026

The checkout verifier now emits RECOVERED_ASSET_EVIDENCE JSON lines for missing dimensions and SHA256 records, only when the complete inventory verification has zero errors. Values come from Pillow-decoded images and actual bytes, bound to existing path and Git blob SHA. It does not mutate the manifest or approval states.

Next: read source CI logs for this commit, collect the expected 18 dimension and 15 SHA256 gaps (some overlap), compare each Git blob to current manifest, then fill only those missing fields and rerun full verification. Do not infer visual certification or use output from a failing run.
