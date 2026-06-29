# Batch 88 Slice Coverage QA: Slice 3 J/D Top-Up

Batch: Romanian Content Expansion Batch 88.

Status: QA-only coverage and next-prompt preparation after Batch 87; no production content changed.

Last updated: 2026-06-26.

## Scope Guard

Batch 88 verifies the Batch 87 Slice 3 production promotion and prepares the next content-expansion prompt. It does not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes, change schema, change loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

## Batch 87 Promotion Check

Batch 87 promoted exactly the `15` human-approved Batch 86 Slice 3 rows, preserving the Batch 76 and Batch 85 order:

1. `jet`
2. `ambalaj`
3. `etaj`
4. `bujor`
5. `peisaj`
6. `majoretă`
7. `prăjitor`
8. `pajiște`
9. `coji`
10. `drum`
11. `dulceață`
12. `dop`
13. `dar`
14. `drapel`
15. `dalmațian`

Repository recomputation found no missing Batch 87 IDs and no unexpected status/image-status values for those rows. Every Batch 87 row is `status: "approved"` and `imageStatus: "ready"`.

## Image QA

All Batch 87 images exist at their canonical paths, are `256 x 256 px`, are below the `20 KB` hard maximum, and are below the `12 KB` warning threshold.

| Word | Canonical asset | Dimensions | Size |
| --- | --- | --- | ---: |
| `jet` | `public/images/ro/j/ro-j-jet.webp` | `256 x 256` | `1,968` bytes |
| `ambalaj` | `public/images/ro/a/ro-a-ambalaj.webp` | `256 x 256` | `1,884` bytes |
| `etaj` | `public/images/ro/e/ro-e-etaj.webp` | `256 x 256` | `1,874` bytes |
| `bujor` | `public/images/ro/b/ro-b-bujor.webp` | `256 x 256` | `2,744` bytes |
| `peisaj` | `public/images/ro/p/ro-p-peisaj.webp` | `256 x 256` | `1,960` bytes |
| `majoretă` | `public/images/ro/m/ro-m-majoreta.webp` | `256 x 256` | `1,898` bytes |
| `prăjitor` | `public/images/ro/p/ro-p-prajitor.webp` | `256 x 256` | `1,782` bytes |
| `pajiște` | `public/images/ro/p/ro-p-pajiste.webp` | `256 x 256` | `2,860` bytes |
| `coji` | `public/images/ro/c/ro-c-coji.webp` | `256 x 256` | `3,128` bytes |
| `drum` | `public/images/ro/d/ro-d-drum.webp` | `256 x 256` | `2,440` bytes |
| `dulceață` | `public/images/ro/d/ro-d-dulceata.webp` | `256 x 256` | `2,058` bytes |
| `dop` | `public/images/ro/d/ro-d-dop.webp` | `256 x 256` | `1,872` bytes |
| `dar` | `public/images/ro/d/ro-d-dar.webp` | `256 x 256` | `2,714` bytes |
| `drapel` | `public/images/ro/d/ro-d-drapel.webp` | `256 x 256` | `1,606` bytes |
| `dalmațian` | `public/images/ro/d/ro-d-dalmatian.webp` | `256 x 256` | `2,184` bytes |

Circular-mask preview inspected:

- `assets/image-sources/ro/batch-86/optimized-circular-preview.png`

The preview remains acceptable. Important subject pixels stay inside the circular mask for the higher-risk cells `jet`, `ambalaj`, `etaj`, `peisaj`, `majoretă`, `pajiște`, `coji`, `drapel`, and `dalmațian`. The preview still reads as the accepted concepts: water-jet/fountain for `jet`, text-free package for `ambalaj`, highlighted building floor for `etaj`, broad but readable scenes for `peisaj` and `pajiște`, child-safe person/action for `majoretă`, clean fruit peels for `coji`, neutral non-national flag for `drapel`, and generic friendly spotted dog for `dalmațian`.

## Current Totals

Recomputed from current `content/ro/words-*.json` manifests:

