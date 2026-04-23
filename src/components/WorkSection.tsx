import { motion } from 'motion/react';

export function WorkSection() {
  const projects = [
    {
      title: "Fintech Dashboard",
      outcome: "Increased daily active users by 45% through streamlined navigation.",
      tags: ["UX", "UI", "Web"],
      imageColor: "bg-zinc-900"
    },
    {
      title: "E-Commerce Replatform",
      outcome: "Boosted conversion rate by 2.1x after optimizing the checkout flow.",
      tags: ["Web", "AI", "UX"],
      imageColor: "bg-zinc-800"
    },
    {
      title: "Enterprise SaaS",
      outcome: "Reduced user onboarding time from 3 weeks to 48 hours.",
      tags: ["UX", "Branding"],
      imageColor: "bg-zinc-900"
    }
  ];

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-16 pb-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-16"
        >
          Selected Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            >
              {/* Image Placeholder */}
              <div className={`w-full aspect-[4/3] rounded-xl ${project.imageColor} mb-6 overflow-hidden relative`}>
                 <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.outcome}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-400 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
