"use client";
const services = [
  {
    id: "01",
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
    waText: "Basic%20pakket%20(€60)",
  },
  {
    id: "02",
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
    waText: "Diepte%20pakket%20(€120)",
  },
  {
    id: "03",
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
    waText: "Full%20pakket%20(€259)",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "120px 24px", position: "relative" }}>
      <hr className="gold-line" style={{ maxWidth: 1100, margin: "0 auto 100px" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p
            style={{
              color: "#c9a84c",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Onze Diensten
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
            Kies Uw{" "}
            <span className="text-gold-gradient">Pakket</span>
          </h2>
          <p style={{ color: "#555", fontSize: 16, maxWidth: 440, margin: "0 auto" }}>
            Van snelle opfrisbeurt tot complete detailing — wij komen naar u toe.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {services.map((s) => (
            <div
              key={s.id}
              style={{
                position: "relative",
                borderRadius: 20,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                background: s.highlight
                  ? "linear-gradient(160deg, #1a1608 0%, #111 100%)"
                  : "#111",
                border: s.highlight
                  ? "1px solid rgba(201,168,76,0.35)"
                  : "1px solid #1e1e1e",
                boxShadow: s.highlight
                  ? "0 0 60px rgba(201,168,76,0.1)"
                  : "none",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                if (!s.highlight)
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(201,168,76,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                if (!s.highlight) e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Badge */}
              {s.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "4px 16px",
                    borderRadius: 999,
                    background: s.highlight ? "#c9a84c" : "#1a1a1a",
                    color: s.highlight ? "#000" : "#c9a84c",
                    border: s.highlight ? "none" : "1px solid rgba(201,168,76,0.3)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.badge}
                </div>
              )}

              {/* Package ID & name */}
              <div style={{ marginBottom: 24 }}>
                <p
                  style={{
                    color: "#444",
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Pakket {s.id}
                </p>
                <h3
                  className={s.highlight ? "text-gold-gradient" : ""}
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 32,
                    fontWeight: 700,
                    color: s.highlight ? undefined : "#fff",
                    marginBottom: 4,
                  }}
                >
                  {s.name}
                </h3>
                <p style={{ color: "#555", fontSize: 13 }}>{s.sub}</p>
              </div>

              {/* Price */}
              <div
                style={{
                  marginBottom: 24,
                  paddingBottom: 24,
                  borderBottom: "1px solid #1e1e1e",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
                  <span style={{ color: "#444", fontSize: 18 }}>€</span>
                  <span
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: 52,
                      fontWeight: 700,
                      lineHeight: 1,
                      color: s.highlight ? "#c9a84c" : "#fff",
                    }}
                  >
                    {s.price}
                  </span>
                </div>
                <p
                  style={{
                    color: "#444",
                    fontSize: 12,
                    marginTop: 6,
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" strokeLinecap="round" />
                  </svg>
                  {s.duration}
                </p>
              </div>

              {/* Description */}
              <p
                style={{
                  color: "#555",
                  fontSize: 13,
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                {s.desc}
              </p>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 32,
                  flex: 1,
                }}
              >
                {s.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 13,
                      color: "#999",
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: s.highlight
                          ? "rgba(201,168,76,0.15)"
                          : "#1a1a1a",
                        color: s.highlight ? "#c9a84c" : "#444",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/31644840102?text=Hallo%20INTOR%2C%20ik%20wil%20het%20${s.waText}%20boeken.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 0",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 600,
                  transition: "all 0.3s",
                  background: s.highlight ? "#c9a84c" : "transparent",
                  color: s.highlight ? "#000" : "#666",
                  border: s.highlight ? "none" : "1px solid #2a2a2a",
                  boxShadow: s.highlight
                    ? "0 0 20px rgba(201,168,76,0.25)"
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (s.highlight) {
                    e.currentTarget.style.background = "#e8c97a";
                  } else {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (s.highlight) {
                    e.currentTarget.style.background = "#c9a84c";
                  } else {
                    e.currentTarget.style.borderColor = "#2a2a2a";
                    e.currentTarget.style.color = "#666";
                  }
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Dit Pakket Boeken
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
