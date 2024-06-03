/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {},
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        body2: "0.75rem", // 12px
        body1: "1rem", // 16px
        heading3: "1.5rem", // 24px
        heading2: "1.75rem", // 28px
        heading1: "2.25rem", // 36px
      },
      colors: {
        primary: {
          // visual representation ./src/colours/primary.png
          DEFAULT: "#08B6D5",
          darker: "#0E7491",
          lighter: "#9BEDFC",
          subtle: "#90C5CE",
        },
        error: {
          // visual representation ./src/colours/error.png
          DEFAULT: "#FF3B3B",
          darker: "#E53535",
          lighter: "#FF5C5C",
          subtle: "#FF8080",
        },
        warning: {
          // visual representation ./src/colours/warning.png
          DEFAULT: "#FFCC00",
          darker: "#E5B800",
          lighter: "#FDDD48",
          subtle: "#FDED72",
        },
        success: {
          // visual representation ./src/colours/success.png
          DEFAULT: "#06C270",
          darker: "#05A660",
          lighter: "#39D98A",
          subtle: "#56EBA0",
        },
        dark: {
          // visual representation ./src/colours/dark.png
          1: "#1A1A1A",
          2: "#5B5F67",
          3: "#8F90A6",
          4: "#C7C9D9",
        },
        light: {
          // visual representation ./src/colours/light.png
          1: "#DDE5E9",
          2: "#EBEBF0",
          3: "#FAFAFC",
          4: "#FDFDFF",
        },
        ourservices: {
          // developer custom colours
          bg1: "#9AD2FB",
          font1: "#0043BE",
          bg2: "#FFF280",
          font2: "#C1A200",
          bg3: "#FCA0A0",
          font3: "#CD2828",
          bg4: "#C1F4B5",
          font4: "#146200",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
