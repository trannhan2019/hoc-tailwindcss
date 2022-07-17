/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      kanit: ['Kanit'],
    },
    maxWidth: {
      1240: '1240px',
    },
    extend: {
      colors: {
        'bg-color': '#fff',
        'hover-color': '#f7941d',
      },
    },
  },
  plugins: [],
};
