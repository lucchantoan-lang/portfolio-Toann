import React from "react";
import { ProjectItem } from "../../models/types";

interface ProjectsSectionProps {
  projects: ProjectItem[];
  hoveredProject: number | null;
  onHoverProject: (index: number | null) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  hoveredProject,
  onHoverProject,
}) => {
  return (
    <section id="projects" style={{ background: "#020e05", padding: "120px 48px" }}>
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
            Selected Work
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
            OUR
            <br />
            PROJECTS
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
          A selection of our most impactful work across branding, video, digital, and experiential
          production.
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              gridColumn: p.wide ? "1 / -1" : "auto",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              aspectRatio: p.wide ? "16/7" : "4/3",
            }}
            onMouseEnter={() => onHoverProject(i)}
            onMouseLeave={() => onHoverProject(null)}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.6s ease",
                transform: hoveredProject === i ? "scale(1.04)" : "scale(1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  hoveredProject === i ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.55)",
                transition: "background 0.4s",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {p.num}
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.year}
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "11px",
                    color: "#22c55e",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  {p.category}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(22px, 3vw, 38px)",
                    textTransform: "uppercase",
                    margin: 0,
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                >
                  {p.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "64px" }}>
        <button
          style={{
            background: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "100px",
            padding: "16px 48px",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "border-color 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#fff";
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          VIEW ALL PROJECTS
        </button>
      </div>
    </section>
  );
};
