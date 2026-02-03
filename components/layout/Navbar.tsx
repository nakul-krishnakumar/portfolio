"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, socialLinks, personalInfo } from "@/lib/data";
import { ThemeToggle } from "@/components/ui";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scroll to section
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navHeight = 64; // Height of navbar
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neo-cream border-b-3 border-neo-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-neo-yellow border-3 border-neo-black flex items-center justify-center font-bold text-xl group-hover:bg-neo-blue group-hover:text-neo-white transition-colors">
              NK
            </div>
            <span className="hidden sm:block font-bold text-lg uppercase tracking-tight">
              {personalInfo.name.split(" ")[0]}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "px-4 py-2 font-semibold uppercase text-sm tracking-wide border-3 border-transparent transition-all cursor-pointer",
                  activeSection === link.href.replace("#", "")
                    ? "bg-neo-black text-neo-white"
                    : "hover:border-neo-black hover:bg-neo-yellow"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Theme Toggle - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-3 border-neo-black bg-neo-white hover:bg-neo-black hover:text-neo-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-3 border-neo-black bg-neo-white hover:bg-neo-blue hover:text-neo-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={socialLinks.email}
              className="p-2 border-3 border-neo-black bg-neo-white hover:bg-neo-red hover:text-neo-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-3 border-neo-black bg-neo-white hover:bg-neo-yellow transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t-3 border-neo-black bg-neo-cream">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "block px-4 py-3 font-semibold uppercase text-sm tracking-wide border-3 transition-all cursor-pointer",
                  activeSection === link.href.replace("#", "")
                    ? "bg-neo-black text-neo-white border-neo-black"
                    : "border-neo-black hover:bg-neo-yellow"
                )}
              >
                {link.name}
              </a>
            ))}

            {/* Social Links - Mobile */}
            <div className="flex items-center gap-3 pt-4 border-t-3 border-neo-black mt-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-3 border-neo-black bg-neo-white hover:bg-neo-black hover:text-neo-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-3 border-neo-black bg-neo-white hover:bg-neo-blue hover:text-neo-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socialLinks.email}
                className="p-3 border-3 border-neo-black bg-neo-white hover:bg-neo-red hover:text-neo-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
