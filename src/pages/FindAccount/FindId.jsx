import React, { useState } from 'react';
import { findId } from '../../apis/findAccount';
import Input from '../../components/Input';
import { REGEX } from '../../constants';

export default function FindId() {
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
      <button
        className={`self-center w-[194px] rounded border ${
          REGEX.email.test(email)
            ? 'border-gray-scale-5 text-gray-scale-1'
            : 'border-gray-scale-6 text-gray-scale-5 bg-gray-scale-8'
        } text-[18px] font-medium leading-[20px] tracking-[0.36px] py-[14px] shadow-prev-btn`}
        type='submit'
        onClick={submitEmail}
        disabled={!REGEX.email.test(email)}
      >
        아이디 찾기
      </button>
    </form>
  );
}
