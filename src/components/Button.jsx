import React from 'react';

export default function Button({ type, text, onClick, disabled }) {
  const defaultStyle =
    'rounded text-[18px] font-semibold leading-[20px] py-[14px]';

  if (type === 'prev') {
    return (
      <button
        className={`${defaultStyle} w-[148px] border border-gray-scale-6 text-gray-scale-4 shadow-prev-btn hover:brightness-95`}
        type='button'
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }

  if (type === 'next') {
    return (
      <button
        className={`${defaultStyle} w-[148px] ${
          disabled
            ? 'border border-gray-scale-6 bg-gray-scale-8 text-gray-scale-5'
            : 'bg-orange-main text-white shadow-inner-orange hover:brightness-110'
        } `}
        type='button'
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}
