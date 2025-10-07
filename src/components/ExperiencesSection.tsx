import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tech Company",
    period: "2023 - Present",
    description: "Building scalable web applications with React and Node.js",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    role: "Software Engineering Intern",
    company: "Startup Inc",
    period: "2022 - 2023",
    description: "Developed features for a SaaS platform serving 10k+ users",
    tags: ["Python", "Django", "PostgreSQL"],
  },
  {
    role: "Research Assistant",
    company: "IIIT Kottayam",
    period: "2021 - 2022",
    description: "Researched machine learning algorithms for computer vision",
    tags: ["ML", "TensorFlow", "OpenCV"],
  },
];

const ExperiencesSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">
        Experience
      </h2>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-20 pb-12 group"
          >
            {/* Timeline dot */}
            <div className="absolute left-6 top-2 w-5 h-5 rounded-full border-3 border-foreground bg-primary group-hover:scale-125 transition-transform duration-300" />
            
            {/* Content card */}
            <div className="bg-card border-2 border-foreground rounded-xl p-6 shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Briefcase className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground border-2 border-border rounded-lg px-3 py-1">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 border-2 border-primary/20 text-primary text-sm rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesSection;
