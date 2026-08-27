export interface Exhibit {
  letter: string;
  title: string;
  category: string;
  client: string;
  image: string;
  tags: string[];
  date: string;
  summary: string;
  outcomes: string[];
  solo?: boolean;
  award?: string;
}

export interface LabRow {
  substance: string;
  code: string;
  category: 'Languages' | 'Frameworks' | 'Databases & AI' | 'Tools & Infra';
  detected: string;
  finding: string;
}

export interface LedgerItem {
  period: string;
  role: string;
  organization: string;
  category: string;
  bullets: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
  credentialUrl?: string;
  certId?: string;
}

export const portfolioData = {
  personal: {
    fullName: "Mukesh Nanuram Chaudhari",
    shortName: "Mukesh Chaudhari",
    roleTitle: "Software Developer · Full-Stack & AI Systems",
    tagline: "Software Development enthusiast passionate about building AI-driven and modern web solutions.",
    bioPrimary: "He is most often found turning complex ideas into resilient, full-stack systems — architecting multi-tenant B2B architectures, engineering batched vector ingestion pipelines, and deploying production RAG chatbots.",
    bioSecondary: "Currently pursuing BTech in Computer Science and Engineering at School of Engineering and Applied Science, Ahmedabad University (CGPA: 2.87/4.00). Open to Software Development Engineering roles, full-stack builds, and high-impact AI web solutions.",
    location: "Ahmedabad, Gujarat, India",
    university: "Ahmedabad University · School of Engineering and Applied Science",
    degree: "BTech in Computer Science and Engineering (Pursuing)",
    areaOfInterest: "Software Development & Full Stack Development",
    weather: "32°C · Ahmedabad · clear sunny sky",
    caseNumber: "Case No. 731",
    email: "mukesh.c@ahduni.edu.in",
    github: "https://github.com/In731",
    githubHandle: "github.com/In731",
    leetcode: "https://leetcode.com/u/yRmj785Cdf/",
    leetcodeHandle: "leetcode.com/u/yRmj785Cdf",
    linkedin: "https://www.linkedin.com/in/mukesh-chaudhari-8730932b6",
    portrait: "mukesh-portrait.png",
    edition: "Full-Stack & AI Edition",
    estYear: "2024",
  },

  exhibits: [
    {
      letter: "A",
      title: "NexSupport AI",
      category: "AI Customer Support Platform",
      client: "Personal Project",
      image: "caitlyn-nails.png",
      tags: ["Next.js", "React", "TypeScript", "MongoDB Atlas Vector", "Gemini API", "Scalekit", "Upstash Redis", "Tailwind CSS"],
      date: "Jul 2026",
      summary: "Multi-tenant B2B AI support platform featuring embeddable widgets, automated vector ingestion, and low-latency RAG chatbots.",
      outcomes: [
        "Engineered a batched vector ingestion pipeline eliminating serverless timeout failures.",
        "Enforced domain-restricted API access & isolated tenant datasets via Atlas pre-filtering.",
        "Built embeddable live chat widget with streaming Gemini responses and Upstash Redis caching."
      ],
      solo: true,
    },
    {
      letter: "B",
      title: "PropertyHub",
      category: "Full-Stack Real Estate Platform",
      client: "Independent Project",
      image: "pakko.png",
      tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Cloudinary", "Tailwind CSS"],
      date: "Mar — Apr 2026",
      summary: "Comprehensive full-stack real estate marketplace with server-side property filtering, interactive map integration, and reviews/ratings.",
      outcomes: [
        "Implemented secure, rate-limited JWT authentication and comprehensive CRUD REST APIs.",
        "Engineered a normalized PostgreSQL relational schema with robust foreign-key constraints.",
        "Integrated Cloudinary for high-performance direct property image uploads and transformations."
      ],
      solo: true,
    },
    {
      letter: "C",
      title: "LokiVerse",
      category: "Multiversal AI Story Generator",
      client: "Winner · Challenge 6.0 (Programming Club)",
      image: "leartist-wedding.png",
      tags: ["Gemini API", "Firebase (Auth & Firestore)", "Cloudinary", "GSAP", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      date: "Jul 2025",
      summary: "Full-stack AI storytelling web app that transforms user prompts into rich multiverse stories and character arcs with interactive animations.",
      outcomes: [
        "Won Category Winner at Website Making Challenge 6.0 (Ahmedabad University Programming Club).",
        "Shipped a full-stack AI storytelling engine with secure Firebase Auth and Firestore persistence.",
        "Crafted immersive GSAP micro-animations designed to make storytelling interactive and effortless."
      ],
      solo: true,
      award: "Winner — Website Making Challenge 6.0",
    },
    {
      letter: "D",
      title: "GenAIShell",
      category: "Agentic Terminal Assistant & CLI",
      client: "Independent Project",
      image: "pakko-quote.png",
      tags: ["Python", "LLM API", "SQLite", "Vector DB", "ReAct Loop", "RAG", "CLI Tooling"],
      date: "Mar — Apr 2026",
      summary: "Engineered a secure, GenAI-powered CLI assistant that translates natural language into precise, automated terminal executions across Windows and macOS.",
      outcomes: [
        "Designed a custom ReAct agent loop with local RAG memory and contextual retrieval.",
        "Implemented strict command sandboxing & safety confirmation guards for safe task automation.",
        "Engineered cross-platform execution with persistent SQLite session history and fast vector indexing."
      ],
      solo: true,
    },
  ] as Exhibit[],

  achievements: [
    {
      title: "Winner — Website Making Challenge 6.0",
      issuer: "Programming Club · Ahmedabad University",
      date: "Jul 2025",
      badge: "Category Winner",
      description: "Category Winner in the Website Making Challenge 6.0 at Ahmedabad University for developing LokiVerse, an AI-powered multiverse story generation web application.",
    },
  ] as Achievement[],

  certifications: [
    {
      title: "Building AI-Powered Search with MongoDB Vector Search",
      issuer: "MongoDB",
      date: "May 2026",
      badge: "MongoDB Certified",
      description: "Hands-on credential covering vector embeddings, semantic search retrieval pipelines, RAG architecture, and Atlas Vector Search indexing.",
      credentialUrl: "https://www.credly.com/badges/f8ad13a1-1150-4789-be0a-28271b04db25/public_url",
    },
    {
      title: "Neo4j Certified Professional",
      issuer: "Neo4j GraphAcademy",
      date: "Mar 17, 2026",
      badge: "Neo4j Certified",
      certId: "d1c6b469-6ea3-4265-a3c3-e18bf0beefa7",
      description: "Accredited certification validating proficiency in graph databases, Cypher query language optimization, and connected data modeling.",
    },
    {
      title: "GenAI with Python",
      issuer: "ChaiCode",
      date: "Feb '26 — Mar '26",
      badge: "GenAI Certified",
      description: "Knowledge of building AI applications using Python, LLMs, prompt engineering, and RAG-based systems for integrating generative AI into software solutions.",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Sep 2024",
      badge: "Postman Expert",
      description: "Hands-on certification covering REST API fundamentals: GET, POST, PATCH, and DELETE requests, query parameters, header management, auth tokens, and automated test collections.",
    },
  ] as Certification[],

  labRows: [
    { substance: "TypeScript / JavaScript", code: "TS/JS", category: "Languages", detected: "Daily use", finding: "Primary language" },
    { substance: "Python & C++", code: "PY/C", category: "Languages", detected: "Academic & projects", finding: "Comfortable" },
    { substance: "SQL / Relational", code: "SQL", category: "Languages", detected: "In projects", finding: "Comfortable" },
    { substance: "HTML5 & Modern CSS", code: "HTML", category: "Languages", detected: "Daily use", finding: "Primary tool" },
    { substance: "Next.js & React", code: "NEXT", category: "Frameworks", detected: "Daily use", finding: "Primary tool" },
    { substance: "Node.js & Express.js", code: "NODE", category: "Frameworks", detected: "In projects", finding: "Primary tool" },
    { substance: "Tailwind CSS & GSAP", code: "UI/FX", category: "Frameworks", detected: "Daily use", finding: "Primary tool" },
    { substance: "Gemini API & LangChain", code: "AI/LLM", category: "Databases & AI", detected: "In projects", finding: "Primary tool" },
    { substance: "MongoDB Atlas & Vector Search", code: "MDB", category: "Databases & AI", detected: "In projects", finding: "Primary tool" },
    { substance: "PostgreSQL & Mongoose", code: "PG/MG", category: "Databases & AI", detected: "In projects", finding: "Comfortable" },
    { substance: "Pinecone, Neo4j & RAG", code: "RAG", category: "Databases & AI", detected: "In training", finding: "Emerging tool" },
    { substance: "Git, GitHub & Postman", code: "DEV", category: "Tools & Infra", detected: "Daily use", finding: "Primary tool" },
    { substance: "Firebase & Cloudinary", code: "CLOUD", category: "Tools & Infra", detected: "In projects", finding: "Comfortable" },
    { substance: "Docker, Vercel & Redis", code: "OPS", category: "Tools & Infra", detected: "In projects", finding: "Comfortable" },
  ] as LabRow[],

  ledger: [
    {
      period: "Sep 2024 — Mar 2026",
      role: "IEEE Core Committee Member",
      organization: "Ahmedabad University",
      category: "Leadership & Responsibility",
      bullets: [
        "Organized major university tech events, hackathons, and regional IEEE conferences.",
        "Facilitated logistics, technical setup, and student engagement across engineering cohorts."
      ],
    },
    {
      period: "Oct 2024 — Jul 2025",
      role: "Committee Member",
      organization: "ACM Student Chapter (Association for Computing Machinery)",
      category: "Leadership & Responsibility",
      bullets: [
        "Organized flagship events including PAIR-A-THON 2.0 coding hackathon.",
        "Conducted hands-on 'Basics of Web Development' workshops for junior developers."
      ],
    },
    {
      period: "Dec 2024",
      role: "Student Volunteer",
      organization: "Humankind",
      category: "Co-Curricular & Community",
      bullets: [
        "Owned end-to-end campaign design for community book donation drives.",
        "Drove engagement planning, digital app ideation, and collateral design to scale donor participation."
      ],
    },
    {
      period: "Pursuing (2023 — 2027)",
      role: "BTech in Computer Science and Engineering",
      organization: "School of Engineering and Applied Science, Ahmedabad University",
      category: "Education",
      bullets: [
        "Current CGPA: 2.87 / 4.00 · Focus on Full Stack Software Engineering, Distributed Systems, Data Structures & Algorithms, and AI."
      ],
    },
  ] as LedgerItem[],
};
