# Metadata identity-rarity guard — November11,2026

Inspected actual metadata builder. It checked global rarity totals and20 distinct editions per identity,but could accept offsetting rarity errors across identities. Added8/5/4/2/1 per-identity validation in the1000-token production branch. This preserves canonical assignments and prevents a global total from masking one building's incorrect rarity distribution.

No metadata generated or image verification bypassed. Existing source CI triggers builder changes;inspect its result before claiming execution passes. Next:add a focused mutation test swapping rarity across identities while preserving global totals,then confirm rejection. Final image/URI requirements and3000-stage release gate remain intact.
