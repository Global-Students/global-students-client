import React from 'react';

export default function DuplicateCheckButton({ onClick }) {
  return (
    <button
      className='bg-[#FFA77B40] rounded-[9px] text-orange-main px-[16px] py-[12px] mr-[10px] hover:brightness-90'
      type='button'
      onClick={onClick}
    >
      중복확인
    </button>
  );
}
