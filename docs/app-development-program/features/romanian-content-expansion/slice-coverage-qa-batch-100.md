# Batch 100 Slice Coverage QA: Slice 6 C/Ș Top-Up

Batch: Romanian Content Expansion Batch 100.

Status: QA-only coverage and next-prompt preparation after Batch 99; no production content changed.

Last updated: 2026-06-28.

## Scope Guard

Batch 100 verifies the Batch 99 Slice 6 production promotion and prepares the next content-expansion prompt. It does not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes, change schema, change loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

## Batch 99 Promotion Check

Batch 99 promoted exactly the `15` active Batch 97 / Batch 98 Slice 6 rows, preserving the Batch 76 order:

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

Repository recomputation found no missing Batch 99 IDs and no unexpected status/image-status values for those rows. Every Batch 99 row is `status: "approved"` and `imageStatus: "ready"`.

## Image QA

All Batch 99 images exist at their canonical paths, are `256 x 256 px`, are below the `20 KB` hard maximum, and are below the `12 KB` warning threshold.

| Word | Canonical asset | Dimensions | Size |
| --- | --- | --- | ---: |
| `coif` | `public/images/ro/c/ro-c-coif.webp` | `256 x 256` | `1,518` bytes |
| `ceafă` | `public/images/ro/c/ro-c-ceafa.webp` | `256 x 256` | `1,992` bytes |
| `puf` | `public/images/ro/p/ro-p-puf.webp` | `256 x 256` | `3,818` bytes |
| `șifonier` | `public/images/ro/ș/ro-sh-sifonier.webp` | `256 x 256` | `1,906` bytes |
| `cufăr` | `public/images/ro/c/ro-c-cufar.webp` | `256 x 256` | `2,148` bytes |
| `trifoi` | `public/images/ro/t/ro-t-trifoi.webp` | `256 x 256` | `3,398` bytes |
| `șuncă` | `public/images/ro/ș/ro-sh-sunca.webp` | `256 x 256` | `2,420` bytes |
| `șnițel` | `public/images/ro/ș/ro-sh-snitel.webp` | `256 x 256` | `3,246` bytes |
| `șalupă` | `public/images/ro/ș/ro-sh-salupa.webp` | `256 x 256` | `1,998` bytes |
| `șah` | `public/images/ro/ș/ro-sh-sah.webp` | `256 x 256` | `1,612` bytes |
| `șevalet` | `public/images/ro/ș/ro-sh-sevalet.webp` | `256 x 256` | `1,606` bytes |
| `șofer` | `public/images/ro/ș/ro-sh-sofer.webp` | `256 x 256` | `2,144` bytes |
| `șotron` | `public/images/ro/ș/ro-sh-sotron.webp` | `256 x 256` | `2,830` bytes |
| `brioșă` | `public/images/ro/b/ro-b-briosa.webp` | `256 x 256` | `2,898` bytes |
| `coșuleț` | `public/images/ro/c/ro-c-cosulet.webp` | `256 x 256` | `3,478` bytes |

Circular-mask preview inspected:

- `assets/image-sources/ro/batch-98/optimized-circular-preview.png`

The preview remains acceptable after local padding corrections. Important subject pixels stay inside the circular mask for the edge-heavy cells `coif`, `șifonier`, `cufăr`, `șah`, `șevalet`, `șofer`, and `coșuleț`. The preview still reads as the accepted concepts and preserves the documented safety constraints for `ceafă`, `puf`, `șuncă`, `șalupă`, `șah`, `șofer`, `șotron`, and `coșuleț`.

## Current Totals

Recomputed from current `content/ro/words-*.json` manifests:

- Total Romanian records: `569`
- Approved words: `566`
- Ready images: `566`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail records remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

## Coverage

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

Sequence coverage:

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

## Release 2 QA

`/admin/releases/2` release data includes all `15` new Batch 99 IDs and now has `199` dirty-tree additions.

Verified Batch 99 IDs in the Release 2 list:

```txt
ro-c-coif
ro-c-ceafa
ro-p-puf
ro-sh-sifonier
ro-c-cufar
ro-t-trifoi
ro-sh-sunca
ro-sh-snitel
ro-sh-salupa
ro-sh-sah
ro-sh-sevalet
ro-sh-sofer
ro-sh-sotron
ro-b-briosa
ro-c-cosulet
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

`pnpm run validate:content` passed with pre-existing warning-threshold notices for older image assets. No Batch 99 image is above the `12 KB` warning threshold.

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
http://localhost:3000/ro/play/c
http://localhost:3000/ro/play/p
http://localhost:3000/ro/play/sh
http://localhost:3000/ro/play/t
http://localhost:3000/ro/play/b
http://localhost:3000/images/ro/c/ro-c-coif.webp
http://localhost:3000/images/ro/c/ro-c-ceafa.webp
http://localhost:3000/images/ro/p/ro-p-puf.webp
http://localhost:3000/images/ro/ș/ro-sh-sah.webp
http://localhost:3000/images/ro/ș/ro-sh-sofer.webp
http://localhost:3000/images/ro/c/ro-c-cosulet.webp
```

## Next Recommended Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 101.

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
docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-100.md

Task: Batch 101 production-slice planning for Slice 7 only.

Plan these Slice 7 candidates from slice-plan-index-batch-76.md, preserving order:
tuș, trotinetă, trusă, tub, turn, tunel, tăiței, tufiș, telecomandă, termos, tricicletă, lemn, lacăt, libelulă, lift.

Constraints:
- Planning-only batch. Do not add production JSON, content manifests, image assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Use only Batch 75 non-hold accepted candidates.
- Re-run source/spelling, child-fit, safety, imageability, duplicate, normalized-collision, and planned ID/path checks before keeping any row active.
- Pay special attention to Slice 7 risks from slice-plan-index-batch-76.md: `trusă` and `tub` need fixed senses before image generation; `tuș` may be hard to identify without text; `telecomandă` must not show brand marks or readable button text.
- If a row fails source/safety/duplicate/child-fit/imageability checks, mark it blocked and ask only for critical exceptions instead of silently promoting or replacing it.
- Record planned canonical file, stable ID, image path, normalized form, category, part of speech, difficulty, age band, alt-text direction, speech-target value, expected coverage impact, route/validation impact, and image-brief risks.
- Do not make production decisions that require current facts without doing source research and recording sources.

After writing the planning document, update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md, run git diff --check, and report changed files plus verification results.
```
