/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%, 100%": { transform: "translateX(3%)" },
          "50%": { transform: "translateX(var(--textWidth))" },
        },
      },
      animation: {
        marquee: "marquee 10s infinite linear",
      },
    },
  },
  plugins: [],
};
