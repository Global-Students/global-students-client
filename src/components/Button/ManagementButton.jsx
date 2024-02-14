import React from 'react';

export default function ManagementButton({ text, onClick }) {
  const buttonStyle =
    'px-[22px] py-[4px] rounded border border-gray-scale-7-main bg-gray-scale-8 shadow-managementBtn hover:border-orange-5 hover:bg-orange-5';
  const textStyle =
    'text-gray-scale-1 text-[13px] font-normal leading-[130%] hover:text-orange-1';

  return (
    <button
      className={`${buttonStyle} ${textStyle}`}
      type='button'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
