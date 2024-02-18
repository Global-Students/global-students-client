import React from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from './DropDown';
import OrangeButton from './Button/OrangeButton';
import PostList from './PostList';
import Pagination from './Pagination';
import SearchInput from './Input/SearchInput';

export default function Posts({
  pageInfo,
  posts,
  setCurrPage,
  setCurrSort,
  boardId,
  bottom,
}) {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-[953px]'>
      <div className='flex flex-row h-[34px] justify-between items-center mb-[16px]'>
        <div className='flex flex-row gap-x-[16px] justify-between items-center relative'>
          <p className='text-gray-scale-1 text-2xl font-medium text-center mr-[16px]'>
            게시글
          </p>
          <div className='absolute left-[79px] top-[2px]'>
            <DropDown setCurrSort={setCurrSort} />
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='w-[115px] h-[34px]'>
            <OrangeButton
              text='글쓰기'
              onClick={() => navigate('/auth/post-create')}
            />
          </div>
        </div>
      </div>
      <PostList posts={posts} boardId={boardId} />
      <div className='flex flex-col items-center'>
        <Pagination pageInfo={pageInfo} setCurrPage={setCurrPage} />
        <SearchInput
          width='w-[496px]'
          height='h-[50px]'
          px='px-[24px]'
          searchInBox
          bottom={bottom}
        />
      </div>
    </div>
  );
}
