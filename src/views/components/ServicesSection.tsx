import React from "react";
import { ServiceItem } from "../../models/types";

interface ServicesSectionProps {
  services: ServiceItem[];
  openService: number | null;
  onToggleService: (index: number) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  openService,
  onToggleService,
}) => {
  return (
    <section id="services" style={{ background: "#010a03", padding: "120px 48px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "80px",
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
            What We Do
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
            SERVICES
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
          Six disciplines, one studio. We work across the full creative spectrum to deliver unified,
          powerful brand experiences.
        </p>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        {services.map((s, i) => (
          <div
            key={i}
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}
            onClick={() => onToggleService(i)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "28px 0",
                transition: "padding 0.3s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "13px",
                    color: "#22c55e",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    minWidth: "32px",
                  }}
                >
                  {s.num}
                </span>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(22px, 3vw, 40px)",
                    textTransform: "uppercase",
                    margin: 0,
                    letterSpacing: "-0.01em",
                    transition: "color 0.2s",
                    color: openService === i ? "#fff" : "rgba(255,255,255,0.85)",
                  }}
                >
                  {s.title}
                </h3>
              </div>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.4)",
                  transition: "transform 0.3s",
                  transform: openService === i ? "rotate(45deg)" : "rotate(0deg)",
                  display: "block",
                }}
              >
                +
              </span>
            </div>
            {openService === i && (
              <div
                style={{
                  paddingBottom: "36px",
                  paddingLeft: "64px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "48px",
                  alignItems: "start",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.8,
                    margin: 0,
                    maxWidth: "560px",
                  }}
                >
                  {s.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    justifyContent: "flex-end",
                  }}
                >
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "100px",
                        padding: "5px 14px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
