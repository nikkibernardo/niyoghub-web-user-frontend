// const mtConfig = require("@material-tailwind/react").mtConfig;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#00040f",
        primary: "#FFFFFF",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// export default {
//   mode: 'jit',
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
//     "./public/index.html",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

