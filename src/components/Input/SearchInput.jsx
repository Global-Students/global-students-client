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
  setIsFindSchool,
  bottom,
}) {
  const [keyword, setKeyword] = useState('');
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  const navigate = useNavigate();
  const clickSearchButton = () => {
    localStorage.setItem('q', keyword);
    if (placeholder === '학교명을 입력해주세요') {
      setIsFindSchool((prev) => !prev);
    } else {
      navigate(
        bottom
          ? `/search/total/detail/${localStorage.getItem(
              'currentBoardId',
            )}/${keyword}`
          : `/search/total/${keyword}`,
      );
      if (setSearchClick) {
        setSearchClick((prev) => !prev);
      }
    }
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
          value={keyword}
          onChange={handleChange}
          placeholder={
            placeholder ? `${placeholder}` : '검색어를 입력해주세요'
          }
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
