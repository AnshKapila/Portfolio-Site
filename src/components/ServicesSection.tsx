import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      title: "UX & Product Design",
      heading: "Interfaces that reduce friction and drive conversion.",
      description: "We don’t just design screens. We architect systems that guide user behavior, clarify complex workflows, and accelerate growth.",
      subItems: ["User Research", "Prototyping", "Design Systems", "Conversion Optimization"],
      // Minimalist architecture/geometry
      imageSrc: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Website Design",
      heading: "Websites built to convert, not just exist.",
      description: "From landing pages to SaaS platforms, we design experiences that guide users and drive action.",
      subItems: ["Landing Pages", "SaaS Platforms", "E-commerce", "Marketing Sites"],
      // Clean abstract texture
      imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Content & AI Creation",
      heading: "Systematized messaging that scales your voice.",
      description: "Asset creation and copywriting that aligns perfectly with your brand voice, engaging your audience and accelerating your go-to-market.",
      subItems: ["Brand Voice", "Conversion Copy", "AI Systems", "Sales Assets"],
      // Abstract light/shadow
      imageSrc: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Brand Strategy",
      heading: "Narratives that position you as the premium choice.",
      description: "Defining your core narrative and visual identity so that every touchpoint communicates exact intent.",
      subItems: ["Visual Identity", "Positioning", "Brand Guidelines", "Messaging Framework"],
      // Abstract sleek 3D shape
      imageSrc: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="min-h-screen flex items-center py-24 px-6 md:px-12 lg:px-16 bg-[#111111] overflow-hidden rounded-t-[2.5rem]">
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
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
              const isExpanded = expandedIndex === i;
              
              return (
                <div 
                  key={i} 
                  className="relative cursor-pointer group py-6"
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                >
                  <h2 className={cn(
                    "text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight transition-colors duration-300", 
                    isActive ? "text-white" : "text-white/40 group-hover:text-white/70"
                  )}>
                    {service.title}
                  </h2>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 pb-3">
                          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300 font-light">
                            {service.subItems.map((sub, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
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
          <div className="min-h-[140px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <h4 className="text-white font-medium text-xl md:text-2xl mb-3 tracking-tight">
                  {services[activeIndex].heading}
                </h4>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base max-w-lg">
                  {services[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
