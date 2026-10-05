"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE, WA_DEFAULT } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Solid background once the page has scrolled a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape and
  // close when the screen becomes wide enough for the desktop links.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };

    // The menu covers the whole screen, so stop the page scrolling behind it.
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const classes = ["nav", scrolled || open ? "is-solid" : "", open ? "is-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <nav className="nav__inner" aria-label="Hoofdmenu">
        <a
          href="#top"
          className="brand"
          aria-label={`${SITE.shortName}, naar boven`}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            priority
            className="brand__logo"
          />
          <span className="brand__name">{SITE.shortName}</span>
        </a>

        <div className="nav__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <span className="nav__cta-long">Afspraak Maken</span>
            <span className="nav__cta-short">Afspraak</span>
          </a>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="hoofdmenu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="hoofdmenu" className="nav__menu">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav__menu-link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--accent"
          onClick={() => setOpen(false)}
        >
          <WhatsAppIcon />
          Direct Afspraak Maken
        </a>
        <p className="nav__menu-foot">
          {SITE.slogan} {SITE.address}
        </p>
      </div>
    </header>
  );
}