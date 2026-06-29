# Batch 78 Image Briefs: Slice 1 H Starts-With Top-Up

Batch: Romanian Content Expansion Batch 78.

Status: review-only image briefs and contact sheet; no production content added.

Last updated: 2026-06-23.

## Scope Guard

Batch 78 creates image briefs and one unlabeled review contact sheet for Batch 77 Slice 1 only. It does not add production JSON records, edit content manifests, crop cells, optimize final WebP assets, change routes, change schema, change loaders, add placeholders, edit shared status docs, add speech-target production metadata, introduce database/auth/billing/admin scope, create clinical claims, or promote any image to child-facing production.

The contact sheet is only a human-review source image. Every cell remains inactive until explicit human image acceptance, cropping/normalization, production WebP optimization, manifest promotion, and full content validation happen in a later batch.

## Contact Sheet

Review contact sheet path:

```txt
assets/image-sources/ro/batch-78/contact-sheet.png
```

Sheet format: 5 columns x 3 rows, equal square cells, unlabeled, row-major order.

Row-major mapping:

| Cell | Row | Column | Display | Stable ID | Planned production image path |
| ---: | ---: | ---: | --- | --- | --- |
| 1 | 1 | 1 | `hipopotam` | `ro-h-hipopotam` | `/images/ro/h/ro-h-hipopotam.webp` |
| 2 | 1 | 2 | `hârtie` | `ro-h-hartie` | `/images/ro/h/ro-h-hartie.webp` |
| 3 | 1 | 3 | `hotel` | `ro-h-hotel` | `/images/ro/h/ro-h-hotel.webp` |
| 4 | 1 | 4 | `halat` | `ro-h-halat` | `/images/ro/h/ro-h-halat.webp` |
| 5 | 1 | 5 | `harpă` | `ro-h-harpa` | `/images/ro/h/ro-h-harpa.webp` |
| 6 | 2 | 1 | `horn` | `ro-h-horn` | `/images/ro/h/ro-h-horn.webp` |
| 7 | 2 | 2 | `hamster` | `ro-h-hamster` | `/images/ro/h/ro-h-hamster.webp` |
| 8 | 2 | 3 | `hambar` | `ro-h-hambar` | `/images/ro/h/ro-h-hambar.webp` |
| 9 | 2 | 4 | `husă` | `ro-h-husa` | `/images/ro/h/ro-h-husa.webp` |
| 10 | 2 | 5 | `hol` | `ro-h-hol` | `/images/ro/h/ro-h-hol.webp` |
| 11 | 3 | 1 | `horă` | `ro-h-hora` | `/images/ro/h/ro-h-hora.webp` |
| 12 | 3 | 2 | `hochei` | `ro-h-hochei` | `/images/ro/h/ro-h-hochei.webp` |
| 13 | 3 | 3 | `hublou` | `ro-h-hublou` | `/images/ro/h/ro-h-hublou.webp` |
| 14 | 3 | 4 | `hamburger` | `ro-h-hamburger` | `/images/ro/h/ro-h-hamburger.webp` |
| 15 | 3 | 5 | `hering` | `ro-h-hering` | `/images/ro/h/ro-h-hering.webp` |

## Human Review Notes

- `hârtie`: review that the image reads as blank paper, not `hartă`; no visible writing, markings, letters, numbers, or map lines.
- `halat`: review that the image reads as bathrobe, not a lab coat or other medical garment.
- `horn`: review that the image reads as chimney on a roof, not a musical horn.
- `husă`: review whether the protective cover/case concept is clear enough for a 4-to-6-year-old without labels or brand cues.
- `hol`: review whether the hallway scene stays recognizable at wheel size and does not collapse into a generic room/interior.
- `horă`: review person/scene style consistency, circular-mask safety, and whether the circle-dance meaning is clear without flags, labels, or costume dependency.
- `hublou`: review whether the round porthole/window meaning is clear enough and not confused with a generic round window.
- `hamburger`: review that the burger is generic and unbranded, with no wrapper, logo, or fast-food cue.
- `hering`: review child-fit carefully. The image should be a neutral fish, but the word is a weaker reserve row than generic fish vocabulary.

## Per-Word Briefs

