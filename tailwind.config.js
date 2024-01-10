/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'ProximaVara': ['PROXIMA', 'Sans Serif'],

      },
      colors:{
        mainColor: "#116149"
      }
    },
  },
  plugins: [],
};
