"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const achievements = [
  {
    id: 1,
    student: "Tejaswini",
    achievement: "Best Singer Recognition",
    url: "",
    description: "Honored with the prestigious Best Singer award at the annual district vocal showcase.",
  },
  {
    id: 2,
    student: "Shraddha",
    achievement: "Classical Performance",
    url: "",
    description: "A mesmerizing Carnatic vocal recital performance during the Naadotsava festival.",
  },
  {
    id: 3,
    student: "Aditi",
    achievement: "Violin Solo Performance",
    url: "",
    description: "Performed a flawless solo violin recital for the community cultural gathering.",
  },
  {
    id: 4,
    student: "Rahul & Group",
    achievement: "Ensemble Performance",
    url: "",
    description: "Energetic student instrumental band performance showcasing collaborative rhythm and harmony.",
  },
  {
    id: 5,
    student: "Meera",
    achievement: "Light Music Showcase",
    url: "",
    description: "Celebrated for her expressive delivery in the regional Sugama Sangeetha competition.",
  },
  {
    id: 6,
    student: "Karthik",
    achievement: "Piano Recital",
    url: "",
    description: "Successfully completed her advanced level piano presentation with outstanding honors.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F4EDE8", padding: "7rem 0 8rem" }}
    >
      {/* Faint decoration */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <text x="100" y="120" fontFamily="serif" fontSize="90" fill="#C9A84C" opacity="0.02" style={{ userSelect: "none" }}>♩</text>
        <text x="1280" y="680" fontFamily="serif" fontSize="70" fill="#7C1410" opacity="0.02" style={{ userSelect: "none" }}>𝄞</text>
      </svg>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header — centered */}
        <div className="mb-16 text-center">
          <motion.div
            {...(inView ? fadeUp(0) : { initial: { opacity: 0, y: 28 } })}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span
              className="block h-px w-8"
              style={{ background: "linear-gradient(270deg, #C9A84C, rgba(201,168,76,0))" }}
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
              Achievements
            </span>
            <span
              className="block h-px w-8"
              style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0))" }}
            />
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
            Student{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(115deg, #C9A84C 0%, #E4BD60 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              achievements
            </em>
          </motion.h2>

          <motion.p
            {...(inView ? fadeUp(0.14) : { initial: { opacity: 0, y: 28 } })}
            className="font-light leading-[1.8] mx-auto"
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.0625rem)",
              color: "#8A6F6B",
              maxWidth: "48ch",
            }}
          >
            Celebrating the milestones, awards, and beautiful performances of our dedicated student community.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              {...(inView ? fadeUp(0.2 + i * 0.08) : { initial: { opacity: 0, y: 28 } })}
              className="group"
            >
              <div
                className="relative h-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_10px_40px_rgba(124,20,16,0.08)] group-hover:-translate-y-1"
                style={{
                  borderRadius: "1.25rem",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 6px 18px rgba(124,20,16,0.04)",
                  background: "#FFFFFF",
                }}
              >
                {/* Image */}
                <div
                  className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center m-6"
                  style={{
                    background: item.url ? "transparent" : "linear-gradient(135deg, #F0E6DD 0%, #E2D4C6 100%)",
                  }}
                >
                  {item.url ? (
                    <img
                      src={item.url}
                      alt={item.student}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="font-serif text-[#C9A84C] opacity-60 text-2xl">
                      {item.student.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 pt-0">
                  <span
                    className="font-medium mb-2 block"
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase" as const,
                      color: "#C9A84C",
                    }}
                  >
                    {item.achievement}
                  </span>
                  <h3
                    className="font-serif font-light mb-2 transition-colors duration-300 group-hover:text-[#922019]"
                    style={{ fontSize: "1.25rem", color: "#5C120D", lineHeight: 1.2 }}
                  >
                    {item.student}
                  </h3>
                  <p
                    className="font-light leading-[1.7]"
                    style={{ fontSize: "0.85rem", color: "#8A6F6B" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
