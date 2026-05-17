# Romanian Content Expansion Batch 8 Image Briefs

Date: 2026-05-17

Scope: the 17 Batch 7 planned second-slice records only.

Style: high-clarity child-friendly pixel art, one centered subject, warm shared background `rgb(253, 247, 230)`, no text, no letters, no numbers, no logo, no watermark, no brand, no copyrighted character, no complex scene, no frightening or adult content.

Final target: `256 x 256 px` lossless WebP at `public/images/ro/<letter>/<word-id>.webp`, referenced in JSON as `/images/ro/<letter>/<word-id>.webp`.

## Briefs

| Word ID | Display | Canonical path | Alt text | Category | Visual subject | Review notes |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-sh-sapca` | `șapcă` | `/images/ro/ș/ro-sh-sapca.webp` | `O șapcă` | clothing | One child-sized baseball-style cap, front three-quarter view. | Must read as a cap, not a helmet or hat with letters; no logo or badge. |
| `ro-sh-soseta` | `șosetă` | `/images/ro/ș/ro-sh-soseta.webp` | `O șosetă` | clothing | One soft ankle sock, slightly curved, with simple colored cuff and toe. | Must stay distinct from `ciorap`; use one short sock and avoid a pair if it clutters the icon. |
| `ro-sh-soricel` | `șoricel` | `/images/ro/ș/ro-sh-soricel.webp` | `Un șoricel` | animal | One friendly small gray mouse with round ears and a thin tail. | Must look gentle and child-safe, not like a pest or frightening rodent. |
| `ro-tz-testoasa` | `țestoasă` | `/images/ro/ț/ro-tz-testoasa.webp` | `O țestoasă` | animal | One friendly turtle in side view with green body and rounded shell. | Must read as turtle, not frog or lizard; no complex pond scene. |
| `ro-s-sanie` | `sanie` | `/images/ro/s/ro-s-sanie.webp` | `O sanie` | vehicle | One simple red sled with runners, slight side view. | Must read as sled, not chair or cart; snow may be a tiny base only if needed. |
| `ro-s-salata` | `salată` | `/images/ro/s/ro-s-salata.webp` | `O salată` | food | One bowl of green salad with simple vegetables. | Must be a food bowl, not soup; no fork, table, or text. |
| `ro-s-sandale` | `sandale` | `/images/ro/s/ro-s-sandale.webp` | `O pereche de sandale` | clothing | A simple pair of child sandals with straps. | Must be sandals, not shoes or slippers; no brand marks. |
| `ro-z-zar` | `zar` | `/images/ro/z/ro-z-zar.webp` | `Un zar` | toy | One rounded white die with clear black pips. | Pips are allowed because they are part of the object; no letters or printed numbers. |
| `ro-g-gem` | `gem` | `/images/ro/g/ro-g-gem.webp` | `Un borcan cu gem` | food | One small jam jar with red jam visible and a plain lid. | Must not include a label, letters, brand, or honey-like color. |
| `ro-g-girafa` | `girafă` | `/images/ro/g/ro-g-girafa.webp` | `O girafă` | animal | One friendly giraffe with long neck and clear brown spots. | Must be natural animal, not toy or mascot; keep the full head and neck readable at small size. |
| `ro-c-ceapa` | `ceapă` | `/images/ro/c/ro-c-ceapa.webp` | `O ceapă` | food | One whole onion with papery golden skin and green sprout. | Must read as onion, not garlic or turnip. |
| `ro-c-cirese` | `cireșe` | `/images/ro/c/ro-c-cirese.webp` | `Cireșe` | food | Two red cherries joined by green stems. | Must not look like berries or apples; no face or text. |
| `ro-c-ciorap` | `ciorap` | `/images/ro/c/ro-c-ciorap.webp` | `Un ciorap` | clothing | One longer sock, vertical with heel and toe shape. | Must stay distinct from `șosetă`; use a longer sock silhouette and different color. |
| `ro-f-fata` | `față` | `/images/ro/f/ro-f-fata.webp` | `O față` | body | One simple friendly child face, front view, with eyes, nose, and smile. | Must be child-safe and non-adult; avoid cosmetics, glamour, or a full body. |
| `ro-f-frunza` | `frunză` | `/images/ro/f/ro-f-frunza.webp` | `O frunză` | nature | One green leaf with simple central vein. | Must read as a leaf, not a feather; keep detail large and clean. |
| `ro-b-bicicleta` | `bicicletă` | `/images/ro/b/ro-b-bicicleta.webp` | `O bicicletă` | vehicle | One simple child bicycle in side view with two wheels and handlebar. | Must not include a rider, brand, or text; wheels should be clear at thumbnail size. |
| `ro-d-deget` | `deget` | `/images/ro/d/ro-d-deget.webp` | `Un deget` | body | One hand with a single index finger gently pointing upward. | Must read as a finger, not a gesture with adult meaning; no injury or medical detail. |

## Prompt Template

```txt
Create a high-clarity pixel art icon for a children's Romanian vocabulary game.
Romanian word: "<display>". Intended meaning: <brief subject>.
Style: cheerful handcrafted pixel art, clean silhouette, rounded friendly shapes, simple readable details, soft playful colors, consistent game icon style matching the existing Word Wheel Romanian starter pack.
Composition: one centered subject only, square canvas, subject fills 70% to 85% of the image, clear margin around the subject, flat warm off-white background rgb(253, 247, 230).
Technical: no text, no letters, no numbers except natural die pips for `zar`, no logo, no watermark, no brand, no copyrighted character, no photorealism, no 3D render, no complex scene, no scary mood, no clutter.
Audience: children ages 4 to 6.
```

## Review Status

Status: reviewed and accepted on 2026-05-17.

All 17 generated source images were reviewed before JSON promotion. Review checks passed for recognizability, child safety, no text, no letters, no logos, no brands, no watermarks, style consistency with the Romanian starter image pack, and optimization viability. The `zar` image uses pips only as natural object markings, not text or printed numbers. Final WebP files were generated only after this review pass.

The staged source PNGs and trace metadata live under ignored `assets/image-sources/ro/` paths. Canonical committed assets live under `public/images/ro/<letter>/<word-id>.webp`.
