# Recorded dimension verification — November12,2026

Current manifest:192 images;174 have recorded dimensions,18 omit them;15 omit SHA256. Existing successful pixel decode establishes readability but did not compare recorded dimensions. Added actual decoded width/height comparison for every populated dimension record. Missing records remain explicitly unknown rather than inferred verified. Existing byte/hash checks retained.

Execution pending CI. Next:inspect dimension failures,correct evidence against actual source bytes without resizing originals;then populate missing dimensions/hashes from a reproducible full-checkout audit. Final visual framing and edition certification remain separate. No new art produced or certified.
