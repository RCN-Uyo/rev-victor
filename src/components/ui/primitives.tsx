import { ReactNode, forwardRef } from "react";
import Link from "next/link";

/* ========================================================================
   SECTION WRAPPER
   Consistent section spacing with optional ID for scroll targeting
   ======================================================================== */

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Remove default padding */
  flush?: boolean;
  /** Dark surface background */
  surface?: boolean;
}

export function Section({
  children,
  id,
  className = "",
  flush = false,
  surface = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${flush ? "" : "section"} ${surface ? "bg-surface" : ""} ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container">{children}</div>
    </section>
  );
}

/* ========================================================================
   EYEBROW LABEL
   Small caps label with gold accent line
   ======================================================================== */

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  /** Hide the left accent line */
  noLine?: boolean;
}

export function Eyebrow({ children, className = "", noLine = false }: EyebrowProps) {
  return (
    <span className={`eyebrow ${noLine ? "eyebrow-no-line" : ""} ${className}`}>
      {children}
    </span>
  );
}

/* ========================================================================
   GOLD DIVIDER
   Horizontal gradient line separator
   ======================================================================== */

interface DividerProps {
  className?: string;
  variant?: "gold" | "gold-full" | "subtle";
}

export function Divider({ className = "", variant = "gold" }: DividerProps) {
  const variantClass = {
    gold: "divider-gold",
    "gold-full": "divider-gold-full",
    subtle: "divider",
  }[variant];

  return <hr className={`${variantClass} ${className}`} />;
}

/** @deprecated Use `Divider` instead */
export function GoldDivider({ className = "" }: { className?: string }) {
  return <Divider variant="gold" className={className} />;
}

/* ========================================================================
   BUTTON
   Full button system — primary, secondary, ghost, link, icon
   ======================================================================== */

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  /** Renders as a Next.js Link */
  href?: string;
  /** External link (opens in new tab) */
  external?: boolean;
  /** Show loading spinner */
  loading?: boolean;
  /** Icon-only button */
  iconOnly?: boolean;
  /** Left icon */
  leftIcon?: ReactNode;
  /** Right icon */
  rightIcon?: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  link: "btn-link",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      href,
      external = false,
      loading = false,
      iconOnly = false,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      ...rest
    },
    ref
  ) => {
    const classes = [
      "btn",
      variantClasses[variant],
      sizeClasses[size],
      iconOnly ? "btn-icon" : "",
      iconOnly && size === "sm" ? "btn-icon-sm" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" opacity="0.25" />
            <path d="M12 2a10 10 0 0 1 10 10" opacity="0.75" />
          </svg>
        )}
        {!loading && leftIcon}
        {!iconOnly && children}
        {!loading && rightIcon}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

/* ========================================================================
   GRADIENT TEXT
   Gold gradient text effect
   ======================================================================== */

interface GradientTextProps {
  children: ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  variant?: "gold" | "white";
  className?: string;
}

export function GradientText({
  children,
  as: Tag = "span",
  variant = "gold",
  className = "",
}: GradientTextProps) {
  const gradientClass =
    variant === "gold" ? "gradient-text-gold" : "gradient-text-white";
  return <Tag className={`${gradientClass} ${className}`}>{children}</Tag>;
}

/* ========================================================================
   SECTION HEADING
   Reusable heading block: eyebrow + title + subtitle
   ======================================================================== */

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  id,
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "items-start";

  return (
    <div className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className={align === "center" ? "max-w-3xl" : ""}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${align === "center" ? "max-w-2xl mx-auto text-center" : ""}`}>
          {subtitle}
        </p>
      )}
      <Divider variant="gold" className={align === "center" ? "mx-auto" : ""} />
    </div>
  );
}

/* ========================================================================
   ICON WRAPPER
   Consistent icon container
   ======================================================================== */

interface IconWrapperProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "gold" | "surface";
  className?: string;
}

export function IconWrapper({
  children,
  size = "md",
  variant = "default",
  className = "",
}: IconWrapperProps) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const variantMap = {
    default: "bg-surface-elevated border border-border",
    gold: "bg-gold-muted border border-border-gold",
    surface: "bg-surface border border-border",
  };

  return (
    <div
      className={`${sizeMap[size]} ${variantMap[variant]} rounded-xl flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
