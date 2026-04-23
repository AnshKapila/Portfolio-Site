import { motion } from 'motion/react';

export function FounderSection() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* The Outer Banner Card */}
        <div className="relative w-full rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col lg:flex-row min-h-[500px] shadow-2xl">

          {/* Background Concentric Circles (from reference style) */}
          <div className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] rounded-full border-[1.5px] border-white/5 pointer-events-none" />
          <div className="absolute bottom-[-40%] right-[-10%] w-[800px] h-[800px] rounded-full border-[1.5px] border-white/5 pointer-events-none" />
          <div className="absolute top-[20%] left-[40%] w-[400px] h-[400px] rounded-full border-[1.5px] border-white/5 pointer-events-none" />

          {/* Left Column: Text Content */}
          <div className="relative z-10 w-full lg:w-[55%] p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            
            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-6">
              Led by Intent
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-8 text-white leading-[0.9]">
              Ready to start <br className="hidden md:block" />
              your next project?
            </h2>
            
            <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md text-lg">
              Founders need a partner who understands business objectives, not just aesthetics. I personally oversee every strategy, ensuring every pixel serves your growth.
            </p>

            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10 max-w-sm">
               <div className="w-12 h-12 rounded-full overflow-hidden grayscale border border-white/10 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop" 
                    alt="Ansh Kapila" 
                    className="object-cover w-full h-full" 
                  />
               </div>
               <div>
                 <p className="text-white font-medium text-sm">Ansh Kapila</p>
                 <p className="text-gray-500 text-xs tracking-wide">Founder & Lead Designer</p>
               </div>
            </div>
          </div>

          {/* Right Column: Floating Widget */}
          <div className="relative z-10 w-full lg:w-[45%] flex items-center justify-center p-10 md:p-16 bg-gradient-to-br from-white/[0.03] to-transparent border-t lg:border-t-0 lg:border-l border-white/10">

            {/* Floating Booking Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-sm bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-2xl z-20"
            >
              <div className="flex items-center gap-2 mb-6 bg-black/50 w-fit px-3 py-1.5 rounded-full border border-white/5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Available for Project</span>
              </div>

              {/* Avatars */}
              <div className="flex items-center gap-3 mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop" 
                  alt="Founder" 
                  className="w-12 h-12 bg-zinc-800 rounded-full border-2 border-[#111111] grayscale object-cover ring-1 ring-white/10" 
                />
                <span className="text-gray-500 text-lg font-light">+</span>
                <div className="w-12 h-12 bg-zinc-800 rounded-full border-2 border-[#111111] ring-1 ring-white/10 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">You</span>
                </div>
              </div>

              <h3 className="text-xl text-white font-medium mb-1 tracking-tight">Quick 15-minute call</h3>
              <p className="text-sm text-gray-500 mb-8 font-light">Pick a time that works for you.</p>

              <button className="w-full bg-white text-black py-3.5 rounded-xl font-medium text-sm hover:bg-gray-200 transition-colors shadow-lg">
                Book a free call
              </button>
            </motion.div>

            {/* Floating Micro-interaction Cursor */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute right-8 bottom-12 md:right-16 md:bottom-24 z-30 pointer-events-none drop-shadow-2xl"
            >
              {/* Pointer Vector */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="black" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="-rotate-12 translate-y-1 drop-shadow-xl"
              >
                <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
              </svg>
              
              {/* Nametag */}
              <div className="absolute top-5 left-5 bg-black text-white text-[9px] tracking-widest font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-xl border border-white/20 uppercase">
                Ansh
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
