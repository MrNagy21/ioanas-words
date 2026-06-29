# Batch 81 Production Slice Planning: Slice 2 H/J/Ț Top-Up

Batch: Romanian Content Expansion Batch 81.

Status: planning-only for Slice 2; no production content added.

Last updated: 2026-06-24.

## Scope Guard

Batch 81 is planning-only for Slice 2 from `slice-plan-index-batch-76.md`. It does not add production JSON records, content files, image assets, placeholders, route or schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Slice 2 words, preserving Batch 76 order:

`hamsie`, `hienă`, `homar`, `ham`, `hanorac`, `hidrant`, `jurnal`, `jalon`, `jambon`, `joystick`, `jerseu`, `țintă`, `ținută`, `țesătură`, `țâșnitoare`

Rows stay inactive until a later image-brief/contact-sheet batch, explicit human image review, production promotion, and content validation.

## Source, Spelling, And Duplicate Checks

Source basis:

- Batch 75 marked all Slice 2 rows as `priority` or `reserve`, not `hold`.
- Batch 76 selected these rows for Slice 2 and recorded the main risks: `ham` dog-harness ambiguity, `jambon` overlap with `șuncă`, borrowed-word review for `joystick`, weapon-free framing for `țintă`, and strict child-fit checks for `ținută`, `țesătură`, and `țâșnitoare`.
- Direct dexonline pages were checked for the planned spellings on 2026-06-24. `joystick` is recorded by dexonline from DOOM 3 with English origin and Romanian pluralization. `ham` has multiple entries; this slice must use only the harness/curea sense, not the interjection or unrelated entries.

Source labels:

- `S1` dexonline `hamsie`: https://dexonline.ro/definitie/hamsie
- `S2` dexonline `hienă`: https://dexonline.ro/definitie/hien%C4%83
- `S3` dexonline `homar`: https://dexonline.ro/definitie/homar
- `S4` dexonline `ham`: https://dexonline.ro/definitie/ham
- `S5` dexonline `hanorac`: https://dexonline.ro/definitie/hanorac
- `S6` dexonline `hidrant`: https://dexonline.ro/definitie/hidrant
- `S7` dexonline `jurnal`: https://dexonline.ro/definitie/jurnal
- `S8` dexonline `jalon`: https://dexonline.ro/definitie/jalon
- `S9` dexonline `jambon`: https://dexonline.ro/definitie/jambon
- `S10` dexonline `joystick`: https://dexonline.ro/definitie/joystick
- `S11` dexonline `jerseu`: https://dexonline.ro/definitie/jerseu
- `S12` dexonline `țintă`: https://dexonline.ro/definitie/%C8%9Bint%C4%83
- `S13` dexonline `ținută`: https://dexonline.ro/definitie/%C8%9Binut%C4%83
- `S14` dexonline `țesătură`: https://dexonline.ro/definitie/%C8%9Bes%C4%83tur%C4%83
- `S15` dexonline `țâșnitoare`: https://dexonline.ro/definitie/%C8%9B%C3%A2%C8%99nitoare

Duplicate and collision checks:

```txt
Candidate exact words: hamsie, hienă, homar, ham, hanorac, hidrant, jurnal, jalon, jambon, joystick, jerseu, țintă, ținută, țesătură, țâșnitoare
Checked against all current content/ro/words-*.json rows by exact word/display and normalized form.
Result: no exact word/display collisions and no normalized collisions.
```

Current baseline coverage before Slice 2 planning:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `H` | 18 | 64 | 82 |
| `J` | 10 | 11 | 21 |
| `Ț` | 10 | 44 | 54 |

If all Slice 2 rows are later promoted with ready images, the direct starts-with deltas would be `H +6`, `J +5`, and `Ț +4`. `țâșnitoare` would also add a useful contains occurrence for `Ș`, but it remains a strict child-fit/imageability risk.

## Planning Decisions

