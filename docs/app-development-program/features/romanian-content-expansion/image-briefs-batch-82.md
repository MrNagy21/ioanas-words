# Batch 82 Image Briefs: Slice 2 H/J/Ț Top-Up

Batch: Romanian Content Expansion Batch 82.

Status: review-only image briefs and contact sheet; no production content added.

Last updated: 2026-06-24.

## Scope Guard

Batch 82 creates image briefs and one unlabeled review contact sheet for Batch 81 Slice 2 only. It does not add production JSON records, edit content manifests, crop cells, optimize final WebP assets, change routes, change schema, change loaders, add placeholders, edit shared status docs, add speech-target production metadata, introduce database/auth/billing/admin scope, create clinical claims, or promote any image to child-facing production.

The contact sheet is only a human-review source image. Every cell remains inactive until explicit human image acceptance, cropping/normalization, production WebP optimization, manifest promotion, and full content validation happen in a later batch.

## Contact Sheet

Review contact sheet path:

```txt
assets/image-sources/ro/batch-82/contact-sheet.png
```

Sheet format: 5 columns x 3 rows, equal square cells, unlabeled, row-major order.

Row-major mapping:

| Cell | Row | Column | Display | Stable ID | Planned production image path |
| ---: | ---: | ---: | --- | --- | --- |
| 1 | 1 | 1 | `hamsie` | `ro-h-hamsie` | `/images/ro/h/ro-h-hamsie.webp` |
| 2 | 1 | 2 | `hienă` | `ro-h-hiena` | `/images/ro/h/ro-h-hiena.webp` |
| 3 | 1 | 3 | `homar` | `ro-h-homar` | `/images/ro/h/ro-h-homar.webp` |
| 4 | 1 | 4 | `ham` | `ro-h-ham` | `/images/ro/h/ro-h-ham.webp` |
| 5 | 1 | 5 | `hanorac` | `ro-h-hanorac` | `/images/ro/h/ro-h-hanorac.webp` |
| 6 | 2 | 1 | `hidrant` | `ro-h-hidrant` | `/images/ro/h/ro-h-hidrant.webp` |
| 7 | 2 | 2 | `jurnal` | `ro-j-jurnal` | `/images/ro/j/ro-j-jurnal.webp` |
| 8 | 2 | 3 | `jalon` | `ro-j-jalon` | `/images/ro/j/ro-j-jalon.webp` |
| 9 | 2 | 4 | `jambon` | `ro-j-jambon` | `/images/ro/j/ro-j-jambon.webp` |
| 10 | 2 | 5 | `joystick` | `ro-j-joystick` | `/images/ro/j/ro-j-joystick.webp` |
| 11 | 3 | 1 | `jerseu` | `ro-j-jerseu` | `/images/ro/j/ro-j-jerseu.webp` |
| 12 | 3 | 2 | `țintă` | `ro-tz-tinta` | `/images/ro/ț/ro-tz-tinta.webp` |
| 13 | 3 | 3 | `ținută` | `ro-tz-tinuta` | `/images/ro/ț/ro-tz-tinuta.webp` |
| 14 | 3 | 4 | `țesătură` | `ro-tz-tesatura` | `/images/ro/ț/ro-tz-tesatura.webp` |
| 15 | 3 | 5 | `țâșnitoare` | `ro-tz-tasnitoare` | `/images/ro/ț/ro-tz-tasnitoare.webp` |

## Human Review Notes

- `hamsie`: review child-fit and whether the fish reads as a small anchovy-like fish rather than generic `pește` or `hering`.
- `hienă`: review that the animal is friendly and not scary; no visible aggressive teeth or attack posture.
- `homar`: review distinction from existing `rac`; the lobster claws and tail should read clearly.
- `ham`: harness sense only. The generated cell shows a dog wearing a red harness, which helps disambiguate the word, but the human must confirm it reads as `ham`, not simply `câine`.
- `jurnal`: review that the blank locked notebook reads as diary/journal without relying on text, letters, lines, or labels.
- `jalon`: review whether the cone/marker image is familiar enough for a 4-to-6-year-old and does not read only as a road cone.
- `jambon`: review against `șuncă`/generic ham risk. The generated cell shows sliced ham on a plate; promotion should proceed only if this is distinct enough for the planned vocabulary set.
- `joystick`: review that the controller is generic and unbranded; no logos, labels, button letters, or console-specific design.
- `jerseu`: review that the shirt stays blank. It has sport-style stripe cues but no numbers or team marks.
- `țintă`: review weapon-free framing. The generated cell is a target board with rings and no arrows, darts, impact marks, or weapon cue.
- `ținută`: strict child-fit and thumbnail review. The image shows a child outfit on a hanger; confirm it reads as outfit rather than `salopetă` or generic clothes.
- `țesătură`: strict thumbnail review. The weave/cloth concept may collapse into blanket, scarf, rug, or generic fabric at wheel size.
- `țâșnitoare`: strict child-fit and thumbnail review. Confirm it reads as a drinking fountain with water, not sink, basin, or generic fountain.

