import React from 'react';

export default function ValidationMessage({ message, isValid }) {
  const textStyle = 'text-[14px] font-normal leading';

  return (
    <div
      className={`${
        !!message === false ? 'hidden' : 'block'
      } flex items-center gap-[8px] mt-[6px]`}
    >
      {isValid ? (
        <img
          className='w-[20px] h-[20px]'
          src='/assets/success.svg'
          alt='success'
        />
      ) : (
        <img src='/assets/error.svg' alt='error' />
      )}
      <span
        className={`${textStyle} ${
          isValid ? 'text-[#0FC02C]' : 'text-orange-1'
        }`}
      >
        {message}
      </span>
    </div>
  );
}
