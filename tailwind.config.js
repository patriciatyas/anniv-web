/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        stropica: ['Stropica', 'sans-serif'],
      },
      backgroundImage: {
        'dots': "url('/public/images/dots.png')",
        'dots2': "url('/public/images/dots-2.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

