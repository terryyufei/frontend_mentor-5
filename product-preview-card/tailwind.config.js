/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}",
    "./public/**/*"
  ],
  theme: {
    extend: {
      colors: {
        "darkCyan": "hsl(158, 36%, 37%)",
        "cream": "hsl(30, 38%, 92%)",
        "darkBlue": "hsl(212, 21%, 14%)",
        "grayishBlue": "hsl(228, 12%, 48%)",        
      },
      fontFamily: {
        body: ["'Fraunces', serif"],
        headings: ["Montserrat', sans-serif"],
      },
      backgroundImage: {
        'desktop': "url('./images/image-product-desktop.jpg')",
        'mobile': "url('./images/image-product-mobile.jpg')",
      }
    },
  },
  plugins: [],
}


