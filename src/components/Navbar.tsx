export function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-16 pt-6 animate-in fade-in duration-1000">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between border border-white/5 shadow-2xl">
        <div 
          className="text-xl font-bold tracking-tight text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          INTENT
        </div>
        
        {/* 4 Tertiary buttons/links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        
        {/* 1 Primary button */}
        <div>
          <a 
            href="#contact" 
            className="inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </nav>
    </div>
  );
}
