// Eén plek voor alle contactgegevens en links.
// Pas hier iets aan en het verandert overal op de site.

export const SITE = {
  name: "INTOR Interior Detailing",
  shortName: "INTOR",
  region: "Eindhoven & Omgeving",
  phoneDisplay: "+31 6 44840102",
  whatsappNumber: "31644840102",
  email: "intor.detailing@gmail.com",
  instagramHandle: "@intor_interior_detailing",
  instagramUrl: "https://www.instagram.com/intor_interior_detailing",
} as const;

/** Bouwt een WhatsApp-link met een vooraf ingevuld bericht. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Hallo INTOR, ik wil graag een afspraak maken!"
);

export const NAV_LINKS = [
  { href: "#services", label: "Pakketten" },
  { href: "#waarom", label: "Waarom Wij" },
  { href: "#contact", label: "Contact" },
] as const;
