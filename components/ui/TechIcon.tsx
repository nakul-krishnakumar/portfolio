"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiFigma,
  SiPostman,
  SiJupyter,
  SiStreamlit,
  SiC,
  SiWeightsandbiases,
} from "react-icons/si";
import { FaCode, FaBrain, FaDatabase, FaCloud, FaTools, FaJava, FaLink, FaNetworkWired } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbVectorTriangle, TbFlower, TbCube } from "react-icons/tb";

// Map of tech names to their icons and brand colors
const techIconMap: Record<string, { icon: React.ElementType; color: string }> = {
  // Languages
  "Python": { icon: SiPython, color: "#3776AB" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Go": { icon: SiGo, color: "#00ADD8" },
  "C/C++": { icon: SiCplusplus, color: "#00599C" },
  "C": { icon: SiC, color: "#A8B9CC" },
  "Java": { icon: FaJava, color: "#ED8B00" },
  "HTML/CSS": { icon: SiHtml5, color: "#E34F26" },
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCss3, color: "#1572B6" },
  
  // Frameworks
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express": { icon: SiExpress, color: "#000000" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "TailwindCSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Streamlit": { icon: SiStreamlit, color: "#FF4B4B" },
  
  // AI/ML
  "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
  "PyTorch": { icon: SiPytorch, color: "#EE4C2C" },
  "LangChain": { icon: SiLangchain, color: "#1C3C3C" },
  "OpenAI API": { icon: SiOpenai, color: "#412991" },
  "OpenAI": { icon: SiOpenai, color: "#412991" },
  "Pinecone": { icon: TbVectorTriangle, color: "#000000" },
  "RAG": { icon: FaBrain, color: "#9333EA" },
  "AI": { icon: FaBrain, color: "#9333EA" },
  "ML": { icon: FaBrain, color: "#9333EA" },
  "Computer Vision": { icon: FaBrain, color: "#9333EA" },
  "ML Algorithms": { icon: FaBrain, color: "#9333EA" },
  "LangGraph": { icon: SiLangchain, color: "#1C3C3C" },
  "Azure OpenAI": { icon: SiOpenai, color: "#0078D4" },
  
  // Databases
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Supabase": { icon: SiSupabase, color: "#3FCF8E" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "pgvector": { icon: SiPostgresql, color: "#4169E1" },
  
  // DevOps
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "Nginx": { icon: SiNginx, color: "#009639" },
  "Linux": { icon: SiLinux, color: "#FCC624" },
  
  // Tools
  "VS Code": { icon: VscCode, color: "#007ACC" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Jupyter": { icon: SiJupyter, color: "#F37626" },
  "EJS": { icon: SiJavascript, color: "#B4CA65" },
  
  // Others
  "Mathematics": { icon: FaCode, color: "#9333EA" },
  "Open Source": { icon: FaCode, color: "#22C55E" },
  "Security": { icon: FaTools, color: "#EF4444" },
  "Research": { icon: FaBrain, color: "#8B5CF6" },
  "REST APIs": { icon: FaCloud, color: "#3B82F6" },
  "Webhooks": { icon: FaCloud, color: "#10B981" },
  
  // Blockchain & Distributed Systems
  "Hyperledger Fabric": { icon: TbCube, color: "#2F3134" },
  "Blockchain": { icon: FaLink, color: "#F7931A" },
  "Flower": { icon: TbFlower, color: "#FF6F61" },
  "WandB": { icon: SiWeightsandbiases, color: "#FFBE00" },
  "Federated Learning": { icon: FaNetworkWired, color: "#00D4AA" },
};

// Fallback icon for unknown technologies
const defaultIcon = { icon: FaCode, color: "#6B7280" };

interface TechIconProps {
  name: string;
  size?: number;
  showLabel?: boolean;
  className?: string;
}

export function TechIcon({ name, size = 16, showLabel = true, className = "" }: TechIconProps) {
  const tech = techIconMap[name] || defaultIcon;
  const Icon = tech.icon;

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-neo-black bg-neo-cream text-neo-black text-sm font-medium cursor-default group ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <span
        className="transition-all duration-300 grayscale group-hover:grayscale-0"
        style={{ 
          color: tech.color,
        }}
      >
        <Icon size={size} />
      </span>
      {showLabel && <span className="text-neo-black">{name}</span>}
    </motion.span>
  );
}

// Simplified version for filter buttons in projects
interface TechFilterButtonProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export function TechFilterButton({ name, isSelected, onClick }: TechFilterButtonProps) {
  const tech = techIconMap[name] || defaultIcon;
  const Icon = tech.icon;

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-neo-black text-sm font-medium transition-all ${
        isSelected
          ? "bg-neo-blue text-neo-white"
          : "bg-neo-cream text-neo-black hover:bg-neo-yellow"
      }`}
    >
      <span
        className={`transition-all duration-300 ${isSelected ? "" : "grayscale"}`}
        style={{ color: isSelected ? "#fff" : tech.color }}
      >
        <Icon size={14} />
      </span>
      {name}
      {isSelected && (
        <span className="ml-1">×</span>
      )}
    </button>
  );
}

// Export the icon map for use in other components
export { techIconMap };
