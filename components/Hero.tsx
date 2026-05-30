"use client";
export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 24px",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.035,
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          paddingTop: 80,
        }}
      >
        {/* Badge */}
        <div className="anim-1" style={{ marginBottom: 32 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(201,168,76,0.3)",
              background: "rgba(201,168,76,0.05)",
              color: "#c9a84c",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#c9a84c",
                display: "inline-block",
              }}
            />
            Mobiele Detailing · Eindhoven & Omgeving
          </span>
        </div>

        {/* Headline */}
        <h1
          className="anim-2"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(48px, 8vw, 88px)",
            fontWeight: 700,
            lineHeight: 0.95,
            marginBottom: 28,
            color: "#fff",
          }}
        >
          <span style={{ display: "block" }}>Jouw Interieur.</span>
          <span className="text-gold-shimmer" style={{ display: "block" }}>
            Showroom
          </span>
          <span style={{ display: "block" }}>Resultaat.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="anim-3"
          style={{
            color: "#777",
            fontSize: "clamp(15px, 2vw, 18px)",
            maxWidth: 480,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Professionele interieur detailing aan huis in Eindhoven.
          Wij komen naar u toe met premium apparatuur en producten.
        </p>

        {/* Buttons */}
        <div
          className="anim-4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            marginBottom: 72,
          }}
        >
          <a
            href="https://wa.me/31644840102?text=Hallo%20INTOR%2C%20ik%20wil%20graag%20een%20afspraak%20maken!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 32px",
              background: "#c9a84c",
              color: "#000",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 0 32px rgba(201,168,76,0.3)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e8c97a";
              e.currentTarget.style.boxShadow = "0 0 50px rgba(201,168,76,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#c9a84c";
              e.currentTarget.style.boxShadow = "0 0 32px rgba(201,168,76,0.3)";
            }}
          >
            <WhatsAppIcon />
            Direct Afspraak Maken
          </a>

          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "16px 32px",
              border: "1px solid #2a2a2a",
              color: "#777",
              borderRadius: 999,
              fontWeight: 500,
              fontSize: 15,
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2a2a";
              e.currentTarget.style.color = "#777";
            }}
          >
            Bekijk Pakketten
          </a>
        </div>

        {/* Stats */}
        <div
          className="anim-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            maxWidth: 400,
            margin: "0 auto",
            gap: 0,
          }}
        >
          {[
            { num: "3", label: "Pakketten" },
            { num: "100%", label: "Mobiel" },
            { num: "★★★★★", label: "Kwaliteit" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "0 16px",
                borderRight: i < 2 ? "1px solid #1e1e1e" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#c9a84c",
                  marginBottom: 4,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#444",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "#333",
        }}
      >
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.5))",
          }}
        />
        <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
