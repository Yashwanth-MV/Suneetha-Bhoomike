"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background image of a music school */}
          <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
            <img
              src="https://images.pexels.com/photos/1645043/pexels-photo-1645043.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Music School"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(124,20,16,0.15)_0%,transparent_65%)]" />
          </motion.div>

          {/* Border glow */}
          <div className="absolute inset-0 border border-[#BDA291]/20 rounded-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 py-24 px-8 md:px-16 lg:px-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center text-left">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="section-label !text-[#E99332]">Start Today</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 max-w-xl"
              >
                Begin your{" "}
                <span className="italic text-gold-gradient">musical journey</span>
                {" "}today
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-white/80 text-base max-w-md leading-relaxed mb-10 font-light"
              >
                Join the Suneetha Bhoomike family and discover the joy of music, expression, and cultural learning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link
                  href="/register"
                  id="register"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E99332] text-white border border-[#E99332] font-semibold text-sm hover:bg-[#D87F22] hover:border-[#D87F22] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(233,147,50,0.35)] hover:scale-105"
                >
                  Register Online
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="#classes"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-sm hover:border-white/40 hover:text-white transition-all duration-300"
                >
                  Explore Classes
                </Link>
              </motion.div>
            </div>

            {/* Right side framed details card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block bg-dark-3/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-sm ml-auto w-full"
            >
              <h3 className="font-serif text-xl font-light text-cream mb-4">Admissions Open</h3>
              <p className="text-cream/50 text-xs leading-relaxed mb-6 font-light">
                We welcome students of all ages and skill levels. Speak with our founder or register online to begin.
              </p>
              <div className="space-y-3 pt-6 border-t border-white/10">
                {[
                  { icon: "✓", text: "Expert Mentorship" },
                  { icon: "✓", text: "Performance Opportunities" },
                  { icon: "✓", text: "All Age Groups" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-cream/70 text-xs">
                    <span className="text-gold text-sm font-semibold">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
