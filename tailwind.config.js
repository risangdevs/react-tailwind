/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./public/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",
    "./src/**/**/*.jsx",
    // "./src/Components/ContactUs/ContactUs.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: [
    "bg-red-500",
    "bg-pink-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-blue-500",
    "text-gray-400",
  ],
};
