/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      fontFamily: {
        "font-body": "'Work Sans', sans-serif",
      },
      colors: {
        "lightPink": "hsl(275, 100%, 97%)",
        "grayishPurple": "hsl(292, 16%, 49%)",
        "darkPurple": "hsl(292, 42%, 14%)",
      },
    },
  },
  plugins: [],
}

