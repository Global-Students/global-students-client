import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const token = localStorage.getItem('accessToken');
  const expireAt = new Date(localStorage.getItem('expireAt')).getTime();
  const currentTime = new Date().getTime();
  const isAuth = token && expireAt > currentTime;

  if (!isAuth) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expireAt');
    alert('로그인이 필요합니다.');
  }

  return isAuth ? <Outlet /> : <Navigate to='/' replace />;
}
