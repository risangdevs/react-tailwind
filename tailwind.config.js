/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./public/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",
    "./src/**/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
