/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "#f0f0f0",
      primary: "#ff0000",
      muted: "#00000099",
      dark: "#1c1b21",
      darkest: "#1c1b21",
      light: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "secondary-gradient":
          "linear-gradient(60deg, #fbb03b 13.39%, #ff6b00 86.61%)",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
