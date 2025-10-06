import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and real-time inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    tags: ["TypeScript", "Firebase", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by machine learning for customer support automation.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-foreground">FEATURED PROJECTS</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="bg-card rounded-xl border-2 border-foreground p-6 shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--primary))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="sketch" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
