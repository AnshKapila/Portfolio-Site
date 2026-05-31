import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { WorkSection } from '../components/WorkSection';
import { WhoWeHelpSection } from '../components/WhoWeHelpSection';
import { LogosSection } from '../components/LogosSection';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { DreamShipSection } from '../components/DreamShipSection';
import { FaqSection } from '../components/FaqSection';
import { FounderSection } from '../components/FounderSection';
import { SocialPresenceSection } from '../components/SocialPresenceSection';

interface HomePageProps {
  setIsHeroBright: (isBright: boolean) => void;
}

export function HomePage({ setIsHeroBright }: HomePageProps) {
  return (
    <>
      <SEO />
      <Hero onBrightnessChange={setIsHeroBright} />
      <WorkSection />
      <WhoWeHelpSection />
      <LogosSection />
      <ServicesSection />
      <FounderSection />
      {/* <SocialPresenceSection /> */}
      {/* <TestimonialsSection /> */}
      <DreamShipSection />
      <FaqSection />
    </>
  );
}
