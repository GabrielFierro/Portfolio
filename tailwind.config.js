/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      rubik: ['rubik', 'serif']
    },
    colors: {
      accent: '#9A51E0',
      accentDark: '#C49AEB',
      accentHover: '#8531D3',
      accentHoverDark: '#D0ACF1',
      title: '#00003D',
      description: '#3F4258',
      descriptionDark: '#A09BAB',
      gray: '#9E9E9E',
      black: '#000000',
      card: '#1F2127',
      lightMode: '#F3F3F3',
      lightModeHover: '#EEEEEE',
      darkMode: '#1A1C22',
      darkModeHover: '#111139'
    },
    extend: {}
  },
  plugins: []
};
