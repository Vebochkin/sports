/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7a3cff',
        dark: {
          100: '#1c1c1c',
          200: '#1C1C23',
          300: '#202023',
          400: '#272641',
          500: '#2C2C3A',
          600: '#3A3A5B',
        },
        gray: {
          light: '#9B9BC2',
          dark: '#3A3A4E',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}