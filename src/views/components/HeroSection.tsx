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

      {/* ── 2. HERO 3-COLUMN CONTENT (CĂN GIỮA & TRẢI ĐỀU 2 BÊN) ─ */}
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1.2fr",
          alignItems: "center",
          padding: "80px 48px 0",
          zIndex: 2,
        }}
      >
        {/* ── CỘT TRÁI: TIÊU ĐỀ CHÍNH TRẢI ĐỀU ───────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            zIndex: 2,
            paddingRight: "20px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(42px, 4.8vw, 76px)",
              lineHeight: 0.96,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#ffffff",
              margin: "0 0 24px 0",
              maxWidth: "460px",
            }}
          >
            TURNING IDEAS
            <br />
            INTO SIMPLE
            <br />
            EXPERIENCES.
          </h1>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "0.1em",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.75)",
              textTransform: "uppercase",
              maxWidth: "360px",
              margin: 0,
            }}
          >
            UI/UX DESIGNER FOCUSED ON CREATING
            <br />
            SIMPLE & USER-FRIENDLY DIGITAL EXPERIENCES.
          </p>
        </div>

        {/* ── CỘT GIỮA: ẢNH CHÂN DUNG & HÀO QUANG NỔI BẬT ────── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            zIndex: 1,
          }}
        >
          {/* Hào quang lớp rộng (Ambient Halo Glow) */}
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "560px",
              height: "560px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.15) 50%, transparent 75%)",
              filter: "blur(65px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Hào quang tâm sáng rực (Vibrant Core Aura behind head & body) */}
          <div
            style={{
              position: "absolute",
              top: "42%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "380px",
              height: "400px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at center, rgba(134, 239, 172, 0.45) 0%, rgba(34, 197, 94, 0.45) 45%, transparent 75%)",
              filter: "blur(35px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Ảnh chân dung (kích thước lớn hơn và nổi bật) */}
          <img
            src={heroAvatarImg}
            alt="CRTOAN — UI/UX Designer"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: "530px",
              maxHeight: "calc(100vh - 180px)",
              height: "auto",
              objectFit: "contain",
              objectPosition: "center center",
              display: "block",
              maskImage:
                "linear-gradient(to bottom, black 82%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 82%, transparent 100%)",
            }}
          />
        </div>

        {/* ── CỘT PHẢI: BIO & CTA BUTTON (DỜI SANG PHẢI) ─── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            zIndex: 2,
          }}
        >
          <div style={{ maxWidth: "400px" }}>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(18px, 2vw, 24px)",
                lineHeight: 1.4,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: "32px",
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
                background: "#ffffff",
                color: "#010d04",
                border: "none",
                borderRadius: "100px",
                padding: "16px 44px",
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
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              VIEW PROJECTS
            </button>
          </div>
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
          marginTop: "-120px",
        }}
      >
        <div style={{ lineHeight: 0.88, overflow: "hidden", paddingBottom: "18px" }}>
          <span
            style={{
              display: "block",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(75px, 18.5vw, 240px)",
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
