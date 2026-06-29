# Romanian Content Expansion Batch 91 Production Promotion

Date: 2026-06-28

## Scope

Batch 91 promotes the Batch 89 / Batch 90 Slice 4 rows into production content.

The human waived the separate image-approval stop for this orchestrator run and asked the orchestrator to proceed with image creation and production promotion, while still ensuring circular-crop safety and stopping only for critical exceptions.

Promoted words:

1. `disc`
2. `diamant`
3. `dungă`
4. `dronă`
5. `valiză`
6. `vrabie`
7. `vulcan`
8. `val`
9. `vâslă`
10. `velier`
11. `violetă`
12. `vultur`
13. `ventuză`
14. `evantai`
15. `navă`

Batch 91 does not add placeholders, clinical claims, database/auth/billing scope, admin editing, route/schema changes, or loader changes.

## Image Processing

Source review sheet:

- `assets/image-sources/ro/batch-90/contact-sheet.png`

Processing artifacts:

- `assets/image-sources/ro/batch-90/final-sources/`
- `assets/image-sources/ro/batch-90/work-128/`
- `assets/image-sources/ro/batch-90/final-preview.png`
- `assets/image-sources/ro/batch-90/circular-preview.png`
- `assets/image-sources/ro/batch-90/optimized-preview.png`
- `assets/image-sources/ro/batch-90/optimized-circular-preview.png`

Processing flow:

- generated one ordered, unlabeled `5 x 3` contact sheet in the Batch 89 order;
- cropped the cells in fixed row-major order;
- normalized each crop onto a true square canvas;
- processed through a refined `128 px` / `96` color pixel-art workflow and nearest-neighbor upscaling to final `256 x 256 px`;
- saved final lossless WebP assets under canonical `public/images/ro/d/`, `public/images/ro/e/`, `public/images/ro/n/`, and `public/images/ro/v/` paths;
- rendered circular previews before production promotion.

Circular-mask QA:

- `assets/image-sources/ro/batch-90/optimized-circular-preview.png` confirms important subject parts remain inside the circular mask.
- The initial circular preview showed `vultur` too wide and `valiză` close to the upper mask edge; both assets were locally scaled down and the circular preview was regenerated.
- `vâslă` remains fully inside the circular safe area despite being a long object.
- `disc`, `dungă`, `val`, and `ventuză` use the planned concrete senses and avoid the blocked/ambiguous senses recorded in Batch 89.
- `dronă` has no surveillance, military, weapon, or emergency framing.
- `vulcan` stays calm and non-disaster-oriented.
- `navă` is a larger generic ship with no sails, distinct from `velier`, `barcă`, and `vapor`.

## Promoted Assets

| Word | Asset | Size |
| --- | --- | ---: |
| `disc` | `public/images/ro/d/ro-d-disc.webp` | `10,704` bytes |
| `diamant` | `public/images/ro/d/ro-d-diamant.webp` | `10,244` bytes |
| `dungă` | `public/images/ro/d/ro-d-dunga.webp` | `10,964` bytes |
| `dronă` | `public/images/ro/d/ro-d-drona.webp` | `11,318` bytes |
| `valiză` | `public/images/ro/v/ro-v-valiza.webp` | `8,272` bytes |
| `vrabie` | `public/images/ro/v/ro-v-vrabie.webp` | `10,546` bytes |
| `vulcan` | `public/images/ro/v/ro-v-vulcan.webp` | `10,522` bytes |
| `val` | `public/images/ro/v/ro-v-val.webp` | `11,250` bytes |
| `vâslă` | `public/images/ro/v/ro-v-vasla.webp` | `10,462` bytes |
| `velier` | `public/images/ro/v/ro-v-velier.webp` | `9,882` bytes |
| `violetă` | `public/images/ro/v/ro-v-violeta.webp` | `10,584` bytes |
| `vultur` | `public/images/ro/v/ro-v-vultur.webp` | `7,352` bytes |
| `ventuză` | `public/images/ro/v/ro-v-ventuza.webp` | `10,600` bytes |
| `evantai` | `public/images/ro/e/ro-e-evantai.webp` | `10,802` bytes |
| `navă` | `public/images/ro/n/ro-n-nava.webp` | `9,486` bytes |

All Batch 91 promoted assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

## Content Changes

Added the `15` approved rows to:

- `content/ro/words-d.json`
- `content/ro/words-e.json`
- `content/ro/words-n.json`
- `content/ro/words-v.json`

Updated `/admin/releases/2` dirty-tree review list:

- added all `15` new Batch 91 word IDs;
- Release 2 now lists `169` dirty-tree additions for QA.

Updated `src/game/gameplay-compatibility.check.ts` because the content-derived fixture changed:

- `D` starts-with pool is now `25` after adding `disc`, `diamant`, `dungă`, and `dronă`.

## Content Totals

Post-Batch-91 Romanian content totals:

- Total Romanian records: `539`
- Approved words: `536`
- Ready images: `536`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

Affected coverage after Batch 91:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `D` | 25 | 30 | 55 |
| `V` | 26 | 21 | 47 |
| `E` | 9 | 222 | 231 |
| `N` | 6 | 153 | 159 |
| `I` | 9 | 208 | 217 |
| `A` | 18 | 233 | 251 |
| `L` | 22 | 115 | 137 |
| `R` | 22 | 197 | 219 |
| `T` | 18 | 125 | 143 |
| `Ă` | 0 | 214 | 214 |
| `Â` | 0 | 16 | 16 |
| `S` | 25 | 41 | 66 |

Sequence coverage remains unchanged after Batch 91:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `CE` | 14 | 5 | 19 |
| `CI` | 9 | 11 | 20 |
| `GE` | 9 | 8 | 17 |
| `GI` | 7 | 9 | 16 |
| `CHE` | 2 | 15 | 17 |
| `CHI` | 8 | 8 | 16 |
| `GHE` | 12 | 4 | 16 |
| `GHI` | 8 | 7 | 15 |

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
git diff --check
```

Notes:

- `pnpm run validate:content` passed with only pre-existing image warning-threshold notices. No Batch 91 asset is above the `12 KB` warning threshold.
- `pnpm run build` passed with Next.js `16.2.6` and generated the expected static routes, including `/ro`, `/admin/words`, `/admin/releases/2`, and Romanian play/setup paths.
- Sandboxed localhost route checks failed with `EPERM`.
- The required outside-sandbox localhost retry failed with `ECONNREFUSED`, so the expected user-running dev server was not available at `http://localhost:3000`. No alternate server or port was started.

Representative localhost routes and image URLs attempted:

```txt
http://localhost:3000/ro
http://localhost:3000/admin/words
http://localhost:3000/admin/releases/2
http://localhost:3000/ro/play/d
http://localhost:3000/ro/play/v
http://localhost:3000/ro/play/e
http://localhost:3000/ro/play/n
http://localhost:3000/images/ro/d/ro-d-disc.webp
http://localhost:3000/images/ro/v/ro-v-vasla.webp
http://localhost:3000/images/ro/v/ro-v-vultur.webp
http://localhost:3000/images/ro/n/ro-n-nava.webp
```