- All `15` Slice 2 rows remain active planning candidates.
- No row is blocked at this planning stage.
- `ham` is allowed only in the animal harness sense. Image work must show a simple dog harness or animal harness clearly enough for children and must avoid food/ham, interjection, or abstract harness rigging confusion.
- `hamsie`, `hienă`, `homar`, and `hidrant` are accepted reserve rows but are weaker preschool vocabulary than the strongest `H` rows; keep image briefs concrete and simple.
- `jambon` is source-supported but overlaps conceptually with `șuncă` / ham imagery. If promoted later, it needs a distinct sliced-ham image and should not duplicate a future or existing ham image.
- `joystick` is a borrowed tech word; keep it active because it is source-supported and imageable, but it needs generic unbranded game-controller framing.
- `țintă` must be a harmless target board or toy/sports target only. No weapon, arrow impact, dart throw, or shooting framing.
- `ținută`, `țesătură`, and `țâșnitoare` remain quality-limited reserve rows. They need strict human review for child familiarity, one-image clarity, and wheel thumbnail readability before any production promotion.

## Planned Canonical Rows

All future production rows should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only if promoted with a reviewed final `256 x 256 px` WebP image. Do not promote any row without its accepted final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Part of speech | Difficulty | Age band | Source plan | Alt text direction |
| ---: | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| 1 | `hamsie` | `content/ro/words-h.json` | `ro-h-hamsie` | `/images/ro/h/ro-h-hamsie.webp` | `hamsie` | `animal` | `noun` | 3 | `4-6` | `S1`, manual, app-owned, approved only with ready image | `O hamsie argintie` |
| 2 | `hienă` | `content/ro/words-h.json` | `ro-h-hiena` | `/images/ro/h/ro-h-hiena.webp` | `hiena` | `animal` | `noun` | 3 | `4-6` | `S2`, manual, app-owned, approved only with ready image | `O hienă prietenoasă` |
| 3 | `homar` | `content/ro/words-h.json` | `ro-h-homar` | `/images/ro/h/ro-h-homar.webp` | `homar` | `animal` | `noun` | 3 | `4-6` | `S3`, manual, app-owned, approved only with ready image | `Un homar simplu` |
| 4 | `ham` | `content/ro/words-h.json` | `ro-h-ham` | `/images/ro/h/ro-h-ham.webp` | `ham` | `animal` | `noun` | 3 | `4-6` | `S4`, manual, app-owned, approved only with ready image | `Un ham pentru câine` |
| 5 | `hanorac` | `content/ro/words-h.json` | `ro-h-hanorac` | `/images/ro/h/ro-h-hanorac.webp` | `hanorac` | `clothing` | `noun` | 2 | `4-6` | `S5`, manual, app-owned, approved only with ready image | `Un hanorac cu glugă` |
| 6 | `hidrant` | `content/ro/words-h.json` | `ro-h-hidrant` | `/images/ro/h/ro-h-hidrant.webp` | `hidrant` | `household` | `noun` | 3 | `4-6` | `S6`, manual, app-owned, approved only with ready image | `Un hidrant roșu` |
| 7 | `jurnal` | `content/ro/words-j.json` | `ro-j-jurnal` | `/images/ro/j/ro-j-jurnal.webp` | `jurnal` | `school` | `noun` | 3 | `4-6` | `S7`, manual, app-owned, approved only with ready image | `Un jurnal simplu` |
| 8 | `jalon` | `content/ro/words-j.json` | `ro-j-jalon` | `/images/ro/j/ro-j-jalon.webp` | `jalon` | `toy` | `noun` | 3 | `4-6` | `S8`, manual, app-owned, approved only with ready image | `Un jalon de sport` |
| 9 | `jambon` | `content/ro/words-j.json` | `ro-j-jambon` | `/images/ro/j/ro-j-jambon.webp` | `jambon` | `food` | `noun` | 3 | `4-6` | `S9`, manual, app-owned, approved only with ready image | `Felii de jambon` |
| 10 | `joystick` | `content/ro/words-j.json` | `ro-j-joystick` | `/images/ro/j/ro-j-joystick.webp` | `joystick` | `toy` | `noun` | 3 | `4-6` | `S10`, manual, app-owned, approved only with ready image | `Un joystick simplu` |
| 11 | `jerseu` | `content/ro/words-j.json` | `ro-j-jerseu` | `/images/ro/j/ro-j-jerseu.webp` | `jerseu` | `clothing` | `noun` | 3 | `4-6` | `S11`, manual, app-owned, approved only with ready image | `Un jerseu colorat` |
| 12 | `țintă` | `content/ro/words-ț.json` | `ro-tz-tinta` | `/images/ro/ț/ro-tz-tinta.webp` | `tinta` | `toy` | `noun` | 3 | `4-6` | `S12`, manual, app-owned, approved only with ready image | `O țintă rotundă` |
| 13 | `ținută` | `content/ro/words-ț.json` | `ro-tz-tinuta` | `/images/ro/ț/ro-tz-tinuta.webp` | `tinuta` | `clothing` | `noun` | 3 | `4-6` | `S13`, manual, app-owned, approved only with ready image | `O ținută de copil` |
| 14 | `țesătură` | `content/ro/words-ț.json` | `ro-tz-tesatura` | `/images/ro/ț/ro-tz-tesatura.webp` | `tesatura` | `household` | `noun` | 3 | `4-6` | `S14`, manual, app-owned, approved only with ready image | `O țesătură colorată` |
| 15 | `țâșnitoare` | `content/ro/words-ț.json` | `ro-tz-tasnitoare` | `/images/ro/ț/ro-tz-tasnitoare.webp` | `tasnitoare` | `household` | `noun` | 3 | `4-6` | `S15`, manual, app-owned, approved only with ready image | `O țâșnitoare cu apă` |

