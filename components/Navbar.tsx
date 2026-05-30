"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 24px",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e1e" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a84c, #a07830)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 13,
              color: "#000",
              fontFamily: "var(--font-playfair)",
            }}
          >
            I
          </div>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "0.15em",
              color: "#fff",
            }}
          >
            INTOR
          </span>
        </div>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ gap: 32, alignItems: "center" }}
        >
          {[
            ["#services", "Services"],
            ["#waarom", "Waarom Wij"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{
                color: "#777",
                textDecoration: "none",
                fontSize: 13,
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#c9a84c")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#777")
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="https://wa.me/31644840102?text=Hallo%20INTOR%2C%20ik%20wil%20graag%20een%20afspraak%20maken!"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 22px",
            borderRadius: 999,
            border: "1px solid #c9a84c",
            color: "#c9a84c",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.3s",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "#c9a84c";
            el.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "transparent";
            el.style.color = "#c9a84c";
          }}
        >
          Afspraak Maken
        </a>
      </div>
    </nav>
  );
}
