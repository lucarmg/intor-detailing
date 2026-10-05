import { WA_DEFAULT } from "@/lib/site";
import {
  CarIcon,
  DropIcon,
  PinIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "./Icons";

const reasons = [
  {
    icon: <CarIcon />,
    title: "Wij Komen Naar U",
    desc: "Geen moeite om te rijden. Wij komen met alle apparatuur naar uw locatie in Eindhoven en omgeving.",
  },
  {
    icon: <DropIcon />,
    title: "Premium Producten",
    desc: "Alleen professionele reinigingsproducten en apparatuur voor een onberispelijk resultaat.",
  },
  {
    icon: <SparkleIcon />,
    title: "Showroom Kwaliteit",
    desc: "Van dashboard tot stoelen: uw auto verlaat onze handen in perfecte staat.",
  },
  {
    icon: <PinIcon />,
    title: "Eindhoven & Omgeving",
    desc: "Actief in Eindhoven en de regio Noord-Brabant. Neem contact op voor beschikbaarheid.",
  },
];

export default function WhyUs() {
  return (
    <section id="waarom" className="section">
      <div className="container">
        <hr className="gold-line section-rule" />

        <div className="why__head">
          <div>
            <p className="eyebrow">Waarom INTOR</p>
            <h2 className="h2 why__title">
              Meer dan schoonmaken.{" "}
              <span className="text-gold-gradient">
                Het is zorg voor uw auto.
              </span>
            </h2>
          </div>
          <p className="why__intro">
            Bij INTOR Interior Detailing begrijpen wij dat uw auto meer is dan
            vervoer. Het is uw dagelijkse ruimte. Wij behandelen elk interieur
            met de aandacht en precisie die het verdient.
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
          <p className="cta-banner__kicker">Klaar voor een schoon interieur?</p>
          <h3 className="cta-banner__title">
            Plan vandaag nog uw detailing sessie
          </h3>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold btn--lg"
          >
            <WhatsAppIcon />
            Stuur een WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
