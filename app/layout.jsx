import "../src/index.css";
import { HeroBrightProvider } from "../src/components/HeroBrightContext";
import { ClientLayout } from "../src/components/ClientLayout";

export const metadata = {
  metadataBase: new URL("https://intentstudios.in"),
  title: "Web & Product Design Studio for Startups | Intent Studios",
  description: "Intent Studios is an elite web and product design studio building launch-ready digital experiences, bespoke SaaS platforms, and scalable interactive brand systems.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    siteName: "Intent Studios",
    title: "Web & Product Design Studio for Startups | Intent Studios",
    description: "Intent Studios is an elite web and product design studio building launch-ready digital experiences, bespoke SaaS platforms, and scalable interactive brand systems.",
    url: "https://intentstudios.in/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Product Design Studio for Startups | Intent Studios",
    description: "Intent Studios is an elite web and product design studio building launch-ready digital experiences, bespoke SaaS platforms, and scalable interactive brand systems.",
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Intent Studios",
    "alternateName": ["Intent Studio", "IntentStudio"],
    "url": "https://intentstudios.in/"
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <HeroBrightProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </HeroBrightProvider>
      </body>
    </html>
  );
}
