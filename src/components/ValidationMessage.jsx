import React from 'react';
import { ReactComponent as ErrorIcon } from '../assets/error.svg';
import { ReactComponent as SuccessIcon } from '../assets/success.svg';

export default function ValidationMessage({ message, isValid }) {
  const textStyle = 'text-[14px] font-normal leading';

  return (
    <div
      className={`${
        !!message === false ? 'hidden' : 'block'
      } flex items-center gap-[8px] mt-[6px]`}
    >
      {isValid ? <SuccessIcon /> : <ErrorIcon />}
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
