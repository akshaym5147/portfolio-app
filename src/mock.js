// Mock data for Akshay's Portfolio - Warm Developer Vibe

export const profile = {
  name: "Akshay",
  firstName: "Akshay",
  lastName: "Muge",
  role: "Full-Stack Engineer",
  location: "Mumbai, India",
  email: "akshaymuge51@gmail.com",
  phone: "+91 7083325829",
  resumeUrl: "#",
  portrait:
    "https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?auto=format&fit=crop&w=900&q=80",
  workspace:
    "https://images.unsplash.com/photo-1642155664770-48f7e2299458?auto=format&fit=crop&w=1200&q=80",
  socials: [
    { label: "GitHub", href: "https://github.com", handle: "@akshay-dev" },
    { label: "LinkedIn", href: "https://linkedin.com", handle: "in/akshay" },
  ],
  stats: [
    { label: "Years building", value: "7+" },
    { label: "Shipped products", value: "5+" },
    // { label: "Open-source stars", value: "0k" },
    // { label: "Cups of chai", value: "∞" }
  ]
};

// export const aboutParagraphs = [
//   "Hey there - I'm Akshay. I'm a full-stack engineer who cares deeply about the craft of making software that feels lived-in. I spend my days between React components, Postgres queries, and the kind of design details most people never notice (but always feel).",
//   "I've spent the last six years building tools for healthcare, fintech, and indie creators. I care about performance budgets, honest error messages, and shipping small improvements on a Tuesday afternoon.",
//   "When I'm not coding, you'll find me roasting coffee, reading a worn-out copy of 'The Pragmatic Programmer', or over-engineering my home automation setup."
// ];

export const aboutParagraphs = [
  "Hey there - I'm Akshay. I'm a full-stack engineer who cares deeply about owning what I ship - from the database schema to the last pixel on screen. I spend my days between React components, Java microservices, and the kind of system design decisions that quietly keep things running at 99% uptime.",
  "I've spent the last seven years building platforms across edtech and fleet management - shipping real-time dashboards, serverless workflows, and component libraries that outlive the sprint they were born in. I care about performance, clean APIs, and writing documentation that actually helps the next engineer.",
  "When I'm not coding, you'll find me exploring new tech, contributing to open source, or debugging something that definitely wasn't broken yesterday."

  // "Hey there - I'm Akshay. I'm a full-stack engineer who cares deeply about the craft of making software that feels lived-in. I spend my days between React components, Postgres queries, and the kind of design details most people never notice (but always feel).",
  // "I've spent the last six years building tools for healthcare, fintech, and indie creators. I care about performance budgets, honest error messages, and shipping small improvements on a Tuesday afternoon.",
  // "When I'm not coding, you'll find me roasting coffee, reading a worn-out copy of 'The Pragmatic Programmer', or over-engineering my home automation setup."
];

export const aboutQuickOverview = {
  currently: 'Senior engineer at LearningMate, buildng the edtech platform.',
  previously: 'Sankey Solutions - fast-paced startup.',
  offHours: 'Building side projects, exploring new tech, and breaking things on purpose.'
}

export const skills = [
  {
    category: "Frontend",
    gridSpan: "lg:col-span-2",
    items: [
      { name: "React" },
      // { name: "Next.js" },
      { name: "React Native" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "SCSS" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
      { name: "Redux Thunk" },
      { name: "React Query" },
      { name: "Storybook" },
      { name: "D3.js" },
      { name: "Vite" },
      { name: "Webpack" },
      { name: "Babel" },
      { name: "Turborepo" },

    ]
  },
  {
    category: "Backend",
    gridSpan: "lg:col-span-2",
    items: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "GraphQL" },
      { name: "REST APIs" },
      { name: "Microservices" },
      { name: "Swagger / OpenAPI" }
    ]
  },
  {
    category: "Databases & Caching",
    items: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "DynamoDB" },
      { name: "Redis" }
    ]
  },
  {
    category: "Cloud & DevOps",
    gridSpan: "lg:col-span-2",
    items: [
      { name: "AWS (S3, CloudFront, IAM, Route 53, Lambda)" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "CI/CD" }
    ]
  },
  {
    category: "Search & Observability",

    items: [
      { name: "Elasticsearch" },
      { name: "OpenSearch" },
      { name: "Grafana" },
      { name: "New Relic" },
      { name: "Sentry" }
    ]
  },
  {
    category: "Testing",
    gridSpan: "lg:col-span-2",
    items: [
      { name: "Jest" },
      { name: "React Testing Library" },
      { name: "Enzyme" },
      { name: "Cypress" },
      { name: "Playwright" },
      { name: "Applitools" }
    ]
  },
  {
    category: "Engineering Practices",
    gridSpan: "lg:col-span-2",
    items: [
      { name: "System Design" },
      { name: "API Design" },
      { name: "Data Structures & Algorithms" },
      { name: "Accessibility (WCAG)" },
      { name: "Agile / Scrum" },
      { name: "GitHub Copilot" },
      { name: "Claude Code" }
    ]
  }
];

