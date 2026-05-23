import { ProjectPage } from "@/src/views/ProjectPage";
import { projects } from "@/src/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  return {
    title: project ? `${project.title} | Case Study` : 'Project Not Found',
    description: project ? project.overviewDescription : '',
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectPage params={params} />;
}
