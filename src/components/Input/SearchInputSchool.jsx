import React from 'react';

export default function SearchInputSchool() {
  return (
    <div className='flex w-[272px] h-[51px] bg-gray-scale-8 rounded-[40px] justify-end items-center'>
      <div className='flex flex-row w-[250px] h-[47px] justify-end items-center'>
        <input
          className='w-[203px] bg-gray-scale-8 text-gray-scale-4 text-base font-normal focus:outline-none text'
          type='text'
          placeholder='학교명을 입력해주세요'
        />
        <button
          type='submit'
          className='flex justify-center items-center rounded-full hover:bg-[#EBEBEB]'
        >
          <img src='/assets/search.svg' alt='search' className='' />
        </button>
      </div>
    </div>
  );
}
