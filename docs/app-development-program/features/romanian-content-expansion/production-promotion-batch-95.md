# Romanian Content Expansion Batch 95 Production Promotion

Date: 2026-06-28

## Scope

Batch 95 promotes the Batch 93 / Batch 94 Slice 5 rows into production content.

The human waived the separate image-approval stop for this orchestrator run and asked the orchestrator to proceed with image creation and production promotion, while still ensuring circular-crop safety and stopping only for critical exceptions.

Promoted words:

1. `șuviță`
2. `movilă`
3. `servietă`
4. `farfurie`
5. `fereastră`
6. `făină`
7. `fermă`
8. `frate`
9. `fotografie`
10. `foarfecă`
11. `fântână`
12. `focă`
13. `afine`
14. `bufniță`
15. `cartof`

Batch 95 does not add placeholders, clinical claims, database/auth/billing scope, admin editing, route/schema changes, or loader changes.

## Promoted Assets

| Word | Asset | Size |
| --- | --- | ---: |
| `șuviță` | `public/images/ro/ș/ro-sh-suvita.webp` | `8,796` bytes |
| `movilă` | `public/images/ro/m/ro-m-movila.webp` | `10,708` bytes |
| `servietă` | `public/images/ro/s/ro-s-servieta.webp` | `10,026` bytes |
| `farfurie` | `public/images/ro/f/ro-f-farfurie.webp` | `10,622` bytes |
| `fereastră` | `public/images/ro/f/ro-f-fereastra.webp` | `7,098` bytes |
| `făină` | `public/images/ro/f/ro-f-faina.webp` | `10,158` bytes |
| `fermă` | `public/images/ro/f/ro-f-ferma.webp` | `8,588` bytes |
| `frate` | `public/images/ro/f/ro-f-frate.webp` | `10,606` bytes |
| `fotografie` | `public/images/ro/f/ro-f-fotografie.webp` | `9,956` bytes |
| `foarfecă` | `public/images/ro/f/ro-f-foarfeca.webp` | `7,164` bytes |
| `fântână` | `public/images/ro/f/ro-f-fantana.webp` | `8,886` bytes |
| `focă` | `public/images/ro/f/ro-f-foca.webp` | `11,188` bytes |
| `afine` | `public/images/ro/a/ro-a-afine.webp` | `10,756` bytes |
| `bufniță` | `public/images/ro/b/ro-b-bufnita.webp` | `7,960` bytes |
| `cartof` | `public/images/ro/c/ro-c-cartof.webp` | `10,300` bytes |

All Batch 95 promoted assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

## Content Changes

Added the `15` approved rows to:

- `content/ro/words-a.json`
- `content/ro/words-b.json`
- `content/ro/words-c.json`
- `content/ro/words-f.json`
- `content/ro/words-m.json`
- `content/ro/words-s.json`
- `content/ro/words-ș.json`

Updated `/admin/releases/2` dirty-tree review list:

- added all `15` new Batch 95 word IDs;
- Release 2 now lists `184` dirty-tree additions for QA.

Updated content-derived test fixtures:

- `src/content/matching.check.ts`: `F` starts-with excluding exact `R` now has `10` words.
- `src/game/gameplay-compatibility.check.ts`: setup-mode, all-words availability, and resolved invalid-custom setup checks for `F` excluding exact `R` now expect `10` words.

## Content Totals

Post-Batch-95 Romanian content totals:

- Total Romanian records: `554`
- Approved words: `551`
- Ready images: `551`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

Affected coverage after Batch 95:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `Ș` | 19 | 32 | 51 |
| `M` | 27 | 59 | 86 |
| `S` | 26 | 42 | 68 |
| `F` | 27 | 18 | 45 |
| `A` | 19 | 239 | 258 |
| `B` | 37 | 37 | 74 |
| `C` | 71 | 97 | 168 |
| `U` | 11 | 132 | 143 |
| `V` | 26 | 24 | 50 |
| `I` | 9 | 216 | 225 |
| `E` | 9 | 230 | 239 |
| `Ă` | 0 | 224 | 224 |
| `R` | 22 | 205 | 227 |
| `T` | 18 | 131 | 149 |
| `N` | 6 | 157 | 163 |
| `O` | 9 | 137 | 146 |
| `G` | 44 | 47 | 91 |

Sequence coverage remains unchanged after Batch 95:

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

Passed on 2026-06-28 with bundled Node and `pnpm` on `PATH`:

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

`pnpm run validate:content` passed with pre-existing warning-threshold notices for older image assets. No Batch 95 image is above the `12 KB` warning threshold.

Localhost verification is recorded in `slice-coverage-qa-batch-96.md`.
