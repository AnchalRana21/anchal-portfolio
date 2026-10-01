export const EMAIL = "anchalrana2112002@gmail.com";
export const GITHUB = "https://github.com/anchalrana-fs";

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#focus", label: "Focus" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
];

export const heroStats = [
  { label: "Experience", text: "15 months shipping production UI" },
  { label: "Products", text: "2 AI products built as standalone apps" },
  { label: "Pull requests", text: "143 merged on the agent platform" },
  { label: "Commits", text: "1,571 across 7 repositories" },
];

export const paths = [
  {
    href: "#contact",
    tag: "Hire",
    chip: "Frontend role",
    title: "Need a frontend developer who can turn an AI API into a product screen",
    body: "Best fit for teams building chat, agents, data or document products who need designs shipped as fast, responsive, accessible UI.",
    cta: "Start a conversation",
  },
  {
    href: "#work",
    tag: "Proof",
    chip: "Shipped work",
    title: "See 5 products and the pull requests behind them",
    body: "Database Agent, Document Intelligence, the FutureSmart agent platform, aidemos.com and its CMS. All live and in use.",
    cta: "See the work",
  },
  {
    href: "#skills",
    tag: "Stack",
    chip: "Skills",
    title: "Check the tools I use every day in production",
    body: "React, Next.js 16, TypeScript, Tailwind, react-hook-form with Zod, streaming APIs, Payload CMS, Cypress and Playwright.",
    cta: "View skills",
  },
];

export const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Streaming AI chat",
  "Natural language to SQL",
  "Document extraction",
  "Voice input",
  "Tailwind CSS",
  "Payload CMS",
  "MCP integrations",
  "Analytics dashboards",
  "Accessibility",
];

export type FocusIcon = "chat" | "layout" | "shield";

export const focusAreas: { icon: FocusIcon; title: string; body: string; note: string }[] = [
  {
    icon: "chat",
    title: "AI product interfaces",
    body: "Screens where model output meets a person: answers that stream in, generated SQL next to its result, extracted fields linked to their source, live voice transcription.",
    note: "2 AI products, frontend built end to end",
  },
  {
    icon: "layout",
    title: "Design to production",
    body: "Taking design artboards and an API spec and turning them into responsive screens that handle every state the backend can return: loading, empty, partial, failed and shared.",
    note: "Pixel-accurate across desktop and mobile",
  },
  {
    icon: "shield",
    title: "Safe, verified releases",
    body: "Typed forms with Zod, accessible controls, Cypress and Playwright checks, before/after screenshots on visual changes, and migration checks that block destructive database changes.",
    note: "Every change checked before it ships",
  },
];

export type Project = {
  meta: string;
  live?: boolean;
  title: string;
  body: string;
  points?: string[];
  highlight: string;
  links?: { label: string; href: string; host: string; primary?: boolean }[];
  stack: string[];
};

