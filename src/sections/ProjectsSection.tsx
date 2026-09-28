import React, { useState, useEffect } from "react";
import { FadeIn } from "../components/FadeIn";
import { LiveProjectButton } from "../components/LiveProjectButton";
import {
  X,
  Trophy,
  Users,
  Wrench,
  ExternalLink,
  Play,
  Radio,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Sparkles,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Project {
  number: string;
  category: string;
  categoryColor: string;
  title: string;
  role: string;
  challenge: string;
  solution: string;
  summary: string;
  fullNarrative: string;
  telemetry: { label: string; value: string }[];
  highlights: string[];
  videoSrc?: string;
  videoCaption?: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  cadUrl?: string;
  liveUrl?: string;
  externalLabel?: string;
}

const projects: Project[] = [
  {
    number: "01",
    category: "Robotics & CAD Engineering",
    categoryColor: "#8B5CF6",
    title: "GART / FIRST Tech Challenge 24751",
    role: "Head of Mechanics & CAD Architecture",
    challenge:
      "Designing and prototyping a competition robot with limited budget, high-speed intake, low center-of-gravity, and sub-second game element indexing under intense tournament stress.",
    solution:
      "Engineered ground-up CAD in Onshape with finite element simulation. Utilized custom CNC aluminum chassis, carbon-reinforced 3D printed components, and optimized motor gearboxes. Led team to 16-0 undefeated National Championship.",
    summary:
      "Engineered competition robots from ground-up CAD to precision fabrication. Led Team 24751 through a 16-match undefeated streak to become Vietnam National Champions and FTC Worlds Finalist Alliance runner-up in Houston, Texas.",
    fullNarrative:
      "Starting from zero with the Mock GART competition, I served as team captain and designed our first robot, VuaMock, on a shoestring budget by sourcing raw materials from Hanoi mechanical markets. Stepping up to FIRST Tech Challenge as Head of Mechanics-CAD, I led our 40-member department from the Thanh Hoa Scrimmage through the National Championship with a 16-0 undefeated record and the Design Award. Refined for the World Championship in Houston, Texas, our robot achieved Finalist Alliance runner-up in the Edison Division. Beyond competition, I developed mechanics curricula, mentored Team Bluebook to another championship, and organized GART Camp teaching VEX IQ at the US Embassy community center.",
    telemetry: [
      { label: "CAD Platform", value: "Onshape & Fusion 360" },
      { label: "Chassis Material", value: "CNC 6061 Alum & Carbon PLA" },
      { label: "Match Record", value: "16-0 Undefeated National Run" },
      { label: "Global Standing", value: "Edison Division Finalist Runner-Up" },
    ],
    highlights: [
      "Engineered full parametric CAD models with kinetic mechanism motion studies before cutting raw stock.",
      "Designed high-throughput active intake rollers and low-friction dual-stage linear slides.",
      "Achieved undefeated 16-match winning streak at FTC Vietnam National Championship 2024.",
      "Secured prestigious Design Award for innovative robot chassis, intake reliability, and structural rigidity.",
      "Represented Vietnam at FIRST Championship Houston, reaching Finalist Alliance Runner-Up in the Edison Division.",
    ],
    videoSrc: "/videos/ftc-action.mp4",
    videoCaption: "FTC Match Action & High-Speed Intake Testing",
    col1Image1: "/images/projects/gart/robot-01.jpg",
    col1Image2: "/images/projects/gart/thanh-hoa-scrimmage.jpg",
    col2Image: "/images/projects/gart/national-champion.jpg",
    cadUrl: "https://www.firstinspires.org/robotics/ftc",
    liveUrl: "https://www.firstinspires.org/robotics/ftc",
    externalLabel: "FIRST Tech Challenge",
  },
  {
    number: "02",
    category: "IoT & Environmental Hardware",
    categoryColor: "#10B981",
    title: "EnviroTrack: IoT Air Quality Network",
    role: "Team Lead & Hardware System Designer",
    challenge:
      "Hanoi faces severe PM2.5 air pollution, yet existing monitoring stations are sparse, stationary, and expensive. Public awareness lacks granular neighborhood real-time data.",
    solution:
      "Built autonomous, modular sensor units integrating PMS7003 laser particle sensors, LilyGO ESP32, and dual-failover GSM 4G/Wi-Fi telemetry with 1D CNN threshold forecasting.",
    summary:
      "Engineered an autonomous IoT air-quality monitoring system with 25+ live sensor units deployed across Hanoi and Nam Dinh, presented at WICO Korea with gold recognition.",
    fullNarrative:
      "I wanted to use competitive robotics experience to tackle Hanoi’s most pressing environmental issue: air pollution. Leading a 3-member team, we engineered EnviroTrack to measure real-time air quality, log metrics publicly to ThingSpeak cloud, and alert citizens via mobile forecasts. At WICO in Seoul, feedback from judges inspired us to transition from a bulky prototype into ultra-compact, modular, independent units. We fabricated and deployed 25+ refined devices in public produce markets, train stations in Hanoi, and rural communes in Nam Dinh.",
    telemetry: [
      { label: "MCU Controller", value: "LilyGO T-Call ESP32" },
      { label: "Optical Sensors", value: "Plantower PMS7003 & SHT30" },
      { label: "Telemetry Link", value: "GSM 4G LTE & Wi-Fi Dual Failover" },
      { label: "Live Deployment", value: "25+ Public Urban & Rural Nodes" },
    ],
    highlights: [
      "Custom LilyGO ESP32 low-power firmware with automatic deep sleep and sensor warm-up cycles.",
      "Weatherproof 3D-printed and laser-cut modular enclosures engineered for 24/7 outdoor operation.",
      "Implemented 1D CNN time-series forecasting model predicting pollution spikes up to 4 hours ahead.",
      "Awarded Gold Medal at WICO (World Invention Creativity Olympic) 2024 in Seoul, South Korea.",
      "Live field deployments in Hanoi railway hubs, local marketplaces, and rural Nam Dinh communes.",
    ],
    videoSrc: "/videos/envirotrack-demo.mp4",
    videoCaption: "Live System Telemetry & Field Deployment Demo",
    col1Image1: "/images/projects/envirotrack/device-01.jpg",
    col1Image2: "/images/projects/envirotrack/poster.jpg",
    col2Image: "/images/projects/envirotrack/deployment.jpg",
    cadUrl: "https://thingspeak.com",
    liveUrl: "https://thingspeak.com",
    externalLabel: "ThingSpeak Cloud Portal",
  },
  {
    number: "03",
    category: "Aerospace & Marine Robotics",
    categoryColor: "#06B6D4",
    title: "Conrad Challenge — Autonomous Underwater Vehicle",
    role: "Electricals & Mechanical CAD Lead",
    challenge:
      "Mapping aquatic microplastic pollution currently relies on tedious manual bottle sampling and costly laboratory spectrometry, preventing large-scale depth-resolved geospatial surveying.",
    solution:
      "Engineered an autonomous underwater robot (AUV) utilizing polarized optical scattering to detect microplastic concentrations in-situ, balanced with precision depth control.",
    summary:
      "Engineered an autonomous underwater robot (AUV) equipped with optical polarization sensing to map microplastic density in waterways, selected for the Global Innovation Summit at NASA Johnson Space Center.",
    fullNarrative:
      "EnviroTrack proved we could tackle environmental challenges, but I wanted to push into harsher, more complex physical dynamics. Our team targeted microplastic pollution in waterways. I served as Electrical and Mechanical CAD Lead. Building an underwater robot was radically different from wheeled robotics: we had to balance buoyancy, center of gravity (COG), dynamic waterproofing, depth pressure, and optical polarization sensing simultaneously. Over 4 prototype iterations, we engineered a functional AUV that earned selection as 1 of 25 teams globally from 1,000+ entries to pitch at NASA Johnson Space Center Starship Gallery.",
    telemetry: [
      { label: "Pressure Hull", value: "Sealed Acrylic & 6061-T6 Alum" },
      { label: "Propulsion", value: "Brushless DC with Bidirectional ESCs" },
      {
        label: "Optical Sensing",
        value: "Polarized Camera & Particle Scatter",
      },
      { label: "NASA Summit", value: "Top 25 Global Finalist Teams" },
    ],
    highlights: [
      "Designed hydrodynamic aluminum chassis and acrylic cylindrical pressure vessel rated for water depth.",
      "Calculated center-of-buoyancy versus center-of-gravity to guarantee positive static righting moments.",
      "Developed custom power distribution boards, brushless thruster ESCs, and sub-surface telemetry.",
      "Integrated polarized optical camera system detecting microplastic particles via circular scatter signatures.",
      "Selected to present at NASA Johnson Space Center Starship Gallery to astronauts and aerospace leaders.",
    ],
    videoSrc: "/videos/conrad-auv.mp4",
    videoCaption: "Sub-surface Hydrodynamic Testing & Navigation",
    col1Image1: "/images/projects/conrad/cad-design.jpg",
    col1Image2: "/images/projects/conrad/electricals.jpg",
    col2Image: "/images/projects/conrad/prototype.jpg",
    cadUrl: "https://ideon.skyhi.vn/about",
    liveUrl: "https://ideon.skyhi.vn/about",
    externalLabel: "Ideon Project Portal",
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
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  onOpenDetails,
  onPreviewImage,
}) => {
  const [activeMediaTab, setActiveMediaTab] = useState<
    "video" | "cad" | "field"
  >("video");
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);

  const projectImages = [
    {
      src: project.col1Image1,
      label: `${project.title} — CAD Architecture & Mechanism Spec`,
    },
    {
      src: project.col2Image,
      label: `${project.title} — Field & Deployment Evidence`,
    },
    {
      src: project.col1Image2,
      label: `${project.title} — Competition Live Footage Snapshot`,
    },
  ];

  return (
    <div
      className="sticky w-full flex justify-center"
      style={{
        top: `calc(5rem + ${index * 24}px)`,
        zIndex: 10 + index,
      }}
    >
      <div className="w-full max-w-6xl rounded-[28px] sm:rounded-[38px] md:rounded-[46px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl relative overflow-hidden">
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white"
                  style={{
                    backgroundColor: `${project.categoryColor}33`,
                    color: project.categoryColor,
                  }}
                >
                  {project.category}
                </span>
                <span className="text-xs text-white/40 hidden sm:inline">
                  •
                </span>
                <span className="text-xs text-white/60 font-light hidden sm:inline">
                  {project.role}
                </span>
              </div>
              <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-2xl md:text-3xl tracking-tight mt-1">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LiveProjectButton
              onClick={() => onOpenDetails(project)}
              label="Inspect Dossier"
            />
          </div>
        </div>

        {/* Media Switching Tabs — NO DELAY, NO ANIMATION */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveMediaTab("video")}
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer ${
                activeMediaTab === "video"
                  ? "bg-purple-600 text-white font-medium"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              <Play
                size={12}
                className={
                  activeMediaTab === "video" ? "text-white" : "text-purple-400"
                }
              />
              <span>Live Action Footage</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMediaTab("cad")}
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer ${
                activeMediaTab === "cad"
                  ? "bg-purple-600 text-white font-medium"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              <Wrench size={12} />
              <span>CAD & Mechanism</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMediaTab("field")}
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer ${
                activeMediaTab === "field"
                  ? "bg-purple-600 text-white font-medium"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              <Radio size={12} />
              <span>Field & Deployment</span>
            </button>
          </div>

          {/* Quick Telemetry Indicators */}
          <div className="hidden lg:flex items-center gap-3 text-[11px] text-white/50 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {project.telemetry[0].label}: {project.telemetry[0].value}
            </span>
            <span>•</span>
            <span className="text-purple-300 font-medium">
              {project.telemetry[2].value}
            </span>
          </div>
        </div>

        {/* Main Media & Engineering Breakdown Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column: Media Stage with Technical Viewfinder Corner Brackets */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden border border-white/15 bg-black h-[240px] sm:h-[300px] md:h-[340px]">
              {/* L-shaped Viewfinder Corner Brackets (Static, No Animation) */}
              <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-white/70 z-20 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-white/70 z-20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-white/70 z-20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-white/70 z-20 pointer-events-none" />

              {/* INSTANT Media Switch Without Lag or Animation */}
              {activeMediaTab === "video" && project.videoSrc ? (
                <div className="w-full h-full relative flex items-center justify-center bg-black">
                  <video
                    src={project.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : activeMediaTab === "cad" ? (
                <div
                  className="w-full h-full relative cursor-zoom-in group"
                  onClick={() =>
                    onPreviewImage({
                      title: project.title,
                      projectNumber: project.number,
                      category: project.category,
                      images: projectImages,
                      initialIndex: 0,
                    })
                  }
                >
                  <img
                    src={project.col1Image1}
                    alt={`${project.title} CAD`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-full bg-black/80 hover:bg-black text-white text-[11px] font-mono flex items-center gap-1.5 border border-white/20 shadow-lg pointer-events-none">
                    <Maximize2 size={12} className="text-cyan-400" />
                    <span>Click để preview</span>
                  </div>
                </div>
              ) : (
                <div
                  className="w-full h-full relative cursor-zoom-in group"
                  onClick={() =>
                    onPreviewImage({
                      title: project.title,
                      projectNumber: project.number,
                      category: project.category,
                      images: projectImages,
                      initialIndex: 1,
                    })
                  }
                >
                  <img
                    src={project.col2Image}
                    alt={`${project.title} Field`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-full bg-black/80 hover:bg-black text-white text-[11px] font-mono flex items-center gap-1.5 border border-white/20 shadow-lg pointer-events-none">
                    <Maximize2 size={12} className="text-cyan-400" />
                    <span>Click để preview</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Preview Thumbnail Strip (Clicking switches active media, hover icon opens full preview) */}
            <div className="grid grid-cols-3 gap-2">
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => setActiveMediaTab("video")}
                  className={`w-full relative rounded-xl overflow-hidden aspect-video border cursor-pointer ${
                    activeMediaTab === "video"
                      ? "border-purple-400"
                      : "border-white/10 opacity-70"
                  }`}
                >
                  <img
                    src={project.col1Image2}
                    alt="Video Preview"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 left-1.5 text-[8px] font-mono uppercase bg-black/80 px-1 py-0.5 rounded text-white flex items-center gap-1">
                    <Play size={8} /> Footage
                  </span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPreviewImage({
                      title: project.title,
                      projectNumber: project.number,
                      category: project.category,
                      images: projectImages,
                      initialIndex: 2,
                    });
                  }}
                  className="absolute top-1 right-1 z-10 p-1 rounded bg-black/80 hover:bg-purple-600 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  title="Preview ảnh footage"
                >
                  <Maximize2 size={10} />
                </button>
              </div>

              <div className="relative group">
                <button
                  type="button"
                  onClick={() => setActiveMediaTab("cad")}
                  className={`w-full relative rounded-xl overflow-hidden aspect-video border cursor-pointer ${
                    activeMediaTab === "cad"
                      ? "border-purple-400"
                      : "border-white/10 opacity-70"
                  }`}
                >
                  <img
                    src={project.col1Image1}
                    alt="CAD Preview"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 left-1.5 text-[8px] font-mono uppercase bg-black/80 px-1 py-0.5 rounded text-white flex items-center gap-1">
                    <Wrench size={8} /> CAD Spec
                  </span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPreviewImage({
                      title: project.title,
                      projectNumber: project.number,
                      category: project.category,
                      images: projectImages,
                      initialIndex: 0,
                    });
                  }}
                  className="absolute top-1 right-1 z-10 p-1 rounded bg-black/80 hover:bg-purple-600 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  title="Preview ảnh CAD"
                >
                  <Maximize2 size={10} />
                </button>
              </div>

              <div className="relative group">
                <button
                  type="button"
                  onClick={() => setActiveMediaTab("field")}
                  className={`w-full relative rounded-xl overflow-hidden aspect-video border cursor-pointer ${
                    activeMediaTab === "field"
                      ? "border-purple-400"
                      : "border-white/10 opacity-70"
                  }`}
                >
                  <img
                    src={project.col2Image}
                    alt="Deployment Preview"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 left-1.5 text-[8px] font-mono uppercase bg-black/80 px-1 py-0.5 rounded text-white flex items-center gap-1">
                    <Radio size={8} /> Field Deployment
                  </span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPreviewImage({
                      title: project.title,
                      projectNumber: project.number,
                      category: project.category,
                      images: projectImages,
                      initialIndex: 1,
                    });
                  }}
                  className="absolute top-1 right-1 z-10 p-1 rounded bg-black/80 hover:bg-purple-600 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  title="Preview ảnh thực địa"
                >
                  <Maximize2 size={10} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: EXPANDED Engineering Content On The Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Problem & Solution Card */}
            <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 flex flex-col gap-2.5">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-purple-400 block mb-1">
                  Problem Context
                </span>
                <p className="text-xs sm:text-[13px] text-[#D7E2EA]/80 font-light leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 block mb-1">
                  Engineering Solution
                </span>
                <p className="text-xs sm:text-[13px] text-[#D7E2EA] font-normal leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Technical Highlights (Directly on Card) */}
            <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 flex flex-col gap-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 flex items-center gap-1.5">
                <Trophy size={13} />
                <span>Key Technical Breakthroughs</span>
              </span>
              <ul className="space-y-1.5">
                {project.highlights.slice(0, 3).map((hl, hlIdx) => (
                  <li
                    key={hlIdx}
                    className="flex items-start gap-2 text-xs text-[#D7E2EA]/90 font-light"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-purple-400 flex-shrink-0 mt-0.5"
                    />
                    <span className="leading-snug">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Telemetry Grid */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-[#141414] border border-white/10 text-xs">
              {project.telemetry.map((t, tidx) => (
                <div
                  key={tidx}
                  className="flex flex-col border-l border-white/10 pl-2"
                >
                  <span className="text-[9px] text-white/50 uppercase font-mono">
                    {t.label}
                  </span>
                  <span className="text-white font-medium text-xs truncate">
                    {t.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Expand Full Story Button directly on the card */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                type="button"
                onClick={() => setIsStoryExpanded(!isStoryExpanded)}
                className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-medium cursor-pointer"
              >
                <span>
                  {isStoryExpanded
                    ? "Hide Backstory"
                    : "Read Full Engineering Backstory"}
                </span>
                {isStoryExpanded ? (
                  <ChevronUp size={14} />
                ) : (
                  <ChevronDown size={14} />
                )}
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA]/70 hover:text-white"
                >
                  <ExternalLink size={12} />
                  <span>{project.externalLabel || "Portal"}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Expanded Backstory Container On Card */}
        {isStoryExpanded && (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#141414] border border-purple-500/20 text-xs sm:text-sm text-[#D7E2EA]/90 leading-relaxed font-light">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 block mb-2">
              Extended Engineering Narrative
            </span>
            <p>{project.fullNarrative}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewData, setPreviewData] = useState<ProjectPreviewData | null>(
    null,
  );
  const [previewIndex, setPreviewIndex] = useState<number>(0);

  // Keyboard navigation for image preview lightbox (instant, no lag)
  useEffect(() => {
    if (!previewData) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewData(null);
      } else if (e.key === "ArrowLeft") {
        setPreviewIndex((prev) =>
          prev === 0 ? previewData.images.length - 1 : prev - 1,
        );
      } else if (e.key === "ArrowRight") {
        setPreviewIndex((prev) =>
          prev === previewData.images.length - 1 ? 0 : prev + 1,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewData]);

  const handleOpenPreview = (data: ProjectPreviewData) => {
    setPreviewData(data);
    setPreviewIndex(data.initialIndex);
  };

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-36 w-full z-10 relative select-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 block mb-3">
              Precision Engineering & Applied Robotics
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Projects
            </h2>
          </div>
        </FadeIn>

        {/* Stacked Project Cards Container — Buttery Smooth 60fps Native Stacking */}
        <div className="flex flex-col gap-12 sm:gap-16 pb-20">
          {projects.map((proj, idx) => (
            <ProjectCard
              key={proj.number}
              project={proj}
              index={idx}
              onOpenDetails={(p) => setSelectedProject(p)}
              onPreviewImage={handleOpenPreview}
            />
          ))}
        </div>
      </div>

      {/* Engineering Dossier Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121212] border border-[#D7E2EA]/30 rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Header info */}
            <div className="mb-6">
              <span
                className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full inline-block mb-3"
                style={{
                  backgroundColor: `${selectedProject.categoryColor}33`,
                  color: selectedProject.categoryColor,
                }}
              >
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm sm:text-base text-purple-400 flex items-center gap-2">
                <Users size={16} />
                <span>{selectedProject.role}</span>
              </p>
            </div>

            {/* Video preview in modal if available */}
            {selectedProject.videoSrc && (
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-black border border-white/15">
                <video
                  src={selectedProject.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Problem & Solution Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-purple-400 block mb-1">
                  Problem Encountered
                </span>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/90 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">
                  Architectural Solution
                </span>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/90 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Full Story */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest font-mono text-cyan-400 mb-2 flex items-center gap-2">
                <Layers size={14} />
                <span>Complete Engineering Backstory</span>
              </h4>
              <p className="text-[#D7E2EA] font-light leading-relaxed text-sm sm:text-base opacity-90 border-l-2 border-purple-500 pl-4 py-1">
                {selectedProject.fullNarrative}
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest font-mono text-cyan-400 mb-3 flex items-center gap-2">
                <Trophy size={14} />
                <span>Key Technical Highlights & Field Milestones</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.highlights.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/90 font-light"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-purple-400 flex-shrink-0 mt-0.5"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* External Links Bar */}
            {selectedProject.liveUrl && (
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium transition-all"
                >
                  <ExternalLink size={14} />
                  <span>
                    Visit {selectedProject.externalLabel || "Project Portal"}
                  </span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 rounded-full border border-white/20 text-white/70 hover:text-white text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* High-Resolution Image Preview Lightbox Modal (Instant, Zero Lag) */}
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
                <p className="text-xs text-cyan-400 font-mono mt-0.5">
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
                title="Đóng (Esc)"
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
                title="Ảnh trước (Mũi tên trái)"
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
                title="Ảnh tiếp theo (Mũi tên phải)"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* Bottom Thumbnail Strip */}
          <div
            className="max-w-xl w-full mx-auto flex items-center justify-center gap-2 pt-2 border-t border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {previewData.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPreviewIndex(idx)}
                className={`h-12 sm:h-14 aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
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
