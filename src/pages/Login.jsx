import React from 'react';
import Input from '../components/Input';
import ResetIcon from '../components/ResetIcon';

export default function Login() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-y-[42px]'>
      <img src='/assets/logo.svg' alt='logo' />
      <div className='w-[460px]'>
        <button
          className='flex-self-start bg-gray-scale-8 rounded-lg bg-translate bg-[right_14px_center] bg-no-repeat pr-[33px] px-[15px] py-[5px] mb-2 hover:brightness-90 transition-all'
          type='button'
        >
          언어 설정
        </button>
        <form className='border border-gray-scale-7-main rounded p-[25px] shadow'>
          <div className='flex flex-col gap-[10px] mb-[52px]'>
            <Input id='id' type='text' placeholder='아이디' icon='person'>
              <ResetIcon />
            </Input>
            <Input id='pw' type='password' placeholder='비밀번호' icon='key'>
              <ResetIcon />
            </Input>
          </div>
          <button
            className='w-full h-[70px] inline-flex justify-center items-center bg-orange-main rounded text-white text-[22px] py-[22px] shadow-inner-orange hover:brightness-110'
            type='submit'
          >
            로그인
          </button>
        </form>
        <div className='flex justify-between text-gray-scale-3 text-[17px] m-4'>
          <div className='flex gap-2'>
            <a href='/'>아이디</a>
            <span>|</span>
            <a href='/'>비밀번호</a>
          </div>
          <a href='/'>회원가입</a>
        </div>
      </div>
    </div>
  );
}
