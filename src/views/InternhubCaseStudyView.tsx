import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import images
import imgDesktopDashboard from "../imports/internhub/1_desktop_dashboard.png";
import imgMobileDashboard from "../imports/internhub/2_mobile_dashboard.png";
import imgDesktopCourses from "../imports/internhub/3_desktop_courses.png";
import imgDesktopSubmission from "../imports/internhub/4_desktop_submission.png";
import imgMobileLogin from "../imports/internhub/5_mobile_login.png";
import imgDesktopProfile from "../imports/internhub/6_desktop_profile.png";
import imgMobileRequest from "../imports/internhub/7_mobile_request.png";
import imgDesktopWizard from "../imports/internhub/8_desktop_wizard.png";
import imgDesktopRequest from "../imports/internhub/9_desktop_request.png";
import imgDesktopModal from "../imports/internhub/10_desktop_modal.png";
import imgMobileSuccess from "../imports/internhub/11_mobile_success.png";
import imgMobileHistory from "../imports/internhub/12_mobile_history.png";
import imgMobileDetails from "../imports/internhub/13_mobile_details.png";
import imgDesktopLogin from "../imports/internhub/14_desktop_login.png";
import imgDesignSystemBanner from "../imports/internhub/15_design_system_banner.jpg";

export const InternhubCaseStudyView: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f0ea] text-[#3b2c21] font-serif overflow-x-hidden relative">
      
      {/* Background Noise & Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>

      {/* ── NAVIGATION (Paper Tag) ────────────────────────────── */}
      <nav className="fixed top-8 left-8 z-50">
        <button
          onClick={() => navigate("/")}
          className="relative bg-[#efe8de] px-6 py-3 paper-shadow group transition-transform hover:-translate-y-1 hover:rotate-2 border border-[#543f32]/10"
        >
          {/* Hole punch */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#f4f0ea] shadow-inner border border-[#543f32]/20"></div>
          
          <div className="font-['Playfair_Display'] font-black tracking-widest text-xs uppercase flex items-center gap-3">
            <span className="text-lg leading-none">←</span>
            Back to Portfolio
          </div>
        </button>
      </nav>

      <main className="pb-32 pt-32 relative z-10 max-w-6xl mx-auto px-6">
        
        {/* ── SECTION 1: HERO OVERVIEW (Scrapbook Page) ────────────────────────────── */}
        <section className="relative flex flex-col items-center mb-32">
          
          {/* Tags as Tape Strips */}
          <div className="flex gap-4 mb-8 relative z-20">
            {["INTERNAL PORTAL", "HR MANAGEMENT", "2025-2026"].map((tag, idx) => (
              <span key={tag} className={`px-4 py-1.5 bg-[#fdfaf6] border border-[#543f32]/10 shadow-sm text-[#543f32] text-[10px] font-bold tracking-[0.2em] uppercase font-sans ${idx % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[3deg]'}`}>
                <div className="absolute inset-0 bg-black/5 opacity-0 mix-blend-overlay"></div>
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <div className="text-center relative z-20 mb-12">
            <h2 className="font-['Great_Vibes'] text-5xl md:text-7xl text-[#22c55e]/60 mb-[-20px] -rotate-2">
              Case Study
            </h2>
            <h1 className="font-['Playfair_Display'] text-6xl md:text-[100px] font-black uppercase leading-[0.9] text-[#3b2c21] tracking-tighter">
              INTERNHUB
              <br />
              <span className="text-4xl md:text-6xl tracking-widest font-serif font-light text-[#543f32]">FPT IS</span>
            </h1>
          </div>

          {/* Description on a ripped note */}
          <div className="relative bg-[#fdfbf6] p-8 md:p-10 max-w-2xl text-center paper-shadow rotate-[-1deg] mb-16 z-20">
            {/* Push pin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#fdfdfd] shadow-sm border border-gray-200 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#e0e0e0]"></div>
            </div>
            <p className="font-serif text-base md:text-lg text-[#543f32] leading-relaxed italic">
              "A comprehensive internal management platform for FPT IS, designed to optimize the experience of onboarding, training, and managing interns through a unified digital ecosystem."
            </p>
          </div>

          {/* Main Image (Printed Photo Style) */}
          <div className="relative w-full max-w-4xl mx-auto z-10 rotate-[1deg] transition-transform duration-700 hover:rotate-0">
             <div className="bg-white p-4 md:p-6 pb-16 md:pb-20 paper-shadow border border-gray-100">
               {/* Tape */}
               <div className="absolute -top-4 -right-4 w-24 h-8 bg-white/50 backdrop-blur-md rotate-[15deg] border border-white/30 shadow-sm z-10"></div>
               
               <img src={imgDesktopDashboard} alt="Internhub Overview" className="w-full h-auto block filter sepia-[0.1] contrast-[1.05]" />
               
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-['Great_Vibes'] text-3xl md:text-4xl text-[#543f32]/80 whitespace-nowrap">
                  Internhub Dashboard
               </div>
             </div>
          </div>
        </section>

        {/* ── SECTION 2: METRICS (Notebook Paper Table) ────────────────────────────── */}
        <section className="py-16 max-w-4xl mx-auto relative z-20 mb-32">
           <div className="bg-[#fcfaf7] p-10 md:p-14 paper-shadow relative overflow-hidden rotate-[-0.5deg]">
              {/* Lined paper pattern */}
              <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, #22c55e 39px, #22c55e 40px)' }}></div>
              <div className="absolute top-0 bottom-0 left-16 w-[1.5px] bg-[#ef4444] opacity-30 z-0"></div>
              
              <h3 className="font-['Great_Vibes'] text-4xl text-[#3b2c21] mb-8 relative z-10 ml-12">Project Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 ml-12">
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Role</p>
                    <p className="font-serif text-lg text-[#3b2c21]">Lead UI/UX Designer</p>
                 </div>
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Timeline</p>
                    <p className="font-serif text-lg text-[#3b2c21]">3 Months</p>
                 </div>
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Tools</p>
                    <p className="font-serif text-lg text-[#3b2c21]">Figma (Prototyping)</p>
                 </div>
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Client</p>
                    <p className="font-serif text-lg text-[#3b2c21]">FPT IS</p>
                 </div>
              </div>
           </div>
        </section>

        {/* ── SECTION 3: METRICS IMPACT (Polaroids) ────────────────────────────── */}
        <section className="py-16 max-w-6xl mx-auto relative z-20 mb-32 flex flex-col md:flex-row justify-center gap-8">
            <div className="w-full md:w-1/3 bg-white p-6 pb-16 paper-shadow border border-gray-100 rotate-[-3deg] relative text-center">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/50 backdrop-blur-md rotate-[-5deg] border border-white/30 shadow-sm z-10"></div>
               <div className="w-full aspect-square bg-[#efe8de] flex flex-col items-center justify-center border border-[#543f32]/10 mb-4">
                  <h4 className="font-['Great_Vibes'] text-[80px] leading-none text-[#22c55e] mb-4">+65%</h4>
               </div>
               <p className="font-['Playfair_Display'] font-black text-xl text-[#3b2c21]">Efficiency Increase</p>
               <p className="font-serif text-[#543f32] text-sm">in processing requests</p>
            </div>
            
            <div className="w-full md:w-1/3 bg-white p-6 pb-16 paper-shadow border border-gray-100 rotate-[2deg] relative text-center mt-8 md:mt-0">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/50 backdrop-blur-md rotate-[5deg] border border-white/30 shadow-sm z-10"></div>
               <div className="w-full aspect-square bg-[#efe8de] flex flex-col items-center justify-center border border-[#543f32]/10 mb-4">
                  <h4 className="font-['Great_Vibes'] text-[80px] leading-none text-[#22c55e] mb-4">3x</h4>
               </div>
               <p className="font-['Playfair_Display'] font-black text-xl text-[#3b2c21]">Faster Onboarding</p>
               <p className="font-serif text-[#543f32] text-sm">for new interns</p>
            </div>
            
            <div className="w-full md:w-1/3 bg-white p-6 pb-16 paper-shadow border border-gray-100 rotate-[-1deg] relative text-center mt-8 md:mt-0">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/50 backdrop-blur-md rotate-[-2deg] border border-white/30 shadow-sm z-10"></div>
               <div className="w-full aspect-square bg-[#efe8de] flex flex-col items-center justify-center border border-[#543f32]/10 mb-4">
                  <h4 className="font-['Great_Vibes'] text-[80px] leading-none text-[#22c55e] mb-4">98%</h4>
               </div>
               <p className="font-['Playfair_Display'] font-black text-xl text-[#3b2c21]">Task Completion</p>
               <p className="font-serif text-[#543f32] text-sm">without HR assistance</p>
            </div>
        </section>

        {/* ── SECTION 4: FEATURES ────────────────────────────── */}
        <section className="py-24 max-w-6xl mx-auto space-y-32">
          
          {/* Feature 01 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-5/12 relative">
              <span className="font-['Great_Vibes'] text-3xl text-[#22c55e]/80 mb-2 block -rotate-2">Feature 01</span>
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black uppercase text-[#3b2c21] mb-6 leading-tight">
                Frictionless Mobile Experience
              </h3>
              <p className="font-serif text-[#543f32] text-base leading-relaxed">
                Interns are often on the move. We designed a dedicated mobile interface prioritizing the daily check-in/check-out process, request submissions, and history tracking. The UI uses large, accessible tap targets and a clear visual hierarchy.
              </p>
            </div>
            
            <div className="w-full md:w-7/12 flex justify-center relative">
              <div className="relative flex max-w-[400px]">
                 {/* Back Photo */}
                 <div className="bg-white p-2 pb-8 paper-shadow border border-gray-100 rotate-[-6deg] absolute left-0 w-[180px] z-0">
                    <img src={imgMobileHistory} alt="Mobile History" className="w-full h-auto object-cover object-top border border-gray-100 filter sepia-[0.05]" />
                 </div>
                 {/* Front Photo */}
                 <div className="bg-white p-2 pb-8 paper-shadow border border-gray-100 rotate-[4deg] relative z-10 ml-24 w-[180px]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/50 backdrop-blur-md rotate-[-5deg] border border-white/30 shadow-sm z-10"></div>
                    <img src={imgMobileDashboard} alt="Mobile Check-in" className="w-full h-auto object-cover object-top border border-gray-100 filter sepia-[0.05]" />
                    <div className="absolute bottom-2 left-0 right-0 text-center font-['Great_Vibes'] text-xl text-[#543f32]/70">Dashboard</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
             <div className="w-full md:w-5/12 relative text-right">
              <span className="font-['Great_Vibes'] text-3xl text-[#f97316]/80 mb-2 block rotate-2">Feature 02</span>
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black uppercase text-[#3b2c21] mb-6 leading-tight">
                Streamlined Request Management
              </h3>
              <p className="font-serif text-[#543f32] text-base leading-relaxed">
                Submitting and tracking requests (leave, remote work, equipment) is now fully synchronized between the Web portal and the Mobile app. The intuitive form design reduces errors and speeds up HR approvals.
              </p>
            </div>
            
            <div className="w-full md:w-7/12 flex justify-center relative">
              <div className="bg-white p-3 pb-10 paper-shadow border border-gray-100 rotate-[2deg] relative max-w-[450px]">
                 {/* Pushpin */}
                 <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#fdfdfd] shadow-sm border border-gray-200 flex items-center justify-center z-10"></div>
                 <img src={imgMobileRequest} alt="Request UI" className="w-full h-auto object-cover object-top border border-gray-100 filter sepia-[0.05]" />
              </div>
            </div>
          </div>
          
          {/* Feature 03 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-5/12 relative">
              <span className="font-['Great_Vibes'] text-3xl text-[#3b82f6]/80 mb-2 block -rotate-2">Feature 03</span>
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black uppercase text-[#3b2c21] mb-6 leading-tight">
                Seamless Authentication
              </h3>
              <p className="font-serif text-[#543f32] text-base leading-relaxed">
                A unified, secure, and branded login experience across all platforms. The authentication flow is designed to be frictionless while adhering to strict internal security policies for FPT IS employees.
              </p>
            </div>
            
            <div className="w-full md:w-7/12 flex justify-center relative">
              <div className="bg-white p-3 pb-10 paper-shadow border border-gray-100 rotate-[-1deg] relative max-w-[450px]">
                 {/* Tape */}
                 <div className="absolute -top-3 -right-2 w-12 h-5 bg-white/50 backdrop-blur-md rotate-[15deg] border border-white/30 shadow-sm z-10"></div>
                 <img src={imgDesktopLogin} alt="Login UI" className="w-full h-auto object-cover object-top border border-gray-100 filter sepia-[0.05]" />
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: DESIGN SYSTEM ────────────────────────────── */}
        <section className="py-24 max-w-6xl mx-auto mt-24">
          <div className="text-center mb-16 relative">
             <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-black uppercase tracking-widest text-[#3b2c21]">Design System</h2>
             <div className="w-24 h-[1px] bg-[#3b2c21]/30 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Color Swatches */}
            <div className="bg-[#fdfbf6] p-10 paper-shadow rotate-[-1deg] relative">
              <div className="font-['Great_Vibes'] text-3xl text-[#543f32] mb-8 border-b border-[#543f32]/10 pb-2">Color Palette</div>
              
              <div className="flex flex-wrap gap-6">
                 <div className="w-24 flex flex-col items-center bg-white p-2 pb-6 paper-shadow border border-gray-100 rotate-[-2deg]">
                    <div className="w-full h-20 bg-[#FF6B00] mb-2 shadow-inner"></div>
                    <span className="font-serif text-xs text-[#543f32]">#FF6B00</span>
                 </div>
                 <div className="w-24 flex flex-col items-center bg-white p-2 pb-6 paper-shadow border border-gray-100 rotate-[3deg] mt-4">
                    <div className="w-full h-20 bg-[#10B981] mb-2 shadow-inner"></div>
                    <span className="font-serif text-xs text-[#543f32]">#10B981</span>
                 </div>
                 <div className="w-24 flex flex-col items-center bg-white p-2 pb-6 paper-shadow border border-gray-100 rotate-[-1deg]">
                    <div className="w-full h-20 bg-[#2563EB] mb-2 shadow-inner"></div>
                    <span className="font-serif text-xs text-[#543f32]">#2563EB</span>
                 </div>
              </div>
            </div>

            {/* Typography Specimen */}
            <div className="bg-[#efe8de] p-10 paper-shadow rotate-[1deg] relative overflow-hidden">
               {/* Watermark */}
               <div className="absolute -right-10 -bottom-10 font-['Playfair_Display'] text-[150px] text-[#543f32] opacity-5 font-black">Aa</div>
               
               <div className="font-['Great_Vibes'] text-3xl text-[#543f32] mb-8 border-b border-[#543f32]/10 pb-2 relative z-10">Typography</div>
               
               <div className="flex flex-col gap-8 relative z-10">
                 <div>
                    <div className="font-['Playfair_Display'] text-[10px] tracking-[0.2em] uppercase text-[#543f32]/70 mb-2">Primary Fonts</div>
                    <div className="text-3xl font-bold text-[#3b2c21] tracking-tight font-sans">Inter</div>
                 </div>
                 
                 <div className="border-l-2 border-[#543f32]/20 pl-4">
                    <div className="text-sm font-bold text-[#22c55e]/80 uppercase tracking-widest mb-1 font-sans">Headings</div>
                    <div className="text-xl font-bold text-[#3b2c21] uppercase font-sans">ABCDEFGHIJKLM NOPQRSTUVWXYZ</div>
                 </div>
                 
                 <div className="border-l-2 border-[#543f32]/20 pl-4">
                    <div className="text-sm font-bold text-[#22c55e]/80 uppercase tracking-widest mb-1 font-sans">Body</div>
                    <div className="text-base text-[#543f32] font-sans">Aa Bb Cc Dd Ee Ff Gg Hh 0123456789</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: NAVIGATION FOOTER (Ripped Paper Links) ────────────────────────────── */}
        <section className="py-24 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mt-12">
          
          <button 
            onClick={() => navigate("/case-study/tiktok-summit")}
            className="group relative bg-[#fdfaf6] px-12 py-8 paper-shadow hover:-translate-y-2 transition-transform duration-300 rotate-[1deg]"
            style={{ clipPath: 'polygon(2% 0, 100% 2%, 98% 100%, 0% 98%)' }}
          >
            <div className="absolute bottom-6 right-1/2 translate-x-1/2 w-0 h-[2px] bg-[#22c55e] transition-all duration-500 group-hover:w-1/2"></div>
            <span className="flex flex-col items-center">
              <span className="font-['Great_Vibes'] text-2xl text-[#a0c4d8] mb-2">Previous Project</span>
              <span className="font-['Playfair_Display'] text-2xl md:text-3xl font-black uppercase tracking-widest text-[#3b2c21]">
                 TIKTOK SUMMIT
              </span>
            </span>
          </button>
          
          <button 
            onClick={() => navigate("/case-study/nep-nha")}
            className="group relative bg-[#fdfaf6] px-12 py-8 paper-shadow hover:-translate-y-2 transition-transform duration-300 rotate-[-1deg]"
            style={{ clipPath: 'polygon(0 0, 98% 2%, 100% 98%, 2% 100%)' }}
          >
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#f97316] transition-all duration-500 group-hover:w-1/2"></div>
            <span className="flex flex-col items-center">
              <span className="font-['Great_Vibes'] text-2xl text-[#a0c4d8] mb-2">Next Project</span>
              <span className="font-['Playfair_Display'] text-2xl md:text-3xl font-black uppercase tracking-widest text-[#3b2c21]">
                 Nếp Nhà
              </span>
            </span>
          </button>
          
        </section>
        
      </main>
    </div>
  );
};
