// One Star for Monday — make.fun entry (program/v1, Node 22).
// Writes exactly one line of plain text to /output/entry.txt:
// a one-star review of Monday as if Monday were a restaurant.
// Deterministic: same bytes on every run. No network, no input, no secrets.
// The entry self-checks the competition gate before writing: 1–180 chars,
// at most 25 words, exactly one line. After writing it reads the file back
// in binary and asserts it equals the entry exactly, so a partial write or
// newline translation can never silently change what the judge reads.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "One star. Ordered a lie-in; the waiter brought Monday at dawn, cold, and billed me through Friday.";

// Competition gate (see competition.yaml): 1–180 chars, <=25 words, one line.
if (LINE.length < 1 || LINE.length > 180) {
  throw new Error(`entry length ${LINE.length} outside gate 1-180 chars`);
}
const wordCount = LINE.trim().split(/\s+/).length;
if (wordCount > 25) {
  throw new Error(`entry has ${wordCount} words, over the 25-word limit`);
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Write-back verification: the bytes on disk must be exactly the entry.
const written = readFileSync("/output/entry.txt");
if (!written.equals(Buffer.from(LINE + "\n", "utf8"))) {
  throw new Error("entry.txt on disk does not match the entry exactly");
}
