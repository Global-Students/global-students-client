import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import SearchList from '../../components/SearchList';
import Pagination from '../../components/Pagination';
// import useSearchList from '../../hooks/useSearchList';

export default function SearchDetailListPage() {
  const location = useLocation();
  const nowBoardInfo = location.state;
  const params = useParams();

  const normalStyle = `text-gray-scale-4 font-light`;
  const activeStyle = `border-b-2 border-orange-main text-orange-main font-normal `;

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-[954px] h-[31px] justify-end border-b border-gray-scale-7-main mb-[20px]'>
        <NavLink
          to={`/search/total/detail/?${nowBoardInfo.queryStr}`}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>전체</p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/?${nowBoardInfo.queryStr}`}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_1')}
          </p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/?${nowBoardInfo.queryStr}`}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_2')}
          </p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/?${nowBoardInfo.queryStr}`}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_3')}
          </p>
        </NavLink>
      </div>
      <SearchList
        boardId={params.boardId}
        boardName={nowBoardInfo.boardName}
        dropDown
        posts={nowBoardInfo.posts}
        keyword={params.keyword}
        pageInfo={nowBoardInfo.pageInfo}
      />
      <Pagination
        requrl={nowBoardInfo.requrl}
        pageInfo={nowBoardInfo.pageInfo}
      />
    </div>
  );
}
