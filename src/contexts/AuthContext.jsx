import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({
    token: '',
    expireAt: '',
    isLogin: undefined,
  });
  const { token, expireAt, isLogin } = auth;
  const value = useMemo(
    () => ({ token, expireAt, isLogin, loading, setAuth }),
    [token, expireAt],
  );
  useEffect(() => {
    const getAuth = () => {
      setLoading(true);
      setAuth((prev) => {
        const newToken = localStorage.getItem('accessToken');
        const newExpireAt = localStorage.getItem('expireAt');
        const expireTime = new Date(newExpireAt).getTime();
        const currentTime = new Date().getTime();
        return {
          ...prev,
          token: newToken,
          expireAt: newExpireAt,
          isLogin: newToken && expireTime > currentTime,
        };
      });
      setLoading(false);
    };
    getAuth();
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
