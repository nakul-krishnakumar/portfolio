"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full font-sans" ref={containerRef}>
            <div ref={ref} className="relative pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col pt-10 md:pt-20 relative pl-12"
                    >
                        <div className="relative flex items-center mb-3">
                            <div className="absolute -left-[2.7rem] top-0 h-10 w-10 rounded-full bg-foreground flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-primary border border-primary-foreground p-2" />
                            </div>
                            <h3 className="text-lg md:text-2xl font-bold text-muted-foreground ml-2">
                                {item.title}
                            </h3>
                        </div>

                        <div>{item.content}</div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute left-[1.5rem] top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-purple-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
