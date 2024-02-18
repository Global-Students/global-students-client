import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from '../Input/SearchInput';
import SearchResultsDropdown from '../SearchResultsDropdown';

export default function FindSchoolBox({ setSearchClick }) {
  const [isClick, setIsClick] = useState(false);
  const [isFindSchool, setIsFindSchool] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  function handleToggle() {
    setIsClick((prev) => !prev);
  }
  const baseurl = `/search/university`;
  const q = localStorage.getItem('q');
  const params = {
    q: localStorage.getItem('q'),
  };

  const queryStr = new URLSearchParams(params).toString();
  const requrl = `${baseurl}/?${queryStr}`;

  const getFindSchool = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: requrl,
      });
      if (res.data.code === 'CHAT201_1') {
        setSearchResults(res.data.result.searchResults);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFindSchool();
  }, []);

  return (
    <div className='flex flex-col w-[302px] h-[354px] bg-white rounded-[20px] border border-gray-scale-8 items-center justify-center'>
      <div className='flex flex-col h-[308px] items-center justify-between'>
        <div className='flex flex-row w-[158px] items-center justify-between relative'>
          <p className='text-gray-scale-2 text-lg font-semibold'>
            다른 학교 탐방하기
          </p>
          <button type='button' onClick={handleToggle}>
            <img src='/assets/help.svg' alt='help' />
          </button>
          <div
            className={`flex w-[209px] h-[41px] z-10 absolute left-[160px] top-[2px] bg-bubbleName ${
              isClick ? 'block' : 'hidden'
            }`}
          >
            <div className='flex flex-row ml-[16px] items-center'>
              <p className='w-[171px] h-[24px] text-gray-scale-2 text-[10px] font-normal leading-3 tracking-tight'>
                학교탐방기능에 대한 설명 학교탐방기능에 대한 설명 학교탐방기능에
                대한 설명
              </p>
              <button type='button' onClick={handleToggle}>
                <img src='/assets/close_small.svg' alt='close_small' />
              </button>
            </div>
          </div>
        </div>
        <img src='/assets/group.svg' alt='group' />
        <div className='relative'>
          <SearchInput
            width='w-[272px]'
            height='h-[51px]'
            pl='pl-[19px]'
            pr='pr-[3px]'
            placeholder='학교명을 입력해주세요'
            setSearchClick={setSearchClick}
            setIsFindSchool={setIsFindSchool}
          />
          {isFindSchool ? (
            <SearchResultsDropdown
              setSearchClick={setSearchClick}
              searchResults={searchResults}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
