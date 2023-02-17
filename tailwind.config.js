/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './js/components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
