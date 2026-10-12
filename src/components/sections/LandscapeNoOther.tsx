import React from 'react';

// Landscape labels CONFIRMED from DARA_DESIGN_SPEC.md §8
// Circle 3 label: NEEDS CONFIRMATION (not present in sources)
const LANDSCAPE_CIRCLES = [
  {
    id: 'al-marjan',
    label: 'AL MARJAN ISLAND', // CONFIRMED
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    alt: 'Aerial view of Al Marjan Island coastal beach in Ras Al Khaimah',
  },
  {
    id: 'jebel-jais',
    label: 'JEBEL JAIS', // CONFIRMED
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    alt: 'Jebel Jais mountain range with coastal views in Ras Al Khaimah',
  },
  {
    id: 'unlabelled',
    label: undefined, // NEEDS CONFIRMATION — no label in sources
    imageUrl: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=600&q=80',
    alt: 'Mountain landscape in Ras Al Khaimah',
  },
  {
    id: 'al-wadi',
    label: 'AL WADI DESERT', // CONFIRMED
    imageUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=600&q=80',
    alt: 'Desert dunes at Al Wadi in Ras Al Khaimah',
  },
];

export const LandscapeNoOther: React.FC = () => {
  return (
    <section className="w-full bg-[#E9E5D2] py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* Centred heading — CONFIRMED: "A landscape like no other." with trailing full stop */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-['Syne'] text-[clamp(32px,5vw,48px)] font-bold tracking-tight text-[#1A1A1A] leading-[1.15] mb-6">
            A landscape like no other.
          </h2>
          {/* Body copy CONFIRMED — DARA_DESIGN_SPEC.md §8 */}
          <p className="text-[#666666] text-base leading-[1.7]">
            Mountains, desert and coastline meet a rich cultural heritage, creating a distinctive environment shaped by nature, exploration and a closer connection to everyday life.
          </p>
        </div>

        {/* Four Joined Circular Photos in a row */}
        <div className="flex justify-center">
          <div className="flex">
            {LANDSCAPE_CIRCLES.map((circle, idx) => (
              <div
                key={circle.id}
                className={`relative w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden flex-shrink-0 shadow-lg
                  ${idx > 0 ? '-ml-8 lg:-ml-12' : ''}`}
                style={{ zIndex: idx + 1 }}
              >
                <img
                  src={circle.imageUrl}
                  alt={circle.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                {/* Label (only if confirmed) */}
                {circle.label && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-[9px] lg:text-[11px] font-bold tracking-[0.15em] uppercase text-center px-4 leading-tight drop-shadow-lg">
                      {circle.label}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
