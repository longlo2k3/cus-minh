import React, { useState } from "react";
import { FadeIn } from "../components/FadeIn";

interface DeepDivePanel {
  id: string;
  number: string;
  category: string;
  shortTitle: string;
  fullTitle: string;
  highlight: string;
  imageSrc: string;
  imageAlt: string;
  accentColor: string;
  bullets: string[];
  story: string[];
}

const panels: DeepDivePanel[] = [
  {
    id: "samsung",
    number: "01",
    category: "Academic",
    shortTitle: "SAMSUNG SST",
    fullTitle: "Samsung Science & Technology",
    highlight: "Selected as 1 of 10 outstanding students",
    imageSrc: "/images/achievements/samsung-sst-fellowship.jpg",
    imageAlt: "Samsung Science and Technology Membership",
    accentColor: "#38BDF8", // Cyan
    bullets: [
      "Samsung Vietnam R&D Center Fellowship",
      "Advanced level in Samsung's S/W Global Certificate Test (Java / DSA)",
      "Explored semiconductor materials fabrication processes",
      "Capstone: 3D reconstruction tool for preserving artifacts using Gaussian Splatting",
    ],
    story: [
      "I was fortunate to be selected as one of 10 outstanding high school students to be given the Samsung Science and Technology membership by Samsung Vietnam R&D Center, where I received mentorship through the Science and Technology Lab, Samsung Innovation Campus coursework, capstone projects, and Korean-language training.",
      "At Samsung R&D Vietnam, I strengthened my foundation in Java and DSA and earned an Advanced level in Samsung's S/W Global Certificate Test. Through Samsung Innovation Campus, I enrolled in a program to explore the fabrication process of semiconductor materials.",
      "For my capstone project, I worked with fellow members to develop a 3D reconstruction tool for preserving artifacts using Gaussian Splatting.",
    ],
  },
  {
    id: "ins",
    number: "02",
    category: "Industry",
    shortTitle: "INS ENGINEERING",
    fullTitle: "INS Engineering",
    highlight: "3-Month Industrial Internship",
    imageSrc: "/images/achievements/ins-grid-internship.jpg",
    imageAlt: "INS Engineering Industrial Internship",
    accentColor: "#F59E0B", // Amber
    bullets: [
      "Power systems analytics and dynamic modeling for grid operators",
      "Calculated customer RFIs and modeled abnormalities: lightning strikes, outages, disconnections",
      "Utilized ETAP for parameter calculation and PSS/E to develop models",
      "Multi-team engineering coordination under supervisor Martin Dao",
    ],
    story: [
      "Engaging in electrical engineering and actively participating in the field is a way for me to pursue my passion, extending beyond the realm of just theoretical work.",
      "During my three-month summer internship at INS Engineering, which provides analytics, feedback, and studies of power systems for grid operators, I had the opportunity to be trained in power grid systems. I learned how to read RFIs from customers and calculate, translate, and develop dynamic models of power systems to analyze and test abnormalities under different events such as lightning strikes, power outages, and disconnections.",
      "Apart from learning power system physics, which is more specialized and different from the physics we learn at school, I had to study through online lecture notes to build my foundation. I also became familiar with macros software for calculations, organizing data from RFIs, using ETAP to calculate parameters, and PSS/E to develop models.",
    ],
  },
  {
    id: "research",
    number: "03",
    category: "Research",
    shortTitle: "RESEARCH",
    fullTitle: "Control Theory Research",
    highlight: "GTSD Conference · Paper Accepted & Presented",
    imageSrc: "/images/achievements/gtsd-2024.jpg",
    imageAlt: "GTSD Conference Presentation",
    accentColor: "#10B981", // Emerald
    bullets: [
      "Researched NDO-MPC control methods under Assoc. Prof. Vo Thanh Hà",
      "Power distribution systems combining batteries and supercapacitors for vehicles",
      "System modeling, mathematical framework, and MATLAB simulations",
      "Presented research to faculty and researchers at GTSD International Conference",
    ],
    story: [
      "As I explored the field I am determined to pursue, I became interested in control theory for power systems, especially because it combines the mathematics I enjoy with simulation and modeling software. Before this research, I had only briefly encountered PID control while working on path planning for robots. As I went through textbooks and lecture notes, I realized there was much more to control theory than I had initially thought.",
      "Under the guidance of Associate Professor Vo Thanh Hà, I researched NDO-MPC control methods for power distribution systems involving batteries and supercapacitors for vehicles. I became familiar with building system models, developing the mathematical framework behind the control method, and evaluating its performance both mathematically and through MATLAB simulations.",
      "I was especially proud when my research was accepted at the GTSD conference, where I presented my work to students working in similar research areas and received valuable feedback from professors.",
    ],
  },
];

