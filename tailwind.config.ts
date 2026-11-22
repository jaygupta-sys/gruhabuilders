import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080A0E", // Deep Midnight Obsidian
        foreground: "#FBF9F4", // Crisp Warm Ivory Alabaster
        midnight: {
          950: "#050709",
          900: "#080A0E",
          850: "#0D1117",
          800: "#131821",
          700: "#1C2330",
          600: "#2B3547",
        },
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#F6C15C",
          500: "#E5A842", // Primary Radiant Amber Bronze
          600: "#D4932A",
          700: "#B4741B",
          800: "#8F5816",
          900: "#6B3F11",
          DEFAULT: "#E5A842",
          light: "#F7CF7E",
          dark: "#B87E25",
        },
        slate: {
          light: "#A4B0C0",
          muted: "#768396",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      backgroundImage: {
        "amber-gradient": "linear-gradient(135deg, #F7CF7E 0%, #E5A842 50%, #B87E25 100%)",
        "amber-gradient-radial": "radial-gradient(circle at center, #F7CF7E 0%, #E5A842 60%, #B87E25 100%)",
        "midnight-gradient": "linear-gradient(180deg, #080A0E 0%, #0D1117 100%)",
        "hero-vignette": "radial-gradient(ellipse at center, rgba(8,10,14,0.15) 0%, rgba(8,10,14,0.65) 60%, rgba(8,10,14,0.95) 100%)",
        "shimmer-amber": "linear-gradient(90deg, transparent, rgba(247, 207, 126, 0.3), transparent)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 35s linear infinite",
        "fadeIn": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
