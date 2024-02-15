import React, { useState } from 'react';
import { sendCode, verifyCode } from '../../apis/findAccount';
import Input from '../../components/Input/Input';
import { REGEX } from '../../constants';

export default function FindPassword({ setIsPasswordResettable }) {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [data, setData] = useState({
    email: '',
    code: '',
  });
  const { email, code } = data;
  const updateData = (event) => {
    const { id, value } = event.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };
  const requestCode = (event) => {
    event.preventDefault();
    sendCode({ email }, setIsEmailVerified);
  };
  const verifyAuthCode = () => {
    verifyCode(data).then((result) => {
      if (result) {
        setIsPasswordResettable(true);
        return;
      }
      alert('인증 코드를 틀렸습니다. 다시 입력해주세요.');
    });
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
            onChange={updateData}
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
        onClick={requestCode}
        disabled={!REGEX.email.test(email)}
      >
        인증 코드 전송
      </button>
      {isEmailVerified && (
        <>
          <div>
            <p className='text-gray-scale-2 text-[18px] font-medium leading mb-[6px]'>
              인증 코드
            </p>
            <Input
              id='code'
              type='text'
              value={code}
              onChange={updateData}
              placeholder='인증 코드'
            />
          </div>
          <button
            className='self-center w-[194px] rounded border border-gray-scale-5 text-gray-scale-1 text-[18px] font-medium leading-[20px] tracking-[0.36px] py-[14px] shadow-prev-btn'
            type='button'
            onClick={verifyAuthCode}
          >
            비밀번호 재설정
          </button>
        </>
      )}
    </form>
  );
}
