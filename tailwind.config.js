/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": "1400px",
    },
    colors: {
      green200: "#10FF70",
      green400: "#6BC785",
      green600: "#267D49",
      green800: "#224F34",
      green_dots: "#267144",
      white: "#FFFFFF",
      gray200: "#373737",
      gray400: "#454545",
      yellow: "#F5D426",
    },
    extend: {
      fontFamily: {
        elephant: "Elephant, sans-serif",
        poppins: "Poppins', sans-serif",
        rufina: "Rufina, sans-serif",
        roboto_slab: "Roboto Slab, sans-serif",
      },
    },
  },
  plugins: [],
};
