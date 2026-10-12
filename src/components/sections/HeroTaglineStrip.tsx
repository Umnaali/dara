import React from 'react';
import { Button } from '../ui/Button';
import { HERO_DATA } from '../../data/heroData';

export const HeroTaglineStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#191919] text-white py-12 px-6 lg:px-16 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Small White Narrative Text */}
        <p className="max-w-3xl text-sm md:text-base lg:text-lg font-normal text-white/90 leading-relaxed">
          {HERO_DATA.taglineText}
        </p>

        {/* Right CTA Button: "Discover dara" */}
        <div className="shrink-0">
          <Button variant="translucent" href="#who-we-are" className="px-7 py-3 text-sm font-medium">
            {HERO_DATA.discoverCta}
          </Button>
        </div>
      </div>
    </section>
  );
};
