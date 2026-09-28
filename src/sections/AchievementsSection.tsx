import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Award, Trophy, X, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  image: string;
  isHighlight?: boolean;
  citation?: string;
}

const achievements: Achievement[] = [
  {
    title: 'Deputy Prime Minister Recognition & Commendation',
    organization: 'Government of Vietnam',
    year: '2024',
    description: 'Special official commendation for outstanding STEM innovation and representing Vietnam at global robotics finals.',
    image: '/images/achievements/deputy-pm-recognition.jpg',
    isHighlight: true,
    citation: 'Official governmental honor recognizing national robotics excellence and youth technological empowerment.',
  },
  {
    title: 'FIRST Tech Challenge National Champion',
    organization: 'FIRST Tech Challenge Vietnam 2024',
    year: '2024',
    description: 'Undefeated 16-match winning streak, winning alliance captain & national champion banner with Team 24751.',
    image: '/images/achievements/ftc-national-champion.jpg',
    isHighlight: true,
    citation: 'Achieved complete 16-0 undefeated record throughout qualification, playoffs, and championship finals.',
  },
  {
    title: 'Conrad Challenge Global Innovation Finalist',
    organization: 'NASA Johnson Space Center Houston',
    year: '2024',
    description: 'Selected top 25 internationally to present autonomous microplastic mapping AUV at Starship Gallery.',
    image: '/images/achievements/conrad-summit-finalist.png',
    isHighlight: true,
    citation: 'Pitched to NASA aerospace engineers, entrepreneurs, and environmental scientists at Space Center Houston.',
  },
  {
    title: 'WICO 2024 Gold Medal Award',
    organization: 'World Invention Creativity Olympic — Seoul, South Korea',
    year: '2024',
    description: 'Gold award recognition for the EnviroTrack autonomous air pollution monitoring & forecasting system.',
    image: '/images/achievements/wico-gold-award.png',
    citation: 'Honored by international jury for real-world deployment of 25+ live sensor units across Vietnam communities.',
  },
  {
    title: 'FTC World Championship Finalist Alliance Runner-Up',
    organization: 'FIRST Championship Houston, Texas',
    year: '2024',
    description: 'Edison Division Finalist Alliance runner-up representing Vietnam on the highest global robotics stage.',
    image: '/images/achievements/ftc-world-championship.jpg',
    citation: 'Ranked top tier among 200+ international elite robotics teams at the George R. Brown Convention Center.',
  },
  {
    title: 'GTSD 2024 Conference Presentation & Paper',
    organization: '8th International Conf on Green Technology & Sustainable Development',
    year: '2024',
    description: 'Researched and presented mathematical framework for NDO-MPC vehicular power distribution networks.',
    image: '/images/achievements/gtsd-2024.jpg',
    citation: 'Peer-reviewed research presentation published in international conference proceedings under Assoc. Prof. Vo Thanh Ha.',
  },
  {
    title: 'FTC National Engineering & Design Award',
    organization: 'FIRST Vietnam Robotics Championship',
    year: '2024',
    description: 'Recognized for industrial-grade robot CAD modeling, custom mechanism simplicity, and precision fabrication.',
    image: '/images/achievements/gart-design-award.png',
    citation: 'Awarded for exceptional CAD simulation, rapid prototyping, and cost-effective robust mechanical architecture.',
  },
];

export const AchievementsSection: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section
      id="achievements"
      className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 w-full relative select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={40} duration={0.8}>
            <span className="text-xs uppercase tracking-widest font-semibold text-purple-400 block mb-3">
              National Honors & International Accolades
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Achievements
            </h2>
          </FadeIn>
        </div>

        {/* Bento Grid layout for achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, index) => (
            <FadeIn key={index} delay={index * 0.08} y={30} duration={0.7}>
              <div
                onClick={() => setSelectedAchievement(item)}
                className={`rounded-[28px] bg-[#141414] border p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 shadow-xl h-full cursor-pointer relative overflow-hidden ${
                  item.isHighlight
                    ? 'border-purple-500/40 hover:border-purple-400'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                {/* Highlight Badge */}
                {item.isHighlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600/30 to-transparent px-4 py-1 rounded-bl-xl text-[10px] font-mono text-purple-300 uppercase tracking-widest flex items-center gap-1 z-10 pointer-events-none">
                    <Sparkles size={10} />
                    <span>Special Honor</span>
                  </div>
                )}

                {/* Image Container with Viewfinder Corner Brackets */}
                <div className="w-full h-[220px] rounded-2xl overflow-hidden bg-[#1c1c1c] mb-4 relative">
                  {/* Viewfinder brackets */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-white/40 z-10 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-white/40 z-10 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-white/40 z-10 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-white/40 z-10 pointer-events-none" />

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-white border border-white/10">
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-medium uppercase tracking-wider mb-1.5">
                    <Award size={14} className="flex-shrink-0" />
                    <span className="truncate">{item.organization}</span>
                  </div>
                  <h3 className="text-[#D7E2EA] font-semibold text-lg leading-snug group-hover:text-white transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom inspect action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="font-mono text-[11px] uppercase tracking-wider">Inspect Proof</span>
                  <ExternalLink size={13} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox Proof Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#141414] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-5 right-5 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-video bg-black/50 mb-6 border border-white/10">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-widest mb-2">
                <ShieldCheck size={16} />
                <span>{selectedAchievement.organization} • {selectedAchievement.year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {selectedAchievement.title}
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                {selectedAchievement.citation || selectedAchievement.description}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Proof
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
