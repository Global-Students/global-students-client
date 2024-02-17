import React from 'react';

export default function CloseButton({ onClick }) {
  return (
    <button
      className='cursor-pointer transition-all'
      type='button'
      onClick={onClick}
    >
      <img
        src='/assets/closeButton.svg'
        alt='닫기'
        className='rounded-full bg-gray-scale-7-main hover:bg-gray-scale-8 duration-300'
      />
    </button>
  );
}
