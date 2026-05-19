# Batch 37 Image Briefs And Corrective Planning

Batch: Romanian Content Expansion Batch 37.

Spec date: 2026-05-18.

Status: Image briefs written after human decisions. No images have been generated or promoted in this document.

## Human Decisions Recorded

The human approved normal reviewed images for person/family records rather than leaving them placeholder-backed. These should be ordinary child-safe pixel-art people or family-role images, not symbolic placeholder icons.

The human approved child-safe fantasy imagery.

The human approved `zmeu` as the toy kite sense for child-facing imagery.

The human approved image work for `gimnastică` and `pluș`, with `pluș` represented by a teddy bear.

The human approved removing `ghicitoare`, `miez`, and `stinghie` from gameplay. Batch 37 records this by changing their production status from `approved` to `rejected`, preserving the manifest rows as an audit trail.

The spoken `Capea` or `Kapia` note remains unresolved. No current production word ID matches it, so no vocabulary row or asset is changed for that note.

The human approved corrective regeneration for the five flagged ready images: `ro-r-robinet`, `ro-a-aripa`, `ro-c-coaja`, `ro-e-esarfa`, and `ro-g-girafa`.

## Shared Style Requirements

Use the established image pipeline in `docs/image-pipeline.md`.

All generated or regenerated images must be:

- high-clarity, refined dimensional pixel art;
- one centered subject per square image;
- recognizable at wheel thumbnail size;
- child-safe for ages 4 to 6;
- free of text, letters, numbers, logos, brands, watermarks, copyrighted characters, unsafe scenes, and frightening details;
- visually compatible with the on-brand reference set in `docs/image-pipeline.md`;
- final `256 x 256 px` WebP assets below the `20 KB` hard maximum after review and optimization.

Before accepting any replacement, create a comparison sheet against the documented on-brand examples and reject or regenerate anything visibly coarser, flatter, lower-detail, more mascot-like, more emoji-like, more vector-like, or otherwise off-brand.

## Person And Family Image Convention

Use normal, friendly, simplified pixel-art people. Avoid photorealistic facial detail, strong ethnicity coding, branded clothing, stereotypes, exaggerated gender cues, disability stereotypes, or assumptions about one required family structure.

Images may use varied skin tones, hair colors, and clothing colors across the group, but each individual image should remain simple and readable. Do not add text labels, flags, religious symbols, or cultural markers that are not required by the word.

For family roles, show the role clearly through age/context cues while keeping the person warm and generic. For children, keep the child-friendly figure natural and non-caricatured. For action/group words, use the minimum number of people needed to make the concept clear.

| Word ID | Word | Brief |
| --- | --- | --- |
| `ro-b-bebelus` | `bebeluș` | One smiling baby wrapped in a simple blanket or sitting safely, rounded child-safe features, no crib branding, no realistic infant detail. |
| `ro-b-bunic` | `bunic` | One friendly grandfather figure, simple older-adult cues such as gray hair, soft sweater, and warm expression; avoid frailty stereotypes. |
| `ro-b-bunica` | `bunică` | One friendly grandmother figure, simple older-adult cues such as gray hair and warm clothing; avoid caricature or frailty stereotypes. |
| `ro-b-baietel` | `băiețel` | One young boy standing or waving, simple everyday clothing, friendly neutral pose, no toy brand or text. |
| `ro-e-echipa` | `echipă` | A small group of three children standing together as a team, varied clothing colors, no uniforms with numbers or logos. |
| `ro-f-fetita` | `fetiță` | One young girl standing or waving, simple everyday clothing, friendly neutral pose, no princess/copyright character styling. |
| `ro-f-frizura` | `frizură` | One simplified head-and-hair icon focused on a clear hairstyle, no salon text, no face detail beyond what helps readability. |
| `ro-g-gemeni` | `gemeni` | Two young children side by side, similar age and friendly posture; avoid implying they must have identical clothing, gender, or features. |
| `ro-g-gimnast` | `gimnast` | One child gymnast in a simple athletic pose on a mat, safe non-extreme posture, no competition logos or numbers. |
| `ro-t-tata` | `tata` | One friendly father figure, simple adult clothing and warm expression; avoid narrow age, ethnicity, or family stereotypes. |
| `ro-i-circ-imbratisare` | `îmbrățișare` | Two simplified people sharing a gentle hug, warm and safe, no romantic cues, no family-structure assumptions. |

