/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./assets/images/career-banner-4.jpg')"
      }
    },
  },
  plugins: [],
}
