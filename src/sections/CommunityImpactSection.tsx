import React, { useState, useEffect } from "react";
import { FadeIn } from "../components/FadeIn";
import {
  ArrowUpRight,
  FlaskConical,
  Rocket,
  Atom,
  Cpu,
  Bot,
  Microscope,
  Lightbulb,
  Wrench,
  Telescope,
  Puzzle,
  Orbit,
  Hammer,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

// ============================================================================
// TYPED DATA OBJECTS — STRICTLY SOURCED FROM content.md (AGENTS.md Rules 1, 2, 4)
// ============================================================================

interface HeaderData {
  title: string;
  description: string;
  mediaButtonLabel: string;
  mediaButtonHref: string;
}

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  meta: string;
}

interface TakeawayData {
  label: string;
  quote: string;
  source: string;
  role: string;
}

interface StoryItem {
  label: string;
  title?: string;
  metric?: string;
  caption?: string;
  body?: string;
  note?: string;
  imageSrc: string;
  imageAlt: string;
}

interface VolunteerData {
  label: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
}

interface StembridgeData {
  label: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
}

const HEADER: HeaderData = {
  title: "Promoting STEM Education",
  description:
    "I realized how fortunate I was to have access to the people, resources, and environment that allowed me to explore STEM. The more I explored, the more I realized that many students do not have the same opportunity—that became the reason I founded Stembridge.",
  mediaButtonLabel: "View Project Media",
  mediaButtonHref: "#community-media",
};

const STEMBRIDGE: StembridgeData = {
  label: "STEMBRIDGE INITIATIVE",
  intro:
    "Creating opportunities for students to explore, build, and stay curious through sustainable educational infrastructure.",
  imageSrc: "/images/achievements/stembridge-lab-donation.jpg",
  imageAlt: "Stembridge Makerspace Lab donation ceremony and facility",
};

const PROJECT_ITEMS: ProjectItem[] = [
  { id: "01", number: "01", title: "STEM Fairs", meta: "Community Outreach" },
  { id: "02", number: "02", title: "Makerspace Lab", meta: "Lab Donations" },
  {
    id: "03",
    number: "03",
    title: "Experiment Kits",
    meta: "Equipment Donated",
  },
  { id: "04", number: "04", title: "STEM Classes", meta: "Sustainable Impact" },
];

const TAKEAWAY: TakeawayData = {
  label: "TAKEAWAY",
  quote:
    "Working with these students made me understand that giving someone access to STEM is not simply about giving them knowledge. Sometimes, it starts with giving them the chance to discover that they can be curious, creative, and capable of building something themselves.",
  source: "Stembridge",
  role: "Founder",
};

const STORIES: { quanSon: StoryItem; xaDan: StoryItem } = {
  quanSon: {
    label: "QUAN SON · LANG SON",
    metric: "300",
    caption: "Ethnic Minority Students",
    note: "Quan Son Boarding School: built and donated a permanent STEM lab, hosted workshops and a STEM Fair for 300 students in a remote mountainous area.",
    imageSrc: "/images/journey/volunteer/quanson.jpg",
    imageAlt: "Students at Quan Son Boarding School in Lang Son",
  },
  xaDan: {
    label: "XA DAN · HANOI",
    title: "Xa Dan School for Deaf Students",
    body: "Adapted activities to specialized communication methods for children with hearing impairments and developmental disabilities, guiding students in hands-on building and donating practical learning supplies.",
    note: "Archive: Lang Son & Xa Dan event records, news coverage & community outreach",
    imageSrc: "/images/journey/stembridge/xadan-workshop.jpg",
    imageAlt: "Interactive STEM session at Xa Dan School for Deaf Students",
  },
};

const VOLUNTEER: VolunteerData = {
  label: "VOLUNTEER INITIATIVES",
  bullets: [
    "Performed water rocket and holography experiments for students in Lang Son with Cosmosics Projects.",
    "Served as a field reset volunteer at the Red River Delta VEX V5 robot tournaments.",
  ],
  imageSrc: "/images/journey/volunteer/cosmosics-water-rocket.jpg",
  imageAlt: "Cosmosics water rocket experiment demonstration in Lang Son",
};

