import img from "./src/assets/hero-bg.png";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        padding: "7rem",
      },
      backgroundImage: {},

      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
      },

      spacing: {
        1: "0.25rem",
        2: "0.5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
