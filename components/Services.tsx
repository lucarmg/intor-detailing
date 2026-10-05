import type { ReactNode } from "react";
import { SITE, WA_DEFAULT, waLink } from "@/lib/site";
import {
  DropIcon,
  SeatIcon,
  ShieldIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "./Icons";

type Service = {
  name: string;
  kind: string;
  desc: string;
  icon: ReactNode;
  /** Alleen bij polijsten: welke van de drie stappen dit is. */
  step?: 1 | 2 | 3;
};

// De pakketten. Pas namen en teksten hier aan.
// Prijzen staan bewust niet op de site: die worden via WhatsApp besproken.
const services: Service[] = [
  {
    name: "Volledig Interieur",
    kind: "Interieur",
    desc: "Het complete interieur grondig gereinigd: stoelen, bekleding, tapijt, dashboard, deurpanelen en de ramen aan de binnenkant.",
    icon: <SeatIcon />,
  },
  {
    name: "Exterieur Wassen",
    kind: "Exterieur",
    desc: "Een grondige wasbeurt van de buitenkant. Kleien is mogelijk om de lak weer glad te maken en vastzittend vuil te verwijderen.",
    icon: <DropIcon />,
  },
  {
    name: "Polijsten Stap 1",
    kind: "Polijsten",
    desc: "Polijsten in één stap. Brengt de glans terug en haalt lichte waas en fijne krasjes uit de lak.",
    icon: <SparkleIcon />,
    step: 1,
  },
  {
    name: "Polijsten Stap 2",
    kind: "Polijsten",
    desc: "Polijsten in twee stappen: eerst corrigeren, daarna afwerken op hoogglans. Voor lak met duidelijke swirls en krassen.",
    icon: <SparkleIcon />,
    step: 2,
  },
  {
    name: "Polijsten Stap 3",
    kind: "Polijsten",
    desc: "Polijsten in drie stappen. De meest intensieve behandeling voor lak die veel correctie nodig heeft.",
    icon: <SparkleIcon />,
    step: 3,
  },
  {
    name: "Glascoating",
    kind: "Bescherming",
    desc: "Een beschermende coating voor langdurige glans. Vuil en water hechten minder snel, waardoor uw auto langer schoon blijft.",
    icon: <ShieldIcon />,
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <hr className="accent-line section-rule" />

        <div className="section-head">
          <p className="eyebrow">Onze Diensten</p>
          <h2 className="h2">
            Kies Uw <span className="text-accent-gradient">Pakket</span>
          </h2>
          <p className="lead">
            Van een volledig schoon interieur tot polijsten en glascoating.
            Alles op onze locatie in {SITE.city}.
          </p>
        </div>

        <ul className="pk-grid">
          {services.map((s) => (
            <li key={s.name} className="pk-card">
              <div className="pk-head">
                <span className="pk-icon">{s.icon}</span>
                <div className="pk-title">
                  <p className="pk-kind">
                    {s.kind}
                    {s.step && (
                      <span
                        className="pk-steps"
                        role="img"
                        aria-label={`stap ${s.step} van 3`}
                      >
                        {[1, 2, 3].map((n) => (
                          <i key={n} className={n <= s.step! ? "is-on" : ""} />
                        ))}
                      </span>
                    )}
                  </p>
                  <h3 className="pk-name">{s.name}</h3>
                </div>
              </div>

              <p className="pk-desc">{s.desc}</p>

              <a
                href={waLink(
                  `Hallo ${SITE.shortName}, wat is de prijs voor ${s.name}?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="pk-cta"
                aria-label={`Prijs opvragen voor ${s.name}`}
              >
                <WhatsAppIcon size={15} />
                Prijs Opvragen
              </a>
            </li>
          ))}
        </ul>

        <p className="pk-note">
          Prijzen bespreken wij graag met u via WhatsApp.{" "}
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
            Stuur een bericht
          </a>
        </p>
      </div>
    </section>
  );
}