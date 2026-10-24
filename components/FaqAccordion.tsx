"use client";

import { useId, useState } from "react";

type Item = { q: string; a: string };

/**
 * Vragen die open- en dichtklappen. Er is altijd maar één open: een nieuwe
 * openen sluit de vorige. De antwoorden staan altijd in de HTML, dus
 * zoekmachines lezen ze ook als ze dicht zijn.
 */
export default function FaqAccordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="faq__list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={item.q} className={`faq__item rv${isOpen ? " is-open" : ""}`}>
            <h3 className="faq__q">
              <button
                type="button"
                id={buttonId}
                className="faq__toggle"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq__panel"
            >
              <div className="faq__panel-inner">
                <p className="faq__a">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
