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
          'hover' : '#996dff',
        }
      }
    },
  },
  plugins: [],
}