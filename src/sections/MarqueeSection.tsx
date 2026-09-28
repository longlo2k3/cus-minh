import React, { useEffect, useRef, useState } from 'react';

const allMarqueeImages = [
  // Row 1 pool
  { src: '/images/marquee/gart/ftc-national.jpg', alt: 'FTC National Champion 24751' },
  { src: '/images/marquee/envirotrack/envirotrack-booth.png', alt: 'EnviroTrack WICO Booth Presentation' },
  { src: '/images/marquee/conrad/conrad-summit.png', alt: 'Conrad Challenge at Johnson Space Center' },
  { src: '/images/marquee/gart/thanh-hoa-scrimmage.jpg', alt: 'FTC Thanh Hoa Scrimmage' },
  { src: '/images/marquee/envirotrack/envirotrack-device.png', alt: 'EnviroTrack IoT Air Quality Sensor' },
  { src: '/images/marquee/conrad/conrad-auv-prototype.jpg', alt: 'Conrad Challenge AUV Prototype' },
  { src: '/images/marquee/gart/gart-cad.png', alt: 'Mock GART CAD & Design Lab' },
  { src: '/images/marquee/envirotrack/envirotrack-present.jpg', alt: 'EnviroTrack Deployment on Stage' },
  // Row 2 pool
  { src: '/images/marquee/gart/ftc-worlds.jpg', alt: 'FTC World Championship Houston' },
  { src: '/images/marquee/conrad/conrad-electronics.jpg', alt: 'Conrad AUV Electronics Assembly' },
  { src: '/images/marquee/envirotrack/envirotrack-team.png', alt: 'EnviroTrack Team at WICO' },
  { src: '/images/marquee/conrad/conrad-team-hall.jpg', alt: 'Conrad Space Center Hall' },
  { src: '/images/marquee/gart/gart-expo.jpg', alt: 'GART Robotics Expo' },
  { src: '/images/marquee/envirotrack/envirotrack-member.png', alt: 'EnviroTrack Live Demo' },
  { src: '/images/marquee/conrad/conrad-display.jpg', alt: 'Conrad Microplastic AUV' },
  { src: '/images/marquee/gart/gart-camp.jpg', alt: 'GART Summer Robotics Camp' },
];

const midIndex = Math.ceil(allMarqueeImages.length / 2);
const row1Source = allMarqueeImages.slice(0, midIndex);
const row2Source = allMarqueeImages.slice(midIndex);

// Tripled for seamless scrolling
const row1Images = [...row1Source, ...row1Source, ...row1Source];
const row2Images = [...row2Source, ...row2Source, ...row2Source];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      // Scroll offset formula: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll: translateX(offset - 200) */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translateX(${offset - 200}px)`,
            transition: 'transform 0.05s linear',
          }}
        >
          {row1Images.map((img, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[230px] md:h-[270px] rounded-2xl overflow-hidden bg-[#161616] border border-white/5 relative group shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-md">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll: translateX(-(offset - 200)) */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            transition: 'transform 0.05s linear',
          }}
        >
          {row2Images.map((img, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[230px] md:h-[270px] rounded-2xl overflow-hidden bg-[#161616] border border-white/5 relative group shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-md">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
