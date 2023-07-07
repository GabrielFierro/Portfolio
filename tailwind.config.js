/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      rubik: ['rubik', 'serif']
    },
    colors: {
      accent: '#9A51E0',
      accentHover: '#8531D3',
      title: '#00003D',
      description: '#3F4258',
      email: '#9E9E9E',
      black: '#000000',
      lightMode: '#F3F3F3',
      lightModeHover: '#EEEEEE',
      darkMode: '#1A1A40',
      darkModeHover: '#111139'
    },
    extend: {}
  },
  plugins: []
};
