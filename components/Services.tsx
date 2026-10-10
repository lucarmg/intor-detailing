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
      className="ask"
      aria-label={`Prijs opvragen voor ${treatment}`}
    >
      <WhatsAppIcon size={15} />
      <span>Prijs opvragen</span>
    </a>
  );
}

function Kind({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <p className="svc-kind">
      {icon}
      {children}
    </p>
  );
}

/** Interieur en exterieur: naam groot aan de ene kant, tekst aan de andere. */
function Row({
  item,
  icon,
  flip = false,
}: {
  item: { name: string; kind: string; desc: string };
  icon: ReactNode;
  flip?: boolean;
}) {
  return (
    <article className={`svc-row rv${flip ? " svc-row--flip" : ""}`}>
      <div className="svc-row__head">
        <Kind icon={icon}>{item.kind}</Kind>
        <h3 className="svc-name">{item.name}</h3>
      </div>
      <div className="svc-row__body">
        <p className="svc-desc">{item.desc}</p>
        <AskPrice treatment={item.name} />
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="svc" aria-labelledby="services-title">
      <div className="wrap">
        <div className="shead">
          <p className="marker">Onze Diensten</p>
          <h2 id="services-title" className="display shead__title rv">
            Kies Uw <span className="hl">Pakket</span>
          </h2>
          <p className="shead__lead rv">
            Van een volledig schoon interieur tot polijsten en glascoating.
            Alles op onze locatie in {SITE.city}.
          </p>
        </div>

        <Row item={interieur} icon={<SeatIcon size={18} />} />
        <Row item={exterieur} icon={<DropIcon size={18} />} flip />
      </div>

      {/* Polijsten: een eigen band, met de drie stappen als oplopende schaal. */}
      <article className="polish">
        <div className="polish__grid" aria-hidden="true" />
        <div className="wrap">
          <div className="polish__head rv">
            <div>
              <Kind icon={<SparkleIcon size={18} />}>{polijsten.kind}</Kind>
              <h3 className="svc-name">{polijsten.name}</h3>
            </div>
            <p className="polish__intro">{polijsten.intro}</p>
          </div>

          <ol className="gauge" data-gauge>
            {polijsten.steps.map((desc, i) => (
              <li key={i} className="gauge__step" data-step>
                <span className="gauge__bars" data-level={i + 1} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <h4 className="gauge__name">Stap {i + 1}</h4>
                <p className="gauge__desc">{desc}</p>
              </li>
            ))}
          </ol>

          <AskPrice treatment={polijsten.name} />
        </div>
      </article>

      <div className="wrap">
        <article className="coat rv">
          <div className="coat__head">
            <Kind icon={<ShieldIcon size={18} />}>{glascoating.kind}</Kind>
            <h3 className="svc-name">{glascoating.name}</h3>
          </div>
          <div className="coat__body">
            <p className="svc-desc">{glascoating.desc}</p>
            <AskPrice treatment={glascoating.name} />
          </div>
        </article>

        <p className="svc-note">
          Prijzen bespreken wij graag met u via WhatsApp.{" "}
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
            Stuur een bericht
          </a>
        </p>
      </div>
    </section>
  );
}
