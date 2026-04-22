export function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Large CTA Component */}
        <div className="text-center mb-32 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-8">
            Ready to execute?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light mb-10">
            Stop waiting for perfect design. Start building systems that scale and convert.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Book a Discovery Call
          </button>
        </div>

        {/* Footer Bottom Strip */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10 text-gray-500 text-sm">
          <div>
            &copy; {new Date().getFullYear()} Intent Studios. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
