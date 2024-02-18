import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAxios, defaultAxios } from '../axios/authAxios';
import API_PATH from '../constants/api';

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const updateLoginFormData = (event) => {
    const targetId = event.target.id;
    setLoginData((prev) => ({ ...prev, [targetId]: event.target.value }));
  };
  const navigate = useNavigate();
  const login = async (body, nextPath = '/') => {
    try {
      setLoading(true);
      const loginResponse = await defaultAxios.post(API_PATH.login, body);
      localStorage.setItem(
        'accessToken',
        loginResponse.data.result.accessToken,
      );
      localStorage.setItem('expireAt', loginResponse.data.result.expireAt);

      const getHeaderInfoResponse = await authAxios.get('/board-information');
      const boardInfo = getHeaderInfoResponse.data.result;
      localStorage.setItem('boardId_1', boardInfo.boardId_1);
      localStorage.setItem('boardName_1', boardInfo.boardName_1);
      localStorage.setItem('boardId_2', boardInfo.boardId_2);
      localStorage.setItem('boardName_2', boardInfo.boardName_2);
      localStorage.setItem('boardId_3', boardInfo.boardId_3);
      localStorage.setItem('boardName_3', boardInfo.boardName_3);
      localStorage.setItem('currentBoardId', boardInfo.boardId_1);
      navigate(nextPath);
    } catch (error) {
      const { message } = error.response.data;
      window.alert(message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, loginData, setLoginData, updateLoginFormData, login };
}
