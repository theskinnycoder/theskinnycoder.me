const { fontFamily, colors } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Jost', fontFamily.sans],
        mono: ['JetBrains Mono', fontFamily.mono],
      },
      colors: {
        pink: colors.pink,
        light: '#FAF5FF',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: colors.pink[400],
              'text-decoration': 'none',
              '&:hover': {
                'text-decoration': 'underline',
                color: colors.pink[600],
              },
            },
            hr: {
              'border-top': `1px solid ${colors.pink[600]}`,
            },
            blockquote: {
              'border-left': `8px solid ${colors.pink[600]}`,
              'line-height': 1.6,
              position: 'relative',
              '::before': {
                color: `${colors.pink[500]}`,
                'font-family': 'Arial',
                'font-size': '4rem',
                position: 'absolute',
                left: '0.4rem',
                top: '-1rem',
              },
            },
            h1: {
              'font-weight': 'bold',
              color: colors.pink[600],
              'font-size': '3.75rem',
            },
            h2: {
              'font-weight': 'bold',
              color: colors.pink[600],
              'font-size': '3rem',
            },
            h3: {
              'font-weight': 'bold',
              'font-size': '2.25rem',
            },
            h4: {
              'font-weight': 'bold',
              'font-size': '1.875rem',
            },
            h5: {
              'font-weight': 'bold',
              'font-size': '1.5rem',
            },
            h6: {
              'font-weight': 'bold',
              'font-size': '1.125rem',
            },
          },
        },
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
