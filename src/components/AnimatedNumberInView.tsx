"use client";
import { AnimatedNumber } from "@/src/components/ui/animated-number";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function AnimatedNumberInView({ num }: { num: number }) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView && value === 0) {
            setValue(num);
        }
    }, [isInView, value, num]);

    return (
        <div ref={ref}>
            +
            <AnimatedNumber
                springOptions={{
                    type: "spring",
                    bounce: 0,
                    duration: num > 100 ? 2000 : 3000,
                }}
                value={value}
            />
        </div>
    );
}
