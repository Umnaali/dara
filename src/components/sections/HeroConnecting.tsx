import React from 'react';
import { Button } from '../ui/Button';
import { HERO_DATA } from '../../data/heroData';

export const HeroConnecting: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#0B0C0E] text-white flex flex-col justify-end overflow-hidden pb-16">
      {/* Background Architectural Image Frame */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="DARA Connecting People and Places Modern Architecture"
          className="w-full h-full object-cover object-center opacity-70 filter brightness-90"
        />
        {/* Subtle Dark Gradient Overlays for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/60 via-transparent to-transparent"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-16 pt-32 flex flex-col justify-end">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12">
          {/* Headline verbatim: "Connecting people and places" */}
          <div className="max-w-2xl">
            <h1 className="font-['Syne'] text-[clamp(44px,7vw,64px)] font-bold tracking-tight leading-[1.08] text-white whitespace-pre-line">
              {HERO_DATA.headline}
            </h1>
          </div>

          {/* Outlined Pill CTA: "Enquire now" */}
          <div className="shrink-0 mb-2">
            <Button variant="outline" href="#contact" className="px-8 py-4 text-base font-semibold">
              {HERO_DATA.enquireCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
