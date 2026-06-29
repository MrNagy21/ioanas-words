# Romanian Content Expansion Batch 105 Production Slice Planning

Date: 2026-06-29

## Scope

Batch 105 plans Slice 8 from `slice-plan-index-batch-76.md` only.

Requested candidates, preserving Batch 76 order:

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

This is a planning-only batch. It does not add production JSON, content manifests, image assets, placeholders, route/schema/loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

## Planning Result

Batch 105 keeps `13` rows active and blocks `2` rows pending a content decision:

- Active: `leopard`, `lână`, `lan`, `lampion`, `rândunică`, `rechin`, `riglă`, `rulotă`, `ruladă`, `radio`, `romb`, `stea`, `saltea`.
- Blocked: `ramă`, `râmă`.

The blocker is not a source/spelling problem. It is a current schema/content identity problem: `ramă` and `râmă` are different exact Romanian words, but both fold to the same current normalized value, stable ID, and image path under the current rules:

| Display | Normalized | Default stable ID | Default image path |
| --- | --- | --- | --- |
| `ramă` | `rama` | `ro-r-rama` | `/images/ro/r/ro-r-rama.webp` |
| `râmă` | `rama` | `ro-r-rama` | `/images/ro/r/ro-r-rama.webp` |

The current validator rejects duplicate normalized words globally. Even if only the ID were manually changed, promoting both as ordinary rows would still fail validation unless schema/validator behavior changed. This matches the explicit Batch 76 warning, so Batch 105 does not silently choose one, replace either word, or promote both.

## Source Basis

All `15` requested candidates are Batch 75 non-hold accepted candidates and remain in Slice 8 of the Batch 76 plan.

Source/spelling checks used DEX Online where accessible through the browser tool, with stable lexical source URLs recorded below:

