import React from 'react';

export default function Footer() {
  return (
    <div className='flex justify-center w-[1279px] h-[17px] absolute left-[320px] text-gray-scale-5'>
      <div className='w-[1279px] h-[0px] left-0 top-0 absolute border border-gray-scale-5' />
      <div className='left-[1.07px] top-[6px] absolute text-footerFont'>
        개인정보 처리방침
      </div>
      <div className='left-[99.12px] top-[6px] absolute text-footerFont'>
        이용약관
      </div>
      <div className='left-[162.01px] top-[6px] absolute text-footerFont'>
        운영정책
      </div>
      <div className='left-[224.89px] top-[6px] absolute text-footerFont'>
        공지사항
      </div>
    </div>
  );
}
