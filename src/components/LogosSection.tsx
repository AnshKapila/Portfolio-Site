export function LogosSection() {
  const logos = [
    { name: 'Ezinore', src: 'https://res.cloudinary.com/dquynstnf/image/upload/v1777180739/Ezinore_Logo_uepkie.png' },
    { name: 'Spatial Digest', src: 'https://res.cloudinary.com/dquynstnf/image/upload/v1777180739/Spatial_Digest_Logo_h3kc8h.avif' },
    { name: 'Bergaria', src: 'https://res.cloudinary.com/dquynstnf/image/upload/v1777180739/Untitled_design_5_ggohdk.avif' },
    { name: 'Metline', src: 'https://res.cloudinary.com/dquynstnf/image/upload/v1777180739/Metline_logo_stksnk.webp' },
    { name: 'Petara', src: 'https://res.cloudinary.com/dquynstnf/image/upload/v1777187149/Asset_14_3x_m2sumv.png' },
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
              className="flex shrink-0 animate-marquee items-center gap-10 sm:gap-16 px-5 sm:px-8"
              aria-hidden={set > 1 ? "true" : undefined}
            >
              {logos.map((logo) => (
                <img 
                  key={`${set}-${logo.name}`}
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-12 sm:h-14 md:h-16 w-auto max-w-[160px] md:max-w-[200px] object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 pointer-events-auto"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
