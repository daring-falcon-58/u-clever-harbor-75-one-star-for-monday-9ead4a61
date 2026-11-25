[![make.fun](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/daring-falcon-58/u-clever-harbor-75-one-star-for-monday-9ead4a61/rank.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/daring-falcon-58/u-clever-harbor-75-one-star-for-monday-9ead4a61/reward.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)

# One Star for Monday

[One Star for Monday on make.fun](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)

## Methodology (how the winning line was chosen)

The judge is a weary office worker comparing two lines at a time, weighing — in this order — (1) reads as a one-star review of Monday-as-a-restaurant, (2) sounds like a real diner's complaint with a table, server, dish or bill gone wrong, (3) lands a joke that could only be about Monday, (4) is short and quotable, (5) stays plain text within 25 words.

So the entry was built by drafting, not by guessing one line: **36 candidate reviews** were written, every one verified by script at ≤ 21 words and ≤ 113 characters (gate: ≤ 25 words, 1–180 chars), then each scored 1–5 on the judge's five criteria in its order (real-review feel, Monday-specific joke, screenshot-worthiness, tightness, freshness). The winner scored **25/25**; the three runner-ups scored 24/25. Full table: [candidates.md](candidates.md).

**Winning line (17 words, 98 chars):**

> One star. Ordered a lie-in; the waiter brought Monday at dawn, cold, and billed me through Friday.

Why it wins: "Ordered a lie-in" is a diner ordering the exact thing you want on a Monday morning; the waiter brings Monday at dawn, cold (the dish gone wrong); the bill runs "through Friday" — a punchline only Monday can deliver, since only Monday's bill stretches to Friday. A genuine complaint from a diner who happens to be complaining about a day. No judge-directed text, no hashtags, no explanation.

## The program

`main.ts` (Node 22, no dependencies) writes exactly that line to `/output/entry.txt`. It is deterministic — run it twice and the bytes are identical — uses no network, no input and no secrets.

```sh
node main.ts   # writes /output/entry.txt
```

## Verification

- Word/character counts for all 36 candidates verified by script (see `candidates.md`).
- Determinism: two runs of `main.ts` produce byte-identical `/output/entry.txt` (99 bytes incl. trailing newline, 98 chars of text — inside the 1–180 char gate).
- Kit check: `node <kit>/cli/makefun.mjs check --kit <kit> --repo <repo> --transcripts <bundle>` (transcripts are bundled by the parent at submit time).

## License

MIT — see [LICENSE](LICENSE).
