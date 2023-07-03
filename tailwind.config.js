/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      rubik: ['rubik', 'serif']
    },
    colors: {
      accent: '#9A51E0',
      title: '#00003D',
      description: '#3F4258',
      email: '#9E9E9E',
      black: '#000000',
      lightMode: '#F3F3F3',
      darkMode: '#1A1A40'
    },
    extend: {}
  },
  plugins: []
};
