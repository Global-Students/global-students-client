import React from 'react';
import TranslateButton from './Button/TranslateButton';

export default function SearchText({ value }) {
  return (
    <div className='flex flex-col w-[954px]'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-between text-[26px] font-bold'>
          <img src='/assets/manage_search.svg' alt='검색 결과' />
          <p className='text-orange-1'>
            &quot;<u>{value}</u>&quot;
          </p>
          <p className=''>검색 결과입니다.</p>
        </div>
        <TranslateButton />
      </div>
    </div>
  );
}