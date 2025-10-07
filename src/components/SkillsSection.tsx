import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, Database, Brain, FileCode, Wrench, ChevronDown,
  // Frontend icons
  Atom, Globe, Palette, Zap, Blocks, FileText, Paintbrush, Sparkles,
  // Backend icons
  Server, Layers, Settings, Network, GitBranch, MonitorSpeaker, Database as DatabaseIcon, Cpu,
  // AI/ML icons
  Bot, Eye, Mic, Layers3, Target, Activity, Cloud,
  // Language icons
  Code, Terminal, Coffee, Hash, Binary, Command, Braces,
  // Tools icons
  Package, Edit, Figma, Send, Monitor, Workflow, CloudCog,
  Smile
} from "lucide-react";

// Skill icons mapping
const skillIcons = {
    // Frontend
    "React.js": Atom,
    "Next.js": Zap,
    "Tailwind CSS": Paintbrush,
    Vite: Sparkles,
    HTML5: Globe,
    CSS3: Palette,
    "Framer Motion": Blocks,

    // Backend
    "Go net/http": Blocks,
    "Node.js": Server,
    "Express.js": Layers,
    FastAPI: Settings,
    PostgreSQL: DatabaseIcon,
    "REST APIs": Network,
    gRPC: GitBranch,
    MongoDB: Database,
    Redis: Cpu,
    Kafka: MonitorSpeaker,

    // AI & ML
    TensorFlow: Bot,
    OpenCV: Eye,
    "Scikit-learn": Activity,
    LangChain: Layers3,
    LangGraph: GitBranch,
    Huggingface: Smile,
    GenAI: Bot,
    MLFlow: Brain,
    "ML Ops": Cloud,

    // Languages
    Go: Command,
    Python: Terminal,
    "C++": Binary,
    TypeScript: Code2,
    JavaScript: Code,
    // Java: Coffee,
    SQL: Database,
    Bash: Terminal,

    // Tools
    Git: GitBranch,
    Docker: Package,
    "VS Code": Edit,
    Figma: Figma,
    Postman: Send,
    Linux: Monitor,
    // "CI/CD": Workflow,
    AWS: CloudCog,
};

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code2,
    color: "text-primary",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Database,
    color: "text-secondary",
    skills: ["Go net/http", "Node.js", "Express.js", "FastAPI", "PostgreSQL", "REST APIs", "gRPC", "MongoDB", "Redis", "Kafka"],
  },
  {
    id: "ai",
    name: "AI & ML",
    icon: Brain,
    color: "text-accent",
    skills: ["TensorFlow", "OpenCV", "Scikit-learn", "LangChain", "LangGraph", "Huggingface", "GenAI", "MLFlow"],
  },
  {
    id: "languages",
    name: "Languages",
    icon: FileCode,
    color: "text-primary",
    skills: [ "Go", "Python", "C++", "TypeScript", "JavaScript", "Java", "SQL", "Bash"],
  },
  {
    id: "tools",
    name: "Tools",
    icon: Wrench,
    color: "text-secondary",
    skills: [ "Git", "Docker", "VS Code", "Figma", "Postman", "Linux", "AWS" ]
  },
];

const SkillsSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section className="mb-16" id="skills">
      <h2 className="text-4xl font-bold mb-8 text-foreground">SKILLS</h2>
      
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
                  isExpanded ? "shadow-[5px_5px_0px_hsl(var(--primary))]" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <category.icon className={`h-7 w-7 ${category.color}`} />
                  <span className="text-lg font-semibold">{category.name}</span>
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      className="pt-4 pb-2 px-6"
                    >
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => {
                          const IconComponent = skillIcons[skill as keyof typeof skillIcons] || FileCode;
                          
                          return (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.05 }}
                              className="px-4 py-2 bg-muted rounded-full text-sm font-medium border border-border hover:border-foreground transition-colors flex items-center gap-2"
                            >
                              <IconComponent className="h-4 w-4" />
                              {skill}
                            </motion.span>
                          );
                        })}
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
