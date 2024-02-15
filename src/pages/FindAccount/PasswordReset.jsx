import React, { useState } from 'react';
import FindAccountButton from '../../components/Button/FindAccountButton';
import Input from '../../components/Input/Input';
import ValidationMessage from '../../components/ValidationMessage';
import useFindAccount from '../../hooks/useFindAccount';
import {
  checkPasswordPattern,
  checkPasswordReEnter,
} from '../../utils/checkPattern';

export default function PasswordReset({ email }) {
  const {
    message,
    updatePasswordMessage,
    updateConfirmPasswordMessage,
    resetPassword,
  } = useFindAccount();
  const [data, setData] = useState({
    password: '',
    confirmPassword: '',
  });
  const { password, confirmPassword } = data;
  const handlePassword = (event) => {
    const { id, value } = event.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form className='w-[460px] flex flex-col gap-[36px] rounded-b-[14px] border border-gray-scale-7-main px-[25px] py-[40px] shadow'>
      <div>
        <p className='text-gray-scale-2 text-[18px] font-medium leading mb-[6px]'>
          비밀번호
        </p>
        <Input
          id='password'
          type='password'
          value={password}
          onChange={(event) => {
            handlePassword(event);
            updatePasswordMessage(event);
          }}
          placeholder='비밀번호를 입력해주세요'
        />
        <ValidationMessage message={message.password} />
      </div>
      <div>
        <p className='text-gray-scale-2 text-[18px] font-medium leading mb-[6px]'>
          비밀번호 재입력
        </p>
        <Input
          id='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={(event) => {
            handlePassword(event);
            updateConfirmPasswordMessage(event, password);
          }}
          placeholder='비밀번호를 입력해주세요'
        />
        <ValidationMessage message={message.confirmPassword} />
      </div>
      <FindAccountButton
        text='변경 완료'
        onClick={() => resetPassword({ email, password })}
        disabled={
          !checkPasswordPattern(password) ||
          !checkPasswordReEnter(password, confirmPassword)
        }
      />
    </form>
  );
}
