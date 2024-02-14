import axios from 'axios';
import { API_PATH } from '../constants';

const findId = (body) =>
  axios
    .post(API_PATH.findId, body)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

const sendCode = (body) =>
  axios
    .post(API_PATH.findPassword, body)
    .then(() => true)
    .catch(() => false);

const verifyCode = (body) =>
  axios
    .post(API_PATH.findPasswordCode, body)
    .then(() => true)
    .catch(() => false);

export { findId, sendCode, verifyCode };
