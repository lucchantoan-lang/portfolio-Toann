import React from "react";
import { useNavigate } from "react-router-dom";
import { ProjectItem } from "../../models/types";

interface ProjectsSectionProps {
  projects: ProjectItem[];
  hoveredProject: number | null;
  onHoverProject: (index: number | null) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  hoveredProject,
  onHoverProject,
}) => {
  const navigate = useNavigate();

  return (
    <section id="works" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-24 relative">
        <h2 className="font-['Great_Vibes'] text-7xl md:text-[110px] text-[#efe8de] md:text-[#e3cdba] leading-[0.5] font-normal drop-shadow-md -rotate-3 z-10">
          Selected
        </h2>
        <h3 className="font-['Playfair_Display'] text-4xl md:text-[60px] text-[#efe8de] font-black uppercase tracking-[0.2em] mt-4 drop-shadow-lg z-0">
          Projects
        </h3>
        <p className="font-serif text-sm md:text-base text-[#efe8de]/80 max-w-md text-center mt-6 italic">
          A curated collection of UI/UX design, digital banking, design systems, and complex product experiences.
        </p>
        
        {/* Push pin decoration */}
        <div className="absolute top-0 right-1/4 w-4 h-4 rounded-full bg-[#fdfdfd] shadow-md border border-gray-200 flex items-center justify-center">
          <div className="w-1 h-1 bg-[#e0e0e0] rounded-full"></div>
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-32">
        {projects.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => onHoverProject(i)}
            onMouseLeave={() => onHoverProject(null)}
            className="relative w-full transition-transform duration-500 ease-out"
            style={{ transform: hoveredProject === i ? "translateY(-10px) rotate(1deg)" : "translateY(0) rotate(0deg)" }}
          >
            {/* Folder Tab */}
            <div className="absolute top-[-38px] left-4 md:left-12 w-40 md:w-48 h-10 bg-[#e3cdba] clip-folder-tab z-10 paper-shadow flex items-end px-6 pb-2 transition-colors duration-300">
              <span className="font-sans text-[11px] text-[#543f32] font-bold uppercase tracking-[0.15em] border-b border-[#543f32]/30">
                PROJECT {p.num}
              </span>
            </div>

            {/* Folder Body */}
            <div className="relative w-full bg-[#e3cdba] paper-shadow rounded-sm z-20 flex flex-col md:flex-row border-t border-l border-white/40">
              
              {/* Left Col: Info */}
              <div className="flex-1 p-8 md:p-10 lg:p-14 lg:pr-16 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-['Great_Vibes'] text-3xl md:text-4xl text-[#543f32]">
                      {p.category}
                    </div>
                    <div className="font-serif text-xs font-bold text-[#543f32]/60 uppercase tracking-widest border border-[#543f32]/20 rounded-full px-3 py-1">
                      {p.year}
                    </div>
                  </div>
                  
                  <h3 className="font-['Playfair_Display'] font-black text-3xl md:text-5xl text-[#3b2c21] uppercase tracking-wider mb-6 leading-tight mt-4">
                    {p.title}
                  </h3>
                  
                  {p.desc && (
                    <p className="font-serif text-base md:text-lg lg:text-xl text-[#543f32]/90 leading-relaxed mb-8">
                      {p.desc}
                    </p>
                  )}
                  
                  {/* Tags as paper strips */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {p.tags?.map((tag) => (
                      <span key={tag} className="font-serif text-[10px] md:text-xs uppercase tracking-widest text-[#543f32] bg-[#efe8de] px-4 py-2 paper-shadow border border-[#543f32]/10 rotate-[-1deg] transition-transform hover:rotate-[2deg]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button disguised as stamp/label */}
                <div>
                  <button
                    onClick={() => {
                      if (p.title === "INTERNHUB FPT") navigate("/case-study/internhub");
                      else if (p.title === "NẾP NHÀ") navigate("/case-study/nep-nha");
                      else if (p.title === "TIKTOK SHOP SUMMIT VIETNAM 2026") navigate("/case-study/tiktok-summit");
                      else if (p.title === "HDBANK Di-CMB") navigate("/case-study/hdbank");
                      else alert("Case study coming soon!");
                    }}
                    className="font-serif text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#efe8de] bg-[#3b2c21] px-8 py-4 paper-shadow transition-all hover:bg-[#543f32] border border-[#251b14]"
                  >
                    View Case Study
                  </button>
                </div>
              </div>

              {/* Right Col: Image (Polaroid style) */}
              <div className="flex-[1.2] lg:flex-[1.3] relative p-4 md:p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <div className="relative w-full aspect-[4/3] bg-[#efe8de] p-2 md:p-3 pb-8 md:pb-12 paper-shadow rotate-[3deg] transition-transform duration-500 group-hover:rotate-0">
                  {/* Paper clips (Moved inside polaroid to always align with top edge) */}
                  <div className="absolute -top-4 md:-top-5 left-[30%] w-3 md:w-4 h-10 md:h-12 border-2 border-[#b0b0b0] rounded-full z-30 rotate-[5deg] shadow-sm bg-white/20"></div>
                  <div className="absolute -top-2 md:-top-3 left-[33%] w-3 md:w-4 h-8 md:h-10 border-2 border-[#b0b0b0] rounded-full z-30 rotate-[2deg] shadow-sm bg-white/20"></div>

                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover filter contrast-[1.05] sepia-[0.1] rounded-sm"
                  />
                  <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 font-['Great_Vibes'] text-xl md:text-2xl text-[#543f32]/80 whitespace-nowrap">
                    {p.title.split(' ')[0]}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

