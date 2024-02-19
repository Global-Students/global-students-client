import { useNavigate } from 'react-router-dom';
import { authAxios } from '../axios/authAxios';
import API_PATH from '../constants/api';

export default function useLogout() {
  const navigate = useNavigate();
  const logout = () =>
    authAxios
      .post(API_PATH.logout) //
      .then(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expireAt');
        localStorage.removeItem('boardId_1');
        localStorage.removeItem('boardId_2');
        localStorage.removeItem('boardId_3');
        localStorage.removeItem('boardName_1');
        localStorage.removeItem('boardName_2');
        localStorage.removeItem('boardName_3');
        localStorage.removeItem('currentBoardId');
        navigate('/');
      })
      .catch((error) => {
        const { message } = error.response.data;
        alert(message);
      });

  return { logout };
}
