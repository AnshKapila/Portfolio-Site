import { HlsVideo } from './HlsVideo';

export function CtaFooter() {
  return (
    <section className="relative w-full overflow-hidden bg-black flex flex-col items-center justify-center min-h-[600px] pt-32 pb-8">
      {/* Video Background */}
      <HlsVideo src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8" />

      {/* Gradient Fades */}
      <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl mx-auto w-full flex-grow pt-12">
        
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white mb-8 tracking-tight">
          Your next website starts here.
        </h2>
        
        <p className="text-white/60 font-body font-light text-sm md:text-base mb-12 max-w-lg">
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure. Just possibilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-medium text-sm hover:bg-white/10 transition-colors w-full sm:w-auto">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 font-medium text-sm hover:bg-white/90 transition-colors w-full sm:w-auto">
            View Pricing
          </button>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white/40 text-xs font-body">
          &copy; 2026 Studio. All rights reserved.
        </span>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/40 text-xs font-body hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-white/40 text-xs font-body hover:text-white transition-colors">Terms</a>
          <a href="#" className="text-white/40 text-xs font-body hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </section>
  );
}
