"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Github, 
  Users, 
  Zap, 
  Target, 
  Code, 
  Star,
  ExternalLink,
  Trophy,
  Medal,
  BadgeCheck
} from "lucide-react";
import { Badge } from "@/components/ui";

const iconMap: Record<string, React.ElementType> = {
  shark: Github,
  users: Users,
  zap: Zap,
  lightning: Target,
  code: Code,
  star: Star,
  trophy: Trophy,
  medal: Medal,
  badge: BadgeCheck,
  award: Award,
};

const colorClasses: Record<string, { bg: string; text: string }> = {
  "neo-yellow": { bg: "bg-neo-yellow", text: "text-neo-black" },
  "neo-blue": { bg: "bg-neo-blue", text: "text-neo-white" },
  "neo-red": { bg: "bg-neo-red", text: "text-neo-white" },
  "neo-green": { bg: "bg-neo-green", text: "text-neo-black" },
  "neo-purple": { bg: "bg-neo-purple", text: "text-neo-white" },
  "neo-orange": { bg: "bg-neo-orange", text: "text-neo-white" },
  "neo-cyan": { bg: "bg-neo-cyan", text: "text-neo-black" },
  "neo-black": { bg: "bg-neo-black", text: "text-neo-white" },
};

interface GitHubAchievementProps {
  achievement: {
    name: string;
    description: string;
    icon: string;
    color: string;
  };
  index: number;
}

export function GitHubAchievementCard({ achievement, index }: GitHubAchievementProps) {
  const Icon = iconMap[achievement.icon] || Award;
  const colors = colorClasses[achievement.color] || colorClasses["neo-yellow"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-neo-white border-3 border-neo-black p-4 neo-shadow hover:neo-shadow-hover transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 ${colors.bg} border-3 border-neo-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
          <Icon size={28} className={colors.text} />
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-tight">{achievement.name}</h4>
          <p className="text-sm text-neo-black/60">{achievement.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface OpenSourceCardProps {
  contribution: {
    name: string;
    description: string;
    contributions: string;
    url: string;
    color: string;
  };
  index: number;
}

export function OpenSourceCard({ contribution, index }: OpenSourceCardProps) {
  const colors = colorClasses[contribution.color] || colorClasses["neo-yellow"];

  return (
    <motion.a
      href={contribution.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="block bg-neo-white border-3 border-neo-black p-6 neo-shadow hover:neo-shadow-hover transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${colors.bg} border-3 border-neo-black flex items-center justify-center`}>
          <Github size={24} className={colors.text} />
        </div>
        <ExternalLink size={20} className="text-neo-black/40 group-hover:text-neo-blue transition-colors" />
      </div>
      <h4 className="font-bold uppercase tracking-tight mb-1 group-hover:text-neo-blue transition-colors">
        {contribution.name}
      </h4>
      <p className="text-sm text-neo-black/60 mb-3">{contribution.description}</p>
      <Badge variant="outline" className="text-xs">
        {contribution.contributions}
      </Badge>
    </motion.a>
  );
}

interface HackathonCardProps {
  hackathon: {
    name: string;
    achievement: string;
    year: string;
    project?: string;
    description?: string;
    color: string;
  };
  index: number;
}

export function HackathonCard({ hackathon, index }: HackathonCardProps) {
  const colors = colorClasses[hackathon.color] || colorClasses["neo-yellow"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-neo-white border-3 border-neo-black p-6 neo-shadow hover:neo-shadow-hover transition-all"
    >
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 ${colors.bg} border-3 border-neo-black flex items-center justify-center flex-shrink-0`}>
          <Trophy size={28} className={colors.text} />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="filled" color="yellow" className="text-xs">
              {hackathon.achievement}
            </Badge>
            <span className="text-xs text-neo-black/50">{hackathon.year}</span>
          </div>
          <h4 className="font-bold uppercase tracking-tight">{hackathon.name}</h4>
          {hackathon.project && (
            <p className="text-sm text-neo-blue font-medium">{hackathon.project}</p>
          )}
          {hackathon.description && (
            <p className="text-sm text-neo-black/60 mt-2">{hackathon.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface CertificationCardProps {
  certification: {
    name: string;
    issuer: string;
    date: string;
    url?: string;
    color: string;
  };
  index: number;
}

export function CertificationCard({ certification, index }: CertificationCardProps) {
  const colors = colorClasses[certification.color] || colorClasses["neo-blue"];
  const Wrapper = certification.url ? "a" : "div";
  const wrapperProps = certification.url
    ? { href: certification.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Wrapper
        {...wrapperProps}
        className="block bg-neo-white border-3 border-neo-black p-5 neo-shadow hover:neo-shadow-hover transition-all group"
      >
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 ${colors.bg} border-3 border-neo-black flex items-center justify-center flex-shrink-0`}>
            <BadgeCheck size={24} className={colors.text} />
          </div>
          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <h4 className="font-bold uppercase tracking-tight text-sm group-hover:text-neo-blue transition-colors">
                {certification.name}
              </h4>
              {certification.url && (
                <ExternalLink size={16} className="text-neo-black/40 group-hover:text-neo-blue transition-colors flex-shrink-0" />
              )}
            </div>
            <p className="text-sm text-neo-black/60">{certification.issuer}</p>
            <p className="text-xs text-neo-black/40 mt-1">{certification.date}</p>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}
