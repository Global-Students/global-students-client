import React from 'react';

export default function DuplicateCheckButton({ onClick }) {
  return (
    <div className='bg-white pl-[7px] mr-[10px]'>
      <button
        className='bg-[#FFA77B40] rounded-[9px] text-orange-main px-[16px] py-[12px] hover:brightness-90'
        type='button'
        onClick={onClick}
      >
        중복확인
      </button>
    </div>
  );
}
