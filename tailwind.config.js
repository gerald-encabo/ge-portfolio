/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightColor: 'var(--lightColor)',
        darkColor: 'var(--darkColor)'
      },
      screens: {
        'desktop': {'max': '1440px'},
        'laptop': {'max': '1024px'},
        'tablet': {'max': '768px'},
        'mobile': {'max': '540px'},
      },
      fontFamily: {
        title: ['Diplomata SC', 'sans-serif'],
      }
    },
  },
  plugins: [],
}