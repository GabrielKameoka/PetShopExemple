/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ajuste se tiver arquivos em subpastas
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
      },
      fontFamily: {
        display: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}