import React from 'react';

export default function LightOrangeButton({ text, onClick }) {
  return (
    <button
      className='min-w-[88px] bg-[#FFA77B40] rounded-[9px] text-orange-main px-[16px] py-[12px] mr-[10px] hover:brightness-90'
      type='button'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
