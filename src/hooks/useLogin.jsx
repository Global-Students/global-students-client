import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const updateLoginFormData = (event) => {
    const targetId = event.target.id;
    setLoginData((prev) => ({ ...prev, [targetId]: event.target.value }));
  };
  const navigate = useNavigate();
  const login = () => {
    setLoading(true);
    axios
      .post('/auth/login', loginData)
      .then((res) => {
        localStorage.setItem('accessToken', res.data.result.accessToken);
        localStorage.setItem('expireAt', res.data.result.expireAt);
        navigate('/');
      })
      .catch((error) => {
        const { message } = error.response.data;
        window.alert(message);
      })
      .finally(() => setLoading(false));
  };

  return { loading, loginData, updateLoginFormData, login };
}
