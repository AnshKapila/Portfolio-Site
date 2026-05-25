"use client";
import Link from "next/link";
import {   } from "next/navigation";
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { FadeIn } from '../components/FadeIn';

export function ServicePage({ slug }: { slug?: string }) {
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-48 px-6 min-h-screen text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-heading italic">Service not found</h1>
        <Link href="/" className="mt-8 text-[#F24E1E] hover:underline">
          Return Home
        </Link>
      </div>
    );
  }

  // Filter projects dynamically
  const relatedProjects = projects.filter((project) =>
    project.tags.some((tag) =>
      service.tagMatchers.some((matcher) => tag.toLowerCase().includes(matcher.toLowerCase()))
    )
  );

  // Extract unique images from related projects for the visual showcase
  const showcaseImages = Array.from(
    new Set(
      relatedProjects.flatMap((project) => [
        project.coverImage,
        project.detailImage1,
        project.detailImage2,
        project.bannerImage,
      ])
    )
  ).filter(Boolean);

  return (
    <>
      
      <div className="pt-32 pb-48 md:pt-40 px-6 md:px-12 lg:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-24 md:mb-32 max-w-4xl">
            <FadeIn delayMs={100} durationMs={800}>
              <span className="text-[#F24E1E] text-sm uppercase tracking-widest font-bold mb-4 block">
                {service.positioning}
              </span>
            </FadeIn>
            <FadeIn delayMs={200} durationMs={800}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading italic tracking-tight mb-8 leading-[1.05]">
                {service.title}
              </h1>
            </FadeIn>
            <FadeIn delayMs={300} durationMs={800}>
              <p className="text-lg md:text-xl font-light leading-relaxed text-gray-400 max-w-2xl">
                {service.overview}
              </p>
            </FadeIn>
          </div>

          {/* Visual Showcase Section */}
          {showcaseImages.length > 0 && (
            <FadeIn delayMs={400} durationMs={1000}>
              <div className="mb-32">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-xs uppercase tracking-widest text-[#FFD1C2]/60 font-semibold">
                    Visual Showcase
                  </span>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {showcaseImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                      
                      transition={{ delay: (i % 3) * 0.1, duration: 0.8 }}
                      className="break-inside-avoid relative rounded-2xl overflow-hidden group border border-white/5 bg-zinc-900"
                    >
                      <img
                        src={img}
                        alt={`${service.title} Portfolio Image ${i + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Capabilities Section */}
          <FadeIn delayMs={200} durationMs={800}>
            <div className="mb-32">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
                <div className="md:col-span-4 lg:col-span-3">
                  <h2 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">
                    Capabilities
                  </h2>
                </div>
                <div className="md:col-span-8 lg:col-span-9">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {service.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white text-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F24E1E]" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Selected Projects */}
          {relatedProjects.length > 0 && (
            <div className="mb-32">
              <FadeIn delayMs={100}>
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-xs uppercase tracking-widest text-[#FFD1C2]/60 font-semibold">
                    Related Projects
                  </span>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {relatedProjects.map((project, i) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                    
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="group flex flex-col items-start bg-zinc-950/50 border border-white/5 rounded-3xl overflow-hidden shadow-2xl hover:border-white/10 transition-colors"
                  >
                    <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden relative">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-8 md:p-10 flex flex-col flex-grow w-full border-t border-white/5">
                      <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold tracking-wide text-[#FFD1C2]/90">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 rounded-md bg-[#F24E1E]/10 border border-[#F24E1E]/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-3xl font-heading tracking-tight mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed mb-10 flex-grow line-clamp-3">
                        {project.overviewDescription}
                      </p>

                      <Link
                        href={`/work/${project.slug}`}
                        className="mt-auto px-6 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors inline-flex items-center gap-2 group/btn self-start"
                      >
                        View Project
                        <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Final CTA */}
          <FadeIn delayMs={300} durationMs={800}>
            <div className="w-full bg-[#111111] border border-white/5 p-12 lg:p-20 rounded-[2.5rem] text-center flex flex-col items-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#F24E1E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight mb-6">
                  Ready to elevate your project?
                </h2>
                <p className="text-lg text-gray-400 mb-10 font-light max-w-xl mx-auto">
                  Let's collaborate to build something exceptional. Reach out to discuss how we can help achieve your goals.
                </p>
                <Link 
                  href="/contact" 
                  className="bg-[#F24E1E] text-white px-8 py-4 rounded-lg font-medium text-base hover:bg-[#FF6A4D] transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#F24E1E]/20"
                >
                  {service.ctaText}
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </>
  );
}
