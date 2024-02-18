import axios from 'axios';
import API_PATH from '../constants/api';

// const defaultConfigure = {
//   baseURL: process.env.REACT_APP_API_SERVER_URL,
//   timeout: 5000,
// };

// const authConfigure = {
//   baseURL: process.env.REACT_APP_API_SERVER_URL,
//   timeout: 5000,
//   withCredentials: true,
// };

const MockConfigure = {
  timeout: 1000,
  withCredentials: true,
};

const defaultAxios = axios.create(MockConfigure);
const authAxios = axios.create(MockConfigure);
const accessToken = localStorage.getItem('accessToken') ?? '';

authAxios.interceptors.request.use(
  (config) => {
    if (config.headers.authorization) {
      return config;
    }

    return {
      ...config,
      headers: { ...config.headers, Authorization: accessToken },
    };
  },
  (error) => Promise.reject(error),
);

authAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    const expireAt = localStorage.getItem('expireAt') ?? '0';
    const expireTime = new Date(expireAt);
    const currentTime = new Date().getTime();
    const isRefresh = accessToken && expireTime < currentTime;

    if (!isRefresh) {
      return Promise.reject(error);
    }

    try {
      const response = await axios.post(API_PATH.refresh, {
        headers: { Authorization: accessToken },
      });
      const { accessToken: newAccessToken, expireAt: newExpireAt } =
        response.data.result;
      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('expireAt', newExpireAt);
      prevRequest.sent = true;
      prevRequest.headers.authorization = `${newAccessToken}`;
      return authAxios(prevRequest);
    } catch (refreshError) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('expireAt');
      window.location.href = '/';
      refreshError.response.data.message = '로그인 정보가 만료되었습니다.';
      return Promise.reject(refreshError);
    }
  },
);

export { authAxios, defaultAxios };
