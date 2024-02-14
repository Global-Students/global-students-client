import React, { useState } from 'react';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const handleChange = (event) => setSearch(event.target.value);
  const layoutStyle =
    'w-[485px] flex rounded-[30px] bg-gray-scale-8 px-[20px] py-[5px]';
  const searchBoxStyle =
    'flex-1 bg-gray-scale-8 text-[16px] placeholder:text-gray-scale-4 font-normal leading outline-none';
  const searchButtonStyle =
    'w-[36px] h-[36px] hover:rounded-full hover:bg-[#EBEBEB] transition-all';

  return (
    <div className={layoutStyle}>
      <input
        className={searchBoxStyle}
        type='search'
        value={search}
        onChange={handleChange}
        placeholder='검색어를 입력하세요'
      />
      <button type='button'>
        <img
          className={searchButtonStyle}
          src='/assets/search.svg'
          alt='돋보기'
        />
      </button>
    </div>
  );
}
