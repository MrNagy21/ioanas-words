# Research and planning evidence

## Reward simplification: 2026-10-26

The child-first workspace removes the adult pace choice. Use 1, 3, 5, 10, then every 10 for new participation, preserving existing promised milestones before switching. This is a pilot design choice for small starter wheels, not an experimentally established optimum. Callaghan and Reich’s [preschool app experiment](https://bera-journals.onlinelibrary.wiley.com/doi/10.1111/bjet.13055) studied verbal feedback and gradual challenge with 240 children aged 4–5; it did not compare medal intervals or measure this app’s pronunciation outcomes. Therapist feedback should guide subsequent tuning. The previous two-pace decisions below remain historical.

Reviewed during the product interview and planning on 2026-10-16. These sources inform engineering and design decisions. They do not validate Word Wheel as treatment or establish an optimal reward schedule for Romanian children aged 4 to 6.

## Reward design

1. [UNICEF RITEC design cards](https://www.unicef.org/childrightsandbusiness/media/1151/file/RDT-cardsdesktop-small.pdf) connect meaningful feedback, visible progress, choice, and collectibles with children's experience of competence. Design inference: use understandable achievements and a personal collection, with brief celebrations that leave room for the adult/child interaction.
2. [Deci, Koestner, and Ryan, 1999](https://pubmed.ncbi.nlm.nih.gov/10589297/) report a meta-analysis of 128 experiments in which several contingent reward conditions reduced voluntary interest. This is not a direct evaluation of digital medals in pronunciation practice. Design inference: do not assume bigger prizes or longer engagement mean better motivation; keep rewards descriptive and avoid pressure or loss penalties.
3. [Callaghan and Reich, 2020/2021](https://bera-journals.onlinelibrary.wiley.com/doi/10.1111/bjet.13055) tested app feedback and challenge ordering with 240 children aged 4–5 learning novel words. Early guiding feedback and gradual challenge had benefits. This does not establish speech-therapy outcomes. Design inference: guided onboarding and adult help deserve attention alongside visual rewards.

The accepted design separates automatic participation medals from adult-recorded pronunciation observations and explicit adult-recognised progress celebrations. Numeric milestones, Frequent/Standard pacing, animation length, and artwork tiers remain testable product choices. Reward size/frequency is not automatically computed from pronunciation ratings.

## Sound and observation boundaries

[ASHA's speech sound disorders practice portal](https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/) describes assessment across speech contexts and positions. Use it for the boundary that encounter counts are not pronunciation measurements. It does not provide a validated Word Wheel slider or settle Romanian word-to-sound mappings.

The repository's [speech-therapy content guidance](../../speech-therapy-content-guidance.md) already calls for reviewed target/position metadata. Existing character matching cannot stand in for that review. A Romanian speech-language reviewer must resolve target/group identity and ambiguous mappings before those attributions are promoted.

## Local persistence and shutdown

- [MDN: Using IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) documents transactions and notes that writes are not guaranteed to finish during browser shutdown. Engineering implication: persist ongoing activity and use explicit transactional updates, not an exit-only save.
- [MDN: beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) documents unreliable exit events on mobile. [MDN: visibilitychange](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event) describes hiding as a useful save opportunity. Hiding is not equivalent to the user closing a word result.
- [MDN: storage quotas and eviction](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) explains browser-managed persistence and possible data deletion. Local saving is not cross-device sync or a guaranteed backup. Manual export/restore is a required product feature.

The recovery design is an engineering proposal: save a pending displayed turn, commit it once on normal close or recovery, and persist its award independently from animation playback. No background process is promised after the app stops. Corrupt data, quota failures, and browser clearing remain explicit recovery cases.

## Installation and offline

[Next.js PWA guide](https://nextjs.org/docs/app/guides/progressive-web-apps) documents App Router manifests and distinguishes installation from offline work. Its current examples may target a newer framework version than this repository's pinned Next.js 16.2.6. Verify the chosen approach against the pinned version before adding dependencies or upgrading anything.

The guide's push-notification/server examples are not part of this product. GP0 must investigate caching of the actual routes and static assets. A manifest or working local database is insufficient evidence of offline play.

## Planning source review limits

Baseline revision: `11bcf9b`. The working tree was clean at the start of planning. Package metadata specifies pnpm 11.1.2, Node 24.x, Next.js 16.2.6, and React 19.2.6.

The graph project list had no entry for this repository. Current-code claims in the spec come from direct reads of the named files. No graph indexing, dependency installation, app test run, new browser review, clinical review, or physical-device testing was performed for this documentation-only planning task. Earlier deployed browser observations and release checks are historical evidence, not verification of the proposed app.

## Implementation evidence and source checks

The implementation phase used the pinned Next.js 16.2.6 local types and the official [PWA guide](https://nextjs.org/docs/app/guides/progressive-web-apps) for manifest metadata. No service worker or framework upgrade was introduced. Cold offline launch is unsupported; local saving is a separate feature.

[MDN Web Locks](https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API) supports exclusive browser-origin coordination; the app uses it for session ownership and shared setup snapshots. [IndexedDB transaction guidance](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) informs atomic document writes and the absence of a shutdown guarantee.

Native backup encryption follows [Web Crypto AES-GCM](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt). PBKDF2-SHA256 uses 600,000 iterations, informed by [OWASP's password-storage guidance](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html). Applying that work factor to password-derived backup keys is an engineering inference, not an OWASP audit of this app. Fresh salt/IV and authenticated encryption are tested; passwords are never persisted.

Optional celebration audio follows [AudioContext.resume](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/resume), unlocked after interaction and off by default. Failure to play sound does not block saved participation.

The final accepted reward schedules are Standard 1/5/10/20 then every 20 and Frequent 1/3/5/10 then every 10. These remain pilot tuning values; neither reviewed research nor the pronunciation slider establishes optimal reward pacing. See [implementation-report.md](implementation-report.md) for actual test evidence. Physical devices, human sound review and therapist usability findings remain outstanding.
