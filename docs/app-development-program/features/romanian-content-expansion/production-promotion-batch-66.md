# Batch 66 Production Promotion: Accepted Batch 65 Cells

Batch: Romanian Content Expansion Batch 66.

Status: complete; promoted all human-accepted cells.

Last updated: 2026-06-13.

## Scope Guard

Batch 66 promotes only the human-accepted Batch 65 image cells and matching production word records. It does not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

## Human Review Decision

The human accepted all `15` Batch 65 images and requested one vocabulary revision:

- Replace planned `tacâm` with the more usual plural `tacâmuri`.
- Keep the approved cutlery image for the revised `tacâmuri` production row.

Promoted words:

1. `bibliotecă`
2. `radiator`
3. `sacou`
4. `șoim`
5. `ștampilă`
6. `șezlong`
7. `tacâmuri`
8. `țarc`
9. `țiglă`
10. `viespe`
11. `șurubelniță`
12. `joben`
13. `jantă`
14. `coțofană`
15. `jardinieră`

## Image Processing

Batch 66 cropped the accepted cells from:

- `assets/image-sources/ro/batch-65/contact-sheet.png`

The generated sheet had `5 x 3` ordered cells. The processing flow:

- detected the contact-sheet cell panels;
- staged fixed-order source crops under `assets/image-sources/ro/batch-65/staged-sources/`;
- normalized each accepted cell onto a true `256 x 256 px` square canvas;
- composited only the foreground subject onto a full square background so no rectangular source panels remain;
- scaled long or wide subjects down for the app's circular masks, with extra padding for `bibliotecă`, `șurubelniță`, and `coțofană`;
- processed through the `128 px` / `96` color refined pixel-art workflow and nearest-upscaled to `256 px`;
- saved optimized lossless WebP assets.

QA preview artifacts:

- `assets/image-sources/ro/batch-65/final-preview.png`
- `assets/image-sources/ro/batch-65/circular-preview.png`

The final circular preview confirms that important subject parts stay inside the inscribed circle and circular masks clip only background.

## Promoted Assets

| Word | Asset | Size |
| --- | --- | ---: |
| `bibliotecă` | `public/images/ro/b/ro-b-biblioteca.webp` | `3808` bytes |
| `radiator` | `public/images/ro/r/ro-r-radiator.webp` | `4582` bytes |
| `sacou` | `public/images/ro/s/ro-s-sacou.webp` | `5266` bytes |
| `șoim` | `public/images/ro/ș/ro-sh-soim.webp` | `3582` bytes |
| `ștampilă` | `public/images/ro/ș/ro-sh-stampila.webp` | `2910` bytes |
| `șezlong` | `public/images/ro/ș/ro-sh-sezlong.webp` | `3524` bytes |
| `tacâmuri` | `public/images/ro/t/ro-t-tacamuri.webp` | `2926` bytes |
| `țarc` | `public/images/ro/ț/ro-tz-tarc.webp` | `3952` bytes |
| `țiglă` | `public/images/ro/ț/ro-tz-tigla.webp` | `4198` bytes |
| `viespe` | `public/images/ro/v/ro-v-viespe.webp` | `4052` bytes |
| `șurubelniță` | `public/images/ro/ș/ro-sh-surubelnita.webp` | `2336` bytes |
| `joben` | `public/images/ro/j/ro-j-joben.webp` | `3438` bytes |
| `jantă` | `public/images/ro/j/ro-j-janta.webp` | `6120` bytes |
| `coțofană` | `public/images/ro/c/ro-c-cotofana.webp` | `2908` bytes |
| `jardinieră` | `public/images/ro/j/ro-j-jardiniera.webp` | `4034` bytes |

All promoted assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

## Content Totals

After Batch 66:

- total Romanian records: `460`;
- approved words: `457`;
- ready images: `457`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- missing approved production image assets: `0`.

Requested-target coverage after Batch 66:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | 0 | 192 | 192 |
| `Â` | 0 | 13 | 13 |
| `K` | 5 | 1 | 6 |
| `Q` | 1 | 0 | 1 |
| `W` | 1 | 2 | 3 |
| `X` | 1 | 5 | 6 |
| `Y` | 2 | 0 | 2 |
| `CE` | 14 | 4 | 18 |
| `CI` | 9 | 11 | 20 |
| `GE` | 9 | 6 | 15 |
| `GI` | 6 | 9 | 15 |
| `GHE` | 11 | 4 | 15 |
| `GHI` | 8 | 5 | 13 |
| `CHE` | 2 | 13 | 15 |
| `CHI` | 8 | 7 | 15 |
| `L` | 22 | 95 | 117 |
| `R` | 20 | 162 | 182 |
| `S` | 25 | 32 | 57 |
| `Ș` | 17 | 29 | 46 |
| `T` | 18 | 98 | 116 |
| `Ț` | 8 | 44 | 52 |
| `V` | 17 | 19 | 36 |
| `B` | 32 | 29 | 61 |
| `D` | 11 | 27 | 38 |
| `J` | 8 | 9 | 17 |

## Verification

Batch 66 verification passed on 2026-06-13:

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

`pnpm run validate:content` reported only pre-existing image warning-threshold notices outside the Batch 66 assets.

Sandboxed localhost checks failed, then the required outside-sandbox retry returned `200` for `/ro`, `/admin/words`, affected play routes `/ro/play/b`, `/ro/play/r`, `/ro/play/s`, `/ro/play/sh`, `/ro/play/t`, `/ro/play/tz`, `/ro/play/v`, `/ro/play/j`, `/ro/play/c`, and representative Batch 66 image URLs.

## Batch 67 Follow-Up

Batch 67 slice coverage QA was completed and is recorded in `slice-coverage-qa-batch-67.md`. The active next prompt now starts Batch 68 planning.
