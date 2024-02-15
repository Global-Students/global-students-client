import React, { useState } from 'react';
import FindAccountButton from '../../components/Button/FindAccountButton';
import Input from '../../components/Input/Input';
import { REGEX } from '../../constants';
import useFindAccount from '../../hooks/useFindAccount';
import PasswordReset from './PasswordReset';

export default function FindPassword() {
  const { sendCode, verifyCode } = useFindAccount();
  const [isPasswordResettable, setIsPasswordResettable] = useState(false);
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

  if (isPasswordResettable) {
    return <PasswordReset email={email} />;
  }

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
      <FindAccountButton
        text='인증 코드 전송'
        onClick={requestCode}
        disabled={!REGEX.email.test(email)}
      />
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
          <FindAccountButton
            text='비밀번호 재설정'
            onClick={() => verifyCode(data, setIsPasswordResettable)}
          />
        </>
      )}
    </form>
  );
}
