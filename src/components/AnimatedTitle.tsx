import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = ["SOFTWARE ENGINEER", "FULL-STACK DEVELOPER"];

const AnimatedTitle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-24 sm:h-32 flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
        >
          <span className="text-foreground">{titles[index].split(" ")[0]}</span>
          <br />
          <span className="text-primary">{titles[index].split(" ").slice(1).join(" ")}</span>
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTitle;
