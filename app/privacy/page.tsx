import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE, WA_DEFAULT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy & cookies",
  description: `Hoe ${SITE.name} omgaat met uw gegevens en welke cookies de website gebruikt.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy & cookies" updated="19 oktober 2026">
      <p className="legal__lead">
        {SITE.name} gaat zorgvuldig om met uw gegevens. Hieronder leest u
        welke gegevens wij gebruiken, waarom, hoe lang wij ze bewaren en welke
        rechten u heeft.
      </p>

      <h2 id="wie">Wie wij zijn</h2>
      <p>
        {SITE.name} is een autopoetsdienst aan {SITE.address}. Vragen over uw
        gegevens kunt u stellen via{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> of via{" "}
        <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
          WhatsApp ({SITE.phoneDisplay})
        </a>
        .
      </p>

      <h2 id="gegevens">Welke gegevens wij gebruiken</h2>
      <p>
        De website zelf verzamelt geen persoonsgegevens: er zijn geen
        formulieren, geen accounts en geen statistieken. Wij ontvangen alleen
        gegevens als u ons zelf een bericht stuurt via WhatsApp of e-mail. Dat
        zijn:
      </p>
      <ul>
        <li>uw naam en telefoonnummer of e-mailadres;</li>
        <li>de inhoud van uw berichten;</li>
        <li>wat u ons vertelt over uw auto, en eventuele foto&apos;s die u stuurt.</li>
      </ul>

      <h2 id="waarom">Waarom wij deze gegevens gebruiken</h2>
      <p>
        Wij gebruiken uw gegevens alleen om uw vraag te beantwoorden, de
        behandeling en de prijs met u te bespreken, een afspraak te plannen en
        de behandeling uit te voeren. Dat is nodig om uw verzoek uit te voeren
        (artikel 6, lid 1, onder b, AVG). Wij sturen geen nieuwsbrieven of
        reclame en verkopen uw gegevens niet.
      </p>

      <h2 id="bewaren">Hoe lang wij gegevens bewaren</h2>
      <p>
        Wij bewaren uw WhatsApp-gesprek en e-mails zolang u met ons verder wilt
        gaan. Laat u weten dat u niet verder wilt, dan verwijderen wij het
        gesprek.
      </p>

      <h2 id="diensten">Diensten van anderen</h2>
      <p>
        Om met u te communiceren gebruiken wij diensten van andere bedrijven.
        Zij verwerken uw gegevens volgens hun eigen privacyvoorwaarden, en dat
        kan ook buiten de Europese Unie gebeuren.
      </p>
      <ul>
        <li>
          <strong>WhatsApp</strong> (Meta): voor berichten via WhatsApp.
        </li>
        <li>
          <strong>Gmail</strong> (Google): voor berichten via e-mail.
        </li>
        <li>
          <strong>Google Maps</strong>: voor de kaart op de website en als
          u een route plant (zie Cookies).
        </li>
        <li>
          <strong>Hosting</strong>: de partij die de website online houdt kan
          voor beveiliging kort technische gegevens bijhouden, zoals uw
          IP-adres.
        </li>
      </ul>
      <p>
        Links naar Instagram en TikTok openen pas iets bij die diensten als u
        erop klikt.
      </p>

      <h2 id="cookies">Cookies</h2>
      <p>
        Deze website plaatst zelf geen cookies en gebruikt geen statistieken
        of advertentiecookies.
      </p>
      <p>
        De kaart onderaan de pagina komt van Google Maps. Wanneer de kaart
        laadt, ontvangt Google gegevens zoals uw IP-adres en kan Google
        cookies plaatsen. Hoe Google daarmee omgaat, leest u in het{" "}
        <a
          href="https://policies.google.com/privacy?hl=nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacybeleid van Google
        </a>
        .
      </p>

      <h2 id="rechten">Uw rechten</h2>
      <p>
        U mag ons altijd vragen welke gegevens wij van u hebben, ze laten
        aanpassen of laten verwijderen. U kunt ook bezwaar maken tegen het
        gebruik, het gebruik laten beperken of uw gegevens opvragen om mee te
        nemen. Stuur daarvoor een bericht naar{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> of via WhatsApp. Wij
        reageren binnen een maand.
      </p>

      <h2 id="wijzigingen">Wijzigingen</h2>
      <p>
        Als wij iets veranderen aan hoe wij met gegevens omgaan, passen wij
        deze pagina aan. De datum bovenaan laat zien wanneer dat voor het
        laatst is gebeurd.
      </p>
    </LegalPage>
  );
}
