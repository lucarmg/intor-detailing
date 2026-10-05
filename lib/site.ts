// Eén plek voor alle contactgegevens en links.
// Pas hier iets aan en het verandert overal op de site.

export const SITE = {
  name: "loekgoodcleaning Interior Detailing",
  shortName: "loekgoodcleaning",
  city: "Ommel",
  province: "Noord-Brabant",
  region: "Ommel & Omgeving",
  phoneDisplay: "+31 6 28181039",
  whatsappNumber: "31628181039",
  email: "loekgoodcleaning@gmail.com",
  instagramHandle: "@loekgoodcleaning",
  instagramUrl: "https://www.instagram.com/loekgoodcleaning/",
} as const;

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
