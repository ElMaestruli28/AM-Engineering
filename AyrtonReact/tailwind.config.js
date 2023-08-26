/** @type {import('tailwindcss').Config} 
*/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
      },
      colors: {
        'gray-perfect': '#b6b6b6',
        'alfano':'#ffdb00',
        'am':'#a0ff00',
        'git':'#1D1F20',
      },
      animation: {
        'spin-slow': 'spin-slow 1s linear',
        'spin-slow-reverse': 'spin-slow-reverse 1s linear',
      },
      keyframes: {
        'spin-slow': {
          '0%': {
            transform: 'rotate(0)',
          },
          '50%': {
            transform: 'rotate(0)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'spin-slow-reverse': {
          '0%': {
            transform: 'rotate(0)',
          },
          '50%': {
            transform: 'rotate(0)',
          },
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
