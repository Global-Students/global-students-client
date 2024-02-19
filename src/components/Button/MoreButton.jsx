import React from 'react';

export default function MoreButton({ onClick }) {
  return (
    <button
      className='w-[32px] h-[32px] rounded-lg bg-more_horiz bg-no-repeat text-gray-scale-1 font-medium leading-5 tracking-[.3px] flex justify-center items-center hover:bg-[#E9E9E9]'
      type='button'
      onClick={onClick}
    >
      <img src='../../../assets/more_horiz.svg' alt='More' />
      <span className="sr-only">더보기</span>
    </button>
  );
}

