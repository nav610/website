const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        transparent: 'transparent',
        green:{ 
          lightest: '#A1CCA5',
          lighter: '#8FB996',
          DEFAULT: '#709775',
          darker: '#415D43',
          darkest: '#111D13',
        },
        yellow:{
          orange: '#f3a738'
        },
        blue:{
          cornflower: '#779BE7'
        },
      }, 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}


