import React, { useState, useEffect, useRef, useCallback } from "react";
import { FadeIn } from "../components/FadeIn";
import {
  X,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  image: string;
  isHighlight?: boolean;
  citation?: string;
  badge?: string;
}

const achievements: Achievement[] = [
  {
    id: "deputy-pm",
    title: "Deputy Prime Minister Recognition & Commendation",
    organization: "Government of Vietnam",
    year: "2024",
    description:
      "Special official commendation for outstanding STEM innovation and representing Vietnam at global robotics finals.",
    image: "/images/achievements/deputy-pm-recognition.jpg",
    isHighlight: true,
    badge: "National Honor",
    citation:
      "Official governmental honor recognizing national robotics excellence, technological empowerment, and STEM leadership for Vietnam.",
  },
  {
    id: "ftc-national",
    title: "FIRST Tech Challenge National Champion",
    organization: "FIRST Tech Challenge Vietnam 2024",
    year: "2024",
    description:
      "Undefeated 16-match winning streak, winning alliance captain & national champion banner with Team 24751.",
    image: "/images/achievements/ftc-national-champion.jpg",
    isHighlight: true,
    badge: "Champion Banner",
    citation:
      "Achieved complete 16-0 undefeated record throughout qualification, playoffs, and championship finals.",
  },
  {
    id: "ftc-world-trophy",
    title: "World Championship Trophy & Vietnam Flag Honors",
    organization: "FIRST Championship — Houston, Texas",
    year: "2024",
    description:
      "Historic podium placement holding the Vietnamese national flag with the official Edison Division finalist trophy.",
    image: "/images/achievements/ftc-world-trophy-flag.jpg",
    badge: "Historic Milestone",
    citation:
      "Highest placement in Vietnamese FTC history as Edison Division Finalist Alliance runner-up, representing national youth robotics on the world stage.",
  },
  {
    id: "conrad-finalist",
    title: "Conrad Challenge Global Innovation Finalist",
    organization: "NASA Johnson Space Center Houston",
    year: "2024",
    description:
      "Selected top 25 internationally to present autonomous microplastic mapping AUV at Starship Gallery.",
    image: "/images/achievements/conrad-summit-finalist.png",
    isHighlight: true,
    badge: "Global Finalist",
    citation:
      "Pitched to NASA aerospace engineers, entrepreneurs, and environmental scientists at Space Center Houston.",
  },
  {
    id: "wico-gold",
    title: "WICO 2024 Gold Medal Award",
    organization: "World Invention Creativity Olympic — Seoul, South Korea",
    year: "2024",
    description:
      "Gold award recognition for the EnviroTrack autonomous air pollution monitoring & forecasting system.",
    image: "/images/achievements/wico-gold-award.png",
    badge: "Gold Medal",
    citation:
      "Honored by international jury for real-world deployment of 25+ live sensor units across Vietnam communities.",
  },
  {
    id: "ftc-alliance-captain",
    title: "1st Place Alliance Captain & World Championship Ticket",
    organization: "FPT University & FIRST Vietnam",
    year: "2024",
    description:
      "Official 1st Place Alliance Captain banner and ticket to represent Vietnam at the World Championship in Houston.",
    image: "/images/achievements/ftc-alliance-captain-award.jpg",
    badge: "Alliance Captain",
    citation:
      "Awarded to Team 24751 GreenAms Robotics Team for exceptional match strategy, alliance leadership, and flawless mechanical reliability.",
  },
  {
    id: "samsung-sst",
    title: "Samsung Science & Technology Fellowship & S/W Certificate",
    organization: "Samsung Vietnam R&D Center (SRV)",
    year: "2024",
    description:
      "Selected as 1 of 10 outstanding high school students nationwide for SST membership; earned Advanced rating in Global S/W Certificate Test.",
    image: "/images/achievements/samsung-sst-fellowship.jpg",
    badge: "Elite Fellowship",
    citation:
      "Received intensive mentorship in Java, DSA, and semiconductor fabrication; led capstone project developing Gaussian Splatting 3D artifact reconstruction.",
  },
  {
    id: "conrad-summit-stage",
    title: "Conrad Summit Pitch & Space Center Houston Stage",
    organization: "Space Center Houston & Conrad Foundation",
    year: "2024",
    description:
      "Pitched autonomous underwater microplastic mapping AUV before NASA engineers and global jurors at the 2024 Innovation Summit.",
    image: "/images/achievements/conrad-summit-stage.png",
    badge: "NASA Stage",
    citation:
      "Selected from over 1,000 international teams to present IDEON AUV prototype, answering in-depth aerospace, telemetry, and environmental questions.",
  },
  {
    id: "wico-presentation",
    title: "WICO Live Defense & Jury Commendation",
    organization: "Seoul National University of Education, Korea",
    year: "2024",
    description:
      "Defended EnviroTrack environmental IoT architecture directly before the international jury panel, earning unanimous Gold recognition.",
    image: "/images/achievements/wico-presentation.png",
    badge: "Jury Defense",
    citation:
      "Demonstrated real-time sensor node telemetry, LoRa/GSM transmission, and air pollution forecasting models validated across 25+ locations in Vietnam.",
  },
  {
    id: "ftc-worlds",
    title: "FTC World Championship Finalist Alliance Runner-Up",
    organization: "FIRST Championship Houston, Texas",
    year: "2024",
    description:
      "Edison Division Finalist Alliance runner-up representing Vietnam on the highest global robotics stage.",
    image: "/images/achievements/ftc-world-championship.jpg",
    badge: "World Finalist",
    citation:
      "Ranked top tier among 200+ international elite robotics teams at the George R. Brown Convention Center.",
  },
  {
    id: "gtsd-paper",
    title: "GTSD 2024 Conference Presentation & Paper",
    organization:
      "8th International Conf on Green Technology & Sustainable Development",
    year: "2024",
    description:
      "Researched and presented mathematical framework for NDO-MPC vehicular power distribution networks.",
    image: "/images/achievements/gtsd-2024.jpg",
    badge: "IEEE / GTSD Paper",
    citation:
      "Peer-reviewed research presentation published in international conference proceedings under Assoc. Prof. Vo Thanh Ha.",
  },
  {
    id: "ftc-design",
    title: "FTC National Engineering & Design Award",
    organization: "FIRST Vietnam Robotics Championship",
    year: "2024",
    description:
      "Recognized for industrial-grade robot CAD modeling, custom mechanism simplicity, and precision fabrication.",
    image: "/images/achievements/gart-design-award.png",
    badge: "Design Award",
    citation:
      "Awarded for exceptional CAD simulation, rapid prototyping, and cost-effective robust mechanical architecture.",
  },
  {
    id: "gart-camp-embassy",
    title: "GART Camp Director & U.S. Embassy STEM Ambassador",
    organization: "U.S. Embassy Hanoi & GART Robotics",
    year: "2025",
    description:
      "Directed robotics summer curriculum and taught VEX IQ engineering to young students in partnership with the American Center.",
    image: "/images/achievements/gart-camp-us-embassy.jpg",
    badge: "Embassy Partner",
    citation:
      "Developed comprehensive robotics lesson plans for 34 specialized mentors and led interactive STEM workshops at the U.S. Embassy community center.",
  },
  {
    id: "ftc-thanh-hoa",
    title: "FTC Thanh Hoa Scrimmage Champion & Lead Driver",
    organization: "FIRST Tech Challenge Vietnam Scrimmage",
    year: "2024",
    description:
      "Field-tested and piloted custom robot chassis with a perfect match record, leading the 40-member mechanics department.",
    image: "/images/achievements/ftc-thanh-hoa-scrimmage.jpg",
    badge: "Scrimmage Champion",
    citation:
      "Validated rapid prototype intake and scoring mechanisms under tournament match pressure, establishing the blueprint for the national championship.",
  },
  {
    id: "stembridge-outreach",
    title: "STEMBridge Founder — Donating STEM Labs & Makerspaces",
    organization: "STEMBridge Project & Quan Son Boarding School",
    year: "2024",
    description:
      "Built and donated a full STEM lab for 300 mountain students in Lang Son and conducted tailored tactile workshops at Xa Dan Deaf School.",
    image: "/images/achievements/stembridge-lab-donation.jpg",
    badge: "Community Founder",
    citation:
      "Founded grassroots non-profit providing equipment, training, and ongoing experiments to empower underserved youth through creative engineering.",
  },
  {
    id: "mock-gart-mentor",
    title: "Mock GART Champion Mentor & VuaMock Captain",
    organization: "GreenAms Robotics Team (GART)",
    year: "2023 - 2024",
    description:
      "From fabricating first robot VuaMock with market-sourced parts to mentoring Team Bluebook to the Mock GART championship crown.",
    image: "/images/achievements/mock-gart-mentor.png",
    badge: "Champion Mentor",
    citation:
      "Created training curricula in CAD, 3D printing, and CNC machining, guiding 40 department members to build championship-caliber competitive robots.",
  },
  {
    id: "ins-grid",
    title: "INS Engineering Power Grid Systems Research Internship",
    organization: "INS Engineering Solutions",
    year: "2024",
    description:
      "Completed 3-month industrial engineering internship analyzing power grid dynamics, lightning strikes, and transmission stability.",
    image: "/images/achievements/ins-grid-internship.jpg",
    badge: "Industry Fellow",
    citation:
      "Translated utility client RFIs into dynamic simulation models using ETAP and PSS/E to evaluate electrical grid abnormalities under fault conditions.",
  },
  {
    id: "press-vtv",
    title: "National Television & Media Press Coverage",
    organization: "Vietnam Television (VTV1, VTV3) & Press",
    year: "2024",
    description:
      "Broadcast feature on prime-time national television documenting youth STEM innovation and robotics advancement.",
    image: "/images/achievements/ftc-tv-press.jpg",
    badge: "Media Spotlight",
    citation:
      "Special prime-time television broadcast on national channels highlighting robotics triumph and community STEM workshops.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   FIBONACCI SPHERE — distribute N cards on a unit sphere
   ═══════════════════════════════════════════════════════════════ */

const GA = Math.PI * (3 - Math.sqrt(5)); // golden angle

interface SpherePoint {
  x: number;
  y: number;
  z: number;
  lat: number;
  lon: number;
}

function fibonacciSphere(n: number): SpherePoint[] {
  const points: SpherePoint[] = [];
  for (let i = 0; i < n; i++) {
    const yNorm = 1 - (i / (n - 1)) * 2; // +1 → -1
    const rad = Math.sqrt(Math.max(0, 1 - yNorm * yNorm));
    const theta = i * GA;
    const xU = Math.cos(theta) * rad;
    const zU = Math.sin(theta) * rad;
    const lat = Math.asin(yNorm) * (180 / Math.PI);
    const lon = Math.atan2(xU, zU) * (180 / Math.PI);
    points.push({ x: xU, y: yNorm, z: zU, lat, lon });
  }
  return points;
}

const SPHERE_POINTS = fibonacciSphere(achievements.length);

/* ═══════════════════════════════════════════════════════════════
   FLIP lightbox coordinates
   ═══════════════════════════════════════════════════════════════ */

interface FlipCoordinates {
  dx: number;
  dy: number;
  scale: number;
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export const AchievementsSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [flipCoords, setFlipCoords] = useState<FlipCoordinates>({
    dx: 0,
    dy: 0,
    scale: 0.3,
  });

  /* ── 3D Scene Refs ───────────────────────────────────────── */
  const stageRef = useRef<HTMLDivElement | null>(null);
  const worldRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* ── Physics & Animation state ───────────────────────────── */
  const spinRef = useRef<number>(0); // current yaw
  const targetSpinRef = useRef<number>(0); // target yaw
  const tiltRef = useRef<number>(-4); // current pitch
  const targetTiltRef = useRef<number>(-4); // target pitch
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{
    x: number;
    y: number;
    spin: number;
    tilt: number;
  }>({
    x: 0,
    y: 0,
    spin: 0,
    tilt: -4,
  });
  const velocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastPointerRef = useRef<{ x: number; y: number; time: number }>({
    x: 0,
    y: 0,
    time: 0,
  });
  const hasMovedSignificantRef = useRef<boolean>(false);
  const animFrameIdRef = useRef<number>(0);

  /* ── Dimensions & geometry ───────────────────────────────── */
  const [radius, setRadius] = useState<number>(320);
  const [perspective, setPerspective] = useState<number>(1150);
  const [cardWidth, setCardWidth] = useState<number>(240);
  const totalCards = achievements.length;

  /* ── Responsive radius, perspective & card size ──────────── */
  const updateGeometry = useCallback(() => {
    const w = window.innerWidth;
    // Container matches max-w-6xl (1152px) like the sections above
    const containerW = Math.min(w - (w < 640 ? 32 : 64), 1152);

    let R: number;
    let cw: number;
    let persp: number;

    if (w <= 480) {
      R = Math.max(120, Math.round(containerW * 0.31));
      cw = Math.round(R * 0.78);
      persp = 650;
    } else if (w <= 768) {
      R = Math.max(160, Math.round(containerW * 0.3));
      cw = Math.round(R * 0.75);
      persp = 800;
    } else if (w <= 1024) {
      R = Math.round(containerW * 0.29);
      cw = Math.round(R * 0.73);
      persp = 1000;
    } else {
      // Desktop: sphere diameter scaled to ~2/3 of previous size
      R = Math.round(containerW * 0.28); // ~322px radius -> ~645px sphere diameter
      cw = Math.round(R * 0.74); // ~238px card width
      persp = 1150;
    }

    setRadius(R);
    setCardWidth(cw);
    setPerspective(persp);
  }, []);

  useEffect(() => {
    updateGeometry();
    window.addEventListener("resize", updateGeometry);
    return () => window.removeEventListener("resize", updateGeometry);
  }, [updateGeometry]);

  /* ── FLIP delta ──────────────────────────────────────────── */
  const calculateFlipCoords = useCallback((idx: number): FlipCoordinates => {
    const cardEl = cardRefs.current[idx];
    if (!cardEl) return { dx: 0, dy: 0, scale: 0.3 };

    const rect = cardEl.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const targetPlateWidth = Math.min(vw * 0.92, 860);
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const dx = cardCenterX - vw / 2;
    const dy = cardCenterY - vh / 2;
    const scale = Math.max(0.04, rect.width / targetPlateWidth);

    return { dx, dy, scale };
  }, []);

  /* ── Keyboard ────────────────────────────────────────────── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (selectedIndex !== null) {
        if (e.key === "ArrowRight") handleStepProof(1);
        else if (e.key === "ArrowLeft") handleStepProof(-1);
      } else {
        if (e.key === "ArrowRight") rotateByStep(-1);
        else if (e.key === "ArrowLeft") rotateByStep(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, totalCards]);

  /* ── Global pointer up listener to prevent stuck drag state ─── */
  useEffect(() => {
    const handleGlobalRelease = () => {
      isDraggingRef.current = false;
      hasMovedSignificantRef.current = false;
    };
    window.addEventListener("pointerup", handleGlobalRelease);
    window.addEventListener("pointercancel", handleGlobalRelease);
    window.addEventListener("mouseup", handleGlobalRelease);
    return () => {
      window.removeEventListener("pointerup", handleGlobalRelease);
      window.removeEventListener("pointercancel", handleGlobalRelease);
      window.removeEventListener("mouseup", handleGlobalRelease);
    };
  }, []);

  const rotateByStep = (direction: number) => {
    const stepDeg = 360 / totalCards;
    targetSpinRef.current += direction * stepDeg;
  };

  const handleStepProof = (direction: number) => {
    if (selectedIndex === null) return;
    const nextIdx = (selectedIndex + direction + totalCards) % totalCards;
    setFlipCoords(calculateFlipCoords(nextIdx));
    setSelectedIndex(nextIdx);
  };

  const handleClose = () => {
    isDraggingRef.current = false;
    hasMovedSignificantRef.current = false;
    velocityRef.current = { x: 0, y: 0 };
    if (selectedIndex !== null) {
      setFlipCoords(calculateFlipCoords(selectedIndex));
    }
    setSelectedIndex(null);
  };

  /* ═══════════════════════════════════════════════════════════
     60 FPS CAMERA & CARD RENDER LOOP
     ═══════════════════════════════════════════════════════════ */
  useEffect(() => {
    let isRunning = true;

    const renderLoop = () => {
      if (!isRunning) return;

      /* ── Momentum & auto-spin ──────────────────────────── */
      if (!isDraggingRef.current) {
        // Continuous auto-spin (only paused when lightbox modal is open)
        if (selectedIndex === null) {
          targetSpinRef.current += 0.06;
        }

        // Inertia friction
        velocityRef.current.x *= 0.94;
        velocityRef.current.y *= 0.94;

        if (Math.abs(velocityRef.current.x) > 0.002) {
          targetSpinRef.current += velocityRef.current.x;
        } else {
          velocityRef.current.x = 0;
        }
        if (Math.abs(velocityRef.current.y) > 0.002) {
          targetTiltRef.current += velocityRef.current.y;
        } else {
          velocityRef.current.y = 0;
        }

        // Clamp pitch
        targetTiltRef.current = Math.max(
          -32,
          Math.min(32, targetTiltRef.current),
        );
      }

      /* ── Smooth interpolation ──────────────────────────── */
      spinRef.current += (targetSpinRef.current - spinRef.current) * 0.12;
      tiltRef.current += (targetTiltRef.current - tiltRef.current) * 0.12;

      const sx = tiltRef.current;
      const sy = spinRef.current;

      /* ── World transform: yaw + pitch at center ─────── */
      if (worldRef.current) {
        worldRef.current.style.transform = `rotateY(${sy}deg) rotateX(${sx}deg)`;
      }
      /* ── Per-card depth and transform ──────────────────
         Rotate each unit-sphere vector by the current yaw/pitch
         to find the world-space depth, then shade accordingly.
      ──────────────────────────────────────────────────── */
      const syRad = (sy * Math.PI) / 180;
      const sxRad = (sx * Math.PI) / 180;

      const cosY = Math.cos(syRad);
      const sinY = Math.sin(syRad);
      const cosX = Math.cos(sxRad);
      const sinX = Math.sin(sxRad);

      cardRefs.current.forEach((cardEl, idx) => {
        if (!cardEl) return;

        const pt = SPHERE_POINTS[idx];

        // Rotate the unit vector by the camera yaw and pitch to get world depth
        // yaw rotation around Y
        const rx1 = pt.x * cosY + pt.z * sinY;
        const rz1 = -pt.x * sinY + pt.z * cosY;
        // pitch rotation around X
        const ry1 = pt.y * cosX - rz1 * sinX;
        const rz2 = pt.y * sinX + rz1 * cosX;

        const zf = rz2; // world depth -1..1 (1 = nearest)

        // Position card on the sphere surface (no rotation needed — the world handles it)
        const xPos = pt.x * radius;
        const yPos = -pt.y * radius; // flip y so +y is up
        const zPos = pt.z * radius;

        cardEl.style.transform = `translate3d(${xPos}px, ${yPos}px, ${zPos}px) rotateY(${pt.lon}deg) rotateX(${pt.lat}deg)`;

        // Hide focused card (the lightbox replaces it)
        if (idx === selectedIndex) {
          cardEl.style.opacity = "0";
          cardEl.style.pointerEvents = "none";
          return;
        }

        // Depth shading: flat black wash, not a CSS filter
        const base = 0.14 + 0.86 * Math.pow((zf + 1) / 2, 0.85);
        const dim = 1 - base;
        const opacity = 0.22 + 0.78 * Math.pow((zf + 1) / 2, 1.1);

        // Darken all cards when lightbox is open
        const litExtra = selectedIndex !== null ? 0.65 : 0;
        const finalDim = Math.min(1, dim + litExtra);

        cardEl.style.opacity = `${opacity}`;
        cardEl.style.setProperty("--card-depth-dim", `${finalDim}`);
        cardEl.style.zIndex = `${Math.round(((zf + 1) / 2) * 100)}`;

        // Back cards do not capture clicks
        if (zf < -0.2) {
          cardEl.style.pointerEvents = "none";
        } else {
          cardEl.style.pointerEvents = "auto";
        }
      });

      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [radius, totalCards, selectedIndex]);

  /* ═══════════════════════════════════════════════════════════
     DRAG INTERACTION
     ═══════════════════════════════════════════════════════════ */
  const handlePointerDown = (e: React.PointerEvent) => {
    if (selectedIndex !== null) return;
    if (e.button !== 0) return; // Only primary mouse button
    isDraggingRef.current = true;
    hasMovedSignificantRef.current = false;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      spin: targetSpinRef.current,
      tilt: targetTiltRef.current,
    };
    lastPointerRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: performance.now(),
    };
    velocityRef.current = { x: 0, y: 0 };
    // Defer setPointerCapture until user actually drags past slop threshold
    // so clicks on cards fire reliably without being hijacked.
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    // If no mouse button is held down, cancel any dragging immediately
    if (e.buttons === 0 && isDraggingRef.current) {
      isDraggingRef.current = false;
      hasMovedSignificantRef.current = false;
      return;
    }
    if (!isDraggingRef.current || selectedIndex !== null) return;

    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    // Click slop: 6px for fine pointers, 14px for coarse
    const slop = window.matchMedia("(pointer: coarse)").matches ? 14 : 6;
    if (Math.abs(dx) > slop || Math.abs(dy) > slop) {
      if (!hasMovedSignificantRef.current) {
        hasMovedSignificantRef.current = true;
        try {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        } catch {
          // Ignore
        }
      }
    }

    // Yaw from horizontal, pitch from vertical, 0.13 deg/px
    const degPerPx = 0.13;
    targetSpinRef.current = dragStartRef.current.spin + dx * degPerPx;
    targetTiltRef.current = Math.max(
      -32,
      Math.min(32, dragStartRef.current.tilt - dy * degPerPx),
    );

    // Track velocity for inertia
    const now = performance.now();
    const dt = Math.max(1, now - lastPointerRef.current.time);
    velocityRef.current = {
      x: ((e.clientX - lastPointerRef.current.x) / dt) * 3.0,
      y: ((dragStartRef.current.y - e.clientY) / dt) * 2.0,
    };

    lastPointerRef.current = { x: e.clientX, y: e.clientY, time: now };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    hasMovedSignificantRef.current = false;
    try {
      if ((e.currentTarget as HTMLElement).hasPointerCapture(e.pointerId)) {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore if already released
    }
  };

  const handleCardClick = (idx: number) => {
    if (hasMovedSignificantRef.current) return;
    isDraggingRef.current = false;
    hasMovedSignificantRef.current = false;
    velocityRef.current = { x: 0, y: 0 };
    setFlipCoords(calculateFlipCoords(idx));
    setSelectedIndex(idx);
  };

  const selectedAchievement =
    selectedIndex !== null ? achievements[selectedIndex] : null;

  /* ── Dynamic card size for inline styles ────────────────── */
  const cw = cardWidth;
  const cardHeight = Math.round(cw / 1.55); // 16:10 cinematic aspect ratio
  const halfCw = Math.round(cw / 2);
  const halfCh = Math.round(cardHeight / 2);

  /* ═══════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════ */
  return (
    <section
      id="achievements"
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 shadow-2xl w-full relative select-none overflow-hidden z-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <FadeIn delay={0} y={30} duration={0.8}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 92px)" }}
            >
              Achievements
            </h2>
          </FadeIn>
        </div>

        {/* ═══════ 3D STAGE ═══════ */}
        <div
          ref={stageRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseLeave={() => {
            isDraggingRef.current = false;
            hasMovedSignificantRef.current = false;
          }}
          className={`relative w-full h-[440px] sm:h-[500px] md:h-[580px] lg:h-[660px] xl:h-[700px] touch-none select-none flex items-center justify-center ${
            selectedIndex !== null
              ? "pointer-events-none"
              : "cursor-grab active:cursor-grabbing"
          }`}
          style={{
            perspective: `${perspective}px`,
            perspectiveOrigin: "50% 50%",
          }}
        >
          {/* ── 3D World Origin (0×0 center point) ─────────
              #world is a 0×0 point at top:50% left:50%, so
              it sits at the middle of the viewport. Every card
              and the headline emanate from this same origin.
          ───────────────────────────────────────────────────── */}
          <div
            ref={worldRef}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 0,
              height: 0,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            {/* ── Photo Cards on the Fibonacci Sphere ──── */}
            {achievements.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => handleCardClick(idx)}
                onPointerUp={(e) => {
                  if (!hasMovedSignificantRef.current) {
                    e.stopPropagation();
                    handleCardClick(idx);
                  }
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: `${cw}px`,
                  height: `${cardHeight}px`,
                  marginLeft: `${-halfCw}px`,
                  marginTop: `${-halfCh}px`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  // NOTE: NO overflow:hidden here — it breaks preserve-3d in some browsers
                  // Clipping is handled by the inner wrapper div below
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const inner = (e.currentTarget as HTMLElement).querySelector(
                    ".card-inner",
                  ) as HTMLElement;
                  if (inner) {
                    inner.style.borderColor = "rgba(168,85,247,0.85)";
                    inner.style.boxShadow = "0 20px 40px rgba(168,85,247,0.35)";
                  }
                }}
                onMouseLeave={(e) => {
                  const inner = (e.currentTarget as HTMLElement).querySelector(
                    ".card-inner",
                  ) as HTMLElement;
                  if (inner) {
                    inner.style.borderColor = "rgba(255,255,255,0.15)";
                    inner.style.boxShadow = "0 15px 35px rgba(0,0,0,0.6)";
                  }
                }}
              >
                {/* Inner wrapper handles overflow clipping + border + shadow.
                    Separated from the outer to preserve the 3D transform chain. */}
                <div
                  className="card-inner"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "14px",
                    overflow: "hidden",
                    background: "#141414",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                  />

                  {/* Atmospheric depth wash overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#0C0C0C",
                      pointerEvents: "none",
                      opacity: "var(--card-depth-dim, 0)",
                    }}
                  />

                  {/* Viewfinder corner brackets */}
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      width: 10,
                      height: 10,
                      borderTop: "1px solid rgba(255,255,255,0.5)",
                      borderLeft: "1px solid rgba(255,255,255,0.5)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      width: 10,
                      height: 10,
                      borderTop: "1px solid rgba(255,255,255,0.5)",
                      borderRight: "1px solid rgba(255,255,255,0.5)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 8,
                      left: 8,
                      width: 10,
                      height: 10,
                      borderBottom: "1px solid rgba(255,255,255,0.5)",
                      borderLeft: "1px solid rgba(255,255,255,0.5)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      width: 10,
                      height: 10,
                      borderBottom: "1px solid rgba(255,255,255,0.5)",
                      borderRight: "1px solid rgba(255,255,255,0.5)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ FLIP LIGHTBOX ═══════════════ */}
      <AnimatePresence>
        {selectedAchievement && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md"
            onClick={handleClose}
          >
            {/* FLIP plate: opens from the clicked card, closes back to it */}
            <motion.div
              initial={{
                x: flipCoords.dx,
                y: flipCoords.dy,
                scale: flipCoords.scale,
                opacity: 0.15,
              }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                x: flipCoords.dx,
                y: flipCoords.dy,
                scale: flipCoords.scale,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-4xl w-full shadow-2xl relative max-h-[92vh] overflow-y-auto transform-gpu origin-center"
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/60 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-colors cursor-pointer z-20"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Main Photo */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-black/80 mb-6 border border-white/15 flex items-center justify-center shadow-2xl">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="w-full h-full object-contain bg-black"
                />

                {/* Prev / Next steppers */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStepProof(-1);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white/70 hover:text-white border border-white/20 transition-all cursor-pointer"
                  aria-label="Previous proof"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStepProof(1);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white/70 hover:text-white border border-white/20 transition-all cursor-pointer"
                  aria-label="Next proof"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Metadata (2-column on md+) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                {/* Left: Organization, Title & Badge */}
                <div className="md:col-span-6 flex flex-col">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-widest mb-2">
                    <ShieldCheck size={16} />
                    <span>
                      {selectedAchievement.organization} •{" "}
                      {selectedAchievement.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                    {selectedAchievement.title}
                  </h3>

                  {selectedAchievement.badge && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider w-fit">
                      <Sparkles size={12} />
                      <span>{selectedAchievement.badge}</span>
                    </div>
                  )}
                </div>

                {/* Right: Description */}
                <div className="md:col-span-6 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                  <p className="text-neutral-200 text-sm sm:text-base font-light leading-relaxed">
                    {selectedAchievement.citation ||
                      selectedAchievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
