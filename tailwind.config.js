/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        small: "475px",
        "2k": "1440px",
      },
      colors: {
        veryDarkBlue: "hsl(233, 47%, 7%)",
        darkDesaturatedBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        white200: "hsla(0, 0%, 100%, 0.75)",
        white300: "hsla(0, 0%, 100%, 0.6)",
        white: "#FFF",
        black: "#000",
      },
    },
  },
  plugins: [],
};