export const projects: Project[] = [
  {
    meta: "AI Product · 2026",
    live: true,
    title: "Database Agent",
    body: "A product that lets a team connect a SQL database and ask it questions in plain English. I built the frontend as its own app, first as NL2SQL, then renamed and moved to its own path.",
    points: [
      "Conversation screen streaming answers over server-sent events, with the SQL, result table and a live run trace",
      "Three ways to add a database, plus a credentials board for connections and API keys",
      "Usage and Limits, analytics filters generated from the OpenAPI spec, and sharing with an Activity tab",
    ],
    highlight: "Plain-English questions to SQL results, end to end in the browser",
    links: [
      { label: "Live app", href: "https://app.futuresmart.ai/database-agent", host: "app.futuresmart.ai/database-agent", primary: true },
      { label: "Product page", href: "https://futuresmart.ai/solutions/database-agent", host: "futuresmart.ai/solutions/database-agent" },
    ],
    stack: ["Next.js", "TypeScript", "SSE", "react-hook-form", "Zod", "TanStack Query"],
  },
  {
    meta: "AI Product · 2026",
    live: true,
    title: "Document Intelligence",
    body: "Upload a collection of documents, define the fields you care about, and get them extracted into a table you can search, chart and share.",
    points: [
      "Create flow that starts from a template's own wording and builds fields from the service",
      "One table over documents and fields, with multi-select facet cards",
      "Document screen that jumps from any extracted value to the passage it came from, plus a JSON view",
    ],
    highlight: "Every extracted value traceable to its source",
    links: [
      { label: "Live app", href: "https://app.futuresmart.ai/document-intelligence", host: "app.futuresmart.ai/document-intelligence", primary: true },
      { label: "Product page", href: "https://futuresmart.ai/solutions/document-intelligence", host: "futuresmart.ai/solutions/document-intelligence" },
    ],
    stack: ["React", "Tailwind v4", "Recharts", "OpenAPI codegen"],
  },
  {
    meta: "FutureSmart AI · 2025 – now",
    live: true,
    title: "FutureSmart Agent platform",
    body: "The main app where customers build, configure and embed AI agents. I started with the home page and agent cards and grew into most of the product surface.",
    points: [
      "Embeddable chat widget in a Shadow DOM, with separate public-access controls for widget and full-screen chat",
      "Live speech-to-text over WebSocket, with a fallback when the host page blocks the microphone",
      "Knowledge, Integrations (MCP tools) and Data View pages, and an analytics dashboard shared by both products",
    ],
    highlight: "Agents embedded on customer websites",
    links: [{ label: "Live app", href: "https://agent.futuresmart.ai/", host: "agent.futuresmart.ai", primary: true }],
    stack: ["Next.js 16", "Radix UI", "WebSocket", "Web Audio"],
  },
  {
    meta: "Content platform · 2025 – 2026",
    live: true,
    title: "aidemos.com and Payload CMS",
    body: "A review site for AI tools. I built the front end in Next.js and much of the Payload CMS editors use to write rankings, comparisons and tool pages.",
    points: [
      "Showcase, categories and a tool page redesign with feature breakdowns, pricing and testing history",
      "Dozens of CMS blocks, and a rich-text caption migration across 20+ collections",
      "Release workflow that snapshots the database and scans migrations for destructive changes",
    ],
    highlight: "495 commits across site and CMS",
    links: [{ label: "Live site", href: "https://aidemos.com/", host: "aidemos.com", primary: true }],
    stack: ["Payload CMS", "PostgreSQL", "Lexical", "GitHub Actions", "AWS"],
  },
];

export const GITHUB_PERSONAL = "https://github.com/AnchalRana21";

