/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      rubik: ['rubik', 'serif']
    },
    colors: {
      accent: '#8531D3',
      accentDark: '#C49AEB',
      accentHover: '#9A51E0',
      accentHoverDark: '#D0ACF1',
      title: '#00003D',
      description: '#3F4258',
      descriptionDark: '#A09BAB',
      gray: '#9E9E9E',
      black: '#000000',
      red: '#ef4444',
      card: '#1F2127',
      cardLight: '#EEEEEE',
      lightMode: '#F3F3F3',
      lightModeHover: '#EEEEEE',
      darkMode: '#1A1C22',
      darkModeHover: '#111139'
    },
    extend: {}
  },
  plugins: []
};
