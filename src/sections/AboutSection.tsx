import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';

export const AboutSection: React.FC = () => {
  const aboutText =
    "Starting with robots, I discovered I could turn ideas into reality. From FIRST Tech Challenge competitions to environmental sensors and underwater vehicles, I keep chasing problems that let me build, measure, and learn something new.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Corner Decorative Icons */}
      {/* Top-left: gear-icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="/images/about/gear-icon.png"
            alt="Mechanical Gear Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] opacity-90 transition-transform duration-700 hover:rotate-45"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: circuit-icon */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-10">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="/images/about/circuit-icon.png"
            alt="Circuit Board Icon"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] opacity-90"
          />
        </FadeIn>
      </div>

      {/* Top-right: plane-icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="/images/about/plane-icon.png"
            alt="Aerospace Plane Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] opacity-90 transition-transform duration-700 hover:-translate-y-2 hover:translate-x-2"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: music-icon */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-10">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="/images/about/music-icon.png"
            alt="Music Icon"
            className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] opacity-90"
          />
        </FadeIn>
      </div>

      {/* Center Content Column */}
      <div className="flex flex-col items-center justify-center max-w-4xl z-20 text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.9}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph */}
        <div className="max-w-[560px] px-4">
          <AnimatedText
            text={aboutText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />
        </div>

        {/* Impact Telemetry Metrics */}
        <FadeIn delay={0.25} y={30} duration={0.8} className="w-full max-w-3xl mt-12 sm:mt-14 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#141414]/80 border border-white/10 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center p-2 text-center">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">16-0</span>
              <span className="text-[10px] sm:text-xs text-[#D7E2EA]/60 uppercase tracking-wider font-light mt-1">Undefeated FTC Streak</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center border-l border-white/10">
              <span className="text-2xl sm:text-3xl font-black text-purple-400 tracking-tight">25+</span>
              <span className="text-[10px] sm:text-xs text-[#D7E2EA]/60 uppercase tracking-wider font-light mt-1">IoT Sensors Deployed</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center border-t md:border-t-0 md:border-l border-white/10">
              <span className="text-2xl sm:text-3xl font-black text-cyan-400 tracking-tight">Top 25</span>
              <span className="text-[10px] sm:text-xs text-[#D7E2EA]/60 uppercase tracking-wider font-light mt-1">NASA JSC Summit</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center border-t md:border-t-0 border-l border-white/10">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">300+</span>
              <span className="text-[10px] sm:text-xs text-[#D7E2EA]/60 uppercase tracking-wider font-light mt-1">Makerspace Students</span>
            </div>
          </div>
        </FadeIn>

        {/* Gap between metrics and button */}
        <div className="h-10 sm:h-12 md:h-14" />

        {/* Contact Button */}
        <FadeIn delay={0.3} y={20} duration={0.7}>
          <ContactButton label="Let's Connect" />
        </FadeIn>
      </div>
    </section>
  );
};
