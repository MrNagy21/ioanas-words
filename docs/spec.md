# Word Wheel V1 Specification

## Purpose

Word Wheel is a mobile-first pronunciation and vocabulary exercise web app for young children. The first version teaches Romanian words by letting a child choose a starting letter, spin a wheel of words that begin with that letter, and react to the selected word with a large image and label.

The app should feel like a small mobile game, not a scrolling website. It should work well on mobile phones first, while still having polished tablet and desktop layouts.

## Product Goals

- Build a simple, reliable exercise experience for children aged roughly 4 to 6.
- Start with Romanian content, but structure the app so more languages can be added later.
- Keep v1 cheap to host and simple to deploy on Vercel.
- Avoid a database for v1 user gameplay.
- Keep the door open for future accounts, billing, saved progress, admin tools, and AI pronunciation checks.
- Use a content pipeline that can scale from a manually curated starter pack to thousands of approved words and images.

## Non-Goals For V1

- No accounts.
- No payments.
- No database-backed progress.
- No AI pronunciation scoring.
- No teacher dashboard.
- No user-generated content.
- No dynamic content editing in production.
- No general dictionary mode.
- No attempt to include every Romanian word.

## Future Word Selection Direction

Future work after the starter pilot should expand every Romanian letter bucket to roughly 20 to 30 approved child-friendly words where quality allows, with at least 15 for harder letters and up to 30 to 40 for high-value letters. Do not pad letters with obscure words.

Romanian expansion should also follow the therapy-informed guidance in `docs/app-development-program/speech-therapy-content-guidance.md`. Letter counts are not enough for a serious pronunciation app; review needs to track target sound, sound position inside the word, syllable complexity, consonant clusters, and contrast value. The app should remain framed as pronunciation and vocabulary practice unless a future safety and clinical-review spec explicitly adds diagnostic or treatment claims.

Future gameplay should also support three selected-letter inclusion modes:

- only words that begin with the selected letter;
- words that begin with the selected letter plus words that contain the letter elsewhere, shuffled together;
- only words that contain the selected letter but do not begin with it.

The implementation notes for this future mode live in `docs/future-word-modes.md`. V1 should stay static-first and anonymous while keeping room for this mode UI later.

## Target Audience

Primary users are Romanian-speaking or Romanian-learning children around ages 4, 5, and 6.

The vocabulary must therefore be:

- common and familiar to young children;
- concrete and imageable;
- mostly household, family, animal, food, clothing, toy, nature, body, vehicle, and everyday action words;
- easy enough to pronounce and recognize;
- culturally appropriate for Romanian children;
- free from frightening, adult, violent, financial, business, sexual, political, or specialized medical/scientific terms.

The app is likely operated by a parent, teacher, or therapist, but the visible experience should be understandable and friendly for the child.

## Core V1 User Flow

1. User opens the app.
2. User sees a language-ready app shell, defaulting to Romanian.
3. User chooses a starting letter.
4. The app loads approved words for that letter.
5. The wheel displays the available words and small images.
6. User taps the wheel, or an equivalent spin control, to spin.
7. The wheel spins and lands on one word.
8. A modal appears with:
   - large image;
   - large word text;
   - option to close and keep the word;
   - option to remove the word from the current wheel.
9. User can spin again, reset the current letter, or choose another letter.

## Required V1 Screens And States

### Letter Selection

- Shows Romanian letters supported by the content pack.
- Clearly indicates letters with available content.
- Allows returning from the game screen to choose a different letter.
- Does not require scrolling on typical phone viewports.

### Game Screen

- Full viewport, app-like layout.
- No page scroll in normal use.
- Wheel is the primary focus.
- The wheel itself must be a primary spin target, usable by touch and mouse.
- A separate spin button may remain as an accessible fallback or secondary control.
- Current language and letter are visible but not dominant.
- Controls are large enough for children or adults on mobile.
- Disabled states are clear when a letter has no remaining words.
- Decorative wheel shadow/rim effects must remain visually fixed and must not rotate with the spinning wheel surface.
- Segment word labels and the center letter should remain upright/horizontal while the wheel spins, like self-leveling wheel caps.

### Spin Result Modal

- Appears after the wheel lands.
- Shows the selected word and image prominently.
- Offers:
  - close/keep;
  - remove from wheel.
- Must not feel cluttered.
- Must be dismissible without accidentally removing the word.
- Until real images exist, use the same stable placeholder image slot style in the modal.
- When real images are available, the selected image should become the central hero visual for the result.

### Empty Wheel State

- If all words for a letter are removed, show a friendly state with:
  - reset letter;
  - choose another letter.

## Visual Direction

The app should feel playful, clear, and calm. Avoid a marketing landing-page look. The first screen is the actual app.

Preferred image style for v1:

- consistent high-clarity pixel art;
- square aspect ratio;
- recognizable at small sizes;
- low file size;
- visually distinct objects;
- no text inside images;
- no copyrighted characters or branded products.

Pixel art was selected for the first Romanian pack because thousands of images can remain small and stylistically consistent. It also reduces the need for large photo assets. Images should still be large enough to look good in the result modal on modern phones.

