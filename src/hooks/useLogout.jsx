import { useNavigate } from 'react-router-dom';
import authAxios from '../axios/authAxios';
import API_PATH from '../constants/api';

export default function useLogout() {
  const navigate = useNavigate();
  const logout = () =>
    authAxios
      .post(API_PATH.logout) //
      .then(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expireAt');
        navigate('/board/all');
      })
      .catch((error) => {
        const { message } = error.response.data;
        alert(message);
      });

  return { logout };
}
