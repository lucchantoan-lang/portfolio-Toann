import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgHdbank from "../imports/hdbank-di-cmb.png";

export const HdbankCaseStudyView: React.FC = () => {
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
        
        {/* ── SECTION 1: HERO OVERVIEW (Manila Folder Top) ────────────────────────────── */}
        <section className="relative flex flex-col items-center mb-32">
          
          {/* Tags as Tape Strips */}
          <div className="flex gap-4 mb-8 relative z-20">
            {["ONGOING", "B2B FINTECH", "2026"].map((tag, idx) => (
              <span key={tag} className={`px-4 py-1.5 bg-[#fdfaf6] border border-[#543f32]/10 shadow-sm text-[#543f32] text-[10px] font-bold tracking-[0.2em] uppercase font-sans ${idx % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[3deg]'}`}>
                <div className="absolute inset-0 bg-black/5 opacity-0 mix-blend-overlay"></div>
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <div className="text-center relative z-20 mb-12">
            <h2 className="font-['Great_Vibes'] text-5xl md:text-7xl text-[#a0c4d8] mb-[-20px] -rotate-2">
              Case Study
            </h2>
            <h1 className="font-['Playfair_Display'] text-6xl md:text-[100px] font-black uppercase leading-[0.9] text-[#3b2c21] tracking-tighter">
              HDBANK
              <br />
              <span className="text-4xl md:text-6xl tracking-widest font-serif font-light text-[#543f32]">Di-CMB</span>
            </h1>
          </div>

          {/* Description on a ripped note */}
          <div className="relative bg-[#fdfbf6] p-8 md:p-10 max-w-2xl text-center paper-shadow rotate-[1deg] mb-16 z-20">
            {/* Push pin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#fdfdfd] shadow-sm border border-gray-200 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#e0e0e0]"></div>
            </div>
            <p className="font-serif text-base md:text-lg text-[#543f32] leading-relaxed italic">
              "Ứng dụng cung cấp cho doanh nghiệp một trải nghiệm tối ưu trong việc quản lý tài chính và giao dịch ngân hàng một cách nhanh chóng, bảo mật và thông minh."
            </p>
          </div>

          {/* Main Image (Printed Photo Style) */}
          <div className="relative w-full max-w-4xl mx-auto z-10 rotate-[-1deg] transition-transform duration-700 hover:rotate-0">
             <div className="bg-white p-4 md:p-6 pb-16 md:pb-20 paper-shadow border border-gray-100">
               {/* Tape */}
               <div className="absolute -top-4 -left-4 w-24 h-8 bg-white/50 backdrop-blur-md rotate-[-15deg] border border-white/30 shadow-sm z-10"></div>
               <div className="absolute -bottom-4 -right-4 w-24 h-8 bg-white/50 backdrop-blur-md rotate-[-10deg] border border-white/30 shadow-sm z-10"></div>
               
               <img src={imgHdbank} alt="HDBank Overview" className="w-full h-auto block filter sepia-[0.1] contrast-[1.05]" />
               
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-['Great_Vibes'] text-3xl md:text-4xl text-[#543f32]/80 whitespace-nowrap">
                  HDBank Di-CMB Platform
               </div>
             </div>
          </div>
        </section>

        {/* ── SECTION 2: METRICS (Notebook Paper Table) ────────────────────────────── */}
        <section className="py-16 max-w-4xl mx-auto relative z-20 mb-32">
           <div className="bg-[#fcfaf7] p-10 md:p-14 paper-shadow relative overflow-hidden rotate-[0.5deg]">
              {/* Lined paper pattern */}
              <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, #a0c4d8 39px, #a0c4d8 40px)' }}></div>
              <div className="absolute top-0 bottom-0 left-16 w-[1.5px] bg-[#e08e8e] opacity-30 z-0"></div>
              
              <h3 className="font-['Great_Vibes'] text-4xl text-[#3b2c21] mb-8 relative z-10 ml-12">Project Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 ml-12">
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Role</p>
                    <p className="font-serif text-lg text-[#3b2c21]">UI/UX Designer (UI Focused)</p>
                 </div>
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Timeline</p>
                    <p className="font-serif text-lg text-[#3b2c21]">2026 (In Progress)</p>
                 </div>
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Platform</p>
                    <p className="font-serif text-lg text-[#3b2c21]">Mobile App & Web Portal</p>
                 </div>
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Domain</p>
                    <p className="font-serif text-lg text-[#3b2c21]">B2B Enterprise Solution</p>
                 </div>
              </div>
           </div>
        </section>

        {/* ── SECTION 2.5: CONTEXT & CHALLENGE (Typewriter Letter) ────────────────────────────── */}
        <section className="py-16 max-w-3xl mx-auto relative z-20 mb-32">
           <div className="text-center relative">
              {/* Quote marks */}
              <span className="absolute -top-16 -left-10 font-['Playfair_Display'] text-[120px] text-[#a0c4d8] opacity-30 leading-none">"</span>
              
              <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase tracking-widest text-[#3b2c21] mb-8">
                The Challenge
              </h2>
              <p className="font-serif text-lg text-[#543f32] leading-loose text-justify">
                Ngân hàng yêu cầu một giao diện chuyên nghiệp, đẳng cấp dành riêng cho tệp khách hàng doanh nghiệp. Thách thức lớn nhất trong dự án là <strong className="bg-[#f5c71a]/30 px-1">phải hiển thị một khối lượng khổng lồ các dữ liệu tài chính phức tạp trên một màn hình điện thoại nhỏ</strong> mà không làm người dùng (như kế toán trưởng, giám đốc) bị quá tải thông tin.
              </p>
           </div>
        </section>

        {/* ── SECTION 3: FEATURES (Laptop Mockups on Desk) ────────────────────────────── */}
        <section className="py-16 max-w-6xl mx-auto space-y-40">
          
          {/* Feature 01 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-5/12 relative">
              <span className="font-['Great_Vibes'] text-3xl text-[#e51d2a] mb-2 block">Feature 01</span>
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black uppercase text-[#3b2c21] mb-6 leading-tight">
                Tài trợ thương mại & Bảo lãnh quốc tế
              </h3>
              <p className="font-serif text-[#543f32] text-base leading-relaxed">
                Chuyển hóa các quy trình nghiệp vụ ngoại thương phức tạp thành luồng thao tác trực quan. Giao diện được nhóm gọn gàng, giúp người dùng dễ dàng theo dõi tiến độ và xử lý hồ sơ bảo lãnh.
              </p>
            </div>
            
            <div className="w-full md:w-7/12 flex justify-center relative">
              {/* Laptop Frame CSS Mockup */}
              <div className="relative w-full max-w-[600px] bg-[#e0e0e0] rounded-t-2xl p-3 pb-8 border border-gray-300 shadow-xl rotate-[2deg] z-10">
                 {/* Screen */}
                 <div className="w-full aspect-[16/10] bg-[#fdfbf6] rounded-md border-4 border-[#111] overflow-hidden relative flex flex-col justify-center items-center shadow-inner">
                    
                    {/* Abstract Content inside Laptop */}
                    <div className="w-full flex justify-center items-center gap-8 z-10">
                      <div className="w-24 h-24 rounded-sm border border-[#543f32]/20 bg-[#efe8de] flex flex-col items-center justify-center paper-shadow">
                        <div className="w-12 h-12 bg-[#e51d2a]/10 rounded-full flex items-center justify-center text-[#e51d2a] mb-2">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        </div>
                        <div className="w-10 h-1 bg-[#543f32]/20 rounded-full"></div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                         <div className="w-2 h-2 rounded-full bg-[#e51d2a]"></div>
                         <div className="w-2 h-2 rounded-full bg-[#e51d2a]"></div>
                         <div className="w-2 h-2 rounded-full bg-[#e51d2a]"></div>
                      </div>
                      
                      <div className="w-24 h-24 rounded-sm border border-[#543f32]/20 bg-[#efe8de] flex flex-col items-center justify-center paper-shadow">
                        <div className="w-12 h-12 bg-[#f5c71a]/20 rounded-full flex items-center justify-center text-[#d4aa00] mb-2">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line></svg>
                        </div>
                        <div className="w-10 h-1 bg-[#543f32]/20 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 font-['Great_Vibes'] text-[#543f32]/50 text-xl">Confidential Web Portal</div>
                 </div>
                 
                 {/* Laptop base */}
                 <div className="absolute -bottom-4 left-[-2%] right-[-2%] h-4 bg-[#c0c0c0] rounded-b-2xl shadow-[0_10px_20px_rgba(0,0,0,0.2)]"></div>
                 <div className="absolute -bottom-4 left-[40%] right-[40%] h-2 bg-[#a0a0a0] rounded-t-sm"></div>
              </div>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="w-full md:w-5/12 relative text-right">
              <span className="font-['Great_Vibes'] text-3xl text-[#f5c71a] mb-2 block">Feature 02</span>
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black uppercase text-[#3b2c21] mb-6 leading-tight">
                Quản lý khoản thu & Phải trả
              </h3>
              <p className="font-serif text-[#543f32] text-base leading-relaxed">
                Tối ưu hóa việc trình bày dòng tiền (Cashflow). Thay vì nhồi nhét bảng biểu, thiết kế sử dụng các thẻ thông tin và biểu đồ thu gọn để kế toán trưởng nắm bắt tình hình công nợ ngay lập tức.
              </p>
            </div>
            
            <div className="w-full md:w-7/12 flex justify-center relative">
              {/* Laptop Frame CSS Mockup */}
              <div className="relative w-full max-w-[600px] bg-[#e0e0e0] rounded-t-2xl p-3 pb-8 border border-gray-300 shadow-xl rotate-[-1deg] z-10">
                 {/* Screen */}
                 <div className="w-full aspect-[16/10] bg-[#fdfbf6] rounded-md border-4 border-[#111] overflow-hidden relative flex flex-col justify-center items-center shadow-inner p-6">
                    
                    {/* Abstract Content inside Laptop */}
                    <div className="w-full h-full flex gap-6 z-10">
                      {/* Cards */}
                      <div className="w-1/3 flex flex-col gap-4 justify-center">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-full h-12 bg-white border border-[#543f32]/10 shadow-sm rounded-sm p-2 flex flex-col justify-between">
                            <div className="w-1/2 h-1 bg-[#543f32]/20 rounded-full"></div>
                            <div className="flex justify-between items-end">
                              <div className="w-3/4 h-2 bg-[#543f32]/80 rounded-full"></div>
                              <div className="w-3 h-3 rounded-full bg-[#f5c71a]"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Chart */}
                      <div className="w-2/3 h-full bg-white border border-[#543f32]/10 shadow-sm rounded-sm p-4 flex items-end justify-between gap-2">
                         <div className="w-full bg-[#e51d2a]/60 h-[40%] rounded-t-sm"></div>
                         <div className="w-full bg-[#f5c71a]/60 h-[70%] rounded-t-sm"></div>
                         <div className="w-full bg-[#e51d2a]/60 h-[30%] rounded-t-sm"></div>
                         <div className="w-full bg-[#f5c71a]/60 h-[90%] rounded-t-sm"></div>
                         <div className="w-full bg-[#e51d2a]/60 h-[50%] rounded-t-sm"></div>
                      </div>
                    </div>
                 </div>
                 
                 {/* Laptop base */}
                 <div className="absolute -bottom-4 left-[-2%] right-[-2%] h-4 bg-[#c0c0c0] rounded-b-2xl shadow-[0_10px_20px_rgba(0,0,0,0.2)]"></div>
              </div>
            </div>
          </div>

          {/* Feature 03 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-5/12 relative">
              <span className="font-['Great_Vibes'] text-3xl text-[#a0c4d8] mb-2 block">Feature 03</span>
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black uppercase text-[#3b2c21] mb-6 leading-tight">
                Giải ngân & Nhờ thu xuất khẩu
              </h3>
              <p className="font-serif text-[#543f32] text-base leading-relaxed">
                Các bước thực hiện lệnh giải ngân và nhờ thu được phân tách rõ ràng theo cơ chế Maker-Checker. Trải nghiệm được thiết kế tuyến tính giúp hạn chế tối đa sai sót khi nhập liệu.
              </p>
            </div>
            
            <div className="w-full md:w-7/12 flex justify-center relative">
              {/* Laptop Frame CSS Mockup */}
              <div className="relative w-full max-w-[600px] bg-[#e0e0e0] rounded-t-2xl p-3 pb-8 border border-gray-300 shadow-xl rotate-[1.5deg] z-10">
                 {/* Screen */}
                 <div className="w-full aspect-[16/10] bg-[#fdfbf6] rounded-md border-4 border-[#111] overflow-hidden relative flex flex-col justify-center items-center shadow-inner">
                    
                    {/* Abstract Workflow */}
                    <div className="w-full px-10 flex items-center justify-between gap-2 z-10">
                      
                      {/* Maker Node */}
                      <div className="w-[40%] bg-white border border-[#543f32]/10 shadow-sm p-4 rounded-sm flex flex-col items-center">
                         <div className="w-10 h-10 rounded-full border border-[#e51d2a] text-[#e51d2a] flex items-center justify-center mb-4 bg-[#e51d2a]/5">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                         </div>
                         <div className="w-3/4 h-2 bg-[#543f32]/40 rounded-full mb-2"></div>
                         <div className="w-1/2 h-1 bg-[#543f32]/20 rounded-full"></div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="text-[#a0c4d8] text-2xl">→</div>
                      
                      {/* Checker Node */}
                      <div className="w-[40%] bg-[#fcfaf7] border border-[#f5c71a]/50 shadow-sm p-4 rounded-sm flex flex-col items-center">
                         <div className="w-10 h-10 rounded-full border border-[#f5c71a] text-[#f5c71a] flex items-center justify-center mb-4 bg-[#f5c71a]/5">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                         </div>
                         <div className="w-3/4 h-2 bg-[#543f32]/80 rounded-full mb-2"></div>
                         <div className="w-1/2 h-1 bg-[#543f32]/40 rounded-full"></div>
                      </div>

                    </div>
                 </div>
                 
                 {/* Laptop base */}
                 <div className="absolute -bottom-4 left-[-2%] right-[-2%] h-4 bg-[#c0c0c0] rounded-b-2xl shadow-[0_10px_20px_rgba(0,0,0,0.2)]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: DESIGN SYSTEM (Fabric Swatches & Specimens) ────────────────────────────── */}
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
                 {/* Swatch 1 */}
                 <div className="w-24 flex flex-col items-center bg-white p-2 pb-6 paper-shadow border border-gray-100 rotate-[-3deg]">
                    <div className="w-full h-20 bg-[#E51D2A] mb-2 shadow-inner"></div>
                    <span className="font-serif text-xs text-[#543f32]">#E51D2A</span>
                 </div>
                 {/* Swatch 2 */}
                 <div className="w-24 flex flex-col items-center bg-white p-2 pb-6 paper-shadow border border-gray-100 rotate-[2deg] mt-4">
                    <div className="w-full h-20 bg-[#F5C71A] mb-2 shadow-inner"></div>
                    <span className="font-serif text-xs text-[#543f32]">#F5C71A</span>
                 </div>
                 {/* Swatch 3 */}
                 <div className="w-24 flex flex-col items-center bg-white p-2 pb-6 paper-shadow border border-gray-100 rotate-[-1deg]">
                    <div className="w-full h-20 bg-[#111111] mb-2 shadow-inner"></div>
                    <span className="font-serif text-xs text-[#543f32]">#111111</span>
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
                    <div className="font-['Playfair_Display'] text-[10px] tracking-[0.2em] uppercase text-[#543f32]/70 mb-2">Primary Font (Bank Brand)</div>
                    <div className="text-4xl font-bold text-[#3b2c21] tracking-tight" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Be Vietnam Pro</div>
                 </div>
                 
                 <div className="border-l-2 border-[#543f32]/20 pl-4">
                    <div className="text-sm font-bold text-[#e51d2a] uppercase tracking-widest mb-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Headings</div>
                    <div className="text-2xl font-bold text-[#3b2c21]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Đổi mới vì sự thịnh vượng</div>
                 </div>
                 
                 <div className="border-l-2 border-[#543f32]/20 pl-4">
                    <div className="text-sm font-bold text-[#e51d2a] uppercase tracking-widest mb-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Body</div>
                    <div className="text-base text-[#543f32]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>Aa Bb Cc Dd Ee Ff Gg Hh 0123456789</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: NEXT PROJECT (Ripped Paper Link) ────────────────────────────── */}
        <section className="py-24 max-w-4xl mx-auto flex justify-center mt-12">
          <button 
            onClick={() => navigate("/case-study/tiktok-summit")}
            className="group relative bg-[#fdfaf6] px-12 py-8 paper-shadow hover:-translate-y-2 transition-transform duration-300 rotate-[-1deg]"
            style={{ 
               clipPath: 'polygon(0 0, 100% 2%, 98% 100%, 2% 98%)' 
            }}
          >
            {/* Red underline */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#e51d2a] transition-all duration-500 group-hover:w-1/2"></div>
            
            <span className="flex flex-col items-center">
              <span className="font-['Great_Vibes'] text-2xl text-[#a0c4d8] mb-2">Next Project</span>
              <span className="font-['Playfair_Display'] text-4xl font-black uppercase tracking-widest text-[#3b2c21]">
                 Tiktok Summit
              </span>
            </span>
          </button>
        </section>
        
      </main>
    </div>
  );
};

