import React from 'react';

export default function FileInput({ onChange }) {
  return (
    <div className='flex items-center gap-[8px] border border-gray-scale-7-main rounded outline-none pl-[19px] py-[9px] shadow-[0px_5px_30px_-15px_rgba(0, 0, 0, 0.12)] focus-within:border-orange-1'>
      <p className='flex-1 text-gray-scale-4 text-[16px] font-light leading'>
        00MB 이하의 JPG, PNG, PDF 파일
      </p>
      <label
        className='min-w-[88px] rounded-[9px] px-[16px] py-[12px] mr-[10px] bg-orange-2 bg-opacity-25 text-orange-main hover:brightness-110 cursor-pointer'
        htmlFor='file'
      >
        파일선택
        <input
          className='hidden'
          id='file'
          type='file'
          accept='image/png, .pdf'
          onChange={onChange}
        />
      </label>
    </div>
  );
}
