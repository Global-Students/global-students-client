import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SearchList from '../../components/SearchList';
import Pagination from '../../components/Pagination';
import useSearchList from '../../hooks/useSearchList';

export default function SearchDetailListPage() {
  const location = useLocation();
  const { nowBoardInfo } = location.state;
  const {
    requrl,
    queryStr,
    setCurrPage,
    setCurrSort,
    keyword,
    pageInfo,
    posts,
  } = useSearchList(nowBoardInfo.boardId, nowBoardInfo.boardName);

  const normalStyle = `text-gray-scale-4 font-light`;
  const activeStyle = `border-b-2 border-orange-main text-orange-main font-normal `;

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-[954px] h-[31px] justify-end border-b border-gray-scale-7-main mb-[20px]'>
        <NavLink
          to={`/search/total/detail/?${queryStr}`}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>전체</p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/?${queryStr}`}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_1')}
          </p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/?${queryStr}`}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_2')}
          </p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/?${queryStr}`}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_3')}
          </p>
        </NavLink>
      </div>
      <SearchList
        boardId={nowBoardInfo.boardId}
        boardName={nowBoardInfo.boardName}
        dropDown
        posts={posts}
        keyword={keyword}
        setCurrSort={setCurrSort}
        pageInfo={pageInfo}
      />
      <Pagination
        requrl={requrl}
        pageInfo={pageInfo}
        setCurrPage={setCurrPage}
      />
    </div>
  );
}
