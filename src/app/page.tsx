"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui";
import { ImpactStats, AboutSection } from "@/components/sections";

const SLIDES = [
  {
    id: "slide-1",
    src: "https://picsum.photos/1920/1080?random=1",
    alt: "Rev. Victor Anaele Ministering",
  },
  {
    id: "slide-2",
    src: "https://picsum.photos/1920/1080?random=2",
    alt: "Remnant Christian Network Congregation",
  },
  {
    id: "slide-3",
    src: "https://picsum.photos/1920/1080?random=3",
    alt: "Apostolic Conference Worship",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Map mouse position to slight movement for the text content
  const textX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  // Slideshow interval (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle mouse move for parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5; // -0.5 to 0.5
    mouseX.set(x);
    mouseY.set(y);
  };

  // Reset mouse position on leave
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className="relative flex items-center justify-center h-screen min-h-screen overflow-hidden bg-background"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* =========================================
          SLIDESHOW BACKGROUND
          ========================================= */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }} // Premium crossfade
        >
          {/* Slow cinematic zoom effect on the image */}
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          >
            <Image
              src={SLIDES[currentSlide].src}
              alt={SLIDES[currentSlide].alt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* =========================================
          OVERLAY (Black gradient, ~60% opacity)
          ========================================= */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" /> {/* Extra subtle darkening for readability */}

      {/* =========================================
          HERO CONTENT (With Parallax)
          ========================================= */}
      <motion.div 
        className="container relative z-20 flex flex-col items-center justify-center text-center mt-12"
        style={{ x: textX, y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col items-center gap-6 max-w-5xl"
        >
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground drop-shadow-lg">
            Raising Altars of{" "}
            <span className="text-gold italic pr-2">Righteousness</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl drop-shadow-md font-light tracking-wide mt-2">
            Resident Pastor · Teacher · Conference Speaker
          </p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            <Button variant="primary" size="lg" href="/book-appointment" className="shadow-gold-lg">
              Book Appointment
            </Button>
            <Button variant="secondary" size="lg" href="/partner" className="bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/40">
              Become a Partner
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* =========================================
          SCROLL INDICATOR
          ========================================= */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-medium">
          Discover
        </span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <AboutSection />
    </>
  );
}
