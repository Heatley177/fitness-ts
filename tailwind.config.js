/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // // WORKING CHANGES
      // colors: {
      //   "gray-20": "#F8F4EB", // Home Background
      //   "gray-50": "#EFE6E6", // ?
      //   "gray-100": "#DFCCCC",//benefits borders
      //   "gray-500": "#EBEBEB", //Main Text 
      //   "primary-100": "#000", // Nav and sections
      //   "primary-300": "#FFA6A3", // Name, email, message box
      //   "primary-500": "#FF6B66", //Logo Color
      //   "secondary-400": "#FFCD58", // ?
      //   "secondary-500": "#FFC123", // Buttons
      // },
      // ORIGINAL BELOW
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC123",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)", 
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}