"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Reveal, fadeUp } from "@/components/ui/motion";

/* ========================================================================
   FOOTER
   Symmetric, evenly spaced column layout with refined typography
   ======================================================================== */

/* --- Social Icons (White inside Gold Circles) ---------------------------- */

function FacebookIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.20 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68l.01.2a6.33 6.33 0 006.28 6.12A6.34 6.34 0 0017.62 16V8.16a8.44 8.44 0 004 1.05V5.71a4.46 4.46 0 01-2.03-.98 4.21 4.21 0 01-1-2.04z" />
    </svg>
  );
}

/* --- Contact Icons (Filled White) ---------------------------------------- */

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-black border-t border-white/20 pt-20 pb-36">
      <div className="container max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-x-16 lg:gap-x-24">
          
          {/* =========================================
              LEFT COLUMN (Spans 1/3 of the layout)
              ========================================= */}
          <div className="flex flex-col pr-4">
            <Reveal variants={fadeUp}>
              <div>
                <h2 className="text-[22px] font-bold text-[#CEAA54] mb-2 tracking-wide font-serif">
                  Rev Victor Anaele
                </h2>
                <p className="text-white/90 text-[14px] font-normal leading-relaxed">
                  Stay connected with God’s word!
                </p>
              </div>
            </Reveal>

            {/* Generous vertical gap to separate the sections */}
            <div className="mt-24" />

            <Reveal variants={fadeUp} delay={0.1}>
              <div>
                <h2 className="text-[22px] font-bold text-white mb-3 tracking-wide font-serif">
                  Follow Us
                </h2>
                <p className="text-white/80 text-[14px] leading-relaxed mb-5 max-w-[280px]">
                  Stay connected with our ministry through social media and receive updates on upcoming events and teachings.
                </p>
                
                {/* Social Icons (Gold Circles with white vector paths) */}
                <div className="flex gap-3">
                  {[
                    { icon: FacebookIcon, href: "#" },
                    { icon: XIcon, href: "#" },
                    { icon: InstagramIcon, href: "#" },
                    { icon: TikTokIcon, href: "#" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      className="w-[30px] h-[30px] rounded-full bg-[#CEAA54] hover:bg-[#E0C76E] flex items-center justify-center text-white transition-colors"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* =========================================
              MIDDLE COLUMN: Quick Links (Spans 1/3 of the layout)
              ========================================= */}
          <Reveal variants={fadeUp} delay={0.1}>
            <h3 className="text-[20px] font-bold text-white mb-6 tracking-wide font-serif">
              Quick Links
            </h3>
            <ul className="space-y-[18px]">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Media", href: "#media" },
                { label: "Partnership", href: "#" },
                { label: "Contact", href: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white hover:text-[#CEAA54] transition-colors text-[15px] font-normal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* =========================================
              RIGHT COLUMN: Contact Info (Spans 1/3 of the layout)
              ========================================= */}
          <Reveal variants={fadeUp} delay={0.2}>
            <h3 className="text-[20px] font-bold text-white mb-6 tracking-wide font-serif">
              Contact Info
            </h3>
            <ul className="space-y-[22px]">
              <li className="flex items-center gap-3">
                <span className="text-white shrink-0"><PhoneIcon /></span>
                <span className="text-white text-[15px]">+234 8085 7510 765</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white shrink-0"><MailIcon /></span>
                <span className="text-white text-[15px]">revvictoranaele@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white shrink-0"><LocationIcon /></span>
                <span className="text-white text-[15px]">Uyo, Akwa Ibom State, Nigeria</span>
              </li>
            </ul>
          </Reveal>

        </div>
      </div>
    </footer>
  );
}
