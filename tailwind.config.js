function fill(n, transform) {
  return Array(n).fill().reduce((result, _, index) => {
    const value = transform(index+1)
    return {
      ...result,
      [value]: value
    }
  }, {})
}

const height10to100vh = fill(10, number => `${number * 10}vh`)
const positive1to100percent = fill(100, number => `${number}%`)
const negative1to100percent = fill(100, number => `-${number}%`)

module.exports = {
  mode: 'jit',
  purge: {
    content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    ],
    safelist: [
      'formulate-input',
      'formulate-input-element-decorator',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        wavy: ['Melinda', 'ui-serif'],
        screaming: ['Playfair Display', 'ui-serif'],
        roofline: ['Nunito', 'ui-sans-serif']
      },
      lineHeight: {
        '0': '0',
      },
      flex: {
        '1/2': '1 0 50%',
        '4/10': '1 0 40%'
      },
      colors: {
        'bluegray': '#547077',
        'sunset': '#FF7964',
        'emerald': '#234A2E',
        'dust': '#f4f6f5'
      },
      fill: {
        none: 'none'
      },
      margin: {
        ...positive1to100percent,
        ...negative1to100percent,
      },
      dropShadow: {
        'DEFAULT': '6px 6px 6px rgba(0, 0, 0, 0.42)'
      },
      // top/bottom/left/right
      inset: {
        ...positive1to100percent,
        ...negative1to100percent,
      },
      // transform
      spacing: {
        ...positive1to100percent,
        ...negative1to100percent,
      },
      minHeight: {
        ...height10to100vh,
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '18': '4.5rem',
        '24': '6rem',
        '32': '8rem',
      },
      height: {
        ...height10to100vh,
        overflow: '110%',
      },
      maxHeight: height10to100vh,
      minWidth: {
        '1/2': '50%',
        '4/5': '80%'
      },
      width: {
        '1/5': '20%',
        '1/4': '25%',
        '3/10': '30%',
        '1/3': '33%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        '7/8': `${700/8}%`,
        ...positive1to100percent

      },
      maxWidth: {
        '9/10': '90%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
