# Batch 44 Production Slice Planning: First Batch 43 Queue

Batch: Romanian Content Expansion Batch 44.

Status: complete; production slice planned; no production content added.

Last updated: 2026-06-02.

## Scope Guard

This batch is planning-only. It does not add production JSON records, image assets, route changes, schema changes, placeholders, or speech-target production metadata.

Planning source:

- `docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md`

The planned first slice keeps the Batch 43 order, with two Romanian display-form decisions:

1. `webcam` is revised to `cameră web` for child-facing display and canonical storage because dictionary support for `webcam` was weak, while Romanian technical/product usage supports `cameră web`.
2. `yak` is revised to `iac` because dexonline records `iac` as the DOOM/DEX standard form and `yak` as a cross-reference or variant.

These decisions intentionally reduce rare-letter starts-with value for `W` and `Y`: `cameră web` is a `C` word that contributes contains-only `W`, and `iac` is an `I` word. `walkie-talkie` still gives a `W` starts-with word, and `yo-yo` still gives a `Y` starts-with word.

## Source Verification

Source labels used in this document:

- `S1` dexonline `kiwi`: https://dexonline.ro/definitie/kiwi
- `S2` dexonline `koala`: https://dexonline.ro/definitie/koala
- `S3` dexonline `xilofon`: https://dexonline.ro/definitie/xilofon
- `S4` dexonline `taxi`: https://dexonline.ro/definitie/taxi
- `S5` dexonline `pix`: https://dexonline.ro/definitie/pix
- `S6` dexonline `boxă`: https://dexonline.ro/definitie/box%C4%83
- `S7` dexonline `mixer`: https://dexonline.ro/definitie/mixer
- `S8` dexonline `walkie-talkie`: https://dexonline.ro/definitie/walkie-talkie
- `S9` Microsoft Support Romanian `cameră web` usage: https://support.microsoft.com/ro-ro/topic/utiliza%C8%9Bi-camera-web-modern%C4%83-microsoft-%C3%AEn-microsoft-teams-2eae0ef9-c27a-4ae7-8465-65c462e2afd4
- `S10` Microsoft Support Romanian camera/webcam usage: https://support.microsoft.com/ro-ro/windows/cum-se-utilizeaz%C4%83-aplica%C8%9Bia-camer%C4%83-windows-ea40b69f-be6a-840e-9c8c-1fd6eea97c22
- `S11` dexonline `yo-yo` DOOM 3 entry: https://dexonline.ro/definitie/yo-yo/1260845
- `S12` dexonline `iac` / `yak`: https://dexonline.ro/definitie/iac
- `S13` dexonline `quinoa`: https://dexonline.ro/definitie/quinoa
- `S14` dexonline `lampă`: https://dexonline.ro/definitie/lamp%C4%83
- `S15` dexonline `lună`: https://dexonline.ro/definitie/lun%C4%83
- `S16` dexonline `ceainic`: https://dexonline.ro/definitie/ceainic

Verification decisions:

- `kiwi`, `koala`, `mixer`, `quinoa`, `walkie-talkie`, and `yo-yo` have Romanian dictionary or DOOM support with the planned borrowed spelling.
- `xilofon`, `taxi`, `pix`, `boxă`, `lampă`, `lună`, and `ceainic` are standard Romanian display forms.
- `walkie-talkie` should keep the hyphenated display and ID slug segment.
- `yo-yo` should keep the hyphenated display and ID slug segment; do not use unhyphenated `yoyo` for the production row.
- `cameră web` should be the child-facing display. If a later human decision explicitly prioritizes a `W` starts-with row over Romanian display naturalness, reopen `webcam`; do not silently swap it in Batch 46.
- `iac` should be the child-facing display. If a later human decision explicitly prioritizes `Y` starts-with over Romanian standard form, reopen `yak`; do not silently swap it in Batch 46.

## Planned Canonical Rows

