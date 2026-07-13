"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useInView } from "framer-motion";

/* ========================================================================
   ANIMATION VARIANTS
   Shared motion presets for the entire site
   ======================================================================== */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ========================================================================
   REVEAL COMPONENT
   Scroll-triggered reveal animation wrapper
   ======================================================================== */

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variants?: Variants;
  /** Viewport threshold (0-1) before triggering */
  threshold?: number;
  /** Delay in seconds */
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  variants = fadeUp,
  threshold = 0.15,
  delay = 0,
  className,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ========================================================================
   STAGGER WRAPPER
   Stagger children animations on scroll
   ======================================================================== */

interface StaggerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export function Stagger({ children, className, ...rest }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
