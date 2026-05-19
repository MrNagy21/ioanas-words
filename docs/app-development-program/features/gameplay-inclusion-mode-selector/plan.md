# Gameplay Inclusion Mode Selector Implementation Plan

This plan is split into small batches. After each implementation batch, update this feature `status.md`. Update global `docs/status.md` when the feature starts, completes, or materially changes the next task.

## Batch 0: Spec Package

Status: Complete when `spec.md`, `plan.md`, and `status.md` exist and have been reviewed.

Tasks:

- Create the feature spec package.
- Confirm the feature follows the completed Locale-Wide Content Refactor.
- Confirm `starts-with` remains the default mode.
- Confirm child-facing behavior for `starts-with`, `contains-only`, and `starts-with-or-contains`.
- Confirm remove, reset, and modal behavior across all modes.
- Record decisions, open questions, and the next implementation batch in `status.md`.

Review checkpoint:

- The spec can be implemented without the original conversation.
- The plan names the current code compatibility points.
- Non-goals are explicit enough to prevent content expansion, admin editing, auth, database, upload, CSV, billing, accounts, or AI pronunciation work.

Suggested verification:

```txt
Review markdown for consistency and readable handoff quality.
No build required for spec-only work.
```

## Batch 1: Gameplay Data Contract

Status: Complete

Tasks:

- Replace the play route's starts-with-only data dependency with a mode-ready data shape.
- Keep route validation for supported locale and selected letter.
- Use `getDerivedWordPoolsForTarget(locale, selectedLetter)` or an equivalent locale-wide helper path.
- Define a client prop type that includes the selected letter and mode pools, or a full approved locale pool plus the selected target.
- Keep `generateStaticParams` stable for enabled Romanian letters.
- Preserve `/ro` and `/ro/play/<letter>` route paths.
- Do not add the visible selector yet unless it naturally fits this batch.

Review checkpoint:

- The play route can supply starts-with, contains-only, and mixed data to the client.
- Existing starts-with gameplay still works as the default behavior.
- No matching logic is duplicated in the route or component.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

If build is blocked by the local SWC issue:

```txt
./node_modules/.bin/tsc --noEmit --incremental false
```

## Batch 2: Selector UI And Mode State

Status: Complete

Tasks:

- Add a compact segmented control to `WheelGame`.
- Use `DEFAULT_WORD_INCLUSION_MODE` as the initial mode.
- Expose the three modes with short Romanian labels.
- Make the selected mode visually and programmatically clear.
- Update visible status/count text when the mode changes.
- Keep the wheel-first layout and no-scroll app shell.
- Do not restore the old full word preview list.

Review checkpoint:

- `/ro/play/<letter>` loads with starts-with selected.
- Keyboard and touch users can switch modes.
- Switching mode updates the wheel without route navigation.
- The selector does not crowd the wheel on mobile.

Suggested verification:

```txt
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/ro/play/a
```

## Batch 3: Mode-Specific Gameplay Behavior

Status: Complete

Tasks:

- Ensure starts-with mode uses only starts-with words.
- Ensure contains-only mode excludes words that start with the selected target.
- Ensure mixed mode includes starts-with and contains-only words without duplicate IDs.
- Preserve exact Romanian diacritic matching through shared helpers.
- Scope removed word IDs to the current target page session.
- Make removal apply across all modes for the current target.
- Make reset restore removed words across all modes for the current target.
- Preserve result modal close/keep, remove, choose-another-letter, focus trap, Escape, and focus return behavior.

Review checkpoint:

- Removing a word in one mode removes it from the other modes if it appears there.
- Reset restores all removed words for the target.
- Modal behavior is unchanged in intent across modes.
- Empty mode states are recoverable.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

If build is blocked by the local SWC issue:

```txt
./node_modules/.bin/tsc --noEmit --incremental false
```

## Batch 3.5: Wheel Word Count And Random Replacement

Status: Complete

Tasks:

