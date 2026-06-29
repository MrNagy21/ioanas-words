# Romanian Content Expansion Batch 107 Production Promotion

Date: 2026-06-29

## Scope

Batch 107 promotes all `15` Slice 8 candidates after the Batch 106 identity decision and image QA.

Promoted words:

1. `leopard`
2. `lână`
3. `lan`
4. `lampion`
5. `ramă`
6. `râmă`
7. `rândunică`
8. `rechin`
9. `riglă`
10. `rulotă`
11. `ruladă`
12. `radio`
13. `romb`
14. `stea`
15. `saltea`

Batch 107 does not add placeholders, clinical claims, database/auth/billing scope, admin editing, loader changes, route changes, or AI pronunciation.

## Content Changes

Added the `15` approved rows to:

- `content/ro/words-l.json`
- `content/ro/words-r.json`
- `content/ro/words-s.json`

Updated `/admin/releases/3` dirty-tree review list after confirming Release 2 was already committed:

- added all `15` Batch 107 word IDs;
- Release 2 remains the committed frozen content release with `109` IDs;
- Release 3 now lists `120` dirty-tree additions for QA.

Updated content-derived checks:

- `scripts/content/validate-content.mjs`: added a narrow Romanian duplicate-normalized allowlist for `ramă` / `râmă` only.
- `src/game/gameplay-compatibility.check.ts`: `CHI` practice-target mixed coverage now expects `17` because `rechin` adds one contains-only `CHI` row.

## Promoted Assets

| Word | Asset | Size |
| --- | --- | ---: |
| `leopard` | `public/images/ro/l/ro-l-leopard.webp` | `2,216` bytes |
| `lână` | `public/images/ro/l/ro-l-lana.webp` | `2,584` bytes |
| `lan` | `public/images/ro/l/ro-l-lan.webp` | `2,878` bytes |
| `lampion` | `public/images/ro/l/ro-l-lampion.webp` | `2,440` bytes |
| `ramă` | `public/images/ro/r/ro-r-rama-cadru.webp` | `1,888` bytes |
| `râmă` | `public/images/ro/r/ro-r-rama-vierme.webp` | `2,028` bytes |
| `rândunică` | `public/images/ro/r/ro-r-randunica.webp` | `1,294` bytes |
| `rechin` | `public/images/ro/r/ro-r-rechin.webp` | `1,844` bytes |
| `riglă` | `public/images/ro/r/ro-r-rigla.webp` | `1,902` bytes |
| `rulotă` | `public/images/ro/r/ro-r-rulota.webp` | `1,596` bytes |
| `ruladă` | `public/images/ro/r/ro-r-rulada.webp` | `2,294` bytes |
| `radio` | `public/images/ro/r/ro-r-radio.webp` | `1,754` bytes |
| `romb` | `public/images/ro/r/ro-r-romb.webp` | `2,866` bytes |
| `stea` | `public/images/ro/s/ro-s-stea.webp` | `1,688` bytes |
| `saltea` | `public/images/ro/s/ro-s-saltea.webp` | `2,048` bytes |

All Batch 107 promoted assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum.

Follow-up image-style audit: after Batch 108, a release-wide contact-sheet review found the first Slice 8 assets were semantically correct and circle-safe but too smooth/CGI-like for the locked pixel-art pack direction. The `15` Slice 8 assets were regenerated as pixel-art icons, processed through a `128 px` / `96`-color nearest-neighbor workflow, padded where needed for circular display, and revalidated. After the Release 3 split, the regenerated assets are part of the `/admin/releases/3` QA package.

## Content Totals

Post-Batch-107 Romanian content totals:

- Total Romanian records: `599`
- Approved words: `596`
- Ready images: `596`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

Affected coverage after Batch 107:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `L` | 30 | 127 | 157 |
| `R` | 31 | 217 | 248 |
| `S` | 28 | 44 | 72 |
| `A` | 19 | 253 | 272 |
| `E` | 9 | 248 | 257 |
| `N` | 6 | 171 | 177 |
| `Ă` | 0 | 243 | 243 |
| `I` | 9 | 232 | 241 |
| `T` | 30 | 138 | 168 |
| `O` | 9 | 152 | 161 |
| `D` | 25 | 35 | 60 |
| `M` | 27 | 66 | 93 |
| `C` | 75 | 103 | 178 |
| `U` | 11 | 147 | 158 |
| `P` | 45 | 51 | 96 |
| `B` | 38 | 40 | 78 |
| `H` | 24 | 66 | 90 |
| `G` | 44 | 48 | 92 |
| `Â` | 0 | 20 | 20 |

Sequence coverage after Batch 107:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `CE` | 15 | 5 | 20 |
| `CI` | 9 | 12 | 21 |
| `GE` | 9 | 8 | 17 |
| `GI` | 7 | 9 | 16 |
| `CHE` | 2 | 15 | 17 |
| `CHI` | 8 | 9 | 17 |
| `GHE` | 12 | 4 | 16 |
| `GHI` | 8 | 7 | 15 |

## Verification Handoff

Batch 108 records full validation, build, and localhost route QA.
