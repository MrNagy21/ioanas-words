# Audio reliability, 7 November 2026

Subsequent request: the owner authorized an independent red-team review, fixes and deployment. See the [review/release-preparation report](gameplay-red-team-2026-11-07.md) and latest global status for the five additional gameplay fixes and the current release gate. The original audio-only checkpoint below remains historical.

The owner reported sound disappearing after a letter change or repeated spins, with refresh restoring it. This batch hardens playback and requests media-style audio during iPhone Silent Mode when app sound is enabled. It does not change volume, preferences, child records, content, rewards or backup contracts. No deployment is authorized by this request.

## Findings

The previous shared context was reused until page exit. Spin started `resume()` without waiting for it, and reveal/medal sounds did not attempt recovery. There was no recovery for an interrupted context or a context whose state said running while its audio clock had stopped. Refresh created a fresh context, which fits the reported recovery. This is an explanation supported by the code and WebKit reports, not a confirmed reproduction on the affected phone.

No fixed spin limit was found in the audio code. The old implementation already disconnected normally ended sources; this investigation does not establish an oscillator quota or a particular device memory leak. Structural evidence uses direct source reads because Word Wheel is absent from the graph catalog.

## Changes

- Keep one healthy context across rounds and client-side letter changes. Dispose interrupted, suspended-after-start or closed contexts. Rebuild on the next enabled pointer/keyboard gesture, without a page refresh.
- Unlock on the completed click/tap rather than touch `pointerdown`, which is too early for touch user activation. Keep keyboard activation and catch gestures before asynchronous profile/medal work.
- Close audio on page hiding or `pagehide`, including page-cache navigation. Returning to the foreground does not replay old effects or make sound by itself.
- Share in-flight resume requests, wait before scheduling and abandon unresolved resumes after one second. Drop expired notes and align remaining ticks to the original spin timing, not the eventual resume time.
- Cancel pending playback as well as running sources when muted or unmounted. A stale resume result cannot stop or restart a replacement context.
- Check the audio clock every 250ms while an effect is active. Two consecutive non-advancing samples discard the context; the next gesture retries. Also release sources after their scheduled end if the browser misses an `ended` event. No idle polling or automatic retry loop runs.
- Disconnect each oscillator and gain independently, even if stopping one source throws or allocation fails partway through. Keep the existing 0.07 tick and 0.06 note peaks.

## iPhone Silent Mode

On browsers exposing `navigator.audioSession`, request `type = "playback"` before creating/resuming the context. Release that override to `"auto"` on mute, page hiding or context failure. The app mute control remains authoritative, and audio remains off by default. No microphone access, silent looping media file or external audio service is used.

This requests the platform behavior the owner wants; it cannot override zero media volume, the chosen Bluetooth/AirPlay output, phone calls or browser restrictions. Unsupported or restricted implementations retain their platform default, which may require turning Silent Mode off. The playback category can also pause other music. Physical Safari and home-screen listening remains necessary; desktop WebKit is not an iPhone Silent Mode test.

Primary sources checked on 2026-11-07:

