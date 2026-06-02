"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#F8F3F0" }}
    >
      {/* ── Seamless warm radial tones ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 70% 75% at 68% 48%, rgba(201,168,76,0.06) 0%, transparent 65%)",
            "radial-gradient(ellipse 50% 55% at 22% 35%, rgba(124,20,16,0.035) 0%, transparent 60%)",
            "radial-gradient(ellipse 40% 45% at 80% 80%, rgba(233,147,50,0.04) 0%, transparent 55%)",
          ].join(", "),
        }}
      />

      {/* ── Musical motifs at 3–5% opacity ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        {/* Staff lines — faint, upper-right */}
        {[310, 328, 346, 364, 382].map((y, i) => (
          <line key={i} x1="780" y1={y} x2="1400" y2={y} stroke="#7C1410" strokeWidth="0.7" opacity="0.035" />
        ))}
        {/* Treble clef */}
        <text x="800" y="420" fontFamily="serif" fontSize="140" fill="#C9A84C" opacity="0.025" style={{ userSelect: "none" }}>𝄞</text>
        {/* Scattered notes */}
        <text x="1300" y="240" fontFamily="serif" fontSize="56" fill="#7C1410" opacity="0.035" style={{ userSelect: "none" }}>♩</text>
        <text x="60" y="720" fontFamily="serif" fontSize="42" fill="#C9A84C" opacity="0.03" style={{ userSelect: "none" }}>♪</text>
        <text x="30" y="180" fontFamily="serif" fontSize="32" fill="#7C1410" opacity="0.025" style={{ userSelect: "none" }}>♫</text>
        {/* Ornamental arc */}
        <path d="M 1360 620 Q 1410 520 1370 420" stroke="#C9A84C" strokeWidth="1" opacity="0.04" fill="none" />
      </svg>

      {/* ── Content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 xl:gap-20 items-center py-24 lg:py-40">

        {/* ═══ LEFT COLUMN: Text ═══ */}
        <motion.div
          style={{ y: textY, opacity: fadeOut }}
          className="flex flex-col items-start order-last lg:order-first"
        >
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 mb-10"
          >
            <span
              className="block h-px w-10"
              style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0))" }}
            />
            <span
              className="font-medium"
              style={{
                fontSize: "0.625rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase" as const,
                color: "#A0826A",
              }}
            >
              Suneetha Bhoomike
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-light leading-[1.03] mb-9"
            style={{
              fontSize: "clamp(2.75rem, 5.2vw, 4.75rem)",
              color: "#5C120D",
              letterSpacing: "-0.015em",
            }}
          >
            Where tradition
            <br />
            meets{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(115deg, #C9A84C 0%, #E4BD60 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              musical excellence
            </em>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42 }}
            className="font-light leading-[1.8] mb-14"
            style={{
              fontSize: "clamp(0.975rem, 1.5vw, 1.1rem)",
              color: "#8A6F6B",
              maxWidth: "36ch",
            }}
          >
            Join a community of passionate learners. Personalized training for children and adults in Carnatic vocal, devotional music, and instruments.
          </motion.p>

          {/* CTA pair */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/register"
              id="hero-cta-primary"
              className="group relative inline-flex items-center gap-3 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.02em",
                padding: "1rem 2.25rem",
                background: "linear-gradient(135deg, #E09030 0%, #C97820 100%)",
                boxShadow: "0 4px 24px rgba(201,120,32,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <span className="relative z-10">Start Your Musical Journey</span>
              <svg className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
            </Link>

            <Link
              href="#programs"
              id="hero-cta-secondary"
              className="inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 hover:bg-[rgba(124,20,16,0.04)] hover:border-[rgba(124,20,16,0.28)]"
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.02em",
                padding: "1rem 2.25rem",
                color: "#6B1810",
                border: "1px solid rgba(124,20,16,0.15)",
              }}
            >
              View Courses
            </Link>
          </motion.div>
        </motion.div>

        {/* ═══ RIGHT COLUMN: Image ═══ */}
        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full order-first lg:order-last"
        >
          {/* Ambient warm glow behind photo */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: "-2.5rem -2rem",
              borderRadius: "2.5rem",
              background: "radial-gradient(ellipse at 55% 50%, rgba(201,168,76,0.11) 0%, rgba(233,147,50,0.05) 45%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />

          {/* Photo */}
          <motion.div
            style={{ y: imageY }}
            className="relative overflow-hidden"
            // @ts-expect-error motion style
            css={{
              borderRadius: "1.25rem",
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "1.25rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 6px 16px rgba(124,20,16,0.06), 0 24px 56px rgba(124,20,16,0.09)",
              }}
            >
              <img
                src="/images/hero.jpg"
                alt="Student performance at Suneetha Bhoomike academy"
                className="w-full block object-cover"
                style={{ aspectRatio: "4 / 3" }}
              />

              {/* Inner vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(50,8,6,0.32) 0%, transparent 40%)",
                }}
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-7 py-5">
                <p
                  className="font-serif italic font-light"
                  style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.78)", letterSpacing: "0.02em" }}
                >
                  Naadotsava — Annual Student Showcase
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(124,20,16,0.3), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