- Total Romanian records: `524`
- Approved words: `521`
- Ready images: `521`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail records remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

## Coverage

Affected coverage after Batch 87 remains:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `J` | 16 | 19 | 35 |
| `D` | 21 | 30 | 51 |
| `A` | 18 | 226 | 244 |
| `E` | 8 | 218 | 226 |
| `B` | 36 | 36 | 72 |
| `P` | 44 | 48 | 92 |
| `M` | 26 | 57 | 83 |
| `C` | 70 | 93 | 163 |
| `Ă` | 0 | 207 | 207 |
| `Ș` | 18 | 32 | 50 |
| `Ț` | 14 | 46 | 60 |
| `R` | 22 | 193 | 215 |
| `L` | 22 | 108 | 130 |

Affected sequence coverage after Batch 87 remains:

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

`/admin/releases/2` release data includes all `15` new Batch 87 IDs and now has `154` dirty-tree additions.

Verified Batch 87 IDs in the Release 2 list:

```txt
ro-j-jet
ro-a-ambalaj
ro-e-etaj
ro-b-bujor
ro-p-peisaj
ro-m-majoreta
ro-p-prajitor
ro-p-pajiste
ro-c-coji
ro-d-drum
ro-d-dulceata
ro-d-dop
ro-d-dar
ro-d-drapel
ro-d-dalmatian
```

## Verification

The first `pnpm run validate:content` attempt used the shell `pnpm` while `node` was missing from the shell `PATH` and failed before the validation script ran with `fetch failed`. Verification was rerun with the bundled `pnpm` executable and bundled Node directory on `PATH`.

Passed on 2026-06-26:

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

`pnpm run validate:content` passed with pre-existing warning-threshold notices for older image assets. No Batch 87 image is above the `12 KB` warning threshold.

`pnpm run build` passed with Next.js `16.2.6` and generated the expected static routes, including `/ro`, `/admin/words`, `/admin/releases/2`, and Romanian play/setup paths.

Localhost route QA:

- Sandboxed checks against `http://localhost:3000` failed with `EPERM` for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/j`, `/ro/play/d`, and representative new image URLs.
- The required outside-sandbox retry failed with `ECONNREFUSED` for the same routes and assets, so the expected user-running dev server was not available on port `3000`.
- No alternate dev server or port was started.

Representative image URLs attempted:

```txt
http://localhost:3000/images/ro/j/ro-j-jet.webp
http://localhost:3000/images/ro/a/ro-a-ambalaj.webp
http://localhost:3000/images/ro/d/ro-d-drapel.webp
http://localhost:3000/images/ro/d/ro-d-dalmatian.webp
```

## Next Recommended Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 89.

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
docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-88.md

Task: Batch 89 production-slice planning for Slice 4 only.

Plan these Slice 4 candidates from slice-plan-index-batch-76.md, preserving order:
disc, diamant, dungă, dronă, valiză, vrabie, vulcan, val, vâslă, velier, violetă, vultur, ventuză, evantai, navă.

Constraints:
- Planning-only batch. Do not add production JSON, content manifests, image assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Use only Batch 75 non-hold accepted candidates.
- Re-run source/spelling, child-fit, safety, imageability, duplicate, normalized-collision, and planned ID/path checks before keeping any row active.
- Pay special attention to Slice 4 risks from slice-plan-index-batch-76.md: `disc`, `dungă`, `val`, and `ventuză` require clear sense/image decisions; `dronă` must avoid surveillance or military framing; `vulcan` must avoid disaster/scary framing; `navă` must be distinct enough from existing ship/boat words.
- If a row fails source/safety/duplicate/child-fit/imageability checks, mark it blocked and ask instead of silently promoting or replacing it.
- Record planned canonical file, stable ID, image path, normalized form, category, part of speech, difficulty, age band, alt-text direction, speech-target value, expected coverage impact, route/validation impact, and image-brief risks.
- Do not make production decisions that require current facts without doing source research and recording sources.

After writing the planning document, update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md, run git diff --check, and report changed files plus verification results.
```
