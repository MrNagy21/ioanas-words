import { AppFooter } from "@/components/app-footer";
import { Brand } from "@/components/brand";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReturningAdult } from "@/components/practice/returning-adult";
import { getApprovedWords } from "@/content/loaders";
import { AVATAR_WORD_IDS } from "@/practice/model";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "ro" }];
}
export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  if ((await params).locale !== "ro") notFound();
  const words = getApprovedWords("ro").filter((w) =>
    (AVATAR_WORD_IDS as readonly string[]).includes(w.id),
  );
  return (
    <main className="practice-shell intro-shell">
      <ReturningAdult />
      <div className="practice-frame">
        <header className="practice-header">
          <Link className="practice-brand" href="/ro/about?show=1">
            <Brand />
          </Link>
          <Link className="quiet-link" href="/ro/practice">
            Deschide aplicația
          </Link>
        </header>
        <section className="intro-hero">
          <div>
            <h1>
              Exersăm câte
              <br />
              un cuvânt.
            </h1>
            <p>
              O imagine, un cuvânt și încă o ocazie de a exersa împreună.
              Copilul învârte roata, iar fiecare cuvânt îl apropie de o medalie.
            </p>
            <p>
              Pentru momentele de exersare cu logopedul sau acasă, alături de un
              părinte.
            </p>
            <div className="practice-form-actions">
              <Link className="spin-button" href="/ro/practice">
                Creează primul profil
              </Link>
              <Link className="secondary-button" href="/ro/demo">
                Încearcă jocul
              </Link>
            </div>
            <p className="intro-local">
              Fără cont. Pe telefon, tabletă sau calculator. Demo-ul nu salvează
              nimic în profilurile copiilor.
            </p>
          </div>
          <div className="intro-word-board" aria-label="Câteva imagini din joc">
            {words.map((w) => (
              <figure key={w.id}>
                <Image
                  src={w.image}
                  alt={w.alt}
                  width={160}
                  height={160}
                  unoptimized
                />
                <figcaption>{w.display}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className="intro-how" aria-labelledby="how-title">
          <h2 id="how-title">Voi alegeți cuvintele. Copilul începe joaca.</h2>
          <ol>
            <li>
              <h3>Un profil, doar al lui</h3>
              <p>
                O poreclă și un animal preferat sunt suficiente. Alegeți
                sunetele de exersat acum sau reveniți la ele mai târziu.
              </p>
            </li>
            <li>
              <h3>Pregătiți o roată</h3>
              <p>
                Alegeți câteva cuvinte potrivite pentru astăzi. Salvați roata și
                o puteți folosi din nou, cu oricare dintre copii.
              </p>
            </li>
            <li>
              <h3>Învârtiți și exersați</h3>
              <p>
                Copilul vede o imagine și un cuvânt mare. Păstrați cuvântul
                pentru alte repetări sau scoateți-l din roată.
              </p>
            </li>
            <li>
              <h3>Bucurați-vă de fiecare pas</h3>
              <p>
                Când închideți imaginea, cuvântul intră în istoric și bara
                medaliei crește. Fără cronometru, fără puncte pierdute.
              </p>
            </li>
          </ol>
        </section>
        <section className="intro-honest">
          <h2>Voi observați pronunția. Jocul ține minte exersarea.</h2>
          <p>
            Vedeți ce cuvinte a exersat copilul și notați cum merge pronunția,
            când vi se pare util. Medaliile răsplătesc participarea. Aplicația
            nu ascultă copilul și nu îi dă note automat.
          </p>
          <p>
            În această versiune numărăm cuvintele exersate. Totalurile pe sunete
            vor apărea după ce lista de cuvinte este verificată.
          </p>
          <h2>Fără cont. Cu o copie de siguranță la îndemână.</h2>
          <p>
            Profilurile rămân în browserul de pe acest dispozitiv. Descărcați o
            copie cu parolă ca să le puteți recupera sau muta. Aveți nevoie de
            internet ca să deschideți aplicația.
          </p>
          <Link className="quiet-link" href="/ro">
            Intră direct în joc, fără profil
          </Link>
        </section>
        <AppFooter currentPage="about" />
      </div>
    </main>
  );
}
