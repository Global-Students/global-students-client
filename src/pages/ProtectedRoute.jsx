import axios from 'axios';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { API_PATH } from '../constants';

export default function ProtectedRoute() {
  const token = localStorage.getItem('accessToken');
  const expireAt = localStorage.getItem('expireAt');
  const expireTime = new Date(expireAt).getTime();
  const currentTime = new Date().getTime();
  const isLogin = token && expireTime > currentTime;

  const logout = () =>
    axios
      .post(API_PATH.logout, { headers: { Authorization: token } }) //
      .then(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expireAt');
      })
      .catch((error) => {
        const { message } = error.response.data;
        alert(message);
      });

  if (!isLogin) {
    logout().then(() => {
      alert('로그인이 필요합니다.');
      window.location.replace('/');
    });
  }

  return <Outlet />;
}
