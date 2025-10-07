import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Target, Zap } from "lucide-react";

const achievements = [
  {
    title: "Hackathon Winner",
    description: "First place at University Hackathon 2024",
    icon: Trophy,
    color: "primary",
  },
  {
    title: "Research Paper",
    description: "Published in IEEE Conference",
    icon: Award,
    color: "secondary",
  },
  {
    title: "Top Contributor",
    description: "Open Source Contributions 2023",
    icon: Star,
    color: "accent",
  },
  {
    title: "Scholarship",
    description: "Merit-based Academic Excellence",
    icon: Medal,
    color: "primary",
  },
  {
    title: "Project Lead",
    description: "Led team of 5 developers",
    icon: Target,
    color: "secondary",
  },
  {
    title: "Innovation Award",
    description: "Best Technical Innovation",
    icon: Zap,
    color: "accent",
  },
];

const AchievementsSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">
        Achievements
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: -1 }}
              className="group relative bg-card border-3 border-foreground rounded-2xl p-6 shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--primary))] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background decoration */}
              <div className={`absolute -right-6 -top-6 w-24 h-24 bg-${achievement.color}/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 mb-4 rounded-xl border-2 border-${achievement.color} bg-${achievement.color}/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <Icon className={`h-7 w-7 text-${achievement.color}`} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-2 relative z-10">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                {achievement.description}
              </p>
              
              {/* Corner decoration */}
              <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-foreground opacity-20 group-hover:opacity-40 transition-opacity" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
