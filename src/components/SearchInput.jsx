import React from 'react';

export default function SearchInput() {
  return (
    <div className='flex w-[496px] h-[50px] bg-gray-scale-8 rounded-[40px] justify-center items-center'>
      <div className='flex flex-row w-[448px] h-[36px] justify-between items-center'>
        <input
          className='w-[412px] bg-gray-scale-8 text-gray-scale-4 text-base font-normal focus:outline-none text'
          type='text'
          placeholder='검색어를 입력하세요'
        />
        <button type='submit'>
          <img src='/assets/search.svg' alt='search' className='w-9 h-9' />
        </button>
      </div>
    </div>
  );
}
