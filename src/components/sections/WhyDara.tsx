import React, { useState } from 'react';
import { WHY_DARA_CARDS } from '../../data/whyDaraData';

export const WhyDara: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="why-dara" className="w-full bg-white py-24 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">

        {/* Section heading — CONFIRMED: "Why Dara?" — DARA_DESIGN_SPEC.md §9 */}
        <h2 className="font-['Syne'] text-[clamp(28px,3.5vw,36px)] font-semibold tracking-tight text-[#1A1A1A] mb-12">
          Why Dara?
        </h2>

        {/* Three Tall Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_DARA_CARDS.map((card) => {
            const isHovered = hoveredCard === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onFocus={() => setHoveredCard(card.id)}
                onBlur={() => setHoveredCard(null)}
                tabIndex={0}
                className="relative rounded-[24px] overflow-hidden cursor-pointer group transition-transform duration-400 ease-out hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Background Photo */}
                <img
                  src={card.imageUrl}
                  alt={card.title.replace('\n', ' ')}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Card Content — Bottom Left */}
                <div className="absolute bottom-0 left-0 right-0 p-7 flex flex-col gap-2">
                  {/* Title moves up on hover */}
                  <h3
                    className={`font-['Syne'] text-white font-bold text-xl leading-tight whitespace-pre-line transition-transform duration-400 ease-out
                      ${isHovered ? '-translate-y-2' : 'translate-y-0'}`}
                  >
                    {card.title}
                  </h3>

                  {/* Subtitle always visible */}
                  <p className="text-white/70 text-sm font-medium">
                    {card.subtitle}
                  </p>

                  {/* Hover: Text replaces the arrow — A12 behavior */}
                  <div
                    className={`transition-all duration-400 ease-out overflow-hidden
                      ${isHovered ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-white/85 text-sm leading-relaxed">
                      {card.hoverCopy}
                    </p>
                  </div>

                  {/* Arrow — hidden on hover, shown when not hovered (A12) */}
                  <div
                    className={`absolute bottom-6 right-6 w-10 h-10 rounded-full border border-white/60 flex items-center justify-center transition-all duration-300
                      ${isHovered ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
                    aria-hidden="true"
                  >
                    <span className="text-white text-sm">↗</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
