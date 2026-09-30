import React from "react";
import { FadeIn } from "../components/FadeIn";
import { Plane, Music, Volume2 } from "lucide-react";
import { AviationSlideshow } from "../components/AviationSlideshow";

export const PersonalCornerSection: React.FC = () => {
  return (
    <section
      id="personal"
      className="bg-white text-neutral-900 font-['Kanit',sans-serif] pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-28 md:pb-36 px-5 sm:px-8 md:px-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 w-full z-30 relative select-none shadow-[0_-20px_50px_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={30} duration={0.8}>
            <h2
              className="font-['Kanit',sans-serif] font-black uppercase text-center leading-none tracking-tight text-neutral-900"
              style={{ fontSize: "clamp(2rem, 6vw, 80px)" }}
            >
              Personal Corner
            </h2>
          </FadeIn>
        </div>

        {/* Zigzag Layout: mỗi chủ đề 1 hàng, ảnh/des đổi bên xen kẽ, không bọc trong card */}
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24">
          {/* Row 1: Aviation — Ảnh TRÁI, Des PHẢI */}
          <FadeIn delay={0.1} y={30} duration={0.8}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-14">
              {/* Ảnh (trái) */}
              <div className="w-full lg:w-1/2">
                {/* Isolated Aviation Slideshow Component */}
                <AviationSlideshow />
              </div>

              {/* Description (phải) */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                    <Plane size={20} />
                  </div>
                  <h3 className="text-neutral-900 font-bold text-xl sm:text-2xl">
                    Aviation & HomeA320
                  </h3>
                </div>

                <p className="text-neutral-600 font-light leading-relaxed text-sm sm:text-base">
                  I&apos;m drawn to planes and aviation history. My
                  grandfather took me to the VPAF Museum as a kid to climb
                  into fighter jets. I collect 1:400 model aircraft and built
                  a DIY A320 flight simulator using wood plates, 3D printing,
                  and electronics. I founded HomeA320, renting it out by the
                  hour to fund my other research and engineering projects.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Row 2: Music — Ảnh PHẢI, Des TRÁI */}
          <FadeIn delay={0.2} y={30} duration={0.8}>
            <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-8 sm:gap-10 lg:gap-14">
              {/* Ảnh (phải) */}
              <div className="w-full lg:w-1/2">
                <div className="w-full h-[260px] sm:h-[320px] md:h-[350px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/90 relative group/img shadow-sm">
                  <img
                    src="/images/personal/music/electric-guitar.jpg"
                    alt="Vintage Electric Guitar & Tube Amp"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-white/95 text-xs sm:text-sm font-medium">
                      <Volume2 size={16} className="text-purple-300" />
                      <span>Favorite: Boston — More Than a Feeling</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description (trái) */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                    <Music size={20} />
                  </div>
                  <h3 className="text-neutral-900 font-bold text-xl sm:text-2xl">
                    American Classic Rock
                  </h3>
                </div>

                <p className="text-neutral-600 font-light leading-relaxed text-sm sm:text-base mb-6">
                  I&apos;m a fan of American rock music from the 60s through
                  early 90s, especially anti-war counterculture. For my 14th
                  birthday, my parents gave me an electric guitar. I
                  occasionally perform near Văn Miếu Coffee on summer
                  weekends. Fun fact: the band behind &apos;More Than a
                  Feeling&apos; (Boston) had an MIT electrical engineer who
                  built his own amplifiers.
                </p>

                {/* Song badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium">
                    🎸 Electric Guitar
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-medium">
                    🎶 Anti-War Rock 60s–90s
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-medium">
                    ☕ Văn Miếu Coffee Sessions
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
