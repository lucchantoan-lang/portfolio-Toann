import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      tags: ['User Research', 'Competitive Analysis', 'Empathy Mapping'],
      rotation: 'rotate-[-3deg]'
    },
    {
      number: '02',
      title: 'DEFINE',
      tags: ['Information Architecture', 'User Flows', 'Wireframing'],
      rotation: 'rotate-[2deg]'
    },
    {
      number: '03',
      title: 'DESIGN',
      tags: ['UI Design', 'Design Systems', 'Interactive Prototyping'],
      rotation: 'rotate-[-1deg]'
    },
    {
      number: '04',
      title: 'TEST & LAUNCH',
      tags: ['Usability Testing', 'Feedback Iteration', 'Final Polish'],
      rotation: 'rotate-[4deg]'
    },
  ];

  return (
    <section id="process" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <div className="flex flex-col items-center mb-32 relative z-10">
        <h2 className="font-['Great_Vibes'] text-6xl md:text-[100px] text-[#543f32] leading-[0.5] font-normal drop-shadow-sm -rotate-2">
          Design
        </h2>
        <h3 className="font-['Playfair_Display'] text-4xl md:text-[60px] text-[#3b2c21] font-black uppercase tracking-[0.2em] mt-4 drop-shadow-sm">
          Process
        </h3>
        <p className="font-serif text-sm md:text-base text-[#543f32]/80 max-w-md text-center mt-6 italic">
          A structured approach to solving complex problems and delivering simple, intuitive digital experiences.
        </p>
      </div>

      <div className="relative">
        {/* String/Twine for hanging notes (Desktop) */}
        <div className="absolute top-[42px] left-0 w-full h-[3px] bg-[#d0c4b4] hidden lg:block shadow-sm">
          {/* Tape holding the string */}
          <div className="absolute -left-2 -top-2 w-8 h-4 bg-white/40 backdrop-blur-md rotate-45 border border-white/20 shadow-sm"></div>
          <div className="absolute -right-2 -top-2 w-8 h-4 bg-white/40 backdrop-blur-md -rotate-45 border border-white/20 shadow-sm"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-12 lg:pt-0 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className={`relative flex flex-col items-center ${step.rotation} transition-transform duration-300 hover:rotate-0 hover:-translate-y-2`}>
              
              {/* Binder Clip (Desktop) */}
              <div className="hidden lg:flex absolute -top-[18px] left-1/2 -translate-x-1/2 w-8 h-10 flex-col items-center z-30">
                {/* Clip wire */}
                <div className="w-5 h-8 border-[3px] border-[#8a8a8a] rounded-t-full border-b-0"></div>
                {/* Clip body */}
                <div className="w-10 h-5 bg-[#3a3a3a] rounded-sm shadow-md mt-[-4px]"></div>
              </div>

              {/* Tape (Mobile/Tablet) */}
              <div className="lg:hidden absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 backdrop-blur-sm border border-white/30 rotate-[-5deg] z-30 shadow-sm"></div>

              {/* Note Card */}
              <div className="w-full bg-[#fdfbf6] p-8 paper-shadow border border-[#543f32]/10 mt-6 h-full flex flex-col">
                <div className="font-['Great_Vibes'] text-5xl text-[#a0c4d8] mb-4 text-center">
                  {step.number}
                </div>
                
                <h3 className="font-['Playfair_Display'] font-black text-2xl text-[#3b2c21] uppercase tracking-wider mb-6 text-center border-b border-[#543f32]/20 pb-4">
                  {step.title}
                </h3>

                <ul className="flex flex-col gap-4 font-serif text-[#543f32] mt-auto">
                  {step.tags.map((tag, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-[#a0c4d8] mt-[1px]">✦</span> 
                      <span className="leading-tight">{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

