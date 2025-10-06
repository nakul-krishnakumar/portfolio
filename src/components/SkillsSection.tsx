import { motion } from "framer-motion";
import { Code2, Database, Palette, Zap, Cloud, GitBranch } from "lucide-react";

const skills = [
  { icon: Code2, name: "Frontend Development", color: "text-primary" },
  { icon: Database, name: "Backend Development", color: "text-secondary" },
  { icon: Palette, name: "UI/UX Design", color: "text-accent" },
  { icon: Zap, name: "Performance Optimization", color: "text-primary" },
  { icon: Cloud, name: "Cloud Services", color: "text-secondary" },
  { icon: GitBranch, name: "Version Control", color: "text-accent" },
];

const SkillsSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-foreground">SKILLS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-card rounded-xl border-2 border-foreground p-6 flex flex-col items-center gap-3 shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--primary))] transition-all cursor-pointer"
          >
            <skill.icon className={`h-8 w-8 ${skill.color}`} />
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
