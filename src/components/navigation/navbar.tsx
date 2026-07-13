"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/* ========================================================================
   NAV ITEMS CONFIGURATION
   ======================================================================== */

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Conferences", href: "/conferences" },
  { label: "Contact", href: "/contact" },
] as const;

/* ========================================================================
   ANIMATION VARIANTS
   ======================================================================== */

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const mobileLinkContainerVariants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const mobileLinkVariants = {
  closed: { opacity: 0, y: 24 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const mobileCtaVariants = {
  closed: { opacity: 0, y: 16 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.45 },
  },
};

/* ========================================================================
   HAMBURGER ICON COMPONENT
   Three-line icon that morphs to X when open
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
        {/* Top line */}
        <motion.span
          className="block h-[2px] w-full origin-left rounded-full"
          style={{ backgroundColor: "var(--color-gold)" }}
          animate={
            isOpen
              ? { rotate: 45, y: 0, width: "100%" }
              : { rotate: 0, y: 0, width: "100%" }
          }
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Middle line */}
        <motion.span
          className="block h-[2px] rounded-full"
          style={{ backgroundColor: "var(--color-gold)" }}
          animate={
            isOpen
              ? { opacity: 0, x: -8, width: "100%" }
              : { opacity: 1, x: 0, width: "66%" }
          }
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Bottom line */}
        <motion.span
          className="block h-[2px] w-full origin-left rounded-full"
          style={{ backgroundColor: "var(--color-gold)" }}
          animate={
            isOpen
              ? { rotate: -45, y: 0, width: "100%" }
              : { rotate: 0, y: 0, width: "100%" }
          }
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </button>
  );
}

/* ========================================================================
   NAV LINK COMPONENT
   Desktop link with underline-from-center hover animation
   ======================================================================== */

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="group relative px-1 py-2"
      aria-current={isActive ? "page" : undefined}
    >
      <span
        className="text-sm font-medium uppercase tracking-wider transition-colors"
        style={{
          fontFamily: "var(--font-body)",
          color: isActive ? "var(--color-gold)" : "var(--color-secondary)",
          transitionDuration: "var(--duration-fast)",
        }}
      >
        <span className="group-hover:text-gold transition-colors duration-200">
          {label}
        </span>
      </span>

      {/* Underline animation — grows from center */}
      <span
        className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all"
        style={{
          width: isActive ? "100%" : "0%",
          backgroundColor: "var(--color-gold)",
          transitionDuration: "var(--duration-base)",
          transitionTimingFunction: "var(--ease-out-expo)",
        }}
      />
      {/* Hover underline effect */}
      <span
        className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all group-hover:w-full"
        style={{
          backgroundColor: "var(--color-gold)",
          transitionDuration: "var(--duration-base)",
          transitionTimingFunction: "var(--ease-out-expo)",
          opacity: isActive ? 0 : 1,
        }}
      />
    </Link>
  );
}

/* ========================================================================
   NAVBAR COMPONENT
   Main site navigation — fixed, glass morphism on scroll
   ======================================================================== */

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  /* --- Scroll detection --- */
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* --- Lock body scroll when mobile menu is open --- */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* --- Close mobile menu on route change --- */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 transition-all"
        style={{
          transitionDuration: "var(--duration-base)",
          transitionTimingFunction: "var(--ease-out-expo)",
        }}
      >
        <div
          className="absolute inset-0 transition-all"
          style={{
            background: isScrolled
              ? "rgba(10, 10, 10, 0.7)"
              : "transparent",
            backdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
            WebkitBackdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
            borderBottom: isScrolled
              ? "1px solid var(--color-border)"
              : "1px solid transparent",
            transitionDuration: "var(--duration-base)",
            transitionTimingFunction: "var(--ease-out-expo)",
          }}
        />

        <div className="container relative z-10">
          <div className="flex h-20 items-center justify-between">
            {/* ---- Logo ---- */}
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label="Rev. Victor Anaele — Home"
            >
              <span
                className="gradient-text-gold text-2xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                RVA
              </span>
              <span
                className="hidden text-xs font-medium uppercase tracking-widest sm:block"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-secondary)",
                }}
              >
                Rev. Victor Anaele
              </span>
            </Link>

            {/* ---- Desktop Nav Links ---- */}
            <div className="hidden items-center gap-8 md:flex">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isActive={pathname === item.href}
                />
              ))}
            </div>

            {/* ---- Desktop CTA + Mobile Hamburger ---- */}
            <div className="flex items-center gap-4">
              <Link
                href="/partner"
                className="btn btn-primary hidden text-xs md:inline-flex"
                style={{ padding: "0.625rem 1.5rem" }}
              >
                Partner With Us
              </Link>

              <Hamburger isOpen={isMobileMenuOpen} toggle={toggleMobileMenu} />
            </div>
          </div>
        </div>
      </nav>

      {/* ====================================================================
         MOBILE MENU — Full-screen overlay
         ==================================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: "rgba(0, 0, 0, 0.95)" }}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Spacer for navbar height */}
            <div className="h-20 shrink-0" />

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
                        color: isActive
                          ? "var(--color-gold)"
                          : "var(--color-foreground)",
                        transitionDuration: "var(--duration-fast)",
                      }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          className="absolute -bottom-2 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full"
                          style={{
                            backgroundColor: "var(--color-gold)",
                          }}
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
                className="btn btn-primary inline-flex w-full justify-center"
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
