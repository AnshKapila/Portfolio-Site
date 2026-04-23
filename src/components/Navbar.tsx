import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300 animate-in fade-in duration-1000",
        isScrolled ? "bg-black" : "bg-transparent"
      )}
    >
      <div className="w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
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
      </div>
    </nav>
  );
}
