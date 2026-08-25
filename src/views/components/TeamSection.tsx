import React from "react";
import { TeamMember } from "../../models/types";

interface TeamSectionProps {
  team: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  return (
    <section id="team" style={{ background: "#010a03", padding: "120px 48px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "64px",
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
            The People
          </span>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 6vw, 88px)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: "12px 0 0 0",
            }}
          >
            MEET
            <br />
            THE TEAM
          </h2>
        </div>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "280px",
            lineHeight: 1.7,
            textAlign: "right",
          }}
        >
          A tight-knit crew of directors, designers, photographers, and strategists who care deeply
          about the work.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
        {team.map((member, i) => (
          <div
            key={i}
            style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
            onMouseEnter={(e) => {
              const overlay = e.currentTarget.querySelector(".overlay") as HTMLElement | null;
              if (overlay) overlay.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector(".overlay") as HTMLElement | null;
              if (overlay) overlay.style.opacity = "0";
            }}
          >
            <img
              src={member.img}
              alt={member.name}
              style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }}
            />
            <div
              className="overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)",
                opacity: 0,
                transition: "opacity 0.3s",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "18px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#fff",
                }}
              >
                {member.name}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  color: "#22c55e",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                  fontWeight: 600,
                }}
              >
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
