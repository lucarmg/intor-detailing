import Image from "next/image";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

/** Opmaak voor de juridische pagina (privacy & cookies). */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="legal-bar">
        <div className="legal-bar__inner">
          <a href="/" className="brand" aria-label={`${SITE.shortName}, naar de homepage`}>
            <Image src="/logo.png" alt="" width={44} height={44} className="brand__logo" />
            <span className="brand__name">{SITE.shortName}</span>
          </a>
          <a href="/" className="legal-bar__back">
            Terug naar de site
          </a>
        </div>
      </header>

      <main className="legal">
        <article className="legal__body">
          <h1 className="display legal__title">{title}</h1>
          <p className="legal__updated">Laatst bijgewerkt: {updated}</p>
          {children}
        </article>
      </main>

      <footer className="legal-foot">
        <nav className="legal-foot__inner" aria-label="Juridisch">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <a href="/privacy">Privacy &amp; cookies</a>
          <a href="/#contact">Contact</a>
        </nav>
      </footer>
    </>
  );
}
