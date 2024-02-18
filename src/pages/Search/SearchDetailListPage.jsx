import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import SearchList from '../../components/SearchList';
import Pagination from '../../components/Pagination';
import useSearchList from '../../hooks/useSearchList';

export default function SearchDetailListPage() {
  const { boardInfo, setBoardInfo } = useOutletContext();
  const {
    requrl,
    queryStr,
    setCurrPage,
    setCurrSort,
    keyword,
    pageInfo,
    posts,
  } = useSearchList(boardInfo.boardId, boardInfo.boardName);
  const normalStyle = `text-gray-scale-4 font-light`;
  const activeStyle = `border-b-2 border-orange-main text-orange-main font-normal `;

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-[954px] h-[31px] justify-end border-b border-gray-scale-7-main mb-[20px]'>
        <Link
          to={`/search/total/detail/?${queryStr}`}
          className={
            queryStr.includes(`boardId=전체&`) ? activeStyle : normalStyle
          }
          onClick={() => {
            setBoardInfo('전체', '전체');
          }}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>전체</p>
        </Link>
        <Link
          to={`/search/total/detail/?${queryStr}`}
          className={
            queryStr.includes(`boardId=${localStorage.getItem('boardId_1')}&`)
              ? activeStyle
              : normalStyle
          }
          onClick={() => {
            setBoardInfo(
              localStorage.getItem('boardId_1'),
              localStorage.getItem('boardName_1'),
            );
          }}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_1')}
          </p>
        </Link>
        <Link
          to={`/search/total/detail/?${queryStr}`}
          className={
            queryStr.includes(`boardId=${localStorage.getItem('boardId_2')}&`)
              ? activeStyle
              : normalStyle
          }
          onClick={() => {
            setBoardInfo(
              localStorage.getItem('boardId_2'),
              localStorage.getItem('boardName_2'),
            );
          }}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_2')}
          </p>
        </Link>
        <Link
          to={`/search/total/detail/?${queryStr}`}
          className={
            queryStr.includes(`boardId=${localStorage.getItem('boardId_3')}&`)
              ? activeStyle
              : normalStyle
          }
          onClick={() => {
            setBoardInfo(
              localStorage.getItem('boardId_3'),
              localStorage.getItem('boardName_3'),
            );
          }}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_3')}
          </p>
        </Link>
      </div>
      <SearchList
        boardInfo={boardInfo}
        dropDown
        posts={posts}
        keyword={keyword}
        setCurrSort={setCurrSort}
        pageInfo={pageInfo}
      />
      <Pagination
        requrl={requrl}
        boardInfo={boardInfo}
        pageInfo={pageInfo}
        setCurrPage={setCurrPage}
      />
    </div>
  );
}
