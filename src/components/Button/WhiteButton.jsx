import React from 'react';

export default function WhiteButton({ text, onClick }) {
  return (
    <button
      className='rounded border border-gray-scale-5 w-[148px] h-[51px] shadow-prev-btn text-[18px] text-gray-scale-4 font-semibold leading hover:bg-gray-scale-8'
      type='button'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
