import React from 'react';

export default function ManagementButton({ text, onClick }) {
  const buttonStyle =
    'bg-gray-scale-8 border border-gray-scale-7-main rounded shadow-managementBtn text-gray-scale-1 text-[13px] font-normal leading-[130%] px-[22px] py-[4px] hover:border-orange-5 hover:bg-orange-5-gradient hover:text-orange-1';

  return (
    <button className={buttonStyle} type='button' onClick={onClick}>
      {text}
    </button>
  );
}
