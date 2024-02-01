import React from 'react';
import Input from '../../components/Input';

export default function FindId() {
  return (
    <form className='w-[460px] flex flex-col gap-[36px] rounded-b-[14px] border border-gray-scale-7-main px-[25px] py-[40px] shadow'>
      <div className='flex flex-col gap-[18px]'>
        <div>
          <p className='text-gray-scale-2 text-[18px] font-medium leading mb-[6px]'>
            이메일
          </p>
          <Input id='email' type='email' placeholder='이메일을 입력해주세요' />
        </div>
      </div>
      <button
        className='self-center w-[194px] rounded border border-gray-scale-5 text-gray-scale-1 text-[18px] font-medium leading-[20px] tracking-[0.36px] py-[14px] shadow-prev-btn'
        type='submit'
      >
        아이디 찾기
      </button>
    </form>
  );
}