import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { NEWS_ITEMS } from '../../data/newsData';

export const UpdatesNews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex(i => Math.max(0, i - 1));
  const handleNext = () => setActiveIndex(i => Math.min(NEWS_ITEMS.length - 1, i + 1));

  return (
    <section id="updates" className="w-full bg-white py-24 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          {/* CONFIRMED heading: "Updates" — DARA_DESIGN_SPEC.md §11 */}
          <h2 className="font-['Syne'] text-[clamp(28px,3.5vw,36px)] font-semibold tracking-tight text-[#1A1A1A]">
            Updates
          </h2>
          {/* CONFIRMED CTA: "View all" — DARA_DESIGN_SPEC.md §2.3 */}
          <Button variant="solid-black" href="#" className="text-sm px-6">
            View all
          </Button>
        </div>

        {/* Three News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item, idx) => (
            <article
              key={item.id}
              className={`rounded-[20px] overflow-hidden bg-[#F9F9F7] border border-[#EFEDE3] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                ${idx === activeIndex ? 'ring-2 ring-[#1A1A1A]/20' : ''}
              `}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.imageUrl}
                  alt={item.headline}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                {/* Source/Date Overlay — conditional on NEEDS CONFIRMATION */}
                {item.sourceOverlay && (
                  <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2.5 py-1 rounded-full font-medium backdrop-blur-sm">
                    {item.sourceOverlay} · {item.dateOverlay}
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-1 gap-3">
                <h3 className="font-['Syne'] text-[#1A1A1A] font-semibold text-base leading-snug">
                  {item.headline}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
                {/* Arrow link — CONFIRMED "→" style DARA_DESIGN_SPEC.md §2.3 */}
                <div className="pt-3 border-t border-[#EFEDE3] mt-auto">
                  <a
                    href={item.linkUrl}
                    className="text-[#1A1A1A] text-sm font-medium hover:text-[#666666] transition-colors duration-200 flex items-center gap-2 group"
                    aria-label={`Read more about ${item.headline}`}
                  >
                    <span>Read more</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation Controls — CONFIRMED: black circular ‹ / › buttons DARA_DESIGN_SPEC.md §2.3 */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-all duration-200 hover:bg-[#333] disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous update"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === NEWS_ITEMS.length - 1}
            className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-all duration-200 hover:bg-[#333] disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next update"
          >
            ›
          </button>

          {/* Progress indicator track */}
          <div className="flex-1 h-[2px] bg-[#EFEDE3] relative">
            <div
              className="absolute top-0 left-0 h-full bg-[#1A1A1A] transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / NEWS_ITEMS.length) * 100}%` }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
};
