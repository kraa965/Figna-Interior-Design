/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      lg: { max: '1199.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '479.99px' },
    },
    extend: {
      //пример вставки шрифтов 
      fontFamily: {
        jost: ['Jost', 'sans - serif'],
        dmserif: ['DM Serif Display', 'serif'],
      },
      backgroundImage: {
        'heroMain': "url(../assets/Image.png)",
      },
      colors: {
        bulany: '#F4F0EC',
        anthracite: '#292F36',
        sand: '#CDA274'
      }
    },
  },
  plugins: [],
}

