import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppFooter } from "@/components/app-footer";
import { Brand } from "@/components/brand";

export const metadata: Metadata = { title: "Contact · Vorbini" };
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "ro" }];
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  if ((await params).locale !== "ro") notFound();
  return (
    <main className="practice-shell legal-shell">
      <div className="legal-frame">
        <header className="practice-header">
          <Link
            className="practice-brand"
            href="/"
            aria-label="Vorbini · Acasă"
          >
            <Brand compact />
          </Link>
          <Link className="quiet-link" href="/ro/practice">
            Înapoi la aplicație
          </Link>
        </header>
        <article>
          <h1>Contact</h1>
          <p className="legal-summary">
            Aveți o întrebare sau ceva nu funcționează? Scrieți-ne despre
            Vorbini.
          </p>
          <section aria-labelledby="contact-email-title">
            <h2 id="contact-email-title">Luați legătura cu Darius</h2>
            <p>
              Pentru ajutor tehnic, sugestii sau întrebări despre
              confidențialitate, ne găsiți la <strong>darius@mrnagy.com</strong>
              .
            </p>
            <p>
              Butonul de mai jos deschide aplicația de e-mail. Dacă nu aveți una
              configurată, copiați adresa și folosiți serviciul de e-mail
              preferat.
            </p>
            <a className="secondary-button" href="mailto:darius@mrnagy.com">
              Deschide e-mailul
            </a>
            <p>
              Descrieți ce s-a întâmplat și pe ce dispozitiv. Nu trimiteți date
              despre copil, copii de siguranță sau parole.
            </p>
          </section>
        </article>
        <AppFooter currentPage="contact" />
      </div>
    </main>
  );
}
