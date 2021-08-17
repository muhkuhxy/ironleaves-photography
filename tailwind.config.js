module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        wavy: ['Melinda', 'ui-serif'],
        screaming: ['Playfair Display', 'ui-serif'],
        roofline: ['Nunito', 'ui-sans-serif']
      },
      colors: {
        'bluegray': '#547077',
        'sunset': '#FF7964',
        'emerald': '#234A2E'
      },
      dropShadow: {
        'DEFAULT': '6px 6px 6px rgba(0, 0, 0, 0.42)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
