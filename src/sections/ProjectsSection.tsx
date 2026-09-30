import React, { useState, useEffect, useRef } from "react";
import { FadeIn } from "../components/FadeIn";
import {
  X,
  ExternalLink,
  Play,
  Radio,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Bot,
  Wind,
  Quote,
  Compass,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export interface MediaItem {
  id: string;
  label: string;
  type: "video" | "image";
  src: string;
  caption: string;
  tag?: string;
}

export interface StoryParagraph {
  title?: string;
  text: string;
}

export interface Project {
  number: string;
  subGroup: "Robotics" | "Devices that solve my concerns";
  category: string;
  categoryColor: string;
  title: string;
  tagline: string;
  excerpt: string;
  storyParagraphs: StoryParagraph[];
  takeaway?: string;
  metrics: { label: string; value: string }[];
  mediaItems: MediaItem[];
  externalLinks: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    number: "01",
    subGroup: "Robotics",
    category: "Robotics",
    categoryColor: "#8B5CF6",
    title: "GART",
    tagline: "FIRST Tech Challenge Team 24751 · GreenAms Robotics",
    excerpt:
      "Starting as a member, I was immediately drawn into the world of robotics, discovering I could turn ideas into reality. From building our first VuaMock robot under a shoestring budget to serving as Head of Mechanics-CAD, I led our team to an undefeated 16-match national championship and advanced to Finalist Alliance runner-up at the FIRST Championship in Texas.",
    storyParagraphs: [
      {
        title: "Starting with Mock GART.",
        text: "Starting as a member, I was immediately drawn into the world of robotics, not because I particularly enjoyed robot competitions or the atmosphere around them, but simply because I had discovered that I could design and build things, and turn an idea into reality. From my first steps, such as learning to use mechanical tools and design software, studying design principles, adjusting settings and printing my first 3D-printed part, placing my first CNC order, and making my first cuts of wood, each experience felt new because it was the first time I had ever built something myself.",
      },
      {
        text: "In my first internal Mock GART competition, I became a team captain. Despite having little experience, I learned for the first time how to work as a team, coordinate tasks across different divisions, and design and fabricate my first robot. More importantly, I learned how to prototype under a limited budget: simplifying mechanisms, finding affordable materials, and visiting Hanoi's mechanical markets to compare prices and source parts for our first VuaMock robot. Although we finished second, the competition became the first event that sparked my intense passion for engineering and motivated me to go further.",
      },
      {
        title: "FIRST Tech Challenge (FTC).",
        text: "Continuing my journey with GART, I joined the FIRST Tech Challenge team and was selected as Head of Mechanics-CAD. At FIRST, I competed in events such as the Thanh Hoa Scrimmage, continuously improving our designs and mechanisms. I applied what I had learned from building our Mock GART robot, especially simplifying designs and reducing unnecessary iterations, while using calculation and simulation software to keep our designs efficient and affordable.",
      },
      {
        text: "These efforts helped us win the FIRST Tech Challenge Vietnam National Round with a 16-match winning streak and earn the Design Award. After winning the national round, we continued refining our robot for the World Championship in Texas, where we became the top alliance in the Edison Division and advanced to the Finalist Alliance, finishing second overall.",
      },
      {
        title: "Leadership & Mentoring.",
        text: "As Head of Mechanics, I led my department of 40 members, training them in hardware basics and creating a training curriculum on design, 3D printing, and manufacturing. I also continued mentoring at internal competitions, where I mentored Team Bluebook and helped them build the championship-winning robot at the following year's Mock GART competition, something I had not been able to accomplish myself.",
      },
      {
        title: "Training & GART Camp.",
        text: "Alongside this, I taught and developed lesson plans and training sessions for 34 mentors of the specializations department and organized GART Camp, a robotics summer camp where we taught VEX IQ at the American Embassy's community center to younger students. Through the camp, I hoped to further share my passion for building and programming with students who were just beginning to discover it.",
      },
      {
        title: "GART Expo.",
        text: "As well as training and competing, GART Expo is an annual event organized to spread robotics by hosting STEM activities and inviting teams from Vietnam, featuring robotics showcases, interactive activities, and of course the Mock GART competition.",
      },
    ],
    takeaway:
      "At GART, I learned the first steps of being an engineer. These experiences became the first building blocks for me to continue developing and pursuing my passion for engineering in the future.",
    metrics: [
      {
        label: "FTC National Round",
        value: "16-Match Winning Streak & Design Award",
      },
      {
        label: "World Championship",
        value: "Edison Division Finalist Alliance",
      },
      { label: "Department Leadership", value: "Led 40 Members" },
      { label: "Mentoring & Outreach", value: "34 Mentors & US Embassy Camp" },
    ],
    mediaItems: [
      {
        id: "video",
        label: "Match Action Video",
        type: "video",
        src: "/videos/ftc-action.mp4",
        caption: "FTC Match Action & High-Speed Intake Testing",
        tag: "Video",
      },
      {
        id: "mock",
        label: "Mock GART (Blue Team)",
        type: "image",
        src: "/images/projects/gart/robot-01.jpg",
        caption: "Mock GART Blue Team robot design and CAD mechanism",
        tag: "Mock GART",
      },
      {
        id: "scrimmage",
        label: "FTC – Thanh Hoa Scrimmage",
        type: "image",
        src: "/images/projects/gart/thanh-hoa-scrimmage.jpg",
        caption: "Pre-season tournament scrimmage testing and mechanism tuning",
        tag: "Scrimmage",
      },
      {
        id: "national",
        label: "FTC – National",
        type: "image",
        src: "/images/projects/gart/national-champion.jpg",
        caption:
          "National Champions with a 16-match winning streak and Design Award",
        tag: "National Champ",
      },
      {
        id: "worlds",
        label: "FTC – Worlds",
        type: "image",
        src: "/images/journey/gart/worlds.jpg",
        caption:
          "Competing in Houston, Texas — Finalist Alliance in Edison Division",
        tag: "Houston Worlds",
      },
      {
        id: "recognition",
        label: "Deputy PM Recognition",
        type: "image",
        src: "/images/achievements/deputy-pm-recognition.jpg",
        caption: "Recognition and national honors for team excellence",
        tag: "Recognition",
      },
      {
        id: "community",
        label: "GART Expo · Camp · Training",
        type: "image",
        src: "/images/journey/gart/camp.jpg",
        caption:
          "Teaching VEX IQ robotics at American Center and hosting GART Expo",
        tag: "Camp & Expo",
      },
    ],
    externalLinks: [
      {
        label: "FIRST Tech Challenge",
        url: "https://www.firstinspires.org/robotics/ftc",
      },
    ],
  },
  {
    number: "02",
    subGroup: "Devices that solve my concerns",
    category: "Environmental Hardware",
    categoryColor: "#10B981",
    title: "EnviroTrack",
    tagline: "Autonomous Air Quality Monitoring Network",
    excerpt:
      "I wanted to use what I learned from competitive robots to contribute to Hanoi's most pressing problem: air pollution. Leading a team of 3, we built EnviroTrack to measure real-time air quality publicly with a predictive mobile app. Challenged at WICO to scale beyond the lab, we redesigned it into 25+ independent devices deployed across Hanoi and Nam Dinh.",
    storyParagraphs: [
      {
        text: "I want to use what I learned from competitive robots to contribute to Hanoi's most pressing problem: air pollution. I led a team of 3 and built EnviroTrack, a system that measures air quality, displays real-time data publicly, with a mobile app for alerts and predictions.",
      },
      {
        text: "At WICO, experts challenged us to think beyond a complete system and consider how it could actually be deployed at scale and in real situations. We redesigned it into a smaller, independent unit and built 25+ refined devices for deployment in markets and train stations across Hanoi and communes in Nam Dinh, in the hope that people can more easily be aware of the air quality around them.",
      },
    ],
    metrics: [
      { label: "Live Field Deployment", value: "25+ Refined Devices Deployed" },
      { label: "Coverage Areas", value: "Hanoi Markets & Stations, Nam Dinh" },
      { label: "Team Structure", value: "Led Team of 3" },
      { label: "International Recognition", value: "WICO Exhibition Award" },
    ],
    mediaItems: [
      {
        id: "video",
        label: "Telemetry Demo Video",
        type: "video",
        src: "/videos/envirotrack-demo.mp4",
        caption: "Live air quality telemetry logging and cloud monitoring",
        tag: "Video",
      },
      {
        id: "device",
        label: "Refined Device Unit",
        type: "image",
        src: "/images/projects/envirotrack/device-01.jpg",
        caption: "Independent modular air quality sensor hardware unit",
        tag: "Device",
      },
      {
        id: "poster",
        label: "WICO Poster & Booth",
        type: "image",
        src: "/images/projects/envirotrack/poster.jpg",
        caption: "Research presentation poster and booth at WICO in Seoul",
        tag: "Poster",
      },
      {
        id: "deployment",
        label: "Public Field Deployment",
        type: "image",
        src: "/images/projects/envirotrack/deployment.jpg",
        caption:
          "Live field installation in public markets and transit stations",
        tag: "Deployment",
      },
    ],
    externalLinks: [
      { label: "ThingSpeak Telemetry", url: "https://thingspeak.com" },
    ],
  },
  {
    number: "03",
    subGroup: "Devices that solve my concerns",
    category: "Aerospace & Marine Robotics",
    categoryColor: "#06B6D4",
    title: "Conrad Challenge",
    tagline: "Autonomous Underwater Vehicle (AUV) for Microplastic Mapping",
    excerpt:
      "EnviroTrack inspired me to tackle more complex environmental challenges: the lack of accessible, large-scale data on microplastic pollution. We developed an autonomous underwater vehicle capable of diving and mapping microplastics in waterways. Over 4 prototype iterations, we were selected as 1 of 25 teams from 1,000+ globally to pitch at NASA Johnson Space Center.",
    storyParagraphs: [
      {
        text: "EnviroTrack made me realize that I wanted to keep working on environmental problems, but I also wanted to challenge myself with something more complex. That led me to the Conrad Challenge, where our team explored a new problem: the lack of accessible, large-scale data on microplastic pollution. (Researchers often rely on small samples taken one by one and expensive lab testing, making it difficult to cover large areas or different depths.)",
      },
      {
        text: "We developed an autonomous underwater vehicle capable of diving and mapping microplastic pollution across lakes and coastal areas. I was in charge of the electrical system and CAD design, which was very different from the robots I had built before: I had to account for buoyancy, COG, waterproofing, diving, signal transmission, and accurate measurement all at once.",
      },
      {
        text: "After 4 iterations, we built a working prototype and became one of 25 teams selected from 1,000+ teams to pitch our product at the Conrad Global Innovation Challenge at Johnson Space Center.",
      },
    ],
    metrics: [
      { label: "Global Selection", value: "Top 25 Teams from 1,000+ Globally" },
      { label: "Pitch Venue", value: "NASA Johnson Space Center" },
      { label: "Engineering Role", value: "Electrical System & CAD Design" },
      { label: "Design Iterations", value: "4 Prototype Iterations" },
    ],
    mediaItems: [
      {
        id: "video",
        label: "AUV Subsea Testing",
        type: "video",
        src: "/videos/conrad-auv.mp4",
        caption: "Autonomous underwater vehicle diving and maneuvering test",
        tag: "Video",
      },
      {
        id: "cad",
        label: "CAD Hull Architecture",
        type: "image",
        src: "/images/projects/conrad/cad-design.jpg",
        caption:
          "Subsea pressure hull CAD design, buoyancy and COG calculations",
        tag: "CAD Model",
      },
      {
        id: "electricals",
        label: "Electrical System",
        type: "image",
        src: "/images/projects/conrad/electricals.jpg",
        caption: "Custom power distribution, subsea motor ESCs and telemetry",
        tag: "Electricals",
      },
      {
        id: "prototype",
        label: "Working Prototype",
        type: "image",
        src: "/images/projects/conrad/prototype.jpg",
        caption:
          "Fourth-generation functional AUV prototype ready for aquatic trials",
        tag: "Prototype",
      },
      {
        id: "summit",
        label: "NASA Johnson Space Center",
        type: "image",
        src: "/images/marquee/conrad/conrad-summit.png",
        caption:
          "Presenting at Conrad Global Innovation Challenge at NASA JSC Starship Gallery",
        tag: "NASA Summit",
      },
    ],
    externalLinks: [
      { label: "Ideon Project Portal", url: "https://ideon.skyhi.vn/about" },
      { label: "Conrad Challenge", url: "https://www.conradchallenge.org" },
    ],
  },
];

