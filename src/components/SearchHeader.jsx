import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

export default function SearchHeader() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex w-[1280px] h-[525px] justify-center items-center'>
        <div className='flex flex-col w-[1280px] h-[457px]'>
          <div className='flex flex-row w-[1213px] h-[61px] justify-between items-center'>
            <Link to='/' className='flex w-[216px]'>
              <img src='/assets/logoHeader.svg' alt='logo' />
            </Link>
            <div className='flex flex-row w-[888px] h-[60px] justify-between items-center'>
              <SearchInput
                width={803}
                height={60}
                placeholder='검색어를 입력해주세요.'
              />
              <button
                type='button'
                className='flex w-[60px] h-[60px] justify-center items-center rounded-full bg-gray-scale-8 hover:bg-gray-scale-7-main'
              >
                <img src='/assets/close.svg' alt='close' />
              </button>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}
