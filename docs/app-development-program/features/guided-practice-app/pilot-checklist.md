# Therapist pilot checklist

Prepared 2026-10-16. These are tasks to run and record, not completed results. The local browser checks are in [ui-refinement.md](ui-refinement.md).

The user-facing [acceptance checklist](acceptance-test-checklist.md) now provides the full feature list, expected results and finding format. Use it alongside the [2026-10-18 QA report](production-qa-2026-10-18.md); the user will run acceptance tests after local engineering QA.

## Before the pilot

- Record the build, browser, device and date. Use a secure HTTPS origin for phones; plain HTTP on the LAN does not provide the required Web Locks/Web Crypto context. Deployment remains a separate requested action.
- Obtain the user-arranged Romanian review. Use the [reviewer handoff](reviewer-handoff.md) and [Romanian instructions](review-packet-instructions.md). Record reviewer/reference, target definitions, word-ID coverage, reviewed presence/absence, positions and mapping version. The current sidecar is empty, so do not describe sound totals as available. The candidate worksheet is not approval.
- Open the introduction and demo, then start with synthetic child profiles. Keep the pilot explicitly online-required.

## Browser resilience baseline

Focused local probes now cover synthesized touch, enlarged text, quota-failure retry and temporary anonymous play with blocked storage. WebKit also passes these probes, the full practice/backup journey and the existing wheel regression. See [resilience-checks.md](resilience-checks.md) and [cross-browser-checks.md](cross-browser-checks.md). These do not fill the physical-device results below.

## Physical phone checks

Run on iPhone Safari and Android Chrome, portrait and short landscape. Mark pass/fail and attach the device/version and a screenshot for any failure.

| Task                                                                            | iPhone  | Android |
| ------------------------------------------------------------------------------- | ------- | ------- |
| Read the intro, open the demo and return without saved demo activity            | Pending | Pending |
| Create two profiles, choose avatars and switch between them                     | Pending | Pending |
| Enter a long nickname with the keyboard open; reach Save/Cancel                 | Pending | Pending |
| Find the selected child's prepare/resume action without searching               | Pending | Pending |
| Open sound settings, save a goal and return to the prepared words               | Pending | Pending |
| Spin, keep, remove and rotate during play/result; controls remain reachable     | Pending | Pending |
| Reload with a displayed word; count and medal recover once for the right child  | Pending | Pending |
| Cancel End, then confirm End; no extra word or medal is added                   | Pending | Pending |
| Save/correct an observation; rewards do not change automatically                | Pending | Pending |
| Trigger an adult medal now and queue another for the same child                 | Pending | Pending |
| Download/open a protected child backup; reject a wrong password                 | Pending | Pending |
| Restore a child while preserving the other child and shared wheels              | Pending | Pending |
| Restore a whole-app copy; profiles, history and library return                  | Pending | Pending |
| Increase device text size/zoom; forms and actions remain readable and reachable | Pending | Pending |
| If local saving is blocked, use the temporary wheel without changing saved data | Pending | Pending |
| Restart/skip Help; reduced motion retains readable rewards                      | Pending | Pending |
| Open in installed mode if offered; label offline launch unsupported             | Pending | Pending |

## Therapist usability tasks

Ask the adult to work without coaching first. Observe where help is needed.

1. Add a child, choose a sound and prepare a small wheel.
2. Explain what will count and what the app does not judge.
3. Let the child spin, practise a word and choose keep/remove.
4. End and find the words practised. Add a pronunciation observation.
5. Save a reusable wheel and prepare it for another child.
6. Make a protected backup and explain how to recover it.

Record setup obstacles, labels that needed explanation, controls missed on the phone, whether the child understood the medal bar, and whether celebrations distracted from practice or encouraged rushing. Ask the adult which part helped the session and what they would change. These observations assess usability, not clinical benefit.

Do not change reward pacing automatically from pilot ratings. Bring any proposed change to the accepted product rules back as a concrete decision. Record findings and fixes in feature status before proposing release.
