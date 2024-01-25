import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginControlLeft() {
  const [isLogin, setIsLogin] = useState(false);

  function handleLooutClick() {
    setIsLogin(!isLogin);
  }

  return (
    <div>
      {isLogin ? (
        <div className='flex flex-col w-[302px] h-[429px] justify-center items-center rounded-[14px] shadow border border-gray-scale-8'>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
              <div
                className='flex w-[190px] h-[190px] rounded-full bg-[#D9D9D9] mb-[18px]'
                alt='프로필 사진'
              />
              <div className='text-gray-scale-1 text-2xl font-bold leading-tight tracking-wide'>
                나의 닉네임
              </div>
            </div>
            <div className='flex flex-col mt-[29px] gap-[10px]'>
              <button
                className='w-[238px] h-12 rounded-[14px] shadow shadow-inner border border-gray-scale-7-main justify-center items-center text-gray-scale-2 text-sm font-medium leading-tight tracking-tight'
                type='button'
              >
                내가 쓴 글 보러가기
              </button>
              <button
                className='w-[238px] h-12 rounded-[14px] shadow shadow-inner border border-gray-scale-7-main justify-center items-center text-gray-scale-2 text-sm font-medium leading-tight tracking-tight'
                type='button'
              >
                즐겨찾기한 글 보러가기
              </button>
            </div>
            <button
              type='button'
              onClick={handleLooutClick}
              className='flex mt-[10px] justify-center items-center text-gray-scale-4 text-[13px] font-light'
            >
              로그아웃
            </button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col w-[302px] h-[182px] justify-center items-center rounded-[14px] shadow border border-gray-scale-8'>
          <div className='h-[102px]'>
            <div className='flex flex-col items-center mb-[28px]'>
              <div className='text-gray-scale-4 text-lg font-normal leading-tight tracking-tight'>
                <u>로그인</u>이 필요한 서비스입니다
              </div>
            </div>
            <Link to='/Login'>
              <button
                className='flex w-[263px] h-[54px] bg-orange-main rounded-[14px] shadow-inner justify-center items-center text-gray-scale-9 text-xl font-bold leading-tight tracking-tight'
                type='button'
              >
                로그인하기
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
