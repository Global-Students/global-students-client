import React from 'react';

export default function Inform() {
  return (
    <div className='flex flex-row h-[72px] rounded-[14px] items-center border border-gray-scale-7-main mb-[20px]'>
      <div className='flex flex-row w-[162px] relative justify-between left-[29px]'>
        <p className='text-orange-600 text-lg font-normal'>공지</p>
        <p className='text-gray-scale-4 text-lg font-normal'>게시글 제목</p>
      </div>
    </div>
  );
}
