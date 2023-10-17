/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
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