import React, { useEffect, useState } from "react";

interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Deep Dive", id: "deep-dive" },
  { label: "Community Impact", id: "community-impact" },
  { label: "Achievements", id: "achievements" },
  { label: "Personal Corner", id: "personal" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // Detect which section is currently in view
      const sectionElements = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      let current = "";
      for (const { id, el } of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section is around the upper viewport zone
          if (rect.top <= 240 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Offset for floating pill header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out pointer-events-none flex justify-center ${
        isScrolled
          ? "pt-3 sm:pt-4 px-3 sm:px-4"
          : "pt-6 md:pt-8 px-4 sm:px-6 md:px-10"
      }`}
    >
      <nav
        className={`pointer-events-auto transition-all duration-300 ease-out flex items-center ${
          isScrolled
            ? "max-w-[95vw] sm:max-w-max rounded-full bg-[#0C0C0C]/80 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.65)] px-2.5 py-1.5 sm:px-4 sm:py-2 gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto no-scrollbar"
            : "w-full justify-between gap-2 sm:gap-4 overflow-x-auto no-scrollbar bg-transparent border border-transparent"
        }`}
        style={{
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
        }}
        aria-label="Main Navigation"
      >
        {/* Scrolled Home / Minh branding button */}
        {isScrolled && (
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded-full hover:bg-white/10 transition-colors border-r border-white/15 pr-2.5 sm:pr-3 shrink-0 cursor-pointer bg-transparent border-t-0 border-b-0 border-l-0"
            title="Scroll to top"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Minh</span>
          </button>
        )}

        {/* Navigation Items */}
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer border-none shrink-0 ${
                isScrolled
                  ? `text-xs sm:text-[13px] font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full ${
                      isActive
                        ? "text-white bg-white/15 shadow-sm"
                        : "text-[#D7E2EA]/80 hover:text-white hover:bg-white/10"
                    }`
                  : `text-[#D7E2EA] font-medium text-xs sm:text-sm md:text-base lg:text-[1.1rem] xl:text-[1.2rem] hover:opacity-70 bg-transparent p-0 sm:shrink`
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
