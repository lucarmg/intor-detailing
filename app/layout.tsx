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
  title: `${SITE.name} | Auto Detailing ${SITE.city}`,
  description: `${SITE.slogan} Auto detailing in ${SITE.city}: interieur reinigen, exterieur wassen, kleien, polijsten en glascoating. U vindt ons aan ${SITE.address}. Prijzen op aanvraag via WhatsApp.`,
  keywords: [
    `autodetailing ${SITE.city}`,
    `auto polijsten ${SITE.city}`,
    `auto interieur reinigen ${SITE.city}`,
    "auto wassen en kleien",
    "glascoating auto",
    "auto polijsten Brabant",
    SITE.shortName,
  ],
  openGraph: {
    title: `${SITE.name} | ${SITE.slogan}`,
    description: `Auto detailing in ${SITE.city}: interieur, exterieur, polijsten en glascoating op ${SITE.address}.`,
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