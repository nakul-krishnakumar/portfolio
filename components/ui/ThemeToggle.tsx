"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a placeholder with same dimensions to prevent layout shift
  if (!mounted) {
    return (
      <div className="p-2 border-3 border-neo-black bg-neo-white w-[44px] h-[44px]" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border-3 border-neo-black bg-neo-white hover:bg-neo-yellow transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon size={20} className="text-neo-black" />
      ) : (
        <Sun size={20} className="text-neo-black" />
      )}
    </button>
  );
}
