import { ServicePage } from "@/src/views/ServicePage";
import { services } from "@/src/data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  return {
    title: service ? `${service.title} | Service` : 'Service Not Found',
    description: service ? service.positioning : '',
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ServicePage params={params} />;
}
