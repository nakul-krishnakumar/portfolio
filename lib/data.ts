// Centralized Portfolio Data
// Update this file to modify your portfolio content

export const personalInfo = {
  name: "Nakul Krishnakumar",
  tagline: "Building the future with AI & Backend Systems",
  bio: `I'm a Computer Science student at IIIT Kottayam with a passion for building 
  intelligent systems and scalable backend architectures. I love working with AI/ML, 
  Golang, and modern web technologies to solve real-world problems.`,
  email: "nakulkrishnakumar86@gmail.com",
  phone: "+91 94007 70XXX", // Update with your actual number
  location: "India",
  education: {
    degree: "B.Tech in Computer Science",
    institution: "IIIT Kottayam",
    year: "2027",
    description: "Focusing on AI/ML, Backend Systems, and DevOps",
  },
  avatar: "/images/avatar.jpeg", // Add your photo here
  resumeUrl: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/nakul-krishnakumar",
  linkedin: "https://www.linkedin.com/in/nakul-krishnakumar-9aa951282/",
  email: "mailto:nakulkrishnakumar86@gmail.com",
  discord: "https://discordapp.com/users/679608492143018007",
  kaggle: "https://www.kaggle.com/nakulkrishnakumar",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// Simplified skills - just names grouped by category
export const skills = {
  languages: ["Python", "C/C++", "Go", "JavaScript", "TypeScript", "Java"],
  frameworks: ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "TailwindCSS"],
  ai_ml: ["TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Pinecone", "RAG", "OpenCV"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase"],
  devops: ["Docker", "Git", "GitHub Actions", "Linux"],
  tools: ["VS Code", "Figma", "Postman", "Jupyter"],
};

export const projects = [
  {
    id: 1,
    title: "MARC-AI",
    description:
      "Multi-Agent Review & Consolidation tool that orchestrates LangGraph agents to run static linters & scanners and consolidates findings into explainable markdown reports using Azure OpenAI.",
    longDescription: `Cloud-native FastAPI application that orchestrates LangGraph agents to run static linters & scanners 
    (Ruff, ESLint, Bandit, Semgrep, Radon) and consolidates findings into explainable markdown reports using Azure OpenAI.
    Features multi-agent orchestration, parallel execution, and AI-powered explanations.`,
    image: "/images/projects/marc-ai.png",
    tags: ["Python", "FastAPI", "LangGraph", "Azure OpenAI", "Docker"],
    github: "https://github.com/nakul-krishnakumar/marc-ai",
    demo: null,
    featured: true,
    color: "neo-purple",
  },
  {
    id: 2,
    title: "Kaiyo AI",
    description:
      "AI-powered Travel Planner App that lets you plan, book and setup a trip easily with intelligent recommendations.",
    longDescription: `A full-stack travel planning application built with Go backend and TypeScript frontend. 
    Uses AI to provide personalized travel recommendations, itinerary planning, and booking assistance.`,
    image: "/images/projects/kaiyo-ai.png",
    tags: ["Go", "TypeScript", "React", "AI", "Docker"],
    github: "https://github.com/nakul-krishnakumar/kaiyo-ai",
    demo: null,
    featured: true,
    color: "neo-blue",
  },
  {
    id: 3,
    title: "Vidh AI",
    description:
      "AI Legal Assistant powered by RAG to help users understand the Bharatiya Nyaya Sanhita (BNS) with accurate, contextual answers.",
    longDescription: `BNS QnA Chatbot using Retrieval-Augmented Generation (RAG) and OpenAI's language models. 
    Fetches relevant sections from the latest BNS documents to answer legal queries with high accuracy.
    Built with FastAPI backend and Streamlit frontend.`,
    image: "/images/projects/vidh-ai.png",
    tags: ["Python", "FastAPI", "LangChain", "Pinecone", "Streamlit", "OpenAI"],
    github: "https://github.com/nakul-krishnakumar/vidh-ai",
    demo: "https://vidh-ai.streamlit.app/",
    featured: true,
    color: "neo-green",
  },
  {
    id: 4,
    title: "URL Shortener",
    description:
      "A simple and efficient URL shortener web application that generates shortened URLs and tracks them.",
    longDescription: `Full-stack URL shortening service built with Node.js, Express, and MongoDB. 
    Features URL generation, redirection, and analytics tracking.`,
    image: "/images/projects/url-shortener.png",
    tags: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/nakul-krishnakumar/url-shortener",
    demo: "https://z-ly.onrender.com",
    featured: true,
    color: "neo-yellow",
  },
  {
    id: 5,
    title: "stdlib (Contributions)",
    description:
      "Contributed to the Standard library for JavaScript and Node.js - a comprehensive numerical and scientific computing library.",
    longDescription: `Active contributor to stdlib-js, a standard library providing robust, 
    high-performance computational tools for JavaScript and Node.js environments.`,
    image: "/images/projects/stdlib.png",
    tags: ["JavaScript", "Node.js", "C", "Open Source", "Machine Learning", "Mathematics"],
    github: "https://github.com/stdlib-js/stdlib/commits/develop/?author=nakul-krishnakumar",
    demo: "https://stdlib.io/",
    featured: true,
    color: "neo-orange",
  },
  {
    id: 6,
    title: "Multimodal Injection Detector",
    description:
      "Research project focused on detecting injection attacks in multimodal AI systems.",
    longDescription: `Jupyter Notebook-based research project exploring detection methods for 
    injection vulnerabilities in multimodal AI/ML systems.`,
    image: "/images/projects/multimodal.png",
    tags: ["Python", "Jupyter", "ML", "Security", "Research"],
    github: "https://github.com/nakul-krishnakumar/multimodal-injection-detector",
    demo: null,
    featured: true,
    color: "neo-red",
  },
];

export const experiences = [
  {
    id: 1,
    role: "Student Researcher",
    company: "CyberLabs IIIT Kottayam",
    companyUrl: "https://cyberlabs.iiitkottayam.ac.in/",
    location: "IIIT Kottayam, Kerala",
    duration: "October 2025 - Present",
    description: [
      "Researching privacy-preserving machine learning through Federated Learning on Blockchain with Differential Privacy",
      "Building decentralized ML training pipelines using Hyperledger Fabric for secure model aggregation and tamper-proof audit trails",
      "Implementing federated learning workflows with Flower Framework, enabling distributed training across multiple nodes while preserving data privacy",
    ],
    technologies: ["Python", "Hyperledger Fabric", "Flower", "WandB", "Blockchain", "Federated Learning"],
    color: "neo-purple",
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Kerala Police Cyberdome",
    // companyUrl: "https://cyberdome.kerala.gov.in/",
    location: "Remote",
    duration: "October 2025 - Present",
    description: [
      "Contributed to building a backend service for a CSAM take down system for Kerala Police Cyberdome",
      "Designed and secured 10+ authenticated API routes, ensuring zero data leaks and maintaining 100% compliance with content handling policies for sensitive CSAM data of 1000+ real life cases securely",
      "Integrated webhook endpoints to connect the service to web crawlers and dark web crawlers for hash matching",
    ],
    technologies: ["Go", "PostgreSQL", "REST APIs", "Security", "Webhooks"],
    color: "neo-blue",
  },
  {
    id: 3,
    role: "Open Source Contributor",
    company: "stdlib-js/stdlib",
    companyUrl: "https://github.com/stdlib-js/stdlib",
    location: "Remote - Austin, TX",
    duration: "August 2025 - Present",
    description: [
      "Successfully contributed 30+ PRs including entire distance metrics namespace, core math algorithms, focusing on speed and efficiency",
      "Implemented core ML algorithms for model training and inference on the web, with C addons",
    ],
    technologies: ["JavaScript", "Node.js", "C", "Mathematics", "ML Algorithms"],
    color: "neo-yellow",
  },
  {
    id: 4,
    role: "AI Engineer Intern",
    company: "Bluecast Technologies",
    companyUrl: "https://www.bluecast.tech/",
    location: "Kochi, Kerala",
    duration: "May 2025 - August 2025",
    description: [
      "Implemented Computer Vision pipelines using SOTA models, achieving over 95% accuracy across user datasets for face detection and recognition SDKs, including mobile development",
      "Engineered production-ready RAG-based LLM assistants using LangChain, OpenAI APIs, and pgvector, leveraging distributed and parallel systems to cut client query response time by 60%",
    ],
    technologies: ["Python", "Computer Vision", "LangChain", "OpenAI", "pgvector", "RAG"],
    color: "neo-green",
  },
];

export const achievements = {
  openSource: [] as Array<{
    name: string;
    description: string;
    contributions: string;
    url: string;
    color: string;
  }>,
  hackathons: [] as Array<{
    name: string;
    achievement: string;
    year: string;
    project?: string;
    description?: string;
    color: string;
  }>,
  certifications: [] as Array<{
    name: string;
    issuer: string;
    date: string;
    url?: string;
    color: string;
  }>,
};

export const blogPosts = [
  // Placeholder - Add your blog posts here
];
