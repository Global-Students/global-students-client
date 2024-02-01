import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Pagination() {
  const boardId = 'All';
  const commonStyle = `flex w-7 h-7 justify-center items-center rounded-full border border-gray-scale-7-main text-center text-gray-scale-2 text-xs font-light hover:bg-gray-scale-7-main duration-500`;
  const activeStyle = `flex w-7 h-7 justify-center items-center rounded-full bg-orange-main text-center text-gray-scale-9 text-xs font-light duration-500`;
  return (
    <div className='flex w-[640px] h-10 justify-center items-center bg-white rounded-[100px] border border-gray-scale-8 mb-3'>
      <ul className='flex flex-row w-[610px] h-7 justify-between items-center'>
        <li>
          <img
            src='/assets/keyboard_double_arrow_left.svg'
            alt='double_arrow_left'
          />
        </li>
        <div className='flex flex-row w-[416px] justify-between items-center'>
          <li>
            <img src='/assets/keyboard_arrow_left.svg' alt='arrow_left' />
          </li>
          <div className='flex flex-row w-[340px] justify-between'>
            <NavLink
              to={`/NoticeBoard/${boardId}`}
              className={({ isActive }) =>
                isActive ? activeStyle : commonStyle
              }
            >
              1
            </NavLink>
          </div>
          <li>
            <img src='/assets/keyboard_arrow_right.svg' alt='arrow_right' />
          </li>
        </div>
        <li>
          <img
            src='/assets/keyboard_double_arrow_right.svg'
            alt='double_arrow_right'
          />
        </li>
      </ul>
    </div>
  );
}
