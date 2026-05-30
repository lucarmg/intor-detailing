import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "INTOR Interior Detailing | Autodetailing aan Huis Eindhoven",
    template: "%s | INTOR Interior Detailing Eindhoven",
  },
  description:
    "INTOR Interior Detailing — professionele interieur reiniging aan huis in Eindhoven en omgeving. Wij komen naar u toe met premium apparatuur. Basic €60 | Dieptereiniging €120 | Full Detailing €259. Vlekverwijdering, geurverwijdering, lederreiniging.",
  keywords: [
    "autodetailing Eindhoven",
    "interieur reiniging auto Eindhoven",
    "auto schoonmaken aan huis Eindhoven",
    "mobiele autodetailing Eindhoven",
    "interieur detailing Noord-Brabant",
    "auto interieur reinigen thuis",
    "professionele autodetailing Eindhoven",
    "vlekverwijdering auto interieur",
    "geurverwijdering auto Eindhoven",
    "lederreiniging auto",
    "dieptereiniging auto interieur",
    "INTOR detailing",
    "autodetailing aan huis",
    "interieur detailing prijs",
    "auto opfrissen Eindhoven",
    "detailing service Brabant",
  ],
  authors: [{ name: "INTOR Interior Detailing" }],
  creator: "INTOR Interior Detailing",
  metadataBase: new URL("https://intor-detailing.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "INTOR Interior Detailing | Professionele Autodetailing Eindhoven",
    description:
      "Showroom-resultaat bij u op locatie. Professionele interieur detailing in Eindhoven — Basic €60, Diepte €120, Full €259. Wij komen naar u toe!",
    type: "website",
    locale: "nl_NL",
    url: "https://intor-detailing.vercel.app",
    siteName: "INTOR Interior Detailing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "INTOR Interior Detailing",
              description:
                "Professionele mobiele interieur detailing aan huis in Eindhoven en omgeving.",
              url: "https://intor-detailing.vercel.app",
              telephone: "+31644840102",
              email: "intor.detailing@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Eindhoven",
                addressRegion: "Noord-Brabant",
                addressCountry: "NL",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 51.4416,
                  longitude: 5.4697,
                },
                geoRadius: "30000",
              },
              priceRange: "€60 - €259",
              sameAs: [
                "https://www.instagram.com/intor_interior_detailing",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Detailing Pakketten",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Basic Interieur Reiniging",
                    price: "60",
                    priceCurrency: "EUR",
                    description:
                      "Stofzuigen, dashboard reinigen, kunststof en deurpanelen, ramen binnen.",
                  },
                  {
                    "@type": "Offer",
                    name: "Dieptereiniging Interieur",
                    price: "120",
                    priceCurrency: "EUR",
                    description:
                      "Alles uit Basic plus dieptereiniging stoelen, vlekverwijdering en geurverwijdering.",
                  },
                  {
                    "@type": "Offer",
                    name: "Full Interior Detailing",
                    price: "259",
                    priceCurrency: "EUR",
                    description:
                      "Complete detailing inclusief lederreiniging, hemelbekleding en showroom resultaat.",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
