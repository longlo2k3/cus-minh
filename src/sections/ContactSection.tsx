import React from "react";
import { FadeIn } from "../components/FadeIn";
import { Mail, Github, Linkedin } from "lucide-react";
import { ContactButton } from "../components/ContactButton";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 w-full z-40 relative select-none shadow-2xl overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <FadeIn delay={0.1} y={20} duration={0.8}>
          <h2 className="hero-heading font-black uppercase text-center text-4xl sm:text-6xl md:text-7xl mb-6 text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-[#D7E2EA] font-light max-w-lg mx-auto mb-10 text-sm sm:text-base opacity-80 leading-relaxed">
            Open to robotics engineering, embedded hardware systems, research
            collaborations, or just a chat about aviation and classic rock.
          </p>
          <div className="mb-12 flex justify-center">
            <ContactButton label="Say Hello" />
          </div>

          {/* Social links & email */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12 text-[#D7E2EA]">
            <a
              href="mailto:vuducminh07@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors text-sm hover:underline"
            >
              <Mail size={18} className="text-purple-400" />
              <span>vuducminh07@gmail.com</span>
            </a>
            <span className="text-white/20 hidden sm:inline">•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors text-sm"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <span className="text-white/20 hidden sm:inline">•</span>
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
              © {new Date().getFullYear()} Minh — Builder & Engineer. Designed
              with precision.
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
