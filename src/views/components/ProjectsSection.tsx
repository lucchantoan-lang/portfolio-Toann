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
    <section id="works" style={{ background: "#020e05", padding: "120px 48px" }}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
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
              background: "rgba(255,255,255,0.015)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              padding: "40px",
              transition: "border-color 0.3s, background 0.3s, transform 0.3s",
              borderColor: hoveredProject === i ? "rgba(34, 197, 94, 0.3)" : "rgba(255,255,255,0.06)",
              backgroundColor:
                hoveredProject === i ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)",
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
                      background: "rgba(255,255,255,0.3)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.45)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.year}
                  </span>
                </div>

                {/* Category */}
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  {p.category}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    textTransform: "uppercase",
                    margin: "0 0 20px 0",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.05,
                    color: "#fff",
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
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.7)",
                      margin: "0 0 28px 0",
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
                      gap: "8px",
                      marginBottom: "32px",
                    }}
                  >
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "11px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.75)",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: "100px",
                          padding: "5px 14px",
                          fontWeight: 500,
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
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "transparent",
                    color: hoveredProject === i ? "#22c55e" : "#fff",
                    border: "none",
                    padding: "0",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "color 0.2s, transform 0.2s",
                  }}
                >
                  <span>VIEW CASE STUDY</span>
                  <span
                    style={{
                      fontSize: "16px",
                      transition: "transform 0.2s",
                      transform: hoveredProject === i ? "translateX(6px)" : "translateX(0)",
                    }}
                  >
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* ── CỘT PHẢI: BANNER DỰ ÁN ────────────────────── */}
            <div
              style={{
                position: "relative",
                borderRadius: "14px",
                overflow: "hidden",
                aspectRatio: "16/10",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
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
                  display: "block",
                  transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: hoveredProject === i ? "scale(1.04)" : "scale(1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    hoveredProject === i
                      ? "rgba(0,0,0,0.05)"
                      : "rgba(0,0,0,0.2)",
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
