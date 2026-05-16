# Admin Words Inventory Implementation Plan

This plan is split into small batches. After each batch, perform the review checkpoint and update `status.md`.

## Batch 0: Spec And Baseline

Status: Complete when this feature folder is committed.

Tasks:

- Create `spec.md`, `plan.md`, and `status.md`.
- Confirm the feature remains public, read-only, static-first, and database-free.
- Record open questions and initial decisions.

Review checkpoint:

- The spec can be implemented by an agent without needing the original conversation.
- The plan has clear batch boundaries.

## Batch 1: Content Coverage Helpers

Status: Not started

Tasks:

- Add reusable helper types for content coverage summaries.
- Add server-side helpers to gather all approved words for Romanian from existing manifests.
- Add helpers for starts-with, contains-only, and mixed pools.
- Preserve exact Romanian diacritic matching.
- Keep existing gameplay behavior unchanged.

Review checkpoint:

- Helper output can be inspected through tests, temporary logs, or the upcoming page.
- No duplicated filtering logic is introduced in the page.
- Existing content validation still passes.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
```

## Batch 2: Public Route And Summary View

Status: Complete

Tasks:

- Add `app/admin/words/page.tsx`.
- Render the page header and Romanian summary counts.
- Render one coverage row or section per enabled Romanian letter.
- Add play links for enabled letters.
- Keep the page read-only.

Review checkpoint:

- `/admin/words` loads locally.
- Counts are visibly reasonable for the current A/C/M/P pilot.
- The page has no child-facing navigation dependency.

Suggested verification:

```txt
pnpm run lint
pnpm run build
```

Browser:

```txt
http://localhost:3000/admin/words
```

## Batch 3: Word Detail Lists And Image States

Status: Complete

Tasks:

- Add starts-with word detail lists.
- Add contains-only word detail lists.
- Show thumbnails for ready images.
- Show placeholder state for placeholder images.
- Show word ID, display, category, difficulty, and image status.
- Make the layout responsive.

Review checkpoint:

- Ready images render from canonical image paths.
- Contains-only words, when present, show canonical starting-letter IDs and images.
- Empty states are clear.
- The page remains readable on desktop and mobile widths.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

## Batch 4: Polish, Accessibility, And Documentation

Status: Complete

Tasks:

- Tighten visual spacing and table/list readability.
- Verify headings and accessible labels.
- Ensure image alt behavior is appropriate.
- Add any useful implementation notes to this feature status file.
- Update global `docs/status.md` and `docs/plan.md` if needed.

Review checkpoint:

- Page is useful as an operational content dashboard.
- Acceptance criteria in `spec.md` are checked off or exceptions are documented.
- Any unresolved decisions are recorded in `status.md`.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

## Exit Criteria

- `/admin/words` is public and read-only.
- It accurately displays starts-with and contains-only coverage for enabled Romanian letters.
- It displays image readiness and canonical thumbnails.
- It introduces reusable content coverage helpers for the next feature.
- It does not change child-facing gameplay behavior.
