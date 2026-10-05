import { SITE, WA_DEFAULT } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const stats = [
  { num: "3", label: "Pakketten" },
  { num: "100%", label: "Mobiel" },
  { num: "€60", label: "Startprijs" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__title anim-2">
          <span>Jouw Interieur.</span>
          <span className="text-accent-shimmer">Showroom</span>
          <span>Resultaat.</span>
        </h1>

        <p className="hero__sub anim-3">
          Professionele interieur detailing aan huis in {SITE.city} en omgeving.
          Wij komen naar u toe met premium apparatuur en producten.
        </p>

        <div className="hero__actions anim-4">
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

        <ul className="stats anim-5">
          {stats.map((stat) => (
            <li key={stat.label} className="stat">
              <p className="stat__num">{stat.num}</p>
              <p className="stat__label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        Scroll
      </div>
    </section>
  );
}
