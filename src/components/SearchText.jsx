import React from 'react';
import TranslateButton from './Button/TranslateButton';

export default function SearchText() {
  return (
    <div className='flex flex-col w-[954px]'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-between text-[26px] font-bold'>
          <img src='/assets/manage_search.svg' alt='검색 결과' />
          <p className='text-orange-1'>
            &nbsp;&quot;<u>{localStorage.getItem('q')}</u>&quot;
          </p>
          <p className=''>&nbsp;검색 결과입니다.</p>
        </div>
        <TranslateButton />
      </div>
    </div>
  );
}
