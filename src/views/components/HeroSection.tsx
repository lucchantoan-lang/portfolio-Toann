import React from "react";
import { NavItem } from "../../models/types";
import { Navbar } from "./Navbar";
import heroAvatarImg from "../../imports/hero-avatar.png";

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
        height: "100vh",
        minHeight: "700px",
        maxHeight: "1080px",
        background:
          "radial-gradient(ellipse 70% 80% at 50% 40%, #166534 0%, #14532d 40%, #052e16 70%, #010d04 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* ── 1. NAVBAR ───────────────────────────────── */}
      <Navbar navItems={navItems} onNavigate={onNavigate} />

      {/* ── 2. HERO 3-COLUMN CONTENT (CĂN ĐỀU TOP 3 CỘT) ─ */}
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr 1.15fr",
          alignItems: "start",
          padding: "0 48px",
          zIndex: 2,
        }}
      >
        {/* ── CỘT TRÁI: TIÊU ĐỀ CHÍNH ────────────────── */}
        <div style={{ paddingTop: "20px", zIndex: 2 }}>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(38px, 4.6vw, 72px)",
              lineHeight: 0.94,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#fff",
              margin: "0 0 20px 0",
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
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "0.08em",
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

        {/* ── CỘT GIỮA: ẢNH CHÂN DUNG & HÀO QUANG ────── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "20px",
            height: "100%",
            zIndex: 1,
          }}
        >
          {/* Hào quang lớp ngoài (Radiant Ambient Aura) */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "480px",
              height: "480px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(34, 197, 94, 0.45) 0%, rgba(74, 222, 128, 0.2) 45%, transparent 75%)",
              filter: "blur(60px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Hào quang tâm sáng (Core Bright Glow) */}
          <div
            style={{
              position: "absolute",
              top: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "340px",
              height: "380px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.28) 0%, rgba(34, 197, 94, 0.45) 50%, transparent 75%)",
              filter: "blur(35px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Ảnh chân dung (vừa vặn màn hình 1st screen) */}
          <img
            src={heroAvatarImg}
            alt="CRTOAN — UI/UX Designer"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: "460px",
              maxHeight: "calc(100vh - 240px)",
              height: "auto",
              objectFit: "contain",
              objectPosition: "center top",
              display: "block",
              filter:
                "drop-shadow(0 0 35px rgba(34, 197, 94, 0.4)) drop-shadow(0 25px 45px rgba(0,0,0,0.7))",
              maskImage:
                "linear-gradient(to bottom, black 82%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 82%, transparent 100%)",
            }}
          />
        </div>

        {/* ── CỘT PHẢI: BIO & CTA BUTTON ─────────────── */}
        <div
          style={{
            paddingTop: "20px",
            paddingLeft: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(16px, 1.8vw, 22px)",
              lineHeight: 1.35,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "28px",
              maxWidth: "340px",
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
              padding: "16px 40px",
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
            VIEW PROJECTS
          </button>
        </div>
      </div>

      {/* ── 3. CRTOAN BANNER & SERVICES FOOTER ───────── */}
      <div
        style={{
          background: "transparent",
          padding: "0",
          overflow: "hidden",
          position: "relative",
          zIndex: 3,
          marginTop: "-90px",
        }}
      >
        <div style={{ lineHeight: 0.8, overflow: "hidden" }}>
          <span
            style={{
              display: "block",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(70px, 17vw, 220px)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#ffffff",
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
            padding: "12px 48px 16px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(1, 13, 4, 0.4)",
            backdropFilter: "blur(8px)",
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
    </div>
    </>
  );
};
