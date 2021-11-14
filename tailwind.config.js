module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#e05640ff',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
      }, 
        buffetred: '#c75538',
        buffetgrey: {
          200: '#e1e1e1',
          300: '#d4d4d4'
        }
    },
    fontFamily: {
      body: ['Nunito']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
