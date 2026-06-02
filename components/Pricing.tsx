"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    id: "carnatic",
    name: "Carnatic Music",
    description: "Traditional vocal and instrumental training for a strong cultural foundation.",
    features: [
      "Vocal training",
      "Rhythm and Laya",
      "Group singing sessions",
      "Performance opportunities",
    ],
    cta: "Enroll Now",
    highlighted: false,
  },
  {
    id: "instruments",
    name: "Western Instruments",
    description: "Master modern and classical instruments with our expert community.",
    features: [
      "Piano & Keyboard",
      "Guitar mastery",
      "Violin techniques",
      "Drums and percussion",
    ],
    cta: "Enroll Now",
    highlighted: true,
  },
  {
    id: "sugama",
    name: "Sugama Sangeetha",
    description: "Explore light music and Bhavageethe in a supportive environment.",
    features: [
      "Light music fundamentals",
      "Expressive singing",
      "Cultural celebrations",
      "Community gatherings",
    ],
    cta: "Enroll Now",
    highlighted: false,
  },
];

function CheckIcon({ highlighted }: { highlighted: boolean }) {
  return (
    <svg 
      className="w-4 h-4 flex-shrink-0" 
      style={{ color: highlighted ? "#FFFFFF" : "#C9A84C" }}
      viewBox="0 0 16 16" 
      fill="none"
    >
      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

function PlanCard({ plan, index, inView }: { plan: typeof plans[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      {...(inView ? fadeUp(0.2 + index * 0.12) : { initial: { opacity: 0, y: 28 } })}
      className={`relative rounded-[1.25rem] overflow-hidden flex flex-col transition-all duration-500 group-hover:-translate-y-1 ${
        plan.highlighted ? "shadow-[0_16px_48px_rgba(124,20,16,0.12)]" : "shadow-[0_1px_3px_rgba(0,0,0,0.03),_0_6px_18px_rgba(124,20,16,0.03)] hover:shadow-[0_8px_30px_rgba(124,20,16,0.06)]"
      }`}
      style={{
        background: plan.highlighted ? "linear-gradient(145deg, #7C1410 0%, #5C120D 100%)" : "#FFFFFF",
        border: plan.highlighted ? "none" : "1px solid #F0E8E2",
      }}
    >
      {/* Subtle traditional texture style glow for highlighted */}
      {plan.highlighted && (
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.15) 0%, transparent 60%)" }}
        />
      )}

      {/* Popular badge */}
      {plan.highlighted && (
        <div className="absolute top-5 right-5 z-10">
          <span 
            className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#F8F3F0",
              backdropFilter: "blur(4px)"
            }}
          >
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 lg:p-10 flex-1 relative z-10">
        {/* Plan name */}
        <p 
          className="font-serif font-light mb-4"
          style={{
            fontSize: "1.75rem",
            color: plan.highlighted ? "#FFFFFF" : "#5C120D",
          }}
        >
          {plan.name}
        </p>

        <p 
          className="font-light leading-relaxed mb-8"
          style={{
            fontSize: "0.9rem",
            color: plan.highlighted ? "rgba(255,255,255,0.8)" : "#8A6F6B",
            minHeight: "3rem"
          }}
        >
          {plan.description}
        </p>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feat) => (
            <li key={feat} className="flex items-center gap-3">
              <CheckIcon highlighted={plan.highlighted} />
              <span 
                className="font-light"
                style={{
                  fontSize: "0.85rem",
                  color: plan.highlighted ? "#FFFFFF" : "#232321"
                }}
              >
                {feat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-8 lg:px-10 pb-8 lg:pb-10 relative z-10">
        <Link
          href="/register"
          className="block w-full text-center py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
          style={{
            background: plan.highlighted ? "#C9A84C" : "transparent",
            color: plan.highlighted ? "#FFFFFF" : "#6B1810",
            border: `1px solid ${plan.highlighted ? "#C9A84C" : "#D4C4B8"}`,
            boxShadow: plan.highlighted ? "0 4px 15px rgba(201,168,76,0.25)" : "none",
          }}
        >
          {plan.cta}
        </Link>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      id="pricing" 
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FFFBF7 0%, rgba(244,237,232,0.6) 100%)",
        padding: "8rem 0 9rem"
      }}
    >
      {/* Decorative Elements */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <text x="120" y="240" fontFamily="serif" fontSize="60" fill="#C9A84C" opacity="0.02" style={{ userSelect: "none" }}>♪</text>
        <text x="1250" y="650" fontFamily="serif" fontSize="80" fill="#7C1410" opacity="0.02" style={{ userSelect: "none" }}>𝄞</text>
      </svg>
      
      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-16 max-w-2xl mx-auto">
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
              Admissions Open
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
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#5C120D",
              letterSpacing: "-0.01em",
            }}
          >
            Join our{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(115deg, #C9A84C 0%, #E4BD60 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              musical
            </em>
            {" "}family
          </motion.h2>

          <motion.p
            {...(inView ? fadeUp(0.14) : { initial: { opacity: 0, y: 28 } })}
            className="font-light leading-[1.8]"
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.0625rem)",
              color: "#8A6F6B",
            }}
          >
            Music classes for all age groups. Discover your passion with our comprehensive courses.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
