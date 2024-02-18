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
    token: localStorage.getItem('accessToken'),
    expireAt: localStorage.getItem('expireAt'),
  });
  const expireTime = new Date(auth.expireAt).getTime();
  const currentTime = new Date().getTime();
  const [isLogin, setIsLogin] = useState(
    auth.token && expireTime > currentTime,
  );
  const { token, expireAt } = auth;
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
        const newExpireTime = new Date(newExpireAt).getTime();
        const newCurrentTime = new Date().getTime();
        setIsLogin(newToken && newExpireTime > newCurrentTime);

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
