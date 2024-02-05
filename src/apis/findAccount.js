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

const findPassword = (body) =>
  axios
    .post(API_PATH.findPassword, body, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      console.log(response);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });

export { findId, findPassword };
