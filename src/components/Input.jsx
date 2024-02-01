import React from 'react';

export default function Input({
  id,
  type,
  value,
  onChange,
  placeholder,
  icon,
  children,
}) {
  const icons = {
    person:
      'w-full h-[64px] border border-gray-scale-7-main rounded outline-none bg-person bg-[22px_center] bg-no-repeat placeholder:gray-scale-4 placeholder:text-[18px] pl-[52px] pr-[44px] py-5 shadow',
    key: 'w-full h-[64px] border border-gray-scale-7-main rounded outline-none bg-key bg-[22px_center] bg-no-repeat placeholder:gray-scale-4 placeholder:text-[18px] pl-[52px] pr-[44px] py-5 shadow',
    [undefined]:
      'w-full h-[64px] border border-gray-scale-7-main rounded outline-none px-[19px] py-5 shadow-[0px_5px_30px_-15px_rgba(0, 0, 0, 0.12)] placeholder:gray-scale-4 placeholder:font-light',
  };

  return (
    <div className='relative'>
      <input
        className={icons[icon]}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={type === 'password' ? 'current-password' : 'off'}
      />
      <div className='absolute top-1/2 right-0 -translate-y-1/2 flex justify-end items-center'>
        {children}
      </div>
    </div>
  );
}