- [W3C Audio Session draft](https://w3c.github.io/audio-session/): explicit playback versus ambient selection, exclusive playback and interruption behavior.
- [WebKit's DOMAudioSession implementation](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/audiosession/DOMAudioSession.cpp): playback maps to the native MediaPlayback category; ambient maps to AmbientSound. Feature/permission restrictions can prevent the override.
- [Apple audio session category table](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/AudioSessionCategoriesandModes/AudioSessionCategoriesandModes.html): playback is not silenced by the Ring/Silent switch. Combined with the WebKit mapping, this supports the expected browser behavior, not a claim of physical-device verification.
- [Safari 16.4 release notes](https://webkit.org/blog/13966/webkit-features-in-safari-16-4/): a subset of AudioSession became available. Detect the API rather than assuming support from the browser name.
- [WebKit user activation guidance](https://webkit.org/blog/13862/the-user-activation-api/): touch/pen activation occurs on release, unlike mouse `pointerdown`.
- [WebKit report 276016](https://bugs.webkit.org/show_bug.cgi?id=276016) and [report 273511](https://bugs.webkit.org/show_bug.cgi?id=273511): historical iOS interrupted/frozen-context failures. These demonstrate failure modes, not that those old regressions affect every current iOS release.

## Verification

Final production-build checks pass in Chrome 156.0.8078.81 and WebKit 27.2. Each sound suite covers touch entry, 45 reduced-motion spins across R/M/S without document reload, one healthy context across letter changes, oscillator/gain cleanup, actual native-context suspension and simulated page-cache recovery. The existing mute, reload, word/medal, demo-isolation and unavailable-audio checks also pass. The first WebKit run stopped at an overly strict new setup-button locator; the corrected locator passes.

`pnpm run check:game-sound` adds deterministic lifecycle coverage: 100 full-duration rounds with ticks/reveal/medal, missing end events, delayed/rejected/thrown/hung resumes, cancellation before resume, expired notes, stale rejection, interrupted/suspended/closed contexts, a frozen running clock, hiding/page exit, partial allocation, cleanup exceptions and optional/prefixed APIs. These are simulated failure cases, not hardware listening evidence.

Production build/TypeScript, repository lint, scoped formatting, practice domain/encryption, gameplay and `git diff --check` pass. WebKit's full practice/encrypted-backup journey and wheel regression pass on the final build, including the last-word spiral, reduced motion, keep/remove/replay and timer cleanup. Node 24.22.1, pinned pnpm 11.1.2 and external Playwright 1.64.1 were used; no dependency was added. The built app runs at `http://localhost:3000`.

Commands: `pnpm run check:game-sound`, `pnpm run check:wheel-sound`, `pnpm run check:practice-browser`, `pnpm run check:wheel-browser`, `pnpm run check:practice`, `pnpm run check:gameplay`, `pnpm run lint` and `pnpm run build`. Browser checks use `WORD_WHEEL_BROWSER=webkit` or `chromium` and the existing external runtime selected by `WORD_WHEEL_PLAYWRIGHT_PATH`. Logs and UI captures are retained at `/Users/darius/.t3/userdata/artifacts/vorbini-audio-2026-11-07/`; images show UI state, not audible output. No commit, push or deployment was made.

## Physical-device acceptance

Record device model, OS/browser versions, URL/origin and Safari-tab versus home-screen use. Use a disposable test profile; do not clear existing records to troubleshoot sound.

1. Enable app sound and set an ordinary media volume. Compare Silent Mode on/off; verify ticks, the word chime and medal chord. App mute must silence all three regardless of the hardware switch.
2. Play at least 50 normal-duration rounds across several letters. Include the last-word spiral, repeated Keep/Remove actions, anonymous/demo/profile play and several medals. Record any first silent effect and whether the next tap or sound off/on recovers without refresh.
3. Switch apps/tabs, lock/unlock, open Control Center and return after a call or Siri. Nothing should burst/replay on return. The next enabled interaction should restore effects; app-muted play must stay silent.
4. Connect/disconnect Bluetooth headphones and check the selected output and media volume. Check whether other music is paused acceptably when game audio starts.
5. Repeat key checks in the home-screen app and Android Chrome. Confirm a protected backup still exports/restores before any browser-data reset. Opening the app still requires a connection.

If sound still disappears, return those details and the exact preceding action before adding another workaround. Physical-phone listening, Romanian mapping review and therapist acceptance remain open GP9 gates.

## Next prompt

```text
Continue Vorbini audio acceptance in /Users/darius/mrNagySSC/ioana/word-wheel. Read AGENTS.md, docs/status.md and docs/app-development-program/features/guided-practice-app/audio-reliability-2026-11-07.md. Preserve optional unified sound, gains, local records and protected backups. Collect actual iPhone Safari/home-screen and Android results for the five device checks, especially Silent Mode and sound after background/call/Bluetooth interruptions. Record model, OS/browser, origin and first failing action. Do not claim desktop WebKit tests prove phone listening. For code changes run pnpm run check:game-sound and the relevant localhost:3000 sound/practice regressions. Keep GP9 Romanian/therapist gates and online-required messaging intact. Do not deploy without a new explicit request.
```
