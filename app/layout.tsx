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
  title: "INTOR Interior Detailing | Professionele Autodetailing Eindhoven",
  description:
    "Professionele interieur detailing aan huis in Eindhoven. INTOR reinigt uw auto-interieur met premium producten. Basic €60 | Diepte €120 | Full €259. Wij komen naar u toe!",
  keywords: [
    "autodetailing Eindhoven",
    "interieur reiniging auto",
    "auto schoonmaken aan huis",
    "mobiele autodetailing",
    "interieur detailing Eindhoven",
    "auto interieur reinigen Brabant",
    "INTOR detailing",
    "professionele autodetailing",
  ],
  openGraph: {
    title: "INTOR Interior Detailing | Eindhoven",
    description:
      "Showroom-resultaat bij u op locatie. Professionele interieur detailing in Eindhoven en omgeving.",
    type: "website",
    locale: "nl_NL",
  },
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
