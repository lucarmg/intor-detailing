import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/site";
import WhatsAppFab from "./WhatsAppFab";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <hr className="accent-line section-rule" />

        <div className="footer__inner">
          <a href="#top" className="footer__brand">
            <Image
              src="/logo.png"
              alt=""
              width={60}
              height={60}
              className="brand__logo brand__logo--lg"
            />
            <span>
              <span className="footer__name">{SITE.name}</span>
              <span className="footer__region">{SITE.region}</span>
            </span>
          </a>

          <nav className="footer__links" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Instagram
            </a>
          </nav>

          <p className="footer__copy">
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </div>

      <WhatsAppFab />
    </footer>
  );
}
