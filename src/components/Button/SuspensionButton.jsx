import React from 'react';

export default function SuspensionButton() {
  const buttonStyle =
    'bg-[#FAFAFA] border border-gray-scale-7-main rounded shadow text-gray-scale-1 text-[13px] font-normal leading-[130%] px-[22px] py-[4px]';

  return (
    <button className={buttonStyle} type='button'>
      계정정지
    </button>
  );
}
