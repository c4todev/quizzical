/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Karla", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/blobs.svg')",
        "hero-pattern-2": "url('/src/assets/blobs left-bottom.svg')",
      },
    },
  },
  plugins: [],
};
