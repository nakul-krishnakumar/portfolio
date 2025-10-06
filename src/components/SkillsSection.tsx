import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Brain, FileCode, Wrench, ChevronDown } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code2,
    color: "text-primary",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Database,
    color: "text-secondary",
    skills: ["Node.js", "Python", "PostgreSQL", "Express", "REST APIs", "GraphQL", "MongoDB", "Redis"],
  },
  {
    id: "ai",
    name: "AI & ML",
    icon: Brain,
    color: "text-accent",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning", "ML Ops"],
  },
  {
    id: "languages",
    name: "Languages",
    icon: FileCode,
    color: "text-primary",
    skills: ["JavaScript", "Python", "TypeScript", "Java", "C++", "SQL", "Bash"],
  },
  {
    id: "tools",
    name: "Tools",
    icon: Wrench,
    color: "text-secondary",
    skills: ["Git", "Docker", "VS Code", "Figma", "Postman", "Linux", "CI/CD", "AWS"],
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
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            className="px-4 py-2 bg-muted rounded-full text-sm font-medium border border-border hover:border-foreground transition-colors"
                          >
                            {skill}
                          </motion.span>
                        ))}
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
