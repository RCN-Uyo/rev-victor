import { ReactNode } from "react";

/* ========================================================================
   TYPES — Shared responsive breakpoint object
   ======================================================================== */

interface ResponsiveCols {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface ResponsiveSpan {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

type GapSize = "sm" | "md" | "lg" | "xl";
type StackGapSize = "xs" | "sm" | "md" | "lg" | "xl";

/* ========================================================================
   GRID — CSS Grid wrapper with responsive column control
   ======================================================================== */

const GRID_GAP: Record<GapSize, string> = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

/**
 * Maps a numeric column count to a Tailwind grid-cols class.
 * Supports 1–12 columns via standard Tailwind utilities.
 */
function colsClass(n: number, prefix = ""): string {
  const p = prefix ? `${prefix}:` : "";
  return `${p}grid-cols-${n}`;
}

interface GridProps {
  children: ReactNode;
  /** Number of columns — fixed or responsive per breakpoint */
  cols?: number | ResponsiveCols;
  /** Gap between grid items */
  gap?: GapSize;
  className?: string;
}

export function Grid({
  children,
  cols = 1,
  gap = "md",
  className = "",
}: GridProps) {
  let colClasses: string;

  if (typeof cols === "number") {
    colClasses = colsClass(cols);
  } else {
    const parts: string[] = [];
    if (cols.sm !== undefined) parts.push(colsClass(cols.sm, "sm"));
    if (cols.md !== undefined) parts.push(colsClass(cols.md, "md"));
    if (cols.lg !== undefined) parts.push(colsClass(cols.lg, "lg"));
    if (cols.xl !== undefined) parts.push(colsClass(cols.xl, "xl"));
    // Default to 1 column at base if responsive object is used
    colClasses = `grid-cols-1 ${parts.join(" ")}`;
  }

  return (
    <div className={`grid ${colClasses} ${GRID_GAP[gap]} ${className}`}>
      {children}
    </div>
  );
}

/* ========================================================================
   GRID ITEM — Grid child with span control
   ======================================================================== */

function spanClass(n: number, prefix = ""): string {
  const p = prefix ? `${prefix}:` : "";
  return `${p}col-span-${n}`;
}

interface GridItemProps {
  children: ReactNode;
  /** Number of columns to span — fixed or responsive per breakpoint */
  span?: number | ResponsiveSpan;
  className?: string;
}

export function GridItem({
  children,
  span,
  className = "",
}: GridItemProps) {
  let spanClasses = "";

  if (span !== undefined) {
    if (typeof span === "number") {
      spanClasses = spanClass(span);
    } else {
      const parts: string[] = [];
      if (span.sm !== undefined) parts.push(spanClass(span.sm, "sm"));
      if (span.md !== undefined) parts.push(spanClass(span.md, "md"));
      if (span.lg !== undefined) parts.push(spanClass(span.lg, "lg"));
      if (span.xl !== undefined) parts.push(spanClass(span.xl, "xl"));
      spanClasses = parts.join(" ");
    }
  }

  return (
    <div className={`${spanClasses} ${className}`.trim()}>
      {children}
    </div>
  );
}

/* ========================================================================
   FLEX — Flexbox wrapper
   ======================================================================== */

const FLEX_GAP: Record<GapSize, string> = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

interface FlexProps {
  children: ReactNode;
  /** Flex direction */
  direction?: "row" | "col";
  /** Align items — maps to Tailwind items-* classes */
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  /** Justify content — maps to Tailwind justify-* classes */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /** Gap between flex children */
  gap?: GapSize;
  /** Enable flex wrap */
  wrap?: boolean;
  className?: string;
}

export function Flex({
  children,
  direction = "row",
  align,
  justify,
  gap = "md",
  wrap = false,
  className = "",
}: FlexProps) {
  const classes = [
    "flex",
    direction === "col" ? "flex-col" : "flex-row",
    align ? `items-${align}` : "",
    justify ? `justify-${justify}` : "",
    FLEX_GAP[gap],
    wrap ? "flex-wrap" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}

/* ========================================================================
   STACK — Vertical flex stack (common pattern shorthand)
   ======================================================================== */

const STACK_GAP: Record<StackGapSize, string> = {
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

const STACK_ALIGN: Record<string, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

interface StackProps {
  children: ReactNode;
  /** Gap between stack children */
  gap?: StackGapSize;
  /** Horizontal alignment of children */
  align?: "start" | "center" | "end" | "stretch";
  className?: string;
}

export function Stack({
  children,
  gap = "md",
  align = "stretch",
  className = "",
}: StackProps) {
  return (
    <div
      className={`flex flex-col ${STACK_GAP[gap]} ${STACK_ALIGN[align]} ${className}`}
    >
      {children}
    </div>
  );
}

/* ========================================================================
   CONTAINER — Centered max-width container with responsive padding
   ======================================================================== */

const CONTAINER_SIZE: Record<string, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

interface ContainerProps {
  children: ReactNode;
  /** Max-width preset */
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

export function Container({
  children,
  size = "xl",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${CONTAINER_SIZE[size]} ${className}`}
    >
      {children}
    </div>
  );
}

/* ========================================================================
   ASPECT RATIO — Aspect ratio wrapper for media & embeds
   ======================================================================== */

const ASPECT_RATIO_CLASS: Record<string, string> = {
  video: "aspect-video",
  square: "aspect-square",
};

/**
 * Returns the appropriate className or inline style for an aspect ratio.
 * Named ratios map to Tailwind classes; numeric ratios use inline style.
 */
function resolveAspectRatio(ratio: NonNullable<AspectRatioProps["ratio"]>): {
  className: string;
  style?: React.CSSProperties;
} {
  if (typeof ratio === "number") {
    return {
      className: "",
      style: { aspectRatio: `${ratio}` },
    };
  }

  if (ratio in ASPECT_RATIO_CLASS) {
    return { className: ASPECT_RATIO_CLASS[ratio] };
  }

  // Named ratios without built-in Tailwind classes
  const namedRatios: Record<string, string> = {
    portrait: "3/4",
    wide: "2/1",
    ultrawide: "21/9",
  };

  return {
    className: "",
    style: { aspectRatio: namedRatios[ratio] },
  };
}

interface AspectRatioProps {
  children: ReactNode;
  /** Preset ratio name or a custom numeric ratio (width / height) */
  ratio?: "video" | "square" | "portrait" | "wide" | "ultrawide" | number;
  className?: string;
}

export function AspectRatio({
  children,
  ratio = "video",
  className = "",
}: AspectRatioProps) {
  const { className: ratioClass, style } = resolveAspectRatio(ratio);

  return (
    <div
      className={`relative overflow-hidden ${ratioClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
