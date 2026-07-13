"use client";

import Link from "next/link";
import { Reveal, Stagger, fadeUp, fadeIn } from "@/components/ui/motion";

/* ========================================================================
   FOOTER
   Premium site-wide footer with brand, navigation & social links
   ======================================================================== */

/* --- Social Media Icons (inline SVGs) ---------------------------------- */

function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  );
}

/* --- Types ------------------------------------------------------------- */

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  heading: string;
  links: FooterLink[];
}

/* --- Footer Link Column ------------------------------------------------ */

function FooterColumn({ heading, links }: FooterColumnProps) {
  return (
    <div>
      <h4
        className="font-body text-sm uppercase tracking-wider text-gold mb-6"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {heading}
      </h4>
      <ul className="space-y-0" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block py-1.5 text-sm text-secondary transition-colors hover:text-gold focus-visible:text-gold"
              style={{
                fontFamily: "var(--font-body)",
                transitionDuration: "var(--duration-fast)",
                transitionTimingFunction: "var(--ease-out-expo)",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --- Link Data --------------------------------------------------------- */

const ministryLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Our Story", href: "/our-story" },
  { label: "Leadership", href: "/leadership" },
  { label: "Beliefs", href: "/beliefs" },
  { label: "Gallery", href: "/gallery" },
];

const resourceLinks: FooterLink[] = [
  { label: "Sermons", href: "/sermons" },
  { label: "Conferences", href: "/conferences" },
  { label: "Blog", href: "/blog" },
  { label: "Devotionals", href: "/devotionals" },
  { label: "Books", href: "/books" },
];

const connectLinks: FooterLink[] = [
  { label: "Contact Us", href: "/contact" },
  { label: "Book Appointment", href: "/book-appointment" },
  { label: "Partner", href: "/partner" },
  { label: "Prayer Request", href: "/prayer-request" },
  { label: "Visit Us", href: "/visit" },
];

/* --- Social Link Data -------------------------------------------------- */

interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const socialLinks: SocialLink[] = [
  { label: "YouTube", href: "https://youtube.com", icon: YouTubeIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "X (Twitter)", href: "https://x.com", icon: XIcon },
];

/* --- Footer Component -------------------------------------------------- */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-surface border-t border-border"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="container py-16 md:py-20">
        <Stagger className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Brand */}
          <Reveal variants={fadeUp} className="sm:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              {/* Logo */}
              <Link href="/" aria-label="Go to homepage">
                <span
                  className="gradient-text-gold text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  RVA
                </span>
              </Link>

              {/* Name */}
              <p
                className="text-sm font-medium text-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Rev. Victor Ifeanyi Anaele
              </p>

              {/* Role */}
              <p
                className="text-xs text-secondary leading-relaxed max-w-[260px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Resident Pastor, Remnant Christian Network (RCN) Uyo Apostolic
                Center
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${label}`}
                    className="text-secondary transition-colors hover:text-gold focus-visible:text-gold"
                    style={{
                      transitionDuration: "var(--duration-fast)",
                      transitionTimingFunction: "var(--ease-out-expo)",
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Column 2 — Ministry */}
          <Reveal variants={fadeUp} delay={0.1}>
            <FooterColumn heading="Ministry" links={ministryLinks} />
          </Reveal>

          {/* Column 3 — Resources */}
          <Reveal variants={fadeUp} delay={0.2}>
            <FooterColumn heading="Resources" links={resourceLinks} />
          </Reveal>

          {/* Column 4 — Connect */}
          <Reveal variants={fadeUp} delay={0.3}>
            <FooterColumn heading="Connect" links={connectLinks} />
          </Reveal>
        </Stagger>
      </div>

      {/* Bottom bar */}
      <Reveal variants={fadeIn}>
        <div className="border-t border-border">
          <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p
              className="text-xs text-secondary"
              style={{ fontFamily: "var(--font-body)" }}
            >
              &copy; {currentYear} Rev. Victor Ifeanyi Anaele. All rights
              reserved.
            </p>
            <p
              className="text-xs text-secondary"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Designed with excellence
            </p>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
