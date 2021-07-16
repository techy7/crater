const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './resources/views/**/*.php',
    './resources/assets/js/**/*.js',
    './resources/assets/js/**/*.vue',
    './resources/assets/sass/**/*.scss',
    './node_modules/\\@bytefury/spacewind/src/**/*.js',
    './node_modules/\\@bytefury/spacewind/src/**/*.vue',
    './node_modules/\\@bytefury/spacewind/plugin/**/*.js',
    'flatpickr/**/*.js',
    './public/js/pace/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#20b36c',
          100: '#20b36c',
          200: '#20b36c',
          300: '#20b36c',
          400: '#ffffff',
          500: '#20b36c',
          600: '#20b36c',
          700: '#20b36c',
          800: '#ffffff',
          900: '#20b36c',
        },
        black: '#040405',
        white: '#ffffff',
      },
      spacing: {
        7: '1.75rem',
        9: '2.25rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
      },
      screens: {
        xxl: '1440px',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'visited'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'focus-within'],
    borderRadius: ['responsive', 'hover', 'first', 'last'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderStyle: ['responsive', 'hover', 'first', 'last'],
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
  plugins: [
    require('@bytefury/spacewind/plugin'),

    plugin(({ config, addBase }) => {
      let craterDefaultTypography = {
        fontFamily: config('theme.fontFamily.base'),
      }
      addBase({
        '.h1': {
          ...craterDefaultTypography,
        },
        '.h2': {
          ...craterDefaultTypography,
        },
        '.h3': {
          ...craterDefaultTypography,
        },
        '.h4': {
          ...craterDefaultTypography,
        },
        '.h5': {
          ...craterDefaultTypography,
        },
        '.h6': {
          ...craterDefaultTypography,
        },
        '.page-title': {
          ...craterDefaultTypography,
        },
        '.section-title': {
          ...craterDefaultTypography,
        },
      })
    }),
  ],
}
