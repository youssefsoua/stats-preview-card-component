/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {        
        "very-dark-blue": "hsl(233, 47%, 7%)",
        "dark-desaturated-blue": "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
        "white-200": "hsla(0, 0%, 100%, 0.75)",
        "white-300": "hsla(0, 0%, 100%, 0.6)",
    },
  },
},
  plugins: [],
};
