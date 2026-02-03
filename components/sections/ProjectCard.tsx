"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Filter } from "lucide-react";
import { Card, CardContent, CardFooter, Badge, Button, TechFilterButton } from "@/components/ui";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string | null;
  color: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const colorClasses: Record<string, string> = {
  "neo-yellow": "bg-neo-yellow",
  "neo-blue": "bg-neo-blue",
  "neo-red": "bg-neo-red",
  "neo-green": "bg-neo-green",
  "neo-purple": "bg-neo-purple",
  "neo-orange": "bg-neo-orange",
  "neo-cyan": "bg-neo-cyan",
  "neo-pink": "bg-neo-pink",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="h-full flex flex-col group">
        {/* Color Bar */}
        <div className={`h-2 ${colorClasses[project.color] || "bg-neo-yellow"}`} />
        
        <CardContent className="flex-grow p-6">
          {/* Title */}
          <h3 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-neo-blue transition-colors text-neo-black">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-neo-black/70 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-0.5 bg-neo-black text-neo-white border-2 border-neo-black text-xs font-medium">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" size="sm" className="w-full">
              <Github size={16} className="mr-2" />
              Code
            </Button>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="primary" size="sm" className="w-full">
                <ExternalLink size={16} className="mr-2" />
                Demo
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const featured = projects.filter((p) => p.featured);
  
  // Get all unique technologies from featured projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    featured.forEach((project) => {
      project.tags.forEach((tag) => techSet.add(tag));
    });
    return Array.from(techSet).sort();
  }, [featured]);
  
  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0) return featured;
    return featured.filter((project) =>
      selectedTechs.some((tech) => project.tags.includes(tech))
    );
  }, [featured, selectedTechs]);
  
  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };
  
  const clearFilters = () => {
    setSelectedTechs([]);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <span className="inline-block px-4 py-2 bg-neo-blue text-neo-white border-3 border-neo-black text-sm font-bold uppercase tracking-wider mb-4">
          Featured Work
        </span>
        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-neo-black">
          Projects
        </h2>
        <p className="mt-4 text-neo-black/70 max-w-2xl mx-auto">
          A selection of recent projects that I have worked on.
        </p>
      </motion.div>
      
      {/* Filter Toggle Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`inline-flex items-center gap-2 px-4 py-2 border-3 border-neo-black font-bold text-sm uppercase tracking-wider transition-all ${
            showFilters || selectedTechs.length > 0
              ? "bg-neo-blue text-neo-white"
              : "bg-neo-white text-neo-black hover:bg-neo-yellow"
          }`}
        >
          <Filter size={18} />
          Filter by Tech
          {selectedTechs.length > 0 && (
            <span className="ml-1 px-2 py-0.5 bg-neo-white text-neo-black text-xs rounded-full">
              {selectedTechs.length}
            </span>
          )}
        </button>
        
        {selectedTechs.length > 0 && (
          <button
            onClick={clearFilters}
            className="ml-3 inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-neo-black/70 hover:text-neo-red transition-colors"
          >
            <X size={16} />
            Clear all
          </button>
        )}
      </motion.div>
      
      {/* Filter Pills */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 overflow-hidden"
          >
            <div className="p-4 bg-neo-white border-3 border-neo-black">
              <p className="text-sm font-semibold text-neo-black/70 mb-3 uppercase tracking-wide">
                Select technologies to filter:
              </p>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.map((tech) => (
                  <TechFilterButton
                    key={tech}
                    name={tech}
                    isSelected={selectedTechs.includes(tech)}
                    onClick={() => toggleTech(tech)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Selected Filters Display (when filter panel is closed) */}
      {!showFilters && selectedTechs.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex flex-wrap gap-2 items-center"
        >
          <span className="text-sm font-medium text-neo-black/60">Filtering by:</span>
          {selectedTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => toggleTech(tech)}
              className="inline-flex items-center gap-1 px-3 py-1 bg-neo-blue text-neo-white border-2 border-neo-black text-sm font-medium hover:bg-neo-red transition-colors"
            >
              {tech}
              <X size={14} />
            </button>
          ))}
        </motion.div>
      )}
      
      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* No Results Message */}
      <AnimatePresence>
        {filteredProjects.length === 0 && selectedTechs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-neo-yellow border-3 border-neo-black mx-auto mb-4 flex items-center justify-center">
              <Filter size={32} className="text-neo-black" />
            </div>
            <h3 className="text-xl font-bold uppercase mb-2 text-neo-black">No projects found</h3>
            <p className="text-neo-black/60 mb-4">
              No projects match the selected technologies.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
