import { AnimatePresence, motion } from "framer-motion";
import {
    Brain,
    ChevronDown,
    Cloud,
    Code,
    Code2,
    Database,
    FileCode,
    Network,
    Settings,
    Wrench,
} from "lucide-react";
import { useState } from "react";
import {
    SiAmazon,
    SiApachekafka,
    SiCplusplus,
    SiCss3,
    SiDocker,
    SiExpress,
    SiFastapi,
    SiFigma,
    SiFramer,
    SiGit,
    SiGnubash,
    SiGo,
    SiHtml5,
    SiHuggingface,
    SiJavascript,
    SiLangchain,
    SiLinux,
    SiMlflow,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiOpencv,
    SiPostgresql,
    SiPostman,
    SiPython,
    // Simple Icons for technologies
    SiReact,
    SiRedis,
    SiScikitlearn,
    SiTailwindcss,
    SiTensorflow,
    SiTypescript,
} from "react-icons/si";

// Skill icons mapping with proper technology icons
const skillIcons = {
    // Frontend
    "React.js": SiReact,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    "Framer Motion": SiFramer,

    // Backend
    "Go net/http": SiGo,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    FastAPI: SiFastapi,
    PostgreSQL: SiPostgresql,
    "REST APIs": Network, // Fallback to Lucide icon
    gRPC: Settings, // Fallback to Lucide icon
    MongoDB: SiMongodb,
    Redis: SiRedis,
    Kafka: SiApachekafka,

    // AI & ML
    TensorFlow: SiTensorflow,
    OpenCV: SiOpencv,
    "Scikit-learn": SiScikitlearn,
    LangChain: SiLangchain,
    LangGraph: Brain, // Fallback to Lucide icon
    Huggingface: SiHuggingface,
    GenAI: Brain, // Fallback to Lucide icon
    MLFlow: SiMlflow,
    "ML Ops": Cloud, // Fallback to Lucide icon

    // Languages
    Go: SiGo,
    Python: SiPython,
    "C++": SiCplusplus,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    SQL: SiMysql,
    Bash: SiGnubash,

    // Tools
    Git: SiGit,
    Docker: SiDocker,
    "VS Code": Code, // Fallback to Lucide icon
    Figma: SiFigma,
    Postman: SiPostman,
    Linux: SiLinux,
    AWS: SiAmazon,
};

const skillCategories = [
    {
        id: "frontend",
        name: "Frontend",
        icon: Code2,
        color: "text-primary",
        skills: [
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            // "Framer Motion",
        ],
    },
    {
        id: "backend",
        name: "Backend",
        icon: Database,
        color: "text-secondary",
        skills: [
            "Go net/http",
            "Node.js",
            "Express.js",
            "FastAPI",
            "PostgreSQL",
            "REST APIs",
            "gRPC",
            "MongoDB",
            "Redis",
            "Kafka",
        ],
    },
    {
        id: "ai",
        name: "AI & ML",
        icon: Brain,
        color: "text-accent",
        skills: [
            "TensorFlow",
            "OpenCV",
            "Scikit-learn",
            "LangChain",
            "LangGraph",
            "Huggingface",
            "GenAI",
            "MLFlow",
        ],
    },
    {
        id: "languages",
        name: "Languages",
        icon: FileCode,
        color: "text-primary",
        skills: [
            "Go",
            "Python",
            "C++",
            "TypeScript",
            "JavaScript",
            "SQL",
            "Bash",
        ],
    },
    {
        id: "tools",
        name: "Tools",
        icon: Wrench,
        color: "text-secondary",
        skills: [
            "Git",
            "Docker",
            "VS Code",
            "Figma",
            "Postman",
            "Linux",
            "AWS",
        ],
    },
];

const SkillsSection = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(
        null
    );

    const toggleCategory = (categoryId: string) => {
        setExpandedCategory(
            expandedCategory === categoryId ? null : categoryId
        );
    };

    return (
        <section className="mb-16" id="skills">
            <h2 className="text-4xl font-bold mb-4 text-center text-foreground">
                Skills
            </h2>
            <p className="text-muted-foreground text-center text-base max-w-md mx-auto mb-8">
                Technologies and tools I work with
            </p>

            <div className="flex flex-col gap-4">
                {skillCategories.map((category, index) => {
                    const isExpanded = expandedCategory === category.id;

                    return (
                        <motion.div
                            key={category.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <motion.button
                                layout
                                onClick={() => toggleCategory(category.id)}
                                className={`w-full bg-card rounded-xl border-2 border-foreground p-6 flex items-center justify-between shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--primary))] transition-all cursor-pointer ${
                                    isExpanded
                                        ? "shadow-[5px_5px_0px_hsl(var(--primary))]"
                                        : ""
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <category.icon
                                        className={`h-7 w-7 ${category.color}`}
                                    />
                                    <span className="text-lg font-semibold">
                                        {category.name}
                                    </span>
                                </div>

                                <motion.div
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="h-5 w-5" />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <motion.div
                                            initial={{ y: -10 }}
                                            animate={{ y: 0 }}
                                            exit={{ y: -10 }}
                                            className="pt-4 pb-2 px-6"
                                        >
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map(
                                                    (skill, skillIndex) => {
                                                        const IconComponent =
                                                            skillIcons[
                                                                skill as keyof typeof skillIcons
                                                            ] || FileCode;

                                                        return (
                                                            <motion.span
                                                                key={skill}
                                                                initial={{
                                                                    opacity: 0,
                                                                    scale: 0.8,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                }}
                                                                transition={{
                                                                    delay:
                                                                        skillIndex *
                                                                        0.05,
                                                                }}
                                                                className="px-4 py-2 bg-muted rounded-full text-sm font-medium border border-border hover:border-foreground transition-colors flex items-center gap-2 hover:cursor-default"
                                                            >
                                                                <IconComponent className="h-4 w-4" />
                                                                {skill}
                                                            </motion.span>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default SkillsSection;
