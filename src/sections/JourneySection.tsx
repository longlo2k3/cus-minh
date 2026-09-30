import React, { useState } from "react";
import { FadeIn } from "../components/FadeIn";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Tag,
  Image as ImageIcon,
} from "lucide-react";

interface JourneyItem {
  number: string;
  name: string;
  tag: string;
  location?: string;
  summary: string;
  fullStory: string;
  thumbnail: string;
  gallery?: string[];
}

const journeyItems: JourneyItem[] = [
  {
    number: "01",
    name: "Mock GART & First Steps in Hardware",
    tag: "Robotics & CAD",
    location: "Hanoi, Vietnam",
    summary:
      "Starting from zero: learned mechanical tools, 3D printing, CNC fabrication, and designed my first robot under a limited budget. Led team to 2nd place and discovered my passion for engineering.",
    fullStory:
      "Starting as a member, I was immediately drawn into the world of robotics — not because I particularly enjoyed competitions, but because I discovered I could design and build things, turning ideas into reality. From learning mechanical tools and 3D printing my first part to placing my first CNC order and making wood cuts, each step was new. At my first internal Mock GART competition, I became team captain. Despite little experience, I learned how to coordinate tasks across divisions and prototype under a tight budget: simplifying mechanisms, sourcing parts from Hanoi mechanical markets for our VuaMock robot. Finishing second became the spark for my intense engineering journey.",
    thumbnail: "/images/journey/gart/banner.jpg",
    gallery: [
      "/images/marquee/gart/gart-cad.png",
      "/images/journey/gart/camp.jpg",
    ],
  },
  {
    number: "02",
    name: "FIRST Tech Challenge: National Champion to Worlds",
    tag: "Competitive Robotics",
    location: "Houston, Texas · Hanoi",
    summary:
      "Head of Mechanics & CAD for Team 24751. Achieved an undefeated 16-match streak, Design Award, and advanced to Finalist Alliance runner-up at the FIRST Championship in Houston. Trained 40 department members and organized GART Camp at the US Embassy.",
    fullStory:
      "Selected as Head of Mechanics-CAD for Team 24751 GreenAms Robotics, I led mechanical architecture from the Thanh Hoa Scrimmage to winning the FIRST Tech Challenge Vietnam National Championship with an undefeated 16-match streak and the Design Award. We refined the robot for the World Championship in Houston, Texas, reaching Finalist Alliance runner-up in the Edison Division. As department head, I trained 40 members, mentored Team Bluebook to win the next Mock GART championship, developed curricula for 34 mentors, and organized GART Camp teaching VEX IQ at the American Embassy community center.",
    thumbnail: "/images/journey/gart/worlds.jpg",
    gallery: [
      "/images/projects/gart/thanh-hoa-scrimmage.jpg",
      "/images/projects/gart/national-champion.jpg",
    ],
  },
  {
    number: "03",
    name: "EnviroTrack: Autonomous IoT Air Quality Network",
    tag: "Environmental IoT",
    location: "Hanoi & Nam Dinh · Seoul",
    summary:
      "Led a team of 3 to engineer autonomous air quality sensor nodes. Deployed 25+ refined units in Hanoi markets, train stations, and Nam Dinh communes. Awarded Gold Medal at WICO Korea.",
    fullStory:
      "I wanted to use competitive robotics experience to tackle Hanoi’s most pressing issue: air pollution. Leading a 3-member team, we built EnviroTrack: real-time air quality measurement nodes with cloud logging and predictive alerts. At WICO in Seoul, feedback from judges prompted us to redesign the system into smaller, modular, independent units. We fabricated and deployed 25+ weatherproof devices across public markets, railway stations in Hanoi, and rural communes in Nam Dinh, empowering local residents to track environmental data.",
    thumbnail: "/images/journey/envirotrack/sensor.png",
    gallery: [
      "/images/projects/envirotrack/deployment.jpg",
      "/images/marquee/envirotrack/envirotrack-booth.png",
    ],
  },
  {
    number: "04",
    name: "Conrad Challenge: Microplastic Mapping AUV",
    tag: "Aerospace & Marine Robotics",
    location: "NASA Johnson Space Center, Houston",
    summary:
      "Engineered an autonomous underwater vehicle (AUV) with polarized optical scattering to map aquatic microplastic density. Iterated through 4 prototype generations and pitched at NASA Johnson Space Center.",
    fullStory:
      "Seeking to tackle microplastic pollution without expensive lab delays, our team developed an autonomous underwater vehicle capable of submerging and mapping microplastics in lakes and coastal waters. I led electrical systems and CAD architecture — balancing buoyancy, center of gravity, waterproofing, signal telemetry, and sensor accuracy. After 4 prototype iterations, our working AUV was selected as 1 of 25 international finalist teams from 1,000+ entries to pitch at NASA Johnson Space Center Starship Gallery.",
    thumbnail: "/images/journey/conrad/auv.jpg",
    gallery: [
      "/images/marquee/conrad/conrad-summit.png",
      "/images/projects/conrad/electricals.jpg",
    ],
  },
  {
    number: "05",
    name: "Samsung SST: Advanced Computing & Gaussian Splatting",
    tag: "Software & Advanced Labs",
    location: "Samsung Vietnam R&D Center",
    summary:
      "Selected among 10 outstanding high school students for Samsung Science & Technology membership. Advanced Java/DSA certification, semiconductor fabrication coursework, and 3D Gaussian Splatting artifact reconstruction.",
    fullStory:
      "Selected as 1 of 10 students for Samsung Science & Technology membership at Samsung Vietnam R&D Center, I received specialized mentorship across algorithms, semiconductor material fabrication, and Korean language. I earned an Advanced level in Samsung’s S/W Global Certificate Test. For our capstone project, my team developed a 3D reconstruction pipeline using 3D Gaussian Splatting for cultural heritage artifact preservation.",
    thumbnail: "/images/journey/samsung/code.jpg",
    gallery: ["/images/journey/samsung/code.jpg"],
  },
  {
    number: "06",
    name: "Power Grid Analytics: INS Engineering & Trí Nam",
    tag: "Power Systems",
    location: "Hanoi, Vietnam",
    summary:
      "3-month engineering internship studying power distribution grids. Calculated parameter dynamics and modeled lightning strikes, outages, and disconnections using ETAP, PSS/E, and automation macros.",
    fullStory:
      "During my 3-month summer internship at INS Engineering, I was trained in commercial power grid systems. I translated customer RFIs into mathematical models, simulated abnormal grid events (lightning strikes, emergency load disconnects), and developed dynamic models using ETAP and PSS/E. Working alongside professional senior engineers provided invaluable lessons in technical rigor and interdisciplinary teamwork.",
    thumbnail: "/images/journey/ins/grid.jpg",
    gallery: ["/images/journey/ins/grid.jpg"],
  },
  {
    number: "07",
    name: "Control Theory Research: NDO-MPC Vehicular Power",
    tag: "Academic Research",
    location: "GTSD 2024 · Ho Chi Minh City",
    summary:
      "Researched Nonlinear Disturbance Observer Model Predictive Control (NDO-MPC) for battery-supercapacitor hybrid vehicle systems under Assoc. Prof. Vo Thanh Ha. Presented paper at GTSD 2024 International Conference.",
    fullStory:
      "Fascinated by control theory in power systems, I collaborated with Associate Professor Vo Thanh Ha to research NDO-MPC control methods for hybrid battery-supercapacitor vehicular networks. I formulated the mathematical models, built MATLAB simulation testbeds, and evaluated disturbance mitigation performance. Presenting this research to professors and students at the 8th GTSD International Conference cemented my dedication to applied research.",
    thumbnail: "/images/journey/research/gtsd.jpg",
    gallery: ["/images/achievements/gtsd-2024.jpg"],
  },
  {
    number: "08",
    name: "STEMbridge & Community Outreach",
    tag: "Education & Social Impact",
    location: "Lang Son & Hanoi, Vietnam",
    summary:
      "Founded STEMbridge to donate a fully equipped STEM makerspace to 300 students at Quan Son Boarding School (Lang Son) and tailored sensory workshops for deaf students at Xa Dan School. Volunteered for Cosmosics science demos.",
    fullStory:
      "Recognizing my privilege in having access to tools, robotics mentors, and workspaces, I founded STEMbridge to bring practical STEM exploration to underserved communities. At Quan Son Boarding School in mountainous Lang Son, we built and donated a permanent STEM lab and held workshops for 300 students. At Xa Dan School for Deaf Students, we adapted interactive hands-on mechanics for students with disabilities. I also conducted water rocket and holography experiments for Cosmosics and volunteered as a field resetter for Red River VEX V5 tournaments.",
    thumbnail: "/images/journey/stembridge/xadan.jpg",
    gallery: ["/images/journey/volunteer/quanson.jpg"],
  },
];

