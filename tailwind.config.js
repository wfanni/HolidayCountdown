/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        "full-width": "8.5vw",
      },
      screens: {
        'xs': '0px',
      },
    },
  },
  plugins: [],
}

