# Batch 54 Production Promotion: Third Batch 43 Queue

Batch: Romanian Content Expansion Batch 54.

Status: complete; human-approved Batch 53 cells promoted.

Last updated: 2026-06-11.

## Scope

The human approved all `15` Batch 53 contact-sheet cells with the instruction: "images approved, go on".

Batch 54 promoted only the accepted cells from:

- `assets/image-sources/ro/batch-53/contact-sheet.png`

No rejected or unclear cells were promoted.

## Promoted Rows

Promoted in Batch 53 row-major order:

1. `lebădă`
2. `lopată`
3. `lipici`
4. `lupă`
5. `leagăn`
6. `rac`
7. `ren`
8. `rucsac`
9. `role`
10. `supă`
11. `sare`
12. `semințe`
13. `sită`
14. `dovlecel`
15. `țelină`

Production JSON rows were added only to existing canonical manifests:

- `content/ro/words-l.json`
- `content/ro/words-r.json`
- `content/ro/words-s.json`
- `content/ro/words-d.json`
- `content/ro/words-ț.json`

No new letter manifests, route aliases, loader imports, schema fields, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added.

## Image Processing

The approved contact-sheet cells were cropped in fixed order, normalized into square assets, padded for circular display, post-processed through a refined `128 px` pixel-art grid with channel snapping, nearest-upscaled to `256 x 256 px`, and saved as lossless WebP files.

QA artifacts:

- `assets/image-sources/ro/batch-53/final-preview.png`
- `assets/image-sources/ro/batch-53/circular-preview.png`
- `assets/image-sources/ro/batch-53/crops/`
- `assets/image-sources/ro/batch-53/work-128/`
- `assets/image-sources/ro/batch-53/final-preview/`

Circular-mask QA confirmed the subjects remain usable in circular wheel slots. The diagonal `lopată`, swing frame, soup spoon, sieve handle, and other long shapes were locally scaled down enough that the circular mask clips only background or non-meaningful edge pixels.

## Final Assets

All Batch 54 public WebP assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum:

| Asset | Size |
| --- | ---: |
| `public/images/ro/l/ro-l-lebada.webp` | `2690 B` |
| `public/images/ro/l/ro-l-lopata.webp` | `2122 B` |
| `public/images/ro/l/ro-l-lipici.webp` | `1284 B` |
| `public/images/ro/l/ro-l-lupa.webp` | `2392 B` |
| `public/images/ro/l/ro-l-leagan.webp` | `3656 B` |
| `public/images/ro/r/ro-r-rac.webp` | `3444 B` |
| `public/images/ro/r/ro-r-ren.webp` | `3226 B` |
| `public/images/ro/r/ro-r-rucsac.webp` | `3710 B` |
| `public/images/ro/r/ro-r-role.webp` | `4396 B` |
| `public/images/ro/s/ro-s-supa.webp` | `3898 B` |
| `public/images/ro/s/ro-s-sare.webp` | `2452 B` |
| `public/images/ro/s/ro-s-seminte.webp` | `3466 B` |
| `public/images/ro/s/ro-s-sita.webp` | `3558 B` |
| `public/images/ro/d/ro-d-dovlecel.webp` | `2850 B` |
| `public/images/ro/ț/ro-tz-telina.webp` | `3948 B` |

## Content Totals

Post-Batch-54 canonical totals from `content/ro/*.json`:

- total Romanian records: `415`;
- approved words: `412`;
- ready images: `412`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3`.

Rejected rows remain:

- `ro-g-ghicitoare`;
- `ro-m-miez`;
- `ro-s-stinghie`.

## Coverage Impact

Requested-target coverage after Batch 54:

| Target | Starts | Contains | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | `0` | `167` | `167` |
| `Â` | `0` | `12` | `12` |
| `K` | `5` | `1` | `6` |
| `Y` | `2` | `0` | `2` |
| `T` | `17` | `88` | `105` |
| `V` | `14` | `15` | `29` |
| `L` | `19` | `85` | `104` |
| `R` | `18` | `145` | `163` |
| `S` | `21` | `31` | `52` |
| `B` | `23` | `24` | `47` |
| `D` | `10` | `20` | `30` |
| `Q` | `1` | `0` | `1` |
| `W` | `1` | `2` | `3` |
| `X` | `1` | `5` | `6` |
| `CE` | `14` | `4` | `18` |
| `CI` | `9` | `10` | `19` |
| `GE` | `9` | `6` | `15` |
| `GI` | `6` | `9` | `15` |
| `GHE` | `11` | `4` | `15` |
| `CHE` | `2` | `13` | `15` |
| `CHI` | `8` | `7` | `15` |
| `Ș` | `12` | `27` | `39` |
| `Ț` | `6` | `37` | `43` |
| `J` | `5` | `9` | `14` |

Content-derived gameplay compatibility fixtures were updated because:

- `dovlecel` increases the exact `V` contains-only pool from `14` to `15`;
- `dovlecel` increases the `CE` mixed practice-target pool from `17` to `18`;
- `lipici` increases the `CI` mixed practice-target pool from `18` to `19`.

## Verification

Passed on 2026-06-11:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run build
git diff --check
```

`pnpm run validate:content` reported known warning-threshold image notices only; none of the Batch 54 assets exceeded the warning threshold.

## Browser QA

`http://localhost:3000/ro` was unavailable both inside and outside the sandbox on 2026-06-11. No alternate dev server or port was started.

Follow-up on 2026-06-12: after the human started the expected dev server on port `3000`, the sandboxed check still failed, but outside-sandbox checks passed.

Browser QA follow-up passed for:

- `/ro`;
- `/admin/words`;
- `/ro/play/l`;
- `/ro/play/r`;
- `/ro/play/s`;
- `/ro/play/d`;
- `/ro/play/tz`;
- representative Batch 54 image asset URLs.

## Batch 55 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 54.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md
6. docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-53.md
7. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-54.md
8. docs/app-development-program/features/romanian-content-expansion/status.md
9. docs/status.md

Goal:

Execute Batch 55: slice coverage QA and next-prompt preparation after the Batch 54 production promotion. Do not add production words, image assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Tasks:

- Recompute canonical totals from `content/ro/*.json`.
- Confirm Batch 54 assets exist, are `256 x 256 px`, and stay below the size thresholds.
- Confirm only the three rejected audit-trail rows remain placeholder-backed.
- Confirm no production `webcam` or `yak` row exists; `cameră web` remains in `C`; `iac` remains in `I`.
- Recompute requested-target coverage for `Ă`, `Â`, `K`, `Q`, `W`, `X`, `Y`, `CE`, `CI`, `GE`, `GI`, `GHE`, `GHI`, `CHE`, `CHI`, `L`, `R`, `S`, `Ș`, `T`, `Ț`, `V`, `B`, `D`, and `J`.
- Verify representative local routes on `http://localhost:3000` only if the expected dev server is running on port `3000`; retry outside the sandbox before marking it unavailable, and do not start a new server or use another port.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check`.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with the QA result and the next approved batch.

Next-step decision:

- If continuing content expansion, choose whether the next step should be another Batch 52-style planning batch from the remaining Batch 43 candidate pool or final requested-expansion QA.
- Preserve existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.
```
