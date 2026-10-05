"use client";

import { useEffect, useState } from "react";
import { WA_DEFAULT } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

/**
 * Zwevende WhatsApp-knop. Verschijnt pas zodra de grote knop bovenaan de
 * pagina uit beeld is, zodat hij op een telefoon niets afdekt.
 */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur een WhatsApp"
      className={`wa-fab${visible ? " is-visible" : ""}`}
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
