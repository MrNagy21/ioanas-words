# Romanian Content Expansion Batch 79 Production Promotion

Date: 2026-06-23

## Scope

Batch 79 promotes the human-approved Batch 78 Slice 1 `H` starts-with contact-sheet cells into production content.

The human approved all `15` Batch 78 cells and added the requirement that the resulting images fit well in circular wheel/admin thumbnails without important subject parts being cut off.

Promoted words:

1. `hipopotam`
2. `hârtie`
3. `hotel`
4. `halat`
5. `harpă`
6. `horn`
7. `hamster`
8. `hambar`
9. `husă`
10. `hol`
11. `horă`
12. `hochei`
13. `hublou`
14. `hamburger`
15. `hering`

Batch 79 does not add placeholders, clinical claims, database/auth/billing scope, admin editing, route/schema changes, or loader changes.

## Image Processing

Source review sheet:

- `assets/image-sources/ro/batch-78/contact-sheet.png`

Processing artifacts:

- `assets/image-sources/ro/batch-78/final-sources/`
- `assets/image-sources/ro/batch-78/work-128/`
- `assets/image-sources/ro/batch-78/final-preview.png`
- `assets/image-sources/ro/batch-78/circular-preview.png`
- `assets/image-sources/ro/batch-78/optimized-preview.png`
- `assets/image-sources/ro/batch-78/optimized-circular-preview.png`

Processing flow:

- detected the contact-sheet cell panels instead of assuming exact gutters;
- cropped the accepted cells in fixed row-major order;
- normalized each crop onto a true `256 x 256 px` square canvas;
- added conservative per-cell padding for circular thumbnail safety;
- applied stronger padding to edge-heavy or scene cells, especially `horn`, `hol`, `horă`, `hochei`, and `hering`;
- revised `horn` after circular preview because the first padded pass still left the roof too close to the circular mask;
- processed through a refined `128 px` / `96` color pixel-art workflow and nearest-neighbor upscaling;
- saved final lossless WebP assets under canonical `public/images/ro/h/` paths.

Circular-mask QA:

- `optimized-circular-preview.png` confirms the important subject parts remain inside the circular mask.
- `horn` was deliberately scaled down further than the other cells so the roof/chimney composition is not clipped.
- The hallway and dance cells remain scene-based, but the visible subject focus stays inside the circular thumbnail.

## Promoted Assets

| Word | Asset | Size |
| --- | --- | ---: |
| `hipopotam` | `public/images/ro/h/ro-h-hipopotam.webp` | `3,314` bytes |
| `hârtie` | `public/images/ro/h/ro-h-hartie.webp` | `2,504` bytes |
| `hotel` | `public/images/ro/h/ro-h-hotel.webp` | `2,324` bytes |
| `halat` | `public/images/ro/h/ro-h-halat.webp` | `2,816` bytes |
| `harpă` | `public/images/ro/h/ro-h-harpa.webp` | `1,526` bytes |
| `horn` | `public/images/ro/h/ro-h-horn.webp` | `1,394` bytes |
| `hamster` | `public/images/ro/h/ro-h-hamster.webp` | `2,366` bytes |
| `hambar` | `public/images/ro/h/ro-h-hambar.webp` | `1,742` bytes |
| `husă` | `public/images/ro/h/ro-h-husa.webp` | `1,948` bytes |
| `hol` | `public/images/ro/h/ro-h-hol.webp` | `2,132` bytes |
| `horă` | `public/images/ro/h/ro-h-hora.webp` | `1,964` bytes |
| `hochei` | `public/images/ro/h/ro-h-hochei.webp` | `1,588` bytes |
| `hublou` | `public/images/ro/h/ro-h-hublou.webp` | `2,596` bytes |
| `hamburger` | `public/images/ro/h/ro-h-hamburger.webp` | `2,250` bytes |
| `hering` | `public/images/ro/h/ro-h-hering.webp` | `1,956` bytes |

All Batch 79 promoted assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

## Content Changes

Added the `15` approved rows to:

- `content/ro/words-h.json`

Production category note:

- Batch 77 and Batch 78 planning used `music` for `harpă` / `horă` and `sport` for `hochei`.
- The current production schema does not allow those category values.
- Batch 79 uses current valid schema values without changing schema: `harpă` and `hochei` use `toy`; `horă` uses `people`.

Updated `/admin/releases/2` dirty-tree review list:

- added all `15` new Batch 79 word IDs;
- Release 2 now lists `124` dirty-tree additions for QA.

Updated the gameplay compatibility fixture:

- `hamburger` increases the derived `GE` mixed practice target from `16` to `17`;
- `hochei` increases the derived `CHE` mixed practice target from `16` to `17`.

## Content Totals

Post-Batch-79 Romanian content totals:

- Total Romanian records: `494`
- Approved words: `491`
- Ready images: `491`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

Affected coverage after Batch 79:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `H` | 18 | 64 | 82 |
| `GE` | 9 | 8 | 17 |
| `CHE` | 2 | 15 | 17 |

## Verification

Passed with the bundled Node runtime on `PATH`:

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

- The first sandboxed `pnpm run validate:content` attempt failed before validation because pnpm tried to fetch package metadata and could not use network/TTY in the sandbox.
- The outside-sandbox retry needed the bundled Node path prepended because `node` was otherwise missing from the script shell.
- `pnpm run validate:content` passed with only pre-existing warning-threshold image notices. No Batch 79 assets are above the warning threshold.
- The expected local dev server at `http://localhost:3000` was unavailable inside and outside the sandbox, so route/browser QA could not run. No alternate dev server or port was started.

## Batch 80 Ready-To-Copy Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 80.

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
docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-77.md
docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-78.md
docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-79.md

Task: Batch 80 slice coverage QA and next-prompt preparation after Batch 79.

Do not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes/schema/loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

Verify and document:
- Batch 79 promoted exactly the 15 human-approved H rows.
- All Batch 79 images exist at canonical paths, are 256 x 256 px, below 20 KB, and below the 12 KB warning threshold.
- Circular-mask preview remains acceptable, especially for `horn`, `hol`, `horă`, `hochei`, and `hering`.
- Current totals are 494 total Romanian records, 491 approved words, 491 ready images, 0 approved placeholders, and 3 rejected audit-trail records.
- Affected coverage is H 18 starts / 64 contains-only / 82 mixed, GE 9 / 8 / 17, and CHE 2 / 15 / 17.
- `/admin/releases/2` includes the 15 new Batch 79 IDs and now has 124 dirty-tree additions.

Run:
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run check:setup-storage
pnpm run build
git diff --check

If the expected user-running dev server is reachable at http://localhost:3000, verify `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/h`, and representative new image URLs. If sandboxed localhost checks fail, retry outside the sandbox before marking the server unavailable. Do not start another server or use another port.

Update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md with verification results and the next recommended content-expansion prompt.
```
