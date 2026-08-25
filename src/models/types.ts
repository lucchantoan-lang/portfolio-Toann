export type NavItem = "PROJECTS" | "SERVICES" | "TEAM" | "ABOUT" | "CONTACTS" | string;

export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface ProjectItem {
  num: string;
  title: string;
  category: string;
  year: string;
  img: string;
  wide: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
}

export interface StatItem {
  num: string;
  label: string;
}
