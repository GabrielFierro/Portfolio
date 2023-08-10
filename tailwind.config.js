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
      subtitle: '#9E9E9E', // Color for subtitles
      lightMode: '#F3F3F3', // Secondary color
      lightModeHover: '#EBEBEB', // Secondary color for light mode on hover
      darkMode: '#1B1A20', // Secondary color for dark mode
      grey: '#E2E8EC',
      green: '#84FFC9',
      greenDark: '#00C26E',
      greenEmerald: '#1FCE82',
      violet: '#796EFF',
      pink: '#ECA0FF',
      pinkDark: '#8D00B0',
      pinkHelio: '#DB81F1',
      black: '#000000',
      cyan: '#61E7FF',
      cyanLight: '#96D7E2',
      cyanDark: '#00D9FF',
      yellow: '#FFE554',
      placeholderDark: '#2A2833'
    },
    extend: {
      animation: {
        animate: 'animate 5s ease-in-out infinite'
      },
      keyframes: {
        animate: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 40%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }
        },
        customPulse: {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '.5'
          }
        }
      }
    }
  },
  plugins: []
};
