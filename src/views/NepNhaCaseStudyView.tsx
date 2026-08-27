import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NepNhaCaseStudyView: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imgHero = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/224441b7-776f-4e3d-b7e6-e22599309b78";
  const imgCalendar = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e624f954-44f2-4279-9f3a-55b7a4b6a865";
  const imgTasks = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/210c2e48-e0ef-4269-b0cd-e61bd8a70500";
  const imgHealth = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70a076d9-14a4-4b52-bca0-8ee889a1aa65";

  return (
    <div className="min-h-screen bg-[#f4f0ea] text-[#3b2c21] font-serif overflow-x-hidden relative">
      
      {/* Background Noise & Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>

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
            {["FAMILY APP", "SOCIAL CONNECTION", "2026"].map((tag, idx) => (
              <span key={tag} className={`px-4 py-1.5 bg-[#fdfaf6] border border-[#543f32]/10 shadow-sm text-[#543f32] text-[10px] font-bold tracking-[0.2em] uppercase font-sans ${idx % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[3deg]'}`}>
                <div className="absolute inset-0 bg-black/5 opacity-0 mix-blend-overlay"></div>
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <div className="text-center relative z-20 mb-12">
            <h2 className="font-['Great_Vibes'] text-5xl md:text-7xl text-[#4ADE80]/60 mb-[-20px] rotate-2">
              Case Study
            </h2>
            <h1 className="font-['Playfair_Display'] text-6xl md:text-[100px] font-black uppercase leading-[0.9] text-[#3b2c21] tracking-tighter">
              NẾP NHÀ
            </h1>
          </div>

          {/* Description on a ripped note */}
          <div className="relative bg-[#fdfbf6] p-8 md:p-10 max-w-2xl text-center paper-shadow rotate-[1deg] mb-16 z-20">
            {/* Push pin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#fdfdfd] shadow-sm border border-gray-200 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#e0e0e0]"></div>
            </div>
            <p className="font-serif text-base md:text-lg text-[#543f32] leading-relaxed italic">
              "Giao diện và hệ thống thiết kế cho ứng dụng gắn kết gia đình đa thế hệ — nơi lưu giữ kỷ niệm, chia sẻ khoảnh khắc sum vầy và duy trì các hoạt động chung ý nghĩa giữa các thành viên."
            </p>
          </div>

          {/* Hero Images - Scattered Photos */}
          <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] flex justify-center items-start mt-12 z-10">
            
            {/* Left Photo */}
            <div className="absolute left-1/2 -translate-x-[110%] md:-translate-x-[130%] top-16 w-[150px] md:w-[260px] bg-white p-2 pb-8 paper-shadow rotate-[-8deg] transition-transform duration-500 hover:rotate-0 hover:z-30">
               {/* Tape */}
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 backdrop-blur-md rotate-[-5deg] border border-white/30 shadow-sm z-10"></div>
               <img src={imgCalendar} alt="Calendar" className="w-full aspect-[9/19] object-cover object-top border border-gray-100 filter sepia-[0.1]" />
               <div className="absolute bottom-2 left-0 right-0 text-center font-['Great_Vibes'] text-xl text-[#543f32]/70">Lịch Âm</div>
            </div>

            {/* Right Photo */}
            <div className="absolute left-1/2 translate-x-[10%] md:translate-x-[30%] top-16 w-[150px] md:w-[260px] bg-white p-2 pb-8 paper-shadow rotate-[8deg] transition-transform duration-500 hover:rotate-0 hover:z-30">
               {/* Tape */}
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 backdrop-blur-md rotate-[5deg] border border-white/30 shadow-sm z-10"></div>
               <img src={imgTasks} alt="Tasks" className="w-full aspect-[9/19] object-cover object-top border border-gray-100 filter sepia-[0.1]" />
               <div className="absolute bottom-2 left-0 right-0 text-center font-['Great_Vibes'] text-xl text-[#543f32]/70">Công Việc</div>
            </div>

            {/* Center Photo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[180px] md:w-[300px] bg-white p-3 pb-12 paper-shadow rotate-[-2deg] transition-transform duration-500 hover:rotate-0 hover:-translate-y-4 hover:z-30 z-20">
               {/* Paper clip */}
               <div className="absolute -top-6 -right-2 w-5 h-16 border-[3px] border-[#b0b0b0] rounded-full z-10 rotate-12 shadow-sm"></div>
               <img src={imgHero} alt="Hero" className="w-full aspect-[9/19] object-cover object-top border border-gray-100 filter sepia-[0.05]" />
               <div className="absolute bottom-4 left-0 right-0 text-center font-['Great_Vibes'] text-2xl text-[#543f32]/80">Nếp Nhà</div>
            </div>
            
          </div>
        </section>

        {/* ── SECTION 2: METRICS (Notebook Paper Table) ────────────────────────────── */}
        <section className="py-16 max-w-4xl mx-auto relative z-20 mb-32">
           <div className="bg-[#fcfaf7] p-10 md:p-14 paper-shadow relative overflow-hidden rotate-[0.5deg]">
              {/* Lined paper pattern */}
              <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, #4ADE80 39px, #4ADE80 40px)' }}></div>
              <div className="absolute top-0 bottom-0 left-16 w-[1.5px] bg-[#EF4444] opacity-30 z-0"></div>
              
              <h3 className="font-['Great_Vibes'] text-4xl text-[#3b2c21] mb-8 relative z-10 ml-12">Project Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 ml-12">
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Role</p>
                    <p className="font-serif text-lg text-[#3b2c21]">UI/UX Designer</p>
                 </div>
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Timeline</p>
                    <p className="font-serif text-lg text-[#3b2c21]">4 Months</p>
                 </div>
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Tools</p>
                    <p className="font-serif text-lg text-[#3b2c21]">Figma</p>
                 </div>
                 <div>
                    <p className="font-['Playfair_Display'] font-black uppercase text-xs tracking-widest text-[#543f32]/60 mb-1">Scale</p>
                    <p className="font-serif text-lg text-[#3b2c21]">10k+ Families</p>
                 </div>
              </div>
           </div>
        </section>

        {/* ── SECTION 3: FEATURES ────────────────────────────── */}
        <section className="py-24 max-w-6xl mx-auto space-y-32">
          
          {/* Feature 01 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-5/12 relative">
              <span className="font-['Great_Vibes'] text-3xl text-[#4ADE80]/80 mb-2 block rotate-2">Feature 01</span>
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black uppercase text-[#3b2c21] mb-6 leading-tight">
                Quan Tâm Mỗi Ngày
              </h3>
              <p className="font-serif text-[#543f32] text-base leading-relaxed">
                Giao diện chăm sóc sức khỏe trực quan, giúp mọi thành viên dễ dàng theo dõi thể trạng và nhắc nhở uống thuốc cho ông bà, cha mẹ. Thiết kế sử dụng các thẻ thông tin (cards) lớn, độ tương phản cao, đặc biệt thân thiện với người lớn tuổi.
              </p>
            </div>
            
            <div className="w-full md:w-7/12 flex justify-center relative">
              <div className="bg-white p-3 pb-10 paper-shadow border border-gray-100 rotate-[2deg] max-w-[320px]">
                 {/* Tape */}
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/50 backdrop-blur-md rotate-[-3deg] border border-white/30 shadow-sm z-10"></div>
                 <img src={imgHealth} alt="Health UI" className="w-full aspect-[9/19] object-cover object-top border border-gray-100 filter sepia-[0.05]" />
                 <div className="absolute bottom-3 left-0 right-0 text-center font-['Great_Vibes'] text-2xl text-[#543f32]/80">Sức Khỏe</div>
              </div>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
             <div className="w-full md:w-5/12 relative text-right">
              <span className="font-['Great_Vibes'] text-3xl text-[#FBBF24]/80 mb-2 block -rotate-2">Feature 02</span>
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black uppercase text-[#3b2c21] mb-6 leading-tight">
                Quản Lý & Phân Công
              </h3>
              <p className="font-serif text-[#543f32] text-base leading-relaxed">
                Thay vì những ứng dụng lịch và To-do phức tạp, Nếp Nhà tích hợp sẵn Lịch Âm và phân công công việc nhà. UI/UX được tối ưu hóa cho màn hình di động, thao tác bằng một tay mượt mà.
              </p>
            </div>
            
            <div className="w-full md:w-7/12 flex justify-center relative">
              <div className="relative flex max-w-[400px]">
                 {/* Back Photo */}
                 <div className="bg-white p-2 pb-8 paper-shadow border border-gray-100 rotate-[6deg] absolute left-0 w-[200px] z-0">
                    <img src={imgCalendar} alt="Calendar UI" className="w-full aspect-[9/19] object-cover object-top border border-gray-100 filter sepia-[0.05]" />
                 </div>
                 {/* Front Photo */}
                 <div className="bg-white p-2 pb-8 paper-shadow border border-gray-100 rotate-[-4deg] relative z-10 ml-24 w-[200px]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/50 backdrop-blur-md rotate-[5deg] border border-white/30 shadow-sm z-10"></div>
                    <img src={imgTasks} alt="Tasks UI" className="w-full aspect-[9/19] object-cover object-top border border-gray-100 filter sepia-[0.05]" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: DESIGN SYSTEM (Fabric Swatches) ────────────────────────────── */}
        <section className="py-24 max-w-6xl mx-auto mt-24">
          <div className="text-center mb-16 relative">
             <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-black uppercase tracking-widest text-[#3b2c21]">Design System</h2>
             <div className="w-24 h-[1px] bg-[#3b2c21]/30 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Color Swatches */}
            <div className="bg-[#fdfbf6] p-10 paper-shadow rotate-[1deg] relative">
              <div className="font-['Great_Vibes'] text-3xl text-[#543f32] mb-8 border-b border-[#543f32]/10 pb-2">Color Palette</div>
              
              <div className="flex flex-wrap gap-6">
                 {/* Swatch 1 */}
                 <div className="w-24 flex flex-col items-center bg-white p-2 pb-6 paper-shadow border border-gray-100 rotate-[-2deg]">
                    <div className="w-full h-20 bg-[#FAFAFA] mb-2 shadow-inner border border-gray-200"></div>
                    <span className="font-serif text-xs text-[#543f32]">#FAFAFA</span>
                 </div>
                 {/* Swatch 2 */}
                 <div className="w-24 flex flex-col items-center bg-white p-2 pb-6 paper-shadow border border-gray-100 rotate-[3deg] mt-4">
                    <div className="w-full h-20 bg-[#1C1917] mb-2 shadow-inner"></div>
                    <span className="font-serif text-xs text-[#543f32]">#1C1917</span>
                 </div>
                 {/* Swatch 3 */}
                 <div className="w-24 flex flex-col items-center bg-white p-2 pb-6 paper-shadow border border-gray-100 rotate-[-1deg]">
                    <div className="w-full h-20 bg-[#22C55E] mb-2 shadow-inner"></div>
                    <span className="font-serif text-xs text-[#543f32]">#22C55E</span>
                 </div>
                 {/* Swatch 4 */}
                 <div className="w-24 flex flex-col items-center bg-white p-2 pb-6 paper-shadow border border-gray-100 rotate-[2deg] mt-2">
                    <div className="w-full h-20 bg-[#EF4444] mb-2 shadow-inner"></div>
                    <span className="font-serif text-xs text-[#543f32]">#EF4444</span>
                 </div>
              </div>
            </div>

            {/* Typography Specimen */}
            <div className="bg-[#efe8de] p-10 paper-shadow rotate-[-1deg] relative overflow-hidden">
               {/* Watermark */}
               <div className="absolute -right-10 -bottom-10 font-['Playfair_Display'] text-[150px] text-[#543f32] opacity-5 font-black">Aa</div>
               
               <div className="font-['Great_Vibes'] text-3xl text-[#543f32] mb-8 border-b border-[#543f32]/10 pb-2 relative z-10">Typography</div>
               
               <div className="flex flex-col gap-8 relative z-10">
                 <div>
                    <div className="font-['Playfair_Display'] text-[10px] tracking-[0.2em] uppercase text-[#543f32]/70 mb-2">Primary Fonts</div>
                    <div className="text-3xl font-bold text-[#3b2c21] tracking-tight font-sans">Inter</div>
                 </div>
                 
                 <div className="border-l-2 border-[#543f32]/20 pl-4">
                    <div className="text-sm font-bold text-[#4ADE80]/80 uppercase tracking-widest mb-1 font-sans">Headings</div>
                    <div className="text-xl font-bold text-[#3b2c21] font-sans">Gắn kết gia đình, trọn vẹn yêu thương</div>
                 </div>
                 
                 <div className="border-l-2 border-[#543f32]/20 pl-4">
                    <div className="text-sm font-bold text-[#4ADE80]/80 uppercase tracking-widest mb-1 font-sans">Body</div>
                    <div className="text-base text-[#543f32] font-sans">Aa Bb Cc Dd Ee Ff Gg Hh 0123456789</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: NAVIGATION FOOTER (Ripped Paper Links) ────────────────────────────── */}
        <section className="py-24 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mt-12">
          
          <button 
            onClick={() => navigate("/case-study/internhub")}
            className="group relative bg-[#fdfaf6] px-12 py-8 paper-shadow hover:-translate-y-2 transition-transform duration-300 rotate-[1deg]"
            style={{ clipPath: 'polygon(2% 0, 100% 2%, 98% 100%, 0% 98%)' }}
          >
            <div className="absolute bottom-6 right-1/2 translate-x-1/2 w-0 h-[2px] bg-[#4ADE80] transition-all duration-500 group-hover:w-1/2"></div>
            <span className="flex flex-col items-center">
              <span className="font-['Great_Vibes'] text-2xl text-[#a0c4d8] mb-2">Previous Project</span>
              <span className="font-['Playfair_Display'] text-2xl md:text-3xl font-black uppercase tracking-widest text-[#3b2c21]">
                 INTERNHUB FPT
              </span>
            </span>
          </button>
          
          <button 
            className="group relative bg-[#fdfaf6] px-12 py-8 paper-shadow opacity-50 cursor-not-allowed rotate-[-1deg]"
            style={{ clipPath: 'polygon(0 0, 98% 2%, 100% 98%, 2% 100%)' }}
          >
            <span className="flex flex-col items-center">
              <span className="font-['Great_Vibes'] text-2xl text-[#a0c4d8] mb-2">Next Project</span>
              <span className="font-['Playfair_Display'] text-2xl md:text-3xl font-black uppercase tracking-widest text-[#3b2c21]">
                 COMING SOON
              </span>
            </span>
          </button>
          
        </section>

      </main>
    </div>
  );
};
