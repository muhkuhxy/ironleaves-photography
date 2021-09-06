const height10to90vh = Array(9).fill().reduce((result, _, index) => {
  const number = (index + 1) * 10
  return {
    ...result,
    [`${number}vh`]: `${number}vh`
  }
}, {})

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        wavy: ['Melinda', 'ui-serif'],
        screaming: ['Playfair Display', 'ui-serif'],
        roofline: ['Nunito', 'ui-sans-serif']
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
      dropShadow: {
        'DEFAULT': '6px 6px 6px rgba(0, 0, 0, 0.42)'
      },
      minHeight: {
        ...height10to90vh,
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
      },
      height: height10to90vh,
      maxHeight: height10to90vh,
      minWidth: {
       '1/2': '50%',
       '4/5': '80%'
      },
      width: {
        '1/4': '25%',
        '3/10': '30%',
        '1/3': '33%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        '7/8': `${700/8}%`
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
