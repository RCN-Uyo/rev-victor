"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

/* ========================================================================
   CARD — Base card container
   Variants: default, elevated, bordered, glass
   ======================================================================== */

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default:
    "bg-surface border border-border rounded-lg",
  elevated:
    "bg-surface-elevated rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.45)]",
  bordered:
    "bg-gold-muted border border-border-gold rounded-lg",
  glass: "glass rounded-lg",
};

const paddingStyles: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8 md:p-10",
};

export function Card({
  children,
  className = "",
  variant = "default",
  padding = "none",
  hover = false,
}: CardProps) {
  if (hover) {
    return (
      <motion.div
        className={`overflow-hidden transition-colors duration-[var(--duration-base)] ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
        whileHover={{
          y: -4,
          boxShadow: "0 12px 40px rgba(200, 165, 74, 0.15)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={`overflow-hidden transition-all duration-[var(--duration-base)] ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
}

/* ========================================================================
   CARD IMAGE — Hero / thumbnail area with optional overlay
   ======================================================================== */

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  overlay?: boolean;
  className?: string;
}

const aspectStyles: Record<NonNullable<CardImageProps["aspectRatio"]>, string> =
  {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[2/1]",
  };

export function CardImage({
  src,
  alt,
  aspectRatio = "video",
  overlay = false,
  className = "",
}: CardImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-t-lg ${aspectStyles[aspectRatio]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-expo)]"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
}

/* ========================================================================
   CARD CONTENT — Standard body content area
   ======================================================================== */

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-5 md:p-6 ${className}`}>{children}</div>;
}

/* ========================================================================
   CARD HEADER — Eyebrow + Title + optional subtitle
   ======================================================================== */

interface CardHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function CardHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
}: CardHeaderProps) {
  return (
    <div className={`p-5 md:p-6 pb-0 md:pb-0 ${className}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h3
        className="font-heading font-bold text-foreground leading-tight mt-2"
        style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}
      >
        {title}
      </h3>
      {subtitle && (
        <p className="text-secondary text-sm mt-1.5 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ========================================================================
   CARD FOOTER — Action area (links, buttons, meta)
   ======================================================================== */

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div
      className={`flex items-center gap-3 p-5 md:p-6 pt-4 md:pt-4 border-t border-border ${className}`}
    >
      {children}
    </div>
  );
}

/* ========================================================================
   SERMON CARD — Specialized card for sermons / messages
   ======================================================================== */

interface SermonCardProps {
  title: string;
  date: string;
  duration: string;
  series?: string;
  thumbnail?: string;
  href: string;
  className?: string;
}

export function SermonCard({
  title,
  date,
  duration,
  series,
  thumbnail,
  href,
  className = "",
}: SermonCardProps) {
  return (
    <Link href={href} className={`group block ${className}`}>
      <motion.div
        className="overflow-hidden rounded-lg bg-surface border border-border transition-colors duration-[var(--duration-base)]"
        whileHover={{
          y: -4,
          boxShadow: "0 12px 40px rgba(200, 165, 74, 0.12)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Thumbnail with play overlay */}
        {thumbnail && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-expo)] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
              }}
            />
            {/* Play icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover:scale-110">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  className="ml-0.5"
                  aria-hidden="true"
                >
                  <path d="M0 0L18 10L0 20V0Z" fill="#000000" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-4 md:p-5">
          {series && (
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-1.5 block">
              {series}
            </span>
          )}
          <h4 className="font-heading font-bold text-foreground text-sm md:text-base leading-snug line-clamp-2 group-hover:text-gold transition-colors duration-[var(--duration-base)]">
            {title}
          </h4>
          <div className="flex items-center gap-3 mt-3 text-xs text-secondary">
            {/* Date */}
            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {date}
            </span>
            {/* Duration */}
            <span className="flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {duration}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ========================================================================
   EVENT CARD — Specialized card for conferences / events
   ======================================================================== */

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description?: string;
  featured?: boolean;
  href: string;
  className?: string;
}

/**
 * Splits a date string into month and day for prominent display.
 * Expects format like "Jan 15" or "January 15, 2025".
 */
function parseDateDisplay(date: string): { month: string; day: string } {
  const parts = date.trim().split(/[\s,]+/);
  return {
    month: (parts[0] ?? date).slice(0, 3).toUpperCase(),
    day: parts[1] ?? "",
  };
}

export function EventCard({
  title,
  date,
  location,
  description,
  featured = false,
  href,
  className = "",
}: EventCardProps) {
  const { month, day } = parseDateDisplay(date);

  return (
    <Link href={href} className={`group block ${className}`}>
      <motion.div
        className={`overflow-hidden rounded-lg border transition-colors duration-[var(--duration-base)] ${
          featured
            ? "border-border-gold bg-gold-muted gold-glow"
            : "border-border bg-surface"
        }`}
        whileHover={{
          y: -4,
          boxShadow: featured
            ? "0 12px 48px rgba(200, 165, 74, 0.2)"
            : "0 12px 40px rgba(200, 165, 74, 0.12)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex gap-4 md:gap-5 p-5 md:p-6">
          {/* Date block */}
          <div
            className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-lg ${
              featured ? "bg-gold/10 border border-gold/30" : "bg-surface-elevated border border-border"
            }`}
          >
            <span
              className={`text-[0.625rem] font-semibold uppercase tracking-[0.15em] leading-none ${
                featured ? "text-gold" : "text-secondary"
              }`}
            >
              {month}
            </span>
            <span
              className={`text-2xl md:text-[1.75rem] font-heading font-bold leading-none mt-0.5 ${
                featured ? "text-gold" : "text-foreground"
              }`}
            >
              {day}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            {featured && (
              <span className="text-gold text-[0.625rem] font-semibold uppercase tracking-[0.2em] mb-1 block">
                Featured Event
              </span>
            )}
            <h4 className="font-heading font-bold text-foreground text-base md:text-lg leading-snug group-hover:text-gold transition-colors duration-[var(--duration-base)] truncate">
              {title}
            </h4>
            {/* Location */}
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-secondary">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="truncate">{location}</span>
            </div>
            {description && (
              <p className="text-secondary text-sm mt-2 leading-relaxed line-clamp-2">
                {description}
              </p>
            )}
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-secondary group-hover:text-gold group-hover:translate-x-1 transition-all duration-[var(--duration-base)]"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
