const { fontFamily, fontSize, colors } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
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
        lg: {
          css: {
            'ul > li::before': {
              color: '#D92776',
            },
            'ol > li::before': {
              color: '#D92776',
            },
            h1: {
              'font-weight': 'bold',
              color: colors.pink[600],
              'font-size': fontSize['5xl'],
            },
            h2: {
              'font-weight': 'bold',
              color: colors.pink[600],
              'font-size': fontSize['4xl'],
            },
            h3: {
              'font-weight': 'bold',
              'font-size': fontSize['3xl'],
            },
            h4: {
              'font-weight': 'bold',
              'font-size': fontSize['2xl'],
            },
            h5: {
              'font-weight': 'bold',
              'font-size': fontSize['xl'],
            },
            h6: {
              'font-weight': 'bold',
              'font-size': fontSize['lg'],
            },
            pre: {
              'border-radius': '0px',
            },
          },
        },
        xl: {
          css: {
            'ul > li::before': {
              color: '#D92776',
            },
            'ol > li::before': {
              color: '#D92776',
            },
            h1: {
              'font-weight': 'bold',
              color: colors.pink[600],
              'font-size': fontSize['6xl'],
            },
            h2: {
              'font-weight': 'bold',
              color: colors.pink[600],
              'font-size': fontSize['5xl'],
            },
            h3: {
              'font-weight': 'bold',
              'font-size': fontSize['4xl'],
            },
            h4: {
              'font-weight': 'bold',
              'font-size': fontSize['3xl'],
            },
            h5: {
              'font-weight': 'bold',
              'font-size': fontSize['2xl'],
            },
            h6: {
              'font-weight': 'bold',
              'font-size': fontSize['xl'],
            },
            pre: {
              'border-radius': '0px',
            },
          },
        },
        DEFAULT: {
          css: {
            'ul > li::before': {
              color: '#D92776',
            },
            'ol > li::before': {
              color: '#D92776',
            },
            pre: {
              'border-radius': '0px',
            },
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
              'font-size': fontSize['4xl'],
            },
            h2: {
              'font-weight': 'bold',
              color: colors.pink[600],
              'font-size': fontSize['3xl'],
            },
            h3: {
              'font-weight': 'bold',
              'font-size': fontSize['2xl'],
            },
            h4: {
              'font-weight': 'bold',
              'font-size': fontSize['xl'],
            },
            h5: {
              'font-weight': 'bold',
              'font-size': fontSize['lg'],
            },
            h6: {
              'font-weight': 'bold',
              'font-size': fontSize['md'],
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
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
