/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'blue': 'hsl(215, 51%, 70%)',
        'Cyan': 'hsl(178, 100%, 50%)',
        'Cyan-opacity': 'hsl(178, 100%, 50%, 0.4)',

        // Neutral
        'Dark-blue-mainBG': 'hsl(217, 54%, 11%)',
        'Dark-blue-cardBG': 'hsl(216, 50%, 16%)',
        'Dark-blue-line': 'hsl(215, 32%, 27%)',
      },
      fontFamily:{
        'Outfit': ['Outfit', 'sans-serif']
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}

