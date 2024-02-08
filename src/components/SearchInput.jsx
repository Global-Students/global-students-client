import React from 'react';
// w-[496px] h-[50px]
export default function SearchInput({ width, height, divWidth, placeholder }) {
  return (
    <div
      className={`flex flex-row w-[${width}px] h-[${height}px] bg-gray-scale-8 rounded-[40px] justify-center items-center`}
    >
      <div
        className={`flex flex-row ${
          divWidth ? `w-[448px]` : 'w-[777px]'
        } h-[${height}px] justify-between items-center`}
      >
        <input
          className={`w-[${width}px] bg-gray-scale-8 text-gray-scale-4 text-base font-normal text-left focus:outline-none`}
          type='text'
          placeholder={placeholder}
        />
        <button type='submit'>
          <img src='/assets/search.svg' alt='search' className='w-9 h-9' />
        </button>
      </div>
    </div>
  );
}
