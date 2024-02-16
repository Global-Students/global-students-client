import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  let isAuth;

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const expireAt = new Date(localStorage.getItem('expireAt')).getTime();
    const currentTime = new Date().getTime();

    if (!token || expireAt < currentTime) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('expireAt');
      alert('로그인이 필요합니다.');
    }
  }, [isAuth]);

  return isAuth ? <Outlet /> : <Navigate to='/board/all' replace />;
}