- Add a compact control for choosing the target number of words shown on the wheel.
- Keep the target count bounded by the documented maximum wheel size and the active mode's available words.
- Randomly choose the visible wheel subset from the active mode pool after removed words are excluded.
- Preserve the original v1 behavior in this batch: users choose a count and the app picks the exact words.
- Preserve one subset per active mode and target count where useful for stable session behavior.
- Add a result-modal action to replace the selected word with a random eligible off-wheel word from the same active mode pool.
- Disable or hide replacement when no eligible off-wheel word exists.
- Ensure replacement does not duplicate words already on the wheel and does not re-add removed words.
- Keep reset behavior clear: reset restores removed words and may rebuild random wheel subsets.
- Keep the wheel-first layout and no-scroll app shell.

Review checkpoint:

- Changing the wheel word count updates the visible wheel count.
- The displayed wheel words are randomly selected from the active mode pool.
- The user cannot manually choose exact words in this batch.
- Replacing a result swaps in a random off-wheel eligible word when possible.
- Replacement preserves canonical images and placeholder rendering.

Suggested verification:

```txt
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/ro/play/a
http://localhost:3000/ro/play/c
```

## Batch 4: Pool Size, Empty States, And Readability

Status: Complete

Tasks:

- Verify the documented maximum wheel size and user-selected wheel-size rules keep large pools readable.
- Verify random subset and replacement edge cases for small, exact-size, and larger mode pools.
- Ensure empty states distinguish no-content and all-removed cases.
- Keep mode switching available from empty states when another mode has words.
- Check wheel labels and image chips remain readable.
- Preserve ready image and placeholder rendering from canonical word records.

Review checkpoint:

- Large pools do not make the wheel illegible.
- Empty mode states are clear without long instructional text.
- Ready images and placeholders render correctly in every mode.

Suggested verification:

```txt
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/ro/play/a
http://localhost:3000/ro/play/c
```

## Batch 5: Final QA And Documentation

Status: Complete

Tasks:

- Run required validation and build/type checks.
- Run browser verification if the user-running dev server is reachable on port `3000`.
- Update this feature `status.md` with final decisions, exceptions, and verification results.
- Update global `docs/status.md` with feature completion notes and the next recommended feature.
- Update app-development-program docs only if feature order or architecture changed.
- Prepare the ready-to-copy prompt for the next feature package or implementation batch.

Review checkpoint:

- Acceptance criteria in `spec.md` are checked off or exceptions are documented.
- Verification gaps are explicit.
- The next feature can start from the documented state.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

If build is blocked by the local SWC issue:

```txt
./node_modules/.bin/tsc --noEmit --incremental false
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/ro
http://localhost:3000/ro/play/a
http://localhost:3000/admin/words
```

If `http://localhost:3000` is not reachable, ask the user to start the dev server on port `3000`. Do not start another port.

## Post-QA Batch 6: Large-Pool Word Selection And Local Configurations

Status: Complete

Tasks:

- Research mobile setup-surface and browser-storage guidance before choosing the UX.
- Keep setup as the focused configuration surface instead of moving the flow to a separate route.
- Add exact word selection for large pools with search, internal scrolling, and checkbox-style rows.
- Keep the count control as the number of selected words displayed on the wheel.
- Add target-scoped named configurations stored in versioned local storage.
- Persist the active setup per target in local storage.
- Keep saved configurations anonymous, non-sensitive, and disposable.
- Keep the entity shape ready for future database-backed presets.

Review checkpoint:

- A target with a large pool can be narrowed to a custom selected subset.
- A selected subset can be saved, loaded, and deleted locally.
- Returning to the same target in the same browser restores the active setup.
- The app still works when local storage is missing, cleared, or outdated.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
pnpm run build
```

## Exit Criteria

- The play screen defaults to starts-with mode.
- The child can switch among starts-with, contains-only, and mixed modes.
- The user can choose how many random words appear on the wheel within documented limits.
- The user can select exact words from large active pools.
- The user can save, load, and delete target-scoped local configurations.
- The result modal can replace the selected word with a random eligible off-wheel word when one exists.
- Wheel pools come from the locale-wide content API and exact matching helpers.
- Remove, reset, and modal behavior works across all modes.
- Empty states are clear and recoverable.
- Large pools remain readable.
- `/admin/words` remains public, read-only, and unlinked from the child-facing app.
- Static JSON content and canonical word storage are preserved.
- No content expansion, database, auth, admin editing, uploads, CSV, billing, accounts, or AI pronunciation work is introduced.
