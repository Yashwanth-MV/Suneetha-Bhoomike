"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

/* ─── Card data ─── */
const featured = {
  label: "Our Story",
  title: "Meet Our Founder",
  description:
    "Bhoomika Koundinya founded Suneetha Bhoomike to share the transformative power of Carnatic music. With over 15 years of teaching experience and a deep reverence for tradition, she guides every student through a personal journey — building confidence, discipline, and a lifelong love for music.",
  cta: "Meet the Founder",
  href: "#teachers",
  image: "/images/founder_new.jpg",
};

const cards = [
  {
    label: "Learning",
    title: "Learn & Grow Together",
    description:
      "Our classes blend structured Carnatic training with a warm, supportive environment. Students of all ages develop technique, raga knowledge, and musical confidence through personalized guidance.",
    cta: "View Student Stories",
    href: "#classes",
    image: "/images/learn_grow.jpg",
  },
  {
    label: "Performance",
    title: "Moments On Stage",
    description:
      "From intimate recitals to our annual Naadotsava showcase, students experience the thrill of performing. These milestones build artistry and celebrate the beauty of shared music.",
    cta: "Explore Performances",
    href: "#schedule",
    image: "/images/performance.jpg",
  },
];

/* ─── Animation presets ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: "#F8F3F0", padding: "8rem 0 9rem" }}
    >
      {/* Faint music decorations */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <text x="80" y="160" fontFamily="serif" fontSize="120" fill="#C9A84C" opacity="0.025" style={{ userSelect: "none" }}>𝄞</text>
        <text x="1280" y="780" fontFamily="serif" fontSize="52" fill="#7C1410" opacity="0.03" style={{ userSelect: "none" }}>♩</text>
        {[620, 638, 656, 674, 692].map((y, i) => (
          <line key={i} x1="40" y1={y} x2="400" y2={y} stroke="#C9A84C" strokeWidth="0.6" opacity="0.03" />
        ))}
      </svg>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-20 max-w-2xl">
          <motion.div
            {...(inView ? fadeUp(0) : { initial: { opacity: 0, y: 28 } })}
            className="flex items-center gap-3 mb-6"
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
              About Us
            </span>
          </motion.div>

          <motion.h2
            {...(inView ? fadeUp(0.08) : { initial: { opacity: 0, y: 28 } })}
            className="font-serif font-light leading-[1.06] mb-6"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              color: "#5C120D",
              letterSpacing: "-0.01em",
            }}
          >
            Get to{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(115deg, #C9A84C 0%, #E4BD60 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              know us
            </em>
          </motion.h2>

          <motion.p
            {...(inView ? fadeUp(0.14) : { initial: { opacity: 0, y: 28 } })}
            className="font-light leading-[1.8]"
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.0625rem)",
              color: "#8A6F6B",
              maxWidth: "52ch",
            }}
          >
            Suneetha Bhoomike was created to nurture a love for music, culture, and performance. What began as a small learning circle has grown into a vibrant community of passionate students and families.
          </motion.p>
        </div>

        {/* ── Asymmetric card grid ── */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Featured large card — spans full height on desktop */}
          <motion.div
            {...(inView ? fadeUp(0.2) : { initial: { opacity: 0, y: 28 } })}
            className="lg:row-span-2"
          >
            <Link href={featured.href} className="group block h-full">
              <div
                className="relative h-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_12px_48px_rgba(124,20,16,0.1)] group-hover:-translate-y-1"
                style={{
                  borderRadius: "1.25rem",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 6px 18px rgba(124,20,16,0.05)",
                  background: "#FFFFFF",
                  minHeight: "36rem",
                }}
              >
                {/* Image — takes ~60% height */}
                <div className="relative overflow-hidden" style={{ height: "58%" }}>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(255,255,255,0.15) 0%, transparent 40%)" }}
                  />
                </div>

                {/* Text content */}
                <div className="p-8 lg:p-10 flex flex-col justify-between" style={{ height: "42%" }}>
                  <div>
                    <span
                      className="font-medium mb-3 block"
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase" as const,
                        color: "#C9A84C",
                      }}
                    >
                      {featured.label}
                    </span>
                    <h3
                      className="font-serif font-light mb-4 transition-colors duration-300 group-hover:text-[#922019]"
                      style={{ fontSize: "1.75rem", color: "#5C120D", lineHeight: 1.2 }}
                    >
                      {featured.title}
                    </h3>
                    <p
                      className="font-light leading-[1.7]"
                      style={{ fontSize: "0.9rem", color: "#8A6F6B", maxWidth: "44ch" }}
                    >
                      {featured.description}
                    </p>
                  </div>

                  <div
                    className="flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-3 mt-6"
                    style={{ fontSize: "0.85rem", color: "#6B1810" }}
                  >
                    <span>{featured.cta}</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Two smaller cards stacked */}
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              {...(inView ? fadeUp(0.28 + i * 0.1) : { initial: { opacity: 0, y: 28 } })}
            >
              <Link href={card.href} className="group block h-full">
                <div
                  className="relative h-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_10px_40px_rgba(124,20,16,0.08)] group-hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 6px 18px rgba(124,20,16,0.05)",
                    background: "#FFFFFF",
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "13rem" }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-7 lg:p-8">
                    <span
                      className="font-medium mb-2.5 block"
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase" as const,
                        color: "#C9A84C",
                      }}
                    >
                      {card.label}
                    </span>
                    <h3
                      className="font-serif font-light mb-3 transition-colors duration-300 group-hover:text-[#922019]"
                      style={{ fontSize: "1.4rem", color: "#5C120D", lineHeight: 1.2 }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="font-light leading-[1.7] mb-5"
                      style={{ fontSize: "0.85rem", color: "#8A6F6B" }}
                    >
                      {card.description}
                    </p>

                    <div
                      className="flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-3"
                      style={{ fontSize: "0.825rem", color: "#6B1810" }}
                    >
                      <span>{card.cta}</span>
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