const MARQUEE_ROW_1 = [
  { Icon: FlaskConical, id: "flask" },
  { Icon: Rocket, id: "rocket" },
  { Icon: Atom, id: "atom" },
  { Icon: Cpu, id: "cpu" },
  { Icon: Bot, id: "bot" },
  { Icon: Microscope, id: "microscope" },
  { Icon: Lightbulb, id: "lightbulb" },
  { Icon: Wrench, id: "wrench" },
];

const MARQUEE_ROW_2 = [
  { Icon: Telescope, id: "telescope" },
  { Icon: Puzzle, id: "puzzle" },
  { Icon: Orbit, id: "orbit" },
  { Icon: Hammer, id: "hammer" },
  { Icon: Rocket, id: "rocket2" },
  { Icon: Atom, id: "atom2" },
  { Icon: Bot, id: "bot2" },
  { Icon: Lightbulb, id: "lightbulb2" },
];

interface GalleryItem {
  id: string;
  category: "Stembridge" | "Volunteer";
  title: string;
  subtitle: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  details: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "stembridge-lab",
    category: "Stembridge",
    title: "Makerspace Lab & Experiment Donations",
    subtitle: "Sustainable Educational Infrastructure",
    location: "Lang Son & Partner Schools",
    imageSrc: "/images/achievements/stembridge-lab-donation.jpg",
    imageAlt: "Stembridge Makerspace Lab donation ceremony and facility",
    caption:
      "Official donation of complete makerspace lab, experiment kits, and educational tools.",
    details:
      "Our mission was not simply to bring a STEM fair to different schools, but to create opportunities for students to explore, build, and stay curious through STEM Fairs, Makerspace Lab and Experiment Donations, and STEM classes. We worked with teachers, provided equipment, and helped schools build permanent spaces where students can keep creating.",
  },
  {
    id: "quanson",
    category: "Stembridge",
    title: "Quan Son Boarding School STEM Fair",
    subtitle: "Hands-on Workshops for 300 Students",
    location: "Quan Son, Lang Son",
    imageSrc: "/images/journey/volunteer/quanson.jpg",
    imageAlt: "Students at Quan Son Boarding School in Lang Son",
    caption:
      "300 ethnic minority boarding students experiencing their first hands-on STEM experiments.",
    details:
      "Students live and study in a remote mountainous area where difficult terrain and limited resources make opportunities outside the classroom especially rare. We built and donated a STEM lab and organized workshops and a STEM Fair for 300 students, giving them their first opportunity to explore STEM through hands-on activities.",
  },
  {
    id: "xadan",
    category: "Stembridge",
    title: "Xa Dan School for Deaf Students",
    subtitle: "Adaptive STEM Education",
    location: "Dong Da, Hanoi",
    imageSrc: "/images/journey/stembridge/xadan-workshop.jpg",
    imageAlt: "Interactive STEM session at Xa Dan School for Deaf Students",
    caption:
      "Engaging students with hearing and developmental disabilities through visual, tactile building activities.",
    details:
      "The long-established school supports children with different disabilities, including deafness, Down syndrome, and developmental and psychological disabilities. We adapted our activities to their ways of communicating and learning, organized games and specialized classes, donated educational products, and guided students in making things themselves.",
  },
  {
    id: "cosmosics",
    category: "Volunteer",
    title: "Cosmosics Water Rocket Experiments",
    subtitle: "Science Outreach & Physics Demonstrations",
    location: "Lang Son",
    imageSrc: "/images/journey/volunteer/cosmosics-water-rocket.jpg",
    imageAlt: "Cosmosics water rocket experiment demonstration in Lang Son",
    caption:
      "Demonstrating water rocket aerodynamics and holography experiments for local students.",
    details:
      "At Cosmosics Projects, I performed fun water rocket and holography experiments for students in Lang Son, sharing the excitement of practical physics with younger learners in rural communities.",
  },
  {
    id: "vex",
    category: "Volunteer",
    title: "Red River Delta VEX Tournaments",
    subtitle: "Competition Operations & Field Support",
    location: "Hanoi & Red River Delta",
    imageSrc: "/images/journey/volunteer/vex-field.jpg",
    imageAlt: "Red River Delta VEX robot tournament field",
    caption:
      "Serving as field reset volunteer ensuring fair, timely match execution for hundreds of competitors.",
    details:
      "I served as a field reset volunteer at the Red River Delta VEX V5 robot tournaments, ensuring fair match operations and assisting student teams throughout intense multi-division robotics matches.",
  },
  {
    id: "outreach",
    category: "Volunteer",
    title: "Community STEM Sessions in Lang Son",
    subtitle: "Interactive Student Engagement",
    location: "Mountainous Lang Son",
    imageSrc: "/images/journey/volunteer/img_0001.jpg",
    imageAlt: "STEM session with children in Lang Son",
    caption:
      "Encouraging curiosity through hands-on physical building activities.",
    details:
      "Working with these students made me understand that giving someone access to STEM is not simply about giving them knowledge. Sometimes, it starts with giving them the chance to discover that they can be curious, creative, and capable of building something themselves.",
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function CommunityImpactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMediaIdx, setActiveMediaIdx] = useState(0);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") {
        setIsModalOpen(false);
      } else if (e.key === "ArrowLeft") {
        setActiveMediaIdx((prev) =>
          prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1,
        );
      } else if (e.key === "ArrowRight") {
        setActiveMediaIdx((prev) =>
          prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1,
        );
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const activeMedia = GALLERY_ITEMS[activeMediaIdx] || GALLERY_ITEMS[0];

  return (
    <section
      id="community-impact"
      aria-labelledby="community-impact-title"
      className="bg-white text-neutral-900 font-['Kanit',sans-serif] px-4 sm:px-6 md:px-10 lg:px-14 pt-20 sm:pt-24 md:pt-28 pb-32 w-full z-10 relative select-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 shadow-2xl overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] flex flex-col gap-8 md:gap-10">
        {/* ================================================================== */}
        {/* HEADER ROW (ORIGINAL LAYOUT)                                       */}
        {/* ================================================================== */}
        <FadeIn delay={0} y={25} duration={0.8}>
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Left Column (max-w-3xl) */}
            <div className="flex flex-col gap-2 sm:gap-2.5 max-w-3xl">
              <h2
                id="community-impact-title"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.08] font-black uppercase tracking-tight text-neutral-900 font-['Kanit',sans-serif]"
              >
                {HEADER.title}
              </h2>

              <p className="text-sm md:text-[15px] leading-[1.6] text-neutral-600 font-light mt-0.5 font-['Kanit',sans-serif]">
                {HEADER.description}
              </p>
            </div>

            {/* Right Column: Liquid Glass Light Pill (Opens Details Popup) */}
            <div className="flex items-center shrink-0">
              <button
                type="button"
                onClick={() => {
                  setActiveMediaIdx(0);
                  setIsModalOpen(true);
                }}
                className="liquid-glass-light border border-black/10 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm text-neutral-900 hover:text-black hover:border-black/25 transition-all flex items-center gap-2 group cursor-pointer font-medium font-['Kanit',sans-serif]"
              >
                <span className="tracking-tight">
                  {HEADER.mediaButtonLabel}
                </span>
                <ArrowUpRight
                  className="w-4 h-4 text-neutral-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </header>
        </FadeIn>

        {/* ================================================================== */}
        {/* 3-COLUMN GRID                                                      */}
        {/* ================================================================== */}
        <FadeIn delay={0.15} y={30} duration={0.8}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
            {/* ---------------------------------------------------------------- */}
            {/* COLUMN 1: STEMBRIDGE CARD                                        */}
            {/* ---------------------------------------------------------------- */}
            <article
              onClick={() => {
                setActiveMediaIdx(0);
                setIsModalOpen(true);
              }}
              className="card-dark card-dark--a rounded-2xl min-h-[440px] p-5 md:p-6 flex flex-col justify-between group overflow-hidden relative shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              {/* Real Event Photography Overlay — Full Clarity */}
              <img
                src={STEMBRIDGE.imageSrc}
                alt={STEMBRIDGE.imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                loading="lazy"
              />
              {/* Crisp Bottom & Top Vignette for Typography Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-40% to-black/30 z-0 pointer-events-none" />

              {/* Top: Centered Minimalist Label */}
              <div className="relative z-10 flex items-center justify-center gap-2 text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="uppercase tracking-[0.22em] text-[11px] font-mono font-medium">
                  {STEMBRIDGE.label}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 flex flex-col gap-5 mt-10">
                {/* Authentic Description from content.md */}
                <p className="text-sm text-white/90 font-light leading-relaxed font-['Kanit',sans-serif]">
                  {STEMBRIDGE.intro}
                </p>

                {/* 4-Column Grid: [number · bullet · title · meta] */}
                <div className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-x-3 gap-y-3 pt-4 border-t border-white/10 text-xs font-mono">
                  {PROJECT_ITEMS.map((item) => (
                    <React.Fragment key={item.id}>
                      <span className="text-cyan-400/80 font-medium">
                        {item.number}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
                      <span className="font-['Kanit',sans-serif] font-medium text-white truncate">
                        {item.title}
                      </span>
                      <span className="text-white/60 text-[11px] font-light text-right">
                        {item.meta}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </article>

            {/* ---------------------------------------------------------------- */}
            {/* COLUMN 2: TAKEAWAY (TOP) & QUAN SON (BOTTOM)                     */}
            {/* ---------------------------------------------------------------- */}
            <div className="flex flex-col gap-4 md:gap-5 md:grid md:grid-rows-[auto_1fr]">
              {/* Top: Takeaway Card */}
              <article className="bg-[#e4ece8] rounded-2xl p-5 md:p-6 noise-overlay flex flex-col justify-between relative overflow-hidden border border-black/[0.06] shadow-sm">
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center gap-2 text-neutral-700/80 font-mono text-[11px] tracking-[0.22em] uppercase font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                    <span>{TAKEAWAY.label}</span>
                  </div>

                  <blockquote className="text-[13px] sm:text-[13.5px] leading-[1.6] text-neutral-800 font-normal mt-3 font-['Kanit',sans-serif]">
                    &ldquo;{TAKEAWAY.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="relative z-10 mt-5 pt-3 border-t border-neutral-900/10 flex items-center justify-between text-xs font-mono text-neutral-700">
                  <span className="font-bold text-neutral-900">
                    {TAKEAWAY.source}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-600">
                    {TAKEAWAY.role}
                  </span>
                </div>
              </article>

              {/* Bottom: Quan Sơn Card */}
              <article
                onClick={() => {
                  setActiveMediaIdx(1);
                  setIsModalOpen(true);
                }}
                className="card-dark card-dark--b rounded-2xl min-h-[300px] p-5 md:p-6 flex flex-col justify-between group overflow-hidden relative shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                {/* Real Event Photography Overlay — Full Clarity */}
                <img
                  src={STORIES.quanSon.imageSrc}
                  alt={STORIES.quanSon.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                  loading="lazy"
                />
                {/* Directional Vignette for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-45% to-black/20 z-0 pointer-events-none" />

                {/* Top Label */}
                <div className="relative z-10 flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="uppercase tracking-[0.22em] text-[11px] font-mono font-medium">
                    {STORIES.quanSon.label}
                  </span>
                </div>

                {/* Centered Huge Metric */}
                <div className="relative z-10 my-auto text-center py-4">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tight text-white leading-none block font-['Kanit',sans-serif]">
                    {STORIES.quanSon.metric}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-white/80 font-mono mt-2 block">
                    {STORIES.quanSon.caption}
                  </span>
                </div>

                {/* Bottom Caption Note */}
                <div className="relative z-10 pt-3 border-t border-white/10 text-center">
                  <p className="text-xs text-white/70 font-light leading-relaxed font-['Kanit',sans-serif]">
                    {STORIES.quanSon.note}
                  </p>
                </div>
              </article>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* COLUMN 3: VOLUNTEER (TOP) & XÃ ĐÀN (BOTTOM)                      */}
            {/* ---------------------------------------------------------------- */}
            <div className="flex flex-col gap-4 md:gap-5 md:col-span-2 lg:col-span-1">
              {/* Top: Volunteer Card */}
              <article
                onClick={() => {
                  setActiveMediaIdx(3);
                  setIsModalOpen(true);
                }}
                className="card-dark card-dark--c rounded-2xl min-h-[340px] p-5 md:p-6 flex flex-col justify-between gap-5 group overflow-hidden relative shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                {/* Real Event Photography Overlay — Full Clarity */}
                <img
                  src={VOLUNTEER.imageSrc}
                  alt={VOLUNTEER.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                  loading="lazy"
                />
                {/* Directional Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-45% to-black/20 z-0 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-4">
                  {/* Label */}
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-[11px] tracking-[0.22em] uppercase font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{VOLUNTEER.label}</span>
                  </div>

                  {/* 2 Bullets from content.md */}
                  <ul className="flex flex-col gap-3">
                    {VOLUNTEER.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-white/90 font-light font-['Kanit',sans-serif]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0 mt-2" />
                        <span>
                          {idx === 0 ? (
                            <>
                              Performed water rocket and holography experiments
                              for students in Lang Son with{" "}
                              <strong className="font-semibold text-white">
                                Cosmosics Projects
                              </strong>
                              .
                            </>
                          ) : (
                            bullet
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom: Two Marquee Rows of Liquid Glass Tiles */}
                <div className="relative z-10 flex flex-col gap-2.5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                  {/* Row 1: Scrolls Left */}
                  <div className="animate-marquee-left motion-reduce:animate-none flex gap-2.5">
                    {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((item, idx) => {
                      const IconComponent = item.Icon;
                      return (
                        <div
                          key={`${item.id}-${idx}`}
                          className="liquid-glass border border-white/10 h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center shrink-0"
                        >
                          <IconComponent
                            className="h-6 w-6 text-white/80"
                            strokeWidth={1.5}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Row 2: Scrolls Right */}
                  <div className="animate-marquee-right motion-reduce:animate-none flex gap-2.5">
                    {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((item, idx) => {
                      const IconComponent = item.Icon;
                      return (
                        <div
                          key={`${item.id}-${idx}`}
                          className="liquid-glass border border-white/10 h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center shrink-0"
                        >
                          <IconComponent
                            className="h-6 w-6 text-white/80"
                            strokeWidth={1.5}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>

              {/* Bottom: Xã Đàn Card */}
              <article
                id="community-media"
                onClick={() => {
                  setActiveMediaIdx(2);
                  setIsModalOpen(true);
                }}
                className="bg-[#e4ece8] rounded-2xl p-5 md:p-6 noise-overlay relative flex flex-col justify-between group overflow-hidden border border-black/[0.06] shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                {/* Real Event Photography Overlay — Full Clarity */}
                <img
                  src={STORIES.xaDan.imageSrc}
                  alt={STORIES.xaDan.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#e4ece8] via-[#e4ece8]/90 via-60% to-transparent z-0 pointer-events-none" />

                {/* Top-Right ArrowUpRight Button */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveMediaIdx(2);
                    setIsModalOpen(true);
                  }}
                  aria-label="View Archive Details"
                  className="liquid-glass-light border border-black/10 h-9 w-9 rounded-full flex items-center justify-center absolute top-5 right-5 z-20 text-neutral-800 hover:text-black transition-colors cursor-pointer"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </button>

                {/* Content */}
                <div className="relative z-10 flex flex-col pr-10">
                  <div className="flex items-center gap-2 text-neutral-700/80 font-mono text-[11px] tracking-[0.22em] uppercase font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
                    <span>{STORIES.xaDan.label}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-medium text-neutral-900 mt-2 font-['Kanit',sans-serif]">
                    {STORIES.xaDan.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-800 font-light mt-2 font-['Kanit',sans-serif]">
                    {STORIES.xaDan.body}
                  </p>
                </div>

                {/* Small Note at Bottom */}
                <div className="relative z-10 mt-5 pt-3 border-t border-neutral-900/10 text-[11px] text-neutral-600 font-mono">
                  {STORIES.xaDan.note}
                </div>
              </article>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ================================================================== */}
      {/* COMPREHENSIVE DETAILS POPUP MODAL                                  */}
      {/* ================================================================== */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#121212] border border-white/15 text-[#D7E2EA] font-['Kanit',sans-serif] rounded-3xl p-4 sm:p-6 md:p-7 max-w-7xl w-full max-h-[94vh] overflow-y-auto shadow-2xl relative flex flex-col gap-5 sm:gap-6"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                    PROMOTING EDUCATION
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                    {activeMedia.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
                  {activeMedia.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light mt-1">
                  {activeMedia.subtitle} ·{" "}
                  <span className="font-mono text-white/50">
                    {activeMedia.location}
                  </span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Close (ESC)"
              >
                <X size={22} />
              </button>
            </div>

            {/* Media Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {GALLERY_ITEMS.map((item, idx) => {
                const isActive = activeMediaIdx === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveMediaIdx(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap cursor-pointer transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-cyan-500 text-black font-bold shadow-md"
                        : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                    }`}
                  >
                    <span>{idx + 1}.</span>
                    <span className="font-['Kanit',sans-serif]">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Large Cinematic Image Showcase with Viewfinder Brackets */}
            <div className="relative rounded-2xl overflow-hidden bg-black/95 border border-white/10 w-full h-[52vh] sm:h-[62vh] md:h-[68vh] lg:h-[72vh] min-h-[420px] max-h-[760px] flex items-center justify-center group shadow-2xl">
              <img
                src={activeMedia.imageSrc}
                alt={activeMedia.imageAlt}
                className="w-full h-full object-contain p-1 sm:p-2 transition-transform duration-700 select-none"
              />

              {/* Viewfinder Brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/70 z-20 pointer-events-none" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/70 z-20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/70 z-20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/70 z-20 pointer-events-none" />

              {/* Navigation Arrows (Large floating controls) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMediaIdx((prev) =>
                    prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1,
                  );
                }}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/75 hover:bg-black text-white border border-white/25 hover:border-white/60 transition-all cursor-pointer z-20 shadow-2xl opacity-85 hover:opacity-100 hover:scale-105"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMediaIdx((prev) =>
                    prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1,
                  );
                }}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/75 hover:bg-black text-white border border-white/25 hover:border-white/60 transition-all cursor-pointer z-20 shadow-2xl opacity-85 hover:opacity-100 hover:scale-105"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 pointer-events-none">
                <div className="flex flex-col gap-1 max-w-3xl">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    {activeMedia.location}
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-white font-normal leading-snug">
                    {activeMedia.caption}
                  </p>
                </div>
                <span className="font-mono text-xs text-white/70 shrink-0 self-end sm:self-auto bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                  {activeMediaIdx + 1} / {GALLERY_ITEMS.length}
                </span>
              </div>
            </div>

            {/* Narrative & Field Takeaway Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-center">
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-cyan-400 font-semibold mb-2 block">
                  Field Record & Narrative
                </span>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/90 font-light leading-relaxed">
                  {activeMedia.details}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-emerald-400 font-semibold mb-2 block">
                    Core Philosophy
                  </span>
                  <blockquote className="text-xs sm:text-[13px] text-white/85 italic font-light leading-relaxed">
                    &ldquo;{TAKEAWAY.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-white/50 pt-3 mt-3 border-t border-white/10">
                  <span className="font-semibold text-white">
                    {TAKEAWAY.source}
                  </span>
                  <span className="uppercase tracking-wider">
                    {TAKEAWAY.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export { CommunityImpactSection };
