/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}", "./src/**/*.{html,jsx}", "./index.html",],
  theme: {
    extend: {
      colors: {
        "blue": "#4F6A9E",
        "black": "#1a1a1a",
        "white": "#ffffff",
        "gold": "#C8B568"
      }
    },
  },
  plugins: [],
}

