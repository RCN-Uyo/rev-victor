"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loading screen after the initial component mount
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Give it enough time to show the logo animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.span
              className="gradient-text-gold text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              RVA
            </motion.span>
            
            {/* Loading line */}
            <div className="h-px w-32 bg-border relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gold"
                initial={{ width: "0%", left: "0%" }}
                animate={{ width: ["0%", "50%", "0%"], left: ["0%", "50%", "100%"] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
