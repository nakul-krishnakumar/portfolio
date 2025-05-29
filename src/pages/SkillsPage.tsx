import React from "react";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiNodedotjs,
    SiEjs,
    SiFastapi,
    SiFlask,
    SiDjango,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiFirebase,
    SiSupabase,
    SiSanity,
    SiTensorflow,
    SiPytorch,
    SiOpencv,
    SiScikitlearn,
    SiHuggingface,
    SiLangchain,
    SiMetabase,
    SiBootstrap,
    SiDocker,
    SiPostman,
    SiGit,
    SiGithubactions,
    SiJavascript,
    SiGo,
    SiCplusplus,
    SiC,
    SiPython,
    SiLinux,
    SiAmazonwebservices,
    SiRedux,
} from "react-icons/si";

import { FaJava } from "react-icons/fa"; 

const SkillsSection = () => {
    const skills = [
        {
            category: "Frontend",
            items: [
                { name: "ReactJS", icon: <SiReact /> },
                { name: "NextJS", icon: <SiNextdotjs /> },
                { name: "Redux", icon: <SiRedux /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "Bootstrap", icon: <SiBootstrap /> },
            ],
        },
        {
            category: "Backend",
            items: [
                { name: "ExpressJS", icon: <SiExpress /> },
                { name: "NodeJS", icon: <SiNodedotjs /> },
                { name: "EJS", icon: <SiEjs /> },
                { name: "FastAPI", icon: <SiFastapi /> },
                { name: "Flask", icon: <SiFlask /> },
                { name: "Django", icon: <SiDjango /> },
            ],
        },
        {
            category: "Database & CMS",
            items: [
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "Firebase", icon: <SiFirebase /> },
                { name: "Supabase", icon: <SiSupabase /> },
                { name: "SanityCMS", icon: <SiSanity /> },
            ],
        },
        {
            category: "Machine Learning",
            items: [
                { name: "Tensorflow", icon: <SiTensorflow /> },
                { name: "PyTorch", icon: <SiPytorch /> },
                { name: "OpenCV", icon: <SiOpencv /> },
                { name: "Scikit-Learn", icon: <SiScikitlearn /> },
                { name: "HuggingFace", icon: <SiHuggingface /> },
                { name: "Langchain", icon: <SiLangchain /> },
                { name: "Pinecone", icon: <SiMetabase /> }, // Placeholder
                { name: "pgvector", icon: <SiPostgresql /> },
                { name: "FAISS", icon: <SiMetabase /> }, // Placeholder
            ],
        },
        {
            category: "DevOps",
            items: [
                { name: "Docker", icon: <SiDocker /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "Git", icon: <SiGit /> },
                { name: "AWS", icon: <SiAmazonwebservices /> },
                { name: "GitHub Actions", icon: <SiGithubactions /> },
                { name: "Linux", icon: <SiLinux /> },
            ],
        },
        {
            category: "Languages",
            items: [
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Go", icon: <SiGo /> },
                { name: "C++", icon: <SiCplusplus /> },
                { name: "C", icon: <SiC /> },
                { name: "Python", icon: <SiPython /> },
                { name: "Java", icon: <FaJava /> }, // Placeholder
            ],
        },
    ];

    return (
        <section className="px-4 sm:px-8 py-10 w-[80%]">
            <h1 className="font-bold text-[42px] sm:text-[56px] sm:mb-6 text-center">
                SKILLS
            </h1>
            <div className="space-y-6">
                {skills.map((skillCategory) => (
                    <div key={skillCategory.category}>
                        <h2 className="font-semibold text-[20px] sm:text-[24px] mb-1">
                            {skillCategory.category}
                        </h2>
                        <div className="flex flex-wrap gap-2 font-bold">
                            {skillCategory.items.map((item) => (
                                <span
                                    key={item.name}
                                    className="flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm sm:text-base shadow-md hover:bg-white hover:text-primary transition"
                                >
                                    {item.icon}
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
