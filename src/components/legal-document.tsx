import Link from "next/link";
import { Brand } from "@/components/brand";
import { AppFooter } from "@/components/app-footer";
import { legalDocuments } from "@/legal/documents";

export function LegalDocumentPage({ kind }: { kind: "terms" | "privacy" }) {
  const document = legalDocuments[kind];
  return (
    <main className="practice-shell legal-shell">
      <div className="legal-frame">
        <header className="practice-header">
          <Link
            className="practice-brand"
            href="/ro/about?show=1"
            aria-label="Vorbini · Despre aplicație"
          >
            <Brand compact />
          </Link>
          <Link className="quiet-link" href="/ro/practice">
            Înapoi la aplicație
          </Link>
        </header>
        <article>
          <h1>{document.title}</h1>
          <p className="legal-summary">{document.summary}</p>
          <aside className="legal-draft" aria-label="Starea documentului">
            <strong>Proiect pentru revizuire</strong>
            <p>
              Propunere revizuită la 26 octombrie 2026. Documentul nu este încă
              versiunea finală.{" "}
              <a href="#de-confirmat">
                Detalii de confirmat înainte de publicare
              </a>
              .
            </p>
          </aside>
          <nav className="legal-contents" aria-label="Cuprins">
            {document.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </nav>
          {document.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
            >
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.links?.map((link) => (
                <p key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </p>
              ))}
              {section.contactEmail && (
                <p>
                  Contact pentru suport și confidențialitate:{" "}
                  <a href={`mailto:${section.contactEmail}`}>
                    {section.contactEmail}
                  </a>
                </p>
              )}
            </section>
          ))}
          <aside
            id="de-confirmat"
            className="legal-draft"
            aria-labelledby="review-title"
          >
            <h2 id="review-title">De confirmat înainte de publicare</h2>
            <ul>
              {document.reviewNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </aside>
        </article>
        <AppFooter currentPage={kind} />
      </div>
    </main>
  );
}
