import React from "react";
import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Top Spacer for Fixed Header */}
      <div className="w-full h-16 md:h-20 shrink-0 pointer-events-none" aria-hidden="true" />

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden z-0 px-2 sm:px-4 text-center mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40} duration={0.9}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] text-center"
            style={{
              textShadow: "0 10px 40px rgba(0,0,0,0.8)",
            }}
          >
            Hi, i&apos;m Minh
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait (Centered absolutely with Magnet) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} duration={0.9}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div className="relative group cursor-pointer">
              {/* Subtle background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-t from-purple-600/20 to-transparent blur-2xl rounded-full opacity-60 pointer-events-none -z-10" />
              <img
                src="/images/hero/portrait.png"
                alt="Minh"
                className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] max-h-[85vh] object-cover sm:object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded-t-3xl sm:rounded-b-none"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        {/* Left tagline */}
        <FadeIn delay={0.35} y={20} duration={0.8}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            an engineer driven by curiosity — from robots to research
          </p>
        </FadeIn>

        {/* Right CTA Group */}
        <FadeIn delay={0.5} y={20} duration={0.8}>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-[#D7E2EA] text-xs sm:text-sm uppercase tracking-widest font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <span>Explore Works</span>
            </button>
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
