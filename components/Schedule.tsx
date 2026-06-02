"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const schedule = [
  {
    day: "Naadotsava",
    time: "Annual",
    class: "ಸುನೀತಭೂಮಿಕೆಯ ಮೊದಲ ಹಬ್ಬ ನಾದೋತ್ಸವ",
    teacher: "Suneetha Bhoomike",
    level: "All levels",
    image: "",
    description: "The grand annual celebration of music and arts by Suneetha Bhoomike, showcasing talented students and local musical culture.",
  },
  {
    day: "Workshops",
    time: "Monthly",
    class: "Music & Culture Workshop",
    teacher: "Bhoomika Koundinya",
    level: "Intermediate",
    image: "",
    description: "Interactive monthly workshop exploring classical rhythms, expression, and cultural depth in Indian classical music.",
  },
  {
    day: "Performances",
    time: "Seasonal",
    class: "Student Showcases",
    teacher: "Suneetha Bhoomike",
    level: "All levels",
    image: "",
    description: "A platform for students to overcome stage fright, present their learning, and celebrate music with their families.",
  },
  {
    day: "Community",
    time: "Weekly",
    class: "Group Singing Sessions",
    teacher: "Bhoomika Koundinya",
    level: "Beginner",
    image: "",
    description: "Gather with community members to sing together, learn traditional songs, and share musical joy without any judgment.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Schedule() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Annual", "Monthly", "Weekly"];
  const filteredSchedule =
    activeFilter === "All"
      ? schedule
      : schedule.filter((item) => item.time === activeFilter);

  return (
    <section
      id="schedule"
      className="relative overflow-hidden"
      style={{ background: "#FFFBF7", padding: "7rem 0 8rem" }}
    >
      {/* Faint decoration */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <text x="1300" y="720" fontFamily="serif" fontSize="64" fill="#C9A84C" opacity="0.025" style={{ userSelect: "none" }}>♫</text>
      </svg>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-14">
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
              Events & Celebrations
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.h2
                {...(inView ? fadeUp(0.08) : { initial: { opacity: 0, y: 28 } })}
                className="font-serif font-light leading-[1.06] mb-4"
                style={{
                  fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                  color: "#5C120D",
                  letterSpacing: "-0.01em",
                }}
              >
                Upcoming{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    background: "linear-gradient(115deg, #C9A84C 0%, #E4BD60 50%, #C9A84C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  events
                </em>
              </motion.h2>

              <motion.p
                {...(inView ? fadeUp(0.14) : { initial: { opacity: 0, y: 28 } })}
                className="font-light leading-[1.8]"
                style={{
                  fontSize: "clamp(0.95rem, 1.4vw, 1.0625rem)",
                  color: "#8A6F6B",
                  maxWidth: "42ch",
                }}
              >
                Join our musical celebrations, workshops, and community gatherings.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <motion.div
          {...(inView ? fadeUp(0.18) : { initial: { opacity: 0, y: 28 } })}
          className="flex flex-wrap items-center justify-start gap-2.5 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
              style={{
                padding: "0.6rem 1.4rem",
                borderRadius: "9999px",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                border: `1px solid ${activeFilter === filter ? "#7C1410" : "#D4C4B8"}`,
                background: activeFilter === filter ? "#7C1410" : "rgba(255,255,255,0.6)",
                color: activeFilter === filter ? "#FFFFFF" : "#7B6362",
                boxShadow: activeFilter === filter ? "0 4px 15px rgba(124,20,16,0.15)" : "none",
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSchedule.map((item, i) => (
            <motion.div
              key={item.day}
              {...(inView ? fadeUp(0.22 + i * 0.08) : { initial: { opacity: 0, y: 28 } })}
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
                    className="relative overflow-hidden mb-5 sm:mb-0 sm:mr-6 flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: "100%",
                      aspectRatio: "4 / 3",
                      borderRadius: "1rem",
                      background: item.image ? "transparent" : "linear-gradient(135deg, #F0E6DD 0%, #E2D4C6 100%)",
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.day}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="font-serif text-[#C9A84C] opacity-40 transition-transform duration-700 group-hover:scale-110" style={{ fontSize: "6rem" }}>
                        {item.day.charAt(0)}
                      </div>
                    )}
                  </div>

                {/* Text */}
                <div className="p-5">
                  <h3
                    className="font-serif font-light mb-1.5 transition-colors duration-300 group-hover:text-[#922019]"
                    style={{ fontSize: "1.1rem", color: "#5C120D", lineHeight: 1.25 }}
                  >
                    {item.class}
                  </h3>
                  <p style={{ fontSize: "0.7rem", color: "#A0826A", marginBottom: "0.5rem" }}>
                    Hosted by {item.teacher}
                  </p>
                  <p
                    className="font-light leading-[1.7]"
                    style={{ fontSize: "0.78rem", color: "#8A6F6B", marginBottom: "1rem" }}
                  >
                    {item.description}
                  </p>

                  <div
                    className="flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-3 pt-3 whitespace-nowrap"
                    style={{ borderTop: "1px solid #F0E8E2", fontSize: "0.75rem", color: "#6B1810" }}
                  >
                    <span>Explore Details</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