All planned records should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` when they are promoted in Batch 46. Do not promote any row without its reviewed final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Difficulty | Source check | Image brief direction |
| ---: | --- | --- | --- | --- | --- | --- | ---: | --- | --- |
| 1 | `kiwi` | `content/ro/words-k.json` | `ro-k-kiwi` | `/images/ro/k/ro-k-kiwi.webp` | `kiwi` | `food` | 1 | `S1` | One cut kiwi fruit with green center and brown peel; avoid kiwi bird ambiguity. |
| 2 | `koala` | `content/ro/words-k.json` | `ro-k-koala` | `/images/ro/k/ro-k-koala.webp` | `koala` | `animal` | 2 | `S2` | Friendly koala on a simple branch; no zoo bars or realistic distress. |
| 3 | `xilofon` | `content/ro/words-x.json` | `ro-x-xilofon` | `/images/ro/x/ro-x-xilofon.webp` | `xilofon` | `toy` | 1 | `S3` | Child xylophone with colorful bars and mallets; no notes, letters, or brand marks. |
| 4 | `taxi` | `content/ro/words-t.json` | `ro-t-taxi` | `/images/ro/t/ro-t-taxi.webp` | `taxi` | `vehicle` | 1 | `S4` | Generic yellow taxi-like car with plain roof light; no written `TAXI` text. |
| 5 | `pix` | `content/ro/words-p.json` | `ro-p-pix` | `/images/ro/p/ro-p-pix.webp` | `pix` | `school` | 1 | `S5` | Simple ballpoint pen, centered and circular-safe; no writing sample or logo. |
| 6 | `boxă` | `content/ro/words-b.json` | `ro-b-boxa` | `/images/ro/b/ro-b-boxa.webp` | `boxa` | `household` | 2 | `S6` | Standalone audio speaker with visible round driver; avoid boxing/sport meaning. |
| 7 | `mixer` | `content/ro/words-m.json` | `ro-m-mixer` | `/images/ro/m/ro-m-mixer.webp` | `mixer` | `household` | 2 | `S7` | Electric hand mixer or small kitchen mixer; no brand, no cluttered kitchen scene. |
| 8 | `walkie-talkie` | `content/ro/words-w.json` | `ro-w-walkie-talkie` | `/images/ro/w/ro-w-walkie-talkie.webp` | `walkie-talkie` | `toy` | 3 | `S8` | One toy-like handheld radio with antenna and button; no screen text or police/military framing. |
| 9 | `cameră web` | `content/ro/words-c.json` | `ro-c-camera-web` | `/images/ro/c/ro-c-camera-web.webp` | `camera web` | `household` | 2 | `S9`, `S10` | Small clip-on webcam on a plain base; no computer screen content, no brand. |
| 10 | `yo-yo` | `content/ro/words-y.json` | `ro-y-yo-yo` | `/images/ro/y/ro-y-yo-yo.webp` | `yo-yo` | `toy` | 2 | `S11` | Bright yo-yo toy with string loop; no letters, no character face. |
| 11 | `iac` | `content/ro/words-i.json` | `ro-i-iac` | `/images/ro/i/ro-i-iac.webp` | `iac` | `animal` | 3 | `S12` | Friendly shaggy yak/iac side view with soft horns; avoid aggressive pose. |
| 12 | `quinoa` | `content/ro/words-q.json` | `ro-q-quinoa` | `/images/ro/q/ro-q-quinoa.webp` | `quinoa` | `food` | 3 | `S13` | Small bowl or spoon of quinoa grains with simple garnish; no package or brand. |
| 13 | `lampă` | `content/ro/words-l.json` | `ro-l-lampa` | `/images/ro/l/ro-l-lampa.webp` | `lampa` | `household` | 1 | `S14` | Simple table lamp glowing softly; no harsh glare, no room scene. |
| 14 | `lună` | `content/ro/words-l.json` | `ro-l-luna` | `/images/ro/l/ro-l-luna.webp` | `luna` | `nature` | 1 | `S15` | Large friendly moon shape on simple night background; avoid face if it makes the concept less literal. |
| 15 | `ceainic` | `content/ro/words-c.json` | `ro-c-ceainic` | `/images/ro/c/ro-c-ceainic.webp` | `ceainic` | `household` | 1 | `S16` | Teapot/kettle with spout, handle, and lid; no text or busy tea set. |

## Route, Loader, And Validation Impact

Existing manifests can accept these rows without a production schema change.

Batch 46 will need new canonical word files and route targets for rare letters:

- add `content/ro/words-k.json`, `words-q.json`, `words-w.json`, `words-x.json`, and `words-y.json`;
- add enabled `K`, `Q`, `W`, `X`, and `Y` entries to `content/ro/letters.json`;
- use route segments `k`, `q`, `w`, `x`, and `y` with no special aliases;
- expected sort orders are `K = 14`, `Q = 20`, `W = 28`, `X = 29`, and `Y = 30`, matching the existing Romanian alphabet order gaps;
- import the new word manifests in `src/content/loaders.ts` and register keys `k`, `q`, `w`, `x`, and `y`;
- create final image directories under `public/images/ro/k`, `q`, `w`, `x`, and `y`;
- update any gameplay/admin compatibility fixture that assumes the previous enabled-letter set or exact route target count;
- run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check` in Batch 46.

Existing canonical files affected in Batch 46:

