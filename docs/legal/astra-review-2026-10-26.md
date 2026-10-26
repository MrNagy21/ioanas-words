# Vorbini Terms and Privacy review

Reviewed 2026-10-26 for the software provider. This is an independent AI legal-style review, not advice from licensed counsel, legal approval or GDPR certification. App files were not changed.

The drafts are a sound, readable foundation. Their strongest protection is an accurate description of the service. Keep that approach. They are not ready to become final notices because the hosting and support disclosures still contain factual placeholders. Adding sweeping exclusions would not solve those gaps. Keep the company identification, home and professional use permission, no clinical promises, online-opening warning, local deletion instructions, and the distinction between encrypted backup files and ordinary browser records without a separate app password.

Evidence comes from `src/legal/documents.ts`, the shared legal layout, both legal routes, `docs/legal/release-notes.md`, the required project documents, and targeted source reads of storage, backups, profiles, onboarding and the public introduction. The graph catalog contained five other projects and no Word Wheel index, so this review claims no graph coverage. Source searches found no application analytics, recording or profile-upload integration; this does not certify the deployed hosting configuration. Existing rendering checks were not rerun for this document-only review.

## A. Changes we can prepare now

### 1. High priority: make final notices reachable and distinguish notice from agreement

Locations: `src/components/legal-document.tsx:26`, `app/[locale]/termeni/page.tsx:5`, `app/[locale]/confidentialitate/page.tsx:5`; publication steps in `docs/legal/release-notes.md`.

The visible draft label and isolated routes are appropriate during review. At finalization, add persistent adult-facing links and a privacy link before profile creation. Date and retain each published version. Noindex is not access control. A hidden page gives weak evidence that a user knew the terms. A privacy notice does not need an acceptance checkbox merely to satisfy transparency. See [EDPB transparency guidance](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en).

