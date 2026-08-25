import { useState } from "react";

const NAV_ITEMS = ["PROJECTS", "SERVICES", "TEAM", "ABOUT", "CONTACTS"];

const SERVICES_LIST = [
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

const PROJECTS = [
  {
    num: "01",
    title: "DELTA — BRAND IDENTITY",
    category: "Branding & Design",
    year: "2025",
    img: "https://images.unsplash.com/photo-1786472971590-d20a64535f58?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=900&h=600&q=80",
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

const TEAM = [
  { name: "MARCUS VEIL", role: "Creative Director", img: "https://images.unsplash.com/photo-1602361602799-ebe8ce60ec2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&q=80" },
  { name: "ELENA SOREL", role: "Head of Production", img: "https://images.unsplash.com/photo-1565106514104-47b3e9280c3d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&q=80" },
  { name: "JAMES OKAFOR", role: "Lead Photographer", img: "https://images.unsplash.com/photo-1674507887562-ff0183e867ed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&q=80" },
  { name: "SARA HOLM", role: "Brand Strategist", img: "https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&q=80" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const services_bar = ["BRANDING & DESIGN", "VIDEO PRODUCTION", "PHOTO & CGI", "DIGITAL PRODUCTION", "MARKETING", "MANAGEMENT"];
  const [openService, setOpenService] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: "#010d04", color: "#fff", overflowX: "hidden" }}>

      {/* ── HERO ─────────────────────────────────────── */}
      <div id="home" style={{ position: "relative", width: "100%", minHeight: "100vh", background: "radial-gradient(ellipse 70% 80% at 50% 40%, #166534 0%, #14532d 40%, #052e16 70%, #010d04 100%)", display: "flex", flexDirection: "column" }}>

        {/* Nav */}
        <nav style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "22px", height: "22px", background: "#22c55e", clipPath: "polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "22px", letterSpacing: "0.12em" }}>FORMA</span>
          </div>
          <div style={{ display: "flex", gap: "44px" }}>
            {NAV_ITEMS.map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())}
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", color: "#fff", background: "none", border: "none", cursor: "pointer", opacity: 0.85, transition: "opacity 0.2s", padding: 0 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
              >{item}</button>
            ))}
          </div>
        </nav>

        {/* Hero Content */}
        <div style={{ position: "relative", flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", padding: "0 48px", paddingBottom: "60px" }}>
          <div style={{ zIndex: 2 }}>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(60px, 8vw, 110px)", lineHeight: 0.92, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", margin: "0 0 28px 0" }}>
              BEYOND<br />IDEAS.<br />INTO<br />IMPACT.
            </h1>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 400, fontSize: "12px", letterSpacing: "0.06em", lineHeight: 1.6, color: "rgba(255,255,255,0.75)", textTransform: "uppercase", maxWidth: "200px" }}>
              CREATIVE PRODUCTION<br />FOR BRANDS THAT<br />REFUSE TO BLEND IN.
            </p>
          </div>

          <div style={{ position: "relative", display: "flex", justifyContent: "center", zIndex: 1 }}>
            <img src="https://images.unsplash.com/photo-1674507887562-ff0183e867ed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=700&q=80"
              alt="Dramatic portrait"
              style={{ width: "100%", maxWidth: "480px", height: "560px", objectFit: "cover", objectPosition: "center top", display: "block", maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", maskComposite: "intersect", WebkitMaskComposite: "source-in" }}
            />
          </div>

          <div style={{ zIndex: 2, paddingLeft: "24px" }}>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(16px, 2vw, 22px)", lineHeight: 1.3, letterSpacing: "0.04em", textTransform: "uppercase", color: "#fff", marginBottom: "36px", maxWidth: "280px" }}>
              WE DESIGN, BUILD, AND LAUNCH EXPERIENCES THAT CAPTURE ATTENTION AND DRIVE RESULTS.
            </p>
            <button
              onClick={() => scrollTo("projects")}
              style={{ background: "#fff", color: "#010d04", border: "none", borderRadius: "100px", padding: "16px 36px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "background 0.2s, transform 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f0f0f0"; e.currentTarget.style.transform = "scale(1.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "scale(1)"; }}
            >START YOUR PROJECT</button>
          </div>
        </div>
      </div>

      {/* FORMA Banner */}
      <div style={{ background: "transparent", padding: "0", overflow: "hidden", marginTop: "-260px", position: "relative", zIndex: 2 }}>
        <div style={{ lineHeight: 0.85, overflow: "hidden", paddingTop: "16px" }}>
          <span style={{ display: "block", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(120px, 22vw, 340px)", letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", whiteSpace: "nowrap", textAlign: "center", userSelect: "none" }}>
            FORMA
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 48px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {services_bar.map((s) => (
            <span key={s} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase" }}>{s}</span>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section id="projects" style={{ background: "#020e05", padding: "120px 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px" }}>
          <div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#22c55e", textTransform: "uppercase", fontWeight: 600 }}>Selected Work</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 0.9, textTransform: "uppercase", margin: "12px 0 0 0" }}>
              OUR<br />PROJECTS
            </h2>
          </div>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", maxWidth: "280px", lineHeight: 1.7, textAlign: "right" }}>
            A selection of our most impactful work across branding, video, digital, and experiential production.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {PROJECTS.map((p, i) => (
            <div key={i}
              style={{ gridColumn: p.wide ? "1 / -1" : "auto", position: "relative", overflow: "hidden", cursor: "pointer", aspectRatio: p.wide ? "16/7" : "4/3" }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img src={p.img} alt={p.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease", transform: hoveredProject === i ? "scale(1.04)" : "scale(1)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: hoveredProject === i ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.55)", transition: "background 0.4s" }} />
              <div style={{ position: "absolute", inset: 0, padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "13px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>{p.num}</span>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{p.year}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", color: "#22c55e", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>{p.category}</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(22px, 3vw, 38px)", textTransform: "uppercase", margin: 0, letterSpacing: "-0.01em", lineHeight: 1 }}>{p.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <button style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "100px", padding: "16px 48px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", transition: "border-color 0.2s, background 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.background = "transparent"; }}
          >VIEW ALL PROJECTS</button>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section id="services" style={{ background: "#010a03", padding: "120px 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px" }}>
          <div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#22c55e", textTransform: "uppercase", fontWeight: 600 }}>What We Do</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 0.9, textTransform: "uppercase", margin: "12px 0 0 0" }}>
              OUR<br />SERVICES
            </h2>
          </div>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", maxWidth: "280px", lineHeight: 1.7, textAlign: "right" }}>
            Six disciplines, one studio. We work across the full creative spectrum to deliver unified, powerful brand experiences.
          </p>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {SERVICES_LIST.map((s, i) => (
            <div key={i}
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}
              onClick={() => setOpenService(openService === i ? null : i)}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 0", transition: "padding 0.3s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", color: "#22c55e", fontWeight: 700, letterSpacing: "0.08em", minWidth: "32px" }}>{s.num}</span>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 40px)", textTransform: "uppercase", margin: 0, letterSpacing: "-0.01em", transition: "color 0.2s", color: openService === i ? "#fff" : "rgba(255,255,255,0.85)" }}>{s.title}</h3>
                </div>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", fontWeight: 300, color: "rgba(255,255,255,0.4)", transition: "transform 0.3s", transform: openService === i ? "rotate(45deg)" : "rotate(0deg)", display: "block" }}>+</span>
              </div>
              {openService === i && (
                <div style={{ paddingBottom: "36px", paddingLeft: "64px", display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "start" }}>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, margin: 0, maxWidth: "560px" }}>{s.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-end" }}>
                    {s.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "100px", padding: "5px 14px" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section id="about" style={{ background: "#020e05", padding: "120px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#22c55e", textTransform: "uppercase", fontWeight: 600 }}>Our Story</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(48px, 5vw, 80px)", lineHeight: 0.9, textTransform: "uppercase", margin: "12px 0 40px 0" }}>
              WE BUILD<br />THINGS THAT<br />MATTER.
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: "24px" }}>
              Founded in 2018, FORMA is an independent creative production studio working with bold brands and ambitious founders. We believe that extraordinary ideas deserve extraordinary execution — and we refuse to settle for anything less.
            </p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: "48px" }}>
              From our studio we run integrated productions across branding, film, photography, and digital — always with the same obsessive attention to craft that defines everything we make.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
              {[["120+", "Projects"], ["6", "Years"], ["40+", "Clients"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "48px", lineHeight: 1, color: "#fff", letterSpacing: "-0.02em" }}>{num}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginTop: "6px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=900&q=80"
              alt="Creative studio at work"
              style={{ width: "100%", height: "600px", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", bottom: "-24px", left: "-24px", background: "#22c55e", padding: "24px 32px" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "36px", lineHeight: 1, color: "#fff" }}>EST.</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "36px", lineHeight: 1, color: "#fff" }}>2018</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────── */}
      <section id="team" style={{ background: "#010a03", padding: "120px 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px" }}>
          <div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#22c55e", textTransform: "uppercase", fontWeight: 600 }}>The People</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 0.9, textTransform: "uppercase", margin: "12px 0 0 0" }}>
              MEET<br />THE TEAM
            </h2>
          </div>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", maxWidth: "280px", lineHeight: 1.7, textAlign: "right" }}>
            A tight-knit crew of directors, designers, photographers, and strategists who care deeply about the work.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}>
          {TEAM.map((member, i) => (
            <div key={i} style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
              onMouseEnter={(e) => { (e.currentTarget.querySelector(".overlay") as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget.querySelector(".overlay") as HTMLElement).style.opacity = "0"; }}
            >
              <img src={member.img} alt={member.name} style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }} />
              <div className="overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)", opacity: 0, transition: "opacity 0.3s" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#fff" }}>{member.name}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", color: "#22c55e", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px", fontWeight: 600 }}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section id="contacts" style={{ background: "#010d04", padding: "140px 48px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(180,0,0,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#22c55e", textTransform: "uppercase", fontWeight: 600 }}>Get In Touch</span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(52px, 8vw, 120px)", lineHeight: 0.88, textTransform: "uppercase", margin: "16px 0 40px 0", letterSpacing: "-0.02em" }}>
            LET'S BUILD<br />SOMETHING<br />GREAT.
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: "460px", margin: "0 auto 56px" }}>
            Have a project in mind? We'd love to hear about it. Reach out and let's talk about what we can create together.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "80px" }}>
            <a href="mailto:hello@forma.studio"
              style={{ background: "#22c55e", color: "#fff", borderRadius: "100px", padding: "18px 48px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.2s, transform 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "scale(1.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#22c55e"; e.currentTarget.style.transform = "scale(1)"; }}
            >hello@forma.studio</a>
            <a href="tel:+1234567890"
              style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "100px", padding: "18px 48px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.background = "transparent"; }}
            >+1 (234) 567-890</a>
          </div>

          {/* Footer */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "18px", height: "18px", background: "#22c55e", clipPath: "polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "18px", letterSpacing: "0.12em" }}>FORMA</span>
            </div>
            <div style={{ display: "flex", gap: "32px" }}>
              {["Instagram", "Behance", "LinkedIn", "Vimeo"].map((s) => (
                <a key={s} href="#" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >{s}</a>
              ))}
            </div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>© 2025 FORMA STUDIO. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
