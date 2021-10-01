const { fontFamily, fontSize } = require('tailwindcss/defaultTheme');

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
      textColor: {
        brand: 'var(--brand)',
        'brand-light': 'var(--brand-light)',
        'brand-divide': 'var(--brand-divide)',
      },
      backgroundColor: {
        brand: 'var(--brand)',
        'brand-light': 'var(--brand-light)',
        'brand-divide': 'var(--brand-divide)',
      },
      borderColor: {
        brand: 'var(--brand)',
        'brand-light': 'var(--brand-light)',
        'brand-divide': 'var(--brand-divide)',
      },
      ringColor: {
        brand: 'var(--brand)',
        'brand-light': 'var(--brand-light)',
        'brand-divide': 'var(--brand-divide)',
      },
      gradientColorStops: {
        brand: 'var(--brand)',
        'brand-light': 'var(--brand-light)',
        'brand-divide': 'var(--brand-divide)',
      },
      fontFamily: {
        custom: ['Jost', fontFamily.sans],
        mono: ['JetBrains Mono', fontFamily.mono],
      },
      typography: {
        lg: {
          css: {
            'ul > li::before': {
              color: 'var(--brand)',
            },
            'ol > li::before': {
              color: 'var(--brand)',
            },
            h1: {
              'font-weight': 'bold',
              color: 'var(--brand)',
              'font-size': fontSize['5xl'],
            },
            h2: {
              'font-weight': 'bold',
              color: 'var(--brand)',
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
              color: 'var(--brand)',
            },
            'ol > li::before': {
              color: 'var(--brand)',
            },
            h1: {
              'font-weight': 'bold',
              color: 'var(--brand)',
              'font-size': fontSize['6xl'],
            },
            h2: {
              'font-weight': 'bold',
              color: 'var(--brand)',
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
              color: 'var(--brand)',
            },
            'ol > li::before': {
              color: 'var(--brand)',
            },
            pre: {
              'border-radius': '0px',
            },
            a: {
              color: 'var(--brand)',
              'text-decoration': 'none',
              '&:hover': {
                'text-decoration': 'underline',
              },
            },
            hr: {
              'border-top': `1px solid ${'var(--brand)'}`,
            },
            blockquote: {
              'border-left': `8px solid ${'var(--brand)'}`,
              'line-height': 1.6,
              position: 'relative',
              '::before': {
                color: '#000',
                'font-family': 'Arial',
                'font-size': '4rem',
                position: 'absolute',
                left: '0.4rem',
                top: '-1rem',
              },
            },
            'blockquote strong.text-brand-light': {
              color: '#000',
            },

            h1: {
              'font-weight': 'bold',
              color: 'var(--brand)',
              'font-size': fontSize['4xl'],
            },
            h2: {
              'font-weight': 'bold',
              color: 'var(--brand)',
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
