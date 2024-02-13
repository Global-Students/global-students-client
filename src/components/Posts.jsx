import React from 'react';
import DropDown from './DropDown';
import OrangeButton from './Button/OrangeButton';
import PostList from './PostList';
import Pagination from './Pagination';
import SearchInput from './Input/SearchInput';

export default function Posts() {
  return (
    <div className='flex flex-col w-[953px]'>
      <div className='flex flex-row h-[34px] justify-between items-center mb-[16px]'>
        <div className='flex flex-row gap-x-[16px] justify-between items-center'>
          <p className='text-gray-scale-1 text-2xl font-medium text-center mr-[16px]'>
            게시글
          </p>
          <DropDown />
        </div>
        <div className='flex justify-end'>
          <OrangeButton text='글쓰기' width={115} textSize={15} py={8} />
        </div>
      </div>
      <PostList />
      <div className='flex flex-col items-center'>
        <Pagination />
        <SearchInput
          width='w-[496px]'
          height='h-[50px]'
          px='px-[24px]'
          placeholder='검색어를 입력해주세요'
          searchInBox
        />
      </div>
    </div>
  );
}
