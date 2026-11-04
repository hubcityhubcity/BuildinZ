import fs from "node:fs";

const file = process.argv[2] ?? "design/GOLDEN_CREST_EDITION_FINISH_MATRIX.json";
const matrix = JSON.parse(fs.readFileSync(file, "utf8"));
const errors = [];
const expectedRanges = [
  ["Common", 1, 8, 8],
  ["Uncommon", 9, 13, 5],
  ["Rare", 14, 17, 4],
  ["Epic", 18, 19, 2],
  ["Legendary", 20, 20, 1]
];

if (matrix.status !== "delegated-production-plan-not-generated") errors.push("status must remain plan-not-generated");
if (matrix.scope?.planned_unique_stage_images !== 300) errors.push("planned output count must be 300");
if (!Array.isArray(matrix.finishes) || matrix.finishes.length !== 20) errors.push("exactly 20 finishes required");

const editions = matrix.finishes.map((x) => x.edition);
const keys = matrix.finishes.map((x) => x.key);
const names = matrix.finishes.map((x) => x.name);
if (editions.join(",") !== Array.from({ length: 20 }, (_, i) => i + 1).join(",")) errors.push("editions must be contiguous 1-20");
if (new Set(keys).size !== 20) errors.push("finish keys must be unique");
if (new Set(names).size !== 20) errors.push("finish names must be unique");

for (const [rarity, start, end, count] of expectedRanges) {
  const rows = matrix.finishes.filter((x) => x.rarity === rarity);
  if (rows.length !== count) errors.push(`${rarity} count mismatch`);
  if (rows.some((x) => x.edition < start || x.edition > end)) errors.push(`${rarity} edition range mismatch`);
}

for (const row of matrix.finishes) {
  if (!row.treatment || !row.accent) errors.push(`missing treatment fields for edition ${row.edition}`);
  if (!(row.intensity > 0 && row.intensity <= 0.7)) errors.push(`invalid intensity for edition ${row.edition}`);
}

const totals = matrix.planned_neighborhood_token_totals;
if (totals.Common !== 40 || totals.Uncommon !== 25 || totals.Rare !== 20 || totals.Epic !== 10 || totals.Legendary !== 5 || totals.total !== 100) {
  errors.push("Golden Crest rarity totals must be 40/25/20/10/5 = 100");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("Golden Crest edition finish matrix valid: 20 finishes, 100 tokens, 300 planned stage images.");
