import React, { useState } from 'react';
import DropDownInquiry from '../DropDownInquiry';
import OrangeButton from '../Button/OrangeButton';

export default function InquiryInputBox() {
  const [isClick, setIsClick] = useState(false);
  const [inquirySort, setInquirySort] = useState('');
  const handelToggle = () => {
    setIsClick((prev) => !prev);
  };
  return (
    <div>
      <div className='flex flex-col h-[449px] justify-between'>
        <div className='relative'>
          <div
            className={`flex h-[50px] justify-between items-center bg-white border-b px-[25px] ${
              isClick ? `border-orange-main` : `border-gray-scale-6`
            }`}
          >
            <p className='text-gray-scale-3 text-lg font-medium'>
              {inquirySort.length > 0
                ? `${inquirySort}`
                : '문의 종류를 선택해주세요'}
            </p>
            <button type='button' onClick={handelToggle}>
              <img
                src={`/assets/${
                  isClick ? 'arrow_back_ios_orange' : 'arrow_back_ios'
                }.svg`}
                alt='열기'
              />
            </button>
          </div>
          {isClick ? (
            <DropDownInquiry
              inquirySort={inquirySort}
              setInquirySort={setInquirySort}
              setIsClick={setIsClick}
            />
          ) : (
            ''
          )}
        </div>
        <div className='flex h-[321px] items-center justify-center bg-gray-scale-8 rounded-[14px] border border-gray-scale-7-main'>
          <textarea
            type='text-area'
            className='w-[795px] h-[280px] bg-gray-scale-8 outline-none text-gray-scale-4 text-lg font-normal'
            placeholder='문의 내용을 입력해주세요'
          />
        </div>
        <div className='flex justify-end'>
          <OrangeButton text='문의하기' textSize={18} width={148} py={14} />
        </div>
      </div>
    </div>
  );
}
