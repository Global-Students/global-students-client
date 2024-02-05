/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'orange-main': '#FF743D',
        'orange-1': '#FF5500',
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
        cancel: "url('/src/assets/cancel.svg')",
        like: "url('/src/assets/thumbUp.svg')",
        'check-circle': "url('/src/assets/check_circle.svg')",
        'check-true-circle': "url('/src/assets/check_true_circle.svg')",
      },
      boxShadow: {
        DEFAULT: '0px 5px 30px -15px rgba(0, 0, 0, 0.20)',
        'inner-orange':
          '-12px -12px 14.3px 1px rgba(255, 85, 0, 0.20) inset, -2px -2px 6.7px 0px rgba(255, 255, 255, 0.25) inset, 3px 3px 5px -2px rgba(255, 255, 255, 0.25) inset',
        welcome:
          '-12px -12px 14.3px 1px rgba(255, 85, 0, 0.20) inset, -2px -2px 6.7px 0px rgba(255, 255, 255, 0.25) inset, 3px 3px 5px -2px rgba(255, 255, 255, 0.25) inset, 0px 4px 15px 0px rgba(0, 0, 0, 0.10)',
        'prev-btn':
          '4px 4px 10px -3px rgba(0, 0, 0, 0.06), -4px -4px 9.8px -9px rgba(0, 0, 0, 0.03) inset, -1px -1px 30px 0px #FFF inset',
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
  plugins: [],
};
