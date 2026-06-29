# Romanian Content Expansion Batch 103 Production Promotion

Date: 2026-06-29

## Scope

Batch 103 promotes the Batch 101 / Batch 102 Slice 7 rows into production content.

Promoted words:

1. `tuș`
2. `trotinetă`
3. `trusă`
4. `tub`
5. `turn`
6. `tunel`
7. `tăiței`
8. `tufiș`
9. `telecomandă`
10. `termos`
11. `tricicletă`
12. `lemn`
13. `lacăt`
14. `libelulă`
15. `lift`

Batch 103 does not add placeholders, clinical claims, database/auth/billing scope, admin editing, route/schema changes, or loader changes.

## Content Changes

Added the `15` approved rows to:

- `content/ro/words-t.json`
- `content/ro/words-l.json`

Updated `/admin/releases/2` dirty-tree review list:

- added all `15` new Batch 103 word IDs;
- Release 2 now lists `214` dirty-tree additions for QA.

Updated content-derived test fixtures:

- `src/game/gameplay-compatibility.check.ts`: `CI` practice-target mixed coverage now expects `21` because `tricicletă` adds one contains-only `CI` row.

## Promoted Assets

| Word | Asset | Size |
| --- | --- | ---: |
| `tuș` | `public/images/ro/t/ro-t-tus.webp` | `1,456` bytes |
| `trotinetă` | `public/images/ro/t/ro-t-trotineta.webp` | `2,480` bytes |
| `trusă` | `public/images/ro/t/ro-t-trusa.webp` | `3,274` bytes |
| `tub` | `public/images/ro/t/ro-t-tub.webp` | `3,284` bytes |
| `turn` | `public/images/ro/t/ro-t-turn.webp` | `3,184` bytes |
| `tunel` | `public/images/ro/t/ro-t-tunel.webp` | `2,790` bytes |
| `tăiței` | `public/images/ro/t/ro-t-taitei.webp` | `3,704` bytes |
| `tufiș` | `public/images/ro/t/ro-t-tufis.webp` | `2,486` bytes |
| `telecomandă` | `public/images/ro/t/ro-t-telecomanda.webp` | `3,550` bytes |
| `termos` | `public/images/ro/t/ro-t-termos.webp` | `1,476` bytes |
| `tricicletă` | `public/images/ro/t/ro-t-tricicleta.webp` | `1,698` bytes |
| `lemn` | `public/images/ro/l/ro-l-lemn.webp` | `2,008` bytes |
| `lacăt` | `public/images/ro/l/ro-l-lacat.webp` | `1,680` bytes |
| `libelulă` | `public/images/ro/l/ro-l-libelula.webp` | `2,856` bytes |
| `lift` | `public/images/ro/l/ro-l-lift.webp` | `1,534` bytes |

All Batch 103 promoted assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

## Content Totals

Post-Batch-103 Romanian content totals:

- Total Romanian records: `584`
- Approved words: `581`
- Ready images: `581`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

Affected coverage after Batch 103:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `T` | 30 | 135 | 165 |
| `L` | 26 | 123 | 149 |
| `U` | 11 | 144 | 155 |
| `Ș` | 27 | 36 | 63 |
| `R` | 22 | 216 | 238 |
| `Ă` | 0 | 236 | 236 |
| `I` | 9 | 227 | 236 |
| `E` | 9 | 244 | 253 |
| `N` | 6 | 166 | 172 |
| `C` | 75 | 101 | 176 |
| `A` | 19 | 245 | 264 |
| `F` | 27 | 27 | 54 |
| `M` | 27 | 62 | 89 |
| `D` | 25 | 31 | 56 |
| `B` | 38 | 39 | 77 |
| `O` | 9 | 147 | 156 |
| `S` | 26 | 44 | 70 |
| `Ț` | 14 | 51 | 65 |

Sequence coverage after Batch 103:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `CE` | 15 | 5 | 20 |
| `CI` | 9 | 12 | 21 |
| `GE` | 9 | 8 | 17 |
| `GI` | 7 | 9 | 16 |
| `CHE` | 2 | 15 | 17 |
| `CHI` | 8 | 8 | 16 |
| `GHE` | 12 | 4 | 16 |
| `GHI` | 8 | 7 | 15 |

## Verification

Passed on 2026-06-29 with bundled Node and `pnpm` on `PATH`:

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

`pnpm run validate:content` passed with pre-existing warning-threshold notices for older image assets. No Batch 103 image is above the `12 KB` warning threshold.

Localhost verification is recorded in `slice-coverage-qa-batch-104.md`.
