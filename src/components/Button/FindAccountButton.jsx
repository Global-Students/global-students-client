import React from 'react';

export default function FindAccountButton({ text, onClick, disabled = false }) {
  return (
    <button
      className={`self-center w-[194px] rounded border ${
        disabled
          ? 'border-gray-scale-6 text-gray-scale-5 bg-gray-scale-8'
          : 'border-gray-scale-5 text-gray-scale-1'
      } text-[18px] font-medium leading-[20px] tracking-[0.36px] py-[14px] shadow-prev-btn`}
      type='submit'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