export const JourneySection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="journey"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full z-10 relative select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2
              className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Journey
            </h2>
          </div>
        </FadeIn>

        {/* Vertical List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {journeyItems.map((item, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <FadeIn key={item.number} delay={i * 0.08} y={25} duration={0.7}>
                <div className="border-b border-[rgba(12,12,12,0.15)] py-7 sm:py-9 transition-colors duration-300 rounded-xl px-2 sm:px-4 group hover:bg-black/[0.015]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8">
                    {/* Left: Thumbnail & Number */}
                    <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                      <div className="relative overflow-hidden rounded-2xl w-[70px] h-[70px] sm:w-[84px] sm:h-[84px] bg-neutral-100 border border-black/10 flex-shrink-0 shadow-sm">
                        <img
                          src={item.thumbnail}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <span
                        className="font-black text-[#0C0C0C] leading-none select-none tracking-tighter block group-hover:translate-x-1 transition-transform duration-300"
                        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Middle: Content */}
                    <div className="flex flex-col gap-1.5 flex-grow">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/5 text-purple-700">
                          <Tag size={12} />
                          {item.tag}
                        </span>
                        {item.location && (
                          <span className="inline-flex items-center gap-1 text-[11px] text-neutral-500 font-light">
                            <MapPin size={12} />
                            {item.location}
                          </span>
                        )}
                      </div>

                      <h3
                        className="font-semibold uppercase text-[#0C0C0C] tracking-tight"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.8rem)" }}
                      >
                        {item.name}
                      </h3>

                      <p
                        className="font-light leading-relaxed max-w-2xl text-neutral-600"
                        style={{ fontSize: "clamp(0.85rem, 1.3vw, 1.05rem)" }}
                      >
                        {item.summary}
                      </p>
                    </div>

                    {/* Right: Expand Field Note Button */}
                    <div className="flex-shrink-0 self-start md:self-center">
                      <button
                        type="button"
                        onClick={() => toggleExpand(i)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                          isExpanded
                            ? "bg-[#0C0C0C] text-white"
                            : "bg-black/5 text-[#0C0C0C] hover:bg-black/10"
                        }`}
                      >
                        <span>{isExpanded ? "Close" : "Read Story"}</span>
                        {isExpanded ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Story Drawer — NO ANIMATION / ZERO FLICKER */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-dashed border-black/15 bg-neutral-50/80 rounded-2xl p-5 sm:p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        <div className="lg:col-span-8 flex flex-col gap-3">
                          <p className="text-neutral-800 font-normal leading-relaxed text-sm sm:text-base">
                            {item.fullStory}
                          </p>
                        </div>

                        {/* Gallery strip if available */}
                        {item.gallery && item.gallery.length > 0 && (
                          <div className="lg:col-span-4 flex flex-col gap-2">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 flex items-center gap-1">
                              <ImageIcon size={12} />
                              Gallery
                            </span>
                            <div className="grid grid-cols-2 gap-2">
                              {item.gallery.map((imgSrc, imgIdx) => (
                                <div
                                  key={imgIdx}
                                  className="relative rounded-xl overflow-hidden aspect-video bg-neutral-200 border border-black/10 shadow-sm"
                                >
                                  <img
                                    src={imgSrc}
                                    alt={`Artifact ${imgIdx + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
