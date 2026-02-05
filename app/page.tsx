"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Mail,
  Calendar,
  Code2,
  Brain,
  Server,
  Download,
  Github,
  Linkedin,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  Loader2,
  Send,
  Briefcase,
  Layers,
  Database,
  Cloud,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Button, Card, Badge, Input, Textarea, TechIcon } from "@/components/ui";
import { Hero, FeaturedProjects, AchievementsSection } from "@/components/sections";
import { TimelineItem } from "@/components/sections/TimelineItem";
import {
  projects,
  personalInfo,
  socialLinks,
  skills,
  experiences,
} from "@/lib/data";
import Image from "next/image";

// ============ ABOUT SECTION ============
function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML",
      description:
        "Building intelligent systems with LangChain, PyTorch, and RAG architectures",
      bgColor: "#9933FF",
    },
    {
      icon: Server,
      title: "Backend",
      description:
        "Designing scalable APIs and systems with Go, Python, and Node.js",
      bgColor: "#0066FF",
    },
    {
      icon: Code2,
      title: "Open Source",
      description:
        "Active contributor to stdlib-js and other community projects",
      bgColor: "#00CC66",
    },
  ];

  return (
    <section id="about" className="py-20 bg-neo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-neo-yellow border-3 border-neo-black text-sm font-bold uppercase tracking-wider mb-4 text-neo-black">
            Get to know me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-neo-black">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card>
              {/* Avatar */}
              <div className="w-full aspect-square bg-neo-cream border-b-3 border-neo-black overflow-hidden relative">
                <Image 
                  src={personalInfo.avatar} 
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-[20%_top]"
                  priority
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-neo-black">{personalInfo.name}</h3>
                <p className="text-neo-black/70">{personalInfo.tagline}</p>

                {/* Quick Info */}
                <div className="space-y-3 pt-4 border-t-3 border-neo-black">
                  <div className="flex items-center gap-3">
                    <GraduationCap size={20} className="text-neo-blue" />
                    <span className="text-sm text-neo-black">
                      {personalInfo.education.institution}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-neo-green" />
                    <span className="text-sm text-neo-black">
                      Class of {personalInfo.education.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-neo-red" />
                    <span className="text-sm text-neo-black">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-neo-purple" />
                    <span className="text-sm break-all text-neo-black">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 space-y-3">
                  <a href={personalInfo.resumeUrl} download className="block">
                    <Button variant="primary" className="w-full">
                      <Download size={18} className="mr-2" />
                      Download Resume
                    </Button>
                  </a>
                  <a href="#contact" className="block">
                    <Button variant="outline" className="w-full">
                      Get in Touch
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bio Section */}
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 flex items-center gap-2 text-neo-black">
                  <span className="w-8 h-1 bg-neo-yellow"></span>
                  Who I Am
                </h3>
                <div className="prose prose-lg max-w-none text-neo-black/80 space-y-4">
                  <p>
                    Hey there! I&apos;m Nakul, a Computer Science student at
                    IIIT Kottayam with a deep passion for building intelligent
                    systems and scalable backend architectures.
                  </p>
                  <p>
                    I love exploring the intersection of AI/ML and software
                    engineering, whether it&apos;s building RAG-powered
                    applications, designing microservices in Go, or contributing
                    to open-source projects that make a difference.
                  </p>
                  <p>
                    When I&apos;m not coding, you can find me exploring new
                    technologies, participating in hackathons, or diving deep
                    into research papers about the latest advancements in AI.
                  </p>
                </div>
              </div>
            </Card>

            {/* What I Do */}
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-6 flex items-center gap-2 text-neo-black">
                <span className="w-8 h-1 bg-neo-blue"></span>
                What I Do
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <div className="p-5">
                        <div
                          className="w-12 h-12 border-3 border-neo-black flex items-center justify-center mb-4"
                          style={{ backgroundColor: item.bgColor }}
                        >
                          <item.icon size={24} className="text-neo-white" />
                        </div>
                        <h4 className="font-bold uppercase tracking-tight mb-2 text-neo-black">
                          {item.title}
                        </h4>
                        <p className="text-sm text-neo-black/70">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 flex items-center gap-2 text-neo-black">
                  <span className="w-8 h-1 bg-neo-green"></span>
                  Education
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-neo-blue border-3 border-neo-black flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={32} className="text-neo-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-neo-black">
                      {personalInfo.education.degree}
                    </h4>
                    <p className="text-neo-black/70">
                      {personalInfo.education.institution}
                    </p>
                    <p className="text-sm text-neo-black/50">
                      Expected Graduation: {personalInfo.education.year}
                    </p>
                    <p className="mt-2 text-sm text-neo-black">
                      {personalInfo.education.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ PROJECTS SECTION ============
function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-neo-cream">
      <FeaturedProjects projects={projects} />
    </section>
  );
}

