import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import SearchList from '../../components/SearchList';
import Pagination from '../../components/Pagination';
import useSearchList from '../../hooks/useSearchList';

export default function SearchDetailListPage() {
  const params = useParams();
  const [boardName, setBoardName] = useState('');
  const { posts, pageInfo, setCurrPage, setCurrSort } = useSearchList(
    params.boardId,
    boardName,
  );
  const normalStyle = `text-gray-scale-4 font-light`;
  const activeStyle = `border-b-2 border-orange-main text-orange-main font-normal `;

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-[954px] h-[31px] justify-end border-b border-gray-scale-7-main mb-[20px]'>
        <NavLink
          to={`/search/total/detail/전체/${params.keyword}`}
          onClick={() => setBoardName('전체')}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>전체</p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/${localStorage.getItem('boardId_1')}/${
            params.keyword
          }`}
          onClick={() => setBoardName(`${localStorage.getItem('boardName_1')}`)}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_1')}
          </p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/${localStorage.getItem('boardId_2')}/${
            params.keyword
          }`}
          onClick={() => setBoardName(`${localStorage.getItem('boardName_2')}`)}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_2')}
          </p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/${localStorage.getItem('boardId_3')}/${
            params.keyword
          }`}
          onClick={() => setBoardName(`${localStorage.getItem('boardName_3')}`)}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_3')}
          </p>
        </NavLink>
      </div>
      <SearchList
        boardId={params.boardId}
        boardName={boardName}
        dropDown
        posts={posts}
        keyword={params.keyword}
        pageInfo={pageInfo}
        setCurrSort={setCurrSort}
      />
      <Pagination pageInfo={pageInfo} setCurrPage={setCurrPage} />
    </div>
  );
}
