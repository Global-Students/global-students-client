import authAxios from '../axios/authAxios';
import API_PATH from '../constants/api';

const logout = () =>
  authAxios.post(API_PATH.logout).then(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expireAt');
  });

export default logout;
