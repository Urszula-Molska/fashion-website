/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    screens: {
      "2xl": "1728px",
      "tab&2xl": { min: "768px" },
      tab: { min: "768px", max: "1727px" },
      mob: { min: "200px", max: "767px" },
    },
    /*screens: {
      "2xl": { min: "1377px", max: "1728px" },
    },*/
    colors: {
      bg_green200: "#C2EFD4",
      green200: "#10FF70",
      green400: "#6BC785",
      green600: "#267D49",
      green800: "#224F34",
      green_dots: "#267144",
      white: "#FFFFFF",
      gray400: "#373737",
      gray200: "#454545",
      yellow: "#F5D426",
    },
    extend: {
      fontFamily: {
        elephant: "Elephant, sans-serif",
        poppins: "Poppins, sans-serif",
        rufina: "Rufina, sans-serif",
        roboto_slab: "Roboto Slab, sans-serif",
      },
      dropShadow: {
        buttonShadow: "6px 33px 59px 0px rgba(0, 0, 0, 0.30)",
      },
    },
  },
  plugins: [require("./plugins/openVariant.js")],
};
