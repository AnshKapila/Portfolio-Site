import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FadeIn } from '../components/FadeIn';
import { SEO } from '../components/SEO';

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <>
        <SEO title="Project Not Found | Intent Studios" />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-heading italic">Project not found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${project.title} — ${project.listTitle || 'Case Study | Web & Product Design'} | Intent Studios`}
        description={`${project.overviewDescription.slice(0, 155).trim()}... Explore the full case study on design strategy and outcomes.`}
        keywords={`${project.title}, ${project.tags.join(', ')}, Intent Studios Case Study, UX Design Portfolio`}
        image={project.coverImage || "/favicon.svg"}
        url={`https://intentstudios.com/work/${project.slug}`}
      />
      <div className="pt-32 pb-48 px-6 md:px-12 lg:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Project Hero */}
        <div className="mb-16 md:mb-24 flex flex-col items-start">
          <FadeIn delayMs={100} durationMs={800}>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#2a0e05] border border-[#4a1805] text-[13px] font-medium tracking-wide text-[#ffd3c2] shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delayMs={200} durationMs={800}>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-heading italic tracking-tight mb-8 leading-[1.1]">
              {project.title}
            </h1>
          </FadeIn>

          <FadeIn delayMs={300} durationMs={800}>
            {project.buttonLink && project.buttonLink.trim() !== '' && (
              <a 
                href={project.buttonLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-black rounded-lg font-semibold text-[15px] hover:bg-gray-200 transition-colors"
              >
                {project.buttonText || "View Live"}
              </a>
            )}
          </FadeIn>
        </div>

        {/* Main Visual */}
        <FadeIn delayMs={400} durationMs={800} className="mb-24 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
          <img src={project.coverImage} referrerPolicy="no-referrer" alt={project.title} className="w-full h-auto block" />
        </FadeIn>

        {/* Content Structure */}
        <div className="space-y-24 mb-32">
          
          {/* Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 font-bold md:col-span-1">{project.overviewHeading}</h2>
            <div className="md:col-span-2 text-lg font-light leading-relaxed text-gray-300 whitespace-pre-wrap">
              {project.overviewDescription}
            </div>
          </section>

          {/* Work Done */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 font-bold md:col-span-1">{project.strategyHeading}</h2>
            <div className="md:col-span-2 text-lg font-light leading-relaxed text-gray-300 space-y-6">
              <p>{project.strategyDescription1}</p>
              {project.strategyDescription2 && <p>{project.strategyDescription2}</p>}
            </div>
          </section>

          {/* Output / Result */}
          {project.outcomeHeading && project.outcomeDescription && (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <h2 className="text-sm uppercase tracking-widest text-gray-500 font-bold md:col-span-1">{project.outcomeHeading}</h2>
              <div className="md:col-span-2 text-lg font-light leading-relaxed text-gray-300 whitespace-pre-wrap">
                {project.outcomeDescription}
              </div>
            </section>
          )}

        </div>

        {/* Visual Section */}
        <div className="space-y-12 mb-32">
          {project.detailImage1 && (
            <div className="w-full rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-xl">
               <img src={project.detailImage1} referrerPolicy="no-referrer" alt="Project detail 1" className="w-full h-auto" />
            </div>
          )}
          {project.detailImage2 && (
            <div className="w-full rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-xl">
               <img src={project.detailImage2} referrerPolicy="no-referrer" alt="Project detail 2" className="w-full h-auto" />
            </div>
          )}
          {project.bannerImage && (
            <div className="w-full rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-xl">
               <img src={project.bannerImage} referrerPolicy="no-referrer" alt="Project banner" className="w-full h-auto" />
            </div>
          )}
        </div>

        {/* Final CTA */}
        <FadeIn delayMs={100} durationMs={800} className="w-full bg-[#111111] border border-white/5 p-12 lg:p-20 rounded-[2.5rem] text-center flex flex-col items-center shadow-2xl">
           <h2 className="text-4xl md:text-5xl font-heading italic tracking-tight mb-6">Have a similar project?</h2>
           <a href="https://wa.me/919821687437" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-black font-medium text-base hover:bg-gray-200 transition-colors w-full sm:w-[240px] mt-6">
             Start a Project
           </a>
        </FadeIn>

      </div>
    </div>
    </>
  );
}
