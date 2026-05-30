"use client";
export default function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 24px" }}>
      <hr className="gold-line" style={{ maxWidth: 1100, margin: "0 auto 100px" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              color: "#c9a84c",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Neem{" "}
            <span className="text-gold-gradient">Contact</span>
            {" "}Op
          </h2>
          <p style={{ color: "#555", fontSize: 16, maxWidth: 400, margin: "0 auto" }}>
            Vragen of klaar om te boeken? Wij reageren snel.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            maxWidth: 900,
            margin: "0 auto 32px",
          }}
        >
          {/* WhatsApp */}
          <ContactCard
            href="https://wa.me/31644840102?text=Hallo%20INTOR%2C%20ik%20wil%20graag%20een%20afspraak%20maken!"
            iconColor="#25D366"
            hoverBorder="rgba(37,211,102,0.3)"
            hoverBg="#111a12"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            }
            label="WhatsApp"
            value="+31 6 44840102"
            sub="Snel een afspraak inplannen"
            hoverTextColor="#25D366"
          />

          {/* Email */}
          <ContactCard
            href="mailto:intor.detailing@gmail.com"
            iconColor="#c9a84c"
            hoverBorder="rgba(201,168,76,0.3)"
            hoverBg="#131310"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
            label="E-mail"
            value="intor.detailing@gmail.com"
            sub="Reactie binnen 24 uur"
            hoverTextColor="#c9a84c"
          />

          {/* Instagram */}
          <ContactCard
            href="https://www.instagram.com/intor_interior_detailing"
            iconColor="#E1306C"
            hoverBorder="rgba(225,48,108,0.3)"
            hoverBg="#1a1115"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="#E1306C" stroke="none" />
              </svg>
            }
            label="Instagram"
            value="@intor_interior_detailing"
            sub="Bekijk ons werk"
            hoverTextColor="#E1306C"
          />
        </div>

        {/* Location */}
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 20px",
              borderRadius: 999,
              background: "#111",
              border: "1px solid #1e1e1e",
              color: "#555",
              fontSize: 13,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Werkgebied: Eindhoven en omgeving · Noord-Brabant
          </span>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  sub,
  hoverBorder,
  hoverBg,
  hoverTextColor,
}: {
  href: string;
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  value: string;
  sub: string;
  hoverBorder: string;
  hoverBg: string;
  hoverTextColor: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        padding: 32,
        borderRadius: 18,
        background: "#111",
        border: "1px solid #1e1e1e",
        textDecoration: "none",
        textAlign: "center",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = hoverBorder;
        e.currentTarget.style.background = hoverBg;
        const val = e.currentTarget.querySelector(".card-value") as HTMLElement;
        if (val) val.style.color = hoverTextColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1e1e1e";
        e.currentTarget.style.background = "#111";
        const val = e.currentTarget.querySelector(".card-value") as HTMLElement;
        if (val) val.style.color = "#fff";
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: "#1a1a1a",
          border: "1px solid #2a2a2a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
        }}
      >
        {icon}
      </div>
      <p
        style={{
          color: "#444",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <p
        className="card-value"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: 15,
          fontWeight: 600,
          color: "#fff",
          marginBottom: 6,
          transition: "color 0.3s",
          wordBreak: "break-word",
        }}
      >
        {value}
      </p>
      <p style={{ color: "#444", fontSize: 12 }}>{sub}</p>
    </a>
  );
}
