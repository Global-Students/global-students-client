import React from 'react';

export default function OrangeButton({ text, onClick, disabled = false }) {
  const buttonStyle = `w-full h-full rounded bg-orange-main shadow-inner-orange text-gray-scale-9 font-semibold hover:bg-orange-1`;
  const disabledStyle = `w-full h-full rounded bg-gray-scale-8 border border-gray-scale-6 text-gray-scale-5`;

  return (
    <button
      className={disabled ? disabledStyle : buttonStyle}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
