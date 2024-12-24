/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#fafafa",
        tertiary: "#333333",
        quaternary: "#757575",
        purple: "#9C40FF",
      },
      screens: {
        xl: "1320",
      },
    },
  },
  plugins: [],
};
