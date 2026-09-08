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
    { label: "GitHub", href: "https://github.com/akshaym5147" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/akshay-m-b64957169" },
  ],
  stats: [
    { label: "Years building", value: "7" },
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
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML/HTML5" },
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
      { name: "React Native" },
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
      { name: "AWS (S3, CloudFront, IAM, Lambda)" },
      { name: "Snowflake" },
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
    client: 'Imagine Learning',
    role: "Senior Full-Stack Engineer",
    period: "2022 - Present",
    location: "Andheri - Mumbai",
    companyLink: 'https://learningmate.com/',
    clientLink: 'https://www.imaginelearning.com/',
    bullets: [
      "Led frontend architecture and design reviews as technical anchor for a 6-engineer team, mentoring engineers and unblocking critical technical challenges on a high-concurrency real-time education platform.",
      "Architected WCAG 2.1-compliant, cross-browser features in React, JavaSript, TypeScript, and Redux - resolving accessibility gaps across varying US school-district compliance requirements.",
      "Designed and led development of the assessment scoring and feedback flow, enabling accurate scoring across 10M+ student attempts and driving higher product interaction.",
      "Built the core assessment component library (questions, scoring UI) consumed across multiple internal applications.",
      "Built an file-upload feature - a Java-based microservice on AWS S3, SQS, and Lambda paired with a frontend component to render uploaded HTML content - powering interactive student sessions.",
      "Built an event-tracking pipeline - frontend instrumentation capturing critical user activity, stored in Snowflake and indexed in OpenSearch - plus a web app to categorize activity by product criteria for analytics.",
      "Designed a retry mechanism in Java on AWS Lambda that moved scoring to an async background process, improving data accuracy and cutting manual score-verification effort by 35%.",
      "Resolved 25+ critical CVE vulnerabilities by auditing and upgrading vulnerable frontend dependencies across the platform.",
      "Optimized assessment submission performance, cutting submission time from 5 seconds to ~2 seconds.",
      "Migrated micro-frontend apps into a monorepo using Turborepo, streamlining builds and eliminating duplicate package publishing - reducing infra cost by 30% and removing the overhead of maintaining separate package versions per app.",
      "Presented technical decisions to clients and leadership, improving compliance by 15% and maintaining 99% uptime.",
      "Supported on-call rotation to troubleshoot and resolve production issues.",
      "Leveraged Claude and GitHub Copilot throughout the SDLC to improve delivery speed and code quality, and built internal tooling to automate the release process."
    ],
    stack: [
      // "React",
      // "JavaSript",
      // "TypeScript",
      // "Redux",
      // "Spring Boot",
      // "Java",
      // "Node.js",
      // "GraphQL",
      // "REST APIs",
      // "Microservices",
      // "Swagger/OpenAPI",
      // "AWS",
      // "AWS Lambda",
      // "Amazon S3",
      // "Amazon SQS",
      // "Redis",
      // "PostgreSQL",
      // "MySQL",
      // "OpenSearch",
      // "Grafana",
      // "New Relic",
      // "Sentry",
      // "DynamoDB",
      // "Snowflake",
      // "OpenSearch",
      // "Turborepo",
      // "Webpack",
      // "GitHub Copilot",
      // "Claude",
      // "Micro-frontends",
      // "Monorepo",
      // "Design Patterns",
      // "Event-driven architecture",
      // "Accessibility (WCAG 2.1)",
      // "Real-time systems"
    ]
  },
  {
    company: "LearningMate",
    client: 'Imagine Learning',
    role: "Software Engineer",
    period: "2021 - 2022",
    location: "Andheri - Mumbai",
    companyLink: 'https://learningmate.com/',
    clientLink: 'https://www.imaginelearning.com/',
    bullets: [
      "Built the core authoring experience used by 1M+ authors to create and publish assessments content such as activities.",
      "Built diagnostics feature for authored content which reduced 70% human publishing errors.",
      "Designed a rich text editor based on Draft JS, supporting custom styling options like list and MathJAX for math based content.",
      "Integrated New Relic and Grafana dashboards, enabling proactive error monitoring for a previously untraceable micro-frontend.",
      "Reduced bundle size by 38% (7MB→4.3MB) and nearly halved page load time via lazy loading, and code-splitting.",
    ],
    // stack: ['react', 'js/ts'],
  },
  {
    company: "Sankey solutions",
    role: "Software Engineer",
    period: "2019 - 2021",
    location: "Thane - Mumbai",
    bullets: [
      "Recognized as a Bar Raiser, bringing engineering expertise to technical discussions and decision-making.",
      "Modernized a legacy platform by rewriting the UI in React and React Native and refactoring unoptimized REST APIs, cutting API response time by 40%+ and delivering fully responsive mobile screens.",
      "Engineered real-time fleet management dashboard in React, tracking 10+ drivers live and dropping fare fraud by 70%.",
      "Built a driver application for fleet management, enabling real-time trip tracking, fare calculation, and asset management for fleet operators.",
      "Engineered a payment module for a Dubai-based payment platform using payment gateway in Node.js and React Native, streamlining payment processing and transaction workflows.",
      "Implemented real-time social media replies using React Native, Node.js, WebSockets, and GCP, delivering responsive and seamless user interactions.",
      "Built end-to-end Cypress automation suites, cutting verification time by 50% and minimizing regression defects across continuous delivery cycles.",
      "Worked directly with founders and designers to scope, develop, and ship features end-to-end, owning frontend, API integration, and QA across 3+ concurrent projects.",
    ],
    stack: []
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
];

export const education = [
  {
    school: "Viva college",
    degree: "BSC in Information Technology",
    period: "2016 - 2019",
    grade: "CGPA 8.10 / 10"
  },
  {
    school: "Viva college",
    degree: "HSC in Science - Information Technology",
    period: "2014 - 2016",
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