## Brand Consistency Review

The Batch 82 contact sheet was visually compared with the accepted Batch 78 H review sheet and the promoted style direction in `docs/image-pipeline.md`.

Observations:

- The sheet keeps the same 5x3 review layout, generous gutters, pale warm/blue square backgrounds, high-clarity pixel-art rendering, and centered subjects used in recent accepted batches.
- Pixel density, local-color outlines, top-left highlights, contact shadows, and subject scale are broadly consistent with Batch 78.
- The most likely review risks are semantic rather than style mismatch: `ham`, `jambon`, `ținută`, `țesătură`, and `țâșnitoare` need explicit human validation before any crop is promoted.
- No comparison contact sheet was committed because this batch request required one unlabeled review contact sheet only.

## Per-Word Briefs

| Stable ID | Display | Planned image path | Romanian alt text | Category | One clear subject | Safety / ambiguity notes |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-h-hamsie` | `hamsie` | `/images/ro/h/ro-h-hamsie.webp` | `O hamsie argintie` | `animal` | Single small silvery anchovy-like fish in side view. | Weaker child-fit reserve word; avoid hook, dead-fish cue, packaging, plate, or confusing extra fish. |
| `ro-h-hiena` | `hienă` | `/images/ro/h/ro-h-hiena.webp` | `O hienă prietenoasă` | `animal` | Friendly hyena standing calmly with rounded body and spotted coat. | Must be gentle and non-scary; no open jaws, aggressive teeth, chase scene, or dark mood. |
| `ro-h-homar` | `homar` | `/images/ro/h/ro-h-homar.webp` | `Un homar simplu` | `animal` | Single red-orange lobster with clear claws and tail. | Needs distinction from `rac`; no plate, cooking pot, restaurant, or food-service framing. |
| `ro-h-ham` | `ham` | `/images/ro/h/ro-h-ham.webp` | `Un ham pentru câine` | `animal` | Dog harness with clear straps, ideally on a simple dog silhouette for meaning. | Harness sense only; must not show food ham, meat, interjection cue, saddle, leash-only image, or abstract rigging. |
| `ro-h-hanorac` | `hanorac` | `/images/ro/h/ro-h-hanorac.webp` | `Un hanorac cu glugă` | `clothing` | Hooded sweatshirt with hood and front pocket. | No logos, text, brand marks, team marks, or adult fashion framing. |
| `ro-h-hidrant` | `hidrant` | `/images/ro/h/ro-h-hidrant.webp` | `Un hidrant roșu` | `household` | Red fire hydrant on simple ground. | No fire emergency, flames, alarms, firefighter scene, or frightening context. |
| `ro-j-jurnal` | `jurnal` | `/images/ro/j/ro-j-jurnal.webp` | `Un jurnal simplu` | `school` | Closed diary/notebook with blank cover and small lock cue. | Must not rely on written text, letters, diary label, or page lines; review against generic notebook confusion. |
| `ro-j-jalon` | `jalon` | `/images/ro/j/ro-j-jalon.webp` | `Un jalon de sport` | `toy` | Bright sports training cone or slalom marker. | Less familiar word; avoid roadwork signage, warning symbols, numbers, or busy field scene. |
| `ro-j-jambon` | `jambon` | `/images/ro/j/ro-j-jambon.webp` | `Felii de jambon` | `food` | Neat sliced ham on a simple plate. | Must not duplicate generic `șuncă` imagery too closely; no packaging, brand, label, butcher counter, or raw-meat cue. |
| `ro-j-joystick` | `joystick` | `/images/ro/j/ro-j-joystick.webp` | `Un joystick simplu` | `toy` | Generic joystick/game controller with plain colored buttons. | No logos, brands, copyrighted console shape, button letters, screen text, or adult gaming context. |
| `ro-j-jerseu` | `jerseu` | `/images/ro/j/ro-j-jerseu.webp` | `Un jerseu colorat` | `clothing` | Blank sports jersey or sweater-like shirt. | No numbers, letters, team logos, sponsor marks, national symbols, or brand stripes that read as a logo. |
| `ro-tz-tinta` | `țintă` | `/images/ro/ț/ro-tz-tinta.webp` | `O țintă rotundă` | `toy` | Harmless round target board with colored rings only. | Weapon-free: no arrows, darts, bows, guns, shooting, impact marks, or aggressive sport cue. |
| `ro-tz-tinuta` | `ținută` | `/images/ro/ț/ro-tz-tinuta.webp` | `O ținută de copil` | `clothing` | Child outfit on hanger or simple mannequin. | Abstract-ish reserve word; review whether it reads as an outfit rather than one garment. No adult fashion pose. |
| `ro-tz-tesatura` | `țesătură` | `/images/ro/ț/ro-tz-tesatura.webp` | `O țesătură colorată` | `household` | Colorful woven fabric swatch with visible weave. | Texture may be too fine for wheel size; avoid sewing tools, labels, pattern text, or confusing blanket/rug framing. |
| `ro-tz-tasnitoare` | `țâșnitoare` | `/images/ro/ț/ro-tz-tasnitoare.webp` | `O țâșnitoare cu apă` | `household` | Drinking fountain with clear water stream. | Long and weaker child-fit row; no text/signs, no puddle hazard, no bathroom sink confusion, no unsafe climbing cue. |

## Generation Prompt

Built-in image generation prompt used:

```txt
Use case: illustration-story
Asset type: review contact sheet for a children's Romanian vocabulary game
Primary request: Create one unlabeled 5 columns x 3 rows contact sheet of high-clarity child-friendly pixel art vocabulary icons. Preserve this exact row-major order: row 1: small anchovy fish, friendly hyena, lobster, dog harness, hoodie. row 2: fire hydrant, diary/notebook, sports training cone marker, distinct sliced jambon ham on plate, generic joystick controller. row 3: blank sports jersey/shirt, harmless round target board, child outfit on hanger, colorful woven fabric swatch, drinking fountain with water stream.
Style/medium: cheerful handcrafted pixel art, refined educational game icon style, visible pixel construction, polished dimensional volume, clean silhouettes, rounded friendly shapes, soft playful colors, local-color outlines, simple top-left highlights, limited internal detail.
Composition/framing: exactly 5 equal square cells by 3 equal square cells, generous gutters between cells, no labels anywhere, no text anywhere. Each cell is a complete square icon with a full pale warm off-white or soft sky-blue background. One centered subject per cell, subject fills about 70% to 82% of its square, with safe margins from all corners so a circular mask would clip only background. No cropped subjects, no partial panels, no side bars.
Cell details: 1 single small silvery anchovy-like fish in side view on simple blue water background, neutral, no hook, no dead fish cue. 2 friendly hyena standing calmly, rounded shape, closed mouth, no scary teeth, no aggressive pose. 3 simple red-orange lobster with clear claws and tail, centered, not a crayfish if possible. 4 dog harness only or harness on a very simple dog silhouette, clear straps and chest loop, must read as animal harness, not food ham, not meat, not clothing. 5 hooded sweatshirt/hoodie with hood and front pocket, blank, no logo. 6 red fire hydrant on simple ground, no fire, no emergency scene. 7 closed diary or simple notebook with plain blank cover and tiny lock cue, no writing, no letters, no lines of text. 8 bright sports training cone or slalom marker on ground, no labels, no numbers. 9 neat slices of jambon ham on a white plate, distinct from generic meat block: rolled or layered pink slices with pale fat edge, no packaging, no brand, no text. 10 generic joystick/game controller stick, simple base and stick with plain colored buttons, no console logo, no button labels. 11 blank sports jersey or sweater-like shirt, no number, no team logo, no letters. 12 harmless round target board with colored rings only, centered, no arrows, no darts, no weapon, no shooting, no impact marks. 13 child outfit on hanger or simple mannequin: shirt plus pants/skirt coordinated, child-friendly colors, no adult fashion pose. 14 colorful woven fabric swatch, visible simple weave texture, folded square cloth, no sewing tools, no labels. 15 drinking fountain with clear water stream, simple school/park fountain shape, no sign, no puddle hazard, no text.
Constraints: children ages 4 to 6, safe and calm, clear at small wheel size, one centered subject per cell, full square backgrounds, circle-mask-safe composition, no letters, no numbers, no signs, no labels, no watermark, no logo, no brand, no copyrighted characters, no photorealism, no smooth CGI, no realistic 3D render, no complex scenery, no clutter, no scary mood, no violence, no weapons, no medical framing, no adult theme.
```

## Generation Metadata

| Field | Value |
| --- | --- |
| Generation date | 2026-06-24 |
| Generation mode | Built-in `image_gen` tool |
| Source output | `/Users/darius/.codex/generated_images/019ef98a-d3b8-7980-9586-49f15374c893/ig_025a9c7d3b143505016a3bc9a97d5c819aae2e6c5b06888cf6.png` |
| Workspace review copy | `assets/image-sources/ro/batch-82/contact-sheet.png` |
| Review copy dimensions | `1536 x 1024` PNG |
| Review copy size | `1,718,547 B` |
| Model/tool metadata | No model name, seed, or prompt revision ID exposed by the built-in tool in this run. |
| Production status | Review-only; no cropped cells or optimized public WebP assets created. |

## Batch 83 Ready-To-Copy Prompt

```txt
You are a bounded worker subagent for the Word Wheel repo at /Users/darius/mrNagySSC/ioana/word-wheel. You are not alone in the codebase: do not revert edits made by others; work with existing changes.

