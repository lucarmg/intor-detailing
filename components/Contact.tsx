import type { ReactNode } from "react";
import { SITE, WA_DEFAULT } from "@/lib/site";
import { InstagramIcon, MailIcon, PinIcon, WhatsAppIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <hr className="accent-line section-rule" />

        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2 className="h2">
            Neem <span className="text-accent-gradient">Contact</span> Op
          </h2>
          <p className="lead">
            Vragen of klaar om te boeken? Wij reageren snel.
          </p>
        </div>

        <div className="contact__grid">
          <ContactCard
            variant="whatsapp"
            href={WA_DEFAULT}
            external
            icon={<WhatsAppIcon size={22} />}
            label="WhatsApp"
            value={SITE.phoneDisplay}
            sub="Afspraak en prijs bespreken"
          />
          <ContactCard
            variant="email"
            href={`mailto:${SITE.email}`}
            icon={<MailIcon />}
            label="E-mail"
            value={SITE.email}
            sub="Reactie binnen 24 uur"
          />
          <ContactCard
            variant="instagram"
            href={SITE.instagramUrl}
            external
            icon={<InstagramIcon />}
            label="Instagram"
            value={SITE.instagramHandle}
            sub="Bekijk ons werk"
          />
        </div>

        <div className="location">
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location__pill"
          >
            <PinIcon size={15} />
            <span>
              U vindt ons aan{" "}
              <span className="nowrap">{SITE.address}</span>
            </span>
            <span className="location__route">Route plannen</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  variant,
  href,
  external = false,
  icon,
  label,
  value,
  sub,
}: {
  variant: "whatsapp" | "email" | "instagram";
  href: string;
  external?: boolean;
  icon: ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`ccard ccard--${variant}`}
    >
      <span className="ccard__icon">{icon}</span>
      <span className="ccard__body">
        <span className="ccard__label">{label}</span>
        <span className="ccard__value">{value}</span>
        <span className="ccard__sub">{sub}</span>
      </span>
    </a>
  );
}