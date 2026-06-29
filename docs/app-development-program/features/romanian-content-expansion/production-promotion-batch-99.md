# Romanian Content Expansion Batch 99 Production Promotion

Date: 2026-06-28

## Scope

Batch 99 promotes the Batch 97 / Batch 98 Slice 6 rows into production content.

Promoted words:

1. `coif`
2. `ceafă`
3. `puf`
4. `șifonier`
5. `cufăr`
6. `trifoi`
7. `șuncă`
8. `șnițel`
9. `șalupă`
10. `șah`
11. `șevalet`
12. `șofer`
13. `șotron`
14. `brioșă`
15. `coșuleț`

Batch 99 does not add placeholders, clinical claims, database/auth/billing scope, admin editing, route/schema changes, or loader changes.

## Promoted Assets

| Word | Asset | Size |
| --- | --- | ---: |
| `coif` | `public/images/ro/c/ro-c-coif.webp` | `1,518` bytes |
| `ceafă` | `public/images/ro/c/ro-c-ceafa.webp` | `1,992` bytes |
| `puf` | `public/images/ro/p/ro-p-puf.webp` | `3,818` bytes |
| `șifonier` | `public/images/ro/ș/ro-sh-sifonier.webp` | `1,906` bytes |
| `cufăr` | `public/images/ro/c/ro-c-cufar.webp` | `2,148` bytes |
| `trifoi` | `public/images/ro/t/ro-t-trifoi.webp` | `3,398` bytes |
| `șuncă` | `public/images/ro/ș/ro-sh-sunca.webp` | `2,420` bytes |
| `șnițel` | `public/images/ro/ș/ro-sh-snitel.webp` | `3,246` bytes |
| `șalupă` | `public/images/ro/ș/ro-sh-salupa.webp` | `1,998` bytes |
| `șah` | `public/images/ro/ș/ro-sh-sah.webp` | `1,612` bytes |
| `șevalet` | `public/images/ro/ș/ro-sh-sevalet.webp` | `1,606` bytes |
| `șofer` | `public/images/ro/ș/ro-sh-sofer.webp` | `2,144` bytes |
| `șotron` | `public/images/ro/ș/ro-sh-sotron.webp` | `2,830` bytes |
| `brioșă` | `public/images/ro/b/ro-b-briosa.webp` | `2,898` bytes |
| `coșuleț` | `public/images/ro/c/ro-c-cosulet.webp` | `3,478` bytes |

All Batch 99 promoted assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

## Content Changes

Added the `15` approved rows to:

- `content/ro/words-b.json`
- `content/ro/words-c.json`
- `content/ro/words-p.json`
- `content/ro/words-ș.json`
- `content/ro/words-t.json`

Updated `/admin/releases/2` dirty-tree review list:

- added all `15` new Batch 99 word IDs;
- Release 2 now lists `199` dirty-tree additions for QA.

Updated content-derived test fixtures:

- `src/game/gameplay-compatibility.check.ts`: `CE` practice-target mixed coverage now expects `20` because `ceafă` adds one `CE` starts-with row.

## Content Totals

Post-Batch-99 Romanian content totals:

- Total Romanian records: `569`
- Approved words: `566`
- Ready images: `566`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

Affected coverage after Batch 99:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `C` | 75 | 98 | 173 |
| `P` | 45 | 49 | 94 |
| `Ș` | 27 | 34 | 61 |
| `T` | 19 | 133 | 152 |
| `B` | 38 | 37 | 75 |
| `F` | 27 | 25 | 52 |
| `CE` | 15 | 5 | 20 |
| `U` | 11 | 137 | 148 |
| `R` | 22 | 211 | 233 |
| `I` | 9 | 221 | 230 |
| `O` | 9 | 144 | 153 |
| `Ă` | 0 | 229 | 229 |
| `N` | 6 | 161 | 167 |
| `E` | 9 | 236 | 245 |
| `A` | 19 | 243 | 262 |
| `Ț` | 14 | 50 | 64 |
| `L` | 22 | 120 | 142 |
| `H` | 24 | 65 | 89 |

Sequence coverage after Batch 99:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `CE` | 15 | 5 | 20 |
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

`pnpm run validate:content` passed with pre-existing warning-threshold notices for older image assets. No Batch 99 image is above the `12 KB` warning threshold.

Localhost verification is recorded in `slice-coverage-qa-batch-100.md`.
