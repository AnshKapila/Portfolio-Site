export function FeaturesChess() {
  return (
    <section className="bg-black py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Pro features. Zero complexity.
          </h2>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-32 w-full">
          {/* Row 1: Content Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
                Designed to convert. Built to perform.
              </h3>
              <p className="text-white/60 font-body font-light text-sm md:text-base max-w-md">
                Every pixel is intentional. Our AI studies what works across thousands of top sites&mdash;then builds yours to outperform them all.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-medium text-sm inline-flex items-center hover:bg-white/10 transition-colors mt-4">
                Learn more
              </button>
            </div>
            <div className="flex-1 w-full relative">
              <div className="liquid-glass rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] bg-zinc-900 mx-auto max-w-lg">
                <img 
                  src="https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif" 
                  alt="Feature preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Content Right, Image Left */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
                It gets smarter. Automatically.
              </h3>
              <p className="text-white/60 font-body font-light text-sm md:text-base max-w-md">
                Your site evolves on its own. AI monitors every click, scroll, and conversion&mdash;then optimizes in real time. No manual updates. Ever.
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-medium text-sm inline-flex items-center hover:bg-white/10 transition-colors mt-4">
                See how it works
              </button>
            </div>
            <div className="flex-1 w-full relative">
              <div className="liquid-glass rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] bg-zinc-900 mx-auto max-w-lg">
                <img 
                  src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif" 
                  alt="Optimization preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
