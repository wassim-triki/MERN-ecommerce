/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#E7E1FF',
          100: '#CFC2FF',
          200: '#A38AFE',
          300: '#744DFE',
          400: '#4410FE',
          500: '#2D01D4',
          600: '#2501A8',
          700: '#1C017F',
          800: '#130056',
          900: '#090029',
        },
        black: {
          50: '#E8E8E8',
          100: '#D4D4D4',
          200: '#A8A8A8',
          300: '#7D7D7D',
          400: '#525252',
          500: '#252525',
          600: '#1F1F1F',
          700: '#171717',
          800: '#0F0F0F',
          900: '#080808',
        },
      },
      fontFamily: {
        poppins: ['Poppins, sans-serif'],
      },
    },
  },
  plugins: [],
};
