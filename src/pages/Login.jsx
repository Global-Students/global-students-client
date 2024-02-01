import React from 'react';
import OrangeButton from '../components/Button/OrangeButton';
import TranslateButton from '../components/Button/TranslateButton';
import Input from '../components/Input';
import ResetIcon from '../components/ResetIcon';

export default function Login() {
  return (
    <div className='flex flex-col justify-center items-center gap-y-[42px] mt-[124px]'>
      <img src='/assets/logo.svg' alt='logo' />
      <div className='w-[460px]'>
        <div className='mb-[8px]'>
          <TranslateButton />
        </div>
        <form className='flex flex-col border border-gray-scale-7-main rounded p-[25px] shadow'>
          <div className='flex flex-col gap-[10px] mb-[52px]'>
            <Input id='id' type='text' placeholder='아이디' icon='person'>
              <ResetIcon />
            </Input>
            <Input id='pw' type='password' placeholder='비밀번호' icon='key'>
              <ResetIcon />
            </Input>
          </div>
          <OrangeButton text='로그인' textSize={22} py={22} />
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
