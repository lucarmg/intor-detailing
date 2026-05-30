"use client";
const reasons = [
  {
    icon: "🚗",
    title: "Wij Komen Naar U",
    desc: "Geen moeite om te rijden. Wij komen met alle apparatuur naar uw locatie in Eindhoven en omgeving.",
  },
  {
    icon: "⚡",
    title: "Premium Producten",
    desc: "Alleen professionele reinigingsproducten en apparatuur voor een onberispelijk resultaat.",
  },
  {
    icon: "✦",
    title: "Showroom Kwaliteit",
    desc: "Van dashboard tot stoelen — uw auto verlaat onze handen in perfecte staat.",
  },
  {
    icon: "📍",
    title: "Eindhoven & Omgeving",
    desc: "Actief in Eindhoven en de regio Noord-Brabant. Neem contact op voor beschikbaarheid.",
  },
];

export default function WhyUs() {
  return (
    <section id="waarom" style={{ padding: "120px 24px" }}>
      <hr className="gold-line" style={{ maxWidth: 1100, margin: "0 auto 100px" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
            alignItems: "center",
            marginBottom: 64,
          }}
        >
          <div>
            <p
              style={{
                color: "#c9a84c",
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Waarom INTOR
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.15,
              }}
            >
              Meer dan schoonmaken.{" "}
              <span className="text-gold-gradient">
                Het is zorg voor uw auto.
              </span>
            </h2>
          </div>
          <p
            style={{
              color: "#555",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Bij INTOR Interior Detailing begrijpen wij dat uw auto meer is dan
            vervoer. Het is uw dagelijkse ruimte. Wij behandelen elk interieur
            met de aandacht en precisie die het verdient.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {reasons.map((r) => (
            <div
              key={r.title}
              style={{
                padding: 32,
                borderRadius: 18,
                background: "#111",
                border: "1px solid #1e1e1e",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                e.currentTarget.style.background = "#131310";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1e1e1e";
                e.currentTarget.style.background = "#111";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "#1a1608",
                    border: "1px solid rgba(201,168,76,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {r.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: 8,
                    }}
                  >
                    {r.title}
                  </h3>
                  <p style={{ color: "#555", fontSize: 13, lineHeight: 1.7 }}>
                    {r.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            borderRadius: 20,
            background: "linear-gradient(135deg, #1a1608 0%, #111 50%, #1a1608 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
            padding: "48px 32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />
          <p
            style={{
              color: "#666",
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Klaar voor een schoon interieur?
          </p>
          <h3
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 28,
            }}
          >
            Plan vandaag nog uw detailing sessie
          </h3>
          <a
            href="https://wa.me/31644840102?text=Hallo%20INTOR%2C%20ik%20wil%20graag%20een%20afspraak%20maken!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              background: "#c9a84c",
              color: "#000",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 0 32px rgba(201,168,76,0.25)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e8c97a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#c9a84c";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Stuur een WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
