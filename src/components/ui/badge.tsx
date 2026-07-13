"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/* ========================================================================
   BADGE — Small status / category pill label
   Variants: default, gold, outline, success, live
   ======================================================================== */

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "gold" | "outline" | "success" | "live";
  size?: "sm" | "md";
  className?: string;
}

const badgeVariantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "bg-surface-elevated text-secondary border border-transparent",
  gold:
    "bg-gold-muted text-gold border border-gold-dark",
  outline:
    "bg-transparent text-foreground border border-border",
  success:
    "bg-[rgba(34,197,94,0.12)] text-[#4ade80] border border-[rgba(34,197,94,0.25)]",
  live:
    "bg-[rgba(239,68,68,0.12)] text-[#f87171] border border-[rgba(239,68,68,0.25)]",
};

const badgeSizeStyles: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "px-2.5 py-0.5 text-[0.625rem]",
  md: "px-3 py-1 text-[0.6875rem]",
};

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full
        font-body font-semibold
        uppercase tracking-[0.12em]
        leading-none whitespace-nowrap
        transition-colors duration-[var(--duration-fast)]
        ${badgeVariantStyles[variant]}
        ${badgeSizeStyles[size]}
        ${className}
      `}
    >
      {/* Pulse dot for live variant */}
      {variant === "live" && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ef4444] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f87171]" />
        </span>
      )}
      {children}
    </span>
  );
}

/* ========================================================================
   STATUS DOT — Animated coloured indicator
   States: online (green), live (red + pulse), offline (grey)
   ======================================================================== */

interface StatusDotProps {
  status: "online" | "live" | "offline";
  className?: string;
}

const dotColors: Record<StatusDotProps["status"], string> = {
  online: "#4ade80",
  live: "#f87171",
  offline: "#6b7280",
};

const pulseColors: Record<StatusDotProps["status"], string> = {
  online: "rgba(74, 222, 128, 0.5)",
  live: "rgba(248, 113, 113, 0.5)",
  offline: "transparent",
};

export function StatusDot({ status, className = "" }: StatusDotProps) {
  const shouldPulse = status === "online" || status === "live";

  return (
    <span
      className={`relative inline-flex h-2.5 w-2.5 ${className}`}
      role="status"
      aria-label={
        status === "online"
          ? "Online"
          : status === "live"
          ? "Live now"
          : "Offline"
      }
    >
      {shouldPulse && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: pulseColors[status] }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      <span
        className="relative inline-flex h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: dotColors[status] }}
      />
    </span>
  );
}
