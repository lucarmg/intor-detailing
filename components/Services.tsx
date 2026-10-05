"use client";

import { useEffect, useRef, useState } from "react";
import { SITE, WA_DEFAULT, waLink } from "@/lib/site";
import { CheckIcon, ClockIcon, WhatsAppIcon } from "./Icons";

// Prijzen, tijden en inhoud van de pakketten. Pas ze hier aan.
const services = [
  {
    name: "Basic",
    sub: "Interieur Reiniging",
    price: "60",
    duration: "1 – 1,5 uur",
    desc: "Ideaal voor regelmatig onderhoud. Snel en professioneel opgefrist.",
    features: [
      "Stofzuigen stoelen, tapijt & kofferbak",
      "Dashboard reinigen",
      "Kunststof delen reinigen",
      "Deurpanelen reinigen",
      "Ramen binnenkant reinigen",
    ],
    highlight: false,
    badge: "",
  },
  {
    name: "Diepte",
    sub: "Dieptereiniging Interieur",
    price: "120",
    duration: "2 – 3 uur",
    desc: "Grondige aanpak voor hardnekkige vlekken, geuren en diep vuil.",
    features: [
      "Alles uit het Basic pakket",
      "Dieptereiniging stoelen & tapijt",
      "Professionele vlekverwijdering",
      "Geurverwijdering behandeling",
      "Moeilijk bereikbare plekken",
    ],
    highlight: true,
    badge: "Populairste Keuze",
  },
  {
    name: "Full",
    sub: "Full Interior Detailing",
    price: "259",
    duration: "3 – 5 uur",
    desc: "Het ultieme pakket. Uw auto verlaat onze handen als showroommodel.",
    features: [
      "Alles diep gereinigd",
      "Lederreiniging + conditioner",
      "Hemelbekleding reinigen",
      "Kunststof bescherming",
      "Showroom eindresultaat",
    ],
    highlight: false,
    badge: "Premium",
  },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const jumpingUntil = useRef(0);
  const [active, setActive] = useState(0);

  // On phones and tablets the cards sit in a swipeable row. Keep the switcher
  // above it in step with whichever card is in view.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      if (performance.now() < jumpingUntil.current) return;

      const cards = Array.from(track.children) as HTMLElement[];
      if (cards.length === 0) return;

      const box = track.getBoundingClientRect();
      const atEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      const oneAtATime = cards[0].offsetWidth > box.width * 0.6;

      // One card per screen: the card nearest the middle is the active one.
      // Two per screen: the left-most card is, or the last once fully scrolled.
      const target = oneAtATime ? box.left + box.width / 2 : box.left;
      let best = 0;
      let bestDistance = Infinity;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const point = oneAtATime ? rect.left + rect.width / 2 : rect.left;
        const distance = Math.abs(point - target);
        if (distance < bestDistance) {
          best = i;
          bestDistance = distance;
        }
      });

      setActive(!oneAtATime && atEnd ? cards.length - 1 : best);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;

    const box = track.getBoundingClientRect();
    const rect = card.getBoundingClientRect();
    const oneAtATime = rect.width > box.width * 0.6;
    const gutter = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const delta = oneAtATime
      ? rect.left + rect.width / 2 - (box.left + box.width / 2)
      : rect.left - box.left - gutter;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Hold the highlight on the chosen tab while the row scrolls to it.
    jumpingUntil.current = performance.now() + (reduceMotion ? 0 : 600);
    setActive(index);
    track.scrollBy({ left: delta, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <hr className="accent-line section-rule" />

        <div className="section-head">
          <p className="eyebrow">Onze Diensten</p>
          <h2 className="h2">
            Kies Uw <span className="text-accent-gradient">Pakket</span>
          </h2>
          <p className="lead">
            Van snelle opfrisbeurt tot complete detailing. Wij komen naar u toe.
          </p>
        </div>

        <div className="pk-tabs" role="group" aria-label="Kies een pakket">
          {services.map((s, i) => (
            <button
              key={s.name}
              type="button"
              className="pk-tab"
              aria-current={active === i ? "true" : undefined}
              onClick={() => goTo(i)}
            >
              <span className="pk-tab__name">{s.name}</span>
              <span className="pk-tab__price">€{s.price}</span>
            </button>
          ))}
        </div>

        <div className="pk-track" ref={trackRef}>
          {services.map((s) => (
            <article
              key={s.name}
              className={`pk-card${s.highlight ? " pk-card--featured" : ""}`}
            >
              {s.badge && <p className="pk-badge">{s.badge}</p>}

              <h3
                className={`pk-name${s.highlight ? " text-accent-gradient" : ""}`}
              >
                {s.name}
              </h3>
              <p className="pk-sub">{s.sub}</p>

              <div className="pk-price-row">
                <p className="pk-price">
                  <span className="pk-price__cur">€</span>
                  <span className="pk-price__num">{s.price}</span>
                </p>
                <p className="pk-duration">
                  <ClockIcon />
                  {s.duration}
                </p>
              </div>

              <p className="pk-desc">{s.desc}</p>

              <ul className="pk-features">
                {s.features.map((f) => (
                  <li key={f}>
                    <span className="pk-check">
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(
                  `Hallo ${SITE.shortName}, ik wil het ${s.name} pakket (€${s.price}) boeken.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="pk-cta"
              >
                <WhatsAppIcon size={15} />
                {s.name} Boeken
              </a>
            </article>
          ))}
        </div>

        <p className="pk-note">
          Twijfelt u welk pakket past?{" "}
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
            Stel uw vraag via WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
