import React from 'react';

export default function Footer() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-[1279px] h-[17px] absolute text-gray-scale-5'>
        <div className='w-[1279px] h-[0px] top-0 border border-gray-scale-5' />
        <div className='flex flex-row gap-x-[33.06px]'>
          <div className='text-footerFont'>개인정보 처리방침</div>
          <div className='text-footerFont'>이용약관</div>
          <div className='text-footerFont'>운영정책</div>
          <div className='text-footerFont'>공지사항</div>
        </div>
      </div>
    </div>
  );
}
