import React from 'react';

export default function Footer() {
  return (
    <div className='flex justify-center'>
      <div className='w-[1279px] border-t border-gray-scale-5 text-gray-scale-5'>
        <div className='w-[255px] flex justify-between'>
          <div className='text-footerFont'>개인정보 처리방침</div>
          <div className='text-footerFont'>이용약관</div>
          <div className='text-footerFont'>운영정책</div>
          <div className='text-footerFont'>공지사항</div>
        </div>
      </div>
    </div>
  );
}
