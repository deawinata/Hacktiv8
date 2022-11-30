/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./assets/images/career-banner-4.jpg')",
        'responsibility': "url('./assets/images/Our Resposibility Thumbnail 1.jpg')",
        'report': "url('./assets/images/Latest Annual Report 3.png')"
      }
    },
  },
  plugins: [],
}
