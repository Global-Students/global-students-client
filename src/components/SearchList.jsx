import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import DropDown from './DropDown';
import useSearchList from '../hooks/useSearchList';

export default function SearchList({
  boardName,
  boardId,
  total,
  showMore,
  dropDown,
  setBoardInfo,
}) {
  const { queryStr, setCurrSort, keyword, pageInfo, posts } = useSearchList({
    boardId,
    boardName,
  });

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center mb-5'>
        <div className='flex gap-x-[10px]'>
          <p className='text-gray-scale-2 text-xl font-semibold'>{boardName}</p>
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
            to={`/search/total/detail/?${queryStr}`}
            className='flex w-[63px] justify-between'
            onClick={() => setBoardInfo({ boardId }, { boardName })}
          >
            <p className='text-gray-scale-4 text-base font-normal'>더보기</p>
            <img src='/assets/arrow_forward_ios.svg' alt='더보기' />
          </Link>
        ) : (
          ''
        )}
      </div>
      {total ? (
        <PostList posts={posts} keyword={keyword} boardId={boardId} total />
      ) : (
        <PostList posts={posts} boardId={boardId} keyword={keyword} />
      )}
    </div>
  );
}
