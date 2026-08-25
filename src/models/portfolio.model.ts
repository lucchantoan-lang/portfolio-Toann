import { NavItem, ServiceItem, ProjectItem, TeamMember, StatItem } from "./types";
import hdbankImg from "../imports/hdbank-di-cmb.png";
import tiktokImg from "../imports/tiktok-shop-summit.png";
import internhubImg from "../imports/internhub-fpt.png";

export const NAV_ITEMS: NavItem[] = ["WORKS", "ABOUT", "SKILLS", "RESUME", "CONTACT"];

export const SERVICES_BAR: string[] = [
  "USER RESEARCH",
  "USER FLOW",
  "WIREFRAME",
  "UI DESIGN",
  "PROTOTYPING",
  "DESIGN SYSTEM",
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
    title: "HDBANK Di-CMB",
    category: "Digital Banking & Experience",
    year: "2025",
    desc: "Ứng dụng cung cấp cho doanh nghiệp một trải nghiệm tối ưu trong việc quản lý tài chính và giao dịch ngân hàng một cách nhanh chóng, bảo mật và thông minh.",
    tags: ["UI/UX Design", "Design System", "Fintech", "Mobile & Web App"],
    img: hdbankImg,
    wide: true,
  },
  {
    num: "02",
    title: "TIKTOK SHOP SUMMIT VIETNAM 2026",
    category: "Event Visual & Digital Experience",
    year: "2026",
    desc: "Sự kiện thường niên quy tụ các đối tác chiến lược của TikTok Shop bao gồm nhà bán hàng, thương hiệu, nhà sáng tạo nội dung E-commerce và đối tác dịch vụ hàng đầu nhằm cập nhật tầm nhìn chiến lược, kết nối mở rộng hợp tác và phát triển giải pháp thương mại điện tử đột phá.",
    tags: ["Event Experience", "UI/UX Design", "E-Commerce", "Visual Identity"],
    img: tiktokImg,
    wide: true,
  },
  {
    num: "03",
    title: "INTERNHUB FPT",
    category: "Web & Mobile App · HR Tech",
    year: "2025",
    desc: "Nền tảng ứng dụng dành cho thực tập sinh FPT giúp tối ưu quy trình check-in/check-out hàng ngày, theo dõi lịch làm việc trực quan, quản lý thời gian hiệu quả và tạo các phiếu xin nghỉ phép, phiếu yêu cầu một cách nhanh chóng, tiện lợi.",
    tags: ["UI/UX Design", "Mobile App", "Design System", "HR Tech", "User Flow"],
    img: internhubImg,
    wide: true,
  },
  {
    num: "04",
    title: "CREST — ANALYTICS DASHBOARD",
    category: "SaaS & Dashboard Interface",
    year: "2024",
    desc: "Bảng điều khiển quản lý và trực quan hóa dữ liệu kinh doanh phức tạp thành các biểu đồ và thao tác đơn giản, dễ tiếp cận cho người dùng doanh nghiệp.",
    tags: ["Dashboard UI", "SaaS", "User Research", "Data Viz"],
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
