/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mochiy-pop': ['Mochiy Pop One', 'sans-serif'],
        'tea': ['Teachers', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
