import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export default function ProtectedRoute() {
  const { loading, isLogin } = useAuthContext();

  if (loading) return null;
  if (!isLogin) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expireAt');
    alert('로그인이 필요합니다.');
  }

  return isLogin ? <Outlet /> : <Navigate to='/' replace />;
}
