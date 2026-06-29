# Batch 104 Slice Coverage QA: Slice 7 T/L Top-Up

Batch: Romanian Content Expansion Batch 104.

Status: QA-only coverage and next-prompt preparation after Batch 103; no production content changed.

Last updated: 2026-06-29.

## Scope Guard

Batch 104 verifies the Batch 103 Slice 7 production promotion and prepares the next content-expansion prompt. It does not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes, change schema, change loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

## Batch 103 Promotion Check

Batch 103 promoted exactly the `15` active Batch 101 / Batch 102 Slice 7 rows, preserving the Batch 76 order:

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

Repository recomputation found no missing Batch 103 IDs and no unexpected status/image-status values for those rows. Every Batch 103 row is `status: "approved"` and `imageStatus: "ready"`.

## Current Totals

Recomputed from current `content/ro/words-*.json` manifests:

- Total Romanian records: `584`
- Approved words: `581`
- Ready images: `581`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail records remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

## Image QA

All Batch 103 images exist at their canonical paths, are `256 x 256 px`, are below the `20 KB` hard maximum, and are below the `12 KB` warning threshold.

Circular-mask preview inspected:

- `assets/image-sources/ro/batch-102/optimized-circular-preview.png`

The preview remains acceptable after local padding corrections. Important subject pixels stay inside the circular mask for `tuș`, `trotinetă`, `turn`, `tricicletă`, `libelulă`, and `lift`. The preview still reads as the accepted concepts and preserves the documented safety constraints for `tuș`, `trusă`, `tub`, `telecomandă`, and `lift`.

## Release 2 QA

`/admin/releases/2` release data includes all `15` new Batch 103 IDs and now has `214` dirty-tree additions.

Verified Batch 103 IDs in the Release 2 list:

```txt
ro-t-tus
ro-t-trotineta
ro-t-trusa
ro-t-tub
ro-t-turn
ro-t-tunel
ro-t-taitei
ro-t-tufis
ro-t-telecomanda
ro-t-termos
ro-t-tricicleta
ro-l-lemn
ro-l-lacat
ro-l-libelula
ro-l-lift
```

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
http://localhost:3000/ro/play/t
http://localhost:3000/ro/play/l
http://localhost:3000/images/ro/t/ro-t-tus.webp
http://localhost:3000/images/ro/t/ro-t-telecomanda.webp
http://localhost:3000/images/ro/t/ro-t-tricicleta.webp
http://localhost:3000/images/ro/l/ro-l-libelula.webp
http://localhost:3000/images/ro/l/ro-l-lift.webp
```

## Next Recommended Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 105.

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
docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-104.md

Task: Batch 105 production-slice planning for Slice 8 only.

Plan these Slice 8 candidates from slice-plan-index-batch-76.md, preserving order:
leopard, lână, lan, lampion, ramă, râmă, rândunică, rechin, riglă, rulotă, ruladă, radio, romb, stea, saltea.

Constraints:
- Planning-only batch. Do not add production JSON, content manifests, image assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Use only Batch 75 non-hold accepted candidates.
- Re-run source/spelling, child-fit, safety, imageability, duplicate, normalized-collision, and planned ID/path checks before keeping any row active.
- Pay special attention to Slice 8 risks from slice-plan-index-batch-76.md: `ramă` and `râmă` cannot both be promoted as ordinary rows under the current normalized/ID rules; `rechin` must avoid frightening framing; `romb` is shape-only and may be less object-like than preferred; `radio` must avoid visible text or brand marks.
- If a row fails source/safety/duplicate/child-fit/imageability checks, mark it blocked and ask only for critical exceptions instead of silently promoting or replacing it.
- Record planned canonical file, stable ID, image path, normalized form, category, part of speech, difficulty, age band, alt-text direction, speech-target value, expected coverage impact, route/validation impact, and image-brief risks.
- Do not make production decisions that require current facts without doing source research and recording sources.

After writing the planning document, update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md, run git diff --check, and report changed files plus verification results.
```