- `content/ro/words-b.json`: `boxă`;
- `content/ro/words-c.json`: `cameră web`, `ceainic`;
- `content/ro/words-i.json`: `iac`;
- `content/ro/words-l.json`: `lampă`, `lună`;
- `content/ro/words-m.json`: `mixer`;
- `content/ro/words-p.json`: `pix`;
- `content/ro/words-t.json`: `taxi`.

Validation notes:

- Hyphenated IDs such as `ro-w-walkie-talkie` and `ro-y-yo-yo` match the existing lowercase ASCII slug rule.
- The multi-word display `cameră web` should use `normalized: "camera web"` under the current Romanian folding rule. Batch 46 should verify `pnpm run validate:content` before assuming spaces have no downstream UI issue.
- `cameră web` and `iac` should not be forced into `W` or `Y` files just to satisfy starts-with quotas.

## Coverage Impact

Current production content remains unchanged in Batch 44: `367` approved words, `367` ready images, and `0` approved placeholders.

If Batch 46 promotes all `15` planned rows with ready images, the planned content total becomes `382` approved words, `382` ready images, and `0` approved placeholders.

Requested-target deltas using current matcher semantics:

| Target | Before starts | Before contains | Before mixed | Planned starts | Planned contains | Planned mixed | Delta |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `Ă` | 0 | 152 | 152 | 0 | 156 | 156 | `+4` contains |
| `K` | 0 | 0 | 0 | 2 | 1 | 3 | `+2` starts, `+1` contains |
| `Q` | 0 | 0 | 0 | 1 | 0 | 1 | `+1` starts |
| `W` | 0 | 0 | 0 | 1 | 2 | 3 | `+1` starts, `+2` contains |
| `X` | 0 | 1 | 1 | 1 | 5 | 6 | `+1` starts, `+4` contains |
| `Y` | 0 | 0 | 0 | 1 | 0 | 1 | `+1` starts |
| `CE` | 13 | 3 | 16 | 14 | 3 | 17 | `+1` starts |
| `L` | 12 | 75 | 87 | 14 | 78 | 92 | `+2` starts, `+3` contains |
| `R` | 14 | 136 | 150 | 14 | 138 | 152 | `+2` contains |
| `T` | 10 | 80 | 90 | 11 | 81 | 92 | `+1` starts, `+1` contains |
| `B` | 22 | 20 | 42 | 23 | 21 | 44 | `+1` starts, `+1` contains |

Per-word target impact:

| Display | Starts-with impact | Contains-only impact |
| --- | --- | --- |
| `kiwi` | `K` | `W` |
| `koala` | `K` | `L` |
| `xilofon` | `X` | `L` |
| `taxi` | `T` | `X` |
| `pix` | none for requested targets | `X` |
| `boxă` | `B` | `Ă`, `X` |
| `mixer` | none for requested targets | `X`, `R` |
| `walkie-talkie` | `W` | `K`, `L`, `T` |
| `cameră web` | none for requested targets | `Ă`, `W`, `R`, `B` |
| `yo-yo` | `Y` | none for requested targets |
| `iac` | none for requested targets | none for requested targets |
| `quinoa` | `Q` | none for requested targets |
| `lampă` | `L` | `Ă` |
| `lună` | `L` | `Ă` |
| `ceainic` | `CE` | none for requested targets |

## Batch 45 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 44.

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
10. docs/app-development-program/features/romanian-content-expansion/plan.md
11. docs/app-development-program/features/romanian-content-expansion/status.md
12. docs/status.md

Goal:

Execute Batch 45: write production image briefs and generate one contact sheet for the Batch 44 planned slice, then stop for human image review.

Use the exact planned display/order from Batch 44:

1. kiwi
2. koala
3. xilofon
4. taxi
5. pix
6. boxă
7. mixer
8. walkie-talkie
9. cameră web
10. yo-yo
11. iac
12. quinoa
13. lampă
14. lună
15. ceainic

For each word, write an image brief with:

- stable word ID;
- display word;
- canonical image path;
- short Romanian alt text;
- category;
- one clear subject;
- specific ambiguity/safety notes from Batch 44;
- pixel-art style requirements from docs/image-pipeline.md.

Then generate one unlabeled contact sheet in the same order. Follow docs/image-pipeline.md:

- refined, lightly dimensional pixel art;
- full square background or transparency;
- circular-safe composition;
- no text, letters, numbers, logos, brands, watermarks, copyrighted characters, clutter, scary content, or confusing extra objects;
- compare visually against the current on-brand reference set before asking for review.

Do not crop cells, optimize WebP assets, edit production JSON, add placeholders, change routes, change schema, or add speech-target production metadata in Batch 45. Stop after the contact sheet and ask the human to review it.

Update the feature status and global docs/status.md, run git diff --check, and provide a ready-to-copy prompt for Batch 46 production promotion and verification.
```
