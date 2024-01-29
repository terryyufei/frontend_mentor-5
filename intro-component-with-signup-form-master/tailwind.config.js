/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      colors: {
        "red": "hsl(0, 100%, 74%)",
        "green": "hsl(154, 59%, 51%)",
        "blue": "hsl(248, 32%, 49%)",
        "darkBlue": "hsl(249, 10%, 26%)",
        "grayishBlue": "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        "body": "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
}

