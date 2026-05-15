import { projects } from "./projects";

export interface Service {
  slug: string;
  title: string;
  positioning: string;
  overview: string;
  capabilities: string[];
  ctaText: string;
  tagMatchers: string[];
}

export const services: Service[] = [
  {
    slug: "websites-platforms",
    title: "Websites & Platforms",
    positioning: "Websites built to drive real results",
    overview:
      "We design and build websites that help people understand your offer, trust your brand, and take action without confusion or friction.",
    capabilities: [
      "Landing Pages",
      "Business Websites",
      "E-commerce Stores",
      "SaaS Websites",
    ],
    ctaText: "Start a Website Project",
    tagMatchers: ["website", "landing page", "ecommerce", "web design"],
  },
  {
    slug: "product-ux-design",
    title: "Product & UX Design",
    positioning: "Products that are easy to use",
    overview:
      "We design apps and platforms that are simple to understand, easy to use, and ready for development with clear structure and clean handoff files.",
    capabilities: [
      "App UI Design",
      "UX Flows",
      "Design Systems",
      "Developer Ready Handoffs",
    ],
    ctaText: "Start a Product Project",
    tagMatchers: [
      "product design",
      "ux design",
      "app ui/ux",
      "dashboard",
      "mobile app",
      "system design",
    ],
  },
  {
    slug: "brand-visual-identity",
    title: "Brand & Visual Identity",
    positioning: "A brand people can recognize easily",
    overview:
      "We create a clear and consistent visual identity so your brand looks professional, feels trustworthy, and stays the same across your website and content.",
    capabilities: [
      "Brand Identity",
      "Visual Systems",
      "Logo Design",
      "Brand Guidelines",
    ],
    ctaText: "Create Your Brand",
    tagMatchers: [
      "branding",
      "visual identity",
      "personal brand",
      "catalogue design",
      "pitch deck",
      "visual direction",
    ],
  },
  {
    slug: "ai-content-growth-systems",
    title: "AI Content & Growth Systems",
    positioning: "Content that keeps your brand active",
    overview:
      "We create visuals and content using AI and strategy so your brand stays visible, looks consistent, and communicates clearly across all digital platforms.",
    capabilities: [
      "AI Visual Content",
      "Social Media Creatives",
      "Content Direction",
      "Marketing Assets",
    ],
    ctaText: "Build AI Content Strategy",
    tagMatchers: [
      "ai photoshoot",
      "campaign design",
      "product imagery",
      "ai product imagery",
      "imagery",
      "ai-visuals",
      "ai content",
      "social media",
      "creative strategy",
      "content direction",
    ],
  },
];
