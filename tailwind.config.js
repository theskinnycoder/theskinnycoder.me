const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter var', fontFamily.sans],
        body: ['Inter var', fontFamily.serif],
        mono: ['JetBrains Mono', fontFamily.mono],
      },
      colors: {
        black: '#161E2E',
        white: '#FFFFFF',
        dark: '#111827',
        light: '#EDEEEE',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
