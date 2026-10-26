import Link from "next/link";
import { Brand } from "@/components/brand";
import { CreatorCredit } from "@/components/creator-credit";

const pages = [
  { key: "about", label: "Despre Vorbini", href: "/ro/about?show=1" },
  { key: "contact", label: "Contact", href: "mailto:darius@mrnagy.com" },
  { key: "terms", label: "Termeni de utilizare", href: "/ro/termeni" },
  { key: "privacy", label: "Confidențialitate", href: "/ro/confidentialitate" },
] as const;

export function AppFooter({
  newTab = false,
  currentPage,
}: {
  newTab?: boolean;
  currentPage?: "about" | "terms" | "privacy";
}) {
  return (
    <footer className="adult-footer" aria-label="Informații despre Vorbini">
      <div className="adult-footer-identity">
        <Brand compact />
        <p>Cuvinte prin joacă.</p>
      </div>
      <nav
        className="adult-footer-links"
        aria-label="Despre aplicație și informații legale"
      >
        {pages.map((page) => {
          const opensTab =
            newTab && (page.key === "terms" || page.key === "privacy");
          return (
            <Link
              key={page.key}
              href={page.href}
              target={opensTab ? "_blank" : undefined}
              rel={opensTab ? "noopener" : undefined}
              aria-current={currentPage === page.key ? "page" : undefined}
            >
              <span>{page.label}</span>
              {opensTab && (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 16 18 6M8 6h10v10" />
                  </svg>
                  <span className="adult-footer-sr"> (filă nouă)</span>
                </>
              )}
            </Link>
          );
        })}
      </nav>
      <div className="adult-footer-credit">
        <CreatorCredit locale="ro" />
        {newTab && <p>Documentele se deschid într-o filă nouă.</p>}
      </div>
    </footer>
  );
}