| Candidate | Source |
| --- | --- |
| `leopard` | [dexonline.ro/definitie/leopard](https://dexonline.ro/definitie/leopard) |
| `lână` | [dexonline.ro/definitie/l%C3%A2n%C4%83](https://dexonline.ro/definitie/l%C3%A2n%C4%83) |
| `lan` | [dexonline.ro/definitie/lan](https://dexonline.ro/definitie/lan) |
| `lampion` | [dexonline.ro/definitie/lampion](https://dexonline.ro/definitie/lampion) |
| `ramă` | [dexonline.ro/definitie/ram%C4%83](https://dexonline.ro/definitie/ram%C4%83) |
| `râmă` | [dexonline.ro/definitie/r%C3%A2m%C4%83](https://dexonline.ro/definitie/r%C3%A2m%C4%83) |
| `rândunică` | [dexonline.ro/definitie/r%C3%A2ndunic%C4%83](https://dexonline.ro/definitie/r%C3%A2ndunic%C4%83) |
| `rechin` | [dexonline.ro/definitie/rechin](https://dexonline.ro/definitie/rechin) |
| `riglă` | [dexonline.ro/definitie/rigl%C4%83](https://dexonline.ro/definitie/rigl%C4%83) |
| `rulotă` | [dexonline.ro/definitie/rulot%C4%83](https://dexonline.ro/definitie/rulot%C4%83) |
| `ruladă` | [dexonline.ro/definitie/rulad%C4%83](https://dexonline.ro/definitie/rulad%C4%83) |
| `radio` | [dexonline.ro/definitie/radio](https://dexonline.ro/definitie/radio) |
| `romb` | [dexonline.ro/definitie/romb](https://dexonline.ro/definitie/romb) |
| `stea` | [dexonline.ro/definitie/stea](https://dexonline.ro/definitie/stea) |
| `saltea` | [dexonline.ro/definitie/saltea](https://dexonline.ro/definitie/saltea) |

No current-fact production decision was made beyond lexical/source confirmation and the local schema collision audit.

## Checks Re-Run

Recomputed after Batch 103 / Batch 104 state:

- Total Romanian records: `584`
- Approved words: `581`
- Ready images: `581`
- Approved placeholders: `0`
- Rejected audit-trail rows: `3`

Collision checks against current `content/ro/words-*.json` found:

- no exact `word` collisions with existing content;
- no exact `display` collisions with existing content;
- no normalized-form collisions with existing content;
- no planned stable-ID collisions with existing content;
- no planned image-path collisions with existing content;
- one internal Slice 8 normalized/ID/path collision between `ramă` and `râmă`.

Rejected audit-trail rows remain unrelated:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

## Planned Active Rows

| # | Display | Canonical file | Stable ID | Image path | Normalized | Category | Part of speech | Difficulty | Age band | Speech-target value | Alt-text direction |
| ---: | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| 1 | `leopard` | `content/ro/words-l.json` | `ro-l-leopard` | `/images/ro/l/ro-l-leopard.webp` | `leopard` | `animal` | `noun` | 2 | `4-6` | `S1`, manual, app-owned, approved only with ready image | `Un leopard blând` |
| 2 | `lână` | `content/ro/words-l.json` | `ro-l-lana` | `/images/ro/l/ro-l-lana.webp` | `lana` | `household` | `noun` | 2 | `4-6` | `S2`, manual, app-owned, approved only with ready image | `Un ghem de lână` |
| 3 | `lan` | `content/ro/words-l.json` | `ro-l-lan` | `/images/ro/l/ro-l-lan.webp` | `lan` | `nature` | `noun` | 3 | `4-6` | `S3`, manual, app-owned, approved only with ready image | `Un lan de grâu` |
| 4 | `lampion` | `content/ro/words-l.json` | `ro-l-lampion` | `/images/ro/l/ro-l-lampion.webp` | `lampion` | `household` | `noun` | 3 | `4-6` | `S4`, manual, app-owned, approved only with ready image | `Un lampion colorat` |
| 5 | `rândunică` | `content/ro/words-r.json` | `ro-r-randunica` | `/images/ro/r/ro-r-randunica.webp` | `randunica` | `animal` | `noun` | 3 | `4-6` | `S7`, manual, app-owned, approved only with ready image | `O rândunică` |
| 6 | `rechin` | `content/ro/words-r.json` | `ro-r-rechin` | `/images/ro/r/ro-r-rechin.webp` | `rechin` | `animal` | `noun` | 3 | `4-6` | `S8`, manual, app-owned, approved only with ready image | `Un rechin prietenos` |
| 7 | `riglă` | `content/ro/words-r.json` | `ro-r-rigla` | `/images/ro/r/ro-r-rigla.webp` | `rigla` | `school` | `noun` | 1 | `4-6` | `S9`, manual, app-owned, approved only with ready image | `O riglă simplă` |
| 8 | `rulotă` | `content/ro/words-r.json` | `ro-r-rulota` | `/images/ro/r/ro-r-rulota.webp` | `rulota` | `vehicle` | `noun` | 3 | `4-6` | `S10`, manual, app-owned, approved only with ready image | `O rulotă` |
| 9 | `ruladă` | `content/ro/words-r.json` | `ro-r-rulada` | `/images/ro/r/ro-r-rulada.webp` | `rulada` | `food` | `noun` | 2 | `4-6` | `S11`, manual, app-owned, approved only with ready image | `O felie de ruladă` |
| 10 | `radio` | `content/ro/words-r.json` | `ro-r-radio` | `/images/ro/r/ro-r-radio.webp` | `radio` | `household` | `noun` | 2 | `4-6` | `S12`, manual, app-owned, approved only with ready image | `Un radio simplu` |
| 11 | `romb` | `content/ro/words-r.json` | `ro-r-romb` | `/images/ro/r/ro-r-romb.webp` | `romb` | `school` | `noun` | 3 | `4-6` | `S13`, manual, app-owned, approved only with ready image | `Un romb colorat` |
| 12 | `stea` | `content/ro/words-s.json` | `ro-s-stea` | `/images/ro/s/ro-s-stea.webp` | `stea` | `nature` | `noun` | 1 | `4-6` | `S14`, manual, app-owned, approved only with ready image | `O stea galbenă` |
| 13 | `saltea` | `content/ro/words-s.json` | `ro-s-saltea` | `/images/ro/s/ro-s-saltea.webp` | `saltea` | `household` | `noun` | 2 | `4-6` | `S15`, manual, app-owned, approved only with ready image | `O saltea` |

## Blocked Rows

| Display | Requested canonical file | Blocker | Required decision |
| --- | --- | --- | --- |
| `ramă` | `content/ro/words-r.json` | Internal collision with `râmă`: both fold to `normalized: "rama"`, `id: "ro-r-rama"`, and `/images/ro/r/ro-r-rama.webp`. | Choose whether to promote `ramă` only, promote `râmă` only, block both for now, or change schema/validator behavior. |
| `râmă` | `content/ro/words-r.json` | Internal collision with `ramă`: both fold to `normalized: "rama"`, `id: "ro-r-rama"`, and `/images/ro/r/ro-r-rama.webp`. | Same decision required. |

## Source / Safety / Child-Fit Decisions

| Display | Decision | Notes |
| --- | --- | --- |
| `leopard` | Active | Friendly big-cat pose; avoid teeth, hunting, attack, or scary wildlife framing. |
| `lână` | Active | Ball of wool/yarn; avoid sheep-only image because the target is material. |
| `lan` | Active | Wheat field or small crop row; scene must be compact enough at wheel size. |
| `lampion` | Active | Paper lantern; avoid festival text, symbols, fire hazard, or national cues. |
| `ramă` | Blocked | Lexically valid and imageable as an empty picture frame, but blocked by the `râmă` normalized/ID/path collision. |
| `râmă` | Blocked | Lexically valid and imageable as a friendly earthworm, but blocked by the `ramă` normalized/ID/path collision. |
| `rândunică` | Active | Small swallow; avoid flock, cage, or overly tiny bird detail. |
| `rechin` | Active with strict safety review | Friendly shark icon only; avoid scary teeth, attack, blood, prey, distressed swimmers, or danger-sign framing. |
| `riglă` | Active | School ruler; avoid readable numbers if possible or keep marks abstract. |
| `rulotă` | Active | Camper trailer side view; avoid brand, license plate text, traffic danger. |
| `ruladă` | Active | Rolled cake slice; keep distinct from generic cake and avoid labels/candles. |
| `radio` | Active | Portable radio; avoid readable text, brand marks, station numbers, or adult news cues. |
| `romb` | Active with imageability review | Shape-only row; use a colorful diamond shape on a simple card or tile if needed to make it concrete. |
| `stea` | Active | Single bright star; avoid flags, badges, rating stars, or crowded night sky. |
| `saltea` | Active | Mattress; avoid bedtime/person scene and keep distinct from bed. |

## Expected Coverage Impact

If the `13` active rows later pass image review and promotion while both blocked rows remain blocked, direct starts-with deltas:

| Target | Starts delta |
| --- | ---: |
| `L` | `+4` |
| `R` | `+7` |
| `S` | `+2` |

Expected affected coverage for the active `13` rows:

| Target | Current starts / contains-only / mixed | Expected after promotion | Delta |
| --- | --- | --- | --- |
| `L` | `26 / 123 / 149` | `30 / 127 / 157` | `+4 / +4 / +8` |
| `R` | `22 / 216 / 238` | `29 / 217 / 246` | `+7 / +1 / +8` |
| `S` | `26 / 44 / 70` | `28 / 44 / 72` | `+2 / +0 / +2` |
| `A` | `19 / 245 / 264` | `19 / 252 / 271` | `+0 / +7 / +7` |
| `E` | `9 / 244 / 253` | `9 / 248 / 257` | `+0 / +4 / +4` |
| `N` | `6 / 166 / 172` | `6 / 171 / 177` | `+0 / +5 / +5` |
| `Ă` | `0 / 236 / 236` | `0 / 241 / 241` | `+0 / +5 / +5` |
| `I` | `9 / 227 / 236` | `9 / 232 / 241` | `+0 / +5 / +5` |
| `T` | `30 / 135 / 165` | `30 / 138 / 168` | `+0 / +3 / +3` |
| `O` | `9 / 147 / 156` | `9 / 152 / 161` | `+0 / +5 / +5` |
| `D` | `25 / 31 / 56` | `25 / 35 / 60` | `+0 / +4 / +4` |
| `M` | `27 / 62 / 89` | `27 / 64 / 91` | `+0 / +2 / +2` |
| `C` | `75 / 101 / 176` | `75 / 103 / 178` | `+0 / +2 / +2` |
| `U` | `11 / 144 / 155` | `11 / 147 / 158` | `+0 / +3 / +3` |
| `P` | `45 / 49 / 94` | `45 / 51 / 96` | `+0 / +2 / +2` |
| `B` | `38 / 39 / 77` | `38 / 40 / 78` | `+0 / +1 / +1` |
| `H` | `24 / 65 / 89` | `24 / 66 / 90` | `+0 / +1 / +1` |

Sequence coverage impact:

| Target | Current starts / contains-only / mixed | Expected after promotion | Delta |
| --- | --- | --- | --- |
| `CHI` | `8 / 8 / 16` | `8 / 9 / 17` | `+0 / +1 / +1` |

If exactly one of `ramă` or `râmă` is later selected for promotion, direct `R` would become `+8` instead of `+7`. If both were intentionally resolved through schema/content work and promoted, direct `R` would become `+9`, but that is not valid under the current rules.

## Route And Validation Impact

If later promoted with ready images, the `13` active rows affect existing routes only:

- `/ro/play/l`
- `/ro/play/r`
- `/ro/play/s`
- `/admin/words`
- `/admin/releases/2`

No route, schema, loader, database, auth, billing, admin editing, or speech-target metadata changes are required for the `13` active rows.

Expected manifest changes for a later active-row production batch:

- `content/ro/words-l.json`: `leopard`, `lână`, `lan`, `lampion`
- `content/ro/words-r.json`: `rândunică`, `rechin`, `riglă`, `rulotă`, `ruladă`, `radio`, `romb`
- `content/ro/words-s.json`: `stea`, `saltea`

Expected release review impact for the `13` active rows:

- `/admin/releases/2` would add exactly `13` IDs, increasing Release 2 from `214` to `227` dirty-tree additions.

Expected fixture impact after later active-row promotion:

- `src/game/gameplay-compatibility.check.ts`: `expectedPracticeTargetMixedCounts.chi` likely changes from `16` to `17` because `rechin` adds one contains-only `CHI` row.

## Image Brief Risks For Next Step

Do not proceed to image generation for `ramă` or `râmă` until the blocker is resolved.

If the next batch proceeds with the `13` active rows only, use this exact row-major order in a reduced contact sheet:

`leopard`, `lână`, `lan`, `lampion`, `rândunică`, `rechin`, `riglă`, `rulotă`, `ruladă`, `radio`, `romb`, `stea`, `saltea`

Required image decisions:

- `rechin`: friendly shark only, no scary teeth or attack framing.
- `radio`: no readable text, station numbers, brands, logos, or display labels.
- `romb`: shape-only risk; make it concrete with a colorful diamond/shape tile.
- `lan`: compact crop field, not an unreadable broad landscape.
- `lampion`: no text, symbols, national cues, or fire hazard.
- `ruladă`: rolled cake slice, not generic cake.
- Long/edge-heavy rows (`riglă`, `rulotă`, `rândunică`) need circular-mask margin.

## Required Human Decision

Before any Slice 8 promotion involving the blocked pair, choose one:

1. Promote `ramă` only and keep `râmă` blocked.
2. Promote `râmă` only and keep `ramă` blocked.
3. Keep both blocked for now and proceed with the other `13` Slice 8 rows.
4. Create a separate schema/validator decision to support both exact words despite the shared normalized form.

Option `4` is a scope-expanding schema/validation change and should not be bundled into a content-promotion batch without explicit approval.

Follow-up: after Batch 105, the human explicitly chose option `4` and asked to promote both `ramă` and `râmă`. Batch 106 records the narrow validator/content-identity decision, Batch 107 records production promotion, and Batch 108 records QA.

## Verification

Batch 105 verification:

```txt
git diff --check
```