| Stable ID | Display | Planned image path | Romanian alt text | Category | One clear subject | Safety / ambiguity notes |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-h-hipopotam` | `hipopotam` | `/images/ro/h/ro-h-hipopotam.webp` | `Un hipopotam prietenos` | `animal` | Friendly side-view hippopotamus with rounded body. | Keep non-scary; avoid open aggressive mouth, sharp teeth, or attack framing. |
| `ro-h-hartie` | `hârtie` | `/images/ro/h/ro-h-hartie.webp` | `O foaie de hârtie albă` | `school` | Blank sheet of paper or small blank paper stack. | Must not look like `hartă`; no map marks, writing, letters, or numbers. |
| `ro-h-hotel` | `hotel` | `/images/ro/h/ro-h-hotel.webp` | `Un hotel simplu` | `household` | Simple friendly hotel building with windows and a bed/luggage cue. | No text sign, logo, brand, or tiny unreadable details; avoid reading as generic house if possible. |
| `ro-h-halat` | `halat` | `/images/ro/h/ro-h-halat.webp` | `Un halat de baie` | `clothing` | Soft bathrobe on a hanger or standing open with belt visible. | Bathrobe sense only; avoid lab coat, doctor, hospital, or medical framing. |
| `ro-h-harpa` | `harpă` | `/images/ro/h/ro-h-harpa.webp` | `O harpă aurie` | `toy` | Single harp instrument with strong silhouette and simple strings. | Current production schema has no `music` category, so promotion should use `toy`; strings must stay readable at thumbnail size; no musician, stage text, or ornate clutter. |
| `ro-h-horn` | `horn` | `/images/ro/h/ro-h-horn.webp` | `Un horn pe acoperiș` | `household` | Chimney on a simple roof with optional tiny smoke puff. | Chimney sense only; avoid musical horn, fire, soot-heavy scene, or dangerous cues. |
| `ro-h-hamster` | `hamster` | `/images/ro/h/ro-h-hamster.webp` | `Un hamster mic` | `animal` | Cute hamster sitting with paws visible. | Avoid cage bars, wheel clutter, or making the animal too mascot-like. |
| `ro-h-hambar` | `hambar` | `/images/ro/h/ro-h-hambar.webp` | `Un hambar roșu` | `household` | Simple barn or grain-store building. | Rural stretch row; no text signs or busy farm scene; human review should confirm child recognizability. |
| `ro-h-husa` | `husă` | `/images/ro/h/ro-h-husa.webp` | `O husă simplă` | `household` | Protective cover or case for one simple object. | Concept can be abstract; avoid logos, device brands, and vague folded fabric that does not read as a cover. |
| `ro-h-hol` | `hol` | `/images/ro/h/ro-h-hol.webp` | `Un hol luminos` | `household` | Bright simple hallway with doors and floor perspective. | Room/space scenes can be vague at wheel size; keep minimal and uncluttered, no signs or labels. |
| `ro-h-hora` | `horă` | `/images/ro/h/ro-h-hora.webp` | `Copii dansând horă` | `people` | Small group of friendly figures holding hands in a circle dance. | Current production schema has no `music` category, so promotion should use `people`; no flags, national symbols, costume dependence, or stereotypes; strict thumbnail review needed. |
| `ro-h-hochei` | `hochei` | `/images/ro/h/ro-h-hochei.webp` | `O crosă de hochei și un puc` | `toy` | Hockey stick and puck on ice. | Current production schema has no `sport` category, so promotion should use `toy`; no player collision, aggressive sport action, team logos, jersey text, or brand marks. |
| `ro-h-hublou` | `hublou` | `/images/ro/h/ro-h-hublou.webp` | `Un hublou rotund` | `vehicle` | Round porthole window with simple blue water or sky view. | Stretch word; must not become a generic decorative round window or branded vehicle detail. |
| `ro-h-hamburger` | `hamburger` | `/images/ro/h/ro-h-hamburger.webp` | `Un hamburger simplu` | `food` | Generic burger with bun, patty, lettuce, and cheese. | No wrapper, text, logo, fast-food brand cue, or excessive filling detail. |
| `ro-h-hering` | `hering` | `/images/ro/h/ro-h-hering.webp` | `Un pește hering` | `animal` | Single silvery herring fish in side view. | Weaker child-fit reserve word; no hook, dead-fish cue, scary expression, or confusing extra fish. |

## Generation Prompt

Built-in image generation prompt used:

```txt
Use case: illustration-story
Asset type: review contact sheet for a children's Romanian vocabulary game
Primary request: Create one unlabeled 5 columns x 3 rows contact sheet of high-clarity child-friendly pixel art vocabulary icons. Preserve this exact row-major order: row 1: hippopotamus, plain sheet of paper, simple hotel building, bathrobe, harp. row 2: chimney on roof, hamster, barn/grain store, protective cover/case, bright hallway. row 3: circle dance, hockey stick and puck, round porthole window, generic hamburger, herring fish.
Style/medium: cheerful handcrafted pixel art, refined educational game icon style, visible pixel construction, polished dimensional volume, clean silhouettes, rounded friendly shapes, soft playful colors, local-color outlines, simple top-left highlights, limited internal detail.
Composition/framing: exactly 5 equal square cells by 3 equal square cells, generous gutters between cells, no labels anywhere, no text anywhere. Each cell is a complete square icon with a full pale warm off-white or soft sky-blue background. One centered subject per cell, subject fills about 70% to 82% of its square, with safe margins from all corners so a circular mask would clip only background. No cropped subjects, no partial panels, no side bars.
Cell details: 1 hippopotamus friendly side view, rounded body, closed mouth or tiny smile, no aggressive teeth. 2 one clean blank white paper sheet or tiny stack, no markings, no map lines, no writing. 3 simple friendly hotel building with windows and a subtle bed or luggage cue, no sign text. 4 soft bathrobe on hanger or standing open with belt visible, not a lab coat, not medical. 5 single harp instrument with strong golden/wood silhouette and simple strings. 6 small chimney on a simple roof with a tiny smoke puff, not a musical horn, no fire. 7 cute hamster sitting with paws visible, no cage bars. 8 simple red barn or grain store building, uncluttered rural cue, no text. 9 clear protective cover/case for a tablet or phone, no device logo, visually reads as a removable case/cover. 10 bright simple hallway with door shapes and floor perspective, minimal details. 11 simple friendly children or abstract child-like figures holding hands in a circle dance, no flags, no costumes required, no national symbols. 12 hockey stick and puck on ice, no player collision, no team logos. 13 round porthole window with blue water/sky view, centered, no plane or ship branding. 14 generic burger with bun, patty, lettuce, cheese, no wrapper, no logo, no fast-food brand cues. 15 single silvery herring fish in side view on simple blue water background, neutral friendly, no hook, no dead-fish cue.
Constraints: children ages 4 to 6, safe and calm, clear at small wheel size, one centered subject per cell, full square backgrounds, circle-mask-safe composition, no letters, no numbers, no signs, no labels, no watermark, no logo, no brand, no copyrighted characters, no photorealism, no smooth CGI, no realistic 3D render, no complex scenery, no clutter, no scary mood, no violence, no weapons, no medical framing, no adult theme.
```

## Generation Metadata

| Field | Value |
| --- | --- |
| Generation date | 2026-06-23 |
| Generation mode | Built-in `image_gen` tool |
| Source output | `/Users/darius/.codex/generated_images/019ef5dd-cde7-7b12-bad4-33080734d8f9/ig_056c22da03d893a8016a3ad8ac7f8c8191b72715b80459bff2.png` |
| Workspace review copy | `assets/image-sources/ro/batch-78/contact-sheet.png` |
| Review copy dimensions | `1536 x 1024` PNG |
| Model/tool metadata | No model name, seed, or prompt revision ID exposed by the built-in tool in this run. |
| Production status | Review-only; no cropped cells or optimized public WebP assets created. |

## Batch 79 Ready-To-Copy Prompt

```txt
You are a bounded worker subagent for the Word Wheel repo at /Users/darius/mrNagySSC/ioana/word-wheel. You are not alone in the codebase: do not revert edits made by others; work with existing changes.

