# Wheel Visible Subset Reset Bug Specification

## Purpose

Fix a gameplay bug where a configured wheel with many eligible words can appear to reset back to the configured word count after the user repeatedly removes selected words.

User-reported scenario, translated and normalized:

- The user spun letter `F`; all words behaved correctly.
- The user moved to letter `V`, chose `15` words, and after each result used `Scoate din roată`.
- When about `4` words remained, the user spun again; when the wheel was about to land, the wheel reset and showed `15` words again.
- The same happened with `S` and `Ș`, around `3` remaining words.
- The user could not continue spinning from the last few remaining words because the wheel kept returning to the original `15` configured words.

## Scope

This is a gameplay state-management fix only.

Fix the interaction between:

- active eligible words for the selected setup;
- the currently visible wheel subset;
- result removal;
- replacement candidates;
- reset behavior;
- empty-wheel behavior.

Do not change Romanian content, images, setup UX, saved setup schema, routes, database/auth/billing architecture, AI pronunciation, admin tools, or clinical/product scope.

## Relevant Current Behavior

The play screen keeps two related collections:

- `activeWords`: all currently eligible words for the active mode, exclusions, manual selection, and removed-word state.
- `words`: the currently visible words rendered on the wheel.

The app supports configurations where the eligible pool is larger than the visible wheel count. For example, observed on 2026-05-21:

```txt
F: starts 17, contains 12, mixed 29
V: starts 9, contains 15, mixed 24
S: starts 17, contains 28, mixed 45
Ș: starts 12, contains 27, mixed 39
```

This means a `15`-word wheel can be backed by a larger eligible pool, especially in mixed mode for `V`, `S`, and `Ș`.

## Confirmed Testing

Testing was done against the expected local server on `http://localhost:3000`.

Sandboxed localhost reachability failed:

```txt
curl: (7) Failed to connect to localhost port 3000
```

Per repository instructions, the check was retried outside the sandbox and passed:

```txt
HTTP/1.1 200 OK
URL: http://localhost:3000/ro/play/v
Date: 2026-05-21
```

Browser testing used the in-app browser at:

```txt
http://localhost:3000/ro/play/v
http://localhost:3000/ro/setup/v
```

Confirmed setup behavior:

- `/ro/setup/v` shows `V` starts-with count `9`.
- `V` mode `În interior` shows `15` available words.
- Increasing `Cuvinte pe roată` to `15` and starting the wheel produced a `15`-word play screen.

Confirmed non-reproduction case:

- `V` in `În interior` mode has exactly `15` eligible words.
- Removing result words from that exact-size pool correctly reduced the wheel from `15` down to `3`, `2`, and `1`.
- Spinning at `3`, `2`, and `1` remaining words did not reset the wheel.

Important inference:

- The bug is unlikely to be caused by the spin timer alone or by the basic `Scoate din roată` action.
- The bug is much more likely when the eligible pool is larger than the visible wheel count, because hidden off-wheel words remain available.

Synthetic code simulation confirmed the risky state transition:

```txt
V mixed pool 24, configured count 15:
- after removals, visible subset can shrink below 15 while activeWords still has many hidden eligible words;
- once activeWords drops below the requested count, the subset key changes and a fresh subset is generated.

S mixed pool 45:
- after 12 removals, visible subset can shrink to 3 while activeWords is still 33;
- the code still sees many active words even though the visible wheel has only a few left.

Ș mixed pool 39:
- after 12 removals, visible subset can shrink to 3 while activeWords is still 27.
```

This matches the user report for `S` and `Ș` resetting around `3` remaining words.

## Suspected Root Causes

### Root Cause 1: Subset Identity Uses A Shrinking Count

In `src/components/wheel-game.tsx`, `visibleWheelWordCount` is derived from `activeWords.length`:

```ts
const visibleWheelWordCount = getBoundedWheelWordCount(
  targetWordCount,
  activeWords.length,
);
```

That derived count is then included in `subsetKey`:

```ts
const subsetKey = getWheelSubsetKey({
  targetWordCount: visibleWheelWordCount,
  ...
});
```

When enough words are removed and `activeWords.length` drops below the configured count, `visibleWheelWordCount` changes. That creates a different subset key, so the component no longer sees the previous visible subset and randomizes a new wheel subset.

Expected behavior:

- The visible subset identity should remain tied to the active setup and configured requested count.
- Removing a result word should shrink the visible subset.
- It should not silently repopulate from hidden eligible words unless the user explicitly uses a replacement/reset/setup action.

### Root Cause 2: Empty Visible Subset Falls Back To First Active Words

Current logic:

