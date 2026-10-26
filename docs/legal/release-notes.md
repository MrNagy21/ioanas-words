# Vorbini legal-page drafts

Prepared 2026-10-26. These are review drafts, not legal approval or a production-ready policy. The user identified the provider as Mr. Nagy Software Systems & Consulting S.R.L. and confirmed Romanian therapists and parents, with adults managing the app. The user supplied VAT ID RO45607135 and public contact darius@mrnagy.com. Public sources supply the Romanian address and current registration number listed below. The owner confirmed Gmail, his own inbox access and no child-data access through support. Operational retention and provider contract/settings details remain unconfirmed. The final custom domain is not a drafting blocker. The current drafts are available at `/ro/termeni` and `/ro/confidentialitate`, carry a visible draft notice and noindex metadata, and are linked from the public introduction and adult workspace, including profile settings. Both profile-creation paths show a privacy notice linked in a new tab to preserve unsaved input. Noindex is not access control. Do not publish the drafts as final notices.

Copy is in `src/legal/documents.ts`; the shared reading layout is `src/components/legal-document.tsx`. No records, storage schema, consent record or acceptance checkbox was added. The text is Romanian and assumes the existing adult-guided app. It does not assert international compliance.

## Facts checked in the code

- Child nickname/avatar, goals, participation, observation ratings, medals and preferences are browser-local. `src/practice/model.ts` defines the fields; `src/storage/practice-store.ts` uses IndexedDB. Shared wheel preferences also use localStorage; onboarding recovery uses sessionStorage.
- Backups use local Web Crypto encryption/decryption. `src/storage/encrypted-backup.ts` uses AES-GCM with a password-derived key. This does not encrypt ordinary live browser records or provide a local profile access password.
- Removing a child removes its associated sessions, turns, observations and awards. Archived goals retain history. Downloaded files are outside the application's deletion control.
- Source/dependency searches found no app analytics SDK, advertising integration, microphone recording or profile-upload request. Fonts/images are local. This is source evidence, not verification of the production hosting dashboard, injected services or every future deployment.
- Vercel hosting handles network traffic. Browser-local profiles do not justify a claim that no personal data is processed anywhere. The supplied support email adds a separate flow. The owner confirmed Google/Gmail and his own access; retention and applicable account terms still need confirmation.

## Local verification

Production build/TypeScript, lint and scoped formatting pass. WebKit checks both pages at 320px, 390px and 1440px, with 200% text, reachable contents/footer links, app return, draft notice and noindex metadata. No page errors were observed. Browser revalidation can return 304, which the probe accepts after checking rendered content. Both Tailscale draft routes return 200. The mobile Terms/Privacy and desktop Terms captures were opened and checked in `/Users/darius/.t3/userdata/artifacts/vorbini-legal-drafts-2026-10-26/`. These checks concern rendering and navigation, not legal sufficiency.

## Information needed before publication

1. Confirm the final public app domain. Both drafts now include the supplied company name, VAT ID and contact email, plus the researched registered address and Trade Register number. Do not infer the app domain from the contact email.
2. Actual Vercel account/provider agreement, enabled logs/analytics/security settings, retention periods or criteria, international transfers and applicable safeguards. Verify the deployed origin's requests/cookies; check project settings, not only application code.
3. Actual Google/Gmail account agreement, access controls, retention and deletion procedure. The user confirmed Gmail and his own inbox access, and support does not access child data. Establish a lawful basis for each server-side flow and document any legitimate-interest assessment. Do not copy Vercel's own controller bases as the app company's bases.
4. Review roles for professional use, including whether pronunciation observations constitute health data in that context and what duties rest with the provider and therapist. Local storage alone does not settle controller/processor roles. Confirm content-use permissions and have jurisdiction-appropriate counsel review the terms and notice.
5. Replace draft sections with confirmed facts and an effective date. Permanent links and pre-profile privacy notices are now implemented; keep them in the final release. Do not bundle privacy disclosure with advertising consent. Decide whether/how contract acceptance must be recorded without inventing a blanket consent requirement.
6. Recheck the final deployed pages, navigation, readable mobile layout and matching data flows. Do not add a cookie banner solely because browser storage exists; assess the purposes and whether each use qualifies for the requested-service exception. Any optional tracking requires a fresh assessment before activation.

## Research

Sources consulted 2026-10-26:

