import { motion } from "framer-motion";
import { Award, MapPin, Medal, Star, Target, Trophy, Zap } from "lucide-react";

const achievements = [
    {
        title: "Hac'KP 2025 Most Lightweight Solution Award",
        description:
            "I won this award at Hac'KP - Kerala Police's Flagship International Hackathon for significant contributions to the development of two products under Kerala Police Cyberdome and Childlight - Global Child Safety Institute to fight CSAM across the world.",
        venue: "Hac'KP 2025, c0c0n Conference, Kerala",
        tags: ["Cybersecurity", "Software Development"],
        link: "https://www.linkedin.com/posts/nakul-krishnakumar-9aa951282_hackp2025-keralapolice-cyberdome-activity-7380857356991184896-4b0W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETW7VIBcUP0YMDH19lP1Ni-xiI_5w6jfv8",
        icon: Trophy,
        image: "https://images.unsplash.com/photo-1759821419390-6e6e34ccf73f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "'Providing Guidance' Track Winner IndoML'25 Datathon",
        description:
            "Part of four member team that won the 'Providing Guidance' track in IndoML'25 Datathon by building an ML model to evaluate LLM-Powered AI Tutors. ",
        venue: "IndoML'25, BITS Pilani",
        tags: ["Machine Learning", "Research"],
        link: "https://www.linkedin.com/posts/clc-lab-iiit-kottayam_indoml-graduateforum-indoml-activity-7380883040773943296-YG2x?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAETW7VIBcUP0YMDH19lP1Ni-xiI_5w6jfv8",
        icon: Award,
        image: "./indoml25.jpg",
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
                                transition: { duration: 0.3 },
                            }}
                            style={{ rotate: rotation }}
                            className="group relative max-w-5xl mx-auto"
                        >
                            {/* Pin at the top
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <Pin className="h-10 w-10 text-destructive fill-destructive group-hover:rotate-12 transition-transform duration-300" />
              </div> */}

                            {/* Achievement Icon Badge */}
                            <div
                                className={`absolute ${
                                    isEven
                                        ? "-top-2 -right-2"
                                        : "-top-2 -left-2"
                                } z-20`}
                            >
                                <div className="w-16 h-16 rounded-full border-3 border-foreground bg-primary flex items-center justify-center shadow-[4px_4px_0px_hsl(var(--foreground))] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                    <Icon className="h-8 w-8 text-primary-foreground" />
                                </div>
                            </div>

                            {/* Notice card */}
                            <div
                                className={`relative bg-card border-3 border-foreground rounded-lg shadow-[4px_4px_0px_hsl(var(--foreground))] group-hover:shadow-[6px_6px_0px_hsl(var(--primary))] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col md:flex-row ${
                                    isEven
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Tape effect at corners */}
                                {/* <div className="absolute -top-1 -left-1 w-10 h-7 bg-muted/60 border border-border rotate-45 rounded-sm z-10" />
                <div className="absolute -top-1 -right-1 w-10 h-7 bg-muted/60 border border-border -rotate-45 rounded-sm z-10" /> */}

                                {/* Image Section */}
                                <div className="w-full md:w-[38%] h-48 md:h-auto relative overflow-hidden">
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-primary/20 to-transparent" />
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-[62%] p-6 md:p-8 md:pt-10 relative">
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
                                            <span className="font-medium">
                                                {achievement.venue}
                                            </span>
                                        </div>

                                        <div className="inline-flex items-center gap-2">
                                            <span className="text-xs text-muted-foreground">
                                                Tags:
                                            </span>
                                            {achievement.tags.map(
                                                (tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary"
                                                    >
                                                        {tag}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {achievement.link && (
                                            <a
                                                href={achievement.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-4 inline-block text-sm text-primary font-medium hover:underline"
                                            >
                                                View More
                                            </a>
                                        )}
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
