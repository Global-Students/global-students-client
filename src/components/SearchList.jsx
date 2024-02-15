import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import DropDown from './DropDown';

export default function SearchList({
  boardName,
  boardId,
  total,
  showMore,
  dropDown,
}) {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center mb-5'>
        <div className='flex gap-x-[10px]'>
          <p className='text-gray-scale-2 text-xl font-semibold'>{boardName}</p>
          <p className='flex text-gray-scale-4 text-xl font-normal relative'>
            000건
            <div className='absolute left-[64px]'>
              {dropDown ? <DropDown /> : ''}
            </div>
          </p>
        </div>
        {showMore ? (
          <Link to={`${boardId}`} className='flex w-[63px] justify-between'>
            <p className='text-gray-scale-4 text-base font-normal'>더보기</p>
            <img src='/assets/arrow_forward_ios.svg' alt='더보기' />
          </Link>
        ) : (
          ''
        )}
      </div>
      {total ? <PostList total /> : <PostList />}
    </div>
  );
}
