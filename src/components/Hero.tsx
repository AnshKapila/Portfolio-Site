import { useRef, useEffect, useState } from 'react';
import { AnimatedHeading } from './AnimatedHeading';
import { FadeIn } from './FadeIn';
import { cn } from '../lib/utils';

interface HeroProps {
  onBrightnessChange?: (isBright: boolean) => void;
}

export function Hero({ onBrightnessChange }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isBright, setIsBright] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let lastBright = false;

    const checkBrightness = () => {
      if (!ctx || video.videoWidth === 0) return;
      
      canvas.width = 8;
      canvas.height = 8;
      
      try {
        ctx.drawImage(video, 0, 0, 8, 8);
        const data = ctx.getImageData(0, 0, 8, 8).data;
        
        let r = 0, g = 0, b = 0;
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }
        
        const count = data.length / 4;
        r /= count; g /= count; b /= count;
        
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
        const currentlyBright = luminance > 120; // threshold for switching to dark text
        
        if (currentlyBright !== lastBright) {
          lastBright = currentlyBright;
          setIsBright(currentlyBright);
          onBrightnessChange?.(currentlyBright);
        }
      } catch (e) {
        // Silently catch cross-origin canvas read errors
      }
    };

    const intervalId = setInterval(checkBrightness, 250);
    return () => clearInterval(intervalId);
  }, [onBrightnessChange]);

  return (
    <section className="relative w-full h-[100dvh] flex flex-col font-sans overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col w-full h-full">
        
        {/* Hero Content Wrapper */}
        <div className={cn("px-6 md:px-12 lg:px-16 pt-32 pb-12 lg:pb-16 flex-1 flex flex-col justify-end relative transition-colors duration-1000", isBright ? "text-black" : "text-white")}>
          <div className="lg:grid lg:grid-cols-2 lg:items-end w-full gap-8">
            
            {/* Left Column */}
            <div className="flex flex-col">
              <AnimatedHeading 
                text={"Clarity, direction,\nand execution."} 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading italic tracking-tight mb-4"
              />
              
              <FadeIn delayMs={800} durationMs={1000} className="mb-5">
                <p className={cn("text-base md:text-lg max-w-xl transition-colors duration-1000", isBright ? "text-gray-800" : "text-gray-300")}>
                  We help founders launch and scale their digital presence. Not just design, structured execution.
                </p>
              </FadeIn>

              <FadeIn delayMs={1200} durationMs={1000}>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className={cn("inline-block px-8 py-3 rounded-lg font-medium transition-colors duration-1000", isBright ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-100")}>
                    Book a Call
                  </a>
                  <a href="#work" className={cn("inline-block border px-8 py-3 rounded-lg font-medium transition-colors duration-1000 backdrop-blur-md", isBright ? "border-black/20 text-black hover:bg-black hover:text-white" : "border-white/20 text-white hover:bg-white hover:text-black")}>
                    View Work
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Column */}
            <div className="flex justify-start lg:justify-end mt-8 lg:mt-0">
              <FadeIn delayMs={1400} durationMs={1000}>
                <div className={cn("border px-6 py-3 rounded-xl inline-block backdrop-blur-md transition-colors duration-1000", isBright ? "border-black/20 bg-white/20 text-black" : "border-white/20 bg-black/10 text-white")}>
                  <span className="text-lg md:text-xl font-light">
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
