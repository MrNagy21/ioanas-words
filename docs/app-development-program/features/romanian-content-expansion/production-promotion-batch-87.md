# Romanian Content Expansion Batch 87 Production Promotion

Date: 2026-06-26

## Scope

Batch 87 promotes the human-approved Batch 86 Slice 3 contact-sheet cells into production content.

The human approved all `15` Batch 86 cells with: "Images are approved, please go on."

Promoted words:

1. `jet`
2. `ambalaj`
3. `etaj`
4. `bujor`
5. `peisaj`
6. `majoretă`
7. `prăjitor`
8. `pajiște`
9. `coji`
10. `drum`
11. `dulceață`
12. `dop`
13. `dar`
14. `drapel`
15. `dalmațian`

Batch 87 does not add placeholders, clinical claims, database/auth/billing scope, admin editing, route/schema changes, or loader changes.

## Image Processing

Source review sheet:

- `assets/image-sources/ro/batch-86/contact-sheet.png`

Processing artifacts:

- `assets/image-sources/ro/batch-86/final-sources/`
- `assets/image-sources/ro/batch-86/work-128/`
- `assets/image-sources/ro/batch-86/final-preview.png`
- `assets/image-sources/ro/batch-86/circular-preview.png`
- `assets/image-sources/ro/batch-86/optimized-preview.png`
- `assets/image-sources/ro/batch-86/optimized-circular-preview.png`

Processing flow:

- cropped the accepted 5x3 contact-sheet cells in fixed row-major order;
- normalized each crop onto a true `256 x 256 px` square canvas;
- added conservative per-cell padding for circular thumbnail safety;
- processed through a refined `128 px` / `96` color pixel-art workflow and nearest-neighbor upscaling;
- saved final lossless WebP assets under canonical `public/images/ro/a/`, `public/images/ro/b/`, `public/images/ro/c/`, `public/images/ro/d/`, `public/images/ro/e/`, `public/images/ro/j/`, `public/images/ro/m/`, and `public/images/ro/p/` paths.

Circular-mask QA:

- `optimized-circular-preview.png` confirms the important subject parts remain inside the circular mask.
- `jet` remains water/fountain imagery, not aircraft or emergency imagery.
- `prăjitor` shows a toaster/appliance with bread, not a person or cooking fire.
- `drapel` uses an abstract neutral flag with no text, emblem, party, military, or national mark.
- `dalmațian` remains a generic friendly spotted dog with no firefighter or copyrighted-character cue.

## Promoted Assets

| Word | Asset | Size |
| --- | --- | ---: |
| `jet` | `public/images/ro/j/ro-j-jet.webp` | `1,968` bytes |
| `ambalaj` | `public/images/ro/a/ro-a-ambalaj.webp` | `1,884` bytes |
| `etaj` | `public/images/ro/e/ro-e-etaj.webp` | `1,874` bytes |
| `bujor` | `public/images/ro/b/ro-b-bujor.webp` | `2,744` bytes |
| `peisaj` | `public/images/ro/p/ro-p-peisaj.webp` | `1,960` bytes |
| `majoretă` | `public/images/ro/m/ro-m-majoreta.webp` | `1,898` bytes |
| `prăjitor` | `public/images/ro/p/ro-p-prajitor.webp` | `1,782` bytes |
| `pajiște` | `public/images/ro/p/ro-p-pajiste.webp` | `2,860` bytes |
| `coji` | `public/images/ro/c/ro-c-coji.webp` | `3,128` bytes |
| `drum` | `public/images/ro/d/ro-d-drum.webp` | `2,440` bytes |
| `dulceață` | `public/images/ro/d/ro-d-dulceata.webp` | `2,058` bytes |
| `dop` | `public/images/ro/d/ro-d-dop.webp` | `1,872` bytes |
| `dar` | `public/images/ro/d/ro-d-dar.webp` | `2,714` bytes |
| `drapel` | `public/images/ro/d/ro-d-drapel.webp` | `1,606` bytes |
| `dalmațian` | `public/images/ro/d/ro-d-dalmatian.webp` | `2,184` bytes |

All Batch 87 promoted assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

## Content Changes

Added the `15` approved rows to:

- `content/ro/words-a.json`
- `content/ro/words-b.json`
- `content/ro/words-c.json`
- `content/ro/words-d.json`
- `content/ro/words-e.json`
- `content/ro/words-j.json`
- `content/ro/words-m.json`
- `content/ro/words-p.json`

