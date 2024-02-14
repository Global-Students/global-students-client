import authAxios from '../axios/authAxios';
import API_PATH from '../constants/api';

export default function useLogout() {
  const logout = () =>
    authAxios.post(API_PATH.logout).then(() => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('expireAt');
    });

  return { logout };
}
