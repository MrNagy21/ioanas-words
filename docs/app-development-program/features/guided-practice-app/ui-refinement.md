# UI and Romanian copy refinement

Date: 2026-10-16. Requested after the local guided-practice implementation. Impeccable polish/clarify and Unslop informed this pass. This refines the existing light palette, type, pixel imagery and controls; it does not replace the identity.

## Changes

- Selecting a child opens a focused mobile detail view. The profile list no longer pushes the play action below the fold. “Schimbă copilul” returns to the list and restores heading focus. Desktop keeps the profile/detail layout.
- The child identity and prepare/resume action lead the page. Existing sound settings collapse behind “Sunete de exersat”; first-time profiles and the preview's sound-edit detour open them. Configurations, prepared words and stored goals are preserved.
- Activity has a compact summary and word-picture history. Counting/recovery guidance is available in an expandable explanation. Unknown sound review shows a waiting state, not a misleading zero.
- The restartable guide sits after the selected child's main action and uses shorter, natural Romanian. Step progress remains visible. Pronunciation observations and explicit adult medals are clearly separated.
- The introduction and preview explain the actual journey. Preview words now include their approved pictures. The mobile start/change actions remain accessible while scrolling.
- Backup text explains file/password requirements before input, names the replacement scope and uses task-specific loading messages. “Verifică fișierul” leads to “Ce veți recupera”, then “Restaurează copia”. No encryption, restore or storage contract changed.

Copy uses “cuvinte exersate” for counted turns, “sunete” for the adult's selected goals, “observații” for adult ratings, “medalii” for rewards and “copie de siguranță” for manual recovery. Approved unrated/0–5 anchors remain verbatim. No claims of measured accuracy or therapeutic benefit were added.

## Verification

The production build and lint pass. The full practice browser suite passes on the final production server at port 3000, including actual UI profile creation with a 40-character name at 320×568, mobile list/detail switching, visible primary action, sound disclosure, exact prepared-wheel detour, existing persistence/recovery/isolation checks, observations, encrypted whole-app/per-child restore, Help and demo isolation. Adult overflow checks include 768×1024 and 1024×768, alongside phone and desktop sizes. All 85 route checks pass, with an invalid target returning 404.

The collaborative browser verified both workspace layouts, guide, sound disclosure, pronunciation text and introduction. One inspection round led to a bounded final fix: disclose the lengthy counting explanation, improve unknown-review copy and restore focus on child switching. The confirming round passed. No new detector pass was run because the session's detector had already run; the preserved incumbent Arial choice remains documented.

Final synthetic-data captures:

- Phone 390×844: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb38pkr-46c88d23.png`
- Desktop 1440×900: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb38p36-e9963f74.png`

No dependencies, clinical mappings, word/image catalog or deployment changed. This is browser viewport evidence, not physical-device or clinician approval. Existing release gates remain in [implementation-report.md](implementation-report.md). Continue with [pilot-checklist.md](pilot-checklist.md) and the [GP9 prompt](next-implementation-prompt.md).
