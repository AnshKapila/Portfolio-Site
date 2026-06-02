import { projects, damacBanner, damacDetail2, damacCover, bergariaBanner } from "./projects";
import image00646 from '../assets/images/regenerated_image_1780079000646.png';
import image21155 from '../assets/images/regenerated_image_1780079021155.png';
import image24376 from '../assets/images/regenerated_image_1780079024376.png';
import image27414 from '../assets/images/regenerated_image_1780079027414.png';
import image31148 from '../assets/images/regenerated_image_1780079031148.png';
import image34547 from '../assets/images/regenerated_image_1780079034547.png';
import image58487 from '../assets/images/regenerated_image_1778692158487.png';
import image68115 from '../assets/images/regenerated_image_1778868145615.png';
import image68612 from '../assets/images/regenerated_image_1778846668612.jpg';
import image50943 from '../assets/images/regenerated_image_1779822350943.png';
import spatialdigestCover_old from '../assets/images/spatialdigestCover_downloaded.png';

// Duplicated website development project images to ensure separation/isolation
import dupSulipsaCover from '../assets/images/service_web_dup_regenerated_image_1778674254290.png';
import dupSulipsaDetail1 from '../assets/images/service_web_dup_regenerated_image_1778674258010.png';
import dupSulipsaDetail2 from '../assets/images/service_web_dup_regenerated_image_1778700280861.png';
import dupSulipsaBanner from '../assets/images/service_web_dup_regenerated_image_1779823569035.png';

import dupFityardCover from '../assets/images/service_web_dup_regenerated_image_1780395889552.webp';
import dupFityardDetail1 from '../assets/images/service_web_dup_regenerated_image_1780395891494.webp';
import dupFityardDetail2 from '../assets/images/service_web_dup_regenerated_image_1780395893007.webp';
import dupFityardBanner from '../assets/images/service_web_dup_regenerated_image_1780395894556.webp';

import dupMetlineCover from '../assets/images/service_web_dup_regenerated_image_1780423712546.webp';
import dupMetlineDetail1 from '../assets/images/service_web_dup_regenerated_image_1780425190651.avif';
import dupMetlineDetail2 from '../assets/images/service_web_dup_regenerated_image_1780425192103.avif';
import dupMetlineBanner from '../assets/images/service_web_dup_regenerated_image_1780425193584.avif';

import dupSpatialdigestCover from '../assets/images/service_web_dup_regenerated_image_1780425763348.webp';
import dupSpatialdigestDetail1 from '../assets/images/service_web_dup_regenerated_image_1780425764604.webp';
import dupSpatialdigestDetail2 from '../assets/images/service_web_dup_regenerated_image_1780425765904.webp';
import dupSpatialdigestBanner from '../assets/images/service_web_dup_regenerated_image_1780425767332.webp';

import dupEzinoreCover from '../assets/images/service_web_dup_regenerated_image_1780409171684.webp';
import dupEzinoreDetail1 from '../assets/images/service_web_dup_regenerated_image_1780409541184.webp';
import dupEzinoreDetail2 from '../assets/images/service_web_dup_regenerated_image_1780409542689.webp';
import dupEzinoreBanner from '../assets/images/service_web_dup_regenerated_image_1780409543658.webp';

// Duplicated product/UX design project images to ensure separation/isolation
import dupClickpickCover from '../assets/images/service_ux_dup_regenerated_image_1780424180194.webp';
import dupClickpickDetail1 from '../assets/images/service_ux_dup_regenerated_image_1780424181782.webp';
import dupClickpickDetail2 from '../assets/images/service_ux_dup_regenerated_image_1780424182903.webp';
import dupClickpickBanner from '../assets/images/service_ux_dup_regenerated_image_1780424183987.webp';

import dupVigorxCover from '../assets/images/service_ux_dup_regenerated_image_1780425438095.webp';
import dupVigorxDetail1 from '../assets/images/service_ux_dup_regenerated_image_1780425440368.webp';
import dupVigorxDetail2 from '../assets/images/service_ux_dup_regenerated_image_1780425442290.webp';
import dupVigorxBanner from '../assets/images/service_ux_dup_regenerated_image_1780425444260.webp';

// Use the local reconstructed/regenerated images as part of our showcase portfolio
const stillExtra1 = image00646;
const stillExtra2 = image21155;
const stillExtra3 = image24376;
const stillExtra4 = image27414;
const stillExtra5 = image31148;
const stillExtra6 = image34547;
const stillExtra7 = image58487;
const stillExtra8 = image68115;
const stillExtra9 = image68612;
const stillExtra10 = image50943;
const stillExtra11 = spatialdigestCover_old;

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
    customShowcaseImages: [
      dupSulipsaCover,
      dupSulipsaDetail1,
      dupSulipsaDetail2,
      dupSulipsaBanner,
      dupFityardCover,
      dupFityardDetail1,
      dupFityardDetail2,
      dupFityardBanner,
      dupMetlineCover,
      dupMetlineDetail1,
      dupMetlineDetail2,
      dupMetlineBanner,
      dupSpatialdigestCover,
      dupSpatialdigestDetail1,
      dupSpatialdigestDetail2,
      dupSpatialdigestBanner,
      dupEzinoreCover,
      dupEzinoreDetail1,
      dupEzinoreDetail2,
      dupEzinoreBanner,
    ],
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
    customShowcaseImages: [
      dupClickpickCover,
      dupClickpickDetail1,
      dupClickpickDetail2,
      dupClickpickBanner,
      dupVigorxCover,
      dupVigorxDetail1,
      dupVigorxDetail2,
      dupVigorxBanner,
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
      stillExtra11,
    ],
  },
];
