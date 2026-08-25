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
    <section id="works" style={{ background: "#020e05", padding: "40px 48px 120px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "72px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingBottom: "36px",
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
            Featured Works
          </span>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 6vw, 88px)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: "12px 0 0 0",
              color: "#fff",
            }}
          >
            SELECTED
            <br />
            PROJECTS
          </h2>
        </div>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "320px",
            lineHeight: 1.7,
            textAlign: "right",
            margin: 0,
          }}
        >
          A curated collection of UI/UX design, digital banking, design systems, and complex product
          experiences.
        </p>
      </div>

      {/* Projects List - 2 Column Layout per project (Intro Left | Banner Right) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
        {projects.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => onHoverProject(i)}
            onMouseLeave={() => onHoverProject(null)}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.35fr",
              gap: "48px",
              alignItems: "center",
              background:
                hoveredProject === i
                  ? "linear-gradient(135deg, #0b2914 0%, #06190c 100%)"
                  : "linear-gradient(135deg, #082010 0%, #041408 100%)",
              border:
                hoveredProject === i
                  ? "1px solid rgba(34, 197, 94, 0.6)"
                  : "1px solid rgba(255, 255, 255, 0.16)",
              borderRadius: "24px",
              padding: "44px",
              boxShadow:
                hoveredProject === i
                  ? "0 28px 64px -12px rgba(0, 0, 0, 0.7), 0 0 24px rgba(34, 197, 94, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.18)"
                  : "0 20px 50px -10px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
              transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: hoveredProject === i ? "translateY(-3px)" : "translateY(0)",
            }}
          >
            {/* ── CỘT TRÁI: GIỚI THIỆU DỰ ÁN ───────────────── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div>
                {/* Meta: Number & Year */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "14px",
                      color: "#22c55e",
                      letterSpacing: "0.15em",
                    }}
                  >
                    PROJECT {p.num}
                  </span>
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.4)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {p.year}
                  </span>
                </div>

                {/* Category */}
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  {p.category}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(30px, 3.8vw, 46px)",
                    textTransform: "uppercase",
                    margin: "0 0 20px 0",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.05,
                    color: "#ffffff",
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                  }}
                >
                  {p.title}
                </h3>

                {/* Description */}
                {p.desc && (
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.9)",
                      margin: "0 0 32px 0",
                    }}
                  >
                    {p.desc}
                  </p>
                )}

                {/* Tags */}
                {p.tags && p.tags.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginBottom: "36px",
                    }}
                  >
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "12px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#ffffff",
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.24)",
                          borderRadius: "100px",
                          padding: "6px 16px",
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div>
                <button
                  style={{
                    display: "inline-block",
                    background:
                      hoveredProject === i
                        ? "#22c55e"
                        : "rgba(34, 197, 94, 0.12)",
                    color: hoveredProject === i ? "#010d04" : "#22c55e",
                    border: "1px solid rgba(34, 197, 94, 0.4)",
                    borderRadius: "100px",
                    padding: "14px 32px",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  VIEW CASE STUDY
                </button>
              </div>
            </div>

            {/* ── CỘT PHẢI: BANNER DỰ ÁN ────────────────────── */}
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "16/9",
                boxShadow: "0 20px 45px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.15)",
                cursor: "pointer",
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hoveredProject === i ? "scale(1.02)" : "scale(1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    hoveredProject === i
                      ? "rgba(0,0,0,0.02)"
                      : "rgba(0,0,0,0.12)",
                  transition: "background 0.4s",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div style={{ textAlign: "center", marginTop: "72px" }}>
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
          VIEW ALL WORKS
        </button>
      </div>
    </section>
  );
};
