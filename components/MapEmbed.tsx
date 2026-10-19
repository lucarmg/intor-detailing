import { SITE } from "@/lib/site";
import { ArrowIcon, PinIcon } from "./Icons";

const EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&z=15&output=embed`;

/**
 * Google Maps in de donkere stijl van de site. Google laat een iframe niet
 * zelf themen, dus de kleuren worden met een CSS-filter omgezet.
 */
export default function MapEmbed() {
  return (
    <figure className="cmap rv">
      <iframe
        className="cmap__frame"
        src={EMBED_URL}
        title={`Kaart: ${SITE.address}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <span className="cmap__tint" aria-hidden="true" />

      <figcaption className="cmap__card">
        <span className="cmap__pin" aria-hidden="true">
          <PinIcon size={18} />
        </span>
        <span className="cmap__text">
          <span className="crow__label">U vindt ons aan</span>
          <span className="cmap__address">{SITE.address}</span>
        </span>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline cmap__route"
        >
          Route plannen
          <ArrowIcon size={16} />
        </a>
      </figcaption>
    </figure>
  );
}
