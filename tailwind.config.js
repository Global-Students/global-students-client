/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'orange-main': '#FF743D',
        'gray-scale-3': '#50545E',
        'gray-scale-4': '#808593',
        'gray-scale-5': '#B7BECF',
        'gray-scale-6': '#CFD5E3',
        'gray-scale-7-main': '#E7EAF2',
        'gray-scale-8': '#F5F5F5',
      },
      borderRadius: {
        DEFAULT: '14px',
      },
      backgroundImage: {
        person: "url('/src/assets/person.svg')",
        key: "url('/src/assets/key.svg')",
        translate: "url('/src/assets/translate.svg')",
        cancel: "url('/src/assets/cancel.svg')",
        'check-circle': "url('/src/assets/check_circle.svg')",
        'check-true-circle': "url('/src/assets/check_true_circle.svg')",
      },
      boxShadow: {
        DEFAULT: '0px 5px 30px -15px rgba(0, 0, 0, 0.20)',
        'inner-orange':
          '-12px -12px 14.3px 1px rgba(255, 85, 0, 0.20) inset, -2px -2px 6.7px 0px rgba(255, 255, 255, 0.25) inset, 3px 3px 5px -2px rgba(255, 255, 255, 0.25) inset',
      },
    },
  },
  plugins: [],
};
