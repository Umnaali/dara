import React from 'react';

export const IntroLogoSplash: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-white flex flex-col justify-between items-center py-12 px-6 overflow-hidden">
      {/* Top Header Placeholder spacing */}
      <div className="w-full max-w-[1440px] flex justify-end">
        {/* Four-circle icon top-right over black */}
        <div className="w-8 h-8 rounded-full bg-[#EFEDE3]/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#EFEDE3]"></div>
        </div>
      </div>

      {/* Main Center Typographic Wordmark & Circle Photo Crops */}
      <div className="flex flex-col items-center justify-center my-auto z-10 space-y-12">
        <h1 className="font-['Syne'] text-[clamp(64px,12vw,160px)] font-extrabold tracking-tighter leading-none text-white select-none text-center">
          dara
        </h1>

        {/* 4 Circular Photo Items in a Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl px-4">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/20 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
              alt="DARA Architectural Interior 1"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/20 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
              alt="DARA Architectural Exterior 2"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/20 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
              alt="DARA Landscape Coastal 3"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/20 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
              alt="DARA Modern Design 4"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Decorative Downward Wedge Notch motif leading into Hero */}
      <div className="w-full flex justify-center pb-4">
        <div className="w-12 h-6 border-b-2 border-r-2 border-white/30 transform rotate-45 animate-bounce"></div>
      </div>
    </section>
  );
};
