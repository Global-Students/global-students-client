import React from 'react';
import OrangeButton from '../components/Button/OrangeButton';
import TranslateButton from '../components/Button/TranslateButton';
import ResetButtonInput from '../components/Input/ResetButtonInput';
import useLogin from '../hooks/useLogin';

export default function Login() {
  const {
    loading,
    loginData: { username, password },
    updateLoginFormData,
    login,
  } = useLogin();

  return (
    <div className='flex flex-col justify-center items-center gap-y-[42px] mt-[124px]'>
      <img src='/assets/logo.svg' alt='logo' />
      <div className='w-[460px]'>
        <div className='mb-[8px]'>
          <TranslateButton />
        </div>
        <form className='flex flex-col border border-gray-scale-7-main rounded p-[25px] shadow'>
          <div className='flex flex-col gap-[10px] mb-[52px]'>
            <ResetButtonInput
              id='username'
              type='text'
              value={username}
              placeholder='아이디'
              onChange={updateLoginFormData}
              onReset={() => {}}
              icon='person'
            />
            <ResetButtonInput
              id='password'
              type='password'
              value={password}
              placeholder='비밀번호'
              onChange={updateLoginFormData}
              onReset={() => {}}
              icon='key'
            />
          </div>
          <div className='h-[70px] flex text-[22px] leading'>
            <OrangeButton
              text='로그인'
              onClick={() => login({ username, password })}
              disabled={loading}
            />
          </div>
        </form>
        <div className='flex justify-between text-gray-scale-3 text-[17px] m-4'>
          <a href='/findAccount'>아이디 | 비밀번호 찾기</a>
          <a href='/signUp'>회원가입</a>
        </div>
      </div>
    </div>
  );
}
