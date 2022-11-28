/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.{html,js}',
        './node_modules/tw-elements/dist/js/**/*.js',
        './js/components/**/*.{html,js}'
    ],
    theme: {
        extend: {},
    },
    plugins: [require('tw-elements/dist/plugin')],
};
