import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import SearchList from '../../components/SearchList';
import Pagination from '../../components/Pagination';

export default function SearchDetailListPage() {
  const {
    requrl,
    keyword,
    posts,
    pageInfo,
    boardInfo,
    setCurrPage,
    setCurrSort,
    setBoardInfo,
  } = useOutletContext();

  const normalStyle = `text-gray-scale-4 font-light`;
  const activeStyle = `border-b-2 border-orange-main text-orange-main font-normal `;

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-[954px] h-[31px] justify-end border-b border-gray-scale-7-main mb-[20px]'>
        <Link
          to={requrl}
          onClick={() =>
            setBoardInfo({
              boardId: 0,
              boardName: '전체',
            })
          }
          className={requrl.includes(`?boardId=0&`) ? activeStyle : normalStyle}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>전체</p>
        </Link>
        <Link
          to={requrl}
          onClick={() =>
            setBoardInfo({
              boardId: localStorage.getItem('boardId_1'),
              boardName: localStorage.getItem('boardName_1'),
            })
          }
          className={
            requrl.includes(`?boardId=${localStorage.getItem('boardId_1')}&`)
              ? activeStyle
              : normalStyle
          }
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_1')}
          </p>
        </Link>
        <Link
          to={requrl}
          onClick={() =>
            setBoardInfo({
              boardId: localStorage.getItem('boardId_2'),
              boardName: localStorage.getItem('boardName_2'),
            })
          }
          className={
            requrl.includes(`?boardId=${localStorage.getItem('boardId_2')}&`)
              ? activeStyle
              : normalStyle
          }
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_2')}
          </p>
        </Link>
        <Link
          to={requrl}
          onClick={() =>
            setBoardInfo({
              boardId: localStorage.getItem('boardId_3'),
              boardName: localStorage.getItem('boardName_3'),
            })
          }
          className={
            requrl.includes(`?boardId=${localStorage.getItem('boardId_3')}&`)
              ? activeStyle
              : normalStyle
          }
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
