/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#EEF2F8",
          100: "#D7E0EE",
          400: "#2C4368",
          600: "#122B4E",
          700: "#0B1F3A",
          800: "#081730",
          900: "#050F20",
        },
        royal: {
          DEFAULT: "#0A5CFF",
          50: "#EAF1FF",
          100: "#D1E2FF",
          400: "#3D7DFF",
          500: "#0A5CFF",
          600: "#0848CC",
        },
        ember: {
          DEFAULT: "#FF7A00",
          400: "#FF9433",
          500: "#FF7A00",
          600: "#E06600",
        },
        mist: "#F5F8FD",
        slate: {
          soft: "#57647B",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(11,31,58,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(11,31,58,0.04) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(80% 60% at 15% 10%, rgba(10,92,255,0.12) 0%, rgba(255,255,255,0) 60%), radial-gradient(70% 50% at 90% 0%, rgba(11,31,58,0.10) 0%, rgba(255,255,255,0) 55%)",
        "cta-gradient": "linear-gradient(135deg, #FF9433 0%, #FF7A00 100%)",
        "brand-gradient": "linear-gradient(135deg, #0A5CFF 0%, #0B1F3A 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(11, 31, 58, 0.08)",
        "glass-lg": "0 20px 60px rgba(11, 31, 58, 0.12)",
        "glow-royal": "0 0 40px rgba(10, 92, 255, 0.25)",
        "glow-ember": "0 8px 24px rgba(255, 122, 0, 0.35)",
        card: "0 1px 2px rgba(11,31,58,0.04), 0 8px 24px -8px rgba(11,31,58,0.12)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1.5s",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "draw-line": "drawLine 2.4s ease-out forwards",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.08)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: 1000 },
          "100%": { strokeDashoffset: 0 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