The production image source strategy is AI batch generation with strict human review. Public asset packs may be inspected for reference or fallback, but the main pack should not be assembled from mixed external assets because style consistency and licensing cleanup become difficult.

The first final asset target is `256 x 256 px` lossless `.webp`, with a goal of `<= 8 KB`, a warning threshold above `12 KB`, and a hard maximum of `20 KB` per image. Final local image paths should follow `/images/<locale>/<letter>/<word-id>.webp`, matching the word ID exactly. Detailed image decisions live in `docs/image-pipeline.md`.

## Responsive Layout Requirements

The layout must support:

- mobile portrait as the primary form factor;
- mobile landscape without broken controls;
- tablet portrait and landscape;
- desktop browser windows.

Guidelines:

- Use viewport-aware layout such as `100dvh` with fallbacks where needed.
- Keep the game within a fixed app shell that prevents body scroll in normal use.
- Use responsive constraints instead of viewport-scaled font sizes.
- Ensure text never overlaps wheel segments, controls, or modal content.
- On desktop, use a constrained app frame rather than stretching the wheel across the entire screen.

## Technical Architecture

Use Next.js App Router with TypeScript, deployed on Vercel.

Rationale:

- V1 can still be mostly static and cheap.
- Next.js gives a clean path to future API routes, server actions, auth, protected admin pages, subscriptions, and AI features.
- Vercel is the intended deployment target.
- Public exercise content can be served as static files or CDN assets.

V1 should be static-first:

- no required server runtime for gameplay;
- no database reads during normal wheel spins;
- no authentication dependency;
- no remote API dependency for the core game.

Suggested high-level structure:

```txt
app/
  [locale]/
    page.tsx
    choose-letter/
src/
  components/
  content/
  game/
  i18n/
  utils/
content/
  ro/
    letters.json
    words-a.json
    words-b.json
    ...
public/
  images/
    ro/
      a/
      b/
scripts/
  content/
docs/
```

## Content Model

The app should separate display text, word metadata, and image metadata enough that content can be validated automatically.

### Letters

`letters.json` defines the supported letters for a locale.

Example:

```json
{
  "locale": "ro",
  "letters": [
    { "id": "a", "label": "A", "enabled": true },
    { "id": "ă", "label": "Ă", "enabled": true },
    { "id": "â", "label": "Â", "enabled": true },
    { "id": "b", "label": "B", "enabled": true }
  ]
}
```

Romanian letters with diacritics must be handled deliberately. `A`, `Ă`, and `Â` are different starting-letter buckets. `S` and `Ș`, `T` and `Ț`, and `I` and `Î` must also be handled intentionally.

### Words

Words should be split by locale and letter to keep payloads small.

Example:

```json
{
  "locale": "ro",
  "letter": "m",
  "words": [
    {
      "id": "ro-m-mar",
      "word": "mar",
      "display": "mar",
      "normalized": "mar",
      "partOfSpeech": "noun",
      "difficulty": 1,
      "ageBand": "4-6",
      "category": "food",
      "image": "/images/ro/m/mar.webp",
      "alt": "Un mar rosu",
      "source": ["manual"],
      "license": "app-owned",
      "status": "approved"
    }
  ]
}
```

Required fields:

- `id`
- `word`
- `display`
- `normalized`
- `partOfSpeech`
- `difficulty`
- `ageBand`
- `category`
- `image`
- `alt`
- `source`
- `license`
- `status`

Only `status: "approved"` words may ship in production gameplay.

## Romanian Content Rules

The serious Romanian v1 pack should target:

- 30 to 40 approved words for most useful letters;
- around 50 approved words for very common letters where good child vocabulary exists;
- fewer words for rare letters where forcing content would lower quality.

Quality is more important than exact count. Do not pad rare letters with obscure words.

Preferred word types:

- animals: caine, pisica, cal, peste;
- foods: mar, paine, lapte, ou;
- household objects: masa, scaun, pat, cana;
- toys and school objects: minge, cub, carte, creion;
- family and people: mama, tata, copil, bunica;
- clothes: bluza, caciula, pantof;
- nature: floare, copac, soare, nor;
- vehicles: masina, tren, barca;
- body parts: mana, nas, ochi;
- simple actions only if easy to illustrate: sare, doarme, canta.

Avoid:

- business, finance, legal, politics;
- advanced science or medical terms;
- abstract nouns that cannot be pictured clearly;
- scary or violent words;
- slang;
- offensive words;
- brand names;
- words where the image would be ambiguous for a 4 to 6 year old;
- rare literary or archaic words.

## Image Storage Strategy

There are two viable paths.

### V1 Preferred Path: Repository Images

For the first Romanian pack, store optimized images in the repository under `public/images`.

This is acceptable if:

- images are small pixel art or compact illustrations;
- files are optimized to `.webp` or `.avif`;
- the repository remains comfortably small;
- image file names are stable and generated from word IDs;
- total file count stays manageable.

This gives the simplest deployment and no extra storage service.

### Scale Path: Cloudflare R2

Move images to Cloudflare R2 when:

