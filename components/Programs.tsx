"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    id: "carnatic-sugama-sangeetha",
    title: "Carnatic & Sugama Sangeetha",
    description:
      "Immerse yourself in our rich cultural heritage through structured Carnatic and Sugama Sangeetha classes for all ages.",
    image:
      "https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#classes",
  },
  {
    id: "instrumental-training",
    title: "Instrumental Classes",
    description:
      "Master your instrument of choice with expert guidance. We offer comprehensive training in Piano, Guitar, Violin, and Drums.",
    image:
      "https://images.pexels.com/photos/462442/pexels-photo-462442.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#classes",
  },
  {
    id: "vocal-singing",
    title: "Vocal & Singing",
    description:
      "Develop your voice, breath control, and expression. Join our community of singers and discover your true potential.",
    image:
      "https://images.pexels.com/photos/7520744/pexels-photo-7520744.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#classes",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

function ProgramCard({
  program,
  index,
  inView,
}: {
  program: (typeof programs)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      {...(inView ? fadeUp(0.2 + index * 0.12) : { initial: { opacity: 0, y: 28 } })}
      className="group"
    >
      <Link href={program.href} className="block h-full">
        <div
          className="relative h-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_10px_40px_rgba(124,20,16,0.08)] group-hover:-translate-y-1"
          style={{
            borderRadius: "1.25rem",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.03), 0 6px 18px rgba(124,20,16,0.05)",
            background: "#FFFFFF",
          }}
        >
          {/* Image */}
          <div className="relative overflow-hidden" style={{ height: "14rem" }}>
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 40%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="p-7 lg:p-8">
            <h3
              className="font-serif font-light mb-3 transition-colors duration-300 group-hover:text-[#922019]"
              style={{ fontSize: "1.4rem", color: "#5C120D", lineHeight: 1.2 }}
            >
              {program.title}
            </h3>
            <p
              className="font-light leading-[1.7] mb-5"
              style={{ fontSize: "0.85rem", color: "#8A6F6B" }}
            >
              {program.description}
            </p>

            <div
              className="flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-3"
              style={{ fontSize: "0.825rem", color: "#6B1810" }}
            >
              <span>Explore Classes</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="programs"
      className="relative overflow-hidden"
      style={{ background: "#FFFBF7", padding: "7rem 0 8rem" }}
    >
      {/* Faint music decorations */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <text x="1260" y="140" fontFamily="serif" fontSize="100" fill="#C9A84C" opacity="0.02" style={{ userSelect: "none" }}>♪</text>
        {[380, 398, 416, 434, 452].map((y, i) => (
          <line key={i} x1="1050" y1={y} x2="1400" y2={y} stroke="#C9A84C" strokeWidth="0.5" opacity="0.025" />
        ))}
      </svg>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <motion.div
            {...(inView ? fadeUp(0) : { initial: { opacity: 0, y: 28 } })}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="block h-px w-10"
              style={{
                background:
                  "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0))",
              }}
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
              Our Courses
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
            Discover your{" "}
            <em
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(115deg, #C9A84C 0%, #E4BD60 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              musical
            </em>{" "}
            potential
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
            Explore our diverse range of courses designed to foster artistic
            growth and community engagement for students of all ages.
          </motion.p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, i) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
