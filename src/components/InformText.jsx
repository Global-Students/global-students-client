import React from 'react';
import TranslateButton from './Button/TranslateButton';

export default function InformText({ school, borderId, text }) {
  return (
    <div className='flex flex-row w-[953px] h-[60px] justify-between mb-[80px]'>
      <div className='flex flex-col'>
        <p className='text-gray-scale-1 text-[26px] font-bold'>
          {school} Univ. {borderId}
        </p>
        <p className='text-gray-scale-4 text-base font-normal'>{text}</p>
      </div>
      <div>
        <TranslateButton />
      </div>
    </div>
  );
}
