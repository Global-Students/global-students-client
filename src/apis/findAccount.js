import axios from 'axios';
import { API_PATH } from '../constants';

const findId = (body) =>
  axios
    .post(API_PATH.findId, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

const sendCode = (body) =>
  axios
    .post(API_PATH.findPassword, body, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then(() => true)
    .catch(() => false);

const verifyCode = (code) =>
  axios
    .get(API_PATH.findPassword, {
      params: {
        code,
      },
      headers: { 'Content-Type': 'application/json' },
    })
    .then(() => true)
    .catch(() => false);

export { findId, sendCode, verifyCode };
