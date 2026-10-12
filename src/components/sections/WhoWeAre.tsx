import React from 'react';
import { Button } from '../ui/Button';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="who-we-are" className="w-full bg-white py-24 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

        {/* Left Column: Heading + Sub-label */}
        <div className="flex flex-col justify-start gap-6">
          <div>
            {/* CONFIRMED DARA_DESIGN_SPEC.md §5 */}
            <h2 className="font-['Syne'] text-[clamp(40px,6vw,80px)] font-bold leading-[1.0] tracking-tight text-[#1A1A1A]">
              Who<br />we<br />are
            </h2>
          </div>
          <p className="text-sm text-[#666666] uppercase tracking-widest">
            A different perspective on real estate development
          </p>
        </div>

        {/* Center Column: Large Circular Photo */}
        <div className="flex justify-center items-center">
          <div className="w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#EFEDE3]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Dara team collaborating around a table with plans and laptops, top-down view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Body Copy + CTA */}
        <div className="flex flex-col gap-8">
          {/* Paragraph 1 — CONFIRMED exact copy DARA_DESIGN_SPEC.md §5 */}
          <p className="text-[#1A1A1A] text-base leading-[1.7]">
            Dara is a UAE real estate developer shaped by a simple belief: the best places begin with understanding people.
          </p>
          {/* Paragraph 2 — CONFIRMED exact copy DARA_DESIGN_SPEC.md §5 */}
          <p className="text-[#666666] text-base leading-[1.7]">
            With more than two decades of international experience across development, design and construction, we create thoughtful places that respond to how people live and the character of where they belong.
          </p>
          {/* CTA: "Learn more" — CONFIRMED DARA_DESIGN_SPEC.md §2.3 */}
          <div>
            <Button variant="solid-black" href="#our-approach">
              Learn more
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
