import React from 'react';
import TranslateButton from './Button/TranslateButton';

export default function PostHeader() {
  return (
    <div className='flex flex-col justify-center w-[954px] h-[49px] rounded-[14px] border border-gray-scale-8 bg-gray-scale-8'>
      <div className="flex flex-row justify-between px-[6px]">
        <div className="flex flex-row items-center px-[10px]">
          <img src='../../assets/arrow_back_ios.svg' alt='arrow_back_ios' />
          <p className='text-gray-scale-3 text-[15px] font-normal px-[10px]'>Hanyang Univ. All Students</p>
        </div>
        <TranslateButton/>
      </div>
    </div>
  );
}

