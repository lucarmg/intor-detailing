"use client";
export default function Footer() {
  return (
    <footer style={{ padding: "48px 24px 40px", position: "relative" }}>
      <hr className="gold-line" style={{ maxWidth: 1100, margin: "0 auto 48px" }} />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a84c, #a07830)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 12,
              color: "#000",
              fontFamily: "var(--font-playfair)",
            }}
          >
            I
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.12em",
                color: "#fff",
              }}
            >
              INTOR Interior Detailing
            </p>
            <p style={{ color: "#333", fontSize: 11 }}>Eindhoven & Omgeving</p>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {[
            ["#services", "Services"],
            ["#waarom", "Waarom Wij"],
            [
              "https://www.instagram.com/intor_interior_detailing",
              "Instagram",
            ],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                color: "#444",
                fontSize: 12,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#c9a84c")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#444")
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ color: "#2a2a2a", fontSize: 11 }}>
          © {new Date().getFullYear()} lucarmg Designs
        </p>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/31644840102?text=Hallo%20INTOR%2C%20ik%20wil%20graag%20een%20afspraak%20maken!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp contact"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 999,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
          transition: "all 0.3s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 30px rgba(37,211,102,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.45)";
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}
