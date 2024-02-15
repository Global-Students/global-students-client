/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'orange-main': '#FF743D',
        'orange-1': '#FF5500',
        'orange-2': '#FFA77B',
        'orange-5': '#FFF2EB',
        'gray-scale-1': '#1E1E1E',
        'gray-scale-2': '#414244',
        'gray-scale-3': '#50545E',
        'gray-scale-4': '#808593',
        'gray-scale-5': '#B7BECF',
        'gray-scale-6': '#CFD5E3',
        'gray-scale-7-main': '#E7EAF2',
        'gray-scale-8': '#F5F5F5',
        'gray-scale-9': '#FFFFFF',
      },
      borderRadius: {
        DEFAULT: '14px',
      },
      backgroundImage: {
        translate: "url('/src/assets/translate.svg')",
        reset: "url('/src/assets/reset.svg')",
        like: "url('/src/assets/thumbUp.svg')",
        'check-circle': "url('/src/assets/check_circle.svg')",
        'check-true-circle': "url('/src/assets/check_true_circle.svg')",
        bubbleName: "url('/src/assets/bubbleName.svg')",
        'orange-5-gradient':
          'linear-gradient(0deg, rgba(255, 167, 123, 0.15) 0%, rgba(255, 167, 123, 0.15) 100%)',
      },
      boxShadow: {
        DEFAULT: '0px 5px 30px -15px rgba(0, 0, 0, 0.20)',
        'inner-orange':
          '-12px -12px 14.3px 1px rgba(255, 85, 0, 0.20) inset, -2px -2px 6.7px 0px rgba(255, 255, 255, 0.25) inset, 3px 3px 5px -2px rgba(255, 255, 255, 0.25) inset',
        welcome:
          '-12px -12px 14.3px 1px rgba(255, 85, 0, 0.20) inset, -2px -2px 6.7px 0px rgba(255, 255, 255, 0.25) inset, 3px 3px 5px -2px rgba(255, 255, 255, 0.25) inset, 0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
        'prev-btn':
          '4px 4px 10px -3px rgba(0, 0, 0, 0.06), -4px -4px 9.8px -9px rgba(0, 0, 0, 0.03) inset, -1px -1px 30px 0px #FFF inset',
        authBtn:
          '1px 2px 8.3px -3px rgba(0, 0, 0, 0.15), -4px -4px 17.9px -9px rgba(0, 0, 0, 0.05) inset',
        managementBtn:
          '-1px -1px 30px 0px #FFF inset, -4px -4px 17.9px -9px rgba(0, 0, 0, 0.20) inset, 1px 2px 8.3px -3px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        headerFont: [
          '15px',
          { lineHeight: '20px', letterSpacing: '-0.02em', fontWeight: '500' },
        ],
        footerFont: ['9px', { lineHeight: '20px', fontWeight: '300' }],
      },
      lineHeight: {
        DEFAULT: 'normal',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        '[type="search"]::-webkit-search-decoration': { display: 'none' },
        '[type="search"]::-webkit-search-cancel-button': { display: 'none' },
        '[type="search"]::-webkit-search-results-button': { display: 'none' },
        '[type="search"]::-webkit-search-results-decoration': {
          display: 'none',
        },
      });
    }),
  ],
};
