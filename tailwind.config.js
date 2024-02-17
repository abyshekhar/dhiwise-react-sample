module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9fbff",
          300: "#d2efe0",
          900: "#0d1624",
          "50_01": "#f4f8ff",
          "900_01": "#11142d",
        },
        blue_gray: {
          50: "#eaecf0",
          100: "#d6dae2",
          200: "#bac1ce",
          300: "#9ea8ba",
          400: "#74839d",
          700: "#424c5d",
          900: "#262b35",
          "400_01": "#808191",
          "700_01": "#535353",
        },
        red: { 100: "#ffe1cc", 700: "#d03329" },
        blue: {
          50: "#e0ebff",
          A700: "#0061ff",
          A700_01: "#0a58ff",
          A700_02: "#0065ff",
        },
        orange: { A700: "#ff6700" },
        green: { 600: "#349765" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        gilroy: "Gilroy",
        opensans: "Open Sans",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
