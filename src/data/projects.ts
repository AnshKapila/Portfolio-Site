import bergariaCover from '../assets/images/regenerated_image_1778648802440.jpg';
import bergariaDetail1 from '../assets/images/regenerated_image_1778648472194.jpg';
import bergariaDetail2 from '../assets/images/regenerated_image_1778648465172.png';

import fintrackCover from '../assets/images/regenerated_image_1778698805205.png';
import fintrackDetail1 from '../assets/images/regenerated_image_1778692162081.png';
import fintrackDetail2 from '../assets/images/regenerated_image_1778692166248.png';
import fintrackBanner from '../assets/images/regenerated_image_1778692171500.png';

import sulipsaCover from '../assets/images/regenerated_image_1778674254290.png';
import sulipsaDetail1 from '../assets/images/regenerated_image_1778674258010.png';
import sulipsaDetail2 from '../assets/images/regenerated_image_1778700280861.png';
// import sulipsaBanner from '../assets/images/regenerated_image_1778700284946.png';
const sulipsaBanner = "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2000&auto=format&fit=crop";

export interface Project {
  slug: string;
  title: string;
  tags: string[];
  coverImage: string;
  listTitle: string;
  listSubtitle: string;
  overviewHeading: string;
  overviewDescription: string;
  strategyHeading: string;
  strategyDescription1: string;
  strategyDescription2: string;
  detailImage1: string;
  detailImage2: string;
  outcomeHeading: string;
  outcomeDescription: string;
  buttonText: string;
  buttonLink: string;
  bannerImage: string;
  hidden?: boolean;
}

