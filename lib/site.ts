// Eén plek voor alle contactgegevens en links.
// Pas hier iets aan en het verandert overal op de site.

export const SITE = {
  // Het adres van de website, zonder slash aan het eind.
  url: "https://www.loekgoodcleaning.nl",
  name: "loekgoodcleaning",
  shortName: "loekgoodcleaning",
  slogan: "That Loeks Good!",
  street: "Planker 8a",
  city: "Asten",
  province: "Noord-Brabant",
  address: "Planker 8a, Asten",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Planker+8a%2C+Asten",
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

// Wat Google te zien krijgt als lijst van behandelingen.
export const TREATMENTS = [
  "Volledig interieur reinigen",
  "Exterieur wassen",
  "Kleien",
  "Polijsten in 1, 2 of 3 stappen",
  "Glascoating",
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