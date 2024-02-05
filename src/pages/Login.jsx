import React from 'react';
import OrangeButton from '../components/Button/OrangeButton';
import ResetButton from '../components/Button/ResetButton';
import TranslateButton from '../components/Button/TranslateButton';
import Input from '../components/Input/Input';

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
              <ResetButton />
            </Input>
            <Input id='pw' type='password' placeholder='비밀번호' icon='key'>
              <ResetButton />
            </Input>
          </div>
          <OrangeButton text='로그인' textSize={22} py={22} />
        </form>
        <div className='flex justify-between text-gray-scale-3 text-[17px] m-4'>
          <a href='/findAccount'>아이디 | 비밀번호 찾기</a>
          <a href='/signUp'>회원가입</a>
        </div>
      </div>
    </div>
  );
}
