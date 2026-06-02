import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { FadeIn } from '../components/FadeIn';
import { SEO } from '../components/SEO';

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-48 px-6 min-h-screen text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-heading italic">Service not found</h1>
        <Link to="/" className="mt-8 text-[#F24E1E] hover:underline">
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

  // Filter projects dynamically  or selectively based on the page's service slug to only show relevant ones taken
  const serviceProjects = useMemo(() => {
    if (service.slug === 'websites-platforms') {
      const allowedSlugs = ["sulipsa-choudhury-personal-website", "fityard", "metline", "spatialdigest", "ezinore"];
      return projects.filter(p => allowedSlugs.includes(p.slug));
    }
    if (service.slug === 'product-ux-design') {
      const allowedSlugs = ["clickpick", "vigorx"];
      return projects.filter(p => allowedSlugs.includes(p.slug));
    }
    return [];
  }, [service.slug]);

  // Compute final showcase images, merge additions/exclusions, and shuffle them on load
  const showcaseImages = useMemo(() => {
    let images: string[] = [];

    if (service.customShowcaseImages && service.customShowcaseImages.length > 0) {
      images = service.customShowcaseImages;
    } else if (service.additionalShowcaseImages && service.additionalShowcaseImages.length > 0) {
      images = service.additionalShowcaseImages;
    }

    // Shuffle the images statically per-mount
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled;
  }, [slug]);

  return (
    <>
      <SEO
        title={`${service.title} — ${service.positioning} | Intent Studios`}
        description={`${service.overview} Capabilities include: ${service.capabilities.join(', ')}.`}
        keywords={`${service.title}, ${service.capabilities.join(', ')}, ${service.positioning}, Web & Product Design Services, Intent Studios`}
        image={showcaseImages[0] || "/favicon.svg"}
        url={`https://intentstudios.com/services/${service.slug}`}
      />
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
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                  {showcaseImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: (i % 3) * 0.1, duration: 0.8 }}
                      className="break-inside-avoid mb-6 relative rounded-2xl overflow-hidden group border border-white/5 bg-zinc-900"
                    >
                      <img
                        src={img}
                        referrerPolicy="no-referrer"
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

          {/* Projects Collection Section */}
          {serviceProjects.length > 0 && (
            <FadeIn delayMs={300} durationMs={800}>
              <div className="mb-32">
                <div className="flex items-center gap-4 mb-16">
                  <span className="text-xs uppercase tracking-widest text-[#FFD1C2]/60 font-semibold text-gray-400">
                    Selected Case Studies
                  </span>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {serviceProjects.map((project, i) => (
                    <motion.div
                      key={project.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="group flex flex-col items-start bg-zinc-950/50 border border-white/5 rounded-3xl overflow-hidden shadow-2xl hover:border-white/10 transition-colors"
                    >
                      <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden relative">
                        {project.coverImage.startsWith("data:image/") ? (
                          <div className="w-full h-full flex flex-col justify-between p-6 text-white relative overflow-hidden" style={{ background: `radial-gradient(circle at center, #111 0%, #050505 100%)` }}>
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#F24E1E 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />
                            <div className="relative z-10 flex justify-between items-start w-full">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">Project Showcase</span>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F24E1E]">[ Draft ]</span>
                            </div>
                            <div className="relative z-10 text-center my-auto flex flex-col items-center">
                              <h4 className="text-2xl font-heading italic tracking-tight text-white mb-1 leading-tight">{project.title}</h4>
                            </div>
                            <div className="relative z-10 text-center text-[10px] font-mono text-gray-500">
                              [ Manual Asset Placeholder ]
                            </div>
                          </div>
                        ) : (
                          <img 
                            src={project.coverImage} 
                            referrerPolicy="no-referrer"
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      <div className="p-8 md:p-10 flex flex-col flex-grow w-full border-t border-white/5">
                        <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold tracking-wide text-[#FFD1C2]/90">
                          {project.tags.map(t => (
                            <span key={t} className="px-3 py-1.5 rounded-md bg-[#F24E1E]/10 border border-[#F24E1E]/20">
                              {t}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-3xl font-heading tracking-tight mb-4 text-white">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 text-base leading-relaxed mb-10 font-light flex-grow">
                          {project.overviewDescription.slice(0, 120)}...
                        </p>
                        
                        <Link 
                          to={`/work/${project.slug}`}
                          className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
                        >
                          View Project
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
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
                  to="/contact" 
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
