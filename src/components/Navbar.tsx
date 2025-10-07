import { useState } from "react";
import { Moon, Sun, Home, Code, Briefcase, Mail, Award, Lightbulb } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "projects", icon: Lightbulb, label: "Projects" },
    { id: "achievements", icon: Award, label: "Achievements" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 inset-x-0 mx-auto z-50 w-fit"
    >
      <div className="bg-card/80 backdrop-blur-lg border-2 border-foreground rounded-full shadow-[4px_4px_0px_hsl(var(--foreground))] px-6 py-3">
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-3 rounded-full transition-all duration-200 hover:bg-muted ${
                activeSection === item.id ? "bg-primary text-primary-foreground" : ""
              }`}
              aria-label={item.label}
            >
              <item.icon className="h-5 w-5" />
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          
          <div className="w-px h-6 bg-border mx-2" />
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full hover:bg-muted transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
