import React from 'react';

export default function AuthButton({
  name,
  text,
  subText,
  icon: Icon,
  isSelected,
  onClick,
}) {
  const selectButtonStyle = 'bg-orange-main bg-opacity-80 shadow-inner-orange';
  const unSelectButtonStyle =
    'border border-gray-scale-7-main bg-gray-scale-8 bg-opacity-50 shadow-authBtn hover:bg-opacity-100';
  const selectTextStyle = 'leading text-gray-scale-9';
  const unSelectTextStyle = 'leading text-gray-scale-4';

  return (
    <button
      className={`w-[193px] h-[174px] flex flex-col justify-center items-center gap-[14px] px-[10px] rounded ${
        isSelected ? selectButtonStyle : unSelectButtonStyle
      }`}
      type='button'
      name={name}
      onClick={onClick}
    >
      <Icon fill={isSelected ? '#FFFFFF' : '#808593'} />
      <div className='flex flex-col gap-[5px]'>
        <span
          className={`break-keep text-[20px] font-medium  ${
            isSelected ? selectTextStyle : unSelectTextStyle
          }`}
        >
          {text}
        </span>
        {subText && (
          <span
            className={` text-[16px] font-normal  ${
              isSelected ? selectTextStyle : unSelectTextStyle
            }`}
          >
            {subText}
          </span>
        )}
      </div>
    </button>
  );
}
