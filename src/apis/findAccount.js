import axios from 'axios';
import { API_PATH } from '../constants';

const findId = (body) =>
  axios
    .post(API_PATH.findId, body)
    .then(() => alert('메일로 아이디를 전송했습니다.'))
    .catch((error) => alert(error.response.data.message));

const sendCode = (body, setIsEmailVerified) =>
  axios
    .post(API_PATH.findPassword, body)
    .then((response) => {
      setIsEmailVerified(true);
      alert(response.data.message);
    })
    .catch((error) => alert(error.response.data.message));

const verifyCode = (body) =>
  axios
    .post(API_PATH.findPasswordCode, body)
    .then(() => true)
    .catch(() => false);

const resetPassword = (body) =>
  axios
    .patch(API_PATH.resetPassword, body)
    .then(() => true)
    .catch(() => false);

export { findId, resetPassword, sendCode, verifyCode };
