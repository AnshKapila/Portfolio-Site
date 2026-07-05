import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Web & Product Design Studio | Intent Studios",
  description = "A web and product design studio building launch-ready digital experiences and scalable AI-powered visual systems. Specialized in startup websites and SaaS/Product experiences.",
  keywords = "Web Design Studio, Product Design Studio, UX Design, Startup Websites, Launch Websites, SaaS Experiences",
  image = "/favicon.svg",
  url = "https://intentstudios.in/"
}: SEOProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Intent Studios",
    "alternateName": ["Intent Studio", "IntentStudio"],
    "url": "https://intentstudios.in/"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Intent Studios" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Google Site Name Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
