/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        letter: {
          dark: "#242742",
          charcoal: "#36384e",
          grey: "#9294a0",
          white: "#ffffff",
        }
      }
    },
    fontFamily: {
      'roboto': ['Roboto'],
    }
  },
  plugins: [],
}