export interface ProjectPreviewData {
  title: string;
  projectNumber: string;
  category: string;
  images: {
    src: string;
    label: string;
  }[];
  initialIndex: number;
}

interface CardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
  onPreviewImage: (data: ProjectPreviewData) => void;
  cardRef?: (el: HTMLDivElement | null) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  onOpenDetails,
  onPreviewImage,
  cardRef,
}) => {
  const [activeMediaId, setActiveMediaId] = useState<string>(
    project.mediaItems[0]?.id || "video",
  );

  const activeMedia =
    project.mediaItems.find((m) => m.id === activeMediaId) ||
    project.mediaItems[0];

  const previewImages = project.mediaItems
    .filter((m) => m.type === "image")
    .map((m) => ({
      src: m.src,
      label: `${project.title} — ${m.label}: ${m.caption}`,
    }));

  return (
    <div
      ref={cardRef}
      className="sticky w-full flex justify-center will-change-transform"
      style={{
        top: `calc(4.5rem + ${index * 24}px)`,
        zIndex: 10 + index,
      }}
    >
      <div
        className="card-content-box w-full max-w-6xl rounded-[26px] sm:rounded-[36px] md:rounded-[44px] border border-black/[0.08] bg-white p-5 sm:p-6 md:p-8 flex flex-col gap-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all duration-300 hover:border-black/15 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]"
        style={{
          transformOrigin: "center top",
          transition:
            "filter 0.2s ease-out, opacity 0.2s ease-out, transform 0.2s ease-out",
        }}
      >
        {/* Subtle Ambient Glow */}
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[110px] pointer-events-none opacity-20 -z-10"
          style={{ backgroundColor: project.categoryColor }}
        />

        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-slate-900 leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  {project.subGroup}
                </span>
                <span className="text-xs text-slate-300 hidden sm:inline">
                  •
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${project.categoryColor}18`,
                    color: project.categoryColor,
                    border: `1px solid ${project.categoryColor}35`,
                  }}
                >
                  {project.category}
                </span>
              </div>
              <h3 className="text-slate-900 font-bold text-xl sm:text-2xl md:text-3xl tracking-tight mt-1">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Action Button: Open Full Details Popup */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm text-slate-900 bg-black/[0.04] hover:bg-black/[0.08] border border-black/10 hover:border-black/20 transition-all cursor-pointer shadow-sm group"
            >
              <BookOpen
                size={14}
                className="text-purple-600 group-hover:scale-110 transition-transform"
              />
              <span>View Details</span>
              <ArrowRight
                size={13}
                className="text-slate-500 group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Compact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Left Column: Media Screen */}
          <div className="lg:col-span-6 flex flex-col gap-2.5">
            {/* Main Viewport */}
            <div className="relative rounded-[18px] sm:rounded-[22px] overflow-hidden border border-black/10 bg-slate-950 h-[200px] sm:h-[240px] md:h-[260px] shadow-sm">
              {/* Technical Viewfinder Corner Brackets */}
              <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-white/70 z-20 pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-white/70 z-20 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-white/70 z-20 pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-white/70 z-20 pointer-events-none" />

              {/* Active Media Renderer */}
              {activeMedia.type === "video" ? (
                <div className="w-full h-full relative flex items-center justify-center bg-black group">
                  <video
                    src={activeMedia.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-3 right-3 z-20 pointer-events-none flex items-center justify-between">
                    <span className="text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-white/90 border border-white/15">
                      {activeMedia.caption}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="w-full h-full relative cursor-zoom-in group"
                  onClick={() => {
                    const imgIndex = previewImages.findIndex(
                      (img) => img.src === activeMedia.src,
                    );
                    onPreviewImage({
                      title: project.title,
                      projectNumber: project.number,
                      category: project.category,
                      images: previewImages,
                      initialIndex: imgIndex >= 0 ? imgIndex : 0,
                    });
                  }}
                >
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-white/90 border border-white/15 line-clamp-1">
                      {activeMedia.caption}
                    </span>
                    <span className="text-[9px] font-mono bg-purple-600/90 text-white px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Maximize2 size={9} /> Zoom
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Event Media Switcher Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
              {project.mediaItems.slice(0, 5).map((media) => {
                const isActive = activeMediaId === media.id;
                return (
                  <button
                    key={media.id}
                    type="button"
                    onClick={() => setActiveMediaId(media.id)}
                    className={`px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap cursor-pointer transition-all ${
                      isActive
                        ? "text-white font-medium shadow-sm"
                        : "bg-black/[0.04] hover:bg-black/[0.08] text-slate-600 hover:text-slate-900 border border-black/[0.06]"
                    }`}
                    style={{
                      backgroundColor: isActive
                        ? project.categoryColor
                        : undefined,
                    }}
                  >
                    {media.tag || media.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Excerpt, Metrics & Popup Trigger */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
            {/* Story Excerpt from content.md */}
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal line-clamp-4">
              {project.excerpt}
            </p>

            {/* Key Factual Metrics */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-black/[0.06] text-xs shadow-sm">
              {project.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="flex flex-col border-l-2 pl-2"
                  style={{ borderColor: `${project.categoryColor}80` }}
                >
                  <span className="text-[9px] text-slate-500 uppercase font-mono">
                    {m.label}
                  </span>
                  <span className="text-slate-900 font-semibold text-xs mt-0.5 truncate">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Actions Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-black/[0.06]">
              <button
                type="button"
                onClick={() => onOpenDetails(project)}
                className="inline-flex items-center gap-1.5 text-xs text-purple-600 hover:text-purple-700 font-medium cursor-pointer"
              >
                <span>Read Full Story & View Dossier</span>
                <ArrowRight size={13} />
              </button>

              {project.externalLinks.length > 0 && (
                <a
                  href={project.externalLinks[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <ExternalLink size={12} />
                  <span>{project.externalLinks[0].label}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalMediaId, setModalMediaId] = useState<string>("video");
  const [previewData, setPreviewData] = useState<ProjectPreviewData | null>(
    null,
  );
  const [previewIndex, setPreviewIndex] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "robotics" | "devices"
  >("all");

  // Sync modal media when a project is selected
  useEffect(() => {
    if (selectedProject) {
      setModalMediaId(selectedProject.mediaItems[0]?.id || "video");
    }
  }, [selectedProject]);

  // Keyboard navigation for image preview lightbox and details modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (previewData) {
          setPreviewData(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      } else if (previewData && e.key === "ArrowLeft") {
        setPreviewIndex((prev) =>
          prev === 0 ? previewData.images.length - 1 : prev - 1,
        );
      } else if (previewData && e.key === "ArrowRight") {
        setPreviewIndex((prev) =>
          prev === previewData.images.length - 1 ? 0 : prev + 1,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewData, selectedProject]);

  const handleOpenPreview = (data: ProjectPreviewData) => {
    setPreviewData(data);
    setPreviewIndex(data.initialIndex);
  };

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "robotics") return p.subGroup.includes("Robotics");
    if (activeFilter === "devices") return p.subGroup.includes("Devices");
    return true;
  });

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll effect: blur and dim cards underneath as user scrolls down the stack
  useEffect(() => {
    let ticking = false;

    const updateCardBlur = () => {
      const total = filteredProjects.length;
      if (total <= 1) return;

      for (let i = 0; i < total; i++) {
        const cardEl = cardRefs.current[i];
        if (!cardEl) continue;

        const innerEl = cardEl.querySelector(
          ".card-content-box",
        ) as HTMLElement;
        if (!innerEl) continue;

        // The topmost / last card in the stack never gets covered
        if (i === total - 1) {
          innerEl.style.filter = "blur(0px)";
          innerEl.style.opacity = "1";
          innerEl.style.transform = "scale(1)";
          innerEl.style.pointerEvents = "auto";
          continue;
        }

        // Check the next card (i + 1)
        const nextCardEl = cardRefs.current[i + 1];
        if (!nextCardEl) continue;

        const cardRect = cardEl.getBoundingClientRect();
        const nextRect = nextCardEl.getBoundingClientRect();

        const baseTop = 72; // ~4.5rem in px
        const nextStickyTop = baseTop + (i + 1) * 24;

        // Next card starts covering card i when its top reaches card i's bottom
        const startCoverY = cardRect.bottom;
        const endCoverY = nextStickyTop;
        const totalDistance = Math.max(1, startCoverY - endCoverY);

        let progress = 0;
        if (nextRect.top < startCoverY) {
          progress = Math.min(
            1,
            Math.max(0, (startCoverY - nextRect.top) / totalDistance),
          );
        }

        // Check if there is another card (i + 2) covering further
        let progressNext = 0;
        if (i + 2 < total) {
          const nextNextCardEl = cardRefs.current[i + 2];
          if (nextNextCardEl) {
            const nextNextRect = nextNextCardEl.getBoundingClientRect();
            const nextNextStickyTop = baseTop + (i + 2) * 24;
            const startCoverY2 = nextRect.bottom;
            if (nextNextRect.top < startCoverY2) {
              progressNext = Math.min(
                1,
                Math.max(
                  0,
                  (startCoverY2 - nextNextRect.top) /
                    Math.max(1, startCoverY2 - nextNextStickyTop),
                ),
              );
            }
          }
        }

        const totalProgress = Math.min(1.5, progress + progressNext * 0.5);

        // Apply smooth blur, opacity, and scale to the underneath card
        const blurAmount = (totalProgress * 7).toFixed(1);
        const opacityAmount = Math.max(0.25, 1 - totalProgress * 0.55).toFixed(
          2,
        );
        const scaleAmount = Math.max(0.93, 1 - totalProgress * 0.05).toFixed(3);

        innerEl.style.filter = `blur(${blurAmount}px)`;
        innerEl.style.opacity = opacityAmount;
        innerEl.style.transform = `scale(${scaleAmount})`;
        innerEl.style.pointerEvents = totalProgress >= 0.9 ? "none" : "auto";
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateCardBlur);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    updateCardBlur();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      className="bg-white text-[#0C0C0C] px-4 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-36 w-full z-10 relative select-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <div className="text-center mb-10 sm:mb-14 md:mb-16 flex flex-col items-center">
            <h2
              className="font-black uppercase text-center leading-none tracking-tight text-[#0C0C0C]"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 92px)" }}
            >
              Projects that grew <br /> with me
            </h2>
          </div>
        </FadeIn>

        {/* Compact Stacked Project Cards */}
        <div className="flex flex-col gap-10 sm:gap-14 pb-20">
          {filteredProjects.map((proj, idx) => (
            <ProjectCard
              key={proj.number}
              project={proj}
              index={idx}
              cardRef={(el) => {
                cardRefs.current[idx] = el;
              }}
              onOpenDetails={(p) => setSelectedProject(p)}
              onPreviewImage={handleOpenPreview}
            />
          ))}
        </div>
      </div>

      {/* Comprehensive Details Popup Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121212] border border-[#D7E2EA]/30 rounded-3xl p-5 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col gap-6"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-white/50 uppercase">
                    {selectedProject.subGroup}
                  </span>
                  <span className="text-white/30">•</span>
                  <span
                    className="text-xs uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${selectedProject.categoryColor}33`,
                      color: selectedProject.categoryColor,
                    }}
                  >
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Close (ESC)"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Media Showcase */}
            <div className="flex flex-col gap-3">
              {/* Media Switcher Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {selectedProject.mediaItems.map((media) => {
                  const isActive = modalMediaId === media.id;
                  return (
                    <button
                      key={media.id}
                      type="button"
                      onClick={() => setModalMediaId(media.id)}
                      className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs whitespace-nowrap cursor-pointer transition-all ${
                        isActive
                          ? "text-white font-semibold shadow-md"
                          : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                      }`}
                      style={{
                        backgroundColor: isActive
                          ? selectedProject.categoryColor
                          : undefined,
                      }}
                    >
                      {media.type === "video" ? (
                        <Play
                          size={11}
                          className={
                            isActive ? "text-white" : "text-purple-400"
                          }
                        />
                      ) : (
                        <Radio
                          size={11}
                          className={isActive ? "text-white" : "text-cyan-400"}
                        />
                      )}
                      <span>{media.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Media Container */}
              {(() => {
                const currentMedia =
                  selectedProject.mediaItems.find(
                    (m) => m.id === modalMediaId,
                  ) || selectedProject.mediaItems[0];
                return (
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-white/15">
                    {currentMedia.type === "video" ? (
                      <video
                        src={currentMedia.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={currentMedia.src}
                        alt={currentMedia.label}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-2 left-3 right-3 z-10 pointer-events-none">
                      <span className="text-[11px] font-mono bg-black/80 px-2.5 py-1 rounded text-white/90 border border-white/15">
                        {currentMedia.caption}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Factual Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs">
              {selectedProject.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="flex flex-col border-l-2 pl-2.5"
                  style={{ borderColor: `${selectedProject.categoryColor}60` }}
                >
                  <span className="text-[9px] text-white/50 uppercase font-mono">
                    {m.label}
                  </span>
                  <span className="text-white font-medium text-xs mt-0.5">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Full Story Content (Verbatim from content.md) */}
            <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#D7E2EA]/95 leading-relaxed font-light">
              <h4 className="text-xs uppercase tracking-widest font-mono text-cyan-400 flex items-center gap-2 border-b border-white/10 pb-1">
                <BookOpen size={14} />
                <span>Story & Narrative</span>
              </h4>

              <div className="flex flex-col gap-3.5">
                {selectedProject.storyParagraphs.map((para, pIdx) => (
                  <div key={pIdx} className="flex flex-col gap-1">
                    {para.title && (
                      <h5 className="text-white font-semibold text-sm sm:text-base tracking-tight flex items-center gap-1.5 mt-1">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: selectedProject.categoryColor,
                          }}
                        />
                        <span>{para.title}</span>
                      </h5>
                    )}
                    <p className="leading-relaxed text-[#D7E2EA]/85">
                      {para.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Takeaway Quote Box */}
              {selectedProject.takeaway && (
                <div
                  className="mt-2 p-4 rounded-xl border flex items-start gap-3 bg-purple-950/20"
                  style={{ borderColor: `${selectedProject.categoryColor}50` }}
                >
                  <Quote
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: selectedProject.categoryColor }}
                  />
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase font-semibold block mb-0.5"
                      style={{ color: selectedProject.categoryColor }}
                    >
                      Takeaway
                    </span>
                    <p className="text-xs sm:text-sm italic text-white/95 leading-relaxed font-normal">
                      &ldquo;{selectedProject.takeaway}&rdquo;
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer with External Links & Close */}
            <div className="mt-2 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {selectedProject.externalLinks.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all"
                  >
                    <ExternalLink size={13} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 rounded-full border border-white/20 text-white/70 hover:text-white text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* High-Resolution Image Preview Lightbox Modal */}
      {previewData && (
        <div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md p-3 sm:p-6 select-none"
          onClick={() => setPreviewData(null)}
        >
          {/* Top Navigation & Status Bar */}
          <div
            className="flex items-center justify-between gap-4 pb-3 border-b border-white/10 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                PROJ #{previewData.projectNumber}
              </span>
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-base leading-tight">
                  {previewData.title}
                </h4>
                <p className="text-xs text-cyan-400 font-mono mt-0.5 line-clamp-1">
                  {previewData.images[previewIndex]?.label}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-white/50 hidden sm:inline">
                {previewIndex + 1} / {previewData.images.length}
              </span>
              <button
                type="button"
                onClick={() => setPreviewData(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors flex items-center gap-1.5"
                title="Close"
              >
                <X size={18} />
                <span className="text-xs font-mono hidden sm:inline">ESC</span>
              </button>
            </div>
          </div>

          {/* Main Display Stage with Prev/Next Controls */}
          <div
            className="relative flex-1 flex items-center justify-center my-3 max-w-6xl w-full mx-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Arrow */}
            {previewData.images.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setPreviewIndex((prev) =>
                    prev === 0 ? previewData.images.length - 1 : prev - 1,
                  )
                }
                className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-black border border-white/20 text-white cursor-pointer transition-colors shadow-2xl"
                title="Previous"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Current Image */}
            <img
              src={previewData.images[previewIndex]?.src}
              alt={previewData.images[previewIndex]?.label}
              className="max-h-[66vh] sm:max-h-[72vh] max-w-full w-auto object-contain rounded-xl border border-white/15 shadow-2xl"
            />

            {/* Next Arrow */}
            {previewData.images.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setPreviewIndex((prev) =>
                    prev === previewData.images.length - 1 ? 0 : prev + 1,
                  )
                }
                className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-black border border-white/20 text-white cursor-pointer transition-colors shadow-2xl"
                title="Next"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* Bottom Thumbnail Strip */}
          <div
            className="max-w-xl w-full mx-auto flex items-center justify-center gap-2 pt-2 border-t border-white/10 overflow-x-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {previewData.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPreviewIndex(idx)}
                className={`h-12 sm:h-14 aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-all flex-shrink-0 ${
                  idx === previewIndex
                    ? "border-cyan-400 opacity-100 scale-105"
                    : "border-white/15 opacity-60 hover:opacity-90"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
