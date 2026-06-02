"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: "500+", label: "Students Enrolled", icon: "🎓" },
  { num: "50+", label: "Classes Available", icon: "🎵" },
  { num: "15+", label: "Expert Instructors", icon: "🎤" },
  { num: "10+", label: "Years of Excellence", icon: "🏆" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 bg-dark-3 border-y border-white/8 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="font-serif text-4xl md:text-5xl font-light text-cream mb-2 group-hover:text-gold-light transition-colors duration-300">
                {stat.num}
              </div>
              <div className="text-cream/40 text-xs uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
