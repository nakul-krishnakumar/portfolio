"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Rocket, Code2, Cpu, Cloud, Trophy } from "lucide-react";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { Button } from "@/components/ui";
import { personalInfo, socialLinks } from "@/lib/data";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-20 right-10 w-32 h-32 bg-neo-yellow border-3 border-neo-black rotate-12 hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute bottom-20 left-10 w-24 h-24 bg-neo-blue border-3 border-neo-black -rotate-12 hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute top-40 left-20 w-16 h-16 bg-neo-red border-3 border-neo-black rotate-45 hidden lg:block"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 bg-neo-yellow border-3 border-neo-black text-sm font-bold uppercase tracking-wider">
                Hello, I&apos;m
              </span>
            </motion.div>
            
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none"
            >
              {personalInfo.name.split(" ").map((word, index) => (
                <span key={index} className="block">
                  {word}
                  {index === 0 && <span className="text-neo-blue">.</span>}
                </span>
              ))}
            </motion.h1>
            
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-medium text-neo-black/80 max-w-lg"
            >
              {personalInfo.tagline}
            </motion.p>
            
            {/* Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {["AI/ML Engineer", "Backend Developer", "Open Source"].map((role, index) => (
                <span
                  key={role}
                  className={`px-4 py-2 border-3 border-neo-black font-semibold text-sm uppercase ${
                    index === 0 ? "bg-neo-blue text-neo-white" :
                    index === 1 ? "bg-neo-green text-neo-black" :
                    "bg-neo-purple text-neo-white"
                  }`}
                >
                  {role}
                </span>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects">
                <Button variant="primary" size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
              <a href={personalInfo.resumeUrl} download>
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2" size={20} />
                  Resume
                </Button>
              </a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-neo-black/60">
                Find me on
              </span>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-3 border-neo-black bg-neo-white hover:bg-neo-black hover:text-neo-white transition-all neo-shadow-hover"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-3 border-neo-black bg-neo-white hover:bg-neo-blue hover:text-neo-white transition-all neo-shadow-hover"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={socialLinks.email}
                  className="p-3 border-3 border-neo-black bg-neo-white hover:bg-neo-red hover:text-neo-white transition-all neo-shadow-hover"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://leetcode.com/u/nakul-krishnakumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-3 border-neo-black bg-neo-white hover:bg-[#FFA116] hover:text-neo-black transition-all neo-shadow-hover"
                  aria-label="LeetCode"
                >
                  <SiLeetcode size={24} />
                </a>
                <a
                  href="https://codeforces.com/profile/nakuuuuuul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-3 border-neo-black bg-neo-white hover:bg-[#1F8ACB] hover:text-neo-white transition-all neo-shadow-hover"
                  aria-label="Codeforces"
                >
                  <SiCodeforces size={24} />
                </a>
                <a
                  href="https://codolio.com/profile/nakul-krishnakumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-3 border-neo-black bg-neo-white hover:bg-neo-purple hover:text-neo-white transition-all neo-shadow-hover"
                  aria-label="Codolio"
                >
                  <Trophy size={24} />
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Visual Element - Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full max-w-md ml-auto">
              {/* Large card - Top Left (spans 2 cols, 2 rows) - Builder Identity */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="col-span-2 row-span-2 bg-neo-yellow border-3 border-neo-black p-6 flex flex-col justify-between neo-shadow"
              >
                <div>
                  <motion.div
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <Rocket className="w-10 h-10 text-neo-black mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-neo-black leading-tight">Ship Fast.</h3>
                  <h3 className="text-2xl font-black text-neo-black leading-tight">Build Right.</h3>
                  <p className="text-neo-black/60 text-sm mt-2 font-medium">Turning ideas into production</p>
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="px-2 py-1 bg-neo-black text-neo-yellow text-xs font-bold">builder</span>
                  <span className="px-2 py-1 bg-neo-white border-2 border-neo-black text-xs font-bold">researcher</span>
                </div>
              </motion.div>
              
              {/* Top Right - Go */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-neo-blue border-3 border-neo-black p-4 flex flex-col items-center justify-center neo-shadow"
              >
                <Code2 className="w-8 h-8 text-neo-white mb-2" />
                <span className="text-neo-white font-black text-lg">Go</span>
              </motion.div>
              
              {/* Middle Right - AI */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-neo-green border-3 border-neo-black p-4 flex flex-col items-center justify-center neo-shadow"
              >
                <Cpu className="w-8 h-8 text-neo-black mb-2" />
                <span className="text-neo-black font-black text-lg">AI</span>
              </motion.div>
              
              {/* Bottom Left - Cloud */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-neo-purple border-3 border-neo-black p-4 flex flex-col items-center justify-center neo-shadow"
              >
                <Cloud className="w-8 h-8 text-neo-white mb-2" />
                <span className="text-neo-white font-black text-lg">Cloud</span>
              </motion.div>
              
              {/* Bottom Middle - Status */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="col-span-2 bg-neo-black border-3 border-neo-black p-4 flex items-center justify-between neo-shadow"
              >
                <div>
                  <p className="text-neo-white/60 text-xs uppercase tracking-wider">Status</p>
                  <p className="text-neo-white font-bold">Building cool stuff</p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-3 h-3 bg-neo-green rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
