import React from 'react';
import { HeaderNav } from './components/global/HeaderNav';
import { IntroLogoSplash } from './components/sections/IntroLogoSplash';
import { HeroConnecting } from './components/sections/HeroConnecting';
import { HeroTaglineStrip } from './components/sections/HeroTaglineStrip';
import { WhoWeAre } from './components/sections/WhoWeAre';
import { OurApproach } from './components/sections/OurApproach';
import { RasAlKhaimah } from './components/sections/RasAlKhaimah';
import { LandscapeNoOther } from './components/sections/LandscapeNoOther';
import { WhyDara } from './components/sections/WhyDara';
import { HomesGallery } from './components/sections/HomesGallery';
import { UpdatesNews } from './components/sections/UpdatesNews';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/FooterSection';

export const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#000000] overflow-x-hidden selection:bg-[#EFEDE3] selection:text-black">
      {/* Top Floating Glass Navigation Header */}
      <HeaderNav />

      <main>
        {/* 1. Intro splash screen */}
        <IntroLogoSplash />

        {/* 2. Hero: "Connecting people and places" */}
        <HeroConnecting />

        {/* 3. Hero tagline strip: Brand belief + "Discover dara" */}
        <HeroTaglineStrip />

        {/* 4. Who We Are */}
        <WhoWeAre />

        {/* 5. Our Approach: 5 panels — UNDERSTAND, CONCEPT, DESIGN, CREATE, LIVE */}
        <OurApproach />

        {/* 6. A New Chapter — Ras Al Khaimah */}
        <RasAlKhaimah />

        {/* 7. A landscape like no other. */}
        <LandscapeNoOther />

        {/* 8. Why Dara? — 3 cards */}
        <WhyDara />

        {/* 9. Homes shaped around people, rooted in place — Gallery */}
        <HomesGallery />

        {/* 10. Updates — News carousel */}
        <UpdatesNews />

        {/* 11. Contact */}
        <ContactSection />

        {/* 12. Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
