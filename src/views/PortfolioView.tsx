import React from "react";
import { usePortfolioController } from "../controllers/usePortfolioController";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { TeamSection } from "./components/TeamSection";
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
      style={{
        fontFamily: "'Barlow', sans-serif",
        background: "#010d04",
        color: "#fff",
        overflowX: "hidden",
      }}
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

      {/* ── SERVICES ─────────────────────────────────── */}
      <ServicesSection
        services={servicesList}
        openService={openService}
        onToggleService={toggleService}
      />

      {/* ── TEAM ─────────────────────────────────────── */}
      <TeamSection team={teamMembers} />

      {/* ── CONTACT & FOOTER ─────────────────────────── */}
      <ContactSection socialLinks={socialLinks} />
    </div>
  );
};
