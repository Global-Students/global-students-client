import React, { useState } from 'react';
import FindAccountButton from '../../components/Button/FindAccountButton';
import Input from '../../components/Input/Input';
import { REGEX } from '../../constants';
import useFindAccount from '../../hooks/useFindPassword';

export default function FindId() {
  const { findId } = useFindAccount();
  const [email, setEmail] = useState('');
  const updatedEmail = (event) => setEmail(event.target.value);
  const submitEmail = (event) => {
    event.preventDefault();
    findId({ email });
    setEmail('');
  };

  return (
    <form className='w-[460px] flex flex-col gap-[36px] rounded-b-[14px] border border-gray-scale-7-main px-[25px] py-[40px] shadow'>
      <div className='flex flex-col gap-[18px]'>
        <div>
          <p className='text-gray-scale-2 text-[18px] font-medium leading mb-[6px]'>
            이메일
          </p>
          <Input
            id='email'
            type='email'
            value={email}
            onChange={updatedEmail}
            placeholder='이메일을 입력해주세요'
          />
        </div>
      </div>
      <FindAccountButton
        text='아이디 찾기'
        onClick={submitEmail}
        disabled={!REGEX.email.test(email)}
      />
    </form>
  );
}
