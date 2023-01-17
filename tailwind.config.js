/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './js/components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
