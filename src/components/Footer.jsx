import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onClick }) {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-[1279px] border-t border-gray-scale-5 text-gray-scale-5'>
          <div className='w-[255px] flex justify-between'>
            <Link to='/privacyPolicy'>
              <div className='text-footerFont'>개인정보 처리방침</div>
            </Link>
            <div className='text-footerFont'>이용약관</div>
            <div className='text-footerFont'>공지사항</div>
            <button type='button' onClick={onClick}>
              <div className='text-footerFont'>문의하기</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
