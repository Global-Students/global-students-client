import React from 'react';

export default function OrangeButton({
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
  const defaultStyle = `${commonStyle} bg-orange-main shadow-inner-orange text-white hover:bg-orange-1`;
  const disabledStyle = `${commonStyle} bg-gray-scale-8 border border-gray-scale-6 text-gray-scale-5`;

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
