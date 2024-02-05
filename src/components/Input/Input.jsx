import React from 'react';

export default function Input({
  id,
  type,
  value,
  onChange,
  placeholder,
  children,
  icon,
}) {
  return (
    <div className='flex items-center gap-[8px] border border-gray-scale-7-main rounded outline-none pl-[22px] shadow-[0px_5px_30px_-15px_rgba(0, 0, 0, 0.12)]'>
      {icon && <img src={`/assets/${icon}.svg`} alt='icon' />}
      <input
        className='w-0 h-[64px] flex-1 outline-none bg-transparent py-5 placeholder:gray-scale-4 placeholder:font-light'
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={type === 'password' ? 'current-password' : 'off'}
      />
      {children}
    </div>
  );
}
