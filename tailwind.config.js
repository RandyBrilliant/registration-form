module.exports = {
  theme: {
    fontFamily: {
     'primary': ['Kumbh Sans', 'sans-serif'],
     'secondary': ['Montserrat', 'sans-serif'],
    }
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
