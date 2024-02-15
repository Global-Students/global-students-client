import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../apis/findAccount';
import Input from '../../components/Input/Input';
import ValidationMessage from '../../components/ValidationMessage';
import {
  checkPasswordPattern,
  checkPasswordReEnter,
} from '../../utils/checkPattern';

export default function PasswordReset({ email }) {
  const [data, setData] = useState({
    password: '',
    confirmPassword: '',
  });
  const handlePassword = (event) => {
    const { id, value } = event.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };
  const { password, confirmPassword } = data;
  const navigator = useNavigate();

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
          onChange={handlePassword}
          placeholder='비밀번호를 입력해주세요'
        />
        <ValidationMessage
          isShowed={!checkPasswordPattern(password)}
          message='8자 이상의 영문 대소문자/숫자/특수문자를 사용해주세요.'
          value={password}
        />
      </div>
      <div>
        <p className='text-gray-scale-2 text-[18px] font-medium leading mb-[6px]'>
          비밀번호 재입력
        </p>
        <Input
          id='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={handlePassword}
          placeholder='비밀번호를 입력해주세요'
        />
        <ValidationMessage
          isShowed={!checkPasswordReEnter(password, confirmPassword)}
          message='비밀번호가 틀립니다. 다시 입력해주세요.'
          value={confirmPassword}
        />
      </div>
      <button
        className='self-center w-[194px] rounded border border-gray-scale-5 text-gray-scale-1 text-[18px] font-medium leading-[20px] tracking-[0.36px] py-[14px] shadow-prev-btn'
        type='button'
        onClick={() => {
          resetPassword({ email, password }).then(() => {
            alert('비밀번호가 변경됐습니다.');
            navigator('/login');
          });
        }}
        disabled={
          !checkPasswordPattern(password) ||
          !checkPasswordReEnter(password, confirmPassword)
        }
      >
        변경 완료
      </button>
    </form>
  );
}
