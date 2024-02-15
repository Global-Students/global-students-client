import axios from 'axios';
import { useState } from 'react';
import { API_PATH, REGEX } from '../constants';
import { useSignUpContext } from '../contexts/SignUpContext';

export default function useSignUp() {
  const { signUpInfo, setSignUpInfo } = useSignUpContext();
  const { password } = signUpInfo;
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
    axios
      .get(API_PATH.checkUserId(userId))
      .then(() => {
        setIsUniqued((prev) => ({ ...prev, userId: true }));
        setMessage((prev) => ({
          ...prev,
          userId: '사용할 수 있는 아이디입니다.',
        }));
      })
      .catch((error) => {
        setIsUniqued((prev) => ({ ...prev, userId: false }));
        setMessage((prev) => ({
          ...prev,
          userId: error.response.data.message,
        }));
      });

  const checkNicknameDuplicate = (nickname) =>
    axios
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

  const updatePasswordMessage = (event) =>
    setMessage((prev) => ({
      ...prev,
      password: `${
        REGEX.passwordPattern.test(event.target.value) ||
        event.target.value === ''
          ? ''
          : '8자 이상의 영문 대소문자/숫자/특수문자를 사용해주세요.'
      }`,
    }));

  const updateConfirmPasswordMessage = (event) =>
    setMessage((prev) => ({
      ...prev,
      confirmPassword: `${
        password === event.target.value || event.target.value === ''
          ? ''
          : '비밀번호가 틀립니다. 다시 입력해주세요.'
      }`,
    }));

  const verifyUniversityEmail = (body) =>
    axios
      .post(API_PATH.emailVarification, body)
      .then(() => alert('메일을 보냈습니다.'))
      .catch((error) => alert(error.response.data.message));

  const verifyAuthCode = (body) =>
    axios
      .post(API_PATH.emailVarificationCode, body)
      .then(() => {
        setSignUpInfo((prev) => ({ ...prev, verified: true }));
        setMessage((prev) => ({ ...prev, code: '인증에 성공했습니다.' }));
      })
      .catch(() => {
        setSignUpInfo((prev) => ({ ...prev, verified: false }));
        setMessage((prev) => ({
          ...prev,
          code: '인증번호가 유효하지 않습니다.',
        }));
      });

  const submitSignUpInfo = (file, moveStep) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('join', signUpInfo);

    axios
      .post(API_PATH.sumbitSignUpInfo, formData, {
        'Content-Type': 'multipart/form-data',
      })
      .then(() => moveStep('welcome'))
      .catch(() => alert('회원가입을 진행할 수 없습니다. 다시 시도해주세요.'));
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
