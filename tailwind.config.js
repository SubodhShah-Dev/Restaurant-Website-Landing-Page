/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'serif'],
        secondary: ['Merriweather', 'sans-serif'],
        cursiveHead: ['Lobster', 'sans-serif'],
        cursivePara: ['Great Vibes', 'sans-serif'],
      },
      textColor: {
        primary: {
          light: '#00aaff',
          bold: '#0044ff',
        },
        secondary: '#',
        icons: '#00f0ff',
      },
      backgroundImage: {
        primary: 'linear-gradient(to right, #00f0ff, #00aaff, #0077ff, #0044ff)',
        secondary: 'linear-gradient(to left, #00f0ff, #00aaff, #0077ff, #0044ff)',
      },
      fontSize: {
        custom: 'clamp(1rem, 2.7vw, 3rem)',
      },
      screens: {
        'h-md': { raw: '(min-height: 768px)' },
        'h-lg': { raw: '(min-height: 1024px)' },
      },
      backgroundColor: {
        secondary: {
          light: '#00aaff',
          bold: '#0044ff',
        },
        custom: '#ededed',
      },
      borderColor: {
        primary: '#00aaff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      const newUtilities = {};
      const newComponents = {};
      addUtilities(newUtilities);
      addComponents(newComponents);
    }),
  ],
};
