/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'rubik-light': ['Rubik Light', 'sans-serif'],
      'rubik-regular': ['Rubik Regular', 'sans-serif'],
      'rubik-semibold': ['Rubik Semibold', 'sans-serif'],
      'rubik-bold': ['Rubik Bold', 'sans-serif']
    },
    colors: {
      accent: '#8531D3', // Accent color
      accentDark: '#C49AEB', // Accent color in dark mode
      accentHover: '#9A51E0', // Accent color on hover in light mode
      accentHoverDark: '#D0ACF1', // Accent color on hover in dark mode
      title: '#00003D', // Color for titles
      subtitle: '#9E9E9E', // Color for subtitles
      description: '#3F4258', // Color for descriptions like cards, about me and header
      descriptionDark: '#A09BAB', // Color for descriptions in dark mode
      red: '#ef4444', // Used in the * on the form
      card: '#1F2127', // Background of the card in dark mode
      cardLight: '#EEEEEE', // Background of the card in light mode
      lightMode: '#F3F3F3', // Secondary color
      lightModeHover: '#EEEEEE', // Secondary color for light mode on hover
      darkMode: '#1A1C22', // Secondary color for dark mode
      darkModeHover: '#11141B' // Secondary color on hover for dark mode
    },
    extend: {}
  },
  plugins: []
};
