"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", color, children, ...props }, ref) => {
    const baseStyles = "neo-button inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all";
    
    const variants = {
      primary: "bg-neo-yellow text-neo-black hover:bg-neo-yellow/90",
      secondary: "bg-neo-blue text-neo-white hover:bg-neo-blue/90",
      outline: "bg-transparent text-neo-black border-neo-black hover:bg-neo-black hover:text-neo-white",
      ghost: "bg-transparent border-transparent shadow-none hover:bg-neo-gray",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          color && `bg-${color}`,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
