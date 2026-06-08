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
      <SEO 
        title="Web & Product Design Studio for Startups | Intent Studios"
        description="Intent Studios is an elite web and product design studio building launch-ready digital experiences, bespoke SaaS platforms, and scalable interactive brand systems."
        keywords="Web Design Studio, Product Design Studio, UX Design, Startup Websites, Launch Websites, SaaS Experiences, Intent Studios"
        url="https://intentstudios.com/"
      />
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
