import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Target, Zap, Pin } from "lucide-react";

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const rotations = [2, -1, 1, -2, 2, -1];
          const rotation = rotations[index % rotations.length];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12, 
                rotate: 0,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              style={{ rotate: rotation }}
              className="group relative"
            >
              {/* Pin at the top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <Pin className="h-8 w-8 text-destructive fill-destructive group-hover:rotate-12 transition-transform duration-300" />
              </div>
              
              {/* Notice card */}
              <div className="relative bg-card border-3 border-foreground rounded-lg p-6 pt-8 shadow-[6px_6px_0px_hsl(var(--foreground))] group-hover:shadow-[8px_8px_0px_hsl(var(--primary))] transition-all duration-300 cursor-pointer min-h-[200px]">
                {/* Tape effect at corners */}
                <div className="absolute -top-1 -left-1 w-8 h-6 bg-muted/60 border border-border rotate-45 rounded-sm" />
                <div className="absolute -top-1 -right-1 w-8 h-6 bg-muted/60 border border-border -rotate-45 rounded-sm" />
                
                {/* Icon */}
                <div className={`w-16 h-16 mb-4 rounded-full border-3 border-foreground bg-background flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-[3px_3px_0px_hsl(var(--foreground))]`}>
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-2 relative z-10">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {achievement.description}
                </p>
                
                {/* Paper texture lines */}
                <div className="absolute bottom-4 right-4 space-y-1 opacity-10">
                  <div className="w-12 h-0.5 bg-foreground" />
                  <div className="w-8 h-0.5 bg-foreground" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
