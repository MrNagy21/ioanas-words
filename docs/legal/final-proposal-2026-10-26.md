# Vorbini: final legal-page proposal

Prepared 26 October 2026 after the requested Astra review. The revised Romanian text is implemented in `src/legal/documents.ts`, with review notes kept separate from the policy body. This is the final proposal for this editing pass, not a statement that the privacy notice is complete for public release. No public deployment has been made.

## Recommended package

Use the short Terms and Privacy pages. Keep the existing fair liability paragraph, permission for home and professional use, clinical limitations, and local-backup explanation. Add no zero-fee liability cap, blanket indemnity, exclusive-court clause or claim that use of a privacy page constitutes consent. No new consent record, checkbox, cookie banner, child-data upload or third-party integration is included.

The revised Terms explain adult authority, including authorized caregivers; professional responsibilities without transferring the company's duties; participation rather than correct pronunciation; and backup/restore when moving to another browser, device or website address. Changing browsers alone does not delete the original records.

The Privacy page identifies Google/Gmail and Darius as the support contact, based on the owner's confirmation. Support does not involve receiving child backups or remotely accessing their records. It explains the company's role in site operation and support, includes working Google and ANSPDCP links, and preserves the distinction between local browser records and encrypted export files.

Terms and Privacy links are available in the introduction and adult workspace, including profile settings. Both profile creation paths show a short privacy explanation before saving. Links from forms open in a clearly labelled new tab to preserve unsaved input. Review notes and noindex remain until publication facts are settled. The company cannot rely on a draft link as proof of an enforceable agreement.

## Confirmed operating facts

- Provider: Mr. Nagy Software Systems & Consulting S.R.L.; Romanian address, CUI, VAT ID and Trade Register number are documented in `release-notes.md`.
- Public contact: darius@mrnagy.com. The owner says Gmail is used and he accesses the inbox. Public MX records point to Google. This supports identifying the service, not asserting a specific Google Workspace agreement or storage region.
- Support does not involve access to child data, receiving child backups or remote access to the child's records, as confirmed by the owner.
- App profiles, practice history and observations remain local. No app account, clinical scoring, voice recording, child-record upload or analytics integration was found in the prior source review. Public hosting settings remain a separate verification.
- Public hosting is Vercel. There is no linked `.vercel/project.json` or available Vercel CLI in this checkout. No authenticated dashboard settings were inspected in this pass.

## Proposed support policy for adoption

The following is a recommendation, not a retention practice the owner has already confirmed:

1. Darius handles support through the supplied inbox. Limit access to people who actually handle these requests, protect the account with multifactor authentication, and do not share passwords.
2. Delete ordinary support conversations no later than 90 days after resolution. Review the support folder weekly. If a thread reopens for a real unresolved issue, document the later resolution date; do not reset retention merely by sending an administrative message.
3. Keep only the information necessary for a specific legal duty or actual dispute separately, with its reason and review/deletion date. Do not use this exception to retain the entire mailbox indefinitely.
4. Do not request child records. If someone nevertheless sends sensitive information, restrict access, avoid forwarding or downloading it, and promptly arrange deletion of unnecessary content. Assess any actual incident separately. Mailbox deletion does not establish when all provider backups expire.
5. Handle data-rights requests using the existing one-month response rule and retain only the evidence justified by the applicable duty. Do not promise remote deletion of records that exist only in the user's browser.

After adoption and verification of Google's applicable deletion/retention terms, insert this ordinary-support wording into the policy:

> Ștergem conversațiile obișnuite de suport în cel mult 90 de zile de la rezolvarea solicitării. Dacă anumite informații sunt necesare pentru o obligație legală sau un litigiu, păstrăm separat numai acele informații, pe durata justificată de situație.

The 90-day period is a proportionate proposed operating choice for this small service, not a statutory period or a requirement found in Google documentation.

## Processing roles and proposed lawful bases

This is an internal assessment to confirm against the actual agreements and deployment. It is not a blanket GDPR exemption for local software.

| Activity                                    | Current assessment                                                                                                                                                               | Basis and limits proposed for confirmation                                                                                                                                                                                                                                                                                         |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Delivering and securing the public site     | Company determines the service purpose. Vercel handles network data; contractual roles vary by data category.                                                                    | Legitimate interest in delivering and protecting the requested site, subject to a documented necessity/balancing check against the enabled logs. No advertising, profiling or unrelated reuse is proposed.                                                                                                                         |
| Ordinary support email                      | Company is controller for the request it receives. Google provides the email service under the actual account terms.                                                             | Legitimate interest in answering a person's voluntary technical enquiry. Do not claim contract necessity for every enquiry or require consent simply to answer. Proposed 90-day post-resolution retention limits exposure.                                                                                                         |
| Rights requests and applicable legal duties | Company handles requests concerning its own processing.                                                                                                                          | Legal obligation where the applicable law requires the processing. Preserve only necessary evidence under a justified retention rule.                                                                                                                                                                                              |
| Local child records used by a cabinet       | Professional chooses child, exercise purpose, observations, retention and recipients. Company supplies the tool; the described service and support do not receive these records. | Working assessment is software supply rather than an agreed hosted processing service. Do not automatically require an Article 28 contract. The professional must determine its own basis and any Article 9 condition for health-context records. App design and lack of access alone do not settle all possible controller roles. |
| Local family use                            | Adult selects and manages the activity and device.                                                                                                                               | A parent's personal/household exception does not automatically extend to the commercial provider's website or support processing.                                                                                                                                                                                                  |

