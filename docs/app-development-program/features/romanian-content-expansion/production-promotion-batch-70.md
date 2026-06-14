# Batch 70 Production Promotion: Accepted Batch 69 Cells

Batch: Romanian Content Expansion Batch 70.

Status: complete; promoted human-accepted cells and corrective variants.

Last updated: 2026-06-13.

## Scope Guard

Batch 70 promotes only the human-accepted Batch 69 image cells and matching production word records. It does not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

## Human Review Decision

The human accepted the original Batch 69 cells except for the requested corrections and removal:

- use `gingie` variant A from `assets/image-sources/ro/batch-69/corrective-contact-sheet-1.png`;
- use `rășină` variant A from `assets/image-sources/ro/batch-69/corrective-contact-sheet-1.png`;
- remove `răchită` completely from this slice because it is too unfamiliar and not inferable enough from no-label art.

Promoted words:

1. `șnur`
2. `țambal`
3. `țipar`
4. `dantelă`
5. `degetar`
6. `daltă`
7. `dudă`
8. `jder`
9. `jambiere`
10. `rășină`
11. `bondar`
12. `cojoc`
13. `bijuterie`
14. `gingie`

Not promoted:

- `răchită`

## Image Processing

Batch 70 cropped the accepted original cells from:

- `assets/image-sources/ro/batch-69/contact-sheet.png`

Batch 70 cropped the accepted corrective variants from:

- `assets/image-sources/ro/batch-69/corrective-contact-sheet-1.png`

The processing flow:

- detected the contact-sheet cell panels;
- staged fixed-order source crops under `assets/image-sources/ro/batch-69/staged-sources/`;
- normalized each accepted cell onto a true `256 x 256 px` square canvas;
- used the first corrective `rășină` and first corrective `gingie` cells;
- removed `răchită` from the crop/promotion path;
- processed through a refined `128 px` / `96` color pixel-art workflow and nearest-upscaled to `256 px`;
- scaled long or edge-heavy cells down for circular masks: `șnur`, `țambal`, `daltă`, `dudă`, `jder`, and `bondar`;
- saved optimized lossless WebP assets.

QA preview artifacts:

- `assets/image-sources/ro/batch-69/final-preview.png`
- `assets/image-sources/ro/batch-69/circular-preview.png`

The final circular preview confirms that important subject parts stay inside the inscribed circle and circular masks clip only background.

## Promoted Assets

| Word | Asset | Size |
| --- | --- | ---: |
| `șnur` | `public/images/ro/ș/ro-sh-snur.webp` | `2198` bytes |
| `țambal` | `public/images/ro/ț/ro-tz-tambal.webp` | `6874` bytes |
| `țipar` | `public/images/ro/ț/ro-tz-tipar.webp` | `9434` bytes |
| `dantelă` | `public/images/ro/d/ro-d-dantela.webp` | `10984` bytes |
| `degetar` | `public/images/ro/d/ro-d-degetar.webp` | `11176` bytes |
| `daltă` | `public/images/ro/d/ro-d-dalta.webp` | `2306` bytes |
| `dudă` | `public/images/ro/d/ro-d-duda.webp` | `4782` bytes |
| `jder` | `public/images/ro/j/ro-j-jder.webp` | `4366` bytes |
| `jambiere` | `public/images/ro/j/ro-j-jambiere.webp` | `6832` bytes |
| `rășină` | `public/images/ro/r/ro-r-rasina.webp` | `5996` bytes |
| `bondar` | `public/images/ro/b/ro-b-bondar.webp` | `5192` bytes |
| `cojoc` | `public/images/ro/c/ro-c-cojoc.webp` | `11584` bytes |
| `bijuterie` | `public/images/ro/b/ro-b-bijuterie.webp` | `9376` bytes |
| `gingie` | `public/images/ro/g/ro-g-gingie.webp` | `3998` bytes |

All promoted assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

## Content Totals

After Batch 70:

- total Romanian records: `474`;
- approved words: `471`;
- ready images: `471`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- missing approved production image assets: `0`.

Requested-target coverage after Batch 70:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | 0 | 196 | 196 |
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
| `GHI` | 8 | 5 | 13 |
| `CHE` | 2 | 13 | 15 |
| `CHI` | 8 | 7 | 15 |
| `L` | 22 | 98 | 120 |
| `R` | 21 | 169 | 190 |
| `S` | 25 | 32 | 57 |
| `Ș` | 18 | 30 | 48 |
| `T` | 18 | 102 | 120 |
| `Ț` | 10 | 44 | 54 |
| `V` | 17 | 19 | 36 |
| `B` | 34 | 31 | 65 |
| `D` | 15 | 29 | 44 |
| `J` | 10 | 11 | 21 |

## Verification

Batch 70 verification passed on 2026-06-13:

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

`pnpm run validate:content` reported only pre-existing image warning-threshold notices outside the Batch 70 assets.

The content-derived gameplay fixture was updated because `degetar` increases the `GE` mixed pool from `15` to `16` and `gingie` increases the `GI` mixed pool from `15` to `16`. The exact-size reset-regression fixture now uses the stable `CHE` mixed pool.

Sandboxed localhost checks failed, then the required outside-sandbox retry returned `200` for `/ro`, `/admin/words`, `/ro/play/gi`, and representative Batch 70 image URL `/images/ro/g/ro-g-gingie.webp`.

## Batch 71 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 70.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-70.md
6. docs/app-development-program/features/romanian-content-expansion/status.md
7. docs/status.md

Goal:

Execute Batch 71: slice coverage QA and next-prompt preparation after the Batch 70 promotion. Do not add words, images, routes, schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims in this batch.

Tasks:

- Recompute canonical Romanian content totals from `content/ro/*.json`.
- Confirm Batch 70 production rows and assets are present, `256 x 256 px`, below `20 KB`, and below the `12 KB` warning threshold.
- Confirm `răchită` was not promoted.
- Confirm `rășină` and `gingie` use the first corrective variants.
- Confirm requested-target coverage, especially `Ă`, `GE`, `GI`, `L`, `R`, `Ș`, `T`, `Ț`, `B`, `D`, and `J`.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Verify `http://localhost:3000` routes only if the expected dev server is running on port `3000`; if sandboxed localhost checks fail, retry outside the sandbox before marking the server unavailable. Do not start another server or use another port.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with totals, verification, and the next planning prompt.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```
