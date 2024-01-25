import React from 'react';
import LoginControlLeft from '../components/LoginControlLeft';
import PopularPosts from '../components/PopularPosts';
import Inform from '../components/Inform';

export default function NoticeBoard() {
  return (
    <div className='flex flex-row h-[1824px] justify-center items-center'>
      <div className='flex w-[1279px] h-[1651px] justify-start gap-x-[24px]'>
        <LoginControlLeft />
        <div className='flex flex-col w-[953px]'>
          <div className='flex flex-row h-[60px] justify-between mb-[80px]'>
            <div className='flex flex-col'>
              <p className='text-gray-scale-1 text-[26px] font-bold'>
                Hanyang Univ. All Students
              </p>
              <p className='text-gray-scale-4 text-base font-normal'>
                우리 학교에 재학 중인 모든 유학생을 만날 수 있습니다.
              </p>
            </div>
            <div>
              <button
                className='flex-self-start bg-gray-scale-8 rounded-lg bg-translate bg-[right_14px_center] bg-no-repeat pr-[33px] px-[15px] py-[5px] mb-2 hover:brightness-90 transition-all text-gray-scale-3 text-[15px] font-medium leading-tight tracking-tight'
                type='button'
              >
                언어 설정
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <Inform />
            <PopularPosts />
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}
