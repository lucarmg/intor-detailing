import type { ReactNode } from "react";
import { SITE, WA_DEFAULT, waLink } from "@/lib/site";
import {
  DropIcon,
  SeatIcon,
  ShieldIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "./Icons";

// De pakketten. Pas namen en teksten hier aan.
// Prijzen staan bewust niet op de site: die worden via WhatsApp besproken.

const interieur = {
  name: "Volledig Interieur",
  kind: "Interieur",
  desc: "Het complete interieur grondig gereinigd: stoelen, bekleding, tapijt, dashboard, deurpanelen en de ramen aan de binnenkant.",
};

const exterieur = {
  name: "Exterieur Wassen",
  kind: "Exterieur",
  desc: "Een grondige wasbeurt van de buitenkant. Kleien is mogelijk om de lak weer glad te maken en vastzittend vuil te verwijderen.",
};

const polijsten = {
  name: "Polijsten",
  kind: "Exterieur",
  intro: "Drie stappen. Hoe meer correctie de lak nodig heeft, hoe hoger de stap.",
  steps: [
    "Polijsten in één stap. Brengt de glans terug en haalt lichte waas en fijne krasjes uit de lak.",
    "Polijsten in twee stappen: eerst corrigeren, daarna afwerken op hoogglans. Voor lak met duidelijke swirls en krassen.",
    "Polijsten in drie stappen. De meest intensieve behandeling voor lak die veel correctie nodig heeft.",
  ],
};

const glascoating = {
  name: "Glascoating",
  kind: "Bescherming",
  desc: "Een beschermende coating voor langdurige glans. Vuil en water hechten minder snel, waardoor uw auto langer schoon blijft.",
};

/** Link die WhatsApp opent met de naam van de behandeling al ingevuld. */
function AskPrice({ treatment }: { treatment: string }) {
  return (
    <a
      href={waLink(`Hallo ${SITE.shortName}, wat is de prijs voor ${treatment}?`)}
      target="_blank"
      rel="noopener noreferrer"
      className="pk-ask"
      aria-label={`Prijs opvragen voor ${treatment}`}
    >
      <WhatsAppIcon size={15} />
      <span>Prijs opvragen</span>
    </a>
  );
}

function Card({
  item,
  icon,
  ghost,
  className = "",
}: {
  item: { name: string; kind: string; desc: string };
  icon: ReactNode;
  ghost: ReactNode;
  className?: string;
}) {
  return (
    <li className={`pk-card ${className}`}>
      <span className="pk-ghost" aria-hidden="true">
        {ghost}
      </span>
      <span className="pk-icon">{icon}</span>
      <p className="pk-kind">{item.kind}</p>
      <h3 className="pk-name">{item.name}</h3>
      <p className="pk-desc">{item.desc}</p>
      <AskPrice treatment={item.name} />
    </li>
  );
}

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
          <Card
            item={interieur}
            icon={<SeatIcon size={24} />}
            ghost={<SeatIcon size={190} />}
            className="pk-card--half"
          />
          <Card
            item={exterieur}
            icon={<DropIcon size={24} />}
            ghost={<DropIcon size={190} />}
            className="pk-card--half"
          />

          {/* De drie polijst-stappen staan samen in één blok. */}
          <li className="pk-card pk-card--polish">
            <div className="pk-polish-head">
              <span className="pk-icon">
                <SparkleIcon size={24} />
              </span>
              <div>
                <p className="pk-kind">{polijsten.kind}</p>
                <h3 className="pk-name">{polijsten.name}</h3>
                <p className="pk-polish-sub">{polijsten.intro}</p>
              </div>
            </div>

            <ol className="pk-steps">
              {polijsten.steps.map((desc, i) => (
                <li key={i} className="pk-step">
                  <span className="pk-node" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h4 className="pk-step-name">Stap {i + 1}</h4>
                  <p className="pk-step-desc">{desc}</p>
                </li>
              ))}
            </ol>

            <AskPrice treatment={polijsten.name} />
          </li>

          <Card
            item={glascoating}
            icon={<ShieldIcon size={24} />}
            ghost={<ShieldIcon size={190} />}
            className="pk-card--coat"
          />
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