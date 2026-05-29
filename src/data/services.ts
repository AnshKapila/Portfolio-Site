import { projects, damacBanner, damacDetail2, damacCover, bergariaBanner } from "./projects";
import image00646 from '../assets/images/regenerated_image_1780079000646.png';
import image05503 from '../assets/images/regenerated_image_1780079005503.png';
import image10429 from '../assets/images/regenerated_image_1780079010429.png';
import image14887 from '../assets/images/regenerated_image_1780079014887.png';
import image17837 from '../assets/images/regenerated_image_1780079017837.png';
import image21155 from '../assets/images/regenerated_image_1780079021155.png';
import image24376 from '../assets/images/regenerated_image_1780079024376.png';
import image27414 from '../assets/images/regenerated_image_1780079027414.png';
import image31148 from '../assets/images/regenerated_image_1780079031148.png';
import image34547 from '../assets/images/regenerated_image_1780079034547.png';

// Use the local reconstructed/regenerated images as part of our showcase portfolio
const stillExtra1 = image00646;
const stillExtra2 = image05503;
const stillExtra3 = image10429;
const stillExtra4 = image14887;
const stillExtra5 = image17837;
const stillExtra6 = image21155;
const stillExtra7 = image24376;
const stillExtra8 = image27414;
const stillExtra9 = image31148;
const stillExtra10 = image34547;

export interface Service {
  slug: string;
  title: string;
  positioning: string;
  overview: string;
  capabilities: string[];
  ctaText: string;
  tagMatchers: string[];
  /**
   * Optional list of showcase images. If defined, this completely overrides the dynamic
   * project showcase images, giving you full separation between services and work.
   */
  customShowcaseImages?: string[];
  /**
   * Optional list of images to exclude from the dynamic project matches.
   * Useful when you want to remove a specific project image from the service page
   * without affecting the project page or the work portfolio itself.
   */
  excludeImages?: string[];
  /**
   * Optional list of extra images to append to the dynamic project showcase images.
   */
  additionalShowcaseImages?: string[];
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
    excludeImages: [damacBanner, damacDetail2, damacCover],
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
    additionalShowcaseImages: [
      stillExtra1,
      stillExtra2,
      stillExtra3,
      stillExtra4,
      stillExtra5,
      stillExtra6,
      stillExtra7,
      stillExtra8,
      stillExtra9,
      stillExtra10,
    ],
  },
];
