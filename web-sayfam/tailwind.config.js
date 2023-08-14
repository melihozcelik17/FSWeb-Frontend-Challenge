/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {

    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                "primary-light": "f8f8f8",
                "primary-dark": "191919",
            },
            darkMode: 'class',



        },
    },
    plugins: [],


}