const allProjects: Project[] = [
  {
    slug: "fintrack",
    title: "Fintrack",
    tags: ["Product Design", "UX Design", "Finance App", "Dashboard", "Mobile App", "System Design"],
    coverImage: fintrackCover,
    listTitle: "Concept Product • Product Design",
    listSubtitle: "",
    overviewHeading: "Overview",
    overviewDescription: "Fintrack was designed as a calm and structured finance product that prioritizes reflection over urgency.\n\nThe experience was intentionally built for users who already invest and want clarity around where their money exists, how it is distributed, and what long-term goals it supports. Rather than encouraging constant engagement, the product focused on creating a lightweight and mentally calm financial overview system.",
    strategyHeading: "Core Product Philosophy & Architecture",
    strategyDescription1: "One of the biggest strategic decisions was intentionally rejecting common fintech UX patterns—avoiding real-time trading behavior, addictive analytics loops, and notification-driven engagement. Instead, the focus was on predictable interactions, reflection-first behavior, and intentional manual entry. The navigation system remained flat and cognitively lightweight across Home, Wealth, Goals, and Spendings, avoiding deep nested structures to preserve contextual consistency.",
    strategyDescription2: "A major challenge was the investment entry flow. Instead of fragmented 'Add' flows, a hybrid global investment model was introduced with a centralized entry point. The mental model was shifted to 'I already invested, I am simply recording it', which fundamentally changed the tone. Additionally, Goals and Spendings were designed as awareness systems rather than control systems—removing gamification from Goals and avoiding daily micro-tracking in Spendings to preserve the overall calmness.",
    detailImage1: fintrackDetail1,
    detailImage2: fintrackDetail2,
    outcomeHeading: "Architecture & Outcome",
    outcomeDescription: "Built with scalable architecture in mind using Next.js, Supabase, and Tailwind CSS, the project followed a phased roadmap to separate UX validation from technical scaling.\n\nThe final product direction positioned Fintrack as a calmer alternative to traditional finance apps. Rather than maximizing engagement frequency, the experience focused on helping users understand where their money exists, why it exists there, and what long-term goals it supports, demonstrating how intentional UX systems can create stronger emotional trust.",
    buttonText: "Coming Soon",
    buttonLink: "#",
    bannerImage: fintrackBanner,
    hidden: true
  },
  {
    slug: "sulipsa-choudhury-personal-website",
    title: "Sulipsa Choudhury Personal Website",
    tags: ["Personal Brand", "Portfolio Website"],
    coverImage: sulipsaCover,
    listTitle: "Personal Brand • Web • UX",
    listSubtitle: "",
    overviewHeading: "Overview",
    overviewDescription: "The website was designed to create a soft editorial experience inspired by literary journals and personal storytelling spaces rather than commercial portfolio websites. The goal was to emotionally connect visitors with Sulipsa’s poetry, performances, and artistic personality while also establishing professional credibility for collaborations and public opportunities.",
    strategyHeading: "Challenge & Strategy",
    strategyDescription1: "One of the biggest challenges was balancing artistic immersion with professional trust-building. Early concepts focused heavily on emotional storytelling and visual atmosphere, but this created a UX issue where visitors could appreciate the aesthetic experience without fully understanding Sulipsa’s authority and credibility as a performer and collaborator. Another major challenge came from the available content being mainly performance visuals rather than structured case studies.",
    strategyDescription2: "To solve this, the interface used a calm editorial system with serif typography, warm beige tones, and high whitespace. The homepage flow introduced authority earlier, and performances were displayed in a cinematic gallery instead of traditional portfolio cards. The Social Diary was positioned lower to support rather than overpower the literary identity, and an \"Upcoming Books\" section was added for organic audience building.",
    detailImage1: sulipsaDetail1,
    detailImage2: sulipsaDetail2,
    outcomeHeading: "Outcome",
    outcomeDescription: "The final product successfully balanced emotional storytelling with professional positioning. Rather than functioning as a standard portfolio, the website evolved into a cultural personal brand platform that communicates artistry, stage presence, literary identity, collaboration readiness, and public-facing credibility. The final structure helped visitors emotionally connect with Sulipsa’s work while clearly understanding her value as a performer and emerging literary voice.",
    buttonText: "View Website",
    buttonLink: "https://sulipsa-choudhury.kite.space/",
    bannerImage: sulipsaBanner
  },
  {
    slug: "bergaria-luxury",
    title: "Bergaria Luxury",
    tags: ["AI Photoshoot", "Campaign Design", "Catalogue Design"],
    coverImage: bergariaCover,
    listTitle: "AI • Campaign • Visuals",
    listSubtitle: "",
    overviewHeading: "Overview",
    overviewDescription: "A complete perfume product catalogue and campaign visual system created entirely without a physical photoshoot. The project focused on delivering premium luxury perception through AI-assisted image generation, campaign design, and content systems while maintaining a visually distinctive identity for the brand.",
    strategyHeading: "Challenge",
    strategyDescription1: "The main challenge was to visually communicate the inspiration behind the perfumes without directly replicating or copying existing luxury fragrance brands. The visuals had to create recognition and familiarity while remaining unique enough to avoid legal and branding conflicts.",
    strategyDescription2: "The system also needed to maintain consistency across product visuals, social media creatives, catalogue layouts, and website banners while being executed within a short timeline.",
    detailImage1: bergariaDetail1,
    detailImage2: bergariaDetail2,
    outcomeHeading: "Process & Output",
    outcomeDescription: "Process: Detailed structured prompt development, AI image generation via Google Nano Banana Pro, Photoshop refinement, and Campaign & Catalogue Design.\n\nOutput: 80+ campaign visuals, Instagram creatives, Website carousel banners, Perfume catalogue system, Product showcase imagery, Luxury campaign assets. All completed within 6 days. Creative posters and campaign creative direction were enhanced in collaboration with Priyanka Kaim.",
    buttonText: "View Website",
    buttonLink: "https://bergarialuxury.com/",
    bannerImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "fityard",
    title: "FitYard",
    tags: ["Web Design", "SEO Optimization", "AI Product Imagery"],
    coverImage: "https://framerusercontent.com/images/BbeAUIzxJ0ZFa1p95vixRj5YH2Y.png",
    listTitle: "Web • SEO • AI",
    listSubtitle: "",
    overviewHeading: "Project Overview",
    overviewDescription: "FitYard Gym is a community driven fitness center focused on helping students and families build healthier lifestyles beyond traditional bodybuilding culture. I designed and developed their brand website to establish a strong online presence and communicate their inclusive approach to fitness. The landing page highlights community programs, training services, and the welcoming gym environment while guiding visitors toward membership inquiries and visits.\n\nThe project also included AI enhanced photography to upgrade visual assets and technical SEO implementation to improve search visibility for local fitness searches.",
    strategyHeading: "Strategy, Design & SEO Execution",
    strategyDescription1: "The main goal was to create a website that clearly communicates FitYard's philosophy of community first fitness. The design focuses on simplicity, approachable visuals, and strong messaging that resonates with students, beginners, and families looking for a supportive fitness environment.",
    strategyDescription2: "To elevate the visual presentation, existing gym photos were enhanced using AI based image refinement. This allowed the brand to present professional quality imagery without organizing an expensive production shoot.\n\nThe website structure was built with technical SEO foundations including optimized page hierarchy, search friendly content structure, and fast loading performance to improve discoverability for local fitness related searches.",
    detailImage1: "https://framerusercontent.com/images/GynWZRD3AlGfqlOmrGDLUtAUYc0.png",
    detailImage2: "https://framerusercontent.com/images/inO0dY7PtTkJmSLgB9352svI4P4.png",
    outcomeHeading: "Outcome & Current Progress",
    outcomeDescription: "The FitYard Gym website now provides a structured digital presence that introduces the gym's values, services, and community culture to new visitors. The platform is designed to support member inquiries, improve local visibility, and strengthen the brand's credibility online.\n\nThe project is currently in the final refinement stage. Customer reviews, some design system updates, and final launch adjustments are being prepared before the public rollout.",
    buttonText: "View Website Preview",
    buttonLink: "https://fityard-web.vercel.app/",
    bannerImage: "https://framerusercontent.com/images/CtkIcf3AiKXbWMEWoXp1QNg3oCU.png"
  },
  {
    slug: "clickpick",
    title: "Clickpic",
    tags: ["App UI/UX", "Lovable", "Dashboard"],
    coverImage: "https://framerusercontent.com/images/pjuOW03Tgplmb2XbyC5lFrvBg.jpg",
    listTitle: "Campus Printouts under 60 Seconds",
    listSubtitle: "",
    overviewHeading: "INTRODUCTION",
    overviewDescription: "ClickPick began as a response to one of the most frustrating everyday problems on campus, standing in long queues just to get a simple printout. As students, we were losing unnecessary time, dealing with unpredictable costs, cash-only payments, and constant last-minute chaos. In a college like mine, where basic facilities like printing are limited even outside campus, this wasn’t just an inconvenience, it was a gap waiting to be solved. ClickPick was our attempt to streamline the entire printing journey, from ordering and uploading files to paying digitally and collecting prints without waiting, while helping students manage their money and time more efficiently.",
    strategyHeading: "The Team",
    strategyDescription1: "Our team primarily consisted of students from my college, most of whom were my juniors. We brought together a mix of skills, a graphic designer for visuals, Android and web developers for execution, and a machine learning enthusiast exploring advanced possibilities. As the most experienced member, I led this cross-functional group, ensuring we built something realistic, scalable, and grounded in real-world constraints. Our goal was to collaborate like an actual product team, not just a college project group.",
    strategyDescription2: "As the sole UX designer, I owned the end-to-end product experience from research and user insights to information architecture, wireframes, UI, prototypes, and developer handoffs. I guided the visual direction alongside our graphic designer and ensured every design decision aligned with student and merchant needs while staying technically feasible for the team.\n\nAs project manager, my responsibility was to keep the team aligned, remove roadblocks, prioritize the right features, and maintain momentum. I coordinated with developers, planned timelines, balanced constraints, and ensured everyone worked harmoniously. My focus was building a culture of clarity and collaboration while guiding juniors through a realistic, industry-style workflow.",
    detailImage1: "https://framerusercontent.com/images/2tCaIy9UzUcnz4PDim3JvRhc.jpg",
    detailImage2: "https://framerusercontent.com/images/a1esIpwxvfbpTtDIc8C2rOQhCSo.jpg",
    outcomeHeading: "FINAL PERFORMANCE",
    outcomeDescription: "The result of the transformation were immediately visible both in perception and performance studio Vibe reported a 60% increase in client inquiries within the 3 months post-launch. Their social channels saw greater engagements due to the consistent and striking visual language Internally, their team reported a renewed sense of pride and ownership are finally had a brand reflected their passion and ambition. Their pitch decks looked sharper, their proposals more cohesive. The brand now speaks with clarity.",
    buttonText: "Full Case Study (Ongoing)",
    buttonLink: "https://www.behance.net/gallery/240796063/Clickpic-(Ongoing)-College-App-for-Print-Campus",
    bannerImage: "https://framerusercontent.com/images/2tCaIy9UzUcnz4PDim3JvRhc.jpg"
  },
  {
    slug: "metline",
    title: "Metline",
    tags: ["Web Design", "SEO Optimization", "AI Product Imagery"],
    coverImage: "https://framerusercontent.com/images/sqU6ucKBTjBVVNT1xSKfwMR6lpI.png",
    listTitle: "Strategy • UX • SEO • AI",
    listSubtitle: "",
    overviewHeading: "Project Overview",
    overviewDescription: "Metline Houseware needed a modern digital presence that reflected the quality of its products and made the brand easier to discover online. I led the website from concept to launch combining UX thinking, AI-assisted workflows, custom development, and SEO foundations. The goal was simple: create a fast, clear, and conversion-ready platform that helps customers understand the brand and take action with confidence.",
    strategyHeading: "Approach & Execution",
    strategyDescription1: "The challenge was to translate an offline-first business into a structured digital experience. I designed a clean, user-friendly website, streamlined the information architecture, and used AI tools to accelerate content and visual workflows. The platform was custom-built with performance and scalability in mind, ensuring both usability for customers and long-term flexibility for the business.",
    strategyDescription2: "Beyond design, I established core SEO practices, optimized site speed, and ensured the experience was mobile-ready. Every decision focused on clarity, discoverability, and reducing friction helping the brand present itself professionally while preparing it for consistent online growth.",
    detailImage1: "https://framerusercontent.com/images/JdknZiRzy2TCUNV5CCZKkMYs7w.png",
    detailImage2: "https://framerusercontent.com/images/7lLRwZmkDsKhMhFKRK54RksOf4U.png",
    outcomeHeading: "Outcome and Impact",
    outcomeDescription: "Metline Houseware now operates with a credible digital presence that strengthens trust and improves visibility. The website positions the brand for customer acquisition, supports search discoverability, and creates a reliable foundation for future marketing efforts transforming the business from locally recognized to digitally accessible.",
    buttonText: "Check Out Website",
    buttonLink: "https://metlinehouseware.com/",
    bannerImage: "https://framerusercontent.com/images/eWulEa8TTQ5vXMgpepjH1arUUkU.png"
  },
  {
    slug: "vigorx",
    title: "VigorX",
    tags: ["App UI/UX", "Figma", "Fitness"],
    coverImage: "https://framerusercontent.com/images/JqTzyJQ7gRbg4CSjpnMfaavoQLw.jpg",
    listTitle: "UX • Product • Mobile",
    listSubtitle: "",
    overviewHeading: "PROJECT OVERVIEW",
    overviewDescription: "VigorX is a mobile fitness app designed to support students and young adults in building consistent workout habits. I led the product experience from the ground up defining user flows, shaping the interface, and creating a system that balances personalization with simplicity. The focus was to remove friction from fitness planning and deliver a guided, motivating experience that users can realistically sustain.",
    strategyHeading: "APPROACH & PRODUCT THINKING",
    strategyDescription1: "The challenge was designing for users who often start fitness journeys with motivation but struggle with consistency. I mapped key behaviors, reduced decision fatigue, and structured the experience around guided actions helping users focus less on planning and more on progress.",
    strategyDescription2: "From onboarding to workout tracking, every interaction was designed to feel supportive rather than overwhelming. The interface prioritizes clarity, quick navigation, and positive reinforcement encouraging repeat engagement while making the app approachable for beginners.",
    detailImage1: "https://framerusercontent.com/images/byKaUpsyIexj9icSQ3aJ0ydzKQ.png",
    detailImage2: "https://framerusercontent.com/images/AvA3qahLdBfFXJQTMidn7dGs.png",
    outcomeHeading: "FINAL PERFORMANCE",
    outcomeDescription: "VigorX demonstrates how thoughtful product design can transform complex goals into achievable routines. The app establishes a strong foundation for user retention, scalable feature growth, and long-term engagement, positioning it as a meaningful companion in a user’s fitness journey.",
    buttonText: "Protoype",
    buttonLink: "http://vigorxtest.lovable.app/",
    bannerImage: "https://framerusercontent.com/images/2NnQPpNMlAftFdgGArnE5wlUNo.jpg"
  },
  {
    slug: "spatialdigest",
    title: "Spatial Digest",
    tags: ["Web Design", "Framer", "SEO Optimization"],
    coverImage: "https://framerusercontent.com/images/N9gMOPyp7LwcBOvwiWFJEUexaXs.png",
    listTitle: "Framer • SEO • Web",
    listSubtitle: "",
    overviewHeading: "Project Overview",
    overviewDescription: "Spatial Digest is a portfolio-driven presentation website created for an interior design studio to showcase projects, communicate expertise, and attract high-intent clients. I designed and built the website in Framer, enabling a scalable and easily manageable structure for long-term growth. The platform was developed with strong SEO foundations, helping the studio improve search visibility while presenting its work through a modern, credibility-focused digital experience.",
    strategyHeading: "Strategy, Build & SEO Foundation",
    strategyDescription1: "The objective was to create a clean, high-impact website that positions the studio as premium while remaining simple to update internally. Using Framer allowed rapid deployment, responsive layouts, and flexible CMS capabilities ensuring the client can scale content, add projects, and maintain the site without technical dependency.",
    strategyDescription2: "I structured the site architecture around SEO best practices, optimized page hierarchy, and improved content discoverability to help the studio rank for relevant interior design searches. Every element from layout to metadata readiness was designed to support sustained organic visibility.",
    detailImage1: "https://framerusercontent.com/images/YWrDhWR6xZQ9NyJl7mskMBR7DU.png",
    detailImage2: "https://framerusercontent.com/images/8AyMyuyzSU66T9q7QFpoTu05F4.png",
    outcomeHeading: "Outcome & Impact",
    outcomeDescription: "Spatial Digest now operates with a professional digital presence that strengthens brand authority, improves search potential, and supports client acquisition. The scalable Framer infrastructure ensures the website can evolve alongside the studio’s growth without requiring constant redevelopment.",
    buttonText: "Live Website",
    buttonLink: "https://www.spatialdigest.com/",
    bannerImage: "https://framerusercontent.com/images/FGVJUMzku6HKLTA02Iz382yuJA.png"
  },
  {
    slug: "ezinore",
    title: "Ezinore ",
    tags: ["Web Design", "Landing Page", "Dashboard"],
    coverImage: "https://framerusercontent.com/images/6Nf9RlXo7YfBtFkM2iu8eQSQgT4.jpg",
    listTitle: "SaaS • UX • Landing Page",
    listSubtitle: "",
    overviewHeading: "Project Overview",
    overviewDescription: "Ezinore is a sustainable power storage company building advanced energy solutions for a rapidly evolving climate-tech landscape. I led the redesign of both the marketing landing page and the product dashboard, focusing on simplifying a technically complex offering into a clear, conversion-ready experience. The objective was to help enterprise buyers and stakeholders quickly understand the product’s value while aligning the digital experience with the company’s innovation-driven positioning.",
    strategyHeading: "Product Strategy & UX Transformation",
    strategyDescription1: "The core challenge was translating a highly technical energy product into an interface that felt approachable without losing depth. I restructured the information architecture, clarified product messaging, and designed user flows that guide decision-makers toward understanding capabilities, applications, and long-term value.",
    strategyDescription2: "For the dashboard, the focus was usability and operational clarity. Complex data points were organized into digestible views, enabling faster interpretation and supporting real-world business workflows critical for B2B environments where efficiency drives adoption.",
    detailImage1: "https://framerusercontent.com/images/P59hR0mszDQOVJhMSbhyGBVdQNM.jpg",
    detailImage2: "https://framerusercontent.com/images/uV01N6QTY24bHh4QTdfr5owxDas.png",
    outcomeHeading: "Outcome & Impact",
    outcomeDescription: "Ezinore now presents its technology through a structured, credibility-focused digital experience that strengthens investor confidence, supports enterprise conversations, and prepares the platform for scalable growth within the competitive clean-energy sector.",
    buttonText: "Full Case Study",
    buttonLink: "https://www.behance.net/gallery/224369929/UX-Design-Case-Study-Ezinore-Landing-Page-Dashboard",
    bannerImage: "https://framerusercontent.com/images/jPzat5jt5aV407kj8iEDKjJnyWE.png"
  },
  {
    slug: "damacviolet",
    title: "Damac Violet",
    tags: ["Web Design", "landing Page", "SEO Optimization"],
    coverImage: "https://framerusercontent.com/images/BFq3WiNRlZnWP4akdmCwJuPFrA.jpg",
    listTitle: "UX • Web • Conversion",
    listSubtitle: "",
    overviewHeading: "Project Overview",
    overviewDescription: "Violet Damac Hills 2 is a premium real estate landing page created to showcase the exquisite 4-bedroom townhouses in the prestigious Damac Hills 2 community in Dubai. I led the UX and visual design to reflect the opulence of Arabian luxury living and present world-class amenities through immersive visuals, clear storytelling, and strategic information hierarchy. The goal was to create a scalable digital lead magnet that attracts brokers, investors, and discerning property buyers with clarity and prestige.",
    strategyHeading: "Design Strategy & UX Execution",
    strategyDescription1: "The primary challenge was translating a high-end lifestyle offering into a compelling online experience that resonates with international buyers. I structured the landing page to balance emotional appeal and rational clarity, using visual hierarchy, immersive hero imagery, and seamless navigation to guide users toward conversion.",
    strategyDescription2: "The design showcased amenities from lush community spaces to premium interior details in an engaging, larger-than-life format. This elevated user perception while optimizing layout and interface elements for fast engagement and clear decision-paths.",
    detailImage1: "https://framerusercontent.com/images/ldlBpF3V0dXynrFgvTTPwtpA.jpg",
    detailImage2: "https://framerusercontent.com/images/2Vz5WwY9VDpRHHJFZgzEkufWm8.jpg",
    outcomeHeading: "FINAL PERFORMANCE",
    outcomeDescription: "Bruno has since become a go-to choice for creatives launching personal sites on Framer. Its flexible structure and elegant design helped users convert views into collaborations and client inquiries. Many who’ve used Bruno have praised its clarity and visual impact — proving that minimalist doesn’t mean forgettable.",
    buttonText: "Live Project",
    buttonLink: "https://www.behance.net/gallery/219778095/Violet-Damac-Hills-2-Landing-Page",
    bannerImage: "https://framerusercontent.com/images/9BxfKrQGFcpvVplJ1mTqejqOo8k.png"
  }
];

export const projects = allProjects.filter(p => !p.hidden);
