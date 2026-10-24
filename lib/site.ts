// Eén plek voor alle contactgegevens en links.
// Pas hier iets aan en het verandert overal op de site.

export const SITE = {
  // Het adres van de website, zonder slash aan het eind.
  url: "https://www.loekgoodcleaning.nl",
  name: "loekgoodcleaning",
  shortName: "loekgoodcleaning",
  // Dezelfde naam los geschreven. Helpt Google en AI-zoekmachines de naam
  // te herkennen als iemand "Loek Good Cleaning" zoekt.
  alternateName: "Loek Good Cleaning",
  slogan: "That Loeks Good!",
  street: "Planker 8a",
  postalCode: "5721 VG",
  city: "Asten",
  province: "Noord-Brabant",
  address: "Planker 8a, Asten",
  fullAddress: "Planker 8a, 5721 VG Asten",
  // Coördinaten van het adres volgens de BAG (PDOK Locatieserver).
  geo: { latitude: 51.413904, longitude: 5.754595 },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Planker+8a%2C+5721+VG+Asten",
  phoneDisplay: "+31 6 28181039",
  whatsappNumber: "31628181039",
  email: "loekgoodcleaning@gmail.com",
  instagramHandle: "@loekgoodcleaning",
  instagramUrl: "https://www.instagram.com/loekgoodcleaning/",
  tiktokHandle: "@loekgoodcleaning",
  tiktokUrl: "https://www.tiktok.com/@loekgoodcleaning",
} as const;

// Plaatsen in de buurt. Staan in de tekst en in de gegevens voor Google.
export const NEARBY = [
  "Ommel",
  "Heusden",
  "Someren",
  "Deurne",
  "Liessel",
  "Meijel",
  "Helmond",
] as const;

// Gemeente en provincie per plaats, alleen voor de gegevens voor Google.
// Zo is duidelijk dat Heusden het dorp bij Asten is (niet de gemeente
// Heusden) en dat Meijel in Limburg ligt.
export const PLACE_REGION: Record<(typeof NEARBY)[number] | "Asten", string> = {
  Asten: "Noord-Brabant",
  Ommel: "gemeente Asten, Noord-Brabant",
  Heusden: "gemeente Asten, Noord-Brabant",
  Someren: "Noord-Brabant",
  Deurne: "Noord-Brabant",
  Liessel: "gemeente Deurne, Noord-Brabant",
  Meijel: "gemeente Peel en Maas, Limburg",
  Helmond: "Noord-Brabant",
};

// Wat Google te zien krijgt als lijst van behandelingen. Houd de teksten
// gelijk aan wat er in components/Services.tsx staat.
export const TREATMENTS = [
  {
    name: "Volledig interieur reinigen",
    description:
      "Het complete interieur grondig gereinigd: stoelen, bekleding, tapijt, dashboard, deurpanelen en de ramen aan de binnenkant.",
  },
  {
    name: "Exterieur wassen",
    description: "Een grondige wasbeurt van de buitenkant van de auto.",
  },
  {
    name: "Kleien",
    description:
      "Maakt de lak weer glad en verwijdert vastzittend vuil. Mogelijk bij een exterieurwasbeurt.",
  },
  {
    name: "Polijsten in 1, 2 of 3 stappen",
    description:
      "Brengt de glans terug en haalt waas, swirls en krassen uit de lak. Hoe meer correctie de lak nodig heeft, hoe hoger de stap.",
  },
  {
    name: "Glascoating",
    description:
      "Een beschermende coating voor langdurige glans. Vuil en water hechten minder snel.",
  },
] as const;

/** Bouwt een WhatsApp-link met een vooraf ingevuld bericht. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hallo ${SITE.shortName}, ik wil graag een afspraak maken!`
);

export const NAV_LINKS = [
  { href: "#services", label: "Pakketten" },
  { href: "#waarom", label: "Waarom Wij" },
  { href: "#contact", label: "Contact" },
] as const;