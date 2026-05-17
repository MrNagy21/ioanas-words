# Romanian Content Expansion Batch 5 Image Briefs

Date: 2026-05-17

Scope: the 15 Batch 4 draft records only.

Style: high-clarity child-friendly pixel art, one centered subject, warm shared background `rgb(253, 247, 230)`, no text, no letters, no numbers, no logo, no watermark, no brand, no copyrighted character, no complex scene, no frightening or adult content.

Final target: `256 x 256 px` lossless WebP at `public/images/ro/<letter>/<word-id>.webp`, referenced in JSON as `/images/ro/<letter>/<word-id>.webp`.

## Briefs

| Word ID | Display | Canonical path | Alt text | Category | Visual subject | Review notes |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-b-brat` | `braț` | `/images/ro/b/ro-b-brat.webp` | `Un braț` | body | One friendly bent arm with an open hand, shown as a simple body-part icon without a full person. | Must read as an arm, not a sleeve or gesture; no injury, medical scene, or anatomy detail. |
| `ro-b-buza` | `buză` | `/images/ro/b/ro-b-buza.webp` | `O buză` | body | A simple smiling mouth focused on lips. | Must be child-safe, non-adult, non-cosmetic, and not a full face if that weakens the target word. |
| `ro-g-geam` | `geam` | `/images/ro/g/ro-g-geam.webp` | `Un geam` | household | A clean house window with frame and pale blue glass panes. | Must read as window/glass, not door or mirror; no outdoor scene clutter. |
| `ro-g-gheata` | `gheață` | `/images/ro/g/ro-g-gheata.webp` | `Un cub de gheață` | nature | One or two translucent blue ice cubes. | Must avoid looking like candy, crystal, snow, or glass shards. |
| `ro-j-jucarie` | `jucărie` | `/images/ro/j/ro-j-jucarie.webp` | `O jucărie` | toy | A simple toy stacking ring or toy block object. | Must be generic and unbranded; no letters on blocks. |
| `ro-j-jacheta` | `jachetă` | `/images/ro/j/ro-j-jacheta.webp` | `O jachetă` | clothing | One child-sized jacket zipped or buttoned, front view. | Must not include logos, badges, or text. |
| `ro-r-rata` | `rață` | `/images/ro/r/ro-r-rata.webp` | `O rață` | animal | One friendly yellow duck in side view. | Must read as duck, not chick; no water scene needed. |
| `ro-r-roata` | `roată` | `/images/ro/r/ro-r-roata.webp` | `O roată` | vehicle | One simple wheel with tire, rim, and hub. | Must read as wheel, not steering wheel or full car. |
| `ro-r-robot` | `robot` | `/images/ro/r/ro-r-robot.webp` | `Un robot de jucărie` | toy | One friendly toy robot with simple body, arms, and antenna. | Must be generic and non-branded; no scary sci-fi styling. |
| `ro-s-soare` | `soare` | `/images/ro/s/ro-s-soare.webp` | `Un soare` | nature | One cheerful yellow sun with rays. | A simple face is acceptable only if subtle and child-friendly; no letters. |
| `ro-s-suc` | `suc` | `/images/ro/s/ro-s-suc.webp` | `Un pahar cu suc` | food | One clear cup or glass of orange juice with a straw. | Must not show a brand, label, carton text, or alcohol-like glass. |
| `ro-s-sapun` | `săpun` | `/images/ro/s/ro-s-sapun.webp` | `Un săpun` | household | One rounded soap bar with a few bubbles. | Must not include printed text or brand marks. |
| `ro-u-usa` | `ușă` | `/images/ro/u/ro-u-usa.webp` | `O ușă` | household | One simple front door with handle. | Must read as a door, not window or cabinet; no house facade clutter. |
| `ro-z-zebra` | `zebră` | `/images/ro/z/ro-z-zebra.webp` | `O zebră` | animal | One friendly zebra in side view with clear black and white stripes. | Must be natural animal, not mascot or copyrighted character. |
| `ro-z-zapada` | `zăpadă` | `/images/ro/z/ro-z-zapada.webp` | `Zăpadă albă` | nature | A small mound of white snow with a few simple snowflakes. | Must read as snow, not ice cube or cloud; no winter landscape clutter. |

## Prompt Template

```txt
Create a high-clarity pixel art icon for a children's Romanian vocabulary game.
Romanian word: "<display>". Intended meaning: <brief subject>.
Style: cheerful handcrafted pixel art, clean silhouette, rounded friendly shapes, simple readable details, soft playful colors, consistent game icon style matching the existing Word Wheel Romanian starter pack.
Composition: one centered subject only, square canvas, subject fills 70% to 85% of the image, clear margin around the subject, flat warm off-white background rgb(253, 247, 230).
Technical: no text, no letters, no numbers, no logo, no watermark, no brand, no copyrighted character, no photorealism, no 3D render, no complex scene, no scary mood, no clutter.
Audience: children ages 4 to 6.
```

## Review Status

Status: reviewed and accepted on 2026-05-17.

All 15 generated source images were reviewed in a contact sheet before JSON promotion. Review checks passed for recognizability, child safety, no text, no letters, no numbers, no logos, no brands, no watermarks, style consistency with the Romanian starter image pack, and optimization viability. Final WebP files were generated only after this review pass.

The staged source PNGs and trace metadata live under ignored `assets/image-sources/ro/` paths. Canonical committed assets live under `public/images/ro/<letter>/<word-id>.webp`.