```ts
const words =
  visibleWordsFromIds.length > 0 || activeWords.length === 0
    ? visibleWordsFromIds
    : fallbackWords;
```

This treats an empty visible subset as missing/invalid whenever `activeWords.length > 0`, and falls back to `activeWords.slice(0, visibleWheelWordCount)`.

That is dangerous because an empty visible subset is a valid state after all visible wheel words have been removed while hidden eligible words still exist.

Expected behavior:

- Distinguish between “no subset has been initialized for this setup key” and “the subset exists and is intentionally empty”.
- If the subset exists and is empty, the wheel should show the empty-wheel state.
- Hidden off-wheel words should not automatically refill the wheel after removals.

### Root Cause 3: Removal Relies On A Later Effect To Shrink The Visible Subset

`removeSelectedWord()` currently only updates `removedWordIds`:

```ts
setRemovedWordIds((currentIds) =>
  currentIds.includes(selectedWord.id)
    ? currentIds
    : [...currentIds, selectedWord.id],
);
```

The visible subset is then reconciled later in an effect. This works for many cases, but it makes removal behavior dependent on async reconciliation and subset-key stability.

Expected behavior:

- Removing the selected word should also synchronously remove that word ID from the current visible subset key.
- The later reconciliation effect can still clean up unavailable IDs, but it should not be the only mechanism that shrinks the visible wheel.

### Root Cause 4: Empty State Uses Active Eligible Words Instead Of Visible Wheel Words

Current empty-state logic uses `activeWords.length`:

```ts
const emptyStateKind = getWheelEmptyStateKind({
  availableWordCount: selectedSetupTotalWordCount,
  visibleWordCount: activeWords.length,
});
```

If all visible words have been removed but hidden eligible words remain, `activeWords.length` can still be positive, so the UI may not enter the expected empty-wheel state.

Expected behavior:

- Empty gameplay state should be based on the visible wheel subset length.
- The empty state can still report that the current visible wheel is done and offer `Resetează`, `Setează`, or choose another target.

### Root Cause 5: Hydration Clears Removed Words

The hydration effect in `src/components/wheel-game.tsx` resets `removedWordIds` to `[]` when it loads the active setup config from local storage:

```ts
setRemovedWordIds([]);
setVisibleWordIdsBySubsetKey({});
```

This did not reproduce as the main cause in the tested V exact-size case, but it remains a fragility:

- if the play component remounts;
- if content identity changes;
- if navigation or hot reload causes rehydration;
- if future state syncing changes cause the effect to run during gameplay.

Expected behavior:

- Hydration from local setup should happen only when entering the play screen or changing target/configuration context.
- It should not unexpectedly clear an in-progress removal session.

## Desired Behavior

For any setup where the wheel starts with `N` visible words:

1. Spin shows a result.
2. `Scoate din roată` removes that exact result from the current visible wheel.
3. The visible wheel count decreases by `1`.
4. Hidden eligible off-wheel words do not automatically fill the removed slot.
5. The user can continue until the visible wheel reaches `0`.
6. At `0`, the empty-wheel state is shown.
7. `Resetează` restores the active setup’s initial wheel selection.
8. `Setează` lets the adult change the setup.
9. `Înlocuiește`, if present, may explicitly replace a selected word with an off-wheel word. This remains a user-driven refill action.

For example, a `15`-word wheel backed by a `45`-word eligible mixed pool should count down:

```txt
15 -> 14 -> 13 -> ... -> 3 -> 2 -> 1 -> 0
```

It must not jump back to `15` unless the user presses reset, changes setup, navigates to a new target/setup, or explicitly replaces words.

## Recommended Implementation

### Stabilize The Subset Key

Use the configured/requested wheel count in `getWheelSubsetKey`, not the clamped count that changes as `activeWords.length` shrinks.

Recommended:

```ts
const setupRequestedWheelWordCount = targetWordCount;
const visibleWheelWordCount = getBoundedWheelWordCount(
  setupRequestedWheelWordCount,
  activeWords.length,
);

const subsetKey = getWheelSubsetKey({
  targetWordCount: setupRequestedWheelWordCount,
  ...
});
```

The exact names can differ, but the key point is that the key should remain stable while the user is removing words from the same active setup.

### Track Initialized Versus Empty Subsets

Change `visibleWordIds`/`words` derivation so it can distinguish:

- no entry exists for `subsetKey`;
- an entry exists and is `[]`.

Suggested shape:

```ts
const hasVisibleSubset = Object.prototype.hasOwnProperty.call(
  visibleWordIdsBySubsetKey,
  subsetKey,
);
const visibleWordIds = hasVisibleSubset
  ? visibleWordIdsBySubsetKey[subsetKey]
  : fallbackVisibleWordIds;
```

