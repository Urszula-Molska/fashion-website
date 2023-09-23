/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
      screens: {
        "2xl": { min: "1377px" },
        tablet: { max: "1376px" },
      },
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
    plugins: [],
  },
};
