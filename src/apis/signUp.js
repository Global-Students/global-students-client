import axios from 'axios';
import { API_PATH } from '../constants';

const checkIdDuplicate = (userId) =>
  axios
    .get(API_PATH.checkUserId(userId), {
      'Content-Type': 'application/json',
    })
    .then(() => true)
    .catch(() => false);

const checkNicknameDuplicate = (nickname) =>
  axios
    .get(API_PATH.checkNickname(nickname), {
      'Content-Type': 'application/json',
    })
    .then(() => true)
    .catch(() => false);

const verifyUniversityEmail = (body) =>
  axios
    .post(API_PATH.emailVarification, body, {
      'Content-Type': 'application/json',
    })
    .then(() => true)
    .catch(() => false);

const verifyAuthCode = (body) =>
  axios
    .post(API_PATH.emailVarificationCode, body, {
      'Content-Type': 'application/json',
    })
    .then(() => true)
    .catch(() => false);

const submitSignUpInfo = (file, signUpInfo, moveStep) => {
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

export {
  checkIdDuplicate,
  checkNicknameDuplicate,
  submitSignUpInfo,
  verifyAuthCode,
  verifyUniversityEmail,
};
