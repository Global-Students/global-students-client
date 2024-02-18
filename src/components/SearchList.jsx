import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import DropDown from './DropDown';

export default function SearchList({
  boardInfo,
  total,
  showMore,
  dropDown,
  posts,
  keyword,
  setCurrSort,
  pageInfo,
}) {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center mb-5'>
        <div className='flex gap-x-[10px]'>
          <p className='text-gray-scale-2 text-xl font-semibold'>
            {boardInfo.boardName}
          </p>
          <p className='flex text-gray-scale-4 text-xl font-normal'>
            {pageInfo.totalPost}건
          </p>
          {dropDown ? (
            <div className='relative'>
              <DropDown setCurrSort={setCurrSort} />
            </div>
          ) : (
            ''
          )}
        </div>
        {showMore ? (
          <Link
            to={`/search/total/?boardId=${boardInfo.boardId}&q=${keyword}`}
            className='flex w-[63px] justify-between'
          >
            <p className='text-gray-scale-4 text-base font-normal'>더보기</p>
            <img src='/assets/arrow_forward_ios.svg' alt='더보기' />
          </Link>
        ) : (
          ''
        )}
      </div>
      {total ? (
        <PostList posts={posts} keyword={keyword} total />
      ) : (
        <PostList posts={posts} keyword={keyword} />
      )}
    </div>
  );
}
