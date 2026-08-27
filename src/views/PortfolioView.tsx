import React from "react";
import { usePortfolioController } from "../controllers/usePortfolioController";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ProcessSection } from "./components/ProcessSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { ContactSection } from "./components/ContactSection";

export const PortfolioView: React.FC = () => {
  const {
    navItems,
    servicesBar,
    servicesList,
    projectsList,
    teamMembers,
    studioStats,
    socialLinks,
    openService,
    hoveredProject,
    toggleService,
    setHoveredProject,
    scrollTo,
  } = usePortfolioController();

  return (
    <div
      className="overflow-x-hidden"
    >
      {/* ── HERO & BANNER ────────────────────────────── */}
      <HeroSection
        navItems={navItems}
        servicesBar={servicesBar}
        onNavigate={scrollTo}
      />

      {/* ── ABOUT ME ─────────────────────────────────── */}
      <AboutMeSection />

      {/* ── PROJECTS ─────────────────────────────────── */}
      <ProjectsSection
        projects={projectsList}
        hoveredProject={hoveredProject}
        onHoverProject={setHoveredProject}
      />

      {/* ── PROCESS ─────────────────────────────────── */}
      <ProcessSection />

      {/* ── CONTACT & FOOTER ─────────────────────────── */}
      <ContactSection />
    </div>
  );
};
