/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brown: "#995300",
        navbg: "#D9D9D9",
        mainbg: "#EEEEEE",
        navNotActive: "#8F8F8F",
        navActive: "#797777",
        lineActive: "#E1982B",
      },
    },
  },
  plugins: [],
};
