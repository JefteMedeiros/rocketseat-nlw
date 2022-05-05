const tailwindcss = require("tailwindcss");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          '500' : '#8257e6',
          '300' : '#996dff',
        }
      },
      borderRadius: {
        md: '4px', //sobrescrevendo propriedade do TW
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), //plugin para forms
    require('tailwind-scrollbar'),
  ],
}