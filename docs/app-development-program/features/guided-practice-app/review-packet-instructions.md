# Verificarea sunetelor din Word Wheel

Acest pachet este pentru persoana care va verifica sunetele românești. Nu conține date despre copii. Nicio decizie nu este completată automat, iar fișierele nu schimbă aplicația.

## Înainte de a începe

În `packet.json`, câmpul `label` arată alegerea din interfața aplicației, de exemplu S. Litera sau grupul de litere nu este o definiție fonetică. Definiți sunetul urmărit și cum stabiliți poziția lui în cuvânt. Notați explicit cazurile ambigue, variantele de pronunție și situațiile în care nu se poate lua o decizie sigură.

Completați:

| Câmp                     | Ce trebuie trecut                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `targetId`               | Un identificator stabil pentru ținta definită, convenit cu persoana care integrează verificarea                 |
| `definition`             | Sunetul urmărit, criteriile pentru început/mijloc/final și limitele verificării                                 |
| `reviewer`               | Numele persoanei care face verificarea                                                                          |
| `reviewReference`        | Referința documentului sau a notei care confirmă această verificare                                             |
| `reviewedOn`             | Data verificării, în format AAAA-LL-ZZ                                                                          |
| `proposedMappingVersion` | O versiune nouă, convenită la integrare; nu modificați versiunea din `baseline`                                 |
| `approved`               | Lăsați `false` până când verificarea pentru rândurile completate este confirmată. Folosiți `true` doar la final |

Păstrați neschimbate `schemaVersion`, `locale`, `label` și întregul obiect `baseline`. Acestea identifică lista pe care ați primit-o. Dacă lista aplicației se schimbă, deciziile trebuie comparate cu un pachet nou înainte de integrare.

## Cum se completează `words.csv`

Deschideți fișierul ca CSV UTF-8, cu virgulă ca separator. Păstrați formatul CSV la salvare. Pachetul include toate cuvintele aprobate din lista curentă, astfel încât absența unui sunet să poată fi verificată explicit. Numărul lor este în `baseline.wordCount`. Pachetul nu selectează cuvintele după literele din scriere.

Nu modificați `word_id`, `word`, `image` sau `target_label` și nu ștergeți rânduri. Câmpul `image` este calea imaginii din aplicație. `target_label` leagă fiecare rând de ținta acestui pachet, ca să nu amestecați din greșeală foile pentru sunete diferite. Dacă un cuvânt este ambiguu, păstrați decizia `unknown` și explicați în `notes` ce trebuie lămurit.

În `decision`, folosiți:

- `present`: sunetul definit este prezent. Completați fiecare poziție cu `yes` sau `no`; cel puțin una trebuie să fie `yes`.
- `absent`: ați verificat cuvântul și sunetul definit nu este prezent. Toate cele trei poziții trebuie să fie `no`.
- `unknown`: cuvântul nu este verificat sau decizia rămâne nesigură. Lăsați cele trei poziții goale. O celulă de decizie goală este tot necunoscută, nu absență.

Coloanele `initial`, `medial` și `final` înseamnă început, mijloc și final, conform definiției dumneavoastră. Același cuvânt poate avea mai multe poziții marcate `yes`.

Referința generală din `packet.json` acoperă rândurile verificate în acest pachet. În `review_reference` puteți adăuga o referință mai precisă pentru un rând. Folosiți `notes` pentru explicații. Nu introduceți informații despre copii.

Puteți returna o verificare parțială. Lăsați restul rândurilor `unknown` și precizați în referința verificării că acoperirea este parțială. Cel puțin un cuvânt trebuie verificat pentru ca pachetul să treacă verificările tehnice.

## Ce se întâmplă după verificare

Returnați împreună `packet.json`, `words.csv` și acest fișier. Persoana care integrează datele va rula verificările tehnice, va confirma cu dumneavoastră definiția și acoperirea, apoi va pregăti separat o versiune nouă a listei de sunete. Trecerea verificării tehnice nu confirmă identitatea sau competența persoanei care a completat fișierele.

Aplicația păstrează necunoscute cuvintele neverificate. Istoricul exersărilor deja salvate nu primește credite retroactive când apare o listă nouă. Medaliile pentru participare funcționează separat de această verificare.
