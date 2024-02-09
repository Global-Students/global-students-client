import React, { useState } from 'react';

export default function SearchInputKeyword({ header }) {
  const [search, setSearch] = useState('');
  const handleChange = (event) => setSearch(event.target.value);

  return (
    <div
      className={`flex ${
        header ? 'w-[803px] h-[59px]' : 'w-[496px] h-[50px]'
      } bg-gray-scale-8 rounded-[40px] justify-center items-center`}
    >
      <div
        className={`flex flex-row ${
          header ? 'w-[777px] h-[47px]' : 'w-[448px] h-[36px]'
        } justify-between items-center`}
      >
        <input
          className={`${
            header ? 'w-[730px]' : 'w-[412px]'
          } bg-gray-scale-8 text-gray-scale-4 text-base font-normal focus:outline-none text`}
          type='text'
          value={search}
          onChange={handleChange}
          placeholder='검색어를 입력하세요'
        />
        <button type='submit' className='rounded-full hover:bg-[#EBEBEB]'>
          <img
            src='/assets/search.svg'
            alt='search'
            className={`${header ? '' : 'w-9 h-9'}`}
          />
        </button>
      </div>
    </div>
  );
}
