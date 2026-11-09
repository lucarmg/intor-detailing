import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { NEARBY, PLACE_REGION, SITE, TREATMENTS } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// ---------------------------------------------------------------------------
// SEO: wat Google en WhatsApp/Instagram-previews van de site te zien krijgen.
// ---------------------------------------------------------------------------

// Titel en omschrijving gebruiken de woorden waarop mensen echt zoeken
// ("auto laten poetsen", "auto detailing", "interieur reinigen").
const TITLE = `Auto laten poetsen & polijsten in ${SITE.city} | ${SITE.name}`;
const DESCRIPTION = `Auto laten poetsen in ${SITE.city}? Auto detailing op afspraak: interieur reinigen, wassen, kleien, polijsten en glascoating. Vlakbij Helmond, Deurne en Someren.`;
const SHARE_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${SITE.name}: autopoetsbedrijf en auto detailing in ${SITE.city}`,
};

// Het favicon komt automatisch uit app/favicon.ico, app/icon.png en
// app/apple-icon.png.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    `auto laten poetsen ${SITE.city}`,
    `autopoetsbedrijf ${SITE.city}`,
    `auto poetsen ${SITE.city}`,
    "auto laten poetsen Helmond",
    `auto detailing ${SITE.city}`,
    `auto polijsten ${SITE.city}`,
    `auto interieur reinigen ${SITE.city}`,
    `auto wassen ${SITE.city}`,
    "auto kleien",
    "glascoating auto",
    "auto poetsen Brabant",
    SITE.shortName,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: SITE.name,
    type: "website",
    locale: "nl_NL",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SHARE_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

// Bedrijfsgegevens in het formaat dat Google leest (schema.org). Hiermee kan
// Google naam, adres, telefoon en behandelingen aan elkaar koppelen.
const BUSINESS_ID = `${SITE.url}/#bedrijf`;

const businessData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutomotiveBusiness",
      "@id": BUSINESS_ID,
      name: SITE.name,
      alternateName: SITE.alternateName,
      slogan: SITE.slogan,
      description: `${SITE.name} is een autopoetsbedrijf in ${SITE.city} (${SITE.province}) voor interieur reinigen, exterieur wassen, kleien, polijsten in één, twee of drie stappen en glascoating. Behandelingen gebeuren op de eigen locatie aan ${SITE.street}, alleen op afspraak. Prijs op aanvraag via WhatsApp.`,
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      image: `${SITE.url}${SHARE_IMAGE.url}`,
      telephone: `+${SITE.whatsappNumber}`,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.street,
        postalCode: SITE.postalCode,
        addressLocality: SITE.city,
        addressRegion: SITE.province,
        addressCountry: "NL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.latitude,
        longitude: SITE.geo.longitude,
      },
      hasMap: SITE.mapsUrl,
      // Plaatsen met hun gemeente en provincie, zodat er geen verwarring is
      // met gelijknamige plaatsen elders.
      areaServed: (["Asten", ...NEARBY] as const).map((name) => ({
        "@type": "Place",
        name,
        containedInPlace: { "@type": "AdministrativeArea", name: PLACE_REGION[name] },
      })),
      // Alleen op afspraak: bewust geen openingHours, wel een vast contactpunt.
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "afspraken (alleen op afspraak)",
        telephone: `+${SITE.whatsappNumber}`,
        email: SITE.email,
        availableLanguage: ["nl"],
      },
      sameAs: [SITE.instagramUrl, SITE.tiktokUrl],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Behandelingen",
        itemListElement: TREATMENTS.map(({ name, description }) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            description,
            provider: { "@id": BUSINESS_ID },
          },
        })),
      },
    },
    {
      // Vertelt Google welke naam het bij de site in de zoekresultaten toont.
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      alternateName: SITE.alternateName,
      inLanguage: "nl-NL",
      publisher: { "@id": BUSINESS_ID },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
        />
      </body>
    </html>
  );
}