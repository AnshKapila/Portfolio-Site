import { ServicePage } from "@/src/views/ServicePage";
import { services } from "@/src/data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = services.find(s => s.slug === params.slug);
  return {
    title: service ? `${service.title} | Service` : 'Service Not Found',
    description: service ? service.positioning : '',
  };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  return <ServicePage slug={params.slug} />;
}
