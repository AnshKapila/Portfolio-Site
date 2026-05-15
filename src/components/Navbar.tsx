import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { services } from "../data/services";

export function Navbar({ isHeroBright = false }: { isHeroBright?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = !isScrolled && isHeroBright ? "text-black" : "text-white";
  const linkColor =
    !isScrolled && isHeroBright ? "text-gray-800" : "text-gray-300";
  const btnClass =
    !isScrolled && isHeroBright
      ? "bg-black text-white hover:bg-gray-800"
      : "bg-white text-black hover:bg-gray-200";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-500 animate-in fade-in duration-1000",
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        <Link
          to="/"
          className={cn(
            "cursor-pointer transition-colors duration-500",
            textColor,
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo className="h-6 w-auto" />
        </Link>

        {/* Tertiary buttons/links */}
        <div
          className={cn(
            "hidden md:flex items-center gap-8 lg:gap-12 text-base transition-colors duration-500 absolute left-1/2 -translate-x-1/2",
            linkColor,
          )}
        >
          <Link to="/work" className="hover:opacity-75 transition-opacity">
            Work
          </Link>

          <div className="relative group p-4 -m-4 flex items-center justify-center">
            <Link
              to="/services"
              className="hover:opacity-75 transition-opacity flex items-center gap-1"
            >
              Services
              <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-4px)] w-72 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl p-2 flex flex-col gap-1">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group/link"
                  >
                    <span className="block text-sm font-medium text-white mb-1 group-hover/link:text-[#FFD1C2] transition-colors">
                      {service.title}
                    </span>
                    <span className="block text-xs text-gray-400 line-clamp-2">
                      {service.positioning}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/contact" className="hover:opacity-75 transition-opacity">
            Contact
          </Link>
        </div>

        {/* 1 Primary button */}
        <div>
          <a
            href="https://wa.me/919821687437"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-500",
              btnClass,
            )}
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
