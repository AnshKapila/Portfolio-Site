"use client";
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import metlineCover from '../assets/images/regenerated_image_1780423712546.webp';

export function TestimonialsSection() {
    const smallTestimonials = [
        {
            quote: "The design of the website is excellent. Anyone can easily navigate through the content and it perfectly displays the intended purpose.",
            name: "Sulipsa Choudhury",
            company: "Poet",
            avatarStyles: "bg-purple-500/10 border-purple-500/40 text-purple-400"
        },
        {
            quote: "Very pleasant experience working with Ansh, definitely knows what he is doing and speaks warmly too! If you are unsure what your customer feels when they open your app or your site, let Intent Studios take a look!",
            name: "Chetan Natesh",
            company: "Rozmer",
            avatarStyles: "bg-yellow-500/10 border-yellow-500/40 text-yellow-400"
        }
    ];
    return (<section id="testimonials" className="py-24 px-6 md:px-12 lg:px-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left Column: Heading & Grid */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F24E1E]/30 bg-[#F24E1E]/10 mb-6">
              <Quote className="w-3.5 h-3.5 text-[#F24E1E]"/>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#F24E1E]">Testimonials</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-6">
              What Our <span className="text-[#F24E1E] font-sans not-italic font-medium">Clients</span> Are Saying
            </h2>
            <p className="text-lg font-light leading-relaxed text-gray-400">
              Real stories from founders who trusted Intent Studios for their products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {smallTestimonials.map((t, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-colors">
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border text-sm font-semibold select-none ${t.avatarStyles}`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.company}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-[#F24E1E] opacity-50 rotate-180"/>
                </div>
              </motion.div>))}
          </div>
        </div>

        {/* Right Column: Featured Image Testimonial */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-full border border-white/10 flex flex-col justify-end group shadow-[0_0_40px_rgba(242,78,30,0.05)]">
          {/* Mockup Project Background Image */}
          <img src={metlineCover.src || metlineCover} referrerPolicy="no-referrer" alt="Featured Project Website Mockup" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-40"/>
          
          {/* Bottom-up gradient: 100% black at bottom up to 50% height, then fades linearly to 0% at the top */}
          <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(to top, #000000 0%, #000000 50%, rgba(0, 0, 0, 0) 100%)' }}/>
          
          {/* Featured Content Area */}
          <div className="relative z-10 p-8 md:p-10">
             <p className="text-white md:text-lg lg:text-xl font-medium leading-relaxed tracking-wide mb-6">
               "I must say the dedication and creativity this team holds is on another level. They treat your project like they are building their own."
             </p>
             <p className="text-[#F24E1E] font-bold text-sm tracking-wide">
               - Akshat Jindal, <span className="font-normal text-gray-400">Metline</span>
             </p>
          </div>
        </motion.div>

      </div>
    </section>);
}
