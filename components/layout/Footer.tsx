"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { navLinks, socialLinks, personalInfo } from "@/lib/data";
import { ViewCounter } from "@/components/ui";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navHeight = 64;
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-neo-black text-neo-white border-t-4 border-neo-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-neo-yellow border-3 border-neo-white flex items-center justify-center font-bold text-xl text-neo-black">
                NK
              </div>
              <div>
                <h3 className="font-bold text-lg uppercase">
                  {personalInfo.name}
                </h3>
                <p className="text-neo-white/70 text-sm">
                  {personalInfo.tagline}
                </p>
              </div>
            </div>
            <p className="text-neo-white/60 text-sm max-w-xs">
              Building the future one line of code at a time. Always learning,
              always creating.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wide text-neo-yellow">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-neo-white/70 hover:text-neo-yellow transition-colors text-sm uppercase tracking-wide cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wide text-neo-yellow">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-neo-white/30 hover:border-neo-yellow hover:bg-neo-yellow hover:text-neo-black transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-neo-white/30 hover:border-neo-blue hover:bg-neo-blue transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socialLinks.email}
                className="p-3 border-2 border-neo-white/30 hover:border-neo-red hover:bg-neo-red transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-neo-white/60 text-sm">{personalInfo.email}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-neo-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neo-white/60 text-sm flex items-center gap-2">
            Made with{" "}
            <Heart size={16} className="text-neo-red fill-neo-red" /> by{" "}
            {personalInfo.name}
          </p>
          <ViewCounter />
          <p className="text-neo-white/60 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 border-2 border-neo-white/30 hover:border-neo-yellow hover:bg-neo-yellow hover:text-neo-black transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