export const experience = [
  {
    company: "LearningMate",
    role: "Senior Full-Stack Engineer",
    period: "2022 - Present",
    location: "Remote · Berlin",
    bullets: [
      "Led frontend architecture and design reviews as technical anchor for a 6-engineer team, mentoring engineers and unblocking critical technical challenges on a high-concurrency real-time education platform.",
      "Architected WCAG 2.1-compliant, cross-browser features in React, TypeScript, and Redux - resolving accessibility gaps across varying US school-district compliance requirements.",
      "Built the core assessment component library (questions, scoring UI, feedback flows) consumed across multiple internal applications.",
      "Designed and led development of the assessment scoring and feedback flow, enabling accurate scoring across 100,000+ student attempts and driving higher product interaction.",
      "Built an end-to-end file-upload feature - a Java-based microservice on AWS S3, SQS, and Lambda paired with a frontend component to render uploaded HTML content - powering interactive student sessions.",
      "Built an end-to-end event-tracking pipeline - frontend instrumentation capturing critical user activity, stored in Snowflake and indexed in OpenSearch - plus a web app to categorize activity by product criteria for analytics.",
      "Resolved 25+ critical CVE vulnerabilities by auditing and upgrading vulnerable frontend dependencies across the platform.",
      "Designed a retry mechanism in Java on AWS Lambda that moved scoring to an async background process, improving data accuracy and cutting manual score-verification effort by 35%.",
      "Optimized assessment submission performance, cutting submission time from 1.3 minutes to ~1 second.",
      "Migrated micro-frontend apps into a monorepo using Turborepo, streamlining builds and eliminating duplicate package publishing - reducing infra cost by 30% and removing the overhead of maintaining separate Node/Webpack versions per app.",
      "Supported on-call rotation to troubleshoot and resolve production issues.",
      "Presented technical decisions to clients and leadership, improving compliance by 15% and maintaining 99% uptime.",
      "Leveraged Claude and GitHub Copilot throughout the SDLC to improve delivery speed and code quality, and built internal tooling to automate the release process."

      // "Serve as technical anchor for the team pod, unblocking engineers and resolving critical technical challenges",
      // "Built WCAG-compliant, cross-browser React/TypeScript/Redux features for a high-concurrency real-time education platform",
      // "Designed and led development of scoring for drag-drop and matching components, enabling accurate scoring for 50,000+ student attempts.",
      // "Developed Java/Spring Boot microservices and AWS Lambda functions for serverless, event-driven workflows",
      // "Designed a retry mechanism that improved data accuracy for 1,000+ users and reduced manual effort by 35%",
      // "Integrated OpenSearch for content search across question banks, including indexing strategy and query tuning",
      // "Optimised assessment submission performance using Reactive Java and SQS, reducing submission time from 2 minutes to 1.3 seconds",
      // "Resolved 13+ critical CVE vulnerabilities by auditing and upgrading vulnerable dependencies across the platform",
      // "Led frontend architecture, sprint planning, and design reviews while mentoring 6+ engineers",
      // "Led application migration to a new CI/CD setup on AWS, ensuring zero downtime and continuity across deployment changes",
      // "Presented technical decisions to clients and leadership, improving compliance by 15% and maintaining 99% uptime",
      // "Leveraged Claude and GitHub Copilot during development to improve delivery speed and code quality",
    ],
    stack: []
  },
  {
    company: "LearningMate",
    role: "Software Engineer",
    period: "2021 - 2022",
    location: "Mumbai",
    bullets: [
      "Built the core authoring experience used by 40k+ creators to publish assessments.",
      "Built per-question feedback with rich text/media support, reducing student doubt queries by 70%.",
      "Integrated New Relic and Grafana dashboards, enabling proactive error monitoring for a previously untraceable micro-frontend.",
      "Reduced bundle size by 38% (7MB→4.3MB) and nearly halved page load time via lazy loading, and code-splitting."
    ],
    stack: [],
  },
  {
    company: "Sankey solutions",
    role: "Software Engineer",
    period: "2019 - 2021",
    location: "Bengaluru",
    bullets: [
      "Built an internal low-code tool that saved ops team ~30 hours / week.",
      "Migrated monolith to 6 services; introduced contract testing with Pact.",
      "Wrote the company's first public engineering blog post (~120k views)."
    ],
    stack: ["Vue", "Python", "Django", "MySQL", "Docker"]
  }
];

