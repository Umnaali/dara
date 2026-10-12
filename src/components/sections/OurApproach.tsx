import React, { useState } from 'react';
import { APPROACH_PANELS } from '../../data/approachData';

export const OurApproach: React.FC = () => {
  // Default open: LIVE (id: 5) per design PDF — DARA_DESIGN_SPEC.md §6
  const [activePanelId, setActivePanelId] = useState<number>(5);

  return (
    <>
      <style>{`
        @keyframes panelContentIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section id="our-approach" className="w-full bg-[#EFEDE3] py-20 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto">

          {/* Section Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
            <div className="flex items-center gap-8 flex-1">
              {/* CONFIRMED heading — DARA_DESIGN_SPEC.md §6 */}
              <h2 className="font-['Syne'] text-[clamp(28px,3.5vw,36px)] font-semibold tracking-tight text-[#1A1A1A] shrink-0">
                Our approach
              </h2>
              {/* Horizontal rule extending right from heading */}
              <div className="hidden lg:block flex-1 h-px bg-[#1A1A1A]/20"></div>
            </div>

            {/* Right Intro Text — CONFIRMED DARA_DESIGN_SPEC.md §6 */}
            <div className="max-w-md space-y-4 lg:pl-8">
              <p className="text-[#1A1A1A] text-base leading-[1.7]">
                Every Dara project begins with understanding; the people, the place and the opportunity.
              </p>
              <p className="text-[#666666] text-base leading-[1.7]">
                That understanding guides our decisions from concept and strategy through to delivery, shaping spaces that are thoughtful, connected and made for everyday life.
              </p>
            </div>
          </div>

          {/* Five Panels Row — A7/A8 interaction */}
          <div className="flex gap-2 lg:gap-3 h-[480px] lg:h-[580px]">
            {APPROACH_PANELS.map((panel) => {
              const isActive = activePanelId === panel.id;
              return (
                <div
                  key={panel.id}
                  onClick={() => setActivePanelId(panel.id)}
                  onMouseEnter={() => setActivePanelId(panel.id)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActivePanelId(panel.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-label={`${panel.label} — view approach stage`}
                  className={`
                    relative rounded-2xl overflow-hidden cursor-pointer
                    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/50
                    ${isActive ? 'flex-[4]' : 'flex-[0.45]'}
                  `}
                >
                  {/* Background Photo */}
                  <img
                    src={panel.imageUrl}
                    alt={panel.label}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-[1.04]' : 'scale-100'}`}
                  />

                  {/* Gradient overlay — darker on collapsed for label legibility */}
                  <div className={`absolute inset-0 transition-all duration-500 ${isActive ? 'bg-gradient-to-t from-black/70 via-black/10 to-transparent' : 'bg-black/40'}`}></div>

                  {/* Collapsed: vertical label rotated */}
                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-white font-['Syne'] font-bold text-[10px] tracking-[0.3em] uppercase select-none"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {panel.label}
                      </span>
                    </div>
                  )}

                  {/* Expanded: full content overlay */}
                  {isActive && (
                    <div className="absolute inset-0 flex flex-col justify-end p-7 lg:p-10">
                      <div style={{ animation: 'panelContentIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards' }}>
                        <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold">
                          {panel.label}
                        </p>
                        {panel.subtitle && (
                          <h3 className="font-['Syne'] text-white text-xl lg:text-2xl font-bold mb-3 leading-snug">
                            {panel.subtitle}
                          </h3>
                        )}
                        <p className="text-white/75 text-sm leading-relaxed max-w-[280px]">
                          {panel.body}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};
