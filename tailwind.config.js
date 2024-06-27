/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xxs': '200px',
      'xs': '480px',
      'sm': '600px',
      'md': '768px',
      'lg': '1024px'
    },
  },
  plugins: [],
}

