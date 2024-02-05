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
      .post('/auth/login', loginData, {
        'Content-Type': 'application/json',
      })
      .then((res) => {
        localStorage.setItem('token', res.headers.authorization);
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
