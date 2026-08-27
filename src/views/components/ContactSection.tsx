import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacts" className="py-32 px-6 flex flex-col items-center relative overflow-hidden">
      
      {/* Scattered Push Pins */}
      <div className="absolute top-20 left-1/4 w-4 h-4 rounded-full bg-[#fdfdfd] shadow-[0_2px_5px_rgba(0,0,0,0.5)] border border-gray-200 flex items-center justify-center z-10 rotate-12">
        <div className="w-1 h-1 bg-[#e0e0e0] rounded-full"></div>
        <div className="absolute top-2 left-2 w-12 h-[1px] bg-black/20 origin-left rotate-45 z-0"></div>
      </div>
      <div className="absolute bottom-40 right-1/4 w-4 h-4 rounded-full bg-[#fdfdfd] shadow-[0_2px_5px_rgba(0,0,0,0.5)] border border-gray-200 flex items-center justify-center z-10 -rotate-12">
        <div className="w-1 h-1 bg-[#e0e0e0] rounded-full"></div>
        <div className="absolute top-2 left-2 w-10 h-[1.5px] bg-black/20 origin-left -rotate-12 z-0"></div>
      </div>

      <div className="relative w-full max-w-xl mt-32 mb-16 flex justify-center">
        
        {/* Envelope Container */}
        <div className="relative w-full max-w-[500px] h-[300px]">
          
          {/* Back of Envelope */}
          <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-[#9bb0be] rounded-sm shadow-inner z-0"></div>
          
          {/* Torn Paper Note (Sticking out) */}
          <div className="absolute -top-16 left-6 right-6 h-[280px] bg-[#f7f3ec] z-10 flex flex-col pt-8 px-8 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:-translate-y-8" 
               style={{ 
                 /* Torn paper edge effect at the top */
                 clipPath: 'polygon(0 4%, 2% 0, 4% 3%, 6% 0, 8% 4%, 10% 0, 12% 3%, 14% 0, 16% 4%, 18% 0, 20% 3%, 22% 0, 24% 4%, 26% 0, 28% 3%, 30% 0, 32% 4%, 34% 0, 36% 3%, 38% 0, 40% 4%, 42% 0, 44% 3%, 46% 0, 48% 4%, 50% 0, 52% 3%, 54% 0, 56% 4%, 58% 0, 60% 3%, 62% 0, 64% 4%, 66% 0, 68% 3%, 70% 0, 72% 4%, 74% 0, 76% 3%, 78% 0, 80% 4%, 82% 0, 84% 3%, 86% 0, 88% 4%, 90% 0, 92% 3%, 94% 0, 96% 4%, 98% 0, 100% 3%, 100% 100%, 0 100%)' 
               }}>
            
            <div className="absolute top-4 right-6 font-['Great_Vibes'] text-4xl text-[#543f32] -rotate-3 opacity-90 z-20">
              Contact me
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {/* Lined paper lines */}
              <div className="relative border-b border-[#543f32]/20 pb-1 z-10">
                <span className="font-serif text-sm text-[#543f32]">E-mail: </span> 
                <a href="mailto:lucchantoan@gmail.com" className="font-serif text-sm text-[#543f32] italic hover:text-black">
                  lucchantoan@gmail.com
                </a>
              </div>
              
              <div className="relative border-b border-[#543f32]/20 pb-1 z-10">
                <span className="font-serif text-sm text-[#543f32]">Social Media: </span> 
                <a href="#" className="font-serif text-sm text-[#543f32] italic hover:text-black">
                  @crtoan.design
                </a>
              </div>
              
              <div className="relative border-b border-[#543f32]/20 pb-1 z-10">
                <span className="font-serif text-sm text-[#543f32]">Behance: </span> 
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="font-serif text-sm text-[#543f32] italic hover:text-black">
                  www.behance.net/crtoan
                </a>
              </div>
            </div>
            
            {/* Paper holes on the left side (like a binder paper) */}
            <div className="absolute left-3 top-12 w-3 h-3 rounded-full bg-[#9bb0be] shadow-inner"></div>
            <div className="absolute left-3 top-24 w-3 h-3 rounded-full bg-[#9bb0be] shadow-inner"></div>
            <div className="absolute left-3 top-36 w-3 h-3 rounded-full bg-[#9bb0be] shadow-inner"></div>
            <div className="absolute left-3 top-48 w-3 h-3 rounded-full bg-[#9bb0be] shadow-inner"></div>
          </div>
          
          {/* Front of Envelope (The pocket) */}
          <div className="absolute bottom-0 left-0 w-full h-[220px] bg-[#a8bcc8] z-20 rounded-sm paper-shadow"
               style={{ clipPath: 'polygon(0 0, 50% 35%, 100% 0, 100% 100%, 0 100%)' }}>
            
            {/* Inner shadow/crease lines */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), transparent, rgba(0,0,0,0.1))' }}></div>
            
            {/* Sticker Label */}
            <div className="absolute bottom-6 right-6 bg-[#f7f3ec] border border-[#543f32]/20 rounded-sm px-3 py-1.5 flex items-center gap-3 shadow-sm rotate-[1deg]">
              <span className="font-['Great_Vibes'] text-xl text-[#543f32] pr-2 border-r border-[#543f32]/30">Designer</span>
              <div className="flex flex-col">
                <span className="font-serif text-[9px] text-[#543f32] font-bold uppercase tracking-[0.2em] leading-tight">CR. Toàn</span>
                <span className="font-serif text-[8px] text-[#543f32] italic leading-tight">UI/UX</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="w-full max-w-4xl border-t border-[#3b2c21]/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 z-20">
        <p className="font-serif text-xs text-[#efe8de]/70 tracking-widest uppercase">
          © 2026 CRTOAN. All rights reserved.
        </p>
        <div className="flex gap-8">
          {['LinkedIn', 'Behance', 'Dribbble'].map((social) => (
            <a 
              key={social}
              href="#"
              className="font-serif text-xs text-[#efe8de]/80 hover:text-[#efe8de] tracking-widest uppercase transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
