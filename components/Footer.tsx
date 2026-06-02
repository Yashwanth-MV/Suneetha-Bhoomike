"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const footerLinks = {
  School: [
    { label: "About Us", href: "#about" },
    { label: "Community", href: "#teachers" },
    { label: "Courses", href: "#programs" },
    { label: "Admissions", href: "#pricing" },
  ],
  Courses: [
    { label: "Carnatic Vocal", href: "#classes" },
    { label: "Sugama Sangeetha", href: "#classes" },
    { label: "Instrumental", href: "#classes" },
    { label: "All Classes", href: "#classes" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "mailto:suneethabhoomike@gmail.com" },
    { label: "Instagram", href: "https://www.instagram.com/suneethabhoomike/" },
    { label: "Admissions", href: "/register" },
  ],
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#5C120D",
        color: "#FFFFFF",
      }}
    >
      {/* Large background logo text */}
      <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full text-center z-0">
        <span
          className="font-serif font-light leading-none whitespace-nowrap"
          style={{
            fontSize: "12vw",
            color: "rgba(255,255,255,0.02)",
          }}
        >
          Suneetha Bhoomike
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        {/* Top */}
        <div ref={ref} className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div {...(inView ? fadeUp(0) : { initial: { opacity: 0, y: 28 } })}>
            <Link href="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div
                className="flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:rotate-12"
                style={{ width: "2.25rem", height: "2.25rem" }}
              >
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M8 24V10L26 6V20" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="6" cy="24" r="3.5" fill="#C9A84C" />
                  <circle cx="24" cy="20" r="3.5" fill="#C9A84C" />
                </svg>
              </div>
              <span
                className="font-serif font-medium tracking-wide"
                style={{ fontSize: "1.6rem", color: "#F8F3F0" }}
              >
                Suneetha Bhoomike
              </span>
            </Link>

            <p
              className="font-light leading-[1.8] max-w-xs mb-8"
              style={{ fontSize: "0.9rem", color: "rgba(255,245,235,0.65)" }}
            >
              Suneetha Bhoomike is a School of Music in Mysuru dedicated to providing community-driven music education to students of all ages and skill levels.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/suneethabhoomike/",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@bhoomikakoundinya",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,245,235,0.7)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                    e.currentTarget.style.color = "#F8F3F0";
                    e.currentTarget.style.background = "rgba(201,168,76,0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.color = "rgba(255,245,235,0.7)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links], colIdx) => (
            <motion.div
              key={col}
              {...(inView ? fadeUp(0.1 + colIdx * 0.08) : { initial: { opacity: 0, y: 28 } })}
            >
              <h4
                className="font-medium mb-6"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase" as const,
                  color: "rgba(255,245,235,0.45)",
                }}
              >
                {col}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-light transition-colors duration-200"
                      style={{ fontSize: "0.9rem", color: "rgba(255,245,235,0.75)" }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#F8F3F0")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,245,235,0.75)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          {...(inView ? fadeUp(0.3) : { initial: { opacity: 0, y: 28 } })}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="font-light" style={{ fontSize: "0.8rem", color: "rgba(255,245,235,0.4)" }}>
            © {new Date().getFullYear()} Suneetha Bhoomike. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5" style={{ fontSize: "0.8rem", color: "rgba(255,245,235,0.3)" }}>
            <span>Built with</span>
            <svg className="w-3.5 h-3.5" style={{ color: "rgba(201,168,76,0.6)" }} viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 10.5S1 7.5 1 4a2.5 2.5 0 015 0 2.5 2.5 0 015 0c0 3.5-5 6.5-5 6.5z" />
            </svg>
            <span>for music lovers</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
