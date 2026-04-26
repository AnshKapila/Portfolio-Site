export function LogosSection() {
  const logos = [
    { name: 'Ezinore', src: '/images/clients/logos/ezinore.png' },
    { name: 'Spatial Digest', src: '/images/clients/logos/spatial-digest.png' },
    { name: 'Bergaria', src: '/images/clients/logos/bergaria.png' },
    { name: 'Clickpic', src: '/images/clients/logos/clickpic.png' },
    { name: 'Petara', src: '/images/clients/logos/petara.png' },
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
