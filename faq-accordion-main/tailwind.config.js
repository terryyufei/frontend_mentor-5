/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      fontFamily: {
        "body": "'Work Sans', sans-serif",
      },
      colors: {
        "lightPink": "hsl(275, 100%, 97%)",
        "grayishPurple": "hsl(292, 16%, 49%)",
        "darkPurple": "hsl(292, 42%, 14%)",
      },
      backgroundImage: {
        'desktop': "url('./images/pattern-desktop.svg')",
        'mobile': "url('./images/pattern-mobile.svg')",
      }
    },
  },
  plugins: [],
}

