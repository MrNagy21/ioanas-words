# Owner feedback, 27 October 2026

Implemented locally, including the user's follow-up on color, terms and additional sounds. No commit or deployment requested or performed.

## Changes

The interface and active logo/install icons now use the primary teal from [Ioana Nagy's site](https://www.ioananagy.eu/ro). Its published stylesheet and the sibling site's source both define `hsl(185 37% 33%)`, approximately `#356e73`. The cream background, warm illustration/reward accents and multicolor wheel remain. Versioned asset URLs refresh branding while keeping the manifest identity, start URL and browser storage identifiers stable. `scripts/brand/generate-icons.mjs` regenerates the PNG icons from the authored SVG.

Game sound is optional and off by default. Quiet synthesized ticks slow with the wheel; a short two-note chime accompanies the word reveal; a brief three-note chord accompanies confetti and medals. A visible sound button controls all effects, including on the award screen. Profile play and settings share the existing `preferences.sound` field. Anonymous play remembers its device choice in `word-wheel:spin-sound`; the demo keeps its choice in memory across wheel/award transitions and resets on reload.

Audio unlocks through a user gesture. Muting cancels scheduled sounds and prevents a later word chime. Leaving the component or hiding the page stops its sounds; page exit closes the shared audio context. Unsupported audio does not block play. No sound download, microphone or external service was added. The award screen's new button meets its existing 48px minimum touch target.

The anonymous picker says “Copii”. About, contact, terms and privacy links appear throughout adult screens, including initial selection, onboarding, profile forms, preparation and pre-play preview. They remain absent during wheel play and child celebrations. Information links in adult tasks open in an explicitly labelled new tab to preserve unfinished inputs. Anonymous preparation scrolls to its footer; setup action buttons stay inside their panel rather than covering it on phones.

`/ro/contact` explains how to reach Darius, displays the existing support address and offers an explicit email action. Clicking Contact in the footer no longer launches an email client directly. The introduction, terms and privacy audience include psychologists alongside speech therapists and parents.

## Terms review

The owner did not identify a specific objection and the user authorized an inferred correction. The most likely problems were the public internal review checklist, repeated draft explanations and company-first ordering. The terms now open with who the app is for and how to use it; the provider details remain further down. Both legal pages have a compact expandable contents list and one concise draft-status notice.

Internal publishing tasks are preserved in [the editorial review](../../../legal/editorial-review-2026-10-27.md). Existing responsibilities, liability wording, mandatory rights and data warnings remain. The pages still have no effective date and remain noindex drafts. Hosting, email and retention facts still need confirmation before legal finalization. No policy or compliance approval is inferred from this copy edit.

## Verification

Node 24.22.1 and pinned pnpm 11.1.2. Production build/TypeScript, repository lint, practice domain/migration/encrypted-backup checks, scoped formatting and `git diff --check` pass.

- Chrome 156 and WebKit 26.5 audio checks cover real gesture-initiated audio, slowing ticks, muting mid-spin including the later reveal, preference reload, word chimes, reduced motion, demo confetti sound, mute continuity between wheel and medal, transient demo storage and unavailable-audio recovery.
- WebKit footer checks cover phone, short landscape, desktop and 200% text. Assertions include one footer, touch targets, keyboard focus, hit testing, labelled new tabs and contact routing.
- WebKit legal/brand checks cover draft status, noindex, psychologist audience, absence of internal checklists and the unadopted retention proposal, contents anchors, 200% text, computed primary color, versioned assets and stable manifest identity. Phone/desktop screenshots were inspected. White text on the primary teal has a 5.79:1 contrast ratio.
- Full WebKit practice and encrypted-backup regression passes, including all five medal viewport sizes. The initial follow-up run found the new award button below the suite's 48px target. Its corrected size passes in the final build. The Impeccable mechanical scan returned no findings.
- The earlier feedback pass also passed WebKit onboarding and all 88 public routes/four Romanian 404 cases. Its footer overlap was corrected before that pass completed.

The first feedback evidence is in `/Users/darius/.t3/userdata/artifacts/word-wheel-owner-feedback-2026-10-27/`. Teal, legal and expanded audio evidence is in `/Users/darius/.t3/userdata/artifacts/vorbini-teal-audio-2026-10-27/`. The production server for this working tree runs at `http://localhost:3000`.

Content manifests, reviewed mappings, child schemas, reward rules, storage transactions and backup encryption are unchanged. Automated audio checks confirm behavior, not perceived loudness or pleasantness. Owner listening on physical devices, Romanian review and therapist-pilot acceptance remain open.

Audio references checked 27 October 2026: [MDN Web Audio best practices](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices) for user gestures and user control, and [AudioScheduledSourceNode.stop](https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/stop) for cancelling scheduled sources. Legal presentation sources are recorded in the editorial review.

## Last-word follow-up

The user requested a disappearing spiral before the last word's popup. The final wheel now rotates and shrinks for 800ms, with the popup opening at 680ms. It stays hidden behind the popup, returns on Keep or Escape, and retains the existing Remove/counting/completion behavior. Reduced motion substitutes a 120ms fade and opens the popup at 102ms. The reveal chime can finish after the animation; the spin-end timer no longer cuts it short.

The shared wheel component covers anonymous, demo and tracked play. CSS transforms and opacity provide the effect without a new dependency. Existing timer cleanup and save/error handling remain. Browser checks measure the shrinking/rotating intermediate state and confirm the popup opens before the animation finishes, then exercise restoration, replay and reduced motion. The fixture now loads the app's brand styles and public assets as well as base styles. This exposed a narrow completion card overflow, also reproduced on localhost; smaller decorative artwork and spacing keep its actions visible at 320×568 and 568×320.

Production build/TypeScript, lint, gameplay compatibility, Chrome/WebKit wheel regression and WebKit sound checks pass. Final localhost completion checks pass in both compact orientations. Evidence is in `/Users/darius/.t3/userdata/artifacts/vorbini-final-spiral-2026-10-27/`. The mechanical scan flagged two existing base-style rules: an Arial fallback overridden by the Nunito brand stylesheet, and the approved raised button edge. Neither belongs to the new animation. No deployment requested.

## Next prompt

The requested owner-feedback implementation is complete. The next work is acceptance and release preparation:

```text
Continue Vorbini acceptance in /Users/darius/mrNagySSC/ioana/word-wheel. Read AGENTS.md, docs/agent-brief.md, docs/spec.md, docs/plan.md, docs/status.md and docs/app-development-program/features/guided-practice-app/owner-feedback-2026-10-27.md.

Preserve the last-word spiral/reduced-motion fade, teal identity, unified optional ticking/word/confetti audio, Copii label, adult information links, contact page and psychologist audience wording. Listen to the effects on physical phones with the owner and verify mute behavior, installation and local backup/restore. Follow the recorded legal review to confirm actual hosting/email/retention facts before finalizing the legal drafts. Continue GP9 with user-arranged Romanian mapping review and therapist acceptance. Record actual evidence and unresolved gates. Do not deploy without an explicit request.
```
