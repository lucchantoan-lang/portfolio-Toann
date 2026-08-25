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
                fontSize: "clamp(54px, 7.5vw, 100px)",
                lineHeight: 0.92,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: "#fff",
                margin: "0 0 28px 0",
              }}
            >
              TURNING
              <br />
              IDEAS INTO
              <br />
              SIMPLE
              <br />
              EXPERIENCES.
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
                maxWidth: "240px",
              }}
            >
              UI/UX DESIGNER
              <br />
              FOCUSED ON CREATING
              <br />
              SIMPLE & USER-FRIENDLY
              <br />
              DIGITAL EXPERIENCES.
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
                fontSize: "clamp(18px, 2.2vw, 24px)",
                lineHeight: 1.35,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "36px",
                maxWidth: "380px",
              }}
            >
              I'M A UI/UX DESIGNER WITH A BACKGROUND IN IT.
              <br />
              I ENJOY TURNING COMPLEX PROBLEMS
              <br />
              INTO SIMPLE DIGITAL EXPERIENCES.
            </p>
            <button
              onClick={() => onNavigate("works")}
              style={{
                background: "#fff",
                color: "#010d04",
                border: "none",
                borderRadius: "100px",
                padding: "18px 48px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.12em",
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
              VIEW PROJECTS.
            </button>
          </div>
        </div>
      </div>

      {/* CRTOAN Banner */}
      <div
        style={{
          background: "transparent",
          padding: "0",
          overflow: "hidden",
          marginTop: "-180px",
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
              fontSize: "clamp(80px, 20vw, 240px)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#fff",
              whiteSpace: "nowrap",
              textAlign: "center",
              userSelect: "none",
            }}
          >
            CRTOAN
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
