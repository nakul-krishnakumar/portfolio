"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { Badge } from "@/components/ui";

interface TimelineItemProps {
  experience: {
    id: number;
    role: string;
    company: string;
    companyUrl?: string;
    location?: string;
    duration: string;
    description: string[];
    technologies: string[];
    color: string;
  };
  index: number;
  isLast: boolean;
}

const colorClasses: Record<string, string> = {
  "neo-yellow": "bg-neo-yellow",
  "neo-blue": "bg-neo-blue",
  "neo-red": "bg-neo-red",
  "neo-green": "bg-neo-green",
  "neo-purple": "bg-neo-purple",
  "neo-orange": "bg-neo-orange",
  "neo-cyan": "bg-neo-cyan",
};

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8"
    >
      {/* Left Column - Shows card for even items, empty for odd items */}
      <div className="hidden md:block">
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-neo-white border-3 border-neo-black p-6 neo-shadow hover:neo-shadow-hover transition-shadow"
          >
            <TimelineContent experience={experience} index={index} />
          </motion.div>
        ) : (
          <div /> /* Empty placeholder for right-side items */
        )}
      </div>

      {/* Center Column - Timeline Line & Dot */}
      <div className="absolute left-0 md:relative md:left-auto flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.2, rotate: 45 }}
          className={`w-6 h-6 ${colorClasses[experience.color] || "bg-neo-yellow"} border-3 border-neo-black z-10 cursor-pointer`}
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
            className="w-1 h-full bg-neo-black absolute top-6 left-[10px] md:left-auto"
          />
        )}
      </div>

      {/* Right Column - Shows card for odd items, empty for even items */}
      <div className="hidden md:block">
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-neo-white border-3 border-neo-black p-6 neo-shadow hover:neo-shadow-hover transition-shadow"
          >
            <TimelineContent experience={experience} index={index} />
          </motion.div>
        ) : (
          <div /> /* Empty placeholder for left-side items */
        )}
      </div>

      {/* Mobile Content - Always shows on mobile */}
      <div className="md:hidden pb-8">
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
          viewport={{ once: true }}
          className="bg-neo-white border-3 border-neo-black p-6 neo-shadow"
        >
          <TimelineContent experience={experience} index={index} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function TimelineContent({ experience, index }: { experience: TimelineItemProps["experience"]; index: number }) {
  return (
    <div>
      {/* Duration Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center gap-2 mb-3"
      >
        <span className="inline-block px-3 py-1 bg-neo-gray border-2 border-neo-black text-xs font-bold uppercase tracking-wider">
          {experience.duration}
        </span>
        {experience.location && (
          <span className="inline-flex items-center gap-1 text-xs text-neo-black/60">
            <MapPin size={12} />
            {experience.location}
          </span>
        )}
      </motion.div>

      {/* Role & Company */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.25 }}
        viewport={{ once: true }}
        className="text-lg font-bold uppercase tracking-tight text-neo-black"
      >
        {experience.role}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
        viewport={{ once: true }}
      >
        {experience.companyUrl ? (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-neo-blue hover:underline font-medium group"
          >
            {experience.company}
            <ExternalLink
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        ) : (
          <p className="text-neo-black/70 font-medium">{experience.company}</p>
        )}
      </motion.div>

      {/* Description */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.35 }}
        viewport={{ once: true }}
        className="mt-4 space-y-2"
      >
        {experience.description.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.15 + 0.4 + i * 0.1 }}
            viewport={{ once: true }}
            className="text-sm text-neo-black/70 flex items-start gap-2"
          >
            <span className="w-1.5 h-1.5 bg-neo-black mt-2 flex-shrink-0" />
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
        viewport={{ once: true }}
        className="mt-4 flex flex-wrap gap-2"
      >
        {experience.technologies.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 + 0.55 + i * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="text-xs hover:bg-neo-yellow hover:border-neo-black transition-colors cursor-default"
            >
              {tech}
            </Badge>
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
