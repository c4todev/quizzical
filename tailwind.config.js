/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],

  theme: {
    fontFamily: {
      sans: ["Karla", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/blobs.svg')",
        "hero-pattern-2": "url('/src/assets/blobs left-bottom.svg')",
      },
      colors: {
        yellow: "#E30B5C",
      },
    },
  },
  plugins: [],
};
