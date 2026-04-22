import { HlsVideo } from './HlsVideo';

export function StartSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black flex items-center justify-center min-h-[500px] py-32">
      {/* Video Background */}
      <HlsVideo src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8" />

      {/* Gradient Fades */}
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          How It Works
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white mb-6">
          You dream it. We ship it.
        </h2>
        
        <p className="text-white/60 font-body font-light text-sm md:text-base mb-10 max-w-lg">
          Share your vision. Our AI handles the rest&mdash;wireframes, design, code, launch. All in days, not quarters.
        </p>

        <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-medium text-sm flex items-center hover:bg-white/10 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}
