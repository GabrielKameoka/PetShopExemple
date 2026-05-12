/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // O rosa que você quer (estava #ff007f no seu código)
        primary: "#ff007f", 
      },
      fontFamily: {
        display: ["Quicksand", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}