- the image set grows into many thousands of files;
- repository clone/build/deploy size becomes inconvenient;
- we add multiple languages;
- images need to be updated independently from app deploys.

When using R2:

- keep image URLs in word metadata;
- publish immutable asset paths, for example `/ro/m/ro-m-mar-v1.webp`;
- front with a custom assets domain later;
- cache aggressively;
- keep a local manifest checked into the repo;
- keep original prompts/source metadata in the content pipeline.

Do not couple gameplay to R2 at first. The app should work with either local `/images/...` paths or remote asset URLs.

## Content Pipeline

V1 must include scripts and conventions for growing content safely.

### Agent 1: Word Candidate Miner

Inputs:

- manual seed lists;
- Romanian lexical resources;
- frequency lists;
- prior approved words.

Output:

- candidate word list with source references and rough categories.

### Agent 2: Romanian Normalizer

Responsibilities:

- normalize diacritics;
- deduplicate variants;
- assign letter buckets;
- reject malformed entries;
- flag plural/singular concerns;
- ensure child-friendly display casing.

### Agent 3: Child Vocabulary Reviewer

Responsibilities:

- score age suitability;
- score concreteness;
- score imageability;
- reject adult/specialized/abstract terms;
- suggest simpler alternatives.

### Agent 4: Image Brief Writer

Responsibilities:

- create concise image prompts;
- define alt text;
- define style constraints;
- flag ambiguity risks.

Example prompt style:

```txt
Pixel art icon of a red apple, simple child-friendly shape, centered on transparent background, no text, no face, no brand, square composition.
```

### Agent 5: Image Producer

Responsibilities:

- generate or source candidate images;
- export to approved size and format;
- save with stable filenames;
- record source and license metadata.

### Agent 6: Content QA

Responsibilities:

- validate JSON schema;
- verify every image path exists;
- check image dimensions and file sizes;
- verify no duplicate IDs;
- verify letter bucket matches the word;
- verify production content has approved status;
- report missing attribution/license metadata.

### Human Review

Human review is required before publishing substantial content batches. This is especially important because the app is for young children and automated filters can miss cultural or educational issues.

## Local State

V1 state can live in React state and browser storage.

Use browser storage only for low-risk preferences:

- selected locale;
- selected letter;
- optionally removed words for the current device.

Do not store sensitive data in browser storage.

## Game Logic

Wheel behavior:

- use approved words for the selected letter;
- removed words disappear from the current wheel;
- reset restores the full approved set for the selected letter;
- spin must be disabled during animation;
- result should be decided before animation starts, then wheel rotates to match;
- repeated spins should feel random but not broken.
- wheel tap/click should trigger a spin when the wheel has words and is not already spinning;
- animation should feel like physical deceleration:
  - faster speed loss early in the spin;
  - gentler speed loss near the end;
  - total spin duration should usually land around 5 to 10 seconds;
- visual effects outside the rotating wheel surface, such as the wheel shadow, should not rotate;
- text and central letter orientation should be compensated during rotation so they stay upright/horizontal.

The wheel can be implemented with SVG or Canvas. SVG is preferred for accessibility, crisp rendering, and easier segment layout in v1.

## Accessibility And Usability

- Buttons must have accessible names.
- Modal must trap focus.
- Motion should be reasonable and not excessive.
- Provide reduced-motion behavior for users who request it.
- Text contrast must be strong.
- Image alt text must be meaningful.
- The app must work with touch and mouse.

## Validation Requirements

Add validation scripts before the first serious content batch.

Validation should fail on:

- invalid JSON;
- missing required word fields;
- duplicate IDs;
- invalid status;
- image path missing;
- unsupported image file type;
- word assigned to the wrong letter bucket;
- production content with non-approved status;
- missing license/source fields.

## Deployment

Target platform: Vercel.

V1 should deploy without requiring:

- database credentials;
- object storage credentials;
- Stripe credentials;
- AI API credentials.

Future features may introduce environment variables, but the public game must remain usable without them in local development.

## Future Vision

Future versions may add:

- user accounts;
- saved progress across devices;
- parent or teacher dashboards;
- classroom/group modes;
- subscription plans;
- premium content packs;
- AI pronunciation scoring;
- audio playback for words;
- speech recording and review;
- admin content review tools;
- multiple languages;
- downloadable/offline packs;
- analytics for which letters and words are practiced.

Suggested future stack:

- Supabase for auth, profiles, progress, entitlements, and admin review metadata;
- Stripe for subscriptions and billing;
- Cloudflare R2 for large-scale image asset storage;
- server routes for AI pronunciation and billing webhooks.

The public content catalog should remain static/CDN-first even after accounts are added. Database reads should be used for user-specific state, not for every wheel spin.

## Open Questions

- Exact Romanian letter set to expose in v1.
- Whether to use pixel art or flat illustration as the final image style.
- Whether generated images are acceptable for all content or only for placeholders.
- Whether the app should include audio playback in v1.
- Whether removed words should persist after refresh or only during the current session.
- Whether content should include both singular and plural forms.
- Whether to show diacritics-only letters separately from base letters in the first child-facing interface.
