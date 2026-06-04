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

export const pricingPackages: PricingPackage[] = [
  {
    name: "Launch Site",
    price: "from $350",
    summary:
      "A premium company website with responsive design, conversion flow, and deployment setup.",
    features: [
      "Single or multi-section site",
      "Brand-aligned visual system",
      "Contact inquiry flow",
      "SEO and deployment basics",
    ],
  },
  {
    name: "MVP Build",
    price: "from $1,200",
    summary:
      "A full-stack product foundation for founders and small teams ready to validate fast.",
    features: [
      "Product UX structure",
      "Frontend and backend build",
      "Database and API setup",
      "Production deployment",
    ],
    featured: true,
  },
  {
    name: "System Upgrade",
    price: "custom",
    summary:
      "Improve an existing app with better UX, backend stability, integrations, analytics, or cloud setup.",
    features: [
      "Architecture review",
      "Performance and UX pass",
      "API and data improvements",
      "Maintenance roadmap",
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
