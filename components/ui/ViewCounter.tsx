"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

// Module-level flag to prevent multiple increments across strict mode double-mounting
let hasIncrementedThisPageLoad = false;

export function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Prevent multiple increments
    if (hasIncrementedThisPageLoad) {
      // Just fetch current count without incrementing
      fetch("/api/views")
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch(() => setCount(0));
      return;
    }
    
    hasIncrementedThisPageLoad = true;

    fetch("/api/views", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
      })
      .catch(() => {
        fetch("/api/views")
          .then((res) => res.json())
          .then((data) => setCount(data.count))
          .catch(() => setCount(0));
      });
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-neo-white/30 text-neo-white/70">
      <Eye size={16} className="text-neo-yellow" />
      <span className="font-medium text-sm tracking-wide">
        {count === null ? (
          <span className="inline-block w-8 h-3 bg-neo-white/20 animate-pulse rounded" />
        ) : (
          <>{count.toLocaleString()} views</>
        )}
      </span>
    </div>
  );
}
