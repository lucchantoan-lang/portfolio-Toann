import { NavItem, ServiceItem, ProjectItem, TeamMember, StatItem } from "./types";
import hdbankImg from "../imports/hdbank-di-cmb.png";

export const NAV_ITEMS: NavItem[] = ["PROJECTS", "SERVICES", "TEAM", "ABOUT", "CONTACTS"];

export const SERVICES_BAR: string[] = [
  "BRANDING & DESIGN",
  "VIDEO PRODUCTION",
  "PHOTO & CGI",
  "DIGITAL PRODUCTION",
  "MARKETING",
  "MANAGEMENT",
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    num: "01",
    title: "BRANDING & DESIGN",
    desc: "We craft visual identities that communicate your brand's essence — from logo systems and typography to full brand guidelines that scale across every touchpoint.",
    tags: ["Identity", "Typography", "Guidelines", "Packaging"],
  },
  {
    num: "02",
    title: "VIDEO PRODUCTION",
    desc: "From concept to delivery, we produce cinematic-quality video content — commercials, brand films, social content, and event coverage that leaves an impression.",
    tags: ["Commercials", "Brand Films", "Social", "Events"],
  },
  {
    num: "03",
    title: "PHOTO & CGI",
    desc: "High-impact photography and CGI visualization for campaigns, lookbooks, product launches, and editorial projects that demand precision and craft.",
    tags: ["Campaign", "Product", "CGI", "Editorial"],
  },
  {
    num: "04",
    title: "DIGITAL PRODUCTION",
    desc: "We build digital experiences — websites, interactive campaigns, motion graphics, and content ecosystems that perform as beautifully as they look.",
    tags: ["Web", "Interactive", "Motion", "Content"],
  },
  {
    num: "05",
    title: "MARKETING",
    desc: "Strategy-first marketing that drives real results. We plan, execute, and optimize campaigns across paid, organic, and experiential channels.",
    tags: ["Strategy", "Paid Media", "Organic", "Experiential"],
  },
  {
    num: "06",
    title: "MANAGEMENT",
    desc: "End-to-end project management and creative direction, keeping complex multi-discipline productions on time, on brief, and on budget.",
    tags: ["Direction", "Production", "Coordination", "Delivery"],
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    num: "01",
    title: "HD BANK DI-CMD",
    category: "Digital Banking & Experience",
    year: "2025",
    img: hdbankImg,
    wide: true,
  },
  {
    num: "02",
    title: "ATELIER — VISUAL SYSTEM",
    category: "Photo & CGI",
    year: "2024",
    img: "https://images.unsplash.com/photo-1781615851923-2f1e05d7abfa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=600&q=80",
    wide: false,
  },
  {
    num: "03",
    title: "NOVA — FILM CAMPAIGN",
    category: "Video Production",
    year: "2025",
    img: "https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=600&q=80",
    wide: false,
  },
  {
    num: "04",
    title: "CREST — BEHIND THE LENS",
    category: "Digital Production",
    year: "2024",
    img: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=900&h=600&q=80",
    wide: true,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "MARCUS VEIL",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1602361602799-ebe8ce60ec2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&q=80",
  },
  {
    name: "ELENA SOREL",
    role: "Head of Production",
    img: "https://images.unsplash.com/photo-1565106514104-47b3e9280c3d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&q=80",
  },
  {
    name: "JAMES OKAFOR",
    role: "Lead Photographer",
    img: "https://images.unsplash.com/photo-1674507887562-ff0183e867ed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&q=80",
  },
  {
    name: "SARA HOLM",
    role: "Brand Strategist",
    img: "https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&q=80",
  },
];

export const STUDIO_STATS: StatItem[] = [
  { num: "120+", label: "Projects" },
  { num: "6", label: "Years" },
  { num: "40+", label: "Clients" },
];

export const SOCIAL_LINKS = ["Instagram", "Behance", "LinkedIn", "Vimeo"];