## Child-Safe Fantasy Image Convention

Fantasy images should be storybook-like but calm. Avoid frightening scale, dark magic, weapons, combat, monsters, horror motifs, copyrighted-character cues, or branded costume details.

| Word ID | Word | Brief |
| --- | --- | --- |
| `ro-g-gigant` | `gigant` | One friendly oversized storybook person shown calmly beside a small tree or hill for scale, no menace, no angry expression. |
| `ro-m-magie` | `magie` | A simple magic wand with small soft sparkles, no text, no dark effects, no scene clutter. |
| `ro-m-magician` | `magician` | One friendly stage magician with simple hat and wand, no copyrighted costume cues, no playing-card text or symbols. |
| `ro-u-unicorn` | `unicorn` | One friendly unicorn with clear horn and simple mane, natural animal pose, no rainbow overload or copyrighted-character styling. |
| `ro-z-zana` | `zână` | One friendly fairy-like figure with small wings and simple dress, no wand if it makes the image too close to `magie`, no copyrighted princess/fairy cues. |
| `ro-i-circ-imparat` | `împărat` | One friendly storybook emperor with crown and robe, no national symbols, no military pose, no threatening authority cues. |

## Additional Approved Placeholder Replacements

| Word ID | Word | Brief |
| --- | --- | --- |
| `ro-z-zmeu` | `zmeu` | One colorful toy kite in the air or centered as an object, visible string tail, no dragon, no fantasy creature. |
| `ro-g-gimnastica` | `gimnastică` | A simple gymnastics scene centered on a mat with a child-safe ribbon, hoop, or balanced pose; avoid making it look like only one obscure sport if possible. |
| `ro-p-plus` | `pluș` | One teddy bear plush toy, soft fabric feel, stitched or rounded details only if readable, distinct from the existing `ursuleț` by pose/color if possible. |

## Records Removed From Gameplay

These records should not receive image briefs in this slice because the human approved removing them from gameplay:

| Word ID | Word | Batch 37 action |
| --- | --- | --- |
| `ro-g-ghicitoare` | `ghicitoare` | Changed from `approved` to `rejected`. |
| `ro-m-miez` | `miez` | Changed from `approved` to `rejected`. |
| `ro-s-stinghie` | `stinghie` | Changed from `approved` to `rejected`. |

## Corrective Regeneration Briefs

These are already ready production images. Do not replace them until regenerated candidates pass review against the on-brand reference set.

| Word ID | Word | Brief |
| --- | --- | --- |
| `ro-r-robinet` | `robinet` | One clear sink tap or faucet, metallic gray/blue, recognizable spout and handle, pale background, polished pixel-art volume. |
| `ro-a-aripa` | `aripă` | One feathered wing with layered feathers and a curved silhouette, no bird body, no loose fragments, no abstract blocks. |
| `ro-c-coaja` | `coajă` | One continuous curled orange or banana peel, coherent shape, no unexplained detached pieces. |
| `ro-e-esarfa` | `eșarfă` | One soft scarf with a gentle fold or trailing end, visible fringe, fabric-like highlights, no person. |
| `ro-g-girafa` | `girafă` | Friendly natural giraffe with visible long neck, head, spots, and enough body/neck framing to read at wheel size. |

## Next Implementation Scope

The next implementation slice may generate and review the `25` approved image targets in this document:

- `20` approved placeholder replacements;
- `5` corrective regenerations.

If that is too large for visual QA in one pass, split it into two batches:

- person/family plus fantasy plus `zmeu`, `gimnastică`, and `pluș`;
- corrective regeneration for the five already-ready assets.
