import axios from 'axios';
import { useState } from 'react';
import { API_PATH, REGEX } from '../constants';
import { useSignUpContext } from '../contexts/SignUpContext';

export default function useSignUp() {
  const {
    signUpInfo: { password },
  } = useSignUpContext();
  const [isUniqued, setIsUniqued] = useState({
    userId: false,
    nickname: false,
  });
  const [message, setMessage] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    nickname: '',
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
      .catch(() => {
        setIsUniqued((prev) => ({ ...prev, userId: false }));
        setMessage((prev) => ({
          ...prev,
          userId: '사용할 수 없는 아이디입니다.',
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
      .catch(() => {
        setIsUniqued((prev) => ({ ...prev, nickname: false }));
        setMessage((prev) => ({
          ...prev,
          nicknameDuplication: '사용할 수 없는 닉네임입니다.',
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

  return {
    isUniqued,
    message,
    checkIdDuplicate,
    checkNicknameDuplicate,
    resetValidation,
    updatePasswordMessage,
    updateConfirmPasswordMessage,
  };
}
