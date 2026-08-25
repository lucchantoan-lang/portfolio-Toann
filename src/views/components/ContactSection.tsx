import React from "react";

interface ContactSectionProps {
  socialLinks: string[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ socialLinks }) => {
  return (
    <section
      id="contacts"
      style={{
        background: "#010d04",
        padding: "140px 48px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(180,0,0,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
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
          Get In Touch
        </span>
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(52px, 8vw, 120px)",
            lineHeight: 0.88,
            textTransform: "uppercase",
            margin: "16px 0 40px 0",
            letterSpacing: "-0.02em",
          }}
        >
          LET'S BUILD
          <br />
          SOMETHING
          <br />
          GREAT.
        </h2>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "15px",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8,
            maxWidth: "460px",
            margin: "0 auto 56px",
          }}
        >
          Have a project in mind? We'd love to hear about it. Reach out and let's talk about what we
          can create together.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            marginBottom: "80px",
          }}
        >
          <a
            href="mailto:hello@forma.studio"
            style={{
              background: "#22c55e",
              color: "#fff",
              borderRadius: "100px",
              padding: "18px 48px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#16a34a";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#22c55e";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            hello@forma.studio
          </a>
          <a
            href="tel:+1234567890"
            style={{
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "100px",
              padding: "18px 48px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fff";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            +1 (234) 567-890
          </a>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "18px",
                height: "18px",
                background: "#22c55e",
                clipPath: "polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "18px",
                letterSpacing: "0.12em",
              }}
            >
              FORMA
            </span>
          </div>
          <div style={{ display: "flex", gap: "32px" }}>
            {socialLinks.map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {s}
              </a>
            ))}
          </div>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.1em",
            }}
          >
            © 2025 FORMA STUDIO. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </section>
  );
};
