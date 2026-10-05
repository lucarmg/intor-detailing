import { SITE, WA_DEFAULT } from "@/lib/site";
import { PinIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content">
        {/* De slogan: "That Loeks Good!" */}
        <h1 className="hero__title anim-1">
          <span className="hero__line">
            That <span className="text-accent-shimmer">Loeks</span>
          </span>
          <span className="hero__line">Good!</span>
        </h1>

        <p className="hero__sub anim-2">
          Auto detailing in {SITE.city}. Interieur reinigen, exterieur wassen,
          kleien, polijsten en glascoating, allemaal op onze eigen locatie aan{" "}
          {SITE.street}.
        </p>

        <div className="hero__actions anim-3">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--accent btn--lg"
          >
            <WhatsAppIcon />
            Direct Afspraak Maken
          </a>
          <a href="#services" className="btn btn--ghost btn--lg">
            Bekijk Pakketten
          </a>
        </div>

        <ul className="hero__facts anim-4">
          <li>
            <PinIcon size={16} />
            {SITE.address}
          </li>
          <li>
            <WhatsAppIcon size={15} />
            Prijs op aanvraag via WhatsApp
          </li>
        </ul>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        Scroll
      </div>
    </section>
  );
}
