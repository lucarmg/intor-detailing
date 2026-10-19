import type { Metadata } from "next";
import Image from "next/image";
import { SITE, WA_DEFAULT } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  // Anders erft deze pagina "index, follow" van de layout.
  robots: { index: false, follow: true },
};

export default function NotFound() {
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

      <main className="nf">
        <div className="closer__glow" aria-hidden="true" />
        <div className="closer__grid" aria-hidden="true" />

        <div className="nf__inner">
          <p className="nf__code" aria-hidden="true">404</p>
          <h1 className="nf__title">
            Deze pagina is <span className="hl">weggepoetst</span>
          </h1>
          <p className="nf__text">
            De pagina die u zoekt bestaat niet (meer). Op de homepage vindt u
            al onze pakketten en hoe u een afspraak maakt.
          </p>
          <div className="nf__actions">
            <a href="/" className="btn btn--accent btn--lg">
              Naar de homepage
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--lg"
            >
              <WhatsAppIcon />
              Stuur een WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
