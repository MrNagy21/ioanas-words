/** Review drafts. Operational policy and legal review remain pending before publication. */
export type LegalDocument = {
  title: string;
  summary: string;
  reviewNotes: string[];
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    contactEmail?: string;
    links?: { label: string; href: string }[];
  }[];
};

const providerDetails = [
  "Sediul: Strada Mădăras, nr. 310, sat Mădăras, comuna Mădăras, județul Bihor, cod poștal 417330, România.",
  "CUI: 45607135 · Cod TVA: RO45607135 · Registrul Comerțului: J2022000280055.",
];
const contactEmail = "darius@mrnagy.com";

export const legalDocuments: Record<"terms" | "privacy", LegalDocument> = {
  terms: {
    title: "Termeni de utilizare",
    summary:
      "Ce oferă Vorbini și ce trebuie să știți când o folosiți împreună cu un copil.",
    reviewNotes: [
      "Propunere revizuită la 26 octombrie 2026. Data intrării în vigoare se stabilește la publicare, după încheierea verificărilor pentru lansare.",
    ],
    sections: [
      {
        id: "furnizor",
        title: "Cine oferă aplicația",
        contactEmail,
        paragraphs: [
          "Vorbini este oferită de Mr. Nagy Software Systems & Consulting S.R.L.",
          ...providerDetails,
        ],
      },
      {
        id: "utilizare",
        title: "Un joc pregătit de adult",
        paragraphs: [
          "Vorbini este un instrument pentru exersarea cuvintelor și a pronunției, destinat logopezilor și părinților din România. Adultul gestionează aplicația, pregătește activitatea și îl însoțește pe copil în timpul jocului. El alege exercițiile potrivite și face pauză atunci când copilul are nevoie.",
          "Creați și gestionați un profil numai dacă aveți dreptul să lucrați cu datele copilului, ca părinte, reprezentant legal, adult împuternicit sau profesionist. Dacă folosiți aplicația în cabinet, stabiliți cine poate vedea datele, cât timp le păstrați și ce informare oferiți familiei. Aceste responsabilități nu înlocuiesc obligațiile proprii ale furnizorului.",
          "Versiunea actuală poate fi folosită fără cont și fără plată. Dacă vom introduce servicii cu plată, prețul și condițiile lor vor fi prezentate separat, înainte de orice achiziție.",
        ],
      },
      {
        id: "limite",
        title: "Exersarea nu este o evaluare clinică",
        paragraphs: [
          "Aplicația nu înregistrează vocea și nu stabilește dacă un cuvânt a fost pronunțat corect. Când închideți imaginea unui cuvânt într-o rundă cu profil, aplicația îl adaugă în istoricul de exersare. Medaliile automate răsplătesc participarea. Aprecierile despre pronunție sunt introduse de adult.",
          "Totalurile pentru sunetul ales al roții arată cât s-a exersat cu acea roată. Ele nu confirmă pronunția corectă sau prezența verificată a sunetului în fiecare cuvânt.",
          "Vorbini nu oferă un diagnostic și nu înlocuiește evaluarea sau recomandările unui specialist. Nu promitem un anumit rezultat sau un termen în care copilul va progresa. Profesionistul rămâne responsabil pentru propriile decizii și pentru obligațiile aplicabile activității sale.",
        ],
      },
      {
        id: "date",
        title: "Păstrați o copie a progresului",
        paragraphs: [
          "Profilurile și istoricul sunt păstrate în browserul și la adresa site-ului pe care le folosiți. Nu se transferă automat într-un alt browser, pe alt dispozitiv sau la o altă adresă a aplicației. Ștergerea datelor site-ului ori pierderea dispozitivului poate duce la pierderea istoricului. Înainte de o mutare, exportați o copie de siguranță cu parolă și restaurați-o la noua adresă sau pe noul dispozitiv.",
          "Descărcați periodic o copie de siguranță cu parolă. Păstrați fișierul și parola în siguranță. Nu putem recupera o parolă pierdută sau date locale pe care nu le primim. Pentru un copil, folosiți o poreclă sau un cod și oferiți acces doar persoanelor autorizate.",
        ],
      },
      {
        id: "permisiuni",
        title: "Cum puteți folosi conținutul",
        paragraphs: [
          "Puteți folosi aplicația acasă și în ședințele profesionale cu copiii. Această permisiune nu transferă drepturile asupra aplicației sau materialelor sale. Nu redistribuiți și nu revindeți separat imaginile ori colecția de conținut fără permisiune, cu excepția situațiilor permise de lege sau de licențele aplicabile.",
          "Nu încercați să compromiteți aplicația, să accesați datele altor persoane ori să o folosiți în mod ilegal. Drepturile aplicabile componentelor cu licențe proprii rămân valabile.",
        ],
      },
      {
        id: "disponibilitate",
        title: "Disponibilitate și răspundere",
        paragraphs: [
          "Este nevoie de conexiune la internet pentru a deschide aplicația, inclusiv după instalarea pe ecranul principal. Pot exista întreruperi, erori sau perioade de mentenanță. Nu garantăm acces neîntrerupt sau absența oricărei erori.",
          "Aceste explicații despre limitele aplicației nu elimină răspunderea pe care legea nu permite să o limităm și nu reduc drepturile obligatorii ale consumatorilor. Răspunderea fiecărei părți se stabilește potrivit legii aplicabile.",
        ],
      },
      {
        id: "modificari",
        title: "Modificări și întrebări",
        paragraphs: [
          "Versiunile noi ale termenilor vor avea o dată de intrare în vigoare. Vom comunica schimbările importante înainte să se aplice, atunci când legea o cere, și vom solicita un acord separat dacă este necesar. Modificările nu anulează drepturile deja dobândite.",
          "Pentru întrebări sau reclamații, folosiți contactul furnizorului indicat la începutul paginii. Vă păstrați dreptul de a vă adresa autorităților și instanțelor competente potrivit legii.",
        ],
      },
    ],
  },
  privacy: {
    title: "Politica de confidențialitate",
    summary:
      "Ce rămâne pe dispozitiv, ce date sunt necesare pentru site și cum puteți controla informațiile.",
    reviewNotes: [
      "Propunere revizuită la 26 octombrie 2026. Publicarea așteaptă confirmarea următoarelor detalii și stabilirea datei de intrare în vigoare.",
      "Găzduire: contractul Vercel aplicabil, jurnalele activate, durata de păstrare, destinatarii și garanțiile pentru transferuri internaționale. Documentația publică nu confirmă setările acestui proiect.",
      "Suport: propunem ștergerea conversațiilor obișnuite în cel mult 90 de zile de la rezolvarea solicitării. Pentru obligații legale sau litigii se păstrează separat numai informațiile necesare, pe durata justificată. Regula trebuie adoptată și pusă în practică înainte de a fi prezentată ca politică în vigoare.",
      "E-mail: trebuie confirmat tipul contului Google/Gmail, condițiile aplicabile și garanțiile pentru transferuri. Folosirea Gmail nu dovedește că există un acord Google Workspace.",
      "Analiza temeiurilor juridice și a rolurilor pentru datele locale este documentată în propunerea de lansare și trebuie încheiată înainte de publicare.",
    ],
    sections: [
      {
        id: "responsabil",
        title: "Cine răspunde de date",
        contactEmail,
        paragraphs: [
          "Furnizorul aplicației Vorbini este Mr. Nagy Software Systems & Consulting S.R.L. Aplicația se adresează logopezilor și părinților din România, iar profilurile copiilor sunt gestionate de adulți.",
          ...providerDetails,
          "Compania este operator pentru datele tehnice folosite la administrarea și protejarea site-ului și pentru mesajele de suport pe care le primește.",
          "Dacă folosiți Vorbini printr-un cabinet, întrebați profesionistul cum gestionează informațiile copilului și cui vă puteți adresa. Prezenta pagină nu înlocuiește informarea cabinetului despre propria activitate.",
        ],
      },
      {
        id: "profiluri",
        title: "Profilurile copiilor rămân în browser",
        paragraphs: [
          "Aplicația salvează local porecla sau codul copilului, personajul ales, sunetele urmărite, cuvintele exersate, datele rundelor, medaliile și observațiile despre pronunție introduse de adult. Configurațiile roților și preferințele sunt salvate tot local. Aceste informații permit reluarea jocului și afișarea istoricului.",
          "În versiunea actuală, aplicația nu trimite aceste înregistrări către serverul nostru și nu le sincronizează între dispozitive. Nu cerem numele complet, data nașterii, fotografii sau înregistrări vocale. Nu folosim microfonul și nu analizăm automat vocea copilului.",
          "O poreclă nu face neapărat datele anonime. Observațiile despre pronunție pot fi sensibile, mai ales în context profesional. Folosiți numai informațiile necesare și protejați accesul la dispozitiv. Datele din browser nu au o parolă separată în aplicație; parola protejează fișierul de siguranță exportat.",
        ],
      },
      {
        id: "stocare",
        title: "Stocare locală și ștergere",
        paragraphs: [
          "Folosim stocarea browserului pentru profiluri, configurații, preferințe și reluarea pașilor de pregătire. Nu am integrat module de publicitate sau analiză a vizitelor în aplicație. Stocarea pentru funcțiile cerute nu este folosită pentru urmărire publicitară.",
          "Datele locale rămân până când le ștergeți sau browserul le elimină. Puteți șterge un profil din setările sale. Puteți elimina toate datele site-ului din setările browserului. Arhivarea unui sunet păstrează istoricul; nu îl șterge.",
          "Copiile deja descărcate, inclusiv cele mutate pe alt dispozitiv sau într-un serviciu cloud ales de dumneavoastră, trebuie șterse separat. Ștergerea din aplicație nu le elimină.",
        ],
      },
      {
        id: "copii",
        title: "Copii de siguranță cu parolă",
        paragraphs: [
          "Exportul și restaurarea se fac în browser. Fișierul de siguranță este criptat cu parola aleasă. Aplicația nu ne trimite fișierul ori parola și nu avem o copie din care să recuperăm datele pierdute.",
          "Alegeți cu grijă cui trimiteți copia și cum păstrați parola. Pentru ajutor tehnic, nu ne trimiteți istoricul copilului, copii de siguranță sau capturi cu informații care îl pot identifica.",
        ],
      },
      {
        id: "site",
        title: "Date tehnice la deschiderea site-ului",
        paragraphs: [
          "Livrarea paginilor și protejarea site-ului necesită prelucrarea unor date de conexiune, precum adresa IP și informații despre solicitare sau browser. Găzduirea publică folosește Vercel. Aceste date tehnice sunt separate de profilurile salvate local.",
          "Datele de conexiune ajung la furnizorul de găzduire pentru a livra și proteja site-ul. Vercel descrie prelucrări și în afara Spațiului Economic European. Detaliile contractului, păstrării și transferurilor pentru acest proiect sunt încă în curs de confirmare, așa cum arată nota de la începutul paginii.",
        ],
      },
      {
        id: "contact",
        title: "Dacă ne contactați",
        links: [
          {
            label: "Politica de confidențialitate Google",
            href: "https://policies.google.com/privacy?hl=ro",
          },
        ],
        paragraphs: [
          "Un mesaj de suport ne poate transmite adresa de e-mail și informațiile pe care alegeți să le includeți. Folosim aceste informații pentru a trata solicitarea. Descrieți problema fără date despre copil și fără parola copiei de siguranță.",
          "Mesajele trimise la darius@mrnagy.com sunt gestionate de Darius prin serviciul Google/Gmail. Suportul nu presupune primirea copiilor de siguranță ale copiilor sau accesul de la distanță la datele lor. Nu este necesar să ne contactați pentru a folosi jocul.",
          "Informațiile trimise prin e-mail sunt prelucrate și de Google pentru furnizarea serviciului. Perioada de păstrare și condițiile aplicabile acestui cont, inclusiv transferurile, trebuie confirmate înainte de publicarea politicii finale.",
        ],
      },
      {
        id: "drepturi",
        title: "Drepturile dumneavoastră",
        links: [
          {
            label: "Cum depuneți o plângere la ANSPDCP",
            href: "https://www.dataprotection.ro/?page=Plangeri_pagina_principala",
          },
        ],
        paragraphs: [
          "Pentru datele pe care le prelucrăm, puteți cere acces, rectificare, ștergere, restricționare sau portabilitate, în condițiile prevăzute de lege. Vă puteți opune prelucrărilor bazate pe interes legitim. Dacă o prelucrare se bazează pe consimțământ, îl puteți retrage fără să afectați legalitatea prelucrării anterioare.",
          "Cererea se trimite la contactul operatorului indicat mai sus. Răspundem, de regulă, în cel mult o lună; dacă legea permite prelungirea, vă explicăm motivul în acest interval. Puteți depune o plângere la autoritatea competentă de protecție a datelor, inclusiv cea din statul în care locuiți. În România, aceasta este ANSPDCP.",
          "Nu avem acces de la distanță la profilurile locale pentru a le modifica sau șterge în locul dumneavoastră. Folosiți funcțiile aplicației și setările browserului sau cereți ajutor adultului ori cabinetului care gestionează dispozitivul.",
        ],
      },
      {
        id: "actualizari",
        title: "Când se schimbă această politică",
        paragraphs: [
          "Vom actualiza pagina dacă se schimbă modul în care funcționează aplicația sau datele prelucrate. Orice funcție nouă de cont, sincronizare, analiză a vizitelor sau înregistrare vocală necesită o informare nouă și, unde este cazul, un acord separat. Această politică explică prelucrarea datelor; nu vă cere să renunțați la drepturi.",
        ],
      },
    ],
  },
};
