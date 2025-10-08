import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { GiPineTree } from "react-icons/gi";
import {
    SiAdobexd,
    SiAmazon,
    SiAngular,
    SiBabel,
    SiBootstrap,
    SiChakraui,
    SiCss3,
    SiCypress,
    SiDiscord,
    SiDjango,
    SiDocker,
    SiEjs,
    SiEslint,
    SiExpress,
    SiFastapi,
    SiFigma,
    SiFirebase,
    SiFlask,
    SiFramer,
    SiGithub,
    SiGitlab,
    SiGo,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiJest,
    SiJira,
    SiKubernetes,
    SiLangchain,
    SiMongodb,
    SiMui,
    SiNetlify,
    SiNextdotjs,
    SiNodedotjs,
    SiNotion,
    SiOpenai,
    SiPostgresql,
    SiPrettier,
    SiPython,
    SiReact,
    SiRedis,
    SiSketch,
    SiSlack,
    SiStorybook,
    SiSupabase,
    SiSvelte,
    SiTailwindcss,
    SiTensorflow,
    SiTrello,
    SiTypescript,
    SiVercel,
    SiVite,
    SiVuedotjs,
    SiWebpack,
} from "react-icons/si";

const projects = [
    {
        title: "KaiyoAI - AI Powered Travel Planner App",
        description: [
            <>Project In Progress.</>,
            <>
                Integrated LLM response streaming to reduce wait time by{" "}
                <strong className="font-semibold text-primary">70%</strong> and
                achieved{" "}
                <strong className="font-semibold text-primary">
                    better user experience.
                </strong>
            </>,
        ],
        tags: ["Next.js", "Go", "OpenAI", "Supabase"],
        github: "https://github.com/nakul-krishnakumar/kaiyo-ai",
        // demo: "#",
    },
    {
        title: "VidhAI - AI Powered Legal Assistant",
        description: [
            <>
                Built an automated{" "}
                <strong className="font-semibold text-primary">
                    RAG pipeline
                </strong>{" "}
                to extract and summarize key insights from over{" "}
                <strong className="font-semibold text-primary">400+</strong>{" "}
                pages of legal documents using advanced text embeddings.
            </>,
            <>
                Configured a scheduled{" "}
                <strong className="font-semibold text-primary">cron job</strong>{" "}
                to trigger API endpoints that crawl and fetch the latest{" "}
                <strong className="font-semibold text-primary">BNS</strong>{" "}
                documents from the source website in real-time.
            </>,
            <>
                Leveraged the{" "}
                <strong className="font-semibold text-primary">
                    text-embedding-3-small
                </strong>{" "}
                model for semantic search across crawled documents, enabling
                efficient retrieval from{" "}
                <strong className="font-semibold text-primary">Pinecone</strong>{" "}
                vector database.
            </>,
        ],
        tags: ["FastAPI", "Langchain", "OpenAI", "Supabase", "Pinecone"],
        github: "https://github.com/nakul-krishnakumar/vidh-ai",
        demo: "https://vidh-ai.streamlit.app/",
    },
    {
        title: "Zly - URL Shortener",
        description: [
            <>
                Custom made URL shortener written from scratch.
            </>,
            <>
                Implemented{" "}
                <strong className="font-semibold text-primary">
                    server-side rendering
                </strong>{" "}
                for faster initial load times and improved SEO.
            </>,
            <>
                Implemented URL data storing for user analytics including click
                counts.
            </>,
        ],
        tags: ["Node.js", "Express.js", "MongoDB", "EJS", "HTML5"],
        github: "https://github.com/nakul-krishnakumar/url-shortener",
        demo: "https://z-ly.onrender.com/",
    },
];

