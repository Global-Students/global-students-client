import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../Input/SearchInput';
import FindSchool from './FindSchoolBox';
import RealTimePopularPosts from './RealTimePopularPosts';

export default function SearchHeader({ searchClick, setSearchClick }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex w-[1280px] h-[525px] bg-white justify-center items-center'>
        <div className='flex flex-col w-[1280px] h-[457px] justify-between'>
          <div className='flex flex-row w-[1213px] h-[61px] bg-gray-scale-9 justify-between items-center'>
            <Link to='/' className='flex w-[216px]'>
              <img src='/assets/logoHeader.svg' alt='logo' />
            </Link>
            <div className='flex flex-row w-[888px] h-[60px] justify-between items-center'>
              <SearchInput
                width='w-[803px]'
                height='h-[59px]'
                pl='pl-[19px]'
                pr='pr-[7px]'
                placeholder='검색어를 입력해주세요'
              />
              <button
                onClick={() => setSearchClick(!searchClick)}
                type='button'
                className='flex w-[60px] h-[60px] justify-center items-center rounded-full bg-gray-scale-8 hover:bg-[#EBEBEB]'
              >
                <img src='/assets/close.svg' alt='close' />
              </button>
            </div>
          </div>
          <div className='flex flex-row justify-between items-end'>
            <FindSchool />
            <RealTimePopularPosts />
          </div>
        </div>
      </div>
      <div className='w-full h-[1470px] backdrop-blur-sm' />
    </div>
  );
}
