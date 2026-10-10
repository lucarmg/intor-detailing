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
    icon: <PinIcon size={20} />,
    title: `Eigen Locatie in ${SITE.city}`,
    desc: `U brengt uw auto naar ${SITE.address}. Goed te bereiken vanuit ${NEARBY.slice(0, -1).join(", ")} en ${NEARBY[NEARBY.length - 1]}.`,
  },
  {
    icon: <DropIcon size={20} />,
    title: "Premium Producten",
    desc: "Alleen professionele reinigingsproducten en apparatuur voor een onberispelijk resultaat.",
  },
  {
    icon: <SparkleIcon size={20} />,
    title: "Showroom Kwaliteit",
    desc: "Van interieur tot lak: uw auto verlaat onze handen in perfecte staat.",
  },
  {
    icon: <ChatIcon size={20} />,
    title: "Prijs in Overleg",
    desc: "Elke auto is anders. Stuur een WhatsApp, dan bespreken wij samen de behandeling en de prijs.",
  },
];

export default function WhyUs() {
  return (
    <section id="waarom" className="why" aria-labelledby="waarom-title">
      <div className="wrap">
        <p className="marker">Waarom {SITE.shortName}</p>

        <h2 id="waarom-title" className="display why__statement rv">
          <span>Meer dan schoonmaken.</span>{" "}
          <span className="hl">Het is zorg voor uw auto.</span>
        </h2>

        <p className="why__intro rv">
          {SITE.name} is een autopoetsbedrijf in {SITE.city}. Wij begrijpen
          dat uw auto meer is dan vervoer: het is uw dagelijkse ruimte.
          Daarom behandelen wij elke auto, van binnen en van buiten, met de
          aandacht en precisie die hij verdient.
        </p>

        <ul className="why__list">
          {reasons.map((r) => (
            <li key={r.title} className="reason rv">
              <span className="reason__icon">{r.icon}</span>
              <h3 className="reason__title">{r.title}</h3>
              <p className="reason__desc">{r.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Afsluiter: spiegelt de hero met hetzelfde raster en licht. */}
      <div className="closer">
        <div className="closer__glow" aria-hidden="true" />
        <div className="closer__grid" aria-hidden="true" />
        <div className="closer__inner rv">
          <p className="closer__q">Klaar voor een auto die weer straalt?</p>
          <h3 className="closer__title">Plan vandaag nog uw afspraak</h3>
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
