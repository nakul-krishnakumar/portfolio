"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { Spring } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = {
    className?: string;
    size?: number;
    springOptions?: Spring;
};

export function Spotlight({
    className,
    size = 200,
    springOptions = { type: "spring", bounce: 0 },
}: SpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
    const mouseX = useSpring(0, springOptions);
    const mouseY = useSpring(0, springOptions);
    const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
    const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

    useEffect(() => {
        if (containerRef.current) {
            const parent = containerRef.current.parentElement;
            if (parent) {
                parent.style.position = "relative";
                setParentElement(parent);
            }
        }
    }, []);

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (!parentElement) return;
            const { left, top } = parentElement.getBoundingClientRect();
            mouseX.set(event.clientX - left);
            mouseY.set(event.clientY - top);
        },
        [mouseX, mouseY, parentElement]
    );

    // Check if cursor is already in the viewport on mount
    useEffect(() => {
        if (!parentElement) return;

        const checkInitialCursorPosition = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { left, top, right, bottom } = parentElement.getBoundingClientRect();

            if (
                clientX >= left &&
                clientX <= right &&
                clientY >= top &&
                clientY <= bottom
            ) {
                setIsHovered(true);
                handleMouseMove(event);
            }
        };

        // Check once on mount
        document.addEventListener("mousemove", checkInitialCursorPosition, { once: true });

        // Regular event listeners
        parentElement.addEventListener("mousemove", handleMouseMove);
        parentElement.addEventListener("mouseenter", () => setIsHovered(true));
        parentElement.addEventListener("mouseleave", () => setIsHovered(false));

        return () => {
            document.removeEventListener("mousemove", checkInitialCursorPosition);
            parentElement.removeEventListener("mousemove", handleMouseMove);
            parentElement.removeEventListener("mouseenter", () => setIsHovered(true));
            parentElement.removeEventListener("mouseleave", () => setIsHovered(false));
        };
    }, [parentElement, handleMouseMove]);

    return (
        <motion.div
            ref={containerRef}
            className={cn(
                "pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_70%)] transition-opacity duration-200",
                "from-primary via-white to-white",
                isHovered ? "opacity-100" : "opacity-0",
                className
            )}
            style={{
                width: size,
                height: size,
                left: spotlightLeft,
                top: spotlightTop,
            }}
        />
    );
}
