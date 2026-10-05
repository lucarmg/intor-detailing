import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
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

// Het favicon komt automatisch uit app/icon.png en app/apple-icon.png.
export const metadata: Metadata = {
  title: `${SITE.name} | Professionele Autodetailing ${SITE.city}`,
  description: `Professionele interieur detailing aan huis in ${SITE.city} en omgeving. ${SITE.shortName} reinigt uw auto-interieur met premium producten. Basic €60 | Diepte €120 | Full €259. Wij komen naar u toe!`,
  keywords: [
    `autodetailing ${SITE.city}`,
    "interieur reiniging auto",
    "auto schoonmaken aan huis",
    "mobiele autodetailing",
    `interieur detailing ${SITE.city}`,
    "auto interieur reinigen Brabant",
    SITE.shortName,
    "professionele autodetailing",
  ],
  openGraph: {
    title: `${SITE.name} | ${SITE.city}`,
    description: `Showroom-resultaat bij u op locatie. Professionele interieur detailing in ${SITE.city} en omgeving.`,
    type: "website",
    locale: "nl_NL",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
