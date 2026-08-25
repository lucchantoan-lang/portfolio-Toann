import React from "react";
import { StatItem } from "../../models/types";

interface AboutSectionProps {
  stats: StatItem[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ stats }) => {
  return (
    <section id="about" style={{ background: "#020e05", padding: "120px 48px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#22c55e",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Our Story
          </span>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 5vw, 80px)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: "12px 0 40px 0",
            }}
          >
            WE BUILD
            <br />
            THINGS THAT
            <br />
            MATTER.
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.85,
              marginBottom: "24px",
            }}
          >
            Founded in 2018, CRTOAN is an independent creative studio working with bold
            brands and ambitious founders. We believe that extraordinary ideas deserve
            extraordinary execution — and we refuse to settle for anything less.
          </p>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.85,
              marginBottom: "48px",
            }}
          >
            From our studio we run integrated productions across branding, film, photography, and
            digital — always with the same obsessive attention to craft that defines everything we
            make.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "48px",
                    lineHeight: 1,
                    color: "#fff",
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
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    marginTop: "6px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=900&q=80"
            alt="Creative studio at work"
            style={{ width: "100%", height: "600px", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-24px",
              left: "-24px",
              background: "#22c55e",
              padding: "24px 32px",
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "36px",
                lineHeight: 1,
                color: "#fff",
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
                color: "#fff",
              }}
            >
              2018
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
