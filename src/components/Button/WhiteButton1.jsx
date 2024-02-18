import React from 'react';

export default function WhiteButton({
  text,
  textSize,
  width,
  height,
  py = 0,
  onClick,
  disabled = false,
}) {
  const commonStyle = `rounded leading font-semibold ${`text-[${textSize}px]`} ${`py-[${py}px]`} ${
    width ? `w-[${width}px]` : ''
  } ${
    height ? `h-[${height}px]` : ''
  }`;
  const defaultStyle = `${commonStyle} bg-gray-scale-9 shadow-inner-gray text-gray-scale-4 border border-gray-scale-5 hover:bg-gray-scale-8`;
  const disabledStyle = `${commonStyle} bg-gray-scale-8 border border-gray-scale-5 text-gray-scale-3`;

  return (
    <button
      className={disabled ? disabledStyle : defaultStyle}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}