- Company details: [ListaFirme](https://listafirme.ro/mr.-nagy-software-systems-consulting-srl-45607135/) lists CUI 45607135, current Trade Register number J2022000280055 and Mădăras 310, Bihor, postal code 417330. [Termene](https://termene.ro/en/firma/45607135-MR-NAGY-SOFTWARE-SYSTEMS-CONSULTING-SRL) corroborates the full street address and current number; indexed [ANAF material](https://static.anaf.ro/static/1/Cluj/20251114092031_anunt_notificari_1_1500_salonta.pdf) corroborates the company name/CUI and Strada Mădăras, nr. 310, sat/comuna Mădăras, Bihor. The directory registration data is not a newly obtained official ONRC extract. VAT prefix/status is user-supplied, not independently certified. Email is user-supplied. No unrelated company information was added.

- The [European Commission's transparency guidance](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations_en) explains the identity, purposes, legal basis, retention and rights disclosures required when processing personal data. This is why unknown operator/retention facts remain marked for completion.
- [EU guidance on unfair terms](https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-contract-terms/index_en.htm) explains that unfair blanket exclusions may not bind consumers. The draft describes actual product limits and preserves mandatory rights rather than promising complete immunity.
- [Romanian Law 365/2002, Article 5](https://legislatie.just.ro/Public/DetaliiDocument/37075) covers service-provider identification. Applicability and exact company fields depend on the operator's confirmed establishment and activity.
- [Romanian Law 506/2004, Article 4](https://legislatie.just.ro/Public/DetaliiDocument/288598) addresses terminal storage/access, including the strictly necessary requested-service exception. The final deployment must be checked before making a consent/banner decision.
- [Vercel's privacy notice](https://vercel.com/legal/privacy-notice) identifies end-user traffic data including IP addresses. Its [DPA, section 13](https://vercel.com/legal/dpa) discusses processing outside the EEA. Neither source establishes this project's actual retention settings or contractual compliance.
- [ANSPDCP complaint information](https://www.dataprotection.ro/?page=Plangeri_pagina_principala) describes requests and complaints for Romanian data subjects.

Next prompt:

```text
Finalize Vorbini's Romanian Terms and Privacy Policy from src/legal/documents.ts and docs/legal/release-notes.md using the supplied operator/contact/market details and recorded company sources. Confirm hosting and support data flows, lawful bases, retention and transfer safeguards; do not invent these facts. Incorporate legal review, remove the draft status only when complete, add adult-facing and pre-profile links, then verify mobile/desktop and deployed-origin behavior. Preserve child-local records and all existing game rules. Do not deploy without an explicit request.
```

Provider update: both drafts now name Mr. Nagy Software Systems & Consulting S.R.L. and address Romanian therapists/parents with adult-managed use. The rebuilt pages pass TypeScript/build, formatting, 320px with 200% text and Tailscale content checks. Both refreshed phone company-section captures were inspected. Company identification has since been completed from user input and recorded public sources. Operational fields remain explicit drafts.

Company identification verification: production build/TypeScript and scoped ESLint pass. WebKit checks both identity sections and mailto links, 320px with 200% text, no page errors and Tailscale HTTPS 200. Both refreshed 390px company-section captures were visually inspected. The rebuilt app is running on port 3000; no public deployment was performed.

## Independent Astra review

The user-requested Astra high review is complete in [astra-review-2026-10-26.md](astra-review-2026-10-26.md). It recommends retaining the balanced provider limitations and improving participation wording, adult authority/responsibilities, browser/domain migration guidance and the ANSPDCP link. Those wording and link recommendations have now been applied in the editing pass documented below. The remaining factual work concerns hosting/support handling and the actual role in child-data processing; a future custom domain alone need not block drafting. No mandatory checkbox or cookie banner follows merely from this review. Legal references and access limitations, including the date of the Civil Code consolidation used, are documented in the report. No application code, server, production deployment or records changed during review.

Review follow-up prompt:

```text
Apply the agreed plain-Romanian copy fixes in docs/legal/astra-review-2026-10-26.md, keeping authorized caregivers within the adult-use wording and preserving the fair liability clause. Establish real Vercel and support-email data handling and document local-record roles before replacing factual placeholders. Do not invent retention or consent requirements. Keep draft status until disclosures are complete; add final adult-facing and pre-profile links at finalization. Verify resulting mobile pages. Do not deploy without authorization.
```

## Revised proposal after the review

The user authorized the necessary updates and confirmed that Gmail is used, he can access the inbox, and support does not involve child-data access. See [the final proposal for this editing pass](final-proposal-2026-10-26.md). Applied the clearer participation wording, adult authority including authorized caregivers, professional responsibilities, browser/domain migration advice, Google/Gmail disclosure and working ANSPDCP link. Added introduction/adult-menu links and a short privacy notice in both profile creation paths. Forms open the policy in a labelled new tab so unfinished input stays intact. Review notes are separated below the legal text, with a visible notice and jump link at the top; noindex remains. No consent system, hosted records or analytics were introduced.

The proposal records the current local-data role assessment, proposed lawful bases and a concrete ordinary-support retention rule of no more than 90 days after resolution. That rule is explicitly awaiting adoption, not an asserted current practice. The remaining release work is actual Google/Vercel agreement/settings/retention/transfer verification and finalizing the corresponding disclosures, then setting and retaining the effective version. No deployment was made.

Verification of the revised proposal: final production build/TypeScript, full ESLint and scoped Prettier checks pass. The WebKit probe passes mobile/desktop, 320px with 200% text, company/email/authority links, draft/noindex, both profile creation paths opening privacy in a new tab without losing input, subsequent saves, profile-settings policy links and both Tailscale HTTPS routes. No page errors were observed. The first probe found that the workspace footer is intentionally hidden in profile screens; links were added directly to profile settings and the final probe passes. No storage or counting behavior changed. Evidence is in `/Users/darius/.t3/userdata/artifacts/vorbini-legal-proposal-2026-10-26/`; the temporary probe is `/tmp/vorbini-final-legal-qa.cjs`. These checks verify implementation, not legal sufficiency or physical-device acceptance. The rebuilt app remains on port 3000.
