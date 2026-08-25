import React from "react";
import avatarImg from "../../imports/avatar.png";

const uiSkills = [
  "UI Design",
  "Wireframing",
  "Prototyping",
  "Design System",
  "Visual Design",
];

const uxSkills = [
  "UX Research",
  "User Flow",
  "Usability Testing",
  "Information Architecture",
  "User Journey Mapping",
];

const tools = ["Figma", "FigJam", "Photoshop", "Framer", "Blender"];

const facts = [
  { num: "1+", label: "Year of experience" },
  { num: "4+", label: "Projects completed" },
  { num: "5+", label: "Happy clients" },
];

const pillStyle: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#ffffff",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "100px",
  padding: "8px 18px",
  whiteSpace: "nowrap",
};

const cardStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #082010 0%, #041408 100%)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "20px",
  padding: "32px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
};

const cardLabelStyle: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontSize: "12px",
  letterSpacing: "0.2em",
  color: "#22c55e",
  textTransform: "uppercase",
  fontWeight: 700,
  marginBottom: "18px",
};

export const AboutMeSection: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        background: "#020e05",
        padding: "100px 48px 40px",
        position: "relative",
      }}
    >
      {/* ── ROW 1: BIO (LEFT) + ẢNH (RIGHT) ────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.25fr",
          gap: "64px",
          alignItems: "stretch",
          marginBottom: "80px",
        }}
      >
        {/* ── CỘT TRÁI: TEXT & STATS ───────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.2em",
                color: "#22c55e",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              ABOUT ME
            </span>

            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 4.2vw, 68px)",
                lineHeight: 0.98,
                textTransform: "uppercase",
                margin: "16px 0 28px 0",
                letterSpacing: "-0.01em",
                color: "#ffffff",
              }}
            >
              I DESIGN SIMPLE DIGITAL
              <br />
              EXPERIENCES, NOT JUST UI.
            </h2>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                marginBottom: "18px",
              }}
            >
              Hi, I'm <strong style={{ color: "#fff" }}>Toan</strong> — a UI/UX Designer with
              a background in Information Technology. I enjoy turning user needs and
              complex problems into simple, intuitive digital experiences.
            </p>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              My design process starts with understanding users, their needs, and their
              goals. I focus on creating clear interfaces, smooth user flows, and
              practical solutions that are easy to use.
            </p>
          </div>

          {/* Stats 3 cột */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {facts.map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "52px",
                    lineHeight: 1,
                    color: "#22c55e",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.45)",
                    textTransform: "uppercase",
                    marginTop: "8px",
                    fontWeight: 700,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CỘT PHẢI: ẢNH CHÂN DUNG (CHIỀU CAO KHỚP 100% CỘT TEXT) ─── */}
        <div
          style={{
            position: "relative",
            borderRadius: "28px",
            overflow: "hidden",
            width: "100%",
            height: "100%",
            minHeight: "100%",
            boxShadow:
              "0 32px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.12)",
          }}
        >
          <img
            src={avatarImg}
            alt="Toan — UI/UX Designer"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* ── ROW 2: BỐ CỤC SKILLS NẰM NGANG (UI SKILLS | UX SKILLS | TOOLS) ── */}
      <div
        id="skills"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "24px",
        }}
      >
        {/* UI Skills */}
        <div style={cardStyle}>
          <div style={cardLabelStyle}>UI Skills</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {uiSkills.map((s) => (
              <span key={s} style={pillStyle}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* UX Skills */}
        <div style={cardStyle}>
          <div style={cardLabelStyle}>UX Skills</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {uxSkills.map((s) => (
              <span key={s} style={pillStyle}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Tools I Use */}
        <div style={cardStyle}>
          <div style={cardLabelStyle}>Tools I Use</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {tools.map((s) => (
              <span key={s} style={pillStyle}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
