import React from 'react';

export default function LightOrangeButton({ text, onClick, disabled = false }) {
  const buttonStyle =
    'min-w-[88px] rounded-[9px] px-[16px] py-[12px] mr-[10px] bg-orange-2 bg-opacity-25 text-orange-main hover:brightness-110';
  const disableStyle =
    'min-w-[88px] rounded-[9px] px-[16px] py-[12px] mr-[10px] bg-gray-scale-8 text-gray-scale-5';

  return (
    <button
      className={`${disabled ? disableStyle : buttonStyle}`}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
