import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export function Navbar({ isHeroBright = false }: { isHeroBright?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = !isScrolled && isHeroBright ? "text-black" : "text-white";
  const linkColor = !isScrolled && isHeroBright ? "text-gray-800" : "text-gray-300";
  const btnClass = !isScrolled && isHeroBright ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-200";

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-500 animate-in fade-in duration-1000",
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        <Link 
          to="/"
          className={cn("cursor-pointer transition-colors duration-500", textColor)}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo className="h-6 w-auto" />
        </Link>
        
        {/* Tertiary buttons/links */}
        <div className={cn("hidden md:flex items-center gap-8 lg:gap-12 text-base transition-colors duration-500 absolute left-1/2 -translate-x-1/2", linkColor)}>
          <Link to="/work" className="hover:opacity-75 transition-opacity">Work</Link>
          <a href="/#services" className="hover:opacity-75 transition-opacity">Services</a>
          <Link to="/contact" className="hover:opacity-75 transition-opacity">Contact</Link>
        </div>
        
        {/* 1 Primary button */}
        <div>
          <a 
            href="https://wa.me/919821687437"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-500",
              btnClass
            )}
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
