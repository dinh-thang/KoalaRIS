module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red': '#C9171E',
        'red-hover': '#9A0C11',
        'yellow': '#FFCA40',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
