export function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-32 max-w-2xl flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-6">
            Ready to execute?
          </h2>
          <p className="text-lg font-light leading-relaxed text-gray-400 mb-10">
            Stop waiting for perfect design. Start building systems that scale and convert.
          </p>
          <button className="bg-white text-black w-full sm:w-[240px] px-8 py-4 rounded-lg font-medium text-base hover:bg-gray-200 transition-colors flex items-center justify-center">
            Book a Call
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
