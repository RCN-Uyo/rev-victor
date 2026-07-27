"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RvaLogo } from "@/components/ui/RvaLogo";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  Variants,
} from "framer-motion";

/* ========================================================================
   NAV ITEMS CONFIGURATION
   ======================================================================== */

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Partnership", href: "/partner" },
  { label: "Contact", href: "/contact" },
] as const;

/* ========================================================================
   ANIMATION VARIANTS
   ======================================================================== */

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const mobileLinkContainerVariants: Variants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const mobileLinkVariants: Variants = {
  closed: { opacity: 0, y: 24 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const mobileCtaVariants: Variants = {
  closed: { opacity: 0, y: 16 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.45 },
  },
};

/* ========================================================================
   HAMBURGER ICON COMPONENT
   ======================================================================== */

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

function Hamburger({ isOpen, toggle }: HamburgerProps) {
  return (
    <button
      onClick={toggle}
      className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className="flex h-5 w-6 flex-col justify-between">
        <motion.span
          className="block h-[2px] w-full origin-left rounded-full bg-gold"
          animate={isOpen ? { rotate: 45, y: -2, width: "110%" } : { rotate: 0, y: 0, width: "100%" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="block h-[2px] rounded-full bg-gold"
          animate={isOpen ? { opacity: 0, x: -8, width: "100%" } : { opacity: 1, x: 0, width: "70%" }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="block h-[2px] w-full origin-left rounded-full bg-gold"
          animate={isOpen ? { rotate: -45, y: 2, width: "110%" } : { rotate: 0, y: 0, width: "100%" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </button>
  );
}

/* ========================================================================
   NAV LINK COMPONENT (Animated hover and active states)
   ======================================================================== */

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  hoveredPath: string | null;
  setHoveredPath: (path: string | null) => void;
}

function NavLink({ href, label, isActive, hoveredPath, setHoveredPath }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
      aria-current={isActive ? "page" : undefined}
      onMouseEnter={() => setHoveredPath(href)}
      onMouseLeave={() => setHoveredPath(null)}
      onFocus={() => setHoveredPath(href)}
      onBlur={() => setHoveredPath(null)}
    >
      <span
        className="relative z-10 text-sm font-medium uppercase tracking-wider transition-colors duration-300"
        style={{
          fontFamily: "var(--font-body)",
          color: isActive || hoveredPath === href ? "var(--color-gold)" : "var(--color-secondary)",
        }}
      >
        {label}
      </span>

      {/* Hover Background Pill */}
      {hoveredPath === href && (
        <motion.div
          layoutId="navbar-hover-pill"
          className="absolute inset-0 z-0 rounded-md bg-gold/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}

      {/* Active Underline */}
      {isActive && (
        <motion.div
          layoutId="navbar-active-underline"
          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gold shadow-[0_0_8px_rgba(200,165,74,0.6)]"
          initial={false}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
    </Link>
  );
}

/* ========================================================================
   NAVBAR COMPONENT
   ======================================================================== */

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  
  const pathname = usePathname();
  const { scrollY } = useScroll();

  /* --- Scroll Effects Transforms --- */
  // Morph background from fully transparent to a frosted dark glass
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(5, 5, 5, 0.85)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(16px)"]
  );
  const borderBottomColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]
  );
  
  // Shrink height slightly on scroll
  const navHeight = useTransform(scrollY, [0, 100], ["6rem", "4.5rem"]);
  
  // Scale logo down on scroll
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  /* --- Auto-hide logic on scroll down --- */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // If scrolling down and past 300px, hide the navbar
    if (latest > previous && latest > 300 && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  /* --- Body scroll lock & route changes --- */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 origin-top"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundColor,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          borderBottomColor,
        }}
      >
        <div className="container relative z-10">
          <motion.div 
            className="flex items-center justify-between"
            style={{ height: navHeight }}
          >
            {/* ---- Logo ---- */}
            <Link
              href="/"
              className="group flex items-center gap-3 outline-none rounded-md focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Rev. Victor Anaele — Home"
            >
              <motion.span
                className="origin-left"
                style={{ scale: logoScale }}
              >
                <RvaLogo width={80} height={40} />
              </motion.span>
              <motion.span
                className="hidden text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] md:block text-secondary"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Rev. Victor Anaele
              </motion.span>
            </Link>

            {/* ---- Desktop Nav Links ---- */}
            <div 
              className="hidden items-center gap-2 md:flex"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isActive={pathname === item.href}
                  hoveredPath={hoveredPath}
                  setHoveredPath={setHoveredPath}
                />
              ))}
            </div>

            {/* ---- Desktop CTA + Mobile Hamburger ---- */}
            <div className="flex items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <Link
                  href="/partner"
                  className="btn btn-primary text-xs shadow-gold-sm hover:shadow-gold-md"
                  style={{ padding: "0.625rem 1.5rem" }}
                >
                  Partner With Us
                </Link>
              </motion.div>

              <Hamburger isOpen={isMobileMenuOpen} toggle={toggleMobileMenu} />
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* ====================================================================
         MOBILE MENU — Full-screen overlay
         ==================================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: "rgba(5, 5, 5, 0.98)" }}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Spacer for navbar height */}
            <div className="h-24 shrink-0" />

            {/* Links */}
            <motion.div
              className="flex flex-1 flex-col items-center justify-center gap-8"
              variants={mobileLinkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div key={item.href} variants={mobileLinkVariants}>
                    <Link
                      href={item.href}
                      className="relative block text-center text-3xl font-light uppercase tracking-widest transition-colors"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: isActive ? "var(--color-gold)" : "var(--color-foreground)",
                        transitionDuration: "var(--duration-fast)",
                      }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          className="absolute -bottom-2 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full"
                          style={{ backgroundColor: "var(--color-gold)" }}
                          layoutId="mobile-active-underline"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA at bottom */}
            <motion.div
              className="shrink-0 px-8 pb-12 text-center"
              variants={mobileCtaVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <Link
                href="/partner"
                className="btn btn-primary inline-flex w-full justify-center py-4"
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
