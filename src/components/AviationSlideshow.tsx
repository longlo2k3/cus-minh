import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X } from "lucide-react";

export interface AviationSlide {
  src: string;
  label: string;
}

const defaultAviationImages: AviationSlide[] = [
  {
    src: "/images/personal/aviation/cockpit-build.jpg",
    label: "01. Assembling DIY A320 Frame",
  },
  {
    src: "/images/personal/aviation/cockpit-schematic.jpg",
    label: "02. Glareshield & Avionics Schematics",
  },
  {
    src: "/images/personal/aviation/cockpit-night.jpg",
    label: "03. Cockpit Illumination & Night Flight",
  },
  {
    src: "/images/personal/aviation/cockpit-panels.jpg",
    label: "04. Custom Switch Panels & Electronics",
  },
  {
    src: "/images/personal/aviation/childhood-plane.jpg",
    label: "05. Childhood Dream at VPAF Museum",
  },
];

interface AviationSlideshowProps {
  images?: AviationSlide[];
}

export const AviationSlideshow: React.FC<AviationSlideshowProps> = ({
  images = defaultAviationImages,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Automatic slideshow cycle (advances every 3.5 seconds when not hovered and preview closed)
  useEffect(() => {
    if (!isAutoPlay || isHovered || isPreviewOpen) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, isPreviewOpen, images.length]);

  // Keyboard navigation when preview modal is open
  useEffect(() => {
    if (!isPreviewOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPreviewOpen(false);
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="flex flex-col w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Frame (Zero-animation, instant display) */}
      <div
        className="w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden bg-black mb-3 border border-white/10 relative cursor-zoom-in group"
        onClick={() => setIsPreviewOpen(true)}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.label}
            style={{ display: idx === currentSlide ? "block" : "none" }}
            className="w-full h-full object-cover"
          />
        ))}

        {/* Hover preview badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 text-white text-[11px] font-mono flex items-center gap-1.5 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
          <Maximize2 size={12} className="text-cyan-400" />
          <span>Preview</span>
        </div>

        {/* Previous Button — only visible on hover */}
        {isHovered && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous slide"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-black text-white p-2 rounded-full border border-white/20 cursor-pointer z-20"
          >
            <ChevronLeft size={16} />
          </button>
        )}

        {/* Next Button — only visible on hover */}
        {isHovered && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next slide"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-black text-white p-2 rounded-full border border-white/20 cursor-pointer z-20"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>

      {/* Thumbnails (Instant switch on click) */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`h-14 rounded-lg overflow-hidden border-2 cursor-pointer ${
              currentSlide === idx
                ? "border-cyan-400 opacity-100"
                : "border-white/10 opacity-50 hover:opacity-90"
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

      {/* Image Preview Lightbox Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md p-3 sm:p-6 select-none"
          onClick={() => setIsPreviewOpen(false)}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between gap-4 pb-3 border-b border-white/10 max-w-5xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">
                A320 Cockpit Build Log
              </span>
              <h4 className="text-white font-semibold text-sm sm:text-base">
                {images[currentSlide]?.label}
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-white/50 hidden sm:inline">
                {currentSlide + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors flex items-center gap-1.5"
                title="Đóng (Esc)"
              >
                <X size={18} />
                <span className="text-xs font-mono hidden sm:inline">ESC</span>
              </button>
            </div>
          </div>

          {/* Main Stage */}
          <div
            className="relative flex-1 flex items-center justify-center my-3 max-w-5xl w-full mx-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-black border border-white/20 text-white cursor-pointer transition-colors shadow-2xl"
              title="Ảnh trước (Mũi tên trái)"
            >
              <ChevronLeft size={22} />
            </button>

            <img
              src={images[currentSlide]?.src}
              alt={images[currentSlide]?.label}
              className="max-h-[66vh] sm:max-h-[72vh] max-w-full w-auto object-contain rounded-xl border border-white/15 shadow-2xl"
            />

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-black border border-white/20 text-white cursor-pointer transition-colors shadow-2xl"
              title="Ảnh tiếp theo (Mũi tên phải)"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Bottom Thumbnails */}
          <div
            className="max-w-md w-full mx-auto flex items-center justify-center gap-2 pt-2 border-t border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-12 aspect-video rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                  idx === currentSlide
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
    </div>
  );
};
