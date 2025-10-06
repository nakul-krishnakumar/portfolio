import { motion } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  delay: number;
}

const StatCard = ({ value, label, delay }: StatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="bg-card rounded-xl border-2 border-foreground p-6 text-center shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_hsl(var(--primary))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
    >
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground uppercase tracking-wide">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "+1", label: "Years of Experience" },
    { value: "+15", label: "Projects Completed" },
    { value: "+18", label: "Techs Mastered" },
    { value: "+230", label: "Successful Commits" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default StatsSection;
