import React from "react";
import { NavItem } from "../../models/types";
import { Navbar } from "./Navbar";

interface HeroSectionProps {
  navItems: NavItem[];
  servicesBar: string[];
  onNavigate: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  navItems,
  servicesBar,
  onNavigate,
}) => {
  return (
    <>
      <div
        id="home"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          background:
            "radial-gradient(ellipse 70% 80% at 50% 40%, #166534 0%, #14532d 40%, #052e16 70%, #010d04 100%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navigation */}
        <Navbar navItems={navItems} onNavigate={onNavigate} />

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            padding: "0 48px",
            paddingBottom: "60px",
          }}
        >
          <div style={{ zIndex: 2 }}>
            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(60px, 8vw, 110px)",
                lineHeight: 0.92,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: "#fff",
                margin: "0 0 28px 0",
              }}
            >
              BEYOND
              <br />
              IDEAS.
              <br />
              INTO
              <br />
              IMPACT.
            </h1>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                letterSpacing: "0.06em",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.75)",
                textTransform: "uppercase",
                maxWidth: "200px",
              }}
            >
              CREATIVE PRODUCTION
              <br />
              FOR BRANDS THAT
              <br />
              REFUSE TO BLEND IN.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1674507887562-ff0183e867ed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=700&q=80"
              alt="Dramatic portrait"
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "560px",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>

          <div style={{ zIndex: 2, paddingLeft: "24px" }}>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(16px, 2vw, 22px)",
                lineHeight: 1.3,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "36px",
                maxWidth: "280px",
              }}
            >
              WE DESIGN, BUILD, AND LAUNCH EXPERIENCES THAT CAPTURE ATTENTION AND DRIVE RESULTS.
            </p>
            <button
              onClick={() => onNavigate("projects")}
              style={{
                background: "#fff",
                color: "#010d04",
                border: "none",
                borderRadius: "100px",
                padding: "16px 36px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f0f0f0";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              START YOUR PROJECT
            </button>
          </div>
        </div>
      </div>

      {/* FORMA Banner */}
      <div
        style={{
          background: "transparent",
          padding: "0",
          overflow: "hidden",
          marginTop: "-260px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ lineHeight: 0.85, overflow: "hidden", paddingTop: "16px" }}>
          <span
            style={{
              display: "block",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(120px, 22vw, 340px)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#fff",
              whiteSpace: "nowrap",
              textAlign: "center",
              userSelect: "none",
            }}
          >
            FORMA
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 48px 24px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {servicesBar.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
