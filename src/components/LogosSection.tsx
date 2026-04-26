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
        
        {/* Simple flex strip */}
        <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20">
          {logos.map((logo) => (
            <img 
              key={logo.name}
              src={logo.src} 
              alt={logo.name} 
              className="h-8 md:h-10 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