Updated `/admin/releases/2` dirty-tree review list:

- added all `15` new Batch 87 word IDs;
- Release 2 now lists `154` dirty-tree additions for QA.

Updated `src/game/gameplay-compatibility.check.ts` because the content-derived fixture changed:

- `D` starts-with pool is now `21` after adding `drum`, `dulceață`, `dop`, `dar`, `drapel`, and `dalmațian`;
- `CE` mixed practice-target pool is now `19` after adding `dulceață`.

## Content Totals

Post-Batch-87 Romanian content totals:

- Total Romanian records: `524`
- Approved words: `521`
- Ready images: `521`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

Affected coverage after Batch 87:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `J` | 16 | 19 | 35 |
| `D` | 21 | 30 | 51 |
| `A` | 18 | 226 | 244 |
| `E` | 8 | 218 | 226 |
| `B` | 36 | 36 | 72 |
| `P` | 44 | 48 | 92 |
| `M` | 26 | 57 | 83 |
| `C` | 70 | 93 | 163 |
| `Ă` | 0 | 207 | 207 |
| `Ș` | 18 | 32 | 50 |
| `Ț` | 14 | 46 | 60 |
| `R` | 22 | 193 | 215 |
| `L` | 22 | 108 | 130 |

Affected sequence coverage after Batch 87:

| Target | Mixed |
| --- | ---: |
| `CE` | 19 |
| `CI` | 20 |
| `GE` | 17 |
| `GI` | 16 |
| `CHE` | 17 |
| `CHI` | 16 |
| `GHE` | 16 |
| `GHI` | 15 |

## Verification

Passed with the bundled Node runtime and local Bun path on `PATH`:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run check:setup-storage
pnpm run build
```

Notes:

- `pnpm run validate:content` passed with only pre-existing image warning-threshold notices. No Batch 87 asset is above the `12 KB` warning threshold.
- The first validation attempt failed before running because `node` was missing from the shell `PATH`; verification was rerun successfully with the bundled Node directory on `PATH`.
- Sandboxed localhost route checks failed with `EPERM`.
- The required outside-sandbox localhost retry failed with `ECONNREFUSED`, so the expected user-running dev server was not available at `http://localhost:3000`. No alternate server or port was started.

## Batch 88 Ready-To-Copy Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 88.

Read:
AGENTS.md
docs/agent-brief.md
docs/spec.md
docs/plan.md
docs/status.md
docs/image-pipeline.md
docs/app-development-program/speech-therapy-content-guidance.md
docs/app-development-program/features/romanian-content-expansion/spec.md
docs/app-development-program/features/romanian-content-expansion/plan.md
docs/app-development-program/features/romanian-content-expansion/status.md
docs/app-development-program/features/romanian-content-expansion/high-value-target-top-up-worksheet-batch-75.md
docs/app-development-program/features/romanian-content-expansion/implementation-orchestrator-prompt-batch-76.md
docs/app-development-program/features/romanian-content-expansion/slice-plan-index-batch-76.md
docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-85.md
docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-86.md
docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-87.md

Task: Batch 88 slice coverage QA and next-prompt preparation after Batch 87.

Do not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes/schema/loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

Verify and document:
- Batch 87 promoted exactly the 15 human-approved Slice 3 rows.
- All Batch 87 images exist at canonical paths, are 256 x 256 px, below 20 KB, and below the 12 KB warning threshold.
- Circular-mask preview remains acceptable, especially for `jet`, `ambalaj`, `etaj`, `peisaj`, `majoretă`, `pajiște`, `coji`, `drapel`, and `dalmațian`.
- Current totals are 524 total Romanian records, 521 approved words, 521 ready images, 0 approved placeholders, and 3 rejected audit-trail records.
- Affected coverage includes J 16 starts / 19 contains-only / 35 mixed and D 21 / 30 / 51.
- `/admin/releases/2` includes the 15 new Batch 87 IDs and now has 154 dirty-tree additions.

Run:
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run check:setup-storage
pnpm run build
git diff --check

If the expected user-running dev server is reachable at http://localhost:3000, verify `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/j`, `/ro/play/d`, and representative new image URLs. If sandboxed localhost checks fail, retry outside the sandbox before marking the server unavailable. Do not start another server or use another port.

Update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md with verification results and the next recommended content-expansion prompt.
```
