import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PortfolioView } from "./views/PortfolioView";
import { InternhubCaseStudyView } from "./views/InternhubCaseStudyView";
import { NepNhaCaseStudyView } from "./views/NepNhaCaseStudyView";
import { TiktokSummitCaseStudyView } from "./views/TiktokSummitCaseStudyView";
import { HdbankCaseStudyView } from "./views/HdbankCaseStudyView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioView />} />
        <Route path="/case-study/internhub" element={<InternhubCaseStudyView />} />
        <Route path="/case-study/nep-nha" element={<NepNhaCaseStudyView />} />
        <Route path="/case-study/tiktok-summit" element={<TiktokSummitCaseStudyView />} />
        <Route path="/case-study/hdbank" element={<HdbankCaseStudyView />} />
      </Routes>
    </BrowserRouter>
  );
}
