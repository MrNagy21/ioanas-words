# Batch 96 Slice Coverage QA: Slice 5 F/Ș Top-Up

Batch: Romanian Content Expansion Batch 96.

Status: QA-only coverage and next-prompt preparation after Batch 95; no production content changed.

Last updated: 2026-06-28.

## Scope Guard

Batch 96 verifies the Batch 95 Slice 5 production promotion and prepares the next content-expansion prompt. It does not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes, change schema, change loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

## Batch 95 Promotion Check

Batch 95 promoted exactly the `15` active Batch 93 / Batch 94 Slice 5 rows, preserving the Batch 76 order:

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

Repository recomputation found no missing Batch 95 IDs and no unexpected status/image-status values for those rows. Every Batch 95 row is `status: "approved"` and `imageStatus: "ready"`.

## Image QA

All Batch 95 images exist at their canonical paths, are `256 x 256 px`, are below the `20 KB` hard maximum, and are below the `12 KB` warning threshold.

| Word | Canonical asset | Dimensions | Size |
| --- | --- | --- | ---: |
| `șuviță` | `public/images/ro/ș/ro-sh-suvita.webp` | `256 x 256` | `8,796` bytes |
| `movilă` | `public/images/ro/m/ro-m-movila.webp` | `256 x 256` | `10,708` bytes |
| `servietă` | `public/images/ro/s/ro-s-servieta.webp` | `256 x 256` | `10,026` bytes |
| `farfurie` | `public/images/ro/f/ro-f-farfurie.webp` | `256 x 256` | `10,622` bytes |
| `fereastră` | `public/images/ro/f/ro-f-fereastra.webp` | `256 x 256` | `7,098` bytes |
| `făină` | `public/images/ro/f/ro-f-faina.webp` | `256 x 256` | `10,158` bytes |
| `fermă` | `public/images/ro/f/ro-f-ferma.webp` | `256 x 256` | `8,588` bytes |
| `frate` | `public/images/ro/f/ro-f-frate.webp` | `256 x 256` | `10,606` bytes |
| `fotografie` | `public/images/ro/f/ro-f-fotografie.webp` | `256 x 256` | `9,956` bytes |
| `foarfecă` | `public/images/ro/f/ro-f-foarfeca.webp` | `256 x 256` | `7,164` bytes |
| `fântână` | `public/images/ro/f/ro-f-fantana.webp` | `256 x 256` | `8,886` bytes |
| `focă` | `public/images/ro/f/ro-f-foca.webp` | `256 x 256` | `11,188` bytes |
| `afine` | `public/images/ro/a/ro-a-afine.webp` | `256 x 256` | `10,756` bytes |
| `bufniță` | `public/images/ro/b/ro-b-bufnita.webp` | `256 x 256` | `7,960` bytes |
| `cartof` | `public/images/ro/c/ro-c-cartof.webp` | `256 x 256` | `10,300` bytes |

Circular-mask preview inspected:

- `assets/image-sources/ro/batch-94/optimized-circular-preview.png`

The preview remains acceptable after local padding corrections. Important subject pixels stay inside the circular mask for `șuviță`, `fereastră`, `fermă`, `foarfecă`, `fântână`, and `bufniță`. The preview still reads as the accepted concepts: hair lock with context for `șuviță`, school satchel for `servietă`, bowl of flour for `făină`, child-safe scissors for `foarfecă`, safe fountain/well cue for `fântână`, friendly seal for `focă`, blueberries for `afine`, owl for `bufniță`, and potato for `cartof`.

## Current Totals

Recomputed from current `content/ro/words-*.json` manifests:

- Total Romanian records: `554`
- Approved words: `551`
- Ready images: `551`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail records remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

## Coverage

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

Sequence coverage remains:

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

## Release 2 QA

`/admin/releases/2` release data includes all `15` new Batch 95 IDs and now has `184` dirty-tree additions.

Verified Batch 95 IDs in the Release 2 list:

```txt
ro-sh-suvita
ro-m-movila
ro-s-servieta
ro-f-farfurie
ro-f-fereastra
ro-f-faina
ro-f-ferma
ro-f-frate
ro-f-fotografie
ro-f-foarfeca
ro-f-fantana
ro-f-foca
ro-a-afine
ro-b-bufnita
ro-c-cartof
```

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

`pnpm run build` passed with Next.js `16.2.6` and generated `83` static pages, including `/ro`, `/admin/words`, `/admin/releases/2`, and Romanian play/setup paths.

Localhost route QA:

- Sandboxed checks against `http://localhost:3000` failed with `EPERM` for `/ro`, `/admin/words`, `/admin/releases/2`, affected play routes, and representative new image URLs.
- The required outside-sandbox retry passed against the user-running dev server on port `3000`; all checked routes and assets returned `200 OK`.
- No alternate dev server or port was started.

Representative routes and image URLs checked:

```txt
http://localhost:3000/ro
http://localhost:3000/admin/words
http://localhost:3000/admin/releases/2
http://localhost:3000/ro/play/sh
http://localhost:3000/ro/play/m
http://localhost:3000/ro/play/s
http://localhost:3000/ro/play/f
http://localhost:3000/ro/play/a
http://localhost:3000/ro/play/b
http://localhost:3000/ro/play/c
http://localhost:3000/images/ro/ș/ro-sh-suvita.webp
http://localhost:3000/images/ro/f/ro-f-foarfeca.webp
http://localhost:3000/images/ro/f/ro-f-fantana.webp
http://localhost:3000/images/ro/b/ro-b-bufnita.webp
```

## Next Recommended Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 97.

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
docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-96.md

Task: Batch 97 production-slice planning for Slice 6 only.

Plan these Slice 6 candidates from slice-plan-index-batch-76.md, preserving order:
coif, ceafă, puf, șifonier, cufăr, trifoi, șuncă, șnițel, șalupă, șah, șevalet, șofer, șotron, brioșă, coșuleț.

Constraints:
- Planning-only batch. Do not add production JSON, content manifests, image assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Use only Batch 75 non-hold accepted candidates.
- Re-run source/spelling, child-fit, safety, imageability, duplicate, normalized-collision, and planned ID/path checks before keeping any row active.
- Pay special attention to Slice 6 risks from slice-plan-index-batch-76.md: `ceafă`, `puf`, and `coșuleț` are visually hard or near-neighbor rows; `șuncă` may overlap with `jambon`; `șofer` and `șotron` need person/scene thumbnail review; `șah` must avoid letters/numbers on the board.
- If a row fails source/safety/duplicate/child-fit/imageability checks, mark it blocked and ask only for critical exceptions instead of silently promoting or replacing it.
- Record planned canonical file, stable ID, image path, normalized form, category, part of speech, difficulty, age band, alt-text direction, speech-target value, expected coverage impact, route/validation impact, and image-brief risks.
- Do not make production decisions that require current facts without doing source research and recording sources.

After writing the planning document, update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md, run git diff --check, and report changed files plus verification results.
```
