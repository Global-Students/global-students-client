import React, { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState();
  const [auth, setAuth] = useState({
    token: localStorage.getItem('accessToken'),
    expireAt: localStorage.getItem('expireAt'),
  });

  setLoading(true);
  const { token, expireAt } = auth;
  const expireTime = new Date(expireAt).getTime();
  const currentTime = new Date().getTime();
  const isLogin = token && expireTime > currentTime;
  const value = useMemo(
    () => ({ token, expireAt, isLogin, loading, setAuth }),
    [token, expireAt],
  );
  setLoading(false);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
