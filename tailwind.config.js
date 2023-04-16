/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.tsx",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        'documenso': {
          DEFAULT: '#37F095',
          50: '#E2FDF0',
          100: '#CFFBE5',
          200: '#A9F9D1',
          300: '#83F6BD',
          400: '#5DF3A9',
          500: '#37F095',
          600: '#11DE79',
          700: '#0DAA5D',
          800: '#097640',
          900: '#054224',
          950: '#032816'
        },
      }
    },
  },
  plugins: [],
}