Then only fall back when the subset does not exist, not when it exists but is empty.

### Remove From Visible Subset Immediately

Update `removeSelectedWord()` so it also removes the word from the current subset:

```ts
setVisibleWordIdsBySubsetKey((currentSubsets) => {
  const currentWordIds = currentSubsets[subsetKey] ?? words.map((word) => word.id);

  return {
    ...currentSubsets,
    [subsetKey]: currentWordIds.filter((wordId) => wordId !== selectedWord.id),
  };
});
```

Keep `setRemovedWordIds(...)` as the canonical “do not allow this word again in this session” filter.

### Reconcile Without Refilling

The randomization/reconciliation effect should:

- initialize a new subset only when no subset exists for the key;
- remove IDs that are no longer eligible;
- not refill missing slots after a removal.

If the desired product behavior is to auto-fill from hidden eligible words, that must be an explicit product decision because it contradicts the user expectation in this report. Current expected behavior is no auto-refill after `Scoate din roată`.

### Compute Empty State From Visible Words

Use the visible wheel length for empty-state behavior:

```ts
const emptyStateKind = getWheelEmptyStateKind({
  availableWordCount: selectedSetupTotalWordCount,
  visibleWordCount: words.length,
});
```

If this creates a naming mismatch, add a clearer helper for visible-wheel exhaustion.

## Acceptance Criteria

- A `15`-word wheel backed by a larger eligible pool counts down to `0` after repeated `Scoate din roată`.
- `V` mixed mode with `15` visible words does not repopulate from the `24` eligible mixed pool after removals.
- `S` mixed mode with `15` visible words does not repopulate from the `45` eligible mixed pool after removals.
- `Ș` mixed mode with `15` visible words does not repopulate from the `39` eligible mixed pool after removals.
- Exact-size pools still work. Example: `V` `În interior` has exactly `15` eligible words and should count down cleanly.
- `Înlocuiește` still explicitly swaps the selected word with an off-wheel candidate when available.
- `Resetează` still restores the current active setup.
- No hidden/off-wheel words are displayed after repeated removals unless the user explicitly replaces or resets.
- Empty-wheel state appears when all currently visible wheel words have been removed.
- No content JSON or image assets are changed.

## Suggested Automated Coverage

Add or extend `src/game/gameplay-compatibility.check.ts` with pure helper coverage for visible subset behavior.

Recommended helper extraction if needed:

- `getInitializedVisibleWordIds(...)`;
- `removeVisibleWordId(...)`;
- `reconcileVisibleWordIdsWithoutRefill(...)`;
- or a single helper that resolves the next visible subset from current subset, active words, and initialization state.

Test cases:

```txt
1. Large pool, requested count 15:
   - initialize 15 visible IDs from 24+ active words;
   - remove visible IDs one by one;
   - assert count reaches 0 without refilling.

2. S mixed pool:
   - use real `S` mixed pool count 45;
   - initialize 15;
   - remove 12;
   - assert 3 remain, not 15.

3. Ș mixed pool:
   - use real `Ș` mixed pool count 39;
   - initialize 15;
   - remove 12;
   - assert 3 remain, not 15.

4. V exact contains-only pool:
   - use real `V` contains-only pool count 15;
   - remove down to 1;
   - assert no reset.

5. Explicit replacement:
   - with a large pool and 15 visible words, replace one selected word;
   - assert the visible count stays 15 and the removed/replaced ID is not duplicated.
```

## Suggested Browser QA

Use the existing local dev server on port `3000`; do not start another server or use another port.

If sandboxed localhost checks fail, retry outside the sandbox before concluding the server is unavailable.

Manual browser scenarios:

```txt
http://localhost:3000/ro/setup/v
```

1. Choose `Amestec`.
2. Continue to `Final`.
3. Set `Cuvinte pe roată` to `15`.
4. Start the wheel.
5. Spin and use `Scoate din roată` repeatedly until `3`, `2`, `1`, and `0`.
6. Confirm the wheel never jumps back to `15`.

Repeat for:

```txt
http://localhost:3000/ro/setup/s
http://localhost:3000/ro/setup/sh
```

Also verify exact-size pool:

```txt
http://localhost:3000/ro/setup/v
Mode: În interior
Count: 15
```

Expected:

- exact-size pool still counts down;
- large-pool configurations also count down;
- empty state appears after the final visible word is removed.

## Verification Commands

Run:

```txt
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Run `pnpm run validate:content` only if content files are touched. They should not be touched for this bug fix.

Run `pnpm run build` if the local Next SWC environment permits it. If it fails with the known local darwin/arm64 code-signature issue before app compilation, record the exact failure in status.
