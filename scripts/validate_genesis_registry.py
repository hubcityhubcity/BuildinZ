#!/usr/bin/env python3
"""Validate the canonical BuildinZ Genesis registry and 1,000-token manifest."""
import json
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "design" / "COLLECTION_REGISTRY.json"
MANIFEST = ROOT / "metadata" / "genesis-token-registry.json"

def require(condition, message):
    if not condition:
        raise AssertionError(message)

def main():
    registry = json.loads(REGISTRY.read_text(encoding="utf-8"))
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    neighborhoods = registry["neighborhoods"]
    identities = [identity for n in neighborhoods for identity in n["identities"]]
    stage_names = [stage["name"] for identity in identities for stage in identity["stages"]]
    tokens = manifest["tokens"]

    require(len(neighborhoods) == 10, "expected 10 neighborhoods")
    require(all(len(n["identities"]) == 5 for n in neighborhoods), "expected 5 identities per neighborhood")
    require(len(identities) == 50, "expected 50 identities")
    require(all(len(i["stages"]) == 3 for i in identities), "expected 3 stages per identity")
    require(len(stage_names) == 150, "expected 150 stage names")
    require(len({name.casefold() for name in stage_names}) == 150, "stage names must be globally unique")
    require(len(tokens) == 1000, "expected 1,000 tokens")
    require([t["token_id"] for t in tokens] == list(range(1, 1001)), "token IDs must be contiguous 1-1000")
    require(len({t["token_key"] for t in tokens}) == 1000, "token keys must be unique")
    require(not any("image" in t or "image_uri" in t for t in tokens), "registry must not contain placeholder image URIs")

    by_identity = defaultdict(list)
    by_neighborhood = Counter()
    for token in tokens:
        by_identity[token["identity_id"]].append(token)
        by_neighborhood[token["neighborhood_id"]] += 1
        expected = token["neighborhood_id"] * 100 + (int(token["identity_id"][-2:]) - 1) * 20 + token["edition"]
        require(token["token_id"] == expected, f"bad token formula for {token['token_key']}")
        require(token["initial_stage"] == 1, "every token must begin at Stage I")
        require(token["evolution_persists_on_transfer"] is True, "evolution transfer flag must be true")

    require(set(by_neighborhood.values()) == {100}, "each neighborhood must contain 100 tokens")
    expected_rarity = {"Common": 8, "Uncommon": 5, "Rare": 4, "Epic": 2, "Legendary": 1}
    for identity in identities:
        group = by_identity[identity["identity_id"]]
        require(len(group) == 20, f"{identity['identity_id']} must contain 20 editions")
        require(Counter(t["base_rarity"] for t in group) == expected_rarity, f"bad rarity allocation for {identity['identity_id']}")
        canonical = {str(s["stage"]): s["name"] for s in identity["stages"]}
        require(all(t["stage_names"] == canonical for t in group), f"stage mismatch for {identity['identity_id']}")

    require(Counter(t["base_rarity"] for t in tokens) == {"Common": 400, "Uncommon": 250, "Rare": 200, "Epic": 100, "Legendary": 50}, "global rarity totals differ")
    print("PASS: 10 neighborhoods, 50 identities, 150 stages, 1,000 contiguous tokens")
    print("PASS: rarity totals 400/250/200/100/50; no placeholder image URIs")

if __name__ == "__main__":
    main()
