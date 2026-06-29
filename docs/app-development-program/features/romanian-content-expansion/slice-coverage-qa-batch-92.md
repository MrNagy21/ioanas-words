# Batch 92 Slice Coverage QA: Slice 4 D/V Top-Up

Batch: Romanian Content Expansion Batch 92.

Status: QA-only coverage and next-prompt preparation after Batch 91; no production content changed.

Last updated: 2026-06-28.

## Scope Guard

Batch 92 verifies the Batch 91 Slice 4 production promotion and prepares the next content-expansion prompt. It does not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes, change schema, change loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

## Batch 91 Promotion Check

Batch 91 promoted exactly the `15` active Batch 89 / Batch 90 Slice 4 rows, preserving the Batch 76 order:

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

Repository recomputation found no missing Batch 91 IDs and no unexpected status/image-status values for those rows. Every Batch 91 row is `status: "approved"` and `imageStatus: "ready"`.

## Image QA

All Batch 91 images exist at their canonical paths, are `256 x 256 px`, are below the `20 KB` hard maximum, and are below the `12 KB` warning threshold.

| Word | Canonical asset | Dimensions | Size |
| --- | --- | --- | ---: |
| `disc` | `public/images/ro/d/ro-d-disc.webp` | `256 x 256` | `10,704` bytes |
| `diamant` | `public/images/ro/d/ro-d-diamant.webp` | `256 x 256` | `10,244` bytes |
| `dungă` | `public/images/ro/d/ro-d-dunga.webp` | `256 x 256` | `10,964` bytes |
| `dronă` | `public/images/ro/d/ro-d-drona.webp` | `256 x 256` | `11,318` bytes |
| `valiză` | `public/images/ro/v/ro-v-valiza.webp` | `256 x 256` | `8,272` bytes |
| `vrabie` | `public/images/ro/v/ro-v-vrabie.webp` | `256 x 256` | `10,546` bytes |
| `vulcan` | `public/images/ro/v/ro-v-vulcan.webp` | `256 x 256` | `10,522` bytes |
| `val` | `public/images/ro/v/ro-v-val.webp` | `256 x 256` | `11,250` bytes |
| `vâslă` | `public/images/ro/v/ro-v-vasla.webp` | `256 x 256` | `10,462` bytes |
| `velier` | `public/images/ro/v/ro-v-velier.webp` | `256 x 256` | `9,882` bytes |
| `violetă` | `public/images/ro/v/ro-v-violeta.webp` | `256 x 256` | `10,584` bytes |
| `vultur` | `public/images/ro/v/ro-v-vultur.webp` | `256 x 256` | `7,352` bytes |
| `ventuză` | `public/images/ro/v/ro-v-ventuza.webp` | `256 x 256` | `10,600` bytes |
| `evantai` | `public/images/ro/e/ro-e-evantai.webp` | `256 x 256` | `10,802` bytes |
| `navă` | `public/images/ro/n/ro-n-nava.webp` | `256 x 256` | `9,486` bytes |

Circular-mask preview inspected:

- `assets/image-sources/ro/batch-90/optimized-circular-preview.png`

The preview remains acceptable after local padding corrections. Important subject pixels stay inside the circular mask for the long or edge-heavy cells `valiză`, `vâslă`, `velier`, `vultur`, `evantai`, and `navă`. The preview still reads as the accepted concepts: toy disc for `disc`, concrete scarf stripe for `dungă`, friendly non-surveillance quadcopter for `dronă`, calm non-disaster volcano for `vulcan`, single wave for `val`, household suction cup/hook for `ventuză`, and large generic ship for `navă`.

## Current Totals

Recomputed from current `content/ro/words-*.json` manifests:

- Total Romanian records: `539`
- Approved words: `536`
- Ready images: `536`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail records remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

## Coverage

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

`/admin/releases/2` release data includes all `15` new Batch 91 IDs and now has `169` dirty-tree additions.

Verified Batch 91 IDs in the Release 2 list:

```txt
ro-d-disc
ro-d-diamant
ro-d-dunga
ro-d-drona
ro-v-valiza
ro-v-vrabie
ro-v-vulcan
ro-v-val
ro-v-vasla
ro-v-velier
ro-v-violeta
ro-v-vultur
ro-v-ventuza
ro-e-evantai
ro-n-nava
```

## Verification

Passed on 2026-06-28 with bundled `pnpm` and bundled Node on `PATH`:

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

`pnpm run validate:content` passed with pre-existing warning-threshold notices for older image assets. No Batch 91 image is above the `12 KB` warning threshold.

`pnpm run build` passed with Next.js `16.2.6` and generated the expected static routes, including `/ro`, `/admin/words`, `/admin/releases/2`, and Romanian play/setup paths.

Localhost route QA:

- Sandboxed checks against `http://localhost:3000` failed with `EPERM` for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/d`, `/ro/play/v`, `/ro/play/e`, `/ro/play/n`, and representative new image URLs.
- The required outside-sandbox retry passed after the user started the expected dev server on port `3000`; all checked routes and assets returned `200 OK`.
- No alternate dev server or port was started.

Representative image URLs attempted:

```txt
http://localhost:3000/images/ro/d/ro-d-disc.webp
http://localhost:3000/images/ro/v/ro-v-vasla.webp
http://localhost:3000/images/ro/v/ro-v-vultur.webp
http://localhost:3000/images/ro/n/ro-n-nava.webp
```

## Next Recommended Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 93.

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
docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-92.md

Task: Batch 93 production-slice planning for Slice 5 only.

Plan these Slice 5 candidates from slice-plan-index-batch-76.md, preserving order:
șuviță, movilă, servietă, farfurie, fereastră, făină, fermă, frate, fotografie, foarfecă, fântână, focă, afine, bufniță, cartof.

Constraints:
- Planning-only batch. Do not add production JSON, content manifests, image assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Use only Batch 75 non-hold accepted candidates.
- Re-run source/spelling, child-fit, safety, imageability, duplicate, normalized-collision, and planned ID/path checks before keeping any row active.
- Pay special attention to Slice 5 risks from slice-plan-index-batch-76.md: `șuviță`, `movilă`, `servietă`, `frate`, `fotografie`, and `fântână` need strict imageability/sense checks; `frate` is a person row and needs style consistency review; `servietă` must not skew too adult-office if accepted.
- If a row fails source/safety/duplicate/child-fit/imageability checks, mark it blocked and ask only for critical exceptions instead of silently promoting or replacing it.
- Record planned canonical file, stable ID, image path, normalized form, category, part of speech, difficulty, age band, alt-text direction, speech-target value, expected coverage impact, route/validation impact, and image-brief risks.
- Do not make production decisions that require current facts without doing source research and recording sources.

After writing the planning document, update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md, run git diff --check, and report changed files plus verification results.
```
