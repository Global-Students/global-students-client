/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'orange-main': '#FF743D',
        'orange-1': '#FF5500',
        'orange-4': '#FFA77B40',
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
        person: "url('/src/assets/person.svg')",
        key: "url('/src/assets/key.svg')",
        translate: "url('/src/assets/translate.svg')",
        cancel: "url('/src/assets/cancel.svg')",
        'check-circle': "url('/src/assets/check_circle.svg')",
        'check-true-circle': "url('/src/assets/check_true_circle.svg')",
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
