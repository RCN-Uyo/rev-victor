"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/components/ui";

export default function Home() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Ambient Gold Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,165,74,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="container relative z-10 text-center flex flex-col items-center gap-8 py-32"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Eyebrow */}
        <motion.span className="eyebrow" variants={fadeUp}>
          Remnant Christian Network · Uyo Apostolic Center
        </motion.span>

        {/* Heading */}
        <motion.h1 className="max-w-4xl" variants={fadeUp}>
          Rev. Victor Ifeanyi{" "}
          <span className="gradient-text-gold">Anaele</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto text-center"
          variants={fadeUp}
        >
          Resident Pastor · Teacher · Conference Speaker
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          variants={fadeUp}
        >
          <a href="#" className="btn btn-primary">
            Explore the Ministry
          </a>
          <a href="#" className="btn btn-secondary">
            Watch Sermons
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div className="mt-12" variants={fadeUp}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-[0.2em] uppercase text-secondary">
              Scroll
            </span>
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "top" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
