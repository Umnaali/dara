import React, { useRef, useState, useEffect } from 'react';

// Gallery image set NEEDS CONFIRMATION — design PDF and animation PDF show different image sets
// Using representative placeholder images pending asset confirmation
const GALLERY_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', alt: 'Person relaxing on a lounger on a residential balcony' },
  { id: 2, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80', alt: 'Paraglider soaring over dramatic mountain landscape' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80', alt: 'Runner on a shadowed ground below cliffs' },
  { id: 4, src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80', alt: 'Woman reading on a sofa in a modern home interior' },
  { id: 5, src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80', alt: 'Aerial view of mountain road winding through landscape' },
];

export const HomesGallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update thumb position as track scrolls
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(track.scrollLeft / maxScroll);
      }
    };
    track.addEventListener('scroll', handleScroll);
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#EFEDE3] py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mb-12">
        {/* CONFIRMED heading — DARA_DESIGN_SPEC.md §10 */}
        <h2 className="font-['Syne'] text-[clamp(24px,3.5vw,36px)] font-semibold tracking-tight text-[#1A1A1A] leading-tight max-w-sm">
          Homes shaped around<br />people, rooted in place
        </h2>
      </div>

      {/* Scrollable Gallery Track */}
      <div
        ref={trackRef}
        className="flex gap-4 px-6 lg:px-16 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* Duplicate images for marquee feel */}
        {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 rounded-[20px] overflow-hidden shadow-md"
            style={{
              width: idx % 3 === 0 ? '280px' : idx % 2 === 0 ? '340px' : '260px',
              height: '480px',
              scrollSnapAlign: 'start',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Progress Track & Thumb */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mt-8">
        <div className="relative h-[2px] bg-[#1A1A1A]/15 rounded-full">
          <div
            className="absolute top-0 h-full bg-[#1A1A1A] rounded-full transition-all duration-100"
            style={{ width: '20%', left: `${scrollProgress * 80}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
