import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchList from '../../components/SearchList';
import BOARD_NAME from '../../constants/boardName';
import Pagination from '../../components/Pagination';

export default function SearchDetailListPage() {
  const [boardName, setBoardName] = useState('');
  const normalStyle = `text-gray-scale-4 font-light `;
  const activeStyle = `border-b-2 border-orange-main text-orange-main font-normal `;

  return (
    <div className='flex flex-col items-center'>
      <div className='flex h-[31px] border-b border-gray-scale-7-main justify-end items-center mb-[20px]'>
        {BOARD_NAME.map((BOARD) => (
          <NavLink
            onClick={() => setBoardName(BOARD)}
            to={`/search/${BOARD}`}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            <p className='h-[31px] px-[13px] text-center text-base'>{BOARD}</p>
          </NavLink>
        ))}
      </div>
      <SearchList boardName={boardName} dropDown />
      <Pagination />
    </div>
  );
}
