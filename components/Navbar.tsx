"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#programs" },
  { label: "Classes", href: "#classes" },
  { label: "Admissions", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(248,243,240,0.72)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(201,168,76,0.12)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 1px 3px rgba(124,20,16,0.03), 0 8px 24px rgba(124,20,16,0.04)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[4.5rem]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 relative">
                <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 24V10L26 6V20" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="6" cy="24" r="3" fill="#C9A84C"/>
                  <circle cx="24" cy="20" r="3" fill="#C9A84C"/>
                </svg>
              </div>
              <span
                className="font-serif text-xl font-medium tracking-wide"
                style={{ color: "#6B1810" }}
              >
                Suneetha Bhoomike
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-[0.8125rem] font-medium tracking-wide transition-colors duration-250"
                  style={{ color: "#7B6362" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#6B1810";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#7B6362";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/register"
                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[0.8125rem] font-semibold tracking-wide text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #E09030 0%, #C97820 100%)",
                  boxShadow: "0 2px 12px rgba(201,120,32,0.22)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(201,120,32,0.35)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(201,120,32,0.22)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Register Online
              </Link>
              {/* Hamburger */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-0.5 origin-center transition-all"
                  style={{ background: "#6B1810" }}
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-5 h-0.5"
                  style={{ background: "#6B1810" }}
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block w-5 h-0.5 origin-center transition-all"
                  style={{ background: "#6B1810" }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{
              background: "rgba(248,243,240,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl font-light transition-colors duration-200"
                  style={{ color: "#6B1810" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
            >
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold mt-4 transition-all"
                style={{
                  background: "linear-gradient(135deg, #E09030 0%, #C97820 100%)",
                }}
              >
                Register Online
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
