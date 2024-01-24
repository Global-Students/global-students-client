import React from 'react';

export default function FieldSet({ legend, children }) {
  return (
    <div>
      <div className='flex justify-between items-center mb-[22px]'>
        <legend className='text-[24px] text-gray-scale-1 font-semibold'>
          {legend}
        </legend>
        <span className='text-orange-main font-medium'>*필수입력사항</span>
      </div>
      <fieldset className='flex flex-col gap-[50px] border border-gray-scale-7-main rounded px-[24px] py-[20px]'>
        {children}
      </fieldset>
    </div>
  );
}
