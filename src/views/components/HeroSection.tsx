import React, { useState, useEffect } from "react";
import { NavItem } from "../../models/types";
import { Navbar } from "./Navbar";
import heroAvatarImg from "../../imports/hero-avatar.png";

interface HeroSectionProps {
  navItems: NavItem[];
  servicesBar: string[];
  onNavigate: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  navItems,
  servicesBar,
  onNavigate,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden"
    >
      <Navbar navItems={navItems} onNavigate={onNavigate} />

      <div
        className={`relative w-full max-w-5xl px-6 flex justify-center items-center flex-1 transition-all duration-[1000ms] ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {/* ── THE MANILA FOLDER ────────────────────────────── */}
        <div className="relative w-full max-w-[900px] aspect-[4/3] md:aspect-[16/10] mt-12 z-10">
          
          {/* Photograph protruding from inside */}
          <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-32 w-40 h-56 md:w-56 md:h-[300px] bg-[#efe8de] p-2 md:p-3 paper-shadow z-0 rotate-[6deg] transition-transform hover:rotate-[2deg] hover:-translate-y-4">
            <img 
              src={heroAvatarImg} 
              alt="CRTOAN" 
              className="w-full h-full object-cover filter grayscale sepia-[0.2] contrast-[1.1] rounded-sm" 
            />
            {/* Paperclip Simulation */}
            <div className="absolute top-[-20px] left-10 md:left-16 w-3 h-10 md:w-4 md:h-14 border-2 border-[#b0b0b0] rounded-full z-10 shadow-sm" style={{ borderRightWidth: '1px' }}></div>
            <div className="absolute top-[-5px] left-11 md:left-[68px] w-3 h-8 md:w-4 md:h-10 border-2 border-[#b0b0b0] rounded-full z-10 shadow-sm" style={{ borderLeftWidth: '1px' }}></div>
          </div>

          {/* Folder Tab */}
          <div className="absolute top-0 left-8 md:left-24 w-40 md:w-56 h-12 bg-[#b0b9bd] clip-folder-tab z-10 paper-shadow flex items-end px-4 pb-2">
            <span className="text-[10px] md:text-xs font-serif text-[#543f32] uppercase tracking-[0.3em] border-b border-[#543f32]/40 pb-0.5">
              UI/UX DESIGN
            </span>
          </div>

          {/* Folder Body */}
          <div className="absolute top-[38px] left-0 w-full h-[calc(100%-40px)] bg-[#b0b9bd] paper-shadow rounded-sm rounded-tr-xl z-20 flex flex-col justify-center items-center">
            
            {/* Main Typography */}
            <div className="text-center mt-[-40px] md:mt-[-20px] z-30 pointer-events-none select-none relative">
              <h1 className="font-['Great_Vibes'] text-[90px] md:text-[160px] text-[#543f32] leading-[0.5] font-normal drop-shadow-md -rotate-3 ml-[-20px]">
                Creative
              </h1>
              <h2 className="font-['Playfair_Display'] text-[45px] md:text-[80px] text-[#543f32] font-black uppercase tracking-[0.1em] mt-2 drop-shadow-sm">
                Portfolio
              </h2>
            </div>

            {/* Details Label */}
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 bg-[#efe8de] border border-[#543f32]/20 rounded-sm px-4 md:px-6 py-2 md:py-3 flex items-center gap-4 paper-shadow">
              <span className="font-['Great_Vibes'] text-2xl md:text-4xl text-[#543f32] pr-4 border-r border-[#543f32]/30 pt-1">
                Designer
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-[10px] md:text-xs text-[#543f32] font-bold uppercase tracking-widest leading-tight">
                  CR. Toàn
                </span>
                <span className="font-serif text-[10px] md:text-xs text-[#543f32] italic leading-tight">
                  Based in VN
                </span>
              </div>
            </div>

            {/* Call to Action Button */}
            <button
              onClick={() => onNavigate("works")}
              className="absolute bottom-6 md:bottom-10 right-6 md:right-10 font-serif text-[10px] md:text-sm uppercase tracking-[0.2em] text-[#efe8de] bg-[#543f32] px-6 py-3 md:px-8 md:py-4 rounded-sm paper-shadow transition-transform hover:-translate-y-1 hover:shadow-lg border border-[#3b2c21]"
            >
              Explore Works
            </button>
          </div>
          
          {/* Push Pins Decoration */}
          <div className="absolute top-16 left-[-15px] z-30">
            {/* Pin Head */}
            <div className="w-5 h-5 rounded-full bg-[#fdfdfd] shadow-[0_2px_5px_rgba(0,0,0,0.5)] border border-gray-200 flex items-center justify-center relative z-10">
              <div className="w-1.5 h-1.5 bg-[#e0e0e0] rounded-full inset-shadow-sm"></div>
            </div>
            {/* Pin Needle/Shadow */}
            <div className="absolute top-2.5 left-2.5 w-16 h-[2px] bg-black/30 origin-left rotate-45 z-0 blur-[1px]"></div>
          </div>
          
          <div className="absolute bottom-32 left-[-20px] z-30">
            <div className="w-4 h-4 rounded-full bg-[#fdfdfd] shadow-[0_2px_5px_rgba(0,0,0,0.5)] border border-gray-200 flex items-center justify-center relative z-10">
              <div className="w-1 h-1 bg-[#e0e0e0] rounded-full"></div>
            </div>
            <div className="absolute top-2 left-2 w-10 h-[1.5px] bg-black/30 origin-left -rotate-[20deg] z-0 blur-[1px]"></div>
          </div>
        </div>
      </div>
      
      {/* ── VINTAGE MARQUEE FOOTER ────────────────────────────── */}
      <div className="w-full bg-[#3b2c21] border-y-4 border-[#251b14] overflow-hidden py-3 md:py-4 relative z-30 shadow-[0_-5px_25px_rgba(0,0,0,0.4)]">
         <div className="animate-marquee flex w-max">
            <div className="flex shrink-0 items-center">
               {[...servicesBar, ...servicesBar].map((s, i) => (
                  <span key={i} className="font-serif text-xs md:text-sm text-[#efe8de] tracking-[0.3em] uppercase px-8 md:px-12 flex items-center gap-8 md:gap-12">
                    {s} 
                    <span className="font-serif text-[#b0b9bd] text-[8px] md:text-[10px]">✦</span>
                  </span>
               ))}
            </div>
            <div className="flex shrink-0 items-center">
               {[...servicesBar, ...servicesBar].map((s, i) => (
                  <span key={i} className="font-serif text-xs md:text-sm text-[#efe8de] tracking-[0.3em] uppercase px-8 md:px-12 flex items-center gap-8 md:gap-12">
                    {s} 
                    <span className="font-serif text-[#b0b9bd] text-[8px] md:text-[10px]">✦</span>
                  </span>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

