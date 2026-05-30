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
  metadataBase: new URL("https://intor-detailing.vercel.app"),

  title: {
    default: "INTOR Interior Detailing | Eindhoven",
    template: "%s | INTOR Detailing",
  },

  description:
    "Professionele interieur detailing aan huis in Eindhoven. INTOR reinigt uw auto-interieur met premium producten. Basic €60 | Diepte €120 | Full €259.",

  keywords: [
    "autodetailing Eindhoven",
    "interieur reiniging auto",
    "mobiele autodetailing",
    "auto interieur reinigen",
    "INTOR detailing",
    "detailing aan huis",
  ],

  openGraph: {
    title: "INTOR Interior Detailing | Eindhoven",
    description:
      "Showroom-resultaat bij u op locatie. Professionele autodetailing in Eindhoven en omgeving.",
    url: "https://intor-detailing.vercel.app",
    siteName: "INTOR Detailing",
    type: "website",
    locale: "nl_NL",
  },

  twitter: {
    card: "summary_large_image",
    title: "INTOR Interior Detailing",
    description: "Premium mobiele autodetailing in Eindhoven",
  },

  icons: {
    icon: "/favicon.ico",
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