import { NEARBY, SITE, WA_DEFAULT } from "@/lib/site";
import FaqAccordion from "./FaqAccordion";

// Veelgestelde vragen. Staan op de pagina én in de gegevens voor Google
// (app/page.tsx), dus altijd dezelfde tekst. Alleen dingen die kloppen:
// geen prijzen, tijden of beloftes die niet elders op de site staan.

const towns = `${NEARBY.slice(0, -1).join(", ")} en ${NEARBY[NEARBY.length - 1]}`;

export const FAQS = [
  {
    q: `Welke behandelingen biedt ${SITE.name} aan?`,
    a: `${SITE.name} is een autopoetsbedrijf in ${SITE.city}. Wij doen volledig interieur reinigen, exterieur wassen (met kleien als optie), polijsten in één, twee of drie stappen en glascoating.`,
  },
  {
    q: "Wat is het verschil tussen wassen, kleien, polijsten en glascoating?",
    a: "Wassen haalt het losse vuil van de buitenkant. Kleien verwijdert vastzittend vuil en maakt de lak weer glad. Polijsten brengt de glans terug en haalt waas, swirls en krassen uit de lak. Een glascoating beschermt de lak daarna, zodat vuil en water minder snel hechten en de glans langer blijft.",
  },
  {
    q: "Welke polijststap heeft mijn auto nodig?",
    a: "Dat hangt af van de staat van de lak. Eén stap is voor lichte waas en fijne krasjes. Twee stappen is voor lak met duidelijke swirls en krassen: eerst corrigeren, daarna afwerken op hoogglans. Drie stappen is de meest intensieve behandeling, voor lak die veel correctie nodig heeft. Twijfelt u, stuur dan een paar foto's via WhatsApp, dan bespreken wij samen welke stap past.",
  },
  {
    q: "Waar wordt mijn auto behandeld?",
    a: `Op onze eigen locatie aan ${SITE.fullAddress}. U brengt uw auto daar naartoe op het tijdstip dat wij samen afspreken. De locatie is goed te bereiken vanuit ${towns}.`,
  },
  {
    q: "Wat kost een behandeling?",
    a: "Er staat bewust geen vaste prijslijst op de site, want elke auto is anders. De prijs hangt af van de auto, de staat waarin hij is en de behandeling die u kiest. Stuur een WhatsApp met uw auto en wat u wilt laten doen, dan krijgt u een prijs op maat.",
  },
  {
    q: "Hoe maak ik een afspraak?",
    a: `Wij werken alleen op afspraak, er zijn geen vaste openingstijden. Stuur een WhatsApp naar ${SITE.phoneDisplay} of een e-mail naar ${SITE.email}. Wij bespreken dan de behandeling en de prijs, en plannen samen een moment waarop u uw auto brengt.`,
  },
] as const;

export default function Faq() {
  return (
    <section id="vragen" className="faq" aria-labelledby="vragen-title">
      <div className="wrap">
        <div className="shead">
          <p className="marker">Veelgestelde vragen</p>
          <h2 id="vragen-title" className="display shead__title rv">
            Goed om te <span className="hl">weten</span>
          </h2>
        </div>

        <FaqAccordion items={FAQS} />

        <p className="svc-note">
          Staat uw vraag er niet bij?{" "}
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
            Stuur een WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
