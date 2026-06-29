# Romanian Content Expansion Batch 83 Production Promotion

Date: 2026-06-24

## Scope

Batch 83 promotes the human-approved Batch 82 Slice 2 `H` / `J` / `Ț` contact-sheet cells into production content.

The human approved all `15` Batch 82 cells with: "images are fine."

Promoted words:

1. `hamsie`
2. `hienă`
3. `homar`
4. `ham`
5. `hanorac`
6. `hidrant`
7. `jurnal`
8. `jalon`
9. `jambon`
10. `joystick`
11. `jerseu`
12. `țintă`
13. `ținută`
14. `țesătură`
15. `țâșnitoare`

Batch 83 does not add placeholders, clinical claims, database/auth/billing scope, admin editing, route/schema changes, or loader changes.

## Image Processing

Source review sheet:

- `assets/image-sources/ro/batch-82/contact-sheet.png`

Processing artifacts:

- `assets/image-sources/ro/batch-82/final-sources/`
- `assets/image-sources/ro/batch-82/work-128/`
- `assets/image-sources/ro/batch-82/final-preview.png`
- `assets/image-sources/ro/batch-82/circular-preview.png`
- `assets/image-sources/ro/batch-82/optimized-preview.png`
- `assets/image-sources/ro/batch-82/optimized-circular-preview.png`

Processing flow:

- detected the contact-sheet panels and cropped accepted cells in fixed row-major order;
- normalized each crop onto a true `256 x 256 px` square canvas;
- added conservative per-cell padding for circular thumbnail safety;
- processed through a refined `128 px` / `96` color pixel-art workflow and nearest-neighbor upscaling;
- saved final lossless WebP assets under canonical `public/images/ro/h/`, `public/images/ro/j/`, and `public/images/ro/ț/` paths.

Circular-mask QA:

- `optimized-circular-preview.png` confirms the important subject parts remain inside the circular mask.
- The risk cells `ham`, `jambon`, `ținută`, `țesătură`, and `țâșnitoare` remain readable after circular masking.
- `țintă` stays weapon-free in the promoted image: target rings only, no arrows, darts, impact marks, or weapon cue.
- `joystick` stays generic and unbranded, with no logo or button labels.

## Promoted Assets

| Word | Asset | Size |
| --- | --- | ---: |
| `hamsie` | `public/images/ro/h/ro-h-hamsie.webp` | `2,576` bytes |
| `hienă` | `public/images/ro/h/ro-h-hiena.webp` | `2,426` bytes |
| `homar` | `public/images/ro/h/ro-h-homar.webp` | `2,680` bytes |
| `ham` | `public/images/ro/h/ro-h-ham.webp` | `2,046` bytes |
| `hanorac` | `public/images/ro/h/ro-h-hanorac.webp` | `2,334` bytes |
| `hidrant` | `public/images/ro/h/ro-h-hidrant.webp` | `2,262` bytes |
| `jurnal` | `public/images/ro/j/ro-j-jurnal.webp` | `1,458` bytes |
| `jalon` | `public/images/ro/j/ro-j-jalon.webp` | `2,634` bytes |
| `jambon` | `public/images/ro/j/ro-j-jambon.webp` | `2,380` bytes |
| `joystick` | `public/images/ro/j/ro-j-joystick.webp` | `1,540` bytes |
| `jerseu` | `public/images/ro/j/ro-j-jerseu.webp` | `2,068` bytes |
| `țintă` | `public/images/ro/ț/ro-tz-tinta.webp` | `1,788` bytes |
| `ținută` | `public/images/ro/ț/ro-tz-tinuta.webp` | `2,378` bytes |
| `țesătură` | `public/images/ro/ț/ro-tz-tesatura.webp` | `2,058` bytes |
| `țâșnitoare` | `public/images/ro/ț/ro-tz-tasnitoare.webp` | `1,766` bytes |

All Batch 83 promoted assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

## Content Changes

Added the `15` approved rows to:

- `content/ro/words-h.json`
- `content/ro/words-j.json`
- `content/ro/words-ț.json`

Updated `/admin/releases/2` dirty-tree review list:

- added all `15` new Batch 83 word IDs;
- Release 2 now lists `139` dirty-tree additions for QA.

No content-derived compatibility fixture update was needed; `check:gameplay`, `check:matching`, and `check:setup-storage` passed with the new rows.

## Content Totals

Post-Batch-83 Romanian content totals:

- Total Romanian records: `509`
- Approved words: `506`
- Ready images: `506`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

Affected coverage after Batch 83:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `H` | 24 | 64 | 88 |
| `J` | 15 | 11 | 26 |
| `Ț` | 14 | 44 | 58 |
| `S` | 25 | 38 | 63 |
| `Ș` | 18 | 31 | 49 |
| `T` | 18 | 115 | 133 |
| `R` | 22 | 187 | 209 |
| `D` | 15 | 30 | 45 |
| `L` | 22 | 104 | 126 |

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

- `pnpm run validate:content` passed with only pre-existing image warning-threshold notices. No Batch 83 asset is above the `12 KB` warning threshold.
- The first image-processing command could not run because `node` was missing from the shell `PATH`; the processing was rerun with the bundled Node executable.
- The expected local dev server at `http://localhost:3000` was unavailable from the sandbox, but the required outside-sandbox retry returned `200 OK` for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/h`, `/ro/play/j`, `/ro/play/tz`, and representative new image URLs for `ham`, `joystick`, and `țâșnitoare`.

## Batch 84 Ready-To-Copy Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 84.

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
docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-80.md
docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-81.md
docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-82.md
docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-83.md

Task: Batch 84 slice coverage QA and next-prompt preparation after Batch 83.

Do not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes/schema/loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

Verify and document:
- Batch 83 promoted exactly the 15 human-approved Slice 2 rows.
- All Batch 83 images exist at canonical paths, are 256 x 256 px, below 20 KB, and below the 12 KB warning threshold.
- Circular-mask preview remains acceptable, especially for `ham`, `jambon`, `ținută`, `țesătură`, and `țâșnitoare`.
- Current totals are 509 total Romanian records, 506 approved words, 506 ready images, 0 approved placeholders, and 3 rejected audit-trail records.
- Affected coverage includes H 24 starts / 64 contains-only / 88 mixed, J 15 / 11 / 26, and Ț 14 / 44 / 58.
- `/admin/releases/2` includes the 15 new Batch 83 IDs and now has 139 dirty-tree additions.

Run:
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run check:setup-storage
pnpm run build
git diff --check

If the expected user-running dev server is reachable at http://localhost:3000, verify `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/h`, `/ro/play/j`, `/ro/play/tz`, and representative new image URLs. If sandboxed localhost checks fail, retry outside the sandbox before marking the server unavailable. Do not start another server or use another port.

Update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md with verification results and the next recommended content-expansion prompt.
```
