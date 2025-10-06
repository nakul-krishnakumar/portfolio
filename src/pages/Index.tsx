import ProfileCard from "@/components/ProfileCard";
import AnimatedTitle from "@/components/AnimatedTitle";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Fixed Profile Card - Left Side */}
      <ProfileCard />

      {/* Main Content - Right Side */}
      <div className="w-full lg:w-[62%] lg:ml-[38%] min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 py-20">
          <div className="max-w-4xl">
            <AnimatedTitle />
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-in">
              Driven by a passion for{" "}
              <span className="text-primary font-semibold">machine learning</span> and innovation,
              I constantly explore new technologies to transform ideas into seamless, engaging
              experiences that leave a lasting impression. Currently a sophomore at{" "}
              <span className="text-secondary font-semibold">
                Indian Institute of Information Technology, Kottayam
              </span>
              .
            </p>

            <StatsSection />

            <div className="flex gap-4 mb-12">
              <Button variant="hero" size="lg">
                Contact Me
              </Button>
              <Button variant="sketch" size="lg">
                View Resume
              </Button>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground animate-bounce-subtle">
              <ArrowDown className="h-5 w-5" />
              <span className="text-sm">Scroll to explore</span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-6 lg:px-12 py-20">
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section className="px-6 lg:px-12 py-20">
          <ProjectsSection />
        </section>

        {/* Contact Section */}
        <section className="px-6 lg:px-12 py-20">
          <ContactSection />
        </section>

        {/* Footer */}
        <footer className="px-6 lg:px-12 py-8 border-t-2 border-border">
          <div className="text-center text-muted-foreground text-sm">
            <p>© 2025 Nakul Krishnakumar. Built with passion & code.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
