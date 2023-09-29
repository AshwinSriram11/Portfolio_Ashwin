/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        JosefinSans: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
