import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowButton({ text, borderId }) {
  const hoverStyle = `hover:bg-orange-300 hover:bg-opacity-20 hover:text-orange-main hover:border-orange-300 hover:border-opacity-25 hover:shadow-none`;
  return (
    <Link to={`/MyPage/${borderId}`}>
      <button
        className={`w-[238px] h-12 rounded-[14px] shadow shadow-inner border border-gray-scale-7-main justify-center items-center text-gray-scale-2 text-sm font-medium leading-tight tracking-tight
     ${hoverStyle}`}
        type='button'
      >
        {text}
      </button>
    </Link>
  );
}
