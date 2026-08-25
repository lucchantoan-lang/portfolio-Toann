import React from "react";
import avatarImg from "../../imports/avatar.jpg";

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
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* ── CỘT TRÁI: TEXT & STATS ───────────────────── */}
        <div>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
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
              fontSize: "clamp(48px, 5.2vw, 84px)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: "16px 0 40px 0",
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
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.85,
              marginBottom: "24px",
              maxWidth: "540px",
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
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.85,
              marginBottom: "48px",
              maxWidth: "540px",
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
              gap: "48px",
              maxWidth: "400px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "56px",
                  lineHeight: 1,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                1+
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
                YEARS OF EXPERIENCE
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "56px",
                  lineHeight: 1,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                4+
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
                PROJECTS COMPLETED
              </div>
            </div>
          </div>
        </div>

        {/* ── CỘT PHẢI: ẢNH + BADGE XANH LÁ ĐÈ GÓC DƯỚI TRÁI ── */}
        <div style={{ position: "relative" }}>
          <img
            src={avatarImg}
            alt="Toan — UI/UX Designer"
            style={{
              width: "100%",
              height: "620px",
              objectFit: "cover",
              objectPosition: "center 20%",
              display: "block",
            }}
          />

          {/* Badge EST. 2024 xanh neon góc dưới trái */}
          <div
            style={{
              position: "absolute",
              bottom: "-24px",
              left: "-24px",
              background: "#22c55e",
              padding: "24px 32px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "36px",
                lineHeight: 1,
                color: "#ffffff",
                letterSpacing: "0.05em",
              }}
            >
              EST.
            </div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "36px",
                lineHeight: 1,
                color: "#ffffff",
                letterSpacing: "0.05em",
              }}
            >
              2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
