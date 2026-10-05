import type { Metadata, Viewport } from "next";
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
  title: "loekgoodcleaning - Professionele Autodetailing",
  description:
    "Professionele interieur detailing aan huis. loekgoodcleaning reinigt uw auto-interieur met premium producten en apparatuur. Showroom-resultaat bij u op locatie.",
  keywords: [
    "autodetailing Ommel",
    "interieur reiniging auto",
    "auto schoonmaken aan huis",
    "mobiele autodetailing",
    "interieur detailing Ommel",
    "auto interieur reinigen Brabant",
    "loekgoodcleaning",
    "professionele autodetailing",
  ],
  openGraph: {
    title: "loekgoodcleaning - Professionele Autodetailing",
    description:
      "Showroom-resultaat bij u op locatie. Professionele interieur detailing in Ommel en omgeving.",
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