export const personalProjects: Project[] = [
  {
    meta: "Personal · 2025",
    title: "Voice to Blog",
    body: "Record a voice note in the browser and get back a structured, SEO-ready blog post. Runs fully local: Whisper transcribes the audio and an Ollama model writes the post.",
    points: [
      "In-browser recorder built on MediaRecorder, with pause, resume, a time limit and a live waveform",
      "FastAPI pipeline with separate transcribe and generate endpoints, temp-file cleanup in background tasks",
      "Generated post previewed as Markdown with title, meta description, word count and reading time",
    ],
    highlight: "Speech to publishable post, no cloud APIs",
    links: [
      { label: "Source", href: `${GITHUB_PERSONAL}/audio-to-text`, host: "github.com/AnchalRana21/audio-to-text", primary: true },
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind v4", "FastAPI", "Whisper", "Ollama"],
  },
  {
    meta: "Personal · 2025",
    title: "Chatbot Landing Page",
    body: "A marketing page for a GPT-4o customer-service chatbot product, built as reusable sections: navbar, hero with a trusted-by logo row, features and a book-a-demo block.",
    highlight: "Responsive marketing page in Next.js and Tailwind",
    links: [
      { label: "Source", href: `${GITHUB_PERSONAL}/Chatbot-Landing-Page`, host: "github.com/AnchalRana21/Chatbot-Landing-Page", primary: true },
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "next/image"],
  },
  {
    meta: "Side project · 2025",
    live: true,
    title: "Resume site for a finance accountant",
    body: "A single-page online resume, deployed on Vercel, with a print stylesheet so the same page exports cleanly to PDF.",
    highlight: "One page for the web and for print",
    links: [
      { label: "Live site", href: "https://harsh-rana-resume.vercel.app", host: "harsh-rana-resume.vercel.app", primary: true },
      { label: "Source", href: `${GITHUB_PERSONAL}/Harsh-Rana-Resume`, host: "github.com/AnchalRana21/Harsh-Rana-Resume" },
    ],
    stack: ["HTML", "CSS", "Vercel"],
  },
  {
    meta: "MCA Project · 2023",
    title: "Job Search Portal",
    body: "Role-based login for job seekers and admins, an admin panel for job listings, search and filters for seekers, and a course module for learning new skills.",
    highlight: "Full-stack Java web application",
    stack: ["Java", "JSP", "Servlets", "Oracle DB", "Bootstrap"],
  },
];

export type NumberIcon = "commit" | "merge" | "layers" | "calendar";

export const numbers: { icon: NumberIcon; value: string; label: string }[] = [
  { icon: "commit", value: "1,571", label: "Commits since Jul 2025" },
  { icon: "merge", value: "143", label: "Merged pull requests" },
  { icon: "layers", value: "5", label: "Live products shipped" },
  { icon: "calendar", value: "261", label: "Commits in the busiest month" },
];

export const monthlyCommits: [string, number][] = [
  ["Jul", 43], ["Aug", 58], ["Sep", 48], ["Oct", 35], ["Nov", 55], ["Dec", 76],
  ["Jan", 27], ["Feb", 40], ["Mar", 64], ["Apr", 92], ["May", 261], ["Jun", 203],
  ["Jul", 203], ["Aug", 232], ["Sep", 134],
];

export const skillGroups: { title: string; lead?: boolean; items: string[] }[] = [
  {
    title: "Frontend",
    lead: true,
    items: ["React", "Next.js 16", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS v3 / v4", "Radix UI", "HTML5 · CSS3", "Responsive design"],
  },
  { title: "Forms and state", items: ["react-hook-form", "Zod", "TanStack Query", "Recharts"] },
  { title: "APIs and data", items: ["REST APIs", "Server-sent events", "WebSocket", "OpenAPI codegen", "axios", "PostgreSQL", "Oracle DB"] },
  { title: "CMS", items: ["Payload CMS", "Lexical editor", "Custom blocks and hooks"] },
  {
    title: "Testing and delivery",
    items: ["Cypress", "Playwright", "Jest", "Git · GitHub", "GitHub Actions", "AWS S3 · CloudFront · RDS", "Vercel"],
  },
  { title: "Design and tools", items: ["Figma", "Accessibility", "VS Code", "Claude Code", "n8n"] },
];

export const builtAt = [
  { name: "Database Agent", years: "2026" },
  { name: "Document Intelligence", years: "2026" },
  { name: "FutureSmart Agent", years: "2025 – now" },
  { name: "aidemos.com", years: "2025 – 2026" },
];

export const experience: { dates: string; location: string; title: string; org: string; body: string; points?: string[] }[] = [
  {
    dates: "July 2025 – Present",
    location: "On-site, India",
    title: "Frontend Developer",
    org: "FutureSmart AI",
    body: "Frontend for the FutureSmart Agent platform, Database Agent, Document Intelligence, aidemos.com and the company website, working with design and backend teams from handoff to release.",
    points: [
      "Built most of the UI for Database Agent and Document Intelligence, each as its own app",
      "Built the agent platform's home page, agent cards, Feature Agent and Share Agent flows, Knowledge and Integrations pages",
      "Built the embeddable chat widget, voice input and the analytics dashboard used by both products",
      "Built reusable Payload CMS blocks, fields and hooks so non-technical teams manage content on their own",
      "Built the Showcase and Categories pages on aidemos.com and the product landing pages on futuresmart.ai",
    ],
  },
  {
    dates: "July 2021 – June 2023",
    location: "Sonipat, Haryana",
    title: "Master of Computer Applications",
    org: "Deenbandhu Chhotu Ram University of Science and Technology",
    body: "Data structures and algorithms, object-oriented programming in Java, database administration, operating systems.",
  },
  {
    dates: "July 2018 – June 2021",
    location: "Sonipat, Haryana",
    title: "B.Sc. Computer Science",
    org: "Bhagat Phool Singh Mahila Vishwavidyalaya",
    body: "Computer fundamentals, networking, computer architecture, software engineering.",
  },
];
