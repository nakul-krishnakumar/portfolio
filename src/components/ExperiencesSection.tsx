import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Backend Developer",
        company: "Kerala Police Cyberdome Grapnel Team",
        period: "2025 October - Present",
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
        period: "2025 August - Present",
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
        period: "2025 July - Present",
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
        period: "2025 May - 2025 Aug",
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
    return (
        <div>
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

            <div className="relative w-full max-w-none -ml-8 sm:ml-0 mr-2 sm:mr-4 lg:mr-6">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative pl-20 pb-12 group"
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-6 top-2 w-5 h-5 rounded-full border-3 border-foreground bg-primary group-hover:scale-125 transition-transform duration-300" />

                        {/* Content card */}
                        <div className="bg-card -ml-6 sm:ml-0 border-2 border-foreground rounded-xl p-6 shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300 w-full">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="text-xl font-bold mb-1">
                                        {exp.link ? (
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                {exp.role}
                                            </a>
                                        ) : (
                                            exp.role
                                        )}
                                    </h3>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                        <Briefcase className="h-4 w-4" />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground border-2 border-border rounded-lg px-3 py-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <ul className="text-muted-foreground mb-4 leading-relaxed list-disc list-inside">
                                {exp.description.map((desc, index) => (
                                    <li key={index} className="mb-1">
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-primary/10 border-2 border-primary/20 text-primary text-sm rounded-lg font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencesSection;
