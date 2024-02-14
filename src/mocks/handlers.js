import { http, HttpResponse } from 'msw';

const handlers = [
  http.post(
    `/auth/login`,
    () =>
      HttpResponse.json(
        {
          isSuccess: true,
          code: 'COMMON201',
          message: '생성하였습니다',
          result: {
            accessToken: 'Bearer Token',
            refreshToken: '9c8b3ad5-50e1-4db1-b180-3f4a11212d1d',
            expireAt: '2023-03-02T11:44:30.327959',
          },
        },
        {
          headers: { Authorization: 'Bearer {JWT_TOKEN}' },
        },
      ),
    // HttpResponse.json({ message: '로그인 실패' }, { status: 400 }),
  ),
  http.post('/auth/refresh', () =>
    HttpResponse.json({
      isSuccess: true,
      code: 'COMMON201',
      message: '생성하였습니다',
      result: {
        accessToken:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzA3NDk4NzQ0LCJleHAiOjE3MDc0OTg3ODB9.nq2JmdT4ydYulq6DUM-b0b9ofBjbKPm_rvg_k7ErZJE',
        expireAt: '2024-02-20T03:21:19',
      },
    }),
  ),
  http.get(`/auth/join/check-id/:userId`, () =>
    HttpResponse.json({
      isSuccess: true,
      message: 'OK - user id',
    }),
  ),
  http.get(
    `/auth/join/check-nickname/:nickname`,
    () =>
      HttpResponse.json({
        isSuccess: true,
        message: 'OK - nickname',
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'CHECK409_2',
    //       message: 'fail - nickname',
    //     },
    //     { status: 400 },
    //   ),
  ),
  http.post(
    `/auth/join/information`,
    () =>
      HttpResponse.json({
        isSuccess: true,
        message: '회원가입 성공',
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'COMMON500',
    //       // code: 'COMMON503',
    //       message: 'fail - signUp',
    //     },
    //     { status: 500 },
    //   ),
    // const baseUrl = ' http://localhost';
  ),
  http.post('/user/find-id', () =>
    HttpResponse.json({
      isSuccess: true,
      code: 'LOGIN200_2',
      message: 'find id - ok',
    }),
  ),
  http.post(
    'user/find-password',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'LOGIN201_1',
        message: 'find password - ok',
      }),
    // () =>
    // HttpResponse.json(
    //   {
    //     isSuccess: false,
    //     code: 'VERIFY400_3',
    //     message: 'find password - fail',
    //   },
    //   {
    //     status: 400,
    //   },
    // ),
  ),
  http.post(
    'user/find-password/code',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'VERIFY200_1',
        message: 'code verification - ok',
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'CHECK403_2',
    //       message: 'code verification - fail',
    //     },
    //     {
    //       status: 400,
    //     },
    //   ),
  ),
];

export default handlers;
