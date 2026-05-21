# Wheel Visible Subset Reset Bug Status

Last updated: 2026-05-21

## Current Phase

Phase: Batch 1 complete; Batch 2 regression coverage complete; Batch 3 browser QA and documentation closeout complete

Overall status: The user-reported visible wheel reset bug is fixed and verified. A configured `15`-word wheel backed by a larger eligible pool now counts down after repeated `Scoate din roată` actions instead of refilling from hidden off-wheel words. Initialized empty visible subsets are preserved, `Înlocuiește` remains explicit replacement behavior, and `Resetează` restores the active setup.

## Completed

- Started Batch 1: Stabilize Visible Subset State on 2026-05-21.
- Added shared visible-subset reconciliation logic that initializes a missing subset once and prunes unavailable IDs without refilling removed slots.
- Updated `src/components/wheel-game.tsx` so the subset key uses the configured requested wheel count instead of the count clamped by shrinking `activeWords.length`.
- Distinguished an uninitialized visible subset from an initialized empty visible subset.
- Updated `removeSelectedWord()` to synchronously remove the selected word from the current visible subset as well as adding it to `removedWordIds`.
- Based empty-wheel behavior on the current visible wheel words.
- Added `check:gameplay` regression coverage for a synthetic larger pool, real `S` and `Ș` mixed larger pools, and exact-size `V` `În interior` behavior.
- Verification passed on 2026-05-21:
  - `pnpm run lint`;
  - `pnpm exec tsc --noEmit --incremental false`;
  - `pnpm run check:gameplay`;
  - `pnpm run check:matching`;
  - `git diff --check`.
- Sandboxed `pnpm` initially failed with `fetch failed`; verification was rerun with approved outside-sandbox execution for `pnpm`.
- Browser QA passed on the existing `http://localhost:3000` server:
  - `/ro/setup/v` with `Amestec` and `15` visible words counted down `15 -> ... -> 3 -> 2 -> 1 -> 0` without reset, while hidden eligible words remained;
  - the empty-wheel state appeared after the last visible word was removed;
  - `Resetează` restored the active setup to `15` visible words;
  - `Înlocuiește` remained an explicit replacement action and kept the visible count at `15`;
  - `/ro/setup/s` with `Amestec` and `15` visible words counted down to `3` without reset;
  - `/ro/setup/sh` with `Amestec` and `15` visible words counted down to `3` without reset;
  - `/ro/setup/v` with `În interior` and exact-size `15` visible words counted down to `3` without reset.
- Read the required project docs and current status before analysis.
- Inspected `src/components/wheel-game.tsx`, `src/game/word-selection.ts`, `src/game/wheel-setup.ts`, `src/game/wheel-setup-storage.ts`, and gameplay compatibility checks.
- Confirmed the expected local server was not reachable from the sandbox but was reachable outside the sandbox at `http://localhost:3000/ro/play/v` with `HTTP/1.1 200 OK`.
- Used the in-app browser against `http://localhost:3000/ro/setup/v` and `http://localhost:3000/ro/play/v`.
- Confirmed `V` starts-with has `9` words, `V` contains-only has `15`, and `V` mixed has `24`.
- Confirmed `S` mixed has `45` and `Ș` mixed has `39`.
- Confirmed `V` contains-only exact-size `15` can be removed down to `3`, `2`, and `1` without resetting. This narrows the bug away from the basic spin timer and basic remove action.
- Simulated the larger-pool state transition in code and confirmed the risky pattern:
  - a visible subset can shrink to a few words while `activeWords` still contains many hidden eligible words;
  - when `activeWords.length` drops below the requested wheel count, the subset key can change;
  - an empty visible subset can be treated as missing and fall back to active words.
- Created this feature package:
  - `spec.md`;
  - `plan.md`;
  - `status.md`;
  - `next-implementation-prompt.md`.

## Findings

- `src/components/wheel-game.tsx` derives `visibleWheelWordCount` from `activeWords.length` and uses that derived value in the subset key.
- `words` falls back to `activeWords.slice(...)` when `visibleWordsFromIds` is empty but `activeWords` still has words.
- `removeSelectedWord()` updates `removedWordIds`, but does not synchronously remove the selected ID from the stored visible subset.
- The empty-wheel state currently uses `activeWords.length`, not the visible wheel word count.
- The hydration effect clears `removedWordIds`; this did not reproduce as the primary cause in the tested exact-size case, but it is a fragility to keep in mind.

## Decisions

- The expected product behavior is that `Scoate din roată` removes from the current visible wheel and does not auto-refill from hidden eligible words.
- `Înlocuiește` remains the explicit user-driven refill action.
- `Resetează` remains the explicit action to restore the active setup.
- This bug fix must not change content, images, setup schema, routes, database/auth/billing architecture, AI pronunciation, admin tools, or clinical claims.

## In Progress

- None.

## Next Recommended Batch

No follow-up implementation batch remains for this bug package. Remaining release-level work is ordinary pre-release verification, including `pnpm run build` if the local Next SWC environment permits it and preview/deployed route QA before shipping.
