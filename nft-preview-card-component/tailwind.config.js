/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      colors: {
        "softBlue": "hsl(215, 51%, 70%)",
        "cyan": "hsl(178, 100%, 50%)",
        "mainBgBlue": "hsl(217, 54%, 11%)",
        "cardBgBlue": "hsl(216, 50%, 16%)",
        "lineBgBlue": "hsl(215, 32%, 27%)"
      },
      fontFamily: {
        "body": "'Outfit', sans-serif",
      }
    },
  },
  plugins: [],
}

