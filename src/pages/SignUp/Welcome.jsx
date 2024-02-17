import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <section className='flex flex-col items-center gap-[64px] mt-[75px] mb-[242px]'>
      <h2 className='text-[25px] text-gray-scale-3'>가입을 축하합니다!</h2>
      <div className='flex flex-col items-center gap-[30px]'>
        <img src='/assets/welcome.svg' alt='welcome' />
        <button
          className='bg-orange-main text-white shadow-welcome rounded text-[18px] font-medium px-[29px] py-[19px]'
          type='button'
        >
          <Link to='/my-page'>✏️ 내정보 채우러 가기</Link>
        </button>
      </div>
    </section>
  );
}
