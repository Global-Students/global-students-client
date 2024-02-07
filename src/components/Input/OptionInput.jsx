import React from 'react';

export default function OptionInput({
  id,
  value,
  options,
  placeholder,
  onChange,
  children,
}) {
  return (
    <div className='flex border border-gray-scale-7-main rounded px-[19px] py-5 shadow-[0px_5px_30px_-15px_rgba(0, 0, 0, 0.12)]'>
      <select
        className='flex-1 appearance-none outline-none'
        id={id}
        value={value}
        onChange={onChange}
      >
        <option value=''>{placeholder}</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <p className='text-gray-scale-4 font-light'>{children}</p>
    </div>
  );
}
