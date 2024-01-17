import React from 'react';

export default function Input({ id, type, placeholder, icon }) {
  const icons = {
    person:
      'w-full h-[64px] border border-gray-scale-7-main rounded outline-none bg-person bg-[22px_center] bg-no-repeat placeholder-gray-scale-4 placeholder:text-[18px] pl-[52px] pr-[44px] py-5 shadow',
    key: 'w-full h-[64px] border border-gray-scale-7-main rounded outline-none bg-key bg-[22px_center] bg-no-repeat placeholder-gray-scale-4 placeholder:text-[18px] pl-[52px] pr-[44px] py-5 shadow',
  };

  return (
    <div className='relative'>
      <input
        className={icons[icon]}
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={type === 'password' ? 'current-password' : 'off'}
      />
      <span className='absolute top-1/2 right-[22px] -translate-y-1/2 w-[22px] h-[22px] bg-cancel bg-no-repeat bg-center cursor-pointer hover:scale-110 transition-all' />
    </div>
  );
}
