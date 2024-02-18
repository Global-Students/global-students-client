import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserInfoControl from '../../components/UserInfoControl';
import SearchText from '../../components/SearchText';
import SearchInput from '../../components/Input/SearchInput';

export default function Search() {
  const [boardInfo, setBoardInfo] = useState({ boardId: '', boardName: '' });
  return (
    <div className='flex flex-row h-[1824px] justify-center items-center'>
      <div className='flex w-[1279px] h-[1651px] justify-start gap-x-[24px]'>
        <UserInfoControl />
        <div>
          <div className='flex flex-col w-[954px] h-[109px] justify-between items-center mb-[60px]'>
            <SearchText keyword={localStorage.getItem('q')} />
            <SearchInput
              width='w-[540px]'
              height='h-[50px]'
              px='px-[24px]'
              placeholder={localStorage.getItem('q')}
            />
          </div>
          <Outlet context={{ boardInfo, setBoardInfo }} />
        </div>
      </div>
    </div>
  );
}
