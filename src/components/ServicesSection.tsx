import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "UX & Product Design",
      titlePrefix: "Your UX & Product Partner",
      description: "End-to-end interface design focusing on clarity, reducing friction, and driving conversion. We design systems, not just screens.",
      // Minimalist architecture/geometry
      imageSrc: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Website Design",
      titlePrefix: "Your Web Engineering Partner",
      description: "Scalable, high-performance websites built on modern stacks. We bridge the gap between stunning visuals and robust engineering.",
      // Clean abstract texture
      imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Content & AI Creation",
      titlePrefix: "Your Content & AI Partner",
      description: "Systematized asset creation and copywriting that aligns perfectly with your brand voice and accelerates your go-to-market.",
      // Abstract light/shadow
      imageSrc: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Brand Strategy",
      titlePrefix: "Your Brand Design Partner",
      description: "Defining your core narrative and visual identity so that every touchpoint communicates exact intent. We amplify your story and identity.",
      // Abstract sleek 3D shape
      imageSrc: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-16 bg-[#111111] overflow-hidden rounded-t-[2.5rem]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* LEFT IMAGE CONTAINER */}
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeIndex}
              src={services[activeIndex].imageSrc}
              alt={services[activeIndex].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth ease-out variant
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
            />
          </AnimatePresence>
        </div>

        {/* RIGHT CONTENT CONTAINER */}
        <div className="flex flex-col order-1 lg:order-2">
          
          <p className="text-sm font-medium text-gray-400 mb-10">
            How can we help you?
          </p>
          
          <div className="flex flex-col mb-16">
            {services.map((service, i) => {
              const isActive = activeIndex === i;
              
              return (
                <div 
                  key={i} 
                  className="relative cursor-pointer group py-6"
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                >
                  <h2 className={cn(
                    "text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight transition-colors duration-300", 
                    isActive ? "text-white" : "text-white/40 group-hover:text-white/70"
                  )}>
                    {service.title}
                  </h2>
                  
                  {/* Base separator line */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

                  {/* Animated Active Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeServiceLine"
                      className="absolute bottom-0 left-0 h-[2px] bg-white z-10"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      style={{ width: '35%' }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Dynamic Section */}
          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <h4 className="text-white font-semibold text-base mb-3 tracking-wide">
                  {services[activeIndex].titlePrefix}
                </h4>
                <p className="text-gray-400 font-normal leading-relaxed text-sm mb-8 pr-4">
                  {services[activeIndex].description}
                </p>
                
                <div>
                  <button className="bg-white text-black px-6 py-3 rounded-full text-xs font-semibold tracking-wide hover:bg-gray-200 transition-colors uppercase inline-flex items-center gap-2">
                    Book a 30 Min Free Call
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