Task: Romanian Content Expansion Batch 79 production promotion for Batch 78 Slice 1 only, but only after explicit human image acceptance.

Required human gate:
- Do not start promotion unless the human has explicitly accepted all cells to promote from `assets/image-sources/ro/batch-78/contact-sheet.png`.
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
- docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-77.md
- docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-78.md

If, and only if, the human explicitly accepts the relevant Batch 78 cells:
- Crop only accepted cells from `assets/image-sources/ro/batch-78/contact-sheet.png` using the documented 5 columns x 3 rows row-major mapping.
- Normalize every accepted crop into a full-square `256 x 256 px` image with no contact-sheet gutters, side bars, corner blocks, or rectangular background artifacts.
- Run circular-mask and thumbnail checks before promotion.
- Optimize accepted final assets as lossless WebP files under the canonical paths in `/public/images/ro/h/`.
- Add only accepted words to `content/ro/words-h.json`, preserving the planned stable IDs, display spelling, normalized forms, categories, alt text, source/license/status fields, and `imageStatus: "ready"`.
- Do not add placeholders, rejected cells, unaccepted cells, clinical claims, database/auth/billing scope, admin editing, route/schema changes unless validation requires a clearly scoped fixture update.
- Update release/admin data or content-derived compatibility fixtures only if required by existing project patterns/tests.
- Update the appropriate Romanian expansion status docs after promotion; do not skip the parent/orchestrator-owned status updates if this is run as an orchestrated promotion batch.

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
- representative new image URLs under `/images/ro/h/`

If sandboxed commands cannot reach localhost or need environment/network access, retry outside the sandbox with approval before concluding unavailable. Do not start another dev server or use another port.
```
