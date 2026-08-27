import React, { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const next = lang === "EN" ? "VI" : "EN";
    setLang(next);
    onLanguageChange?.(next);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] grid grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-[#efe8de] paper-shadow border-b border-[#543f32]/20" 
          : "py-6 bg-transparent"
      }`}
    >
      {/* ── LEFT: Logo ── */}
      <div
        onClick={() => onNavigate("home")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <span className="font-['Great_Vibes'] text-3xl md:text-4xl text-[#efe8de] md:text-[#543f32] leading-none pr-3 border-r border-[#efe8de]/30 md:border-[#543f32]/30" style={{ color: scrolled ? "#543f32" : "" }}>
          CR
        </span>
        <span className="font-['Playfair_Display'] font-black text-lg md:text-xl tracking-[0.2em] text-[#efe8de] md:text-[#543f32] uppercase" style={{ color: scrolled ? "#543f32" : "" }}>
          Toàn
        </span>
      </div>

      {/* ── CENTER: Nav items ── */}
      <div className="hidden md:flex gap-10 items-center">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item.toLowerCase())}
            className="font-serif text-xs font-bold uppercase tracking-widest bg-transparent border-none cursor-pointer transition-transform hover:-translate-y-0.5 relative group"
            style={{ color: scrolled ? "#543f32" : "#efe8de" }}
          >
            {item}
            <span 
              className="absolute -bottom-1.5 left-1/2 w-0 h-[1.5px] transition-all group-hover:w-full group-hover:left-0"
              style={{ backgroundColor: scrolled ? "#543f32" : "#efe8de" }}
            ></span>
          </button>
        ))}
      </div>

      {/* ── RIGHT: Language toggle ── */}
      <div className="flex justify-end">
        <button
          onClick={toggleLang}
          className="flex items-center border rounded-sm px-1 py-1 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          style={{ 
            backgroundColor: scrolled ? "#efe8de" : "transparent",
            borderColor: scrolled ? "rgba(84, 63, 50, 0.3)" : "rgba(239, 232, 222, 0.3)"
          }}
          title="Toggle Language"
        >
          <span 
            className="font-serif text-[10px] md:text-xs font-bold px-2 py-0.5"
            style={{
              color: lang === "EN" ? (scrolled ? "#efe8de" : "#5d4a3e") : (scrolled ? "#543f32" : "#efe8de"),
              backgroundColor: lang === "EN" ? (scrolled ? "#543f32" : "#efe8de") : "transparent",
              borderRadius: "2px"
            }}
          >
            EN
          </span>
          <span 
            className="font-serif text-[10px] md:text-xs font-bold px-2 py-0.5"
            style={{
              color: lang === "VI" ? (scrolled ? "#efe8de" : "#5d4a3e") : (scrolled ? "#543f32" : "#efe8de"),
              backgroundColor: lang === "VI" ? (scrolled ? "#543f32" : "#efe8de") : "transparent",
              borderRadius: "2px"
            }}
          >
            VI
          </span>
        </button>
      </div>
    </nav>
  );
};

