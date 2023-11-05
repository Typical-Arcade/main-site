/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ['archivo-black']: ['var(--font-archivo-black)'],
        ['archivo-regular']: ['var(--font-archivo-regular)']
      }
    },
  },
  plugins: [],
};