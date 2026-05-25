import { ProjectPage } from "@/src/views/ProjectPage";
import { projects } from "@/src/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find(p => p.slug === params.slug);
  return {
    title: project ? `${project.title} | Case Study` : 'Project Not Found',
    description: project ? project.overviewDescription : '',
  };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  return <ProjectPage slug={params.slug} />;
}
