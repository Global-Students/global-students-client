import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchInput({
  width,
  height,
  pl,
  pr,
  px,
  placeholder,
  searchInBox,
  setSearchClick,
}) {
  const [search, setSearch] = useState('');
  const handleChange = (event) => setSearch(event.target.value);
  const navigate = useNavigate();
  const clickSearchButton = () => {
    setSearchClick((prev) => !prev);
    navigate(`/search/${search}/전체`);
  };
  const defaultStyle = `flex rounded-[30px] bg-gray-scale-8`;
  const searchBoxStyle = `flex-1 w-full h-full bg-gray-scale-8 text-[16px] text-gray-scale-4 text-base font-normal placeholder:text-gray-scale-4 font-normal leading outline-none`;
  return (
    <div
      className={`${width ? `${width}` : ''} ${height ? `${height}` : ''} ${
        pl ? `${pl}` : ''
      } ${pr ? `${pr}` : ''} ${px ? `${px}` : ''} ${defaultStyle}
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
        <button type='button' onClick={clickSearchButton}>
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
