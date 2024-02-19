import React from 'react';
import CloseButton from './Button/CloseButton';
import InquiryInputBox from './Input/InquiryInputBox';

export default function InquiryInput({ onClick }) {
  return (
    <div className='flex w-[893px] h-[585px] bg-white rounded-[14px] justify-center items-center'>
      <div className='flex flex-col w-[845px] h-[545px]'>
        <div className='flex justify-end'>
          <CloseButton onClick={onClick} />
        </div>
        <div className='flex flex-col'>
          <p className='text-black text-2xl text-center font-semibold mb-[40px]'>
            문의사항
          </p>
          <InquiryInputBox />
        </div>
      </div>
    </div>
  );
}