const DeepDiveContent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [viewFullStory, setViewFullStory] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-3 sm:gap-4 h-auto lg:h-[640px] rounded-[28px] sm:rounded-[36px] overflow-hidden">
      {panels.map((panel, idx) => {
        const isActive = activeIndex === idx;

        return (
          <div
            key={panel.id}
            onClick={() => {
              setActiveIndex(idx);
              setViewFullStory(false);
            }}
            onMouseEnter={() => {
              if (window.innerWidth >= 1024) {
                setActiveIndex(idx);
              }
            }}
            className={`relative overflow-hidden rounded-[24px] sm:rounded-[30px] border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer group flex flex-col justify-end ${
              isActive
                ? "lg:flex-[5.5] border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] min-h-[500px] sm:min-h-[540px] lg:min-h-0"
                : "lg:flex-[2.25] border-white/10 opacity-75 hover:opacity-100 min-h-[110px] sm:min-h-[130px] lg:min-h-0"
            }`}
            style={{
              backgroundColor: "#0F0F0F",
            }}
          >
            {/* Full-bleed Editorial Photograph */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={panel.imageSrc}
                alt={panel.imageAlt}
                className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                  isActive
                    ? "scale-105 filter brightness-75 contrast-105"
                    : "scale-100 filter brightness-40 grayscale-[35%] group-hover:brightness-55 group-hover:scale-102"
                }`}
              />

              {/* Dark Vignette Overlay for Text Legibility */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                  isActive
                    ? "bg-gradient-to-t from-black via-black/85 to-black/30"
                    : "bg-gradient-to-t from-black/95 via-black/75 to-black/40"
                }`}
              />
            </div>

            {/* Technical Viewfinder Brackets */}
            <div
              className={`absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 transition-opacity duration-500 z-20 pointer-events-none ${
                isActive
                  ? "border-white/80 opacity-90"
                  : "border-white/20 opacity-40"
              }`}
            />
            <div
              className={`absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 transition-opacity duration-500 z-20 pointer-events-none ${
                isActive
                  ? "border-white/80 opacity-90"
                  : "border-white/20 opacity-40"
              }`}
            />
            <div
              className={`absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 transition-opacity duration-500 z-20 pointer-events-none ${
                isActive
                  ? "border-white/80 opacity-90"
                  : "border-white/20 opacity-40"
              }`}
            />
            <div
              className={`absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 transition-opacity duration-500 z-20 pointer-events-none ${
                isActive
                  ? "border-white/80 opacity-90"
                  : "border-white/20 opacity-40"
              }`}
            />

            {/* INACTIVE PANEL VIEW: Minimalist Category & Short Title */}
            {!isActive && (
              <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full pointer-events-none">
                <div className="flex items-center justify-between font-mono text-xs text-white/50">
                  <span className="font-bold text-white/80">
                    {panel.number}
                  </span>
                  <span className="uppercase tracking-widest">
                    {panel.category}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white/90 group-hover:text-white transition-colors">
                    {panel.shortTitle}
                  </h3>
                </div>
              </div>
            )}

            {/* ACTIVE PANEL VIEW: Positioned Directly Over Image */}
            {isActive && (
              <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col justify-end gap-3.5 sm:gap-4 overflow-y-auto max-h-full scrollbar-none">
                {/* Monospace Indicator Tag */}
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white font-bold tracking-wider">
                    {panel.number} / {panel.shortTitle}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 tracking-wider">
                    {panel.category}
                  </span>
                </div>

                {/* Heading & Direct Highlight */}
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                    {panel.fullTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 font-light mt-1">
                    {panel.highlight}
                  </p>
                </div>

                {/* Key Authentic Bullets or Narrative */}
                {!viewFullStory ? (
                  <div className="flex flex-col gap-2 my-1">
                    {panel.bullets.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/90 font-light"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: panel.accentColor }}
                        />
                        <span className="leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2.5 my-1 text-xs sm:text-sm text-[#D7E2EA]/90 font-light leading-relaxed">
                    {panel.story.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                )}

                {/* Minimal Toggle Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-xs">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewFullStory(!viewFullStory);
                    }}
                    className="text-white/70 hover:text-white underline uppercase tracking-wider cursor-pointer transition-colors text-[11px]"
                  >
                    {viewFullStory ? "Show Highlights" : "Read Full Story"}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const DeepDiveSection: React.FC = () => {
  return (
    <section
      id="deep-dive"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32 w-full z-10 relative select-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0} y={30} duration={0.8}>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 92px)" }}
            >
              Diving Deeper
            </h2>
          </div>
        </FadeIn>

        {/* 3-Panel Expanding Image Accordion */}
        <DeepDiveContent />
      </div>
    </section>
  );
};
