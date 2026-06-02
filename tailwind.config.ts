import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        cream: "rgb(var(--cream) / <alpha-value>)",
        dark: "rgb(var(--dark) / <alpha-value>)",
        "dark-2": "rgb(var(--dark-2) / <alpha-value>)",
        "dark-3": "rgb(var(--dark-3) / <alpha-value>)",
        gold: "rgb(var(--gold) / <alpha-value>)",
        "gold-light": "rgb(var(--gold-light) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        "muted-2": "rgb(var(--muted-2) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        "border-light": "rgb(var(--border-light) / <alpha-value>)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.15) 0%, transparent 60%)",
        "card-gradient": "linear-gradient(180deg, transparent 40%, rgba(17,16,16,0.95) 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "float-notes": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "float-notes": "float-notes 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