## Speech Target And Image Brief Planning

| Display | Primary target | Secondary targets | Target positions | Syllables | Clusters | Image brief direction | Risks and notes |
| --- | --- | --- | --- | ---: | --- | --- | --- |
| `hamsie` | `H` | `S` | `H` initial; `S` medial | 3 | none | Single small silvery anchovy-like fish in side view, simple water background, no hook or dead-fish cue. | Less child-known than generic fish; keep if human image review accepts reserve vocabulary. |
| `hienă` | `H` | none | `H` initial | 2 | none | Friendly hyena standing calmly, rounded shape, no teeth or aggressive pose. | Animal can read scary; image must be gentle. |
| `homar` | `H` | `M`, `R` | `H` initial; `M` medial; `R` final | 2 | none | Simple lobster in warm red/orange, centered, friendly neutral style. | May overlap with existing `rac`; image should show lobster claws and tail clearly. |
| `ham` | `H` | `M` | `H` initial; `M` final | 1 | none | Dog harness on a simple dog silhouette or standalone harness with clear straps. | Ambiguous word; block later if image reads as food ham or is too abstract. |
| `hanorac` | `H` | `R`, `C` | `H` initial; `R/C` medial/final | 3 | none | Hoodie/hooded sweatshirt, zipper or pocket optional, no logos or text. | Strongest row in this slice for child clothing familiarity. |
| `hidrant` | `H` | `D`, `R`, `T` | `H` initial; `D/R` medial; `T` final | 2 | `dr`, `nt` | Red fire hydrant, simple street/ground cue, no fire emergency scene. | Urban-specific but concrete; avoid alarming fire context. |
| `jurnal` | `J` | `R`, `L` | `J` initial; `R` medial; `L` final | 2 | `rn` | Closed diary/notebook with blank cover, maybe simple lock, no visible writing. | Could read as generic notebook; needs diary cue without text. |
| `jalon` | `J` | `L`, `N` | `J` initial; `L` medial; `N` final | 2 | none | Bright sports training cone/marker on simple ground. | Less familiar word; image should be a common school/sports cone marker. |
| `jambon` | `J` | `M`, `B`, `N` | `J` initial; `M/B` medial; `N` final | 2 | `mb` | Simple slices of ham on a plate, no packaging, no brand, no duplicate with future `șuncă`. | Overlaps with ham/șuncă imagery; human review should decide if distinct enough. |
| `joystick` | `J` | none | `J` initial | 2 | none | Generic joystick/game controller, no console logo, no button labels, no brand. | Borrowed tech word; source-supported but less core preschool vocabulary. |
| `jerseu` | `J` | `S` | `J` initial; `S` medial | 2 | none | Soft sports jersey or sweater-like shirt, blank front, no number, no team logo. | Avoid branded/team sports identifiers and readable text. |
| `țintă` | `Ț` | `T`, `Ă` | `Ț` initial; `T` medial; `Ă` final | 2 | none | Round target board with colored rings only, centered. | No arrows, darts, weapons, shooting, or impact marks. |
| `ținută` | `Ț` | `N`, `T`, `Ă` | `Ț` initial; `N/T` medial; `Ă` final | 3 | none | Child outfit on hanger or mannequin, simple coordinated clothes, no fashion/adult framing. | Abstract-ish clothing concept; strict imageability and child-fit review needed. |
| `țesătură` | `Ț` | `S`, `T`, `R`, `Ă` | `Ț` initial; `S/T/R` medial; `Ă` final | 4 | none | Colorful woven fabric swatch with simple visible weave, no sewing tools required. | Texture can be hard at wheel size; block later if it reads as blanket/rug/fabric generically. |
| `țâșnitoare` | `Ț` | `Ș`, `T`, `R` | `Ț` initial; `Ș/T/R` medial | 4 | `șn` | Drinking fountain or water fountain with clear water stream, no text/signs. | Long and less common; image must be clear and safe, no slippery water spill. |

