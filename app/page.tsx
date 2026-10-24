import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Faq, { FAQS } from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import { SITE } from "@/lib/site";

// De vragen hieronder in het formaat dat zoekmachines lezen. Gebruikt
// dezelfde tekst als wat bezoekers zien.
const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE.url}/#vragen`,
  url: SITE.url,
  inLanguage: "nl-NL",
  about: { "@id": `${SITE.url}/#bedrijf` },
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollEffects />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
