/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1400px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'text1':'#ffffffb3',
      },
      display: ["group-hover"],
      keyframes: {
        fade: {
          'from': { bottom:'-8px' },
          'to': { bottom: '8px' },
        }
      },
      animation: {
        'move': 'fade 0.3s linear',
      }
    },
  },
  plugins: [],
  
}
