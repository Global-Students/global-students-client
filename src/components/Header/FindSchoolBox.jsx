import React, { useState } from 'react';
import SearchInputSchool from '../Input/SearchInputSchool';

export default function FindSchoolBox() {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className='flex flex-col w-[302px] h-[354px] bg-white rounded-[20px] border border-gray-scale-8 items-center justify-center'>
      <div className='flex flex-col h-[308px] items-center justify-between'>
        <div className='flex flex-row w-[158px] items-center justify-between relative'>
          <p className='text-gray-scale-2 text-lg font-semibold'>
            다른 학교 탐방하기
          </p>
          <button type='button' onClick={() => setIsClick(!isClick)}>
            <img src='/assets/help.svg' alt='help' />
          </button>
          <div
            className={`flex w-[209px] h-[41px] z-10 absolute left-[160px] top-[2px] bg-bubbleName ${
              isClick ? 'block' : 'hidden'
            }`}
          >
            <div className='flex flex-row ml-[16px] items-center'>
              <p className='w-[171px] h-[24px] text-gray-scale-2 text-[10px] font-normal leading-3 tracking-tight'>
                학교탐방기능에 대한 설명 학교탐방기능에 대한 설명 학교탐방기능에
                대한 설명
              </p>
              <button type='button' onClick={() => setIsClick(!isClick)}>
                <img src='/assets/close_small.svg' alt='close_small' />
              </button>
            </div>
          </div>
        </div>
        <img src='/assets/group.svg' alt='group' />
        <SearchInputSchool />
      </div>
    </div>
  );
}
