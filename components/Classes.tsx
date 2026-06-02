"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const classes = [
  {
    id: "carnatic-vocal",
    title: "Carnatic Vocal",
    duration: "Ongoing",
    description: "Traditional classical music learning with emphasis on shruti and laya.",
    thumbnail: "",
  },
  {
    id: "sugama-sangeetha",
    title: "Sugama Sangeetha",
    duration: "Ongoing",
    description: "Explore the beauty of light music and Bhavageethe.",
    thumbnail: "",
  },
  {
    id: "piano-keyboard",
    title: "Piano & Keyboard",
    duration: "Ongoing",
    description: "Learn keyboard techniques and contemporary playing styles.",
    thumbnail: "",
  },
  {
    id: "guitar",
    title: "Guitar",
    duration: "Ongoing",
    description: "Master chords, strumming, and fingerstyle techniques.",
    thumbnail: "",
  },
  {
    id: "violin",
    title: "Violin",
    duration: "Ongoing",
    description: "Develop bowing techniques and expressive playing.",
    thumbnail: "",
  },
  {
    id: "drums",
    title: "Drums",
    duration: "Ongoing",
    description: "Build rhythm, timing, and percussive skills.",
    thumbnail: "",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Classes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="classes"
      className="relative overflow-hidden"
      style={{ background: "#F4EDE8", padding: "7rem 0 8rem" }}
    >
      {/* Faint decorative elements */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <text x="60" y="700" fontFamily="serif" fontSize="80" fill="#7C1410" opacity="0.02" style={{ userSelect: "none" }}>𝄞</text>
      </svg>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
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
                Our Classes
              </span>
            </motion.div>

            <motion.h2
              {...(inView ? fadeUp(0.08) : { initial: { opacity: 0, y: 28 } })}
              className="font-serif font-light leading-[1.06] mb-5"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                color: "#5C120D",
                letterSpacing: "-0.01em",
              }}
            >
              Choose your{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(115deg, #C9A84C 0%, #E4BD60 50%, #C9A84C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                class
              </em>
            </motion.h2>

            <motion.p
              {...(inView ? fadeUp(0.14) : { initial: { opacity: 0, y: 28 } })}
              className="font-light leading-[1.8]"
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.0625rem)",
                color: "#8A6F6B",
                maxWidth: "48ch",
              }}
            >
              These classes deliver a balanced music education and welcome students at every skill level.
            </motion.p>
          </div>

          <motion.div {...(inView ? fadeUp(0.2) : { initial: { opacity: 0, y: 28 } })}>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 transition-all duration-300"
              style={{
                padding: "0.7rem 1.6rem",
                borderRadius: "9999px",
                border: "1px solid #D4C4B8",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "#6B1810",
                background: "rgba(255,255,255,0.6)",
              }}
            >
              View All
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.id}
              {...(inView ? fadeUp(0.2 + i * 0.08) : { initial: { opacity: 0, y: 28 } })}
            >
              <Link href="/register" className="group block h-full">
                <div
                  className="relative h-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_10px_40px_rgba(124,20,16,0.08)] group-hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 6px 18px rgba(124,20,16,0.04)",
                    background: "#FFFFFF",
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    className="relative overflow-hidden flex items-center justify-center"
                    style={{
                      height: "12rem",
                      background: cls.thumbnail ? "transparent" : "linear-gradient(135deg, #F0E6DD 0%, #E2D4C6 100%)",
                    }}
                  >
                    {cls.thumbnail ? (
                      <img
                        src={cls.thumbnail}
                        alt={cls.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="font-serif text-[#C9A84C] opacity-40 transition-transform duration-700 group-hover:scale-110" style={{ fontSize: "5rem" }}>
                        {cls.title.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3
                        className="font-serif font-light transition-colors duration-300 group-hover:text-[#922019]"
                        style={{ fontSize: "1.25rem", color: "#5C120D", lineHeight: 1.2 }}
                      >
                        {cls.title}
                      </h3>
                      <div
                        className="flex-shrink-0 ml-3 flex items-center justify-center transition-all duration-300 group-hover:bg-[rgba(201,168,76,0.1)]"
                        style={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                          border: "1px solid #E2D9D4",
                        }}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" style={{ color: "#A0826A" }}>
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    <p
                      className="font-light leading-[1.7] mb-4"
                      style={{ fontSize: "0.825rem", color: "#8A6F6B", minHeight: "2.8rem" }}
                    >
                      {cls.description}
                    </p>

                    <div
                      className="flex items-center gap-2 pt-4"
                      style={{ borderTop: "1px solid #F0E8E2" }}
                    >
                      <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#B8A090" }}>
                        Duration:
                      </span>
                      <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#6B1810" }}>
                        {cls.duration}
                      </span>
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
