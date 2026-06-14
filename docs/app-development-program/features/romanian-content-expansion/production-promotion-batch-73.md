# Batch 73 Production Promotion: Accepted Batch 72 Cells

Batch: Romanian Content Expansion Batch 73.

Status: complete; promoted human-accepted Batch 72 cells.

Last updated: 2026-06-13.

## Scope Guard

Batch 73 promotes only the human-accepted Batch 72 corrective cells and the already accepted `rechizite` cell. It does not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

## Human Review Decision

The human accepted the Batch 72 corrective sheet and asked to use these images:

1. `gheretă` corrective image
2. `unghieră`
3. `pereche` corrective socks image

The human also accepted the original `rechizite` image from the first Batch 72 sheet.

Promotion result:

- `gheretă` was already an approved production word, so Batch 73 replaced its existing image asset and alt text instead of adding a duplicate word row.
- `unghieră`, `pereche`, and `rechizite` were added as new approved production rows.
- `ghebe` and `ghioc` remain rejected for this release and were not promoted.

## Image Processing

Batch 73 cropped accepted cells from:

- `assets/image-sources/ro/batch-72/corrective-contact-sheet-1.png`
- `assets/image-sources/ro/batch-72/contact-sheet.png`

The processing flow:

- cropped the three corrective cells in row-major order;
- cropped the original `rechizite` cell from the first Batch 72 sheet;
- staged source crops under `assets/image-sources/ro/batch-72/staged-sources/`;
- normalized each accepted cell onto a true square canvas;
- processed the crops through a tighter `96 px` / `64` color pixel-art workflow and nearest-upscaled to `256 px` after the first optimization pass exceeded the `20 KB` hard maximum;
- optimized final lossless WebP assets through `scripts/images/optimize-images.mjs`;
- regenerated final and circular-mask previews.

QA preview artifacts:

- `assets/image-sources/ro/batch-72/final-preview.png`
- `assets/image-sources/ro/batch-72/circular-preview.png`

The circular preview confirms that important subject pixels stay inside the inscribed circle and circular masks clip only background.

## Promoted Assets

| Word | Asset | Size | Result |
| --- | --- | ---: | --- |
| `gheretă` | `public/images/ro/g/ro-g-ghereta.webp` | `1734` bytes | existing row image replaced |
| `unghieră` | `public/images/ro/u/ro-u-unghiera.webp` | `10994` bytes | new row |
| `pereche` | `public/images/ro/p/ro-p-pereche.webp` | `4462` bytes | new row |
| `rechizite` | `public/images/ro/r/ro-r-rechizite.webp` | `1880` bytes | new row |

All Batch 73 final assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

## Content Totals

After Batch 73:

- total Romanian records: `477`;
- approved words: `474`;
- ready images: `474`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- missing approved production image assets: `0`.

Requested-target coverage after Batch 73:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | 0 | 197 | 197 |
| `Â` | 0 | 13 | 13 |
| `K` | 5 | 1 | 6 |
| `Q` | 1 | 0 | 1 |
| `W` | 1 | 2 | 3 |
| `X` | 1 | 5 | 6 |
| `Y` | 2 | 0 | 2 |
| `CE` | 14 | 4 | 18 |
| `CI` | 9 | 11 | 20 |
| `GE` | 9 | 7 | 16 |
| `GI` | 7 | 9 | 16 |
| `GHE` | 11 | 4 | 15 |
| `GHI` | 8 | 6 | 14 |
| `CHE` | 2 | 14 | 16 |
| `CHI` | 8 | 8 | 16 |
| `L` | 22 | 98 | 120 |
| `R` | 22 | 171 | 193 |
| `S` | 25 | 32 | 57 |
| `Ș` | 18 | 30 | 48 |
| `T` | 18 | 103 | 121 |
| `Ț` | 10 | 44 | 54 |
| `V` | 17 | 19 | 36 |
| `B` | 34 | 31 | 65 |
| `D` | 15 | 29 | 44 |
| `J` | 10 | 11 | 21 |

Point 2 status after Batch 73:

- `GHE`: existing coverage remains `15`; `gheretă` image was refreshed but no new `GHE` row was added because the word already existed.
- `GHI`: `unghieră` adds one contains-only `GHI` row, bringing mixed coverage to `14`.
- `CHE`: `pereche` adds one contains-only `CHE` row, bringing mixed coverage to `16`.
- `CHI`: `rechizite` adds one contains-only `CHI` row, bringing mixed coverage to `16`.

`/admin/releases/2` now includes the three newly promoted Batch 73 word rows: `unghieră`, `pereche`, and `rechizite`.

## Verification

Sandboxed `pnpm` checks failed with `fetch failed`, so the required `pnpm` checks were rerun outside the sandbox with the bundled Node runtime on `PATH`.

Passed on 2026-06-13:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run check:setup-storage
pnpm run build
git diff --check
```

`pnpm run validate:content` reported only pre-existing image warning-threshold notices outside the Batch 73 assets.

The content-derived gameplay fixture was updated because `pereche` increases the `CHE` mixed pool from `15` to `16`; the exact-size visible-subset fixture now uses the stable `D` starts-with pool with `15` words.

Sandboxed localhost checks failed, then the required outside-sandbox retries returned `200` for:

- `/ro`
- `/admin/releases/2`
- `/ro/play/ghe`
- `/ro/play/ghi`
- `/images/ro/u/ro-u-unghiera.webp`
- `/images/ro/r/ro-r-rechizite.webp`

## Batch 74 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 73.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-73.md
6. docs/app-development-program/features/romanian-content-expansion/status.md
7. docs/status.md

Goal:

Execute Batch 74: release QA and next-step decision after the Batch 73 promotion. Do not add new words or images unless the human explicitly asks for another vocabulary slice.

Tasks:

- Recompute canonical Romanian content totals from `content/ro/*.json`.
- Confirm Batch 73 production rows and assets are present, `256 x 256 px`, below `20 KB`, and below the `12 KB` warning threshold.
- Confirm `/admin/releases/2` includes `unghieră`, `pereche`, and `rechizite`.
- Confirm `ghebe` and `ghioc` were not promoted.
- Confirm `gheretă` is a replacement image for an existing approved row, not a duplicate row.
- Confirm requested point 2 coverage, especially `GHE`, `GHI`, `CHE`, and `CHI`.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Verify `http://localhost:3000` routes only if the expected dev server is running on port `3000`; if sandboxed localhost checks fail, retry outside the sandbox before marking the server unavailable. Do not start another server or use another port.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with the QA result and the next approved batch prompt.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```
