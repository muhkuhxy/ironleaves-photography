const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "ui-serif"],
      },
      lineHeight: {
        0: "0",
      },
      colors: {
        bluegray: "#547077",
        sunset: "#FF7964",
        emerald: "#234A2E",
        dust: "#f4f6f5",
      },
      fill: {
        none: "none",
      },
      dropShadow: {
        DEFAULT: "6px 6px 6px rgba(0, 0, 0, 0.42)",
      },
      minHeight: {
        4: "1rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        18: "4.5rem",
        24: "6rem",
        32: "8rem",
      },
      minWidth: {
        "1/2": "50%",
        "4/5": "80%",
      },
      width: {
        "1/5": "20%",
        "1/4": "25%",
        "3/10": "30%",
        "1/3": "33%",
        "1/2": "50%",
        "3/4": "75%",
        "4/5": "80%",
        "7/8": `${700 / 8}%`,
      },
      maxWidth: {
        "9/10": "90%",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("nojs", "[data-layout]:not(.js) &")
    }),
  ],
}
