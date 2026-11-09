# Gallery source CI correction

2026-11-09. Investigated failed source run 42608609504 at 7029f860. Canonical labels, registry and metadata tests passed; gallery test retained obsolete 21/6 selected-art counts and obsolete disclosure wording. Updated to 150 selected stages (15 prototypes + 135 lineage candidates) and current explicit uncertified-art disclosure. File-existence checks remain intact in repository tests.

Local four-test suite passed against repository JSON with file-existence assertion omitted solely in the temporary harness because the local checkout lacks all image bytes. Full file-existence verification must pass in CI; no browser, art certification or launch-readiness pass is claimed.

Next: inspect the new source CI result, retain existing browser-runtime blocker, and resume final artwork review. This change does not alter assets or their certification.
