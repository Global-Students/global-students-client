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
  const getHeaderInfo = async () => {
    try {
      const res = await authAxios({
        method: 'get',
        url: '/board-information',
      });
      if (res.data.code === 'COMMON200') {
        const boardInfo = res.data.result;
        localStorage.setItem('boardId_1', boardInfo.boardId_1);
        localStorage.setItem('boardName_1', boardInfo.boardName_1);
        localStorage.setItem('boardId_2', boardInfo.boardId_2);
        localStorage.setItem('boardName_2', boardInfo.boardName_2);
        localStorage.setItem('boardId_3', boardInfo.boardId_3);
        localStorage.setItem('boardName_3', boardInfo.boardName_3);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const login = (body, nextPath = '/') => {
    setLoading(true);
    defaultAxios
      .post(API_PATH.login, body)
      .then((res) => {
        localStorage.setItem('accessToken', res.data.result.accessToken);
        localStorage.setItem('expireAt', res.data.result.expireAt);
        getHeaderInfo();
        navigate(nextPath);
      })
      .catch((error) => {
        const { message } = error.response.data;
        window.alert(message);
        if (error.response.status === 400) {
          return;
        }
        navigate('/');
      })
      .finally(() => setLoading(false));
  };

  return { loading, loginData, setLoginData, updateLoginFormData, login };
}
