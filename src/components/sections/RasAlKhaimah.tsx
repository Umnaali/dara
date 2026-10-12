import React from 'react';
import { RAK_STATS, RAK_COPY } from '../../data/rakData';

export const RasAlKhaimah: React.FC = () => {
  return (
    <section id="ras-al-khaimah" className="w-full bg-[#EBE7D6] py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* Section Heading block */}
        <div className="mb-16">
          {/* CONFIRMED heading: "A new chapter" — DARA_DESIGN_SPEC.md §7 */}
          <h2 className="font-['Syne'] text-[clamp(36px,5vw,64px)] font-bold tracking-tight text-[#1A1A1A] leading-[1.1]">
            {RAK_COPY.heading}
          </h2>
          {/* CONFIRMED sub-label: "Ras Al Khaimah" */}
          <p className="text-sm text-[#666666] uppercase tracking-widest mt-2">
            {RAK_COPY.subLabel}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Body Copy + Hiker Photo */}
          <div className="space-y-8">
            {/* CONFIRMED copy — DARA_DESIGN_SPEC.md §7 */}
            {RAK_COPY.paragraphs.map((para, i) => (
              <p key={i} className={`text-base leading-[1.75] ${i === 0 ? 'text-[#1A1A1A]' : 'text-[#555555]'}`}>
                {para}
              </p>
            ))}

            {/* Hiker Tall Rounded-Rectangle Photo */}
            <div className="w-full max-w-[340px] rounded-[40px] overflow-hidden shadow-xl mt-6 mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
                alt="Hiker with backpack standing on a rocky mountainside in Ras Al Khaimah"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>

          {/* Right: Key Figures + Circular Image */}
          <div className="space-y-6">

            {/* Three Key Figures */}
            <div className="space-y-0 divide-y divide-[#1A1A1A]/15">
              {RAK_STATS.map((stat) => (
                <div key={stat.id} className="py-8 grid grid-cols-[auto_1fr] gap-6 items-start">
                  {/* Large Figure */}
                  <div>
                    <span className="font-['Syne'] text-[clamp(48px,7vw,89px)] font-extrabold text-[#1A1A1A] leading-none">
                      {stat.figure}
                    </span>
                  </div>
                  {/* Label stack */}
                  <div className="flex flex-col justify-center gap-1 pt-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666] font-semibold">
                      {stat.label}
                    </span>
                    <span className="text-base font-semibold text-[#1A1A1A]">
                      {stat.title}
                    </span>
                    <span className="text-xs text-[#666666] leading-relaxed mt-1">
                      {stat.footnote}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Circular Right Photo (Boat & mountains scene) */}
            <div className="flex justify-end">
              <div className="w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=600&q=80"
                  alt="Man in hat standing beside a boat on water with dramatic mountains in the background"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
