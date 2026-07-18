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
          light: "#122A4E",
          soft: "#1B3A63",
        },
        royal: {
          DEFAULT: "#0A5CFF",
          light: "#3E7FFF",
          dark: "#0846C7",
        },
        ember: {
          DEFAULT: "#FF7A00",
          light: "#FF9640",
          dark: "#DB6600",
        },
        ice: "#F5F8FF",
        slate: {
          soft: "#5B6B85",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(120% 120% at 10% 0%, #122A4E 0%, #0B1F3A 45%, #081428 100%)",
        "cta-gradient": "linear-gradient(135deg, #FF7A00 0%, #FF9640 100%)",
        "royal-gradient": "linear-gradient(135deg, #0A5CFF 0%, #0846C7 100%)",
        "card-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(10, 92, 255, 0.45)",
        "glow-ember": "0 12px 30px -8px rgba(255, 122, 0, 0.55)",
        card: "0 20px 60px -20px rgba(11, 31, 58, 0.25)",
        "card-lg": "0 30px 80px -30px rgba(11, 31, 58, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: 400 },
          "100%": { strokeDashoffset: 0 },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.08)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1.5s",
        blob: "blob 12s ease-in-out infinite",
        "blob-delayed": "blob 14s ease-in-out infinite 3s",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
