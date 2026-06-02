import petaraLogo from '../assets/images/regenerated_image_1778647625524.png';
import bergariaLogo from '../assets/images/regenerated_image_1778647627895.avif';
import { ezinoreLogo, spatialDigestLogo, metlineLogo } from '../data/projects';
import petaraOriginalLogo from '../assets/images/logoPetaraOriginal_downloaded.png';

export function LogosSection() {
  const logos = [
    { name: 'Ezinore', src: ezinoreLogo },
    { name: 'Spatial Digest', src: spatialDigestLogo },
    { name: 'Bergaria', src: bergariaLogo },
    { name: 'Metline', src: metlineLogo },
    { name: 'Petara Original', src: petaraOriginalLogo },
    { name: 'Petara New', src: petaraLogo },
  ];

  return (
    <section className="py-24 border-y border-white/10 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <p className="text-sm text-gray-500 mb-12 uppercase tracking-widest font-medium">
          Trusted by ambitious teams
        </p>
        
        {/* Infinite scrolling logos */}
        <div className="relative flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Create 4 sets of the logos so they span ultra wide monitors before looping resets */}
          {[1, 2, 3, 4].map((set) => (
            <div 
              key={set} 
              className="flex shrink-0 animate-marquee items-center"
              aria-hidden={set > 1 ? "true" : undefined}
            >
              {logos.map((logo, idx) => (
                <div key={`${set}-${logo.name}-${idx}`} className="flex justify-center items-center w-40 sm:w-48 md:w-56 shrink-0">
                  <img 
                    src={logo.src} 
                    referrerPolicy="no-referrer"
                    alt={logo.name} 
                    className="h-12 sm:h-14 md:h-16 w-auto max-w-[140px] md:max-w-[180px] object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 pointer-events-auto"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
