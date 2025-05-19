"use client";

import { useEffect, useState, Children, ReactNode } from "react";

interface AnimatedTextProps {
    children: ReactNode;
    typeSpeed?: number;
    pauseDuration?: number;
}

const AnimatedText = ({
    children,
    typeSpeed = 50,
    pauseDuration = 1000,
}: AnimatedTextProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayLength, setDisplayLength] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const elements = Children.toArray(children);

    const getTextContent = (element: ReactNode): string => {
        if (typeof element === "string") return element;
        if (
            !element ||
            typeof element !== "object" ||
            !("props" in element) ||
            !element.props?.children
        )
            return "";

        if (Array.isArray(element.props.children)) {
            return element.props.children.map(getTextContent).join("");
        }

        return getTextContent(element.props.children);
    };

    const createPartialElement = (
        element: ReactNode,
        length: number
    ): ReactNode => {
        if (typeof element === "string") {
            return element.slice(0, length);
        }

        if (
            !element ||
            typeof element !== "object" ||
            !("props" in element) ||
            !element.props?.children
        )
            return element;

        let remainingLength = length;
        let newChildren;

        if (Array.isArray(element.props.children)) {
            newChildren = element.props.children.map((child: ReactNode) => {
                const childText = getTextContent(child);
                if (remainingLength <= 0) return "";
                if (remainingLength >= childText.length) {
                    remainingLength -= childText.length;
                    return child;
                }
                const partial = createPartialElement(child, remainingLength);
                remainingLength = 0;
                return partial;
            });
        } else {
            newChildren = createPartialElement(element.props.children, length);
        }

        return {
            ...element,
            props: {
                ...element.props,
                children: newChildren,
            },
        };
    };

    useEffect(() => {
        if (elements.length === 0) return;

        const currentElement = elements[currentIndex];
        const fullText = getTextContent(currentElement);
        let timeoutId: NodeJS.Timeout;

        if (isTyping) {
            if (displayLength < fullText.length) {
                timeoutId = setTimeout(() => {
                    setDisplayLength((prev) => prev + 1);
                }, typeSpeed);
            } else {
                timeoutId = setTimeout(() => {
                    setIsTyping(false);
                }, pauseDuration);
            }
        } else {
            if (displayLength > 0) {
                timeoutId = setTimeout(() => {
                    setDisplayLength((prev) => prev - 1);
                }, typeSpeed);
            } else {
                setCurrentIndex((prev) => (prev + 1) % elements.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeoutId);
    }, [
        displayLength,
        currentIndex,
        isTyping,
        elements,
        typeSpeed,
        pauseDuration,
        getTextContent,
    ]);

    const currentElement = elements[currentIndex];
    const partialElement = createPartialElement(currentElement, displayLength);

    return <div className="min-h-[4em] overflow-visible">{partialElement}</div>;
};

export default AnimatedText;
