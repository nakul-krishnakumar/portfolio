"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "filled" | "secondary";
  color?: "yellow" | "blue" | "red" | "green" | "purple" | "orange" | "cyan" | "pink" | "black";
}

const colorMap = {
  yellow: "bg-neo-yellow text-neo-black",
  blue: "bg-neo-blue text-neo-white",
  red: "bg-neo-red text-neo-white",
  green: "bg-neo-green text-neo-black",
  purple: "bg-neo-purple text-neo-white",
  orange: "bg-neo-orange text-neo-white",
  cyan: "bg-neo-cyan text-neo-black",
  pink: "bg-neo-pink text-neo-black",
  black: "bg-neo-black text-neo-white",
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", color = "yellow", children, ...props }, ref) => {
    const baseStyles = "neo-badge inline-flex items-center";
    
    const variants = {
      default: colorMap[color],
      outline: `bg-transparent border-neo-black text-neo-black`,
      filled: `${colorMap[color]} border-neo-black`,
      secondary: "bg-neo-black text-neo-white",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
