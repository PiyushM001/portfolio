/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        moving: 'moving 10s linear infinite',
      },
      keyframes: {
        moving: {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        'mochiy-pop': ['Mochiy Pop One', 'sans-serif'],
        'tea': ['Teachers', 'sans-serif'],
        'public':["Public Sans", 'sans-serif' ] ,
        'league': ["League Spartan", 'sans-serif'],

      },
    },
  },
  plugins: [],
};
