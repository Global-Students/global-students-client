import axios from 'axios';
import API_PATH from '../constants/api';

const logout = () =>
  axios.post(API_PATH.logout).then(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expireAt');
  });

export default logout;
