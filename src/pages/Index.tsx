import AchievementsSection from "@/components/AchievementsSection";
import AnimatedTitle from "@/components/AnimatedTitle";
import ContactSection from "@/components/ContactSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Index = () => {
    return (
        <>
            {/* Navbar - Outside main layout for true viewport positioning */}
            <Navbar />

            <div className="min-h-screen flex flex-col lg:flex-row">
                {/* Fixed Profile Card - Left Side */}
                <ProfileCard />

                {/* Main Content - Right Side */}
                <div className="w-full lg:w-[62%] lg:ml-[38%] min-h-screen">
                    {/* Hero Section */}
                    <section
                        id="home"
                        className="min-h-screen flex flex-col justify-center items-center lg:items-start px-6 lg:px-12 py-20"
                    >
                        <div className="max-w-4xl text-center lg:text-left">
                            <AnimatedTitle />

                            <p className="text-lg text-muted-foreground mb-8 mt-4 max-w-2xl leading-relaxed animate-fade-in">
                                Driven by a passion for{" "}
                                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-semibold">
                                    artificial intelligence and backend systems
                                </span>
                                , I constantly explore new technologies to
                                transform ideas into seamless, engaging
                                experiences that leave a lasting impression.
                                Currently a junior undergraduate at{" "}
                                <span className="text-secondary font-semibold">
                                    Indian Institute of Information Technology,
                                    Kottayam
                                </span>
                                .
                            </p>

                            <StatsSection />

                            <div className="flex gap-4 mb-12 justify-center lg:justify-start">
                                <Button
                                    onClick={() =>
                                        document
                                            .getElementById("contact")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            })
                                    }
                                    variant="hero"
                                    size="lg"
                                >
                                    Contact Me
                                </Button>
                                <Button variant="sketch" size="lg">
                                    View Resume
                                </Button>
                            </div>

                            <button
                                onClick={() =>
                                    document
                                        .getElementById("skills")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="flex items-center gap-2 text-muted-foreground animate-bounce-subtle hover:text-foreground transition-colors cursor-pointer mx-auto lg:mx-0"
                            >
                                <ArrowDown className="h-5 w-5" />
                                <span className="text-sm">
                                    Scroll to explore
                                </span>
                            </button>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section id="skills" className="px-6 lg:px-12 py-20">
                        <SkillsSection />
                    </section>

                    {/* Experiences Section */}
                    <section id="experience" className="px-6 lg:px-12 py-20">
                        <ExperiencesSection />
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="px-6 lg:px-12 py-20">
                        <ProjectsSection />
                    </section>

                    {/* Achievements Section */}
                    <section id="achievements" className="px-6 lg:px-12 py-20">
                        <AchievementsSection />
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="px-6 lg:px-12 py-20">
                        <ContactSection />
                    </section>

                    {/* Footer */}
                    <footer className="px-6 lg:px-12 py-8 border-t-2 border-border">
                        <div className="text-center text-muted-foreground text-sm">
                            <p>
                                © 2025 Nakul Krishnakumar. Built with passion &
                                code.
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Index;
