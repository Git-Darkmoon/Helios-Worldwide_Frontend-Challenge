/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4242E0",
        myWhite: "#EBEFF2",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
}
