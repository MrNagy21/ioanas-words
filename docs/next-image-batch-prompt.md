# Next Image Batch Prompt

Last updated: 2026-06-13

The current Romanian production pack after Batch 74:

- Total Romanian records: `479`.
- Approved words: `476`.
- Ready images: `476`.
- Approved placeholders: `0`.
- Rejected audit-trail records: `ghicitoare`, `miez`, and `stinghie`.
- New playable routes are enabled for `K`, `Q`, `W`, `X`, and `Y`.
- `cameră web` remains in `C`, `iac` remains in `I`, and `webcam` / `yak` were not reintroduced.
- `tacâmuri` is the promoted production row from Batch 66, not the earlier planned singular `tacâm`.
- `răchită` was not promoted and should stay out unless the human explicitly reopens it.
- `ghebe` and `ghioc` were not promoted after human review.

Batch 74 completed the final strict point 2 top-up:

- Added `ghemuit` as a more usual true new `GHE` starts-with row.
- Added `burghiu` as a `GHI` contains row.
- Added both rows to `/admin/releases/2` for Release 2 QA.
- Both Batch 74 assets are `256 x 256 px`, below `20 KB`, and below the `12 KB` warning threshold.

Current point 2 mixed coverage:

- `ce`: `18`
- `ci`: `20`
- `ge`: `16`
- `gi`: `16`
- `che`: `16`
- `chi`: `16`
- `ghe`: `16`
- `ghi`: `15`

All listed Romanian expansion requirements are satisfied for the current Release 2 candidate.

## Current Verification

Sandboxed `pnpm` checks hung before script output, then the required outside-sandbox retries passed:

- `pnpm run validate:content`
- `pnpm run lint`
- `pnpm exec tsc --noEmit --incremental false`
- `pnpm run check:gameplay`
- `pnpm run check:matching`
- `pnpm run check:setup-storage`
- `pnpm run build`
- `git diff --check`

`pnpm run validate:content` reported only existing image warning-threshold notices outside the Batch 74 assets.

In-app Browser QA loaded `/ro`, `/admin/releases/2`, `/ro/play/ghe`, and `/ro/play/ghi`. Outside-sandbox HTTP checks returned `200` for those routes plus `/images/ro/g/ro-g-ghemuit.webp` and `/images/ro/b/ro-b-burghiu.webp`.

## Next Approved Batch

There is no approved next image-generation batch for the current requirement set. The next step is human QA on `/admin/releases/2`, then commit/release preparation if QA accepts the pack.

## Release QA Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 74.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-74.md
6. docs/app-development-program/features/romanian-content-expansion/status.md
7. docs/status.md

Goal:

Perform Release 2 QA and release preparation. Do not add new words or images unless the human explicitly reopens vocabulary/image work.

Tasks:

- Recompute canonical Romanian content totals from `content/ro/*.json`.
- Confirm `/admin/releases/1` is the committed baseline and `/admin/releases/2` is the dirty-tree additions list.
- Confirm `/admin/releases/2` includes `burghiu`, `ghemuit`, `unghieră`, `pereche`, and `rechizite`.
- Confirm `ghebe`, `ghioc`, and `răchită` were not promoted.
- Confirm requested point 2 coverage: `ce`, `ci`, `ge`, `gi`, `che`, `chi`, `ghe`, and `ghi`.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Verify `http://localhost:3000` routes only if the expected dev server is running on port `3000`; if sandboxed localhost checks fail, retry outside the sandbox before marking the server unavailable. Do not start another server or use another port.
- Review `git status --short` and clean transient local files only if the human asks.
- Update docs with the QA result and release decision.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```

## Corrective Image Audit Rule

Future corrective image work still needs a new human-flagged list. For each flagged image, inspect the current image and compare it against the production reference set in `docs/image-pipeline.md` before generating anything.

For corrective generation, use the earlier successful AI contact-sheet workflow: generate a small sheet with generous gutters and no labels, then stop and ask the human to review it before cropping or replacing anything. Future corrective prompt sheets should include the circular display constraint from `docs/image-pipeline.md`: every subject must fit comfortably inside the inscribed circle of the square cell so a circular UI mask clips only background.
