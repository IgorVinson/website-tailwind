/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
    darkMode: 'class',
  theme: {
    screens: {
        'sm': {'max':'480px'},
        'md': {'max':'768px'},
        'lg': {'max':'992px'},
    },
      container: {
        padding: '20px',
          center: true,
      },
    extend: {
        colors: {
            lightblack: '#404244',
            lightred: '#FF0D38',
            darkred: '#D70026',
            lightgray: '#747474',
            darkgray: '#272727',
        },
        boxShadow: {
            'customred': '0px, 0px rgba(255, 13, 56, 0.21)',
        }
    },
  },
  plugins: [],

}
