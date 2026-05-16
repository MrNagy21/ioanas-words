# Next Image Batch Prompt

Copy and paste the full prompt below for the next small reviewed image batch.

```txt
Create a high-clarity pixel art icon for a children's Romanian vocabulary game.

Style: cheerful handcrafted pixel art, clean silhouette, rounded friendly shapes, simple readable details, soft playful colors, consistent educational game icon style.

Composition: one centered subject only on a square canvas, subject fills 70% to 85% of the image, clear margin around the subject.

Background: perfectly flat warm light background, exactly rgb(253, 247, 230), with no gradient, shadow, texture, scenery, floor plane, or lighting variation.

Lighting: soft top-left lighting on the subject only.

Audience: children ages 4 to 6.

Technical constraints: no text, no letters, no numbers, no logo, no watermark, no brand, no copyrighted character, no photorealism, no 3D render, no complex scene, no scary mood, no clutter.

Avoid: text, letters, numbers, watermark, logo, brand, copyrighted character, photorealistic, 3d render, realistic photo, complex background, scenery, clutter, scary, violent, weapon, adult theme, distorted object, extra limbs, blurry, low contrast, noisy dithering.

Generate one image for each:

Word ID: ro-p-pisica
Romanian word: "pisică"
Subject: one friendly cat, child-recognizable animal, simple rounded body and face, no collar tag, no scene.
Use the shared style prompt exactly.

Word ID: ro-p-paine
Romanian word: "pâine"
Subject: one simple loaf of bread, child-recognizable food object, golden brown, no wrapper, no text.
Use the shared style prompt exactly.

Word ID: ro-p-pat
Romanian word: "pat"
Subject: one simple child's bed, child-recognizable household object, pillow and blanket allowed, no room scene, no text.
Use the shared style prompt exactly.

Word ID: ro-p-pahar
Romanian word: "pahar"
Subject: one simple clear drinking glass, child-recognizable household object, empty or with water, no label, no straw, no text.
Use the shared style prompt exactly.

Word ID: ro-p-peste
Romanian word: "pește"
Subject: one friendly plain fish, child-recognizable animal, simple fins and tail, no aquarium, no water scene, no hook.
Use the shared style prompt exactly.

Word ID: ro-p-pantof
Romanian word: "pantof"
Subject: one simple shoe, child-recognizable clothing object, no logo, no letters, no numbers.
Use the shared style prompt exactly.

Word ID: ro-p-papusa
Romanian word: "păpușă"
Subject: one simple friendly doll toy, child-recognizable toy object, generic non-branded design, no copyrighted character, no text.
Use the shared style prompt exactly.

Word ID: ro-p-perie
Romanian word: "perie"
Subject: one simple hair brush, child-recognizable household object, rounded handle and bristles, no brand, no text.
Use the shared style prompt exactly.

Word ID: ro-p-porc
Romanian word: "porc"
Subject: one friendly pig, child-recognizable animal, rounded pink body, no farm scene, no mud, no text.
Use the shared style prompt exactly.

Word ID: ro-p-perna
Romanian word: "pernă"
Subject: one simple pillow, child-recognizable household object, soft rounded square shape, no bed scene, no pattern with letters or numbers.
Use the shared style prompt exactly.
```

After generation, human-review every image before marking it ready. Save accepted source images as `assets/image-sources/ro/p/<word-id>.png`, normalize the background to `rgb(253, 247, 230)`, optimize to `public/images/ro/p/<word-id>.webp`, mark only accepted images as `imageStatus: "ready"` and `license: "app-owned"`, then run content validation.
