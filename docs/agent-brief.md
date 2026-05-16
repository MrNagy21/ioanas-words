# Agent Brief

This file captures the project decisions agreed before implementation. Use it as the fast handoff for any agent starting work in this repository.

## Project Summary

Word Wheel is a mobile-first web app for young children to practice Romanian vocabulary and pronunciation. A child chooses a starting letter, spins a roulette-style wheel containing words and images that start with that letter, then sees the selected word and image in a large modal.

The first version is a simple exercise/game. It should be deployable on Vercel for free or very low cost, with no database required for gameplay.

## First Version Scope

V1 must include:

- Romanian as the first language.
- A no-scroll, app-like interface.
- Responsive layouts for mobile phones, tablets, and desktop.
- Letter selection.
- A spinning wheel with words and images for the selected letter.
- Result modal showing the selected image and word larger.
- Modal actions:
  - close and keep the word on the wheel;
  - remove the word from the current wheel.
- Reset for the current letter.
- Ability to choose another letter.
- Static JSON content files.
- Local optimized images for the first pack, unless the repository becomes too large.
- Content validation scripts before adding a serious pack.

V1 must not include:

- accounts;
- billing;
- database-backed progress;
- AI pronunciation scoring;
- admin content editing;
- user-generated content;
- teacher dashboard;
- dynamic production content editing.

## Product Experience

The app should feel like a small mobile game, not a landing page or traditional website.

Important UI constraints:

- The first screen is the actual app, not marketing content.
- Normal gameplay should not require page scrolling.
- Mobile portrait is the primary target.
- Desktop should use a polished constrained app layout, not a stretched full-browser game board.
- Buttons must be touch-friendly.
- Text must not overlap wheel segments, controls, or modal content.
- The wheel is the main visual focus.

## Target Child Vocabulary

The Romanian pack is for children around ages 4 to 6.

Words must be:

- common;
- concrete;
- familiar to young children;
- easy to illustrate;
- easy to recognize;
- culturally appropriate;
- suitable for pronunciation practice.

Good categories:

- household objects;
- family;
- animals;
- food;
- clothing;
- toys;
- school objects;
- nature;
- body parts;
- vehicles;
- simple everyday actions.

Avoid:

- business terms;
- financial terms;
- legal terms;
- political terms;
- advanced science terms;
- specialized medical terms;
- abstract words;
- frightening words;
- violent words;
- adult words;
- slang;
- offensive words;
- brand names;
- copyrighted characters;
- rare, archaic, or literary words;
- words that are visually ambiguous for a 4 to 6 year old.

## Romanian Content Quantity Target

The serious Romanian pack should eventually target:

- 30 to 40 approved words for most useful/common letters;
- up to 50 approved words for very common letters where many good child words exist;
- fewer words for rare letters where quality would otherwise suffer.

Do not pad rare letters with obscure words. Quality matters more than count.

## Romanian Letter Handling

Romanian letters with diacritics must be handled deliberately.

Important buckets include:

- `A`, `Ă`, `Â`
- `I`, `Î`
- `S`, `Ș`
- `T`, `Ț`

Do not silently collapse these letters unless the product decision is explicitly changed. For child-facing UX we may later decide to group or simplify some letters, but the content model should preserve correct buckets.

## Image Direction

The preferred first image style is either:

- pixel art; or
- simple flat illustration.

Pixel art is attractive because thousands of images can stay small and visually consistent.

Image requirements:

- square format;
- recognizable at small wheel sizes;
- clear in a larger modal;
- no text inside images;
- no brands;
- no copyrighted characters;
- no confusing backgrounds;
- optimized `.webp` or `.avif`;
- stable filenames based on word IDs.

For v1, local repository images are acceptable if optimized and small. If the image set grows too large, move images to Cloudflare R2 while keeping JSON manifests in the app.

## Architecture Decision

Use Next.js App Router with TypeScript, deployed on Vercel.

This was chosen over a plain Vite app because the long-term vision includes:

- accounts;
- billing;
- saved progress;
- protected admin pages;
- server routes;
- AI pronunciation checks;
- subscription entitlements.

However, v1 must still be static-first:

- no database required for gameplay;
- no auth required for gameplay;
- no server calls required to spin the wheel;
- public content should load from static JSON and image assets;
- core game should work locally without external credentials.

## Suggested Project Structure

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
    words-ă.json
    ...
public/
  images/
    ro/
      a/
      b/
      ă/
scripts/
  content/
docs/
```

This structure can change if implementation needs it, but preserve the key idea: app code, static content manifests, and image assets are separate.

## Content File Decisions

Use `content/<locale>/letters.json` for supported letters.

Use per-letter word files so the app does not need to load every word at once:

```txt
content/ro/words-m.json
content/ro/words-a.json
content/ro/words-ă.json
```

Each production word must have:

- stable ID;
- word;
- display label;
- normalized form;
- locale;
- letter bucket;
- part of speech;
- difficulty;
- age band;
- category;
- image path or URL;
- alt text;
- source;
- license;
- status.

Only `status: "approved"` words should appear in production gameplay.

## Content Pipeline Decision

Large content batches should be built through an AI-assisted pipeline plus human review.

Expected agents/stages:

1. Word candidate miner.
2. Romanian normalizer.
3. Child vocabulary reviewer.
4. Image brief writer.
5. Image producer.
6. Content QA.
7. Human review.

Useful candidate sources may include Romanian lexical resources and frequency lists, but every final word must pass the child-friendly and imageability rules.

## Storage Decision

V1 preferred path:

- Store optimized images in `public/images/...`.
- Keep assets small.
- Watch repository size and deployment size.

Scale path:

- Move large image packs to Cloudflare R2.
- Keep immutable image URLs in word metadata.
- Keep JSON manifests in repo or publish them as static assets.
- Cache aggressively.

Do not use a database as the primary public word/image catalog. A future database is for user state, subscriptions, admin review, and metadata workflows.

## Future Vision

Future versions may add:

- user accounts;
- saved progress across devices;
- parent/teacher dashboards;
- subscriptions and premium content;
- Stripe billing;
- Supabase auth and database;
- admin content review tools;
- AI pronunciation scoring;
- audio playback;
- multiple languages;
- offline/PWA support;
- analytics.

Free anonymous gameplay must remain available.

## Implementation Order

Follow `docs/plan.md`.

Immediate next task is Batch 0:

- scaffold Next.js App Router with TypeScript;
- add linting/build scripts;
- add baseline README;
- confirm `npm run dev`;
- confirm `npm run build`;
- update `docs/status.md`.

Do not jump directly to content generation before the app foundation and content validation path exist.

## Status Discipline

After each meaningful change:

- update `docs/status.md`;
- mark current phase;
- record completed work;
- record next task;
- record new decisions or open questions.

Agents should be able to resume work using only the repository docs.
