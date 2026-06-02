"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const teachers = [
  {
    id: 1,
    name: "Bhoomika Koundinya",
    role: "Founder & Vocal Instructor",
    image: "/images/founder_new.jpg",
    bio: "Guiding students through cultural music learning and fostering a supportive music community.",
    instagram: "https://www.instagram.com/suneethabhoomike/",
  },
  {
    id: 2,
    name: "Suneetha Bhoomike Team",
    role: "Community Mentors",
    image: "/images/founder_new.jpg",
    bio: "Dedicated to ensuring an inclusive, inspiring, and enriching environment for all age groups.",
    instagram: "https://www.instagram.com/suneethabhoomike/",
  },
  {
    id: 3,
    name: "Guest Artists",
    role: "Collaborators & Experts",
    image: "/images/learn_grow.jpg",
    bio: "Renowned musicians occasionally join us to lead workshops and special events like Naadotsava.",
    instagram: "https://www.instagram.com/suneethabhoomike/",
  },
  {
    id: 4,
    name: "Senior Students",
    role: "Peer Mentors",
    image: "/images/performance.jpg",
    bio: "Our experienced students perform and mentor beginners, showing true community spirit.",
    instagram: "https://www.instagram.com/suneethabhoomike/",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Teachers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="teachers"
      className="relative overflow-hidden"
      style={{ background: "#FFFBF7", padding: "7rem 0 8rem" }}
    >
      {/* Faint decoration */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        {[200, 218, 236, 254, 272].map((y, i) => (
          <line key={i} x1="60" y1={y} x2="350" y2={y} stroke="#C9A84C" strokeWidth="0.5" opacity="0.025" />
        ))}
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
                Community
              </span>
            </motion.div>

            <motion.h2
              {...(inView ? fadeUp(0.08) : { initial: { opacity: 0, y: 28 } })}
              className="font-serif font-light leading-[1.06]"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                color: "#5C120D",
                letterSpacing: "-0.01em",
              }}
            >
              Meet our{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(115deg, #C9A84C 0%, #E4BD60 50%, #C9A84C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                community
              </em>
              <br />
              leaders
            </motion.h2>
          </div>

          <motion.p
            {...(inView ? fadeUp(0.14) : { initial: { opacity: 0, y: 28 } })}
            className="font-light leading-[1.8]"
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.0625rem)",
              color: "#8A6F6B",
              maxWidth: "32ch",
            }}
          >
            Our leaders are practicing musicians who bring professional experience and genuine passion into every community gathering.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-5 lg:gap-7">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.id}
              {...(inView ? fadeUp(0.2 + i * 0.1) : { initial: { opacity: 0, y: 28 } })}
              className="group"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden mb-4"
                style={{
                  aspectRatio: "3 / 4",
                  borderRadius: "1.25rem",
                  boxShadow: "0 4px 16px rgba(124,20,16,0.06)",
                }}
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-70"
                  style={{
                    background: "linear-gradient(to top, rgba(92,18,13,0.35) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Info */}
              <h3
                className="font-serif font-light transition-colors duration-300 group-hover:text-[#922019]"
                style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", color: "#5C120D", lineHeight: 1.3 }}
              >
                {teacher.name}
              </h3>
              <p
                className="font-medium mt-1"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "#A0826A",
                }}
              >
                {teacher.role}
              </p>
              <p
                className="font-light leading-[1.7] mt-2.5 hidden sm:block"
                style={{ fontSize: "0.825rem", color: "#8A6F6B" }}
              >
                {teacher.bio}
              </p>

              {teacher.instagram && (
                <Link
                  href={teacher.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/ig inline-flex items-center gap-2 mt-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.04em",
                    padding: "0.45rem 0.9rem",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "#8A6F6B",
                    background: "rgba(255,251,247,0.8)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.border = "1px solid transparent";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,251,247,0.8)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#8A6F6B";
                    (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(201,168,76,0.2)";
                  }}
                >
                  {/* Instagram icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 group-hover/ig:rotate-12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="hidden sm:inline">Follow</span>
                  <span className="sm:hidden">Follow</span>
                  {/* Arrow */}
                  <svg
                    viewBox="0 0 10 10"
                    fill="none"
                    className="w-2.5 h-2.5 flex-shrink-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover/ig:opacity-100 group-hover/ig:translate-x-0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1.5 5h7M5.5 2L8.5 5l-3 3" />
                  </svg>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