## Route, Loader, And Validation Impact

Planning-only Batch 81 has no immediate route, loader, schema, content validation, gameplay, matching, setup-storage, build, or browser-route impact.

If later promoted, affected manifests and routes are:

- `content/ro/words-h.json` and `/ro/play/h`
- `content/ro/words-j.json` and `/ro/play/j`
- `content/ro/words-ț.json` and `/ro/play/tz`

Final public images would be added under `public/images/ro/h/`, `public/images/ro/j/`, and `public/images/ro/ț/` with paths matching the planned IDs. No new route aliases, letter manifests, loaders, or schema fields should be needed.

Promotion validation must verify:

- schema shape and required metadata;
- unique IDs and normalized values;
- canonical `h`, `j`, and `ț` letter bucket placement;
- `word`, `display`, `normalized`, `id`, and image path consistency;
- `source`, `license`, `status`, and `imageStatus` values;
- image paths exist for all approved rows;
- final images are `.webp`, `256 x 256 px`, and within documented size limits;
- no placeholder image is introduced;
- `/ro/play/h`, `/ro/play/j`, `/ro/play/tz`, `/admin/words`, and `/admin/releases/2` reflect the promoted rows after production changes.

## Localhost Follow-Up From Batch 80

After the user started the dev server, Batch 80 localhost route QA was retried outside the sandbox on 2026-06-24 and passed:

- `http://localhost:3000/ro` returned `200 OK`.
- `http://localhost:3000/admin/words` returned `200 OK`.
- `http://localhost:3000/admin/releases/2` returned `200 OK`.
- `http://localhost:3000/ro/play/h` returned `200 OK`.
- Representative Batch 79 image URLs for `horn`, `hol`, `horă`, `hochei`, and `hering` returned `200 OK` with `Content-Type: image/webp`.

The sandboxed localhost probe still failed to connect, so outside-sandbox retry was required. No alternate dev server or port was started.

## Active Image-Brief Candidate List

No rows are blocked in Batch 81. Active candidates for the next image-brief/contact-sheet batch, preserving order:

1. `hamsie`
2. `hienă`
3. `homar`
4. `ham`
5. `hanorac`
6. `hidrant`
7. `jurnal`
8. `jalon`
9. `jambon`
10. `joystick`
11. `jerseu`
12. `țintă`
13. `ținută`
14. `țesătură`
15. `țâșnitoare`

## Ready-To-Copy Next Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 82.

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

Task: Batch 82 image briefs and one unlabeled contact sheet for Batch 81 Slice 2 only.

Create image briefs and one unlabeled review contact sheet for these active Slice 2 candidates, preserving order:
hamsie, hienă, homar, ham, hanorac, hidrant, jurnal, jalon, jambon, joystick, jerseu, țintă, ținută, țesătură, țâșnitoare.

Constraints:
- Do not edit production JSON, content manifests, route/schema/loader code, shared status docs, or public production WebP assets.
- Do not crop cells or optimize final assets.
- Do not add placeholders.
- Do not make clinical claims.
- Follow docs/image-pipeline.md: high-clarity child-friendly pixel art, square cells, full square backgrounds or transparency, no text, no numbers, no logos, no brands, no copyrighted characters, one centered subject per cell, clear at wheel size, and circular-mask-safe composition.
- Pay special attention to risks recorded in production-slice-planning-batch-81.md: `ham` must show harness sense only; `jambon` must not duplicate generic ham/șuncă imagery; `joystick` must be generic and unbranded; `țintă` must be weapon-free; `ținută`, `țesătură`, and `țâșnitoare` need strict child-fit and thumbnail-readability review.
- Stop after creating the review contact sheet and brief document. Ask for human image validation before any production promotion.

After writing, run git diff --check and report changed files plus verification results.
```

## Verification

Batch 81 is documentation-only. Verification passed on 2026-06-24:

```txt
git diff --check
```
