import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
// The program writes exactly one funny line to /output/entry.txt.
// Deterministic: the same fixed line on every run, no randomness, no
// network, no environment reads, so the two grading runs are byte-identical.

// The line: a familiar frame (mirror, truth) turned by a modern payoff
// (search history). Two short beats, nothing extra, lands on first read.
const ENTRY =
  "I asked my mirror for the truth. It showed me my search history.";

// The sealed gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of writing junk.
function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry is ${line.length} characters, must be 1-200`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");
  const written = readFileSync(target, "utf8");
  if (written !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt differs from ENTRY");
  }
  console.log(`Wrote ${ENTRY.length} characters to ${target}`);
  console.log(ENTRY);
}

main();
