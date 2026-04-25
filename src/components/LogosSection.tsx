export function LogosSection() {
  const logos = [
    { name: 'Ezinore', src: 'https://storage.googleapis.com/mstudio-attachments/df0fc5b1-6aab-49bd-9ba8-42fcfbaf1e57/ezinore.png' },
    { name: 'Spatial Digest', src: 'https://storage.googleapis.com/mstudio-attachments/a0209489-32cf-4b13-bef1-49bce768be69/Spatial_Digest_horizontal.png' },
    { name: 'Bergaria', src: 'https://storage.googleapis.com/mstudio-attachments/5d2fe39d-2cc5-4424-95c5-bf67fe997d97/Bergaria.png' },
    { name: 'Clickpic', src: 'https://storage.googleapis.com/mstudio-attachments/38dca5de-8cde-47cc-afe9-fa19cb9e9f60/Clickpic.png' },
    { name: 'Petara', src: 'https://storage.googleapis.com/mstudio-attachments/51cf6a52-9653-4bf0-baac-2d4e680a6566/Petara.png' },
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