// Tech stack icons mapping
const techIcons = {
    // Current project technologies
    "Next.js": SiNextdotjs,
    Go: SiGo,
    OpenAI: SiOpenai,
    Supabase: SiSupabase,
    FastAPI: SiFastapi,
    Langchain: SiLangchain,
    Pinecone: GiPineTree, // Using Python icon as fallback for Pinecone

    // Frontend frameworks & libraries
    React: SiReact,
    "Vue.js": SiVuedotjs,
    Angular: SiAngular,
    Svelte: SiSvelte,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    HTML5: SiHtml5,
    CSS3: SiCss3,

    // CSS frameworks & UI libraries
    Tailwind: SiTailwindcss,
    Bootstrap: SiBootstrap,
    "Material-UI": SiMui,
    "Chakra UI": SiChakraui,
    "Framer Motion": SiFramer,

    // Backend & APIs
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    EJS: SiEjs,
    Python: SiPython,
    Flask: SiFlask,
    Django: SiDjango,
    GraphQL: SiGraphql,

    // Databases
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    Firebase: SiFirebase,
    Redis: SiRedis,

    // DevOps & Cloud
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
    AWS: SiAmazon,
    Vercel: SiVercel,
    Netlify: SiNetlify,

    // Version Control & CI/CD
    GitHub: SiGithub,
    GitLab: SiGitlab,

    // Build tools & bundlers
    Vite: SiVite,
    Webpack: SiWebpack,
    Babel: SiBabel,

    // Testing & Quality
    Jest: SiJest,
    Cypress: SiCypress,
    ESLint: SiEslint,
    Prettier: SiPrettier,

    // AI & ML
    TensorFlow: SiTensorflow,

    // Design & Collaboration
    Figma: SiFigma,
    "Adobe XD": SiAdobexd,
    Sketch: SiSketch,
    Notion: SiNotion,
    Slack: SiSlack,
    Discord: SiDiscord,
    Trello: SiTrello,
    Jira: SiJira,
    Storybook: SiStorybook,
};

const ProjectsSection = () => {
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

    // Get all unique tech stacks
    const allTechs = useMemo(() => {
        const techs = new Set<string>();
        projects.forEach((project) => {
            project.tags.forEach((tag) => techs.add(tag));
        });
        return Array.from(techs).sort();
    }, []);

    // Filter projects based on selected techs
    const filteredProjects = useMemo(() => {
        if (selectedTechs.length === 0) return projects;
        return projects.filter((project) =>
            selectedTechs.every((tech) => project.tags.includes(tech))
        );
    }, [selectedTechs]);

    // Toggle tech selection
    const toggleTech = (tech: string) => {
        setSelectedTechs((prev) =>
            prev.includes(tech)
                ? prev.filter((t) => t !== tech)
                : [...prev, tech]
        );
    };

    // Clear all filters
    const clearFilters = () => {
        setSelectedTechs([]);
    };
    return (
        <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
                Featured Projects
            </h2>

            {/* Tech Stack Filters */}
            <div className="mb-8">
                {/* <div className="flex items-center justify-between mb-4">
          {/* {selectedTechs.length > 0 && (
            // <Button 
            //   variant="outline" 
            //   size="sm" 
            //   onClick={clearFilters}
            //   className="text-xs"
            // >
            //   Clear All ({selectedTechs.length})
            // </Button>
          )}
          </div> */}

                <div className="flex flex-wrap gap-3">
                    {allTechs.map((tech) => {
                        const Icon = techIcons[tech];
                        const isSelected = selectedTechs.includes(tech);

                        return (
                            <motion.button
                                key={tech}
                                onClick={() => toggleTech(tech)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                                    isSelected
                                        ? "bg-primary text-primary-foreground border-primary shadow-[2px_2px_0px_hsl(var(--primary-foreground))]"
                                        : "bg-card border-border hover:border-primary/50 hover:bg-primary/5"
                                }`}
                            >
                                {Icon && <Icon className="h-4 w-4" />}
                                <span className="text-sm font-medium">
                                    {tech}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Results count */}
                <div className="mt-4 text-sm text-muted-foreground">
                    {selectedTechs.length > 0
                        ? `Showing ${filteredProjects.length} project${
                              filteredProjects.length !== 1 ? "s" : ""
                          } with ${selectedTechs.join(" + ")}`
                        : `Showing all ${projects.length} projects`}
                </div>
            </div>

            <div className="grid gap-6">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-card rounded-xl border-2 border-foreground p-6 shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--primary))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                    >
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                            {project.title}
                        </h3>
                        <ul className="text-muted-foreground mb-4 leading-relaxed list-disc list-inside">
                            {project.description.map((desc, index) => (
                                <li key={index} className="mb-1">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <Button variant="sketch" size="sm" asChild>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="h-4 w-4 mr-2" />
                                    Code
                                </a>
                            </Button>
                            {
                                project.demo && (
                                    <Button variant="hero" size="sm" asChild>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Demo
                                        </a>
                                    </Button>
                                )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
