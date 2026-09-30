import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isExternalModalOpen, setIsExternalModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect when external popups (project modal, achievement modal, etc.) are open
  useEffect(() => {
    const checkModal = () => {
      // If mobile menu is the one open, don't treat as external modal
      if (isMobileMenuOpen) {
        setIsExternalModalOpen(false);
        return;
      }
      const isLocked =
        document.body.style.overflow === "hidden" ||
        document.body.classList.contains("modal-open");
      setIsExternalModalOpen(Boolean(isLocked));
    };

    checkModal();
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => observer.disconnect();
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isExternalModalOpen) {
      document.body.style.overflow = "";
    }
    return () => {
      if (!isExternalModalOpen) {
        document.body.style.overflow = "";
      }
    };
  }, [isMobileMenuOpen, isExternalModalOpen]);

  // Track scroll position and current active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const sectionElements = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      let current = "";
      for (const { id, el } of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section is around the upper viewport zone
          if (rect.top <= 260 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Offset for fixed/floating header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Find human-friendly label for current active section
  const currentActiveItem =
    NAV_ITEMS.find((item) => item.id === activeSection) || NAV_ITEMS[0];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out pointer-events-none flex justify-center ${
          isExternalModalOpen
            ? "opacity-0 pointer-events-none -translate-y-6 invisible"
            : isScrolled
            ? "opacity-100 pt-3 sm:pt-4 px-3 sm:px-4"
            : "opacity-100 pt-5 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-10"
        }`}
        aria-hidden={isExternalModalOpen}
      >
        {/* ================================================================
            1. DESKTOP NAVIGATION (Hidden on mobile < md, visible on md+)
           ================================================================ */}
        <nav
          className={`hidden md:flex pointer-events-auto transition-all duration-300 ease-out items-center ${
            isScrolled
              ? "rounded-full bg-[#0C0C0C]/80 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.65)] px-3 py-1.5 lg:px-4 lg:py-2 gap-1.5 lg:gap-2 no-scrollbar"
              : "w-full justify-between gap-3 lg:gap-4 no-scrollbar bg-transparent border-transparent"
          }`}
          style={{
            WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
            backdropFilter: isScrolled ? "blur(20px)" : "none",
          }}
          aria-label="Desktop Navigation"
        >
          {/* Scrolled Branding / Scroll to Top Button */}
          {isScrolled && (
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white font-semibold text-xs lg:text-sm uppercase tracking-wider px-2.5 py-1 rounded-full hover:bg-white/10 transition-colors border-r border-white/15 pr-3 shrink-0 cursor-pointer bg-transparent border-t-0 border-b-0 border-l-0"
              title="Scroll to top"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Minh</span>
            </button>
          )}

          {/* Desktop Nav Items */}
          <div
            className={`flex items-center ${
              isScrolled ? "gap-1 lg:gap-1.5" : "w-full justify-between"
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer border-none shrink-0 ${
                    isScrolled
                      ? `text-xs lg:text-[13px] font-medium px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full ${
                          isActive
                            ? "text-white bg-white/15 shadow-sm"
                            : "text-[#D7E2EA]/80 hover:text-white hover:bg-white/10"
                        }`
                      : `text-[#D7E2EA] font-medium text-xs md:text-sm lg:text-[1.05rem] xl:text-[1.15rem] hover:opacity-70 bg-transparent p-0`
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* ================================================================
            2. MOBILE NAVIGATION BAR (Visible on < md, hidden on md+)
           ================================================================ */}
        <div
          className={`flex md:hidden pointer-events-auto transition-all duration-300 ease-out items-center ${
            isScrolled
              ? "rounded-full bg-[#0C0C0C]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.7)] px-3 py-1.5 gap-2 max-w-[92vw]"
              : "w-full justify-between items-center bg-transparent border-transparent"
          }`}
          style={{
            WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
            backdropFilter: isScrolled ? "blur(20px)" : "none",
          }}
        >
          {/* Left: Minh Branding */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white font-semibold text-xs uppercase tracking-wider px-2 py-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer bg-transparent border-none shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Minh</span>
          </button>

          {/* Scrolled: Show Current Active Section Pill */}
          {isScrolled && (
            <div className="flex items-center border-l border-white/15 pl-2.5 pr-1 truncate">
              <span className="text-xs font-medium text-white/90 truncate max-w-[140px]">
                {currentActiveItem.label}
              </span>
            </div>
          )}

          {/* Right: Mobile Menu Toggle Button (Icon only) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all cursor-pointer shrink-0 flex items-center justify-center"
          >
            <Menu size={16} />
          </button>
        </div>
      </header>

      {/* ================================================================
          3. FULLSCREEN RESPONSIVE MOBILE MENU MODAL (Portaled to body)
         ================================================================ */}
      {isMobileMenuOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/95 backdrop-blur-2xl p-6 sm:p-8 animate-fadeIn select-none"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-white font-bold text-base uppercase tracking-wider bg-transparent border-none cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Minh Portfolio</span>
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
                aria-label="Close Navigation Menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links List */}
            <div className="flex flex-col gap-2 my-auto py-6">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center justify-between w-full py-3.5 px-4 rounded-2xl transition-all cursor-pointer text-left border-none ${
                      isActive
                        ? "bg-white/15 text-white font-semibold shadow-sm"
                        : "bg-transparent text-[#D7E2EA]/75 hover:text-white hover:bg-white/5 font-light"
                    }`}
                  >
                    <span className="text-lg sm:text-xl uppercase tracking-wider font-['Kanit',sans-serif]">
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className={`transition-transform ${
                        isActive
                          ? "text-cyan-400 translate-x-0.5 -translate-y-0.5"
                          : "text-white/30"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Bottom Footer Note inside Menu */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                Portfolio Navigation
              </span>
              <p className="text-xs text-[#D7E2EA]/60 font-light">
                An engineer driven by curiosity — from robots to research
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Header;