// ============ SKILLS SECTION ============
const categoryIcons: Record<string, React.ReactNode> = {
  languages: <Code2 className="w-5 h-5" />,
  frameworks: <Layers className="w-5 h-5" />,
  ai_ml: <Brain className="w-5 h-5" />,
  databases: <Database className="w-5 h-5" />,
  devops: <Cloud className="w-5 h-5" />,
  tools: <Wrench className="w-5 h-5" />,
};

const categoryTitles: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks",
  ai_ml: "AI & ML",
  databases: "Databases",
  devops: "DevOps",
  tools: "Tools",
};

const categoryColors: Record<string, { bg: string; iconBg: string }> = {
  languages: { bg: "bg-neo-blue/10", iconBg: "#0066FF" },
  frameworks: { bg: "bg-neo-green/10", iconBg: "#00CC66" },
  ai_ml: { bg: "bg-neo-purple/10", iconBg: "#9933FF" },
  databases: { bg: "bg-neo-yellow/10", iconBg: "#FFDD00" },
  devops: { bg: "bg-neo-cyan/10", iconBg: "#00CCCC" },
  tools: { bg: "bg-neo-orange/10", iconBg: "#FF9900" },
};

function SkillCategory({
  category,
  skillList,
  index,
}: {
  category: string;
  skillList: string[];
  index: number;
}) {
  const colors = categoryColors[category];
  const needsDarkText = category === "databases";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-5 border-3 border-neo-black shadow-neo-sm bg-neo-white hover:shadow-neo-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="p-2 border-2 border-neo-black rounded-lg flex items-center justify-center"
          style={{ backgroundColor: colors.iconBg }}
        >
          <span className={needsDarkText ? "text-neo-black" : "text-neo-white"}>
            {categoryIcons[category]}
          </span>
        </div>
        <h3 className="text-lg font-bold font-heading text-neo-black">
          {categoryTitles[category]}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skillList.map((skill) => (
          <TechIcon key={skill} name={skill} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillsSection() {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 bg-neo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-neo-blue text-neo-white border-3 border-neo-black text-sm font-bold uppercase tracking-wider mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-neo-black">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-neo-black/70 max-w-2xl mx-auto">
            Technologies I work with to build modern applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(([category, list], index) => (
            <SkillCategory
              key={category}
              category={category}
              skillList={list}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ EXPERIENCE SECTION ============
function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-neo-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-neo-green text-neo-black border-3 border-neo-black text-sm font-bold uppercase tracking-wider mb-4">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-neo-black">
            Experience
          </h2>
          <p className="mt-4 text-neo-black/70 max-w-2xl mx-auto">
            My professional journey and contributions to the tech community.
          </p>
        </motion.div>

        {/* Timeline */}
        {experiences.length > 0 ? (
          <div className="relative">
            {/* Center Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neo-black -translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={experience.id}
                  experience={experience}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-center py-16">
              <div className="w-24 h-24 bg-neo-yellow border-3 border-neo-black mx-auto mb-6 flex items-center justify-center">
                <Briefcase size={40} className="text-neo-black" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2 text-neo-black">
                Building My Journey
              </h3>
              <p className="text-neo-black/60 max-w-md mx-auto mb-6">
                Currently focused on academic projects and open-source
                contributions. Professional experience section coming soon!
              </p>
            </Card>
          </motion.div>
        )}

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-neo-black border-neo-yellow border-4">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold uppercase mb-4 text-neo-black">
                Open to Opportunities
              </h3>
              <p className="max-w-2xl mx-auto mb-6 text-neo-black">
                I&apos;m actively looking for internship opportunities in AI/ML,
                Backend Development, or Full-Stack roles. If you have an
                exciting project or position, let&apos;s connect!
              </p>
              <a href="#contact">
                <Button variant="primary" size="lg">
                  Get in Touch
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// ============ CONTACT SECTION ============
const socialItems = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: socialLinks.github,
    hoverBg: "hover:bg-neo-black",
    description: "Check out my projects",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: socialLinks.linkedin,
    hoverBg: "hover:bg-neo-blue",
    description: "Connect professionally",
  },
  {
    name: "Discord",
    icon: <MessageCircle className="w-5 h-5" />,
    href: socialLinks.discord,
    hoverBg: "hover:bg-neo-purple",
    description: "Chat with me",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    href: socialLinks.email,
    hoverBg: "hover:bg-neo-red",
    description: "Send me an email",
  },
];

function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || "Contact from Portfolio"
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.open(mailtoLink, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-neo-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-neo-red text-neo-white border-3 border-neo-black text-sm font-bold uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-neo-black">
            Contact Me
          </h2>
          <p className="mt-4 text-neo-black/70 max-w-2xl mx-auto">
            Have a question, project idea, or just want to say hi? I&apos;d love
            to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-neo-white border-3 border-neo-black shadow-neo-lg p-6 md:p-8">
              <h3 className="text-xl font-bold font-heading text-neo-black mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-neo-green border-3 border-neo-black rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-neo-black" />
                  </div>
                  <h4 className="text-lg font-bold text-neo-black mb-2">
                    Message Ready!
                  </h4>
                  <p className="text-neo-black/70 text-sm">
                    Your email client should have opened. If not, feel free to
                    email me directly!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-neo-black mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-neo-black mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-neo-black mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formState.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-neo-black mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, idea, or just say hello..."
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Contact Info Card */}
            <div className="bg-neo-yellow border-3 border-neo-black shadow-neo-md p-5">
              <h3 className="text-lg font-bold font-heading text-neo-black mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-neo-white border-2 border-neo-black flex items-center justify-center">
                    <Mail className="w-4 h-4 text-neo-black" />
                  </div>
                  <div>
                    <p className="text-xs text-neo-black/70">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-neo-black hover:underline text-sm"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-neo-white border-2 border-neo-black flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-neo-black" />
                  </div>
                  <div>
                    <p className="text-xs text-neo-black/70">Location</p>
                    <p className="font-medium text-neo-black text-sm">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-neo-white border-3 border-neo-black shadow-neo-md p-5">
              <h3 className="text-lg font-bold font-heading text-neo-black mb-4">
                Connect With Me
              </h3>
              <div className="space-y-2">
                {socialItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center justify-between p-3 border-2 border-neo-black bg-neo-cream text-neo-black transition-all ${item.hoverBg} hover:text-neo-white`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs opacity-70">{item.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-neo-white border-3 border-neo-black shadow-neo-sm p-5">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-neo-green border-2 border-neo-black rounded-full mt-1 animate-pulse" />
                <div>
                  <h4 className="font-bold text-neo-black mb-1 text-sm">
                    Currently Available
                  </h4>
                  <p className="text-xs text-neo-black/70">
                    Open for freelance projects, internships, and collaboration
                    opportunities. Let&apos;s build something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ MAIN PAGE ============
export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
