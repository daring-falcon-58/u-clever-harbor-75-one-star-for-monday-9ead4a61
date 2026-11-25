// One Star for Monday — make.fun entry (program/v1, Node 22).
// Writes exactly one line of plain text to /output/entry.txt:
// a one-star review of Monday as if Monday were a restaurant.
// Deterministic: same bytes on every run. No network, no input, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. Ordered a lie-in; the waiter brought Monday at dawn, cold, and billed me through Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
