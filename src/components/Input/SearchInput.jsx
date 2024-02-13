import React, { useState } from 'react';
/** input 컴포넌트의 크기는 부모에 맞게 자동으로 맞춰지게 수정하고, div로 감싸서 width, height을 커스텀 할 수 있게 구현해보는 건 어떨까요 ?_? */
export default function SearchInput({
  width,
  height,
  pl,
  pr,
  px,
  placeholder,
  searchInBox,
}) {
  const [search, setSearch] = useState('');
  const handleChange = (event) => setSearch(event.target.value);

  const searchBoxStyle = `flex-1 w-full h-full bg-gray-scale-8 text-[16px] text-gray-scale-4 text-base font-normal placeholder:text-gray-scale-4 font-normal leading outline-none`;
  return (
    <div
      className={`flex rounded-[30px] bg-gray-scale-8 ${
        width ? `w-[${width}px]` : ''
      } ${height ? `h-[${height}px]` : ''} ${pl ? `pl-[${pl}px]` : ''} ${
        pr ? `pr-[${pr}px]` : ''
      } ${px ? `px-[${px}px]` : ''} 
      `}
    >
      <div className='flex w-full h-full'>
        <input
          className={searchBoxStyle}
          type='search'
          value={search}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <button type='button'>
          <img
            className='hover:bg-[#EBEBEB] rounded-full duration-300'
            src={`/assets/${searchInBox ? 'searchInBox' : 'search'}.svg`}
            alt='돋보기'
          />
        </button>
      </div>
    </div>
  );
}
