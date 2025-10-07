import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Target, Zap, Pin, MapPin } from "lucide-react";

const achievements = [
  {
    title: "Hackathon Winner",
    description: "Led a team of 4 developers to create an AI-powered health monitoring system that won first place among 50+ competing teams.",
    venue: "TechFest 2024, MIT",
    relatedTo: "AI & Healthcare",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
  },
  {
    title: "Research Paper Published",
    description: "Co-authored a paper on machine learning optimization techniques that was accepted and presented at an international conference.",
    venue: "IEEE International Conference",
    relatedTo: "Machine Learning",
    icon: Award,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
  },
  {
    title: "Open Source Top Contributor",
    description: "Recognized as one of the top 10 contributors to major open source projects with over 200 merged pull requests.",
    venue: "GitHub Community",
    relatedTo: "Open Source Development",
    icon: Star,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
  },
  {
    title: "Merit Scholarship",
    description: "Awarded full tuition scholarship for academic excellence and outstanding performance in computer science coursework.",
    venue: "University Academic Board",
    relatedTo: "Academic Excellence",
    icon: Medal,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
  },
  {
    title: "Technical Project Lead",
    description: "Successfully led a cross-functional team of 5 developers in delivering a scalable e-commerce platform ahead of schedule.",
    venue: "Tech Solutions Inc.",
    relatedTo: "Leadership & Development",
    icon: Target,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    title: "Innovation Award",
    description: "Received recognition for developing an innovative solution that reduced processing time by 60% using advanced algorithms.",
    venue: "Tech Innovation Summit",
    relatedTo: "Algorithm Optimization",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
];

const AchievementsSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">
        Achievements
      </h2>
      
      <div className="space-y-12">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const isEven = index % 2 === 0;
          const rotations = [1, -1, 1.5, -1.5, 1, -1];
          const rotation = rotations[index % rotations.length];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                rotate: 0,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ rotate: rotation }}
              className="group relative max-w-5xl mx-auto"
            >
              {/* Pin at the top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <Pin className="h-10 w-10 text-destructive fill-destructive group-hover:rotate-12 transition-transform duration-300" />
              </div>
              
              {/* Achievement Icon Badge */}
              <div className={`absolute ${isEven ? '-top-2 -right-2' : '-top-2 -left-2'} z-20`}>
                <div className="w-16 h-16 rounded-full border-3 border-foreground bg-primary flex items-center justify-center shadow-[4px_4px_0px_hsl(var(--foreground))] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              
              {/* Notice card */}
              <div className={`relative bg-card border-3 border-foreground rounded-lg shadow-[8px_8px_0px_hsl(var(--foreground))] group-hover:shadow-[10px_10px_0px_hsl(var(--primary))] transition-all duration-300 cursor-pointer overflow-hidden flex ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Tape effect at corners */}
                <div className="absolute -top-1 -left-1 w-10 h-7 bg-muted/60 border border-border rotate-45 rounded-sm z-10" />
                <div className="absolute -top-1 -right-1 w-10 h-7 bg-muted/60 border border-border -rotate-45 rounded-sm z-10" />
                
                {/* Image Section */}
                <div className="w-[38%] relative overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                </div>
                
                {/* Content Section */}
                <div className="w-[62%] p-8 pt-10 relative">
                  {/* Paper texture lines */}
                  <div className="absolute bottom-6 right-6 space-y-1 opacity-10">
                    <div className="w-16 h-0.5 bg-foreground" />
                    <div className="w-12 h-0.5 bg-foreground" />
                    <div className="w-14 h-0.5 bg-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 relative z-10">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 relative z-10">
                    {achievement.description}
                  </p>
                  
                  <div className="flex flex-col gap-2 relative z-10">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">{achievement.venue}</span>
                    </div>
                    
                    <div className="inline-flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Related to:</span>
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                        {achievement.relatedTo}
                      </span>
                    </div>
                  </div>
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
