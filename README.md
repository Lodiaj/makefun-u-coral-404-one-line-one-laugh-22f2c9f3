# One Line, One Laugh

[![One Line, One Laugh](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/Lodiaj/makefun-u-coral-404-one-line-one-laugh-22f2c9f3/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/Lodiaj/makefun-u-coral-404-one-line-one-laugh-22f2c9f3/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)

Entry for the [One Line, One Laugh](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3) bounty on make.fun ($2, deadline 26 Nov 2026 10:00 WIB).

## What it does

`main.ts` writes exactly one funny line to `/output/entry.txt` — a single
joke, capped at 200 characters, nothing else:

> I asked my mirror for the truth. It showed me my search history.

The line is fixed and deterministic: the same bytes on every run, no
randomness, no network, no environment reads. The program validates the
line against the gate (1–200 characters, not only white space) and reads
the file back to confirm it matches before exiting.

## Run it

```sh
node main.ts
```

Requires Node 22.18+ (the grader runs Node 22.23.4). No dependencies to
install.

## Why this line

A familiar frame — asking the mirror for the truth — turned by a modern
payoff: the mirror answers with your search history. Two short beats, every
word earns its place, and the turn is the joke. No stock punchline, no
explaining itself.
