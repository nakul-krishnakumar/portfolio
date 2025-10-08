import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { Timeline } from "./ui/timeline";

const experiences = [
    {
        role: "Backend Developer",
        company: "Kerala Police Cyberdome Grapnel Team",
        period: "October 2025 - Present",
        description: [
            <>
                Contributed to building a backend service for a CSAM take down
                system for Kerala Police Cyberdome.
            </>,
            <>
                Developed and secured 10+ authenticated API routes, ensuring
                zero data leaks and maintaining{" "}
                <strong className="font-semibold text-primary">
                    100% compliance
                </strong>{" "}
                with content handling policies for sensitive CSAM data.
            </>,
            <>
                Developed webhook endpoints to connect the service to web
                crawlers and dark web crawlers for hash matching.
            </>,
            <>
                Used document database to store metadata and hashes of 1000+
                real life cases.
            </>,
        ],
        tags: ["FastAPI", "Docker", "MongoDB", "REST APIs"],
    },
    {
        role: "Open Source Contributor - Stdlib",
        company: "stdlib-js/stdlib",
        period: "August 2025 - Present",
        link: "https://github.com/stdlib-js/stdlib/commits/develop/?author=nakul-krishnakumar",
        description: [
            <>
                Added multiple fast versions of core algorithms, focusing on
                speed and efficiency.
            </>,
            <>
                Wrote structured metadata for multiple packages to enhance
                clarity and maintainability.
            </>,
            <>
                Wrote C implementations for multiple math algorithms to improve
                performance by 2x-10x.
            </>,
        ],
        tags: ["Typescript", "Javascript", "Node.js", "C"],
    },
    {
        role: "Student Researcher",
        company: "IBM Global Remote Mentoring Program",
        period: "July 2025 - Present",
        description: [
            <>
                Building a large-scale benchmark for evaluating IR systems in
                Malayalam.
            </>,
            <>
                Researching about current Information Retrieval systems in
                Malayalam language and their limitations.
            </>,
            <>
                Translated BEIR datasets to Malayalam using a custom translation
                pipeline.
            </>,
            <>
                Evaluated current IR models like{" "}
                <strong className="font-semibold text-primary">
                    bge-m3, multilingual-e5-large
                </strong>{" "}
                on existing IR datasets in malayalam.
            </>,
        ],
        tags: ["Python", "Huggingface", "MLFlow"],
    },
    {
        role: "AI Engineer Intern",
        company: "Bluestack Technologies",
        period: "May 2025 - August 2025",
        description: [
            <>
                Built end-to-end computer vision pipeline with{" "}
                <strong className="font-semibold text-primary">
                    &lt; 1 second
                </strong>{" "}
                face recognition.
            </>,
            <>
                Achieved{" "}
                <strong className="font-semibold text-primary">95%+</strong>{" "}
                recognition accuracy on registered faces.
            </>,
            <>
                Setup a notification service to notify admin on unidentified
                faces with{" "}
                <strong className="font-semibold text-primary">
                    &lt; 2 seconds
                </strong>{" "}
                delay using Kafka.
            </>,
            <>
                Built RAG based LLM chatbot that queries latest Penal Code
                documents using a cronjob and answers any question regarding law
                and crime.
            </>,
        ],
        tags: [
            "OpenCV",
            "FastAPI",
            "Kafka",
            "pgvector",
            "Pinecone",
            "LangChain",
            "Supabase",
        ],
    },
];

const ExperiencesSection = () => {
    // Transform experiences data for Timeline component
    const timelineData = experiences.map((exp) => ({
        title: exp.period,
        content: (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10"
            >
                <div className="bg-card border-2 border-foreground rounded-xl p-6 shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300">
                    <div className="mb-3">
                        <h3 className="text-xl font-bold mb-1 text-foreground">
                            {exp.link ? (
                                <a
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline flex items-center gap-2 group"
                                >
                                    {exp.role}
                                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            ) : (
                                exp.role
                            )}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                        </div>
                    </div>

                    <ul className="text-muted-foreground mb-4 leading-relaxed list-disc list-inside space-y-1">
                        {exp.description.map((desc, index) => (
                            <li key={index} className="text-sm">
                                {desc}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        ),
    }));

    return (
        <div>
            <h2 className="text-4xl font-bold mb-4 text-center text-foreground">
                Experience
            </h2>
            <p className="text-muted-foreground text-center text-base max-w-md mx-auto mb-8">
                My professional journey and key contributions
            </p>
            <Timeline data={timelineData} />
        </div>
    );
};

export default ExperiencesSection;
