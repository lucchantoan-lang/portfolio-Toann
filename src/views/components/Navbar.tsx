import React from "react";
import { NavItem } from "../../models/types";

interface NavbarProps {
  navItems: NavItem[];
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ navItems, onNavigate }) => {
  return (
    <nav
      style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "28px 48px",
      }}
    >
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
          FORMA
        </span>
      </div>
      <div style={{ display: "flex", gap: "44px" }}>
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
    </nav>
  );
};