For site security and support, the proposed interests are specific: serve the requested pages safely and answer voluntary questions. The affected adults can reasonably expect these operations. Data minimization, short justified retention, limited inbox access, no marketing use and a route to object reduce impact. This preliminary assessment is incomplete until the actual logging fields, retention and provider uses are known. Reassess before adding tracking, remote support, cloud sync, voice capture or a contract to process a cabinet's child records.

Suggested final wording once the assessment and settings are confirmed:

> Pentru livrarea și protejarea site-ului și pentru răspunsurile la solicitările obișnuite de suport ne bazăm pe interesul legitim de a oferi un serviciu funcțional și sigur și de a răspunde persoanelor care ne contactează. Folosim numai datele necesare acestor scopuri. Pentru cererile privind drepturile asupra datelor și alte obligații prevăzute de lege, temeiul este îndeplinirea obligației legale aplicabile.

## Remaining release decisions

1. Adopt or adjust the proposed 90-day support policy and put it into practice. Confirm the actual Google account type and contractual/deletion/transfer terms; do not infer Workspace from a custom email address.
2. Verify the actual Vercel account agreement, enabled request/security/runtime logs, any drains or analytics, retention for each relevant category, recipient entities, and the applicable international-transfer safeguard. Vercel's public runtime-log limits differ by plan and do not describe every security/access log. Enter the resulting facts in the Privacy page rather than copying a default period.
3. With those facts, finish the lawful-basis/role assessment, replace the review notes, set the effective date and retain the released text. Verify links and actual requests/cookies on the release origin. A new custom domain is not required; moving origins requires a backup/restore notice.

The editing pass can be reviewed now. The remaining facts cannot be truthfully supplied from the source repository alone. No additional clinical claims, blanket liability waiver or generic consent screen is needed to complete this proposal. This AI-assisted proposal does not certify legal compliance.

## Implementation verification

Production build/TypeScript, lint and formatting pass. WebKit checks both legal pages at mobile/desktop sizes and narrow enlarged-text sizes. Both profile creation paths preserve entered text across the new privacy tab and still save successfully. Introduction and profile-settings links are reachable, draft/noindex remains, both Tailscale routes return 200, and no page errors were observed. A hidden-footer issue found in the first probe was corrected by placing the links directly in profile settings. Screenshot evidence is in `/Users/darius/.t3/userdata/artifacts/vorbini-legal-proposal-2026-10-26/`. These are implementation checks, not a legal-compliance certification.

## Sources and evidence limits

Consulted 26 October 2026:

- [EDPB: transparency and rights](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en). Disclosure before processing is distinct from a consent request.
- [EDPB: data protection basics](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en). Minimize data and retention, identify a lawful basis, and assess sensitive data in context.
- [EDPB Guidelines 07/2020](https://www.edpb.europa.eu/system/files/documents/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf). Role analysis depends on actual purposes and essential means, not only possession of data.
- [Vercel DPA](https://vercel.com/legal/dpa), sections 4 and 13 and Schedule 1. Provider roles and international processing differ by data category. Public terms do not prove the project's accepted agreement.
- [Vercel runtime logs](https://vercel.com/docs/logs/runtime). Retention varies by plan; these limits are not a complete hosting-retention policy.
- [Google privacy policy](https://policies.google.com/privacy?hl=ro) and [Google Cloud Data Processing Addendum](https://cloud.google.com/terms/data-processing-addendum/). These describe different contractual contexts. The Workspace addendum was not assumed to apply to the supplied inbox.
- [Astra review](astra-review-2026-10-26.md) records the provider-protection analysis and legal-source limitations.

Next implementation prompt:

```text
Finish Vorbini's legal release using docs/legal/final-proposal-2026-10-26.md and src/legal/documents.ts. Adopt the agreed support-retention practice and verify actual Google/Vercel terms, settings, retention and safeguards. Update the scoped role/lawful-basis assessment. Replace only the remaining review notes with confirmed facts, set and archive the effective version, verify mobile links plus deployed-origin data flows, and deploy only when authorized. Preserve browser-only child records and all game rules.
```