Do not add "continued use means acceptance" as a substitute for an agreement mechanism. Romanian Civil Code Article 1203 requires express written acceptance for specified unusual standard clauses, including liability limits, unilateral termination, governing law and court derogations. A generic checkbox is not a guaranteed cure. If relying on those clauses, design adult acceptance and evidence of the exact version with Romanian counsel. The current factual limitations can remain without pretending there is already such a record. See [Civil Code, Articles 1203 and 1355 and 1356](https://www.fgaromania.ro/storage/2024/05/Codul-Civil.pdf). This publicly hosted consolidation is dated May 2024; final clause execution should use the latest official text, whose portal fetch was unreliable during this review.

Suggested pre-profile notice, with the last phrase linked:

> Profilul se salvează în browserul acestui dispozitiv. Folosiți o poreclă sau un cod și protejați accesul la dispozitiv. Citiți cum sunt păstrate datele și cum le puteți șterge.

### 2. Medium priority: explain what counts without suggesting verified sound credit

Location: Terms `limite`, `src/legal/documents.ts:47`.

"Un cuvânt închis" is unclear Romanian. The code records closing the displayed result, not observed correct pronunciation. Automatic wheel goals record practice for the chosen target; reviewed phoneme attribution is a separate feature. Replace the first paragraph with:

> Aplicația nu înregistrează vocea și nu stabilește dacă un cuvânt a fost pronunțat corect. Când închideți imaginea unui cuvânt în timpul unei runde cu profil, aplicația îl adaugă în istoricul de exersare. Medaliile automate răsplătesc participarea. Aprecierile despre pronunție sunt introduse de adult. Un total asociat unei roți arată exersarea pentru ținta aleasă; nu confirmă pronunția corectă sau verificarea fiecărui sunet din cuvinte.

Keep the existing no-diagnosis and no-results-promise paragraph. The public introduction also needs consistent wording when verified totals become available.

### 3. Medium priority: state the adult's data responsibilities without transferring ours

Locations: Terms `utilizare` and `date`, lines 39 and 55; Privacy `profiluri`, line 107.

Add:

> Creați și gestionați un profil numai dacă sunteți părintele, reprezentantul legal sau un profesionist autorizat să lucreze cu datele copilului. Dacă folosiți aplicația în cabinet, stabiliți cine poate vedea datele, cât timp le păstrați și ce informare oferiți familiei. Aceste responsabilități nu înlocuiesc obligațiile proprii ale furnizorului.

Do not require every therapist to obtain GDPR consent for every operation. They need an applicable legal basis and, where observations reveal health information, an Article 9 condition. The appropriate condition depends on the professional context. See [EDPB on sensitive data and lawful processing](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en).

### 4. Medium priority: close two practical clarity gaps

Location: Terms `date`, line 55. Merely switching browsers does not delete the original records. A domain change also changes the browser storage origin. Use:

> Profilurile și istoricul sunt păstrate în browserul și la adresa site-ului pe care le folosiți. Nu se transferă automat într-un alt browser, pe alt dispozitiv sau la o altă adresă a aplicației. Ștergerea datelor site-ului ori pierderea dispozitivului poate duce la pierderea istoricului. Înainte de o mutare, exportați o copie de siguranță cu parolă.

Location: Privacy `drepturi`, line 148. Render ANSPDCP as a working link to its [complaints page](https://www.dataprotection.ro/?page=Plangeri_pagina_principala). The existing one-month response language, qualified rights and explanation of local deletion should stay.

## B. Facts and operational policies to establish

### 5. High priority: complete two specific data flows

Locations: Privacy `responsabil`, `site`, `contact`, lines 97, 132 and 140.

The company is the natural controller candidate for its own site operation and support handling. Replace the blanket role placeholder with a scoped statement once the actual arrangements are confirmed:

> Mr. Nagy Software Systems & Consulting S.R.L. este operator pentru datele tehnice folosite la administrarea și protejarea site-ului și pentru mesajele de suport pe care le primește.

For each flow, record purpose, data, company legal basis, recipients, retention or usable criteria, and transfers with the applicable safeguard and how to obtain it. Do not invent "30 days," EU-only hosting or a consent basis. GDPR Article 13 requires these disclosures; [EU transparency guidance](https://europa.eu/youreurope/business/dealing-with-customers/data-protection/data-protection-gdpr/index_en.htm) explains the fields.

A documented legitimate-interest assessment may support proportionate security logs and ordinary enquiries. Contract necessity applies only where actually necessary for a contract with that data subject; rights requests may involve legal obligations. Vercel's own controller basis is not the company's basis.

Do not put an internal access-control checklist into the public policy. Establish internally who reads support, when mail and attachments are deleted, and how accidental child information is restricted and removed. A warning not to send sensitive information does not prevent receiving it.

### 6. High priority, bounded: record the role analysis for local child records

Locations: Privacy `responsabil` and `profiluri`, lines 97 to 107.

Local-only processing reduces exposure but does not itself settle GDPR roles. Assess who determines each processing purpose and its essential means. A software supplier is not automatically the therapist's processor, and lack of access does not automatically exclude controllership. Do not demand an Article 28 agreement without an actual processing-on-behalf relationship. See [EDPB Guidelines 07/2020, sections 2 and 3](https://www.edpb.europa.eu/system/files/documents/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf).

On the observed design, the professional selects the child, purpose, observations, retention and recipients; the company supplies a local tool and receives no child records through it. Document whether support, contracts or actual workflows change that assessment. Home use may fall within the household exception for the parent, not automatically for a commercial provider. If the company is a controller for any local operation, explain that operation and its basis, including any necessary Article 9 condition, rather than assigning everything to the adult.

Keep this existing accurate statement:

> Dacă folosiți Vorbini printr-un cabinet, întrebați profesionistul cum gestionează informațiile copilului și cui vă puteți adresa.

### 7. Medium priority: confirm necessary storage on the deployed origin

Location: Privacy `stocare`, line 114.

Browser storage is not exempt simply because it is not a cookie. Profiles, saved wheels and recovery appear connected to requested functions. Verify each purpose and any hosting cookies before release. No blanket banner is justified by IndexedDB alone. The requested-service exception is in Law 506/2004 Article 4(6)(b), also discussed by [ANSPDCP in its annual report, page 49](https://www.dataprotection.ro/servlet/ViewDocument?id=2940). Optional tracking needs a separate assessment before activation.

## C. Provider improvements that are optional

Keep the current liability paragraph. "Maximum liability equals fees paid" would effectively mean zero here. Blanket data-loss exclusions, indemnities and exclusive Bihor jurisdiction add enforceability risk. Clear service limits and fair consumer protections are more useful. See [Law 193/2000, Articles 1 and 4 and its annex](https://anpc.ro/wp-content/uploads/2025/05/Legea-nr.-193-2000-privind-clauzele-abuzive-din-contractele-incheiate-intre-profesionisti-si-consumatori-.pdf).

The existing content permission already covers professional sessions, preserves third-party licences and does not transfer IP. Avoid stronger ownership claims without the asset-rights record. Do not add a licence over child records that the provider neither receives nor needs.

A planned shutdown/export policy would protect users and reduce disputes. Choose an achievable notice period before promising one. Do not reserve unrestricted immediate termination or retroactive changes. Distinguish security emergencies from planned closure. If introducing a contractual termination right, revisit finding 1.

Free use does not settle every consumer-law question. OUG 141/2021 Article 3 has a specific exception where personal data are used exclusively to supply the service or meet legal requirements. Verify the actual purposes before deciding its scope; the present mandatory-rights reservation can stay. See [OUG 141/2021](https://legislatie.just.ro/Public/FormaPrintabila/00000G2C6B82UM8PJ173NHZTP6BIFKMF).

Current practice and participation wording does not warrant declaring the app a medical device. Keep claims consistent across marketing and product UI. Any future claim to diagnose, treat or clinically monitor speech disorders needs a fresh intended-purpose assessment; a disclaimer alone does not determine classification. See [MDCG 2019-11 revision 1, June 2025](https://health.ec.europa.eu/document/download/b45335c5-1679-4c71-a91c-fc7a4d37f12b_en?filename=md_mdcg_2019_11_guidance_qualification_classification_software_en.pdf).

Do not add the obsolete EU ODR platform link. Its founding regulation was repealed on 20 July 2025 by [Regulation 2024/3228](https://eur-lex.europa.eu/eli/reg/2024/3228/oj/eng).

## Minimum answers needed to finalize

1. What Vercel entity/agreement, logging/security settings, retention and transfer arrangements apply to this deployment?
2. Which email provider and locations handle support, who has access, and what retention/deletion practice will actually be followed?
3. Does any real support or professional arrangement involve receiving backups, remote access or processing child records for a cabinet? If none, record that fact and complete the bounded role analysis above.

Company identity need not be requested again. Choosing a future custom domain need not block drafting; identify the actual deployment at publication and plan backup/restore before moving origins. A new acceptance system, numerical liability cap, DPO appointment or cookie banner is not automatically required by this review. Keep the drafts marked until factual disclosures are complete, then verify the final deployed flows and navigation under separate deployment authorization.
