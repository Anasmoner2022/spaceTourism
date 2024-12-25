/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: 'hsl(230, 35%, 7%)',
        light: 'hsl(231, 77%, 90%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        900: ['5rem', { lineHeight: '1.2' }],
        800: ['3.5rem', { lineHeight: '1.2' }],
        700: ['1.5rem', { lineHeight: '1.2' }],
        600: ['1rem', { lineHeight: '1.5' }],
        500: ['1.75rem', { lineHeight: '1.4' }],
        400: ['0.9375rem', { lineHeight: '1.5' }],
        300: ['1rem', { lineHeight: '1.5' }],
        200: ['0.875rem', { lineHeight: '1.5' }],
      },
      fontFamily: {
        serif: ['Bellefair', 'serif'],
        sansCond: ['Barlow Condensed', 'sans-serif'],
        sansNormal: ['Barlow', 'sans-serif'],
      },
      screens: {
        sm: '35em', // Equivalent to 560px
        md: '45em', // Equivalent to 720px
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        ':root': {
          '--clr-dark': '230 35% 7%',
          '--clr-light': '231 77% 90%',
          '--clr-white': '0 0% 100%',
        },
      });
      addUtilities({
        '.font-inherit': {
          font: 'inherit',
        },
      });
    }),
  ],
};
