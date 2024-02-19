import { useState } from 'react';
import { defaultAxios } from '../axios/authAxios';
import { API_PATH, REGEX } from '../constants';
import { useSignUpContext } from '../contexts/SignUpContext';
import useLogin from './useLogin';

export default function useSignUp() {
  const { login } = useLogin();
  const { signUpInfo, setSignUpInfo } = useSignUpContext();
  const [isUniqued, setIsUniqued] = useState({
    userId: false,
    nickname: false,
  });
  const [message, setMessage] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    code: '',
  });

  const checkIdDuplicate = (userId) =>
    defaultAxios
      .get(API_PATH.checkUserId(userId))
      .then(() => {
        setIsUniqued((prev) => ({ ...prev, userId: true }));
        setMessage((prev) => ({
          ...prev,
          userId: '사용할 수 있는 아이디입니다.',
        }));
      })
      .catch((error) => {
        console.log(error);
        setIsUniqued((prev) => ({ ...prev, userId: false }));
        setMessage((prev) => ({
          ...prev,
          userId: error.response.data.message,
        }));
      });

  const checkNicknameDuplicate = (nickname) =>
    defaultAxios
      .get(API_PATH.checkNickname(nickname))
      .then(() => {
        setIsUniqued((prev) => ({ ...prev, nickname: true }));
        setMessage((prev) => ({
          ...prev,
          nickname: '사용할 수 있는 닉네임입니다.',
        }));
      })
      .catch((error) => {
        setIsUniqued((prev) => ({ ...prev, nickname: false }));
        setMessage((prev) => ({
          ...prev,
          nickname: error.response.data.message,
        }));
      });

  const resetValidation = (id) => {
    setIsUniqued((prev) => ({ ...prev, [id]: false }));
    setMessage((prev) => ({
      ...prev,
      [id]: '',
    }));
  };

  const updatePasswordMessage = (value) =>
    setMessage((prev) => ({
      ...prev,
      password: `${
        REGEX.passwordPattern.test(value) || value === ''
          ? ''
          : '8자 이상의 영문 대소문자/숫자/특수문자를 사용해주세요.'
      }`,
    }));

  const updateConfirmPasswordMessage = (pw, confirmPw) =>
    setMessage((prev) => ({
      ...prev,
      confirmPassword: `${
        pw === confirmPw || confirmPw === ''
          ? ''
          : '비밀번호가 틀립니다. 다시 입력해주세요.'
      }`,
    }));

  const verifyUniversityEmail = (body, setIsSent) =>
    defaultAxios
      .post(API_PATH.emailVarification, body)
      .then(() => {
        alert('메일을 보냈습니다.');
        setIsSent(true);
      })
      .catch((error) => {
        alert(error.response.data.message);
        setIsSent(false);
      });

  const verifyAuthCode = (body, email) =>
    defaultAxios
      .post(API_PATH.emailVarificationCode, body)
      .then(() => {
        setSignUpInfo((prev) => ({ ...prev, email, verified: true }));
        setMessage((prev) => ({ ...prev, code: '인증에 성공했습니다.' }));
      })
      .catch((error) => {
        setSignUpInfo((prev) => ({ ...prev, verified: false }));
        setMessage((prev) => ({
          ...prev,
          code: error.response.data.message,
        }));
      });

  const submitSignUpInfo = (file, moveStep) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'join',
      new Blob([JSON.stringify(signUpInfo)], {
        type: 'application/json',
      }),
    );

    defaultAxios
      .post(API_PATH.sumbitSignUpInfo, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        login(
          { username: signUpInfo.userId, password: signUpInfo.password },
          '',
        );
        moveStep('welcome');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return {
    isUniqued,
    message,
    checkIdDuplicate,
    checkNicknameDuplicate,
    resetValidation,
    updatePasswordMessage,
    updateConfirmPasswordMessage,
    verifyUniversityEmail,
    verifyAuthCode,
    submitSignUpInfo,
  };
}
