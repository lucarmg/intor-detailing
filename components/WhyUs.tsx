import { NEARBY, SITE, WA_DEFAULT } from "@/lib/site";
import {
  ChatIcon,
  DropIcon,
  PinIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "./Icons";

const reasons = [
  {
    icon: <PinIcon />,
    title: `Eigen Locatie in ${SITE.city}`,
    desc: `U brengt uw auto naar ${SITE.address}. Goed te bereiken vanuit ${NEARBY.slice(0, -1).join(", ")} en ${NEARBY[NEARBY.length - 1]}.`,
  },
  {
    icon: <DropIcon />,
    title: "Premium Producten",
    desc: "Alleen professionele reinigingsproducten en apparatuur voor een onberispelijk resultaat.",
  },
  {
    icon: <SparkleIcon />,
    title: "Showroom Kwaliteit",
    desc: "Van interieur tot lak: uw auto verlaat onze handen in perfecte staat.",
  },
  {
    icon: <ChatIcon />,
    title: "Prijs in Overleg",
    desc: "Elke auto is anders. Stuur een WhatsApp, dan bespreken wij samen de behandeling en de prijs.",
  },
];

export default function WhyUs() {
  return (
    <section id="waarom" className="section">
      <div className="container">
        <hr className="accent-line section-rule" />

        <div className="why__head">
          <div>
            <p className="eyebrow">Waarom {SITE.shortName}</p>
            <h2 className="h2 why__title">
              Meer dan schoonmaken.{" "}
              <span className="text-accent-gradient">
                Het is zorg voor uw auto.
              </span>
            </h2>
          </div>
          <p className="why__intro">
            {SITE.name} is een autopoetsbedrijf in {SITE.city}. Wij begrijpen
            dat uw auto meer is dan vervoer: het is uw dagelijkse ruimte.
            Daarom behandelen wij elke auto, van binnen en van buiten, met de
            aandacht en precisie die hij verdient.
          </p>
        </div>

        <ul className="why__grid">
          {reasons.map((r) => (
            <li key={r.title} className="reason">
              <span className="reason__icon">{r.icon}</span>
              <div>
                <h3 className="reason__title">{r.title}</h3>
                <p className="reason__desc">{r.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="cta-banner">
          <p className="cta-banner__kicker">
            Klaar voor een auto die weer straalt?
          </p>
          <h3 className="cta-banner__title">Plan vandaag nog uw afspraak</h3>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--accent btn--lg"
          >
            <WhatsAppIcon />
            Stuur een WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}