import React from "react";
import avatarImg from "../../imports/avatar.png";

const uiSkills = [
  "UI Design",
  "Wireframing",
  "Prototyping",
  "Design System",
  "Visual Design",
];

const uxSkills = [
  "UX Research",
  "User Flow",
  "Usability Testing",
  "Information Architecture",
  "User Journey Mapping",
];

const tools = ["Figma", "FigJam", "Photoshop", "Framer", "Blender"];

const facts = [
  { num: "1+", label: "Year of experience" },
  { num: "4+", label: "Projects completed" },
  { num: "5+", label: "Happy clients" },
];

export const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-6xl mx-auto relative">
      
      {/* ── ROW 1: BIO (LEFT) + ẢNH (RIGHT) ────────────────────── */}
      <div className="flex flex-col-reverse md:flex-row gap-16 md:gap-24 items-stretch mb-24">
        
        {/* ── LEFT: TEXT & STATS (Notebook Paper) ───────────────────── */}
        <div className="flex-1 relative bg-[#fdfaf6] p-10 md:p-14 paper-shadow z-10 rotate-[-1deg]">
          
          {/* Lined paper pattern (simulated) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #a0c4d8 31px, #a0c4d8 32px)' }}></div>
          
          {/* Red margin line */}
          <div className="absolute top-0 bottom-0 left-12 w-[1.5px] bg-[#e08e8e] opacity-40 z-0"></div>
          
          <div className="relative z-10 pl-6">
            <span className="font-['Great_Vibes'] text-4xl md:text-5xl text-[#543f32] block mb-4 mt-[-10px]">
              About me
            </span>

            <h2 className="font-['Playfair_Display'] font-black text-4xl md:text-5xl uppercase text-[#3b2c21] leading-[1.1] mb-8">
              I DESIGN SIMPLE DIGITAL<br />
              EXPERIENCES, NOT JUST UI.
            </h2>

            <p className="font-serif text-base text-[#543f32]/90 leading-relaxed mb-6">
              Hi, I'm <strong className="font-bold text-[#3b2c21]">Toan</strong> — a UI/UX Designer with
              a background in Information Technology. I enjoy turning user needs and
              complex problems into simple, intuitive digital experiences.
            </p>

            <p className="font-serif text-base text-[#543f32]/90 leading-relaxed mb-12">
              My design process starts with understanding users, their needs, and their
              goals. I focus on creating clear interfaces, smooth user flows, and
              practical solutions that are easy to use.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-[#543f32]/10 border-dashed">
              {facts.map(({ num, label }) => (
                <div key={label}>
                  <div className="font-['Playfair_Display'] font-black text-4xl text-[#3b2c21] mb-2">
                    {num}
                  </div>
                  <div className="font-serif text-[10px] md:text-xs uppercase tracking-widest text-[#543f32]/70 font-bold leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tape holding it */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm border border-white/20 rotate-[-2deg] shadow-sm"></div>
        </div>

        {/* ── RIGHT: PORTRAIT PHOTO (Polaroid) ─── */}
        <div className="w-full md:w-[40%] flex justify-center items-center">
          <div className="relative bg-[#efe8de] p-4 pb-16 paper-shadow rotate-[3deg] transition-transform duration-500 hover:rotate-0 w-full max-w-[360px]">
            <img
              src={avatarImg}
              alt="Toan — UI/UX Designer"
              className="w-full h-auto aspect-[3/4] object-cover filter sepia-[0.2] contrast-[1.1] rounded-sm"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-['Great_Vibes'] text-3xl text-[#543f32]/80 whitespace-nowrap">
              Me in 2026
            </div>
            
            {/* Paper clip */}
            <div className="absolute -top-6 -right-2 w-4 h-16 border-[3px] border-[#b0b0b0] rounded-full z-10 rotate-12 shadow-sm"></div>
          </div>
        </div>
      </div>

      {/* ── ROW 2: SKILLS (Index Cards) ── */}
      <div id="skills" className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-12 relative z-20">
        
        {/* UI Skills */}
        <div className="bg-[#fdfbf6] p-8 paper-shadow rotate-[-2deg] relative">
           <div className="font-['Great_Vibes'] text-3xl text-[#543f32] mb-6 border-b border-[#543f32]/20 pb-2">UI Skills</div>
           <ul className="flex flex-col gap-4 font-serif text-[#3b2c21]">
             {uiSkills.map(s => (
               <li key={s} className="flex items-center gap-3">
                 <span className="text-[#a0c4d8]">✦</span> {s}
               </li>
             ))}
           </ul>
           {/* Push pin */}
           <div className="absolute -top-3 right-6 w-4 h-4 rounded-full bg-[#fdfdfd] shadow-sm border border-gray-200 flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-[#e0e0e0]"></div>
           </div>
        </div>

        {/* UX Skills */}
        <div className="bg-[#fdfbf6] p-8 paper-shadow rotate-[1deg] relative mt-4 md:mt-0">
           <div className="font-['Great_Vibes'] text-3xl text-[#543f32] mb-6 border-b border-[#543f32]/20 pb-2">UX Skills</div>
           <ul className="flex flex-col gap-4 font-serif text-[#3b2c21]">
             {uxSkills.map(s => (
               <li key={s} className="flex items-center gap-3">
                 <span className="text-[#a0c4d8]">✦</span> {s}
               </li>
             ))}
           </ul>
           {/* Push pin */}
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#fdfdfd] shadow-sm border border-gray-200 flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-[#e0e0e0]"></div>
           </div>
        </div>

        {/* Tools */}
        <div className="bg-[#fdfbf6] p-8 paper-shadow rotate-[-1deg] relative mt-8 md:mt-0">
           <div className="font-['Great_Vibes'] text-3xl text-[#543f32] mb-6 border-b border-[#543f32]/20 pb-2">Tools I Use</div>
           <ul className="flex flex-col gap-4 font-serif text-[#3b2c21]">
             {tools.map(s => (
               <li key={s} className="flex items-center gap-3">
                 <span className="text-[#a0c4d8]">✦</span> {s}
               </li>
             ))}
           </ul>
           {/* Push pin */}
           <div className="absolute -top-3 left-6 w-4 h-4 rounded-full bg-[#fdfdfd] shadow-sm border border-gray-200 flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-[#e0e0e0]"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

