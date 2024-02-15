import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_PATH from '../constants/api';

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const updateLoginFormData = (event) => {
    const targetId = event.target.id;
    setLoginData((prev) => ({ ...prev, [targetId]: event.target.value }));
  };
  const navigate = useNavigate();
  const login = (body, nextPath = '/') => {
    setLoading(true);
    axios
      .post(API_PATH.login, body)
      .then((res) => {
        localStorage.setItem('accessToken', res.data.result.accessToken);
        localStorage.setItem('expireAt', res.data.result.expireAt);
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

  return { loading, loginData, updateLoginFormData, login };
}
