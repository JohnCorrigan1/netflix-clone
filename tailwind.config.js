/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main:  "#E50914",
    },
    },
    screens: {
      '2xl': {'min': '1535px'},
      'xl': {'min': '1279px'},
      'lg': {'min': '1023px'},
      'md': {'min': '767px'},
      'sm': {'min': '639px'},
      'xs': {'min': '550px'},
      'xxs': {'min': '375px'},
    },
  },
  plugins: [],
}
