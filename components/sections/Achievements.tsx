"use client";

import { motion } from "framer-motion";
import { Trophy, Award, ExternalLink, MapPin } from "lucide-react";
import { Badge } from "@/components/ui";
import Image from "next/image";

interface Achievement {
  title: string;
  description: string;
  venue: string;
  tags: string[];
  link: string;
  icon: typeof Trophy | typeof Award;
  image: string;
}

const achievements: Achievement[] = [
  {
    title: "Hac'KP 2025 Most Lightweight Solution Award",
    description:
      "I won this award at Hac'KP - Kerala Police's Flagship International Hackathon for significant contributions to the development of two products under Kerala Police Cyberdome and Childlight - Global Child Safety Institute to fight CSAM across the world.",
    venue: "Hac'KP 2025, c0c0n Conference, Kerala",
    tags: ["Cybersecurity", "Software Development"],
    link: "https://www.linkedin.com/posts/nakul-krishnakumar-9aa951282_hackp2025-keralapolice-cyberdome-activity-7380857356991184896-4b0W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETW7VIBcUP0YMDH19lP1Ni-xiI_5w6jfv8",
    icon: Trophy,
    image: "/hackp25.jpg",
  },
  {
    title: "IndoML'25 Datathon Dev Phase Winner",
    description:
      "Part of four member team that won the 'Providing Guidance' track in the Development Phase of IndoML 2025 Datathon by building an ML model to evaluate LLM-Powered AI Tutors.",
    venue: "IndoML'25, BITS Pilani",
    tags: ["Machine Learning", "Research"],
    link: "https://www.linkedin.com/posts/clc-lab-iiit-kottayam_indoml-graduateforum-indoml-activity-7380883040773943296-YG2x?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAETW7VIBcUP0YMDH19lP1Ni-xiI_5w6jfv8",
    icon: Award,
    image: "/indoml25.jpg",
  },
];

const accentColors = ["neo-yellow", "neo-blue"] as const;

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

function AchievementCard({ achievement, index }: AchievementCardProps) {
  const Icon = achievement.icon;
  const accentColor = accentColors[index % accentColors.length];

  return (
    <motion.a
      href={achievement.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group block"
    >
      <div className="relative bg-neo-white border-3 border-neo-black overflow-hidden neo-shadow neo-shadow-hover">
        {/* Accent Bar */}
        <div className={`h-2 bg-${accentColor}`} />

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Icon & Image Section */}
            <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-4">
              {/* Icon Badge */}
              <div
                className={`w-16 h-16 bg-${accentColor} border-3 border-neo-black flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <Icon size={32} className="text-neo-black" />
              </div>

              {/* Image */}
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 border-3 border-neo-black overflow-hidden">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-grow">
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-neo-black group-hover:text-neo-blue transition-colors mb-3">
                {achievement.title}
              </h3>

              {/* Venue */}
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-neo-purple flex-shrink-0" />
                <span className="text-sm font-semibold text-neo-black/70">
                  {achievement.venue}
                </span>
              </div>

              {/* Description */}
              <p className="text-neo-black/80 leading-relaxed mb-5">
                {achievement.description}
              </p>

              {/* Tags & Link */}
              <div className="flex flex-wrap items-center gap-3">
                {achievement.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                <span className="ml-auto flex items-center gap-1 text-sm font-bold text-neo-blue group-hover:underline">
                  View on LinkedIn
                  <ExternalLink size={14} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-neo-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-neo-yellow text-neo-black border-3 border-neo-black text-sm font-bold uppercase tracking-wider mb-4">
            Recognition
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-neo-black">
            Achievements
          </h2>
          <p className="mt-4 text-neo-black/70 max-w-2xl mx-auto">
            Awards and recognitions from hackathons, competitions, and research
            contributions.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
