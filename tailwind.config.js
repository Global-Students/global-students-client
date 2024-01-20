/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'orange-main': '#FF743D',
        'gray-scale-1': '#1E1E1E',
        'gray-scale-3': '#50545E',
        'gray-scale-4': '#808593',
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
        message: "url('/src/assets/message.svg')",
        messageHover: "url('/src/assets/messageHover.svg')",
        messageHoverPress: "url('/src/assets/messageHoverPress.svg')",
        messagePress: "url('/src/assets/messagePress.svg')",
        search: "url('/src/assets/search.svg')",
        searchHover: "url('/src/assets/searchHover.svg')",
        mypage: "url('/src/assets/mypage.svg')",
        mypageHover: "url('/src/assets/mypageHover.svg')",
        mypageHoverPress: "url('/src/assets/mypageHoverPress.svg')",
        mypagePress: "url('/src/assets/mypagePress.svg')",
      },
      boxShadow: {
        DEFAULT: '0px 5px 30px -15px rgba(0, 0, 0, 0.20)',
        'inner-orange':
          '-12px -12px 14.3px 1px rgba(255, 85, 0, 0.20) inset, -2px -2px 6.7px 0px rgba(255, 255, 255, 0.25) inset, 3px 3px 5px -2px rgba(255, 255, 255, 0.25) inset',
      },
      fontSize: {
        navBarFont: [
          '15px',
          { lineHeight: '20px', letterSpacing: '-0.02em', fontWeight: '500' },
        ],
      },
    },
  },
  plugins: [],
};
