import React from "react";
import { FadeIn } from "../components/FadeIn";
import {
  Plane,
  Music,
  Mail,
  Github,
  Linkedin,
  Volume2,
} from "lucide-react";
import { ContactButton } from "../components/ContactButton";
import { AviationSlideshow } from "../components/AviationSlideshow";

export const PersonalCornerSection: React.FC = () => {
  return (
    <section
      id="personal"
      className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10 border-t border-white/10 relative select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={30} duration={0.8}>
            <span className="text-purple-400 font-medium uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              Beyond Engineering & Code
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
            >
              Personal Corner
            </h2>
          </FadeIn>
        </div>

        {/* 2-Column Grid: Aviation & Music */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          {/* Column 1: Aviation (Slideshow isolated in sub-component to prevent parent re-renders) */}
          <FadeIn delay={0.1} y={30} duration={0.8}>
            <div className="h-full rounded-[36px] bg-[#141414] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Plane size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                      Flight Simulation & History
                    </span>
                    <h3 className="text-white font-bold text-xl sm:text-2xl">
                      Aviation & HomeA320
                    </h3>
                  </div>
                </div>

                <p className="text-[#D7E2EA] font-light leading-relaxed text-sm sm:text-base mb-5 opacity-90">
                  I&apos;m drawn to planes and aviation history. My grandfather
                  took me to the VPAF Museum as a kid to climb into fighter
                  jets. I collect 1:400 model aircraft and built a DIY A320
                  flight simulator using wood plates, 3D printing, and
                  electronics. I founded HomeA320, renting it out by the hour to
                  fund my other research and engineering projects.
                </p>

                {/* Isolated Aviation Slideshow Component */}
                <AviationSlideshow />
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span>Featured Project: DIY A320 Simulator</span>
                <span className="text-cyan-400 font-mono">
                  1:1 Scale Cockpit
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Column 2: Music */}
          <FadeIn delay={0.2} y={30} duration={0.8}>
            <div className="h-full rounded-[36px] bg-[#141414] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Music size={20} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">
                      Rock Guitar & Expression
                    </span>
                    <h3 className="text-white font-bold text-xl sm:text-2xl">
                      American Classic Rock
                    </h3>
                  </div>
                </div>

                <p className="text-[#D7E2EA] font-light leading-relaxed text-sm sm:text-base mb-6 opacity-90">
                  I&apos;m a fan of American rock music from the 60s through
                  early 90s, especially anti-war counterculture. For my 14th
                  birthday, my parents gave me an electric guitar. I
                  occasionally perform near Văn Miếu Coffee on summer weekends.
                  Fun fact: the band behind &apos;More Than a Feeling&apos;
                  (Boston) had an MIT electrical engineer who built his own
                  amplifiers.
                </p>

                {/* Music Featured Image */}
                <div className="w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden bg-black/40 mb-4 border border-white/5 relative group/img">
                  <img
                    src="/images/personal/music/electric-guitar.jpg"
                    alt="Vintage Electric Guitar & Tube Amp"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
                      <Volume2 size={16} className="text-purple-400" />
                      <span>Favorite: Boston — More Than a Feeling</span>
                    </div>
                  </div>
                </div>

                {/* Song badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-200 text-xs font-medium">
                    🎸 Electric Guitar
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium">
                    🎶 Anti-War Rock 60s–90s
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium">
                    ☕ Văn Miếu Coffee Sessions
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span>Sound Inspiration: Bon Jovi & Boston</span>
                <span className="text-purple-400 font-mono">Analog Warmth</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Footer / Contact Section */}
        <div
          id="contact"
          className="mt-28 pt-16 border-t border-white/10 flex flex-col items-center text-center"
        >
          <FadeIn delay={0.1} y={20} duration={0.8}>
            <span className="text-purple-400 uppercase tracking-widest text-xs font-medium mb-3 block">
              Let&apos;s Build Together
            </span>
            <h3 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl mb-6">
              Get in Touch
            </h3>
            <p className="text-[#D7E2EA] font-light max-w-lg mb-8 text-sm sm:text-base opacity-80">
              Open to robotics engineering, embedded hardware systems, research
              collaborations, or just a chat about aviation and classic rock.
            </p>
            <div className="mb-12">
              <ContactButton label="Say Hello" />
            </div>

            {/* Social links & email */}
            <div className="flex items-center justify-center gap-6 mb-12 text-[#D7E2EA]">
              <a
                href="mailto:vuducminh07@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors text-sm hover:underline"
              >
                <Mail size={18} className="text-purple-400" />
                <span>vuducminh07@gmail.com</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors text-sm"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors text-sm"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="text-xs text-white/40 font-light flex items-center justify-center gap-1">
              <span>
                © {new Date().getFullYear()} Loug — Builder & Engineer. Designed
                with precision.
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
