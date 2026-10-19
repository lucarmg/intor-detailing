import type { ReactNode } from "react";
import { FaTiktok } from "react-icons/fa6";
import { SITE, WA_DEFAULT } from "@/lib/site";
import {
  ArrowIcon,
  InstagramIcon,
  MailIcon,
  PinIcon,
  WhatsAppIcon,
} from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap contact__layout">
        <div className="contact__head">
          <p className="marker">Contact</p>
          <h2 id="contact-title" className="display contact__title rv">
            Neem <span className="hl">Contact</span> Op
          </h2>
          <p className="shead__lead rv">
            Vragen of klaar om te boeken? Wij reageren snel.
          </p>
        </div>

        <ul className="clist">
          <ContactRow
            href={WA_DEFAULT}
            external
            icon={<WhatsAppIcon size={20} />}
            label="WhatsApp"
            value={SITE.phoneDisplay}
            sub="Afspraak en prijs bespreken"
          />
          <ContactRow
            href={`mailto:${SITE.email}`}
            icon={<MailIcon size={20} />}
            label="E-mail"
            value={SITE.email}
            sub="Reactie binnen 24 uur"
          />
          <ContactRow
            href={SITE.instagramUrl}
            external
            icon={<InstagramIcon size={20} />}
            label="Instagram"
            value={SITE.instagramHandle}
            sub="Bekijk ons werk"
          />
          <ContactRow
            href={SITE.tiktokUrl}
            external
            icon={<FaTiktok size={19} aria-hidden="true" />}
            label="TikTok"
            value={SITE.tiktokHandle}
            sub="Bekijk onze video's"
          />
          <ContactRow
            href={SITE.mapsUrl}
            external
            icon={<PinIcon size={20} />}
            label="U vindt ons aan"
            value={SITE.address}
            sub="Route plannen"
            subAccent
          />
        </ul>
      </div>

      {/* Kaart in de donkere stijl van de site. Google laat een iframe niet
          zelf themen, dus de kleuren worden met een CSS-filter omgezet. */}
      <div className="wrap">
        <figure className="cmap rv">
          <iframe
            className="cmap__frame"
            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&z=15&output=embed`}
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
      </div>
    </section>
  );
}

/** Laat een e-mailadres op smalle schermen netjes vóór de @ afbreken. */
function breakAtSign(value: string): ReactNode {
  const at = value.indexOf("@");
  if (at <= 0) return value;
  return (
    <>
      {value.slice(0, at)}
      <wbr />
      {value.slice(at)}
    </>
  );
}

function ContactRow({
  href,
  external = false,
  icon,
  label,
  value,
  sub,
  subAccent = false,
}: {
  href: string;
  external?: boolean;
  icon: ReactNode;
  label: string;
  value: string;
  sub: string;
  subAccent?: boolean;
}) {
  return (
    <li className="rv">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="crow"
      >
        <span className="crow__icon">{icon}</span>
        <span className="crow__body">
          <span className="crow__label">{label}</span>
          <span className="crow__value">{breakAtSign(value)}</span>
          <span className={`crow__sub${subAccent ? " crow__sub--accent" : ""}`}>
            {sub}
          </span>
        </span>
        <ArrowIcon className="crow__arrow" />
      </a>
    </li>
  );
}
