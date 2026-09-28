import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { JourneySection } from './sections/JourneySection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { PersonalCornerSection } from './sections/PersonalCornerSection';

export const App: React.FC = () => {
  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen w-full relative"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HeroSection */}
      <HeroSection />

      {/* 2. MarqueeSection */}
      <MarqueeSection />

      {/* 3. AboutSection */}
      <AboutSection />

      {/* 4. JourneySection */}
      <JourneySection />

      {/* 5. ProjectsSection */}
      <ProjectsSection />

      {/* 6. AchievementsSection */}
      <AchievementsSection />

      {/* 7. PersonalCornerSection */}
      <PersonalCornerSection />
    </div>
  );
};

export default App;
