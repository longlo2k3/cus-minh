import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./sections/HeroSection";
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { DeepDiveSection } from "./sections/DeepDiveSection";
import { CommunityImpactSection } from "./sections/CommunityImpactSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { PersonalCornerSection } from "./sections/PersonalCornerSection";
import { ContactSection } from "./sections/ContactSection";

export const App: React.FC = () => {
  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen w-full relative"
      style={{ overflowX: "clip" }}
    >
      {/* Dynamic Floating Navigation Header */}
      <Header />

      {/* 1. HeroSection */}
      <HeroSection />

      {/* 2. MarqueeSection */}
      <MarqueeSection />

      {/* 3. AboutSection (§1 About Me) */}
      <AboutSection />

      {/* 4. ProjectsSection (§2 Projects that grew with me) */}
      <ProjectsSection />

      {/* 5. DeepDiveSection (§3 Diving deeper / Deep Dive) */}
      <DeepDiveSection />

      {/* 6. CommunityImpactSection (§4 Promoting Education / Community Impact) */}
      <CommunityImpactSection />

      {/* 6. AchievementsSection (§5 Achievements) */}
      <AchievementsSection />

      {/* 7. PersonalCornerSection (§6 My Little Corner) */}
      <PersonalCornerSection />

      {/* 8. ContactSection (Get in Touch / Footer) */}
      <ContactSection />
    </div>
  );
};

export default App;
