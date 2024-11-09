/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#4242E0",
        myWhite: "#EBEFF2",
        lightBg: "#C8D2DA",
        darkBg: "#2A2C2D",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
}
