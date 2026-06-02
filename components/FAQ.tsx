"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What age groups do you teach?",
    a: "We welcome students from age 5 through adult. Our curriculum is tailored to each age group, ensuring that every student receives instruction appropriate for their developmental stage and musical goals.",
  },
  {
    q: "Do I need my own instrument?",
    a: "Not at first. We provide instruments for use during lessons and in our practice rooms. We recommend purchasing your own instrument once you're committed to a specific instrument, and we're happy to advise on the best options for your budget.",
  },
  {
    q: "How are lessons structured?",
    a: "Each private lesson is 45 or 60 minutes. We begin with technique and warm-ups, move into repertoire study, and close with theory or ear training. Group classes follow a similar structure with more ensemble work.",
  },
  {
    q: "Can I switch instruments or instructors?",
    a: "Absolutely. We understand that musical journeys evolve. You can switch instruments or request a different instructor at any time — just speak with our enrollment team and we'll arrange it seamlessly.",
  },
  {
    q: "Are there performance opportunities?",
    a: "Yes. We host seasonal recitals, informal showcases, and ensemble performances throughout the year. Performance experience is woven into all our programs, not just reserved for advanced students.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Lessons cancelled with at least 24 hours' notice can be rescheduled at no cost. Late cancellations or no-shows are charged at the full lesson rate. We do make exceptions for genuine emergencies.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

function FaqItem({ item, index, inView }: { item: (typeof faqs)[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      {...(inView ? fadeUp(0.1 + index * 0.06) : { initial: { opacity: 0, y: 28 } })}
      style={{ borderBottom: `1px solid ${open ? "rgba(201,168,76,0.25)" : "#E8DDD6"}` }}
      className="transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
      >
        <span
          className="font-serif font-light transition-colors duration-300"
          style={{
            fontSize: "1.1rem",
            color: open ? "#5C120D" : "#6B4E4A",
          }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
          style={{
            width: "1.75rem",
            height: "1.75rem",
            borderRadius: "50%",
            border: `1px solid ${open ? "rgba(201,168,76,0.4)" : "#D4C4B8"}`,
            background: open ? "rgba(201,168,76,0.08)" : "transparent",
          }}
        >
          <svg
            className="w-3 h-3 transition-colors duration-300"
            viewBox="0 0 12 12"
            fill="none"
            style={{ color: open ? "#C9A84C" : "#A0826A" }}
          >
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="font-light leading-[1.8] pb-6"
              style={{ fontSize: "0.9rem", color: "#8A6F6B", maxWidth: "56ch" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
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
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <text x="1280" y="140" fontFamily="serif" fontSize="72" fill="#7C1410" opacity="0.02" style={{ userSelect: "none" }}>?</text>
      </svg>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
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
                FAQ
              </span>
            </motion.div>

            <motion.h2
              {...(inView ? fadeUp(0.08) : { initial: { opacity: 0, y: 28 } })}
              className="font-serif font-light leading-[1.06] mb-5"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "#5C120D",
                letterSpacing: "-0.01em",
              }}
            >
              Your questions,{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(115deg, #C9A84C 0%, #E4BD60 50%, #C9A84C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                answered
              </em>
            </motion.h2>

            <motion.p
              {...(inView ? fadeUp(0.14) : { initial: { opacity: 0, y: 28 } })}
              className="font-light leading-[1.8] mb-8"
              style={{
                fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
                color: "#8A6F6B",
              }}
            >
              Can&apos;t find what you need? Reach out to us directly and we&apos;ll be happy to help.
            </motion.p>

            <motion.a
              href="mailto:suneethabhoomike@gmail.com"
              {...(inView ? fadeUp(0.2) : { initial: { opacity: 0, y: 28 } })}
              className="inline-flex items-center gap-2 font-medium group transition-colors duration-300"
              style={{ fontSize: "0.85rem", color: "#6B1810" }}
            >
              Contact us
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>

          {/* Right — FAQ items */}
          <div style={{ borderTop: "1px solid #E0D4CC" }}>
            {faqs.map((item, i) => (
              <FaqItem key={i} item={item} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
