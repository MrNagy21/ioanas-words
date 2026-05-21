# Wheel Visible Subset Reset Bug Implementation Plan

This is a focused gameplay bug-fix batch. Update this feature `status.md` and global `docs/status.md` when implementation starts, completes, or materially changes.

## Batch 0: Investigation And Spec Package

Status: Complete

Tasks:

- Record the user report.
- Inspect gameplay state management around visible words, active words, removal, replacement, reset, and setup hydration.
- Test the reported route against `http://localhost:3000`.
- Document confirmed testing and likely causes.
- Create a ready-to-copy implementation prompt for the next agent.

Exit criteria:

- Another agent can implement the fix without the original conversation.
- The likely causes are tied to specific files and state transitions.
- Verification expectations are clear.

Verification:

```txt
Markdown review only.
No build required for spec-only work.
```

## Batch 1: Stabilize Visible Subset State

Status: Complete

Tasks:

- Stabilize the wheel subset key so repeated removals from one active setup do not create a new key as `activeWords.length` shrinks.
- Distinguish uninitialized subset state from an initialized empty subset.
- Remove the selected word from the current visible subset synchronously in `removeSelectedWord()`.
- Update the reconciliation effect so it initializes once and prunes unavailable IDs without refilling removed slots.
- Keep explicit `Înlocuiește` behavior as the user-driven way to refill one removed word.
- Base empty-wheel UI on the visible wheel words, not the larger eligible pool.

Exit criteria:

- A large eligible pool with `15` visible words can be exhausted to `0` through repeated `Scoate din roată`.
- Hidden eligible words do not automatically repopulate the wheel.
- Reset and explicit replacement still work.

Suggested verification:

```txt
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
git diff --check
```

## Batch 2: Regression Coverage

Status: Complete

Tasks:

- Add focused compatibility tests for visible-subset countdown behavior.
- Cover at least one large real pool from `S` or `Ș`.
- Cover `V` mixed mode or a synthetic large pool with configured count `15`.
- Cover `V` exact-size `În interior` pool to ensure the already-working case remains intact.
- Cover explicit replacement if helper extraction makes it practical.

Exit criteria:

- Tests fail against the old reset/refill behavior and pass after the fix.
- Tests express the expected countdown behavior clearly enough to prevent future regressions.

Suggested verification:

```txt
pnpm run check:gameplay
pnpm run lint
pnpm exec tsc --noEmit --incremental false
```

## Batch 3: Browser QA And Documentation Closeout

Status: Complete

Tasks:

- Verify the fix on the existing dev server at `http://localhost:3000`.
- Use `/ro/setup/v`, `/ro/setup/s`, and `/ro/setup/sh` large-pool scenarios with `15` visible words.
- Verify `V` `În interior` exact-size `15` scenario still counts down correctly.
- Verify empty state after the last visible word is removed.
- Verify `Resetează` restores the current active setup.
- Verify `Înlocuiește` remains explicit replacement behavior.
- Update this feature `status.md`.
- Update global `docs/status.md`.
- Update `next-implementation-prompt.md` if follow-up work remains.

Exit criteria:

- The user-reported reset cannot be reproduced after the fix.
- All verification results and any blocked checks are recorded.

Required verification:

```txt
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Browser verification:

```txt
http://localhost:3000/ro/setup/v
http://localhost:3000/ro/setup/s
http://localhost:3000/ro/setup/sh
http://localhost:3000/ro/play/v
```

Optional:

```txt
pnpm run build
```

If `pnpm run build` is blocked by the known local Next SWC code-signature issue before app compilation, record that explicitly.
