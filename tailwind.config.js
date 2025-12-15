// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(80px) rotate(-360deg)",
          },
        },
      },
      animation: {
        orbit: "orbit 6s linear infinite",
      },
    },
  },
  plugins: [],
};
