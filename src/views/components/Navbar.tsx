import React, { useState } from "react";
import { NavItem } from "../../models/types";

interface NavbarProps {
  navItems: NavItem[];
  onNavigate: (id: string) => void;
  onLanguageChange?: (lang: "EN" | "VI") => void;
  language?: "EN" | "VI";
}

export const Navbar: React.FC<NavbarProps> = ({
  navItems,
  onNavigate,
  onLanguageChange,
  language = "EN",
}) => {
  const [lang, setLang] = useState<"EN" | "VI">(language);

  const toggleLang = () => {
    const next = lang === "EN" ? "VI" : "EN";
    setLang(next);
    onLanguageChange?.(next);
  };

  return (
    <nav
      style={{
        position: "relative",
        zIndex: 10,
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "28px 48px",
      }}
    >
      {/* ── LEFT: Logo ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "22px",
            height: "22px",
            background: "#22c55e",
            clipPath: "polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "22px",
            letterSpacing: "0.12em",
          }}
        >
          CRTOAN
        </span>
      </div>

      {/* ── CENTER: Nav items (truly centered via grid) ── */}
      <div style={{ display: "flex", gap: "44px", alignItems: "center" }}>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item.toLowerCase())}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.1em",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              opacity: 0.85,
              transition: "opacity 0.2s",
              padding: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
          >
            {item}
          </button>
        ))}
      </div>

      {/* ── RIGHT: Language toggle ── */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={toggleLang}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "100px",
            padding: "7px 4px 7px 14px",
            cursor: "pointer",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "rgba(34,197,94,0.5)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")
          }
        >
          {/* Inactive label */}
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {lang === "EN" ? "VI" : "EN"}
          </span>

          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: "rgba(255,255,255,0.3)",
              fontSize: "13px",
              margin: "0 4px",
            }}
          >
            /
          </span>

          {/* Active pill */}
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "12px",
              letterSpacing: "0.1em",
              color: "#010d04",
              background: "#22c55e",
              borderRadius: "100px",
              padding: "4px 12px",
            }}
          >
            {lang}
          </span>
        </button>
      </div>
    </nav>
  );
};
