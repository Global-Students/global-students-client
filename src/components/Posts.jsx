import React from 'react';
import DropDown from './DropDown';
import OrangeButton from './Button/OrangeButton';
import PostList from './PostList';

export default function Posts() {
  return (
    <div className='flex flex-col w-[953px] mb-[30px]'>
      <div className='flex flex-row h-[34px] justify-between items-center mb-[16px]'>
        <div className='flex flex-row gap-x-[16px] justify-between items-center'>
          <p className='text-gray-scale-1 text-2xl font-medium text-center mr-[16px]'>
            게시글
          </p>
          <DropDown />
        </div>
        <div className='flex justify-end'>
          <OrangeButton text='글쓰기' textSize={15} py={8} width={115} />
        </div>
      </div>
      <PostList />
    </div>
  );
}
