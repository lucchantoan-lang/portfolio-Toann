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
        padding: "120px 48px",
        position: "relative",
      }}
    >
      {/* ── ROW 1: BIO (LEFT) + ẢNH (RIGHT) ────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.25fr",
          gap: "64px",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        {/* ── CỘT TRÁI: TEXT & STATS ───────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
              fontSize: "clamp(42px, 4.5vw, 72px)",
              lineHeight: 0.95,
              textTransform: "uppercase",
              margin: "16px 0 32px 0",
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            I DESIGN
            <br />
            SIMPLE DIGITAL
            <br />
            EXPERIENCES,
            <br />
            NOT JUST UI.
          </h2>

          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "15px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.8,
              marginBottom: "20px",
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
              marginBottom: "36px",
            }}
          >
            My design process starts with understanding users, their needs, and their
            goals. I focus on creating clear interfaces, smooth user flows, and
            practical solutions that are easy to use.
          </p>

          {/* Stats 2 cột */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "36px",
              paddingTop: "28px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "52px",
                  lineHeight: 1,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                {facts[0].num}
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
                {facts[0].label}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "52px",
                  lineHeight: 1,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                {facts[1].num}
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
                {facts[1].label}
              </div>
            </div>
          </div>
        </div>

        {/* ── CỘT PHẢI: ẢNH CHÂN DUNG (LỚN & CÂN ĐỐI) ─── */}
        <div
          style={{
            position: "relative",
            borderRadius: "28px",
            overflow: "hidden",
            width: "100%",
            aspectRatio: "16 / 10.5",
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
