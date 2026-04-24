/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { WhoWeHelpSection } from './components/WhoWeHelpSection';
import { LogosSection } from './components/LogosSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { DreamShipSection } from './components/DreamShipSection';
import { FounderSection } from './components/FounderSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isHeroBright, setIsHeroBright] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col font-sans selection:bg-white/30 text-white">
      <Navbar isHeroBright={isHeroBright} />
      <Hero onBrightnessChange={setIsHeroBright} />
      <WorkSection />
      <WhoWeHelpSection />
      <LogosSection />
      <ServicesSection />
      <FounderSection />
      <TestimonialsSection />
      <DreamShipSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