export const projects = [
  {
    id: "p1",
    title: "Ledgerly",
    subtitle: "Personal finance, without the noise.",
    description:
      "A minimalist budgeting app for freelancers. Built with Next.js, Postgres, and a custom reconciliation engine. 12k monthly actives.",
    tags: ["Next.js", "Postgres", "Stripe", "SaaS"],
    image:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?auto=format&fit=crop&w=900&q=80",
    href: "#",
    year: "2024"
  },
  {
    id: "p2",
    title: "Pulse Analytics",
    subtitle: "Real-time dashboards for product teams.",
    description:
      "Ingests 2M events/day and renders sub-second dashboards. ClickHouse + FastAPI + React with a custom charting DSL.",
    tags: ["FastAPI", "ClickHouse", "React", "Realtime"],
    image:
      "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?auto=format&fit=crop&w=900&q=80",
    href: "#",
    year: "2024"
  },
  {
    id: "p3",
    title: "Fieldnote",
    subtitle: "A journaling app for engineers.",
    description:
      "Mobile-first markdown journal with local-first sync, end-to-end encryption, and a lovely typography-first reader.",
    tags: ["React Native", "CRDT", "Mobile", "E2EE"],
    image:
      "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?auto=format&fit=crop&w=900&q=80",
    href: "#",
    year: "2023"
  },
  {
    id: "p4",
    title: "Harvest OS",
    subtitle: "A CLI for small farms.",
    description:
      "Open-source CLI & API for tracking yields, rotations and input costs on small holdings. 2.3k GitHub stars.",
    tags: ["Python", "CLI", "Open-source"],
    image:
      "https://images.unsplash.com/photo-1773966071293-bea3d7646fd1?auto=format&fit=crop&w=900&q=80",
    href: "#",
    year: "2023"
  },
  {
    id: "p5",
    title: "Kettle",
    subtitle: "A warm chat client for teams.",
    description:
      "An opinionated Slack alternative built around focus, threads, and async-first rituals. Side project - 500 beta users.",
    tags: ["Next.js", "WebSockets", "Design"],
    image:
      "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?auto=format&fit=crop&w=900&q=80",
    href: "#",
    year: "2022"
  },
  {
    id: "p6",
    title: "Monsoon UI",
    subtitle: "A React component library.",
    description:
      "Accessible, themeable components for indie hackers. Tree-shakeable, RSC-friendly, ~8kb gzipped.",
    tags: ["React", "A11y", "Library"],
    image:
      "https://images.unsplash.com/photo-1617240016072-d92174e44171?auto=format&fit=crop&w=900&q=80",
    href: "#",
    year: "2022"
  }
];

export const education = [
  {
    school: "BITS Pilani",
    degree: "B.E., Computer Science",
    period: "2015 - 2019",
    details:
      "Graduated with distinction. Undergraduate thesis on distributed consensus; published at an ACM student workshop.",
    grade: "CGPA 9.1 / 10"
  },
  {
    school: "Recurse Center",
    degree: "Self-directed programming residency",
    period: "Winter 2022",
    details:
      "12-week residency in Brooklyn. Wrote a toy database, a terminal emulator and gave three talks on systems programming.",
    grade: "Alumni"
  },
  {
    school: "Coursera · Stanford",
    degree: "Machine Learning Specialization",
    period: "2021",
    details:
      "Completed Andrew Ng's specialization; built a production-grade recommender as a capstone.",
    grade: "Honors"
  }
];

export const testimonials = [
  {
    quote:
      "Akshay is the rarest kind of engineer - one who cares equally about the query plan and the empty state illustration. Every review made the product better.",
    name: "Priya Menon",
    title: "VP Engineering, Lumen Health"
  },
  {
    quote:
      "He shipped the hardest feature on our roadmap in half the expected time, then documented it so well that onboarding took an afternoon. A quiet force-multiplier.",
    name: "Daniel Okafor",
    title: "Founder, Mosaic Labs"
  },
  {
    quote:
      "Working with Akshay felt like pair-programming with a warm, patient senior who still remembers what it's like to be stuck. I learned more in six months than in two years elsewhere.",
    name: "Mei-Lin Tan",
    title: "Frontend Engineer, Finch & Fig"
  },
  {
    quote:
      "Excellent taste in APIs, excellent taste in coffee, excellent taste in hiring. 10/10 would build a company with him again.",
    name: "Rahul Iyer",
    title: "Co-founder, Kettle"
  }
];

export const posts = [
  {
    slug: "slow-software",
    title: "In praise of slow software",
    excerpt:
      "On building tools that respect the reader's time - and why 'boring' is usually the right call.",
    date: "Jun 14, 2025",
    readMins: 7,
    tag: "Essay"
  },
  {
    slug: "postgres-indexes",
    title: "The four Postgres indexes I reach for first",
    excerpt:
      "A field-tested guide to B-tree, GIN, BRIN and partial indexes - with query plans that actually helped me in production.",
    date: "Apr 02, 2025",
    readMins: 11,
    tag: "Engineering"
  },
  {
    slug: "warm-interfaces",
    title: "Designing warm interfaces",
    excerpt:
      "How I borrow from print typography, old notebooks and terminal aesthetics to make software feel less corporate.",
    date: "Feb 19, 2025",
    readMins: 5,
    tag: "Design"
  }
];

export const navLinks = [
  // { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "work", href: "#experience" },
  // { label: "projects", href: "#projects" },
  // { label: "writing", href: "#blog" },
  { label: "contact", href: "#contact" }
];
