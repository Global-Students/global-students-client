import axios from 'axios';
import API_PATH from '../constants/api';

// const AxiosConfigure = {
//   baseURL: process.env.API_SERVER_URL,
//   timeout: 1000,
//   withCredentials: true,
// };

const MockConfigure = {
  timeout: 1000,
  withCredentials: true,
};

const authAxios = axios.create(MockConfigure);
const accessToken = localStorage.getItem('accessToken') ?? '';

authAxios.interceptors.request.use(
  (config) => {
    if (config.headers.authorization) {
      return config;
    }

    return {
      ...config,
      headers: { ...config.headers, authorization: accessToken },
    };
  },
  (error) => Promise.reject(error),
);

authAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    const expireAt = new Date(localStorage.getItem('expireAt'));
    const currentTime = new Date().getTime();

    if (expireAt > currentTime) {
      return Promise.reject(error);
    }

    prevRequest.sent = true;
    const response = await authAxios.post(API_PATH.refresh);
    const { accessToken: newAccessToken, expireAt: newExpireAt } =
      response.data.result;
    localStorage.setItem('accessToken', newAccessToken);
    localStorage.setItem('expireAt', newExpireAt);
    prevRequest.headers.authorization = `${newAccessToken}`;

    return authAxios(prevRequest);
  },
);

export default authAxios;
