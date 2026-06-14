# Batch 55 Slice Coverage QA And Next Prompt

Batch: Romanian Content Expansion Batch 55.

Status: complete.

Last updated: 2026-06-11.

## Scope

Batch 55 closed out the Batch 54 production promotion by recomputing canonical totals, checking requested-target coverage, verifying promoted assets, confirming scope guards, and preparing the next batch prompt.

No production words, image assets, route aliases, schema fields, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added in Batch 55.

## Canonical Totals

Computed from `content/ro/*.json`:

- total Romanian records: `415`;
- approved words: `412`;
- ready images: `412`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3`.

Rejected rows remain:

- `ro-g-ghicitoare`;
- `ro-m-miez`;
- `ro-s-stinghie`.

## Coverage Snapshot

Requested and monitored targets after Batch 54:

| Target | Starts | Contains | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | `0` | `167` | `167` |
| `Â` | `0` | `12` | `12` |
| `K` | `5` | `1` | `6` |
| `Q` | `1` | `0` | `1` |
| `W` | `1` | `2` | `3` |
| `X` | `1` | `5` | `6` |
| `Y` | `2` | `0` | `2` |
| `CE` | `14` | `4` | `18` |
| `CI` | `9` | `10` | `19` |
| `GE` | `9` | `6` | `15` |
| `GI` | `6` | `9` | `15` |
| `GHE` | `11` | `4` | `15` |
| `GHI` | `8` | `5` | `13` |
| `CHE` | `2` | `13` | `15` |
| `CHI` | `8` | `7` | `15` |
| `L` | `19` | `85` | `104` |
| `R` | `18` | `145` | `163` |
| `S` | `21` | `31` | `52` |
| `Ș` | `12` | `27` | `39` |
| `T` | `17` | `88` | `105` |
| `Ț` | `6` | `37` | `43` |
| `V` | `14` | `15` | `29` |
| `B` | `23` | `24` | `47` |
| `D` | `10` | `20` | `30` |
| `J` | `5` | `9` | `14` |

## Scope Guard Checks

Confirmed:

- no production `webcam` row exists;
- no production `yak` row exists;
- `cameră web` remains `ro-c-camera-web` in `content/ro/words-c.json`;
- `iac` remains `ro-i-iac` in `content/ro/words-i.json`;
- there are `0` approved placeholder-backed rows;
- the rejected audit-trail rows remain the only non-approved rows;
- no schema changes or route aliases were added by Batch 55;
- no speech-target production metadata, database/auth/billing/admin feature, AI pronunciation, or clinical claim was added.

## Asset Checks

All Batch 54 public WebP files exist, are `256 x 256 px`, and remain below the `20 KB` hard maximum. They also remain below the `12 KB` warning threshold:

| Asset | Dimensions | Size |
| --- | --- | ---: |
| `public/images/ro/l/ro-l-lebada.webp` | `256 x 256` | `2690 B` |
| `public/images/ro/l/ro-l-lopata.webp` | `256 x 256` | `2122 B` |
| `public/images/ro/l/ro-l-lipici.webp` | `256 x 256` | `1284 B` |
| `public/images/ro/l/ro-l-lupa.webp` | `256 x 256` | `2392 B` |
| `public/images/ro/l/ro-l-leagan.webp` | `256 x 256` | `3656 B` |
| `public/images/ro/r/ro-r-rac.webp` | `256 x 256` | `3444 B` |
| `public/images/ro/r/ro-r-ren.webp` | `256 x 256` | `3226 B` |
| `public/images/ro/r/ro-r-rucsac.webp` | `256 x 256` | `3710 B` |
| `public/images/ro/r/ro-r-role.webp` | `256 x 256` | `4396 B` |
| `public/images/ro/s/ro-s-supa.webp` | `256 x 256` | `3898 B` |
| `public/images/ro/s/ro-s-sare.webp` | `256 x 256` | `2452 B` |
| `public/images/ro/s/ro-s-seminte.webp` | `256 x 256` | `3466 B` |
| `public/images/ro/s/ro-s-sita.webp` | `256 x 256` | `3558 B` |
| `public/images/ro/d/ro-d-dovlecel.webp` | `256 x 256` | `2850 B` |
| `public/images/ro/ț/ro-tz-telina.webp` | `256 x 256` | `3948 B` |

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
- `/ro/play/tz`.

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

## Next Step Decision

Proceed with Batch 56 as another planning-only production slice from the remaining already human-reviewed Batch 43 candidate pool. The next slice should keep the same quality gate: common or learnable, concrete, child-safe, imageable, source-checked where borrowed or ambiguous, and useful for requested coverage.

The next batch must preserve the existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.

## Batch 56 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 55.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/requested-letter-and-sound-expansion-batch-41.md
7. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
8. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
9. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md
10. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md
11. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md
12. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-54.md
13. docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-55.md
14. docs/app-development-program/features/romanian-content-expansion/status.md
15. docs/status.md

Goal:

Execute Batch 56: plan the next small production slice from the remaining already human-reviewed Batch 43 candidate pool. This batch is planning-only.

Tasks:

- Re-read the Batch 43 accepted/held candidate decisions and the Batch 44, 48, and 52 slice plans so already promoted rows are not repeated.
- Recompute current coverage from the canonical `412`-word pack.
- Choose a small quality-gated slice of about `12` to `15` words where the candidates are concrete, child-safe, imageable, and useful for requested coverage.
- Re-check current source evidence for any borrowed, rare-letter, or potentially ambiguous Romanian forms before planning them.
- Preserve existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.
- For every planned row, record canonical file, stable ID, image path, normalized form, category, difficulty, source check, metadata notes, image brief direction, and expected target coverage impact.
- Do not add production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Update `docs/app-development-program/features/romanian-content-expansion/status.md`, `docs/status.md`, and `docs/next-image-batch-prompt.md`.
- Provide the Batch 57 ready-to-copy prompt for image briefs and one contact sheet.

Run:

git diff --check
```
