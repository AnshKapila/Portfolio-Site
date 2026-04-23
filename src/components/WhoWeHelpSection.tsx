export function WhoWeHelpSection() {
  const pillars = [
    {
      title: "Founders",
      content: "You have the vision, but need a partner to translate it into a digital product that actually converts."
    },
    {
      title: "Growing Businesses",
      content: "Your existing platform is holding you back. You need a scalable system to handle your next phase of growth."
    },
    {
      title: "Teams lacking direction",
      content: "You have internal resources but lack a cohesive strategy. We provide the blueprint and lead the execution."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight">
            Who we help
          </h2>
          <p className="mt-6 text-gray-400">
            We partner with ambitious teams ready to move beyond generic templates and focus on measurable outcomes.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="flex flex-col border-t border-white/20 pt-6">
              <h3 className="text-xl font-medium mb-4 text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {pillar.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
