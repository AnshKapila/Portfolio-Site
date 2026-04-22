export function LogosSection() {
  return (
    <section className="py-24 border-y border-white/10 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <p className="text-sm text-gray-500 mb-12 uppercase tracking-widest font-medium">
          Trusted by ambitious teams
        </p>
        
        {/* Simple flex strip */}
        <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-50 grayscale">
          {/* Logo Placeholders - using text to maintain clean lightweight feel without external images */}
          <span className="text-2xl font-bold tracking-tighter hover:opacity-100 hover:grayscale-0 transition-all cursor-default">Stripe</span>
          <span className="text-2xl font-black italic hover:opacity-100 hover:grayscale-0 transition-all cursor-default">Vercel</span>
          <span className="text-2xl font-semibold tracking-tight hover:opacity-100 hover:grayscale-0 transition-all cursor-default">Linear</span>
          <span className="text-2xl font-medium tracking-wide hover:opacity-100 hover:grayscale-0 transition-all cursor-default">Notion</span>
          <span className="text-2xl font-bold hover:opacity-100 hover:grayscale-0 transition-all cursor-default">Figma</span>
        </div>
      </div>
    </section>
  );
}
