# Batch 108 Slice Coverage QA: Slice 8 L/R/S Top-Up

Batch: Romanian Content Expansion Batch 108.

Status: QA-only coverage and next-prompt preparation after Batch 107; no production content changed.

Last updated: 2026-06-29.

## Scope Guard

Batch 108 verifies the Batch 107 Slice 8 production promotion. It does not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes, change schema, change loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

## Batch 107 Promotion Check

Batch 107 promoted exactly the `15` Slice 8 rows, preserving the Batch 76 order:

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

Repository recomputation found no missing Batch 107 IDs and no unexpected status/image-status values for those rows. Every Batch 107 row is `status: "approved"` and `imageStatus: "ready"`.

## Current Totals

Recomputed from current `content/ro/words-*.json` manifests:

- Total Romanian records: `599`
- Approved words: `596`
- Ready images: `596`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail records remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

## Image QA

All Batch 107 images exist at their canonical paths, are `256 x 256 px`, are below the `20 KB` hard maximum, and are below the `12 KB` warning threshold.

Circular-mask preview inspected:

- `assets/image-sources/ro/batch-106/slice-8-circle-preview.png`
- `assets/image-sources/ro/release-2-audit/slice-8-pixel-circle-preview.png`
- `assets/image-sources/ro/release-3-audit/release-3-circle-page-01.png` through `release-3-circle-page-04.png`

The final preview remains acceptable after local padding corrections. Important subject pixels stay inside the circular mask for `leopard`, `ramă`, `râmă`, `rândunică`, `riglă`, `rulotă`, `ruladă`, and `saltea`. The final `riglă` asset has no readable numbers or letters.

## Release-Wide Image Style Audit

After the initial Batch 108 closeout, a release-wide visual audit was run because the locked image direction in `docs/image-pipeline.md` is polished pixel art. The first audit used the then-current combined `/admin/releases/2` page with `229` records and identified the Slice 8 style issue. After confirming Release 2 was already committed, the release split was corrected and fresh audit contact sheets were created for all `120` Release 3 records:

- `assets/image-sources/ro/release-3-audit/release-3-square-page-01.png` through `release-3-square-page-04.png`
- `assets/image-sources/ro/release-3-audit/release-3-circle-page-01.png` through `release-3-circle-page-04.png`

Audit result:

- Most non-Slice-8 Release 3 assets were acceptable for style consistency, safety, semantic clarity, and circular crop.
- The first Slice 8 assets showed as noticeably too smooth/CGI-like compared with the established pixel-art pack.
- The affected `15` Slice 8 assets were regenerated as pixel-art icons from `assets/image-sources/ro/release-2-audit/slice-8-pixel-regeneration-sheet.png`.
- Final replacements were processed through a `128 px` / `96`-color nearest-neighbor workflow and padded locally for edge-risk shapes.
- The regenerated `release-3-circle-page-02.png`, `release-3-circle-page-03.png`, `release-3-circle-page-04.png`, and `slice-8-pixel-circle-preview.png` were inspected after replacement and accepted.

No production JSON, IDs, normalized values, routes, or loader behavior changed during this style audit; only the `15` Slice 8 public WebP image files were replaced.

## Identity QA

`ramă` and `râmă` intentionally share `normalized: "rama"` but have distinct exact words, IDs, and image paths:

| Word | ID | Image path |
| --- | --- | --- |
| `ramă` | `ro-r-rama-cadru` | `/images/ro/r/ro-r-rama-cadru.webp` |
| `râmă` | `ro-r-rama-vierme` | `/images/ro/r/ro-r-rama-vierme.webp` |

The validator allowlist is limited to this exact Romanian pair. Other duplicate normalized forms still fail validation.

## Release 3 QA

`/admin/releases/3` release data includes all `15` new Batch 107 IDs and now has `120` dirty-tree additions. `/admin/releases/2` remains the committed frozen Release 2 list with `109` IDs.

Verified Batch 107 IDs in the Release 3 list:

```txt
ro-l-leopard
ro-l-lana
ro-l-lan
ro-l-lampion
ro-r-rama-cadru
ro-r-rama-vierme
ro-r-randunica
ro-r-rechin
ro-r-rigla
ro-r-rulota
ro-r-rulada
ro-r-radio
ro-r-romb
ro-s-stea
ro-s-saltea
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

`pnpm run validate:content` passed with pre-existing warning-threshold notices for older image assets. No Batch 107 image is above the `12 KB` warning threshold.

`pnpm run build` passed with Next.js `16.2.6` and generated static pages, including `/ro`, `/admin/words`, `/admin/releases/2`, `/admin/releases/3`, and Romanian play/setup paths.

Localhost route QA:

- Sandboxed checks against `http://localhost:3000` failed with `EPERM` for `/ro`, `/admin/words`, `/admin/releases/3`, affected play routes, and representative new image URLs.
- The required outside-sandbox retry passed against the user-running dev server on port `3000`; all checked routes and assets returned `200 OK`.
- No alternate dev server or port was started.

Representative routes and image URLs checked:

```txt
http://localhost:3000/ro
http://localhost:3000/admin/words
http://localhost:3000/admin/releases/3
http://localhost:3000/ro/play/l
http://localhost:3000/ro/play/r
http://localhost:3000/ro/play/s
http://localhost:3000/images/ro/r/ro-r-rama-cadru.webp
http://localhost:3000/images/ro/r/ro-r-rama-vierme.webp
http://localhost:3000/images/ro/r/ro-r-rigla.webp
http://localhost:3000/images/ro/r/ro-r-rechin.webp
http://localhost:3000/images/ro/s/ro-s-stea.webp
```

## Next Recommended Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 109.

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
docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-108.md

Task: Batch 109 production-slice planning for Slice 9 only.

Plan these Slice 9 candidates from slice-plan-index-batch-76.md, preserving order:
sfeclă, spanac, săgeată, spate, sprânceană, stropitoare, solniță, cer, ceață, cep, celofan, cișmea, cioban, ciocârlie, ciocănitoare.

Constraints:
- Planning-only batch. Do not add production JSON, content manifests, image assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Use only Batch 75 non-hold accepted candidates.
- Re-run source/spelling, child-fit, safety, imageability, duplicate, normalized-collision, and planned ID/path checks before keeping any row active.
- Pay special attention to Slice 9 risks from slice-plan-index-batch-76.md: `spate`, `sprânceană`, `cer`, `ceață`, and `celofan` need strict imageability checks; `săgeată` must be a harmless arrow symbol/object, not a weapon cue; `cioban` is a person-scene row and needs style consistency review; `ciocârlie` may be less familiar than other birds.
- If a row fails source/safety/duplicate/child-fit/imageability checks, mark it blocked and ask only for critical exceptions instead of silently promoting or replacing it.
- Record planned canonical file, stable ID, image path, normalized form, category, part of speech, difficulty, age band, alt-text direction, speech-target value, expected coverage impact, route/validation impact, and image-brief risks.
- Do not make production decisions that require current facts without doing source research and recording sources.

After writing the planning document, update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md, run git diff --check, and report changed files plus verification results.
```
