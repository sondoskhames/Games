/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0071ff",
        coral: "#ee626b",
        dark: "#1e1e1e",
        soft: "#f7f7f7",
      },
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
    },
  },
  plugins: [],
};