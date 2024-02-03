import React from 'react';

export default function BirthDayInput({
  id,
  value,
  options,
  onChange,
  placeholder,
}) {
  return (
    <div className='relative'>
      <select
        className='appearance-none w-full h-[64px] border border-gray-scale-7-main rounded outline-none px-[19px] py-5 shadow-[0px_5px_30px_-15px_rgba(0, 0, 0, 0.12)] placeholder:gray-scale-4 placeholder:font-light'
        id={id}
        value={value}
        onChange={onChange}
      >
        <option value=''>----</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <p className='absolute top-1/2 right-0 -translate-y-1/2 flex justify-end items-centerbg-white text-gray-scale-4 font-light pl-[4px] mr-[19px]'>
        {placeholder}
      </p>
    </div>
  );
}
