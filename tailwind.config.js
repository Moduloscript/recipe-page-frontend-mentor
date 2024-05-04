/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:
    {
      fontFamily: {
        body: ['Young',],
        tail:['Outfit']
    },
      screens: {
        'screen-dub':  {'min': '1024px', 'max': '1920px'},
      },
    },
  },
  plugins: [],
}

