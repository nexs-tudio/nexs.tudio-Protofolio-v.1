export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  details: string;
  outcomes: string[];
  stack: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  outcome: string;
  stack: string[];
};

export type PricingPackage = {
  name: string;
  price: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "FastAPI",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Cloud APIs",
  "Analytics",
] as const;

export const services: Service[] = [
  {
    slug: "full-stack-web-applications",
    title: "Full-stack web applications",
    eyebrow: "Web products",
    summary:
      "Customer portals, SaaS dashboards, booking systems, admin tools, and MVP foundations.",
    details:
      "We plan the product flow, build the frontend, connect the backend, shape the database, and prepare the first production deployment.",
    outcomes: [
      "Responsive product UI",
      "Authentication-ready structure",
      "Admin and customer workflows",
      "Deployment handoff",
    ],
    stack: ["Next.js", "React", "TypeScript", "MongoDB"],
  },
  {
    slug: "api-backend-systems",
    title: "API and backend systems",
    eyebrow: "Backend",
    summary:
      "REST APIs, data models, integrations, automation flows, and secure operational logic.",
    details:
      "We create backend systems that stay understandable, testable, and ready for future product growth.",
    outcomes: [
      "REST API architecture",
      "Validation and auth flows",
      "Database modeling",
      "External integrations",
    ],
    stack: ["FastAPI", "Python", "Node.js", "PostgreSQL"],
  },
  {
    slug: "analytics-dashboards",
    title: "Analytics dashboards",
    eyebrow: "Data visibility",
    summary:
      "Dashboards, reporting views, operational metrics, charts, exports, and decision support tools.",
    details:
      "We turn scattered data into clean views that make daily business decisions easier to see and act on.",
    outcomes: [
      "Metric dashboards",
      "Data ingestion flows",
      "Charts and filters",
      "CSV/report exports",
    ],
    stack: ["React", "Python", "Charts", "APIs"],
  },
  {
    slug: "cloud-ready-architecture",
    title: "Cloud-ready architecture",
    eyebrow: "Launch and scale",
    summary:
      "Deployment setup, performance tuning, hosting decisions, monitoring basics, and documentation.",
    details:
      "We help teams launch with a clean production baseline, then keep the system practical to operate and improve.",
    outcomes: [
      "Vercel deployment",
      "Environment setup",
      "Performance pass",
      "Launch documentation",
    ],
    stack: ["Vercel", "MongoDB", "Postgres", "CI/CD"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "mvp-sprint",
    title: "Idea to usable MVP",
    category: "Product sprint",
    summary:
      "A focused path for founders who need a working product foundation instead of a pitch-deck prototype.",
    outcome:
      "Discovery, UX structure, frontend, backend, database, and deployment aligned into one build cycle.",
    stack: ["Next.js", "TypeScript", "API", "Database"],
  },
  {
    slug: "operations-dashboard",
    title: "Operations dashboard",
    category: "Business systems",
    summary:
      "A secure internal dashboard for tracking users, orders, payments, inventory, or service workflows.",
    outcome:
      "Manual checking gets replaced with a single interface for daily decisions and team coordination.",
    stack: ["React", "Charts", "Auth", "Exports"],
  },
  {
    slug: "api-automation",
    title: "API automation layer",
    category: "Integrations",
    summary:
      "Connect forms, CRMs, payment events, email, storage, and business data into one reliable backend flow.",
    outcome:
      "Less repeated admin work, cleaner data movement, and fewer fragile manual handoffs.",
    stack: ["FastAPI", "Webhooks", "Validation", "Cloud"],
  },
];

export const processSteps = [
  {
    title: "Scope the business goal",
    body: "Define users, core flows, must-have features, data needs, and the first useful release.",
  },
  {
    title: "Design the working system",
    body: "Map the interface, backend, database, integrations, and delivery milestones before deep build work.",
  },
  {
    title: "Build and review weekly",
    body: "Review real progress often, test the product early, and adjust priorities before wasted work builds up.",
  },
  {
    title: "Launch with handoff",
    body: "Deploy, document, and prepare the system for support, iteration, and future scale.",
  },
] as const;

export const trustSignals = [
  {
    title: "Clear weekly progress",
    body: "You see working screens, API progress, blockers, and next steps before the project drifts.",
  },
  {
    title: "Production-first mindset",
    body: "We plan deployment, validation, performance, and handoff from the start, not after the UI is finished.",
  },
  {
    title: "Founder-friendly scope",
    body: "We help narrow the first useful release so your budget goes into software clients can actually use.",
  },
  {
    title: "Technical handoff included",
    body: "Projects include practical notes for hosting, env vars, routes, data, and future improvements.",
  },
] as const;

export const pricingPackages: PricingPackage[] = [
  {
    name: "Basic",
    price: "Quote after scope",
    summary:
      "For a clean professional website or focused landing page that introduces the business clearly.",
    features: [
      "Responsive website design",
      "Brand-aligned sections",
      "Basic SEO setup",
      "Deployment guidance",
    ],
  },
  {
    name: "Advanced",
    price: "Quote after scope",
    summary:
      "For businesses that need a full-stack product foundation, dashboard, or internal system.",
    features: [
      "Product UX structure",
      "Frontend and backend build",
      "API and data flow setup",
      "Production deployment support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "Quote after scope",
    summary:
      "For larger custom systems, automation, analytics, integrations, or long-term product improvements.",
    features: [
      "Custom architecture planning",
      "Advanced integrations",
      "Analytics and automation",
      "Technical handoff support",
    ],
  },
];

export const budgetRanges = [
  "Under $500",
  "$500 - $1,200",
  "$1,200 - $3,000",
  "$3,000+",
] as const;

export const timelines = [
  "ASAP",
  "2-4 weeks",
  "1-2 months",
  "Planning ahead",
] as const;

export const contactDetails = {
  email: "lknexstudio@gmail.com",
  whatsapp: ["+94721908494", "+94716253806"],
  phone: "+94769655970",
  linkedin: "https://www.linkedin.com/company/nexs-tudio/",
} as const;
