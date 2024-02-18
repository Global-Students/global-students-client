import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import SearchList from '../../components/SearchList';
import Pagination from '../../components/Pagination';
import useSearchList from '../../hooks/useSearchList';

export default function SearchDetailListPage() {
  const params = useParams();
  const [baseUrl, setBaseUrl] = useState(
    `search/total/detail/${params.boardId}/${localStorage.getItem('q')}`,
  );
  const [boardName, setBoardName] = useState('');
  const [boardId, setboardId] = useState();
  const changeBaseUrl = () => {
    setBaseUrl(`search/total/detail/${boardId}/${localStorage.getItem('q')}`);
  };

  const { posts, pageInfo, currPage, setCurrPage } = useSearchList(
    params.boardId,
    boardName,
  );

  useEffect(() => {
    changeBaseUrl();
  }, [boardId, currPage]);

  const normalStyle = `text-gray-scale-4 font-light`;
  const activeStyle = `border-b-2 border-orange-main text-orange-main font-normal `;
  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-[954px] h-[31px] justify-end border-b border-gray-scale-7-main mb-[20px]'>
        <NavLink
          to={`/search/total/detail/${localStorage.getItem(
            'boardId_1',
          )}/${localStorage.getItem('q')}`}
          onClick={() => {
            setBoardName(`${localStorage.getItem('boardName_1')}`);
            setboardId(`${localStorage.getItem('boardId_1')}`);
          }}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_1')}
          </p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/${localStorage.getItem(
            'boardId_2',
          )}/${localStorage.getItem('q')}`}
          onClick={() => {
            setBoardName(`${localStorage.getItem('boardName_2')}`);
            setboardId(`${localStorage.getItem('boardId_2')}`);
          }}
          className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          <p className='h-[31px] px-[13px] text-center text-base'>
            {localStorage.getItem('boardName_2')}
          </p>
        </NavLink>
        <NavLink
          to={`/search/total/detail/${localStorage.getItem(
            'boardId_3',
          )}/${localStorage.getItem('q')}`}
          onClick={() => {
            setBoardName(`${localStorage.getItem('boardName_3')}`);
            setboardId(`${localStorage.getItem('boardId_3')}`);
          }}
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
        posts={posts}
        keyword={params.keyword}
        pageInfo={pageInfo}
      />
      <Pagination
        baseUrl={baseUrl}
        pageInfo={pageInfo}
        setCurrPage={setCurrPage}
      />
    </div>
  );
}
