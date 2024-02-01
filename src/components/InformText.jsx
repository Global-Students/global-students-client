import React from 'react';
import TranslateButton from './Button/TranslateButton';

export default function InformText({ mb, school, borderId, text, translate }) {
  return (
    <div
      className={`flex flex-row w-[953px] h-[60px] justify-between ${
        mb ? `mb-[${mb}px]` : 'mb-[35px]'
      }`}
    >
      <div className='flex flex-col'>
        <p className='text-gray-scale-1 text-[26px] font-bold'>
          {school} Univ. {borderId}
        </p>
        <p className='text-gray-scale-4 text-base font-normal'>{text}</p>
      </div>
      <div>{translate ? <TranslateButton /> : ''}</div>
    </div>
  );
}
