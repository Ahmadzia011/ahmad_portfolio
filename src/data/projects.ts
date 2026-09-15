export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image?: string;
  thumbnail?: string;
  video?: string;
  accent: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  role: string;
  services: string[];
  stack: string[];
  highlights: string[];
};
export const PROJECTS: Project[] = [
  {
    slug: "scrapcher",
    title: "Scrapcher",
    category: "AI Website Assistant",
    year: "2026",
    image: "/projects/Scrapcher_6.png",
    thumbnail: "/projects/thumbnails/Scrapcher_Hero.png",
    accent: "#4f7cff",
    summary:
      "A full-stack AI platform that turns website content into a searchable knowledge base and an embeddable customer-support assistant.",
    overview:
      "Scrapcher lets a business submit its website, crawl and index its content, test an AI assistant against that knowledge, customize the assistant, and embed it back into the website. The product combines a Next.js dashboard with a multi-stage RAG pipeline and a separate Python crawling service.",
    challenge:
      "The main challenge was connecting several distinct systems into one reliable product flow: crawling external websites, processing and indexing content, retrieving the right context for each question, and delivering grounded answers through both the dashboard and an embedded widget.",
    approach:
      "The system uses Crawl4AI through a FastAPI service with a JavaScript fallback crawler, then chunks and embeds the extracted content before storing it in Supabase. Questions are matched through vector search, reranked with Cohere, and answered through Groq using the selected website context. Website-scoped identifiers keep retrieval isolated between indexed sites.",
    outcome:
      "The finished product demonstrates an end-to-end workflow from website ingestion to a configurable, embeddable AI assistant, combining product UI, backend orchestration, scraping, vector retrieval, reranking, and LLM integration.",
    role: "Full-stack & AI development",
    services: [
      "AI/RAG integration",
      "Full-stack development",
      "Web scraping",
      "Product UI",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "LangChain",
      "Supabase",
      "Hugging Face",
      "Cohere",
      "Groq",
    ],
    highlights: [
      "Website-to-AI-assistant workflow",
      "Multi-stage RAG pipeline with reranking",
      "Embeddable and customizable chatbot",
    ],
  },

  {
    slug: "zentiva",
    title: "Zentiva",
    category: "AI SaaS Platform",
    year: "2026",
    image: "/projects/Zentiva_1.png",
    thumbnail: "/projects/thumbnails/Zentiva_Hero.png",
    accent: "#111111",
    summary:
      "A credit-based AI chat product combining persistent conversations, authentication, usage control, and Stripe Checkout.",
    overview:
      "Zentiva is a full-stack AI SaaS experience built around an authenticated chat workspace. Users can create conversations, revisit saved threads, interact with Google Gemini, track their remaining credits, and enter a Stripe Checkout flow from the product's pricing experience.",
    challenge:
      "An AI chat interface becomes a real product only when identity, persistence, usage limits, billing entry points, and application state work together. The challenge was designing those systems as one coherent experience rather than treating the model call as the entire application.",
    approach:
      "Clerk handles authentication while Prisma and PostgreSQL store users, threads, messages, and credit state. The backend checks available credits before calling Gemini, stores completed exchanges, and deducts usage after successful responses. Stripe Checkout Sessions provide the payment-entry workflow.",
    outcome:
      "The project demonstrates the product infrastructure surrounding an AI model: persistent user data, authenticated access, credit-based usage rules, payment integration, and a polished SaaS workspace.",
    role: "Full-stack development",
    services: [
      "SaaS development",
      "AI integration",
      "Backend development",
      "Product UI",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Google Gemini",
      "Stripe",
    ],
    highlights: [
      "Persistent AI conversations",
      "Credit-controlled model usage",
      "Authentication and Stripe integration",
    ],
  },

  {
    slug: "northline",
    title: "Northline",
    category: "Interactive 3D Website",
    year: "2026",
    image: "/projects/Northline_1.png",
    thumbnail: "/projects/thumbnails/Northline_Hero.png",
    video: "/projects/NorthLine.mp4",
    accent: "#171717",
    summary:
      "A premium logistics website built around a scroll-driven Three.js truck experience and cinematic product storytelling.",
    overview:
      "Northline is an interactive logistics website that combines a clean editorial interface with a custom Three.js experience. A 3D truck moves through different visual states as the visitor scrolls, turning the hero into part of the site's narrative rather than a static decorative element.",
    challenge:
      "The challenge was to make a real-time 3D scene feel integrated with a conventional marketing website without sacrificing responsiveness, readability, or performance.",
    approach:
      "Vanilla Three.js is integrated inside Next.js with GLTF and Draco-loaded assets. Scroll progress drives camera changes, truck movement, wheel rotation, and scene transitions while the surrounding DOM content remains responsive and independently structured.",
    outcome:
      "The result is a visually distinctive marketing experience that demonstrates how interactive WebGL can support brand storytelling while still functioning as a practical responsive website.",
    role: "Frontend & Three.js development",
    services: [
      "Three.js development",
      "Interactive frontend",
      "Motion design",
      "Responsive UI",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Three.js",
      "GLTF",
      "Draco",
      "Framer Motion",
    ],
    highlights: [
      "Scroll-driven 3D truck sequence",
      "Camera and model animation",
      "Integrated WebGL and responsive UI",
    ],
  },

  {
    slug: "pawfecta",
    title: "Pawfecta",
    category: "E-Commerce Storefront",
    year: "2026",
    image: "/projects/Pawfecta_1.png",
    thumbnail: "/projects/thumbnails/Pawfecta_Hero.png",
    accent: "#8e4521",
    summary:
      "A premium pet-products storefront combining polished brand design with a database-backed catalog, authentication, and Stripe Checkout.",
    overview:
      "Pawfecta is a commerce concept designed around a warm, premium pet-care identity. The experience connects brand storytelling and product discovery with a Supabase-backed shop, Clerk authentication, and server-created Stripe Checkout Sessions.",
    challenge:
      "The goal was to keep the storefront visually calm and premium while still introducing the practical application flows expected from a modern commerce experience.",
    approach:
      "The homepage and shop use reusable sections, consistent motion, and a shared visual system. Product data is loaded from Supabase on the server, Clerk manages user sessions, and a server-side Next.js action creates Stripe Checkout Sessions for individual products.",
    outcome:
      "The project demonstrates how premium frontend execution can be combined with real commerce integrations while maintaining a consistent brand experience from discovery through purchase initiation.",
    role: "Full-stack development",
    services: [
      "E-commerce development",
      "Responsive UI",
      "Authentication",
      "Payment integration",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Clerk",
      "Stripe",
      "Framer Motion",
      "Cloudflare R2",
    ],
    highlights: [
      "Database-backed product catalog",
      "Managed authentication and checkout",
      "Premium responsive storefront",
    ],
  },

  {
    slug: "crypto-sentry",
    title: "Crypto Sentry",
    category: "Crypto Monitoring Platform",
    year: "2026",
    image: "/projects/CryptoSentry_1.png",
    thumbnail: "/projects/thumbnails/Crypto_Hero.png",
    accent: "#00a86b",
    summary:
      "A full-stack crypto monitoring prototype combining live market polling, watchlists, alerts, persistence, and background processing.",
    overview:
      "Crypto Sentry monitors cryptocurrency market data and gives users a dashboard for tracking selected assets and reviewing alert states. The product separates the user-facing Next.js application from a Node.js worker responsible for continuously polling external market data.",
    challenge:
      "The key challenge was coordinating a continuously running backend process with a user-facing application, persistence layer, alert logic, and external APIs.",
    approach:
      "A dedicated Express worker polls CoinGecko on an interval, evaluates price movement, and writes alert data into PostgreSQL through Prisma. The Next.js frontend handles authentication, watchlists, market display, and alert history, while email notification logic supports event-driven user updates.",
    outcome:
      "The project demonstrates backend-oriented full-stack development with background workers, third-party APIs, persistence, and monitoring logic rather than a purely request-response web application.",
    role: "Full-stack & backend development",
    services: [
      "Backend development",
      "API integration",
      "Monitoring systems",
      "Full-stack development",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "CoinGecko API",
      "Resend",
    ],
    highlights: [
      "Separate background polling worker",
      "Watchlists and persistent alerts",
      "External market-data integration",
    ],
  },

  {
    slug: "nook-homes",
    title: "NOOK Homes",
    category: "Premium Marketing Website",
    year: "2026",
    image: "/projects/NookHomes_1.png",
    thumbnail: "/projects/thumbnails/NookHomes_Hero.png",
    accent: "#b7ae9e",
    summary:
      "A refined residential design website focused on editorial composition, architectural imagery, and a premium responsive experience.",
    overview:
      "NOOK Homes is a modern marketing website for a residential design brand. The experience uses restrained typography, architectural imagery, generous spacing, and structured content to present home collections, philosophy, process, and enquiry pathways.",
    challenge:
      "The design needed to feel premium and architectural without relying on unnecessary effects or dense interface elements.",
    approach:
      "The site uses a disciplined visual system built around strong imagery, neutral tones, responsive layouts, reusable sections, and restrained motion. Content is structured to keep the homes themselves at the center of the experience.",
    outcome:
      "The result is a polished responsive marketing website that demonstrates premium frontend execution without depending on AI, 3D, or complex backend functionality.",
    role: "Frontend development",
    services: [
      "Responsive frontend",
      "UI implementation",
      "Motion design",
      "Marketing website",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
    ],
    highlights: [
      "Editorial visual hierarchy",
      "Premium responsive layouts",
      "Reusable marketing sections",
    ],
  },

  {
    slug: "upwork-job-alert-bot",
    title: "Upwork Job Alert Bot",
    category: "Automation Tool",
    year: "2026",
    accent: "#5865f2",
    summary:
      "A Python automation tool that monitors Upwork jobs, filters opportunities, prevents duplicates, and sends structured alerts into Discord.",
    overview:
      "The Upwork Job Alert Bot automates the process of monitoring relevant freelance opportunities and delivering them into Discord. It combines scheduled searches, job-detail enrichment, filtering, deduplication, and channel-based notifications.",
    challenge:
      "The workflow needed to repeatedly monitor an external platform without flooding Discord with duplicate results while preserving enough job context to make each alert useful.",
    approach:
      "Python handles scheduled searches and job processing, SQLite stores previously seen listings for deduplication, and Discord embeds provide structured notifications. Browser/session handling supports authenticated access where required.",
    outcome:
      "The project demonstrates practical automation, scheduled background workflows, Discord integration, data filtering, and lightweight persistence.",
    role: "Automation development",
    services: [
      "Python automation",
      "Discord integration",
      "Web automation",
      "Background jobs",
    ],
    stack: [
      "Python",
      "Discord API",
      "SQLite",
      "APScheduler",
      "SeleniumBase",
      "GraphQL",
    ],
    highlights: [
      "Scheduled job monitoring",
      "Persistent duplicate prevention",
      "Structured Discord notifications",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
