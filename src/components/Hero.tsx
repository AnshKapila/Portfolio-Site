import { AnimatedHeading } from './AnimatedHeading';
import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col font-sans">
      {/* Video Background */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col w-full h-full">
        
        {/* Hero Content Wrapper */}
        <div className="px-6 md:px-12 lg:px-16 pt-32 pb-12 lg:pb-16 flex-1 flex flex-col justify-end text-white relative">
          <div className="lg:grid lg:grid-cols-2 lg:items-end w-full gap-8">
            
            {/* Left Column */}
            <div className="flex flex-col">
              <AnimatedHeading 
                text={"Clarity, direction,\nand execution."} 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
              />
              
              <FadeIn delayMs={800} durationMs={1000} className="mb-5">
                <p className="text-base md:text-lg text-gray-300 max-w-xl">
                  We help founders launch and scale their digital presence. Not just design, structured execution.
                </p>
              </FadeIn>

              <FadeIn delayMs={1200} durationMs={1000}>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Book a Call
                  </a>
                  <a href="#work" className="inline-block liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
                    View Work
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Column */}
            <div className="flex justify-start lg:justify-end mt-8 lg:mt-0">
              <FadeIn delayMs={1400} durationMs={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl inline-block">
                  <span className="text-lg md:text-xl font-light text-white">
                    UX. Websites. Growth.
                  </span>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
