# Batch 84 Slice Coverage QA: After Batch 83

Date: 2026-06-24

Status: QA and next-prompt preparation complete; no production content changed.

## Scope

Batch 84 verifies the Batch 83 Slice 2 `H` / `J` / `Ț` production promotion and prepares the next content-expansion prompt.

This batch does not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes/schema/loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

## Batch 83 Promotion Check

Batch 83 promoted exactly the `15` human-approved Batch 82 Slice 2 rows into their canonical manifests, with one row per approved ID and no missing or duplicate Batch 83 IDs:

1. `ro-h-hamsie` / `hamsie`
2. `ro-h-hiena` / `hienă`
3. `ro-h-homar` / `homar`
4. `ro-h-ham` / `ham`
5. `ro-h-hanorac` / `hanorac`
6. `ro-h-hidrant` / `hidrant`
7. `ro-j-jurnal` / `jurnal`
8. `ro-j-jalon` / `jalon`
9. `ro-j-jambon` / `jambon`
10. `ro-j-joystick` / `joystick`
11. `ro-j-jerseu` / `jerseu`
12. `ro-tz-tinta` / `țintă`
13. `ro-tz-tinuta` / `ținută`
14. `ro-tz-tesatura` / `țesătură`
15. `ro-tz-tasnitoare` / `țâșnitoare`

Canonical manifest placement:

- `content/ro/words-h.json`: `hamsie`, `hienă`, `homar`, `ham`, `hanorac`, `hidrant`
- `content/ro/words-j.json`: `jurnal`, `jalon`, `jambon`, `joystick`, `jerseu`
- `content/ro/words-ț.json`: `țintă`, `ținută`, `țesătură`, `țâșnitoare`

`/admin/releases/2` includes all `15` Batch 83 IDs and now lists `139` dirty-tree additions.

## Image QA

All Batch 83 images exist at canonical paths, are WebP files, are exactly `256 x 256 px`, are below the `20 KB` hard maximum, and are below the `12 KB` warning threshold.

| ID | Path | Dimensions | Size |
| --- | --- | --- | ---: |
| `ro-h-hamsie` | `public/images/ro/h/ro-h-hamsie.webp` | `256 x 256` | `2,576 B` |
| `ro-h-hiena` | `public/images/ro/h/ro-h-hiena.webp` | `256 x 256` | `2,426 B` |
| `ro-h-homar` | `public/images/ro/h/ro-h-homar.webp` | `256 x 256` | `2,680 B` |
| `ro-h-ham` | `public/images/ro/h/ro-h-ham.webp` | `256 x 256` | `2,046 B` |
| `ro-h-hanorac` | `public/images/ro/h/ro-h-hanorac.webp` | `256 x 256` | `2,334 B` |
| `ro-h-hidrant` | `public/images/ro/h/ro-h-hidrant.webp` | `256 x 256` | `2,262 B` |
| `ro-j-jurnal` | `public/images/ro/j/ro-j-jurnal.webp` | `256 x 256` | `1,458 B` |
| `ro-j-jalon` | `public/images/ro/j/ro-j-jalon.webp` | `256 x 256` | `2,634 B` |
| `ro-j-jambon` | `public/images/ro/j/ro-j-jambon.webp` | `256 x 256` | `2,380 B` |
| `ro-j-joystick` | `public/images/ro/j/ro-j-joystick.webp` | `256 x 256` | `1,540 B` |
| `ro-j-jerseu` | `public/images/ro/j/ro-j-jerseu.webp` | `256 x 256` | `2,068 B` |
| `ro-tz-tinta` | `public/images/ro/ț/ro-tz-tinta.webp` | `256 x 256` | `1,788 B` |
| `ro-tz-tinuta` | `public/images/ro/ț/ro-tz-tinuta.webp` | `256 x 256` | `2,378 B` |
| `ro-tz-tesatura` | `public/images/ro/ț/ro-tz-tesatura.webp` | `256 x 256` | `2,058 B` |
| `ro-tz-tasnitoare` | `public/images/ro/ț/ro-tz-tasnitoare.webp` | `256 x 256` | `1,766 B` |

Visual review of `assets/image-sources/ro/batch-82/optimized-circular-preview.png` remains acceptable. The sensitive cells `ham`, `jambon`, `ținută`, `țesătură`, and `țâșnitoare` keep their meaningful subject pixels inside the circular mask.

Additional visual notes:

- `ham` still reads as a dog harness on a dog, not food.
- `jambon` remains centered and readable as sliced ham on a plate.
- `ținută` remains readable as an outfit, with no important garment parts clipped.
- `țesătură` keeps the fabric swatch inside the circular preview.
- `țâșnitoare` keeps the fountain and water stream inside the circular preview.
- `țintă` remains weapon-free: rings only, with no arrows, darts, impact marks, or weapon cue.
- `joystick` remains generic and unbranded.

## Current Totals

Computed from `content/ro/words-*.json`:

- Total Romanian records: `509`
- Approved words: `506`
- Ready images: `506`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

## Affected Coverage

Computed from approved Romanian words:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `H` | 24 | 64 | 88 |
| `J` | 15 | 11 | 26 |
| `Ț` | 14 | 44 | 58 |
| `S` | 25 | 38 | 63 |
| `Ș` | 18 | 31 | 49 |
| `T` | 18 | 115 | 133 |
| `R` | 22 | 187 | 209 |
| `D` | 15 | 30 | 45 |
| `L` | 22 | 104 | 126 |

## Verification

Passed on 2026-06-24 with the bundled Node runtime and local Bun path on `PATH`:

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

- `pnpm run validate:content` passed with only pre-existing image warning-threshold notices. No Batch 83 image is above the `12 KB` warning threshold.
- The shell did not have system `node` on `PATH`, so verification used the bundled Node and pnpm paths from the Codex workspace runtime.
- Sandboxed localhost QA failed to connect to `http://localhost:3000`; the required outside-sandbox retry returned `200 OK` for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/h`, `/ro/play/j`, `/ro/play/tz`, `/images/ro/h/ro-h-ham.webp`, `/images/ro/j/ro-j-joystick.webp`, and `/images/ro/ț/ro-tz-tasnitoare.webp`.
- No alternate dev server or port was started.

## Next Recommended Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 85.

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
docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-80.md
docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-81.md
docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-82.md
docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-83.md
docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-84.md

Task: Batch 85 production-slice planning for Slice 3 from Batch 76.

Plan only these Slice 3 accepted non-hold candidates:
jet, ambalaj, etaj, bujor, peisaj, majoretă, prăjitor, pajiște, coji, drum, dulceață, dop, dar, drapel, dalmațian.

Do not add production JSON records, generate images, crop cells, optimize public assets, change routes/schema/loaders, add placeholders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

For each candidate, verify source/spelling, duplicate/collision status against current production content, child-fit, safety, imageability, canonical file/ID/image path plan, category, part of speech, difficulty, age band, alt text direction, target coverage impact, and promotion risks. Pay special attention to imageability for `jet`, `ambalaj`, `etaj`, `peisaj`, `majoretă`, `prăjitor`, `pajiște`, and `coji`; weapon/emergency-free framing for `jet`; politics-free framing for `drapel`; friendly dog framing and spelling for `dalmațian`; and clear child-safe image directions for the `D` rows.

Write a planning-only document under docs/app-development-program/features/romanian-content-expansion/ and update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md with the Batch 85 result and the next prompt. Run git diff --check.
```
