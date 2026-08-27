import { useState, useCallback } from "react";
import {
  NAV_ITEMS,
  SERVICES_BAR,
  SERVICES_LIST,
  PROJECTS_LIST,
  TEAM_MEMBERS,
  STUDIO_STATS,
  SOCIAL_LINKS,
} from "../models/portfolio.model";

export function usePortfolioController() {
  const [openService, setOpenService] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const toggleService = useCallback((index: number) => {
    setOpenService((prev) => (prev === index ? null : index));
  }, []);

  const scrollTo = useCallback((id: string) => {
    const target = id.toLowerCase();
    const element =
      document.getElementById(target) ||
      (target === "about" ? document.getElementById("about") : null) ||
      (target === "skills" ? document.getElementById("skills") : null) ||
      (target === "works" ? document.getElementById("works") : null) ||
      (target === "process" ? document.getElementById("process") : null) ||
      (target === "contact" ? document.getElementById("contacts") : null);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return {
    // Model Data
    navItems: NAV_ITEMS,
    servicesBar: SERVICES_BAR,
    servicesList: SERVICES_LIST,
    projectsList: PROJECTS_LIST,
    teamMembers: TEAM_MEMBERS,
    studioStats: STUDIO_STATS,
    socialLinks: SOCIAL_LINKS,

    // Controller State & Handlers
    openService,
    hoveredProject,
    toggleService,
    setHoveredProject,
    scrollTo,
  };
}

export type PortfolioController = ReturnType<typeof usePortfolioController>;