Task: Romanian Content Expansion Batch 83 production promotion for Batch 82 Slice 2 only, but only after explicit human image acceptance.

Required human gate:
- Do not start promotion unless the human has explicitly accepted all cells to promote from `assets/image-sources/ro/batch-82/contact-sheet.png`.
- If any cells are rejected or need correction, do not promote them. Create a bounded corrective-contact-sheet prompt/batch instead, preserving the review-only gate.

Read these files before acting:
- AGENTS.md
- docs/agent-brief.md
- docs/spec.md
- docs/plan.md
- docs/status.md
- docs/image-pipeline.md
- docs/app-development-program/speech-therapy-content-guidance.md
- docs/app-development-program/features/romanian-content-expansion/spec.md
- docs/app-development-program/features/romanian-content-expansion/plan.md
- docs/app-development-program/features/romanian-content-expansion/status.md
- docs/app-development-program/features/romanian-content-expansion/high-value-target-top-up-worksheet-batch-75.md
- docs/app-development-program/features/romanian-content-expansion/implementation-orchestrator-prompt-batch-76.md
- docs/app-development-program/features/romanian-content-expansion/slice-plan-index-batch-76.md
- docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-80.md
- docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-81.md
- docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-82.md

If, and only if, the human explicitly accepts the relevant Batch 82 cells:
- Crop only accepted cells from `assets/image-sources/ro/batch-82/contact-sheet.png` using the documented 5 columns x 3 rows row-major mapping.
- Normalize every accepted crop into a full-square `256 x 256 px` image with no contact-sheet gutters, side bars, corner blocks, or rectangular background artifacts.
- Run circular-mask and thumbnail checks before promotion, with special scrutiny for `ham`, `jambon`, `ținută`, `țesătură`, and `țâșnitoare`.
- Optimize accepted final assets as lossless WebP files under the canonical paths in `/public/images/ro/h/`, `/public/images/ro/j/`, and `/public/images/ro/ț/`.
- Add only accepted words to their canonical production JSON manifests, preserving the planned stable IDs, display spelling, normalized forms, categories, alt text, source/license/status fields, and `imageStatus: "ready"`.
- Do not add placeholders, rejected cells, unaccepted cells, clinical claims, database/auth/billing scope, admin editing, route/schema changes unless validation requires a clearly scoped fixture update.
- Update release/admin data or content-derived compatibility fixtures only if required by existing project patterns/tests.
- Update the appropriate Romanian expansion status docs after promotion.

Verification:
- `pnpm run validate:content`
- `pnpm run lint`
- `pnpm exec tsc --noEmit --incremental false`
- `pnpm run check:gameplay`
- `pnpm run check:matching`
- `pnpm run check:setup-storage`
- `pnpm run build`
- `git diff --check`

Browser/route checks after promotion, using the expected existing dev server on `http://localhost:3000` only:
- `/ro`
- `/admin/words`
- `/admin/releases/2`
- `/ro/play/h`
- `/ro/play/j`
- `/ro/play/tz`
- representative new image URLs under `/images/ro/h/`, `/images/ro/j/`, and `/images/ro/ț/`

If sandboxed commands cannot reach localhost or need environment/network access, retry outside the sandbox with approval before concluding unavailable. Do not start another dev server or use another port.